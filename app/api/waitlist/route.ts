import { NextResponse } from "next/server"
import { z } from "zod"
import type { CreateEmailOptions, ErrorResponse, Resend as ResendClient } from "resend"
import { getResendClient } from "@/lib/resend"

export const runtime = "nodejs"

const DEFAULT_FROM_EMAIL = "Tracer <info@tracersecurity.ca>"

const waitlistRequestSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  language: z.enum(["en", "fr"]),
  consent: z.literal(true),
  source: z
    .string()
    .trim()
    .min(1)
    .max(80)
    .regex(/^[A-Za-z0-9_-]+$/)
    .default("waitlist_modal"),
})

type WaitlistRequest = z.infer<typeof waitlistRequestSchema>

export async function POST(request: Request) {
  let payload: WaitlistRequest

  try {
    payload = waitlistRequestSchema.parse(await request.json())
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof z.ZodError
            ? "Invalid waitlist submission."
            : "Invalid JSON body.",
      },
      { status: 400 }
    )
  }

  try {
    const resend = getResendClient()
    const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL
    const internalTo = process.env.RESEND_INTERNAL_TO
    const contactsEnabled = process.env.RESEND_CONTACTS_ENABLED === "true"

    const submittedAt = new Date().toISOString()
    const contactProperties = {
      language: payload.language,
      source: payload.source,
      consent: "true",
      submitted_at: submittedAt,
    }

    const [contactResult, internalNotificationResult, confirmationResult] =
      await Promise.all([
        contactsEnabled
          ? captureWaitlistStep(
              "contact_upsert",
              upsertWaitlistContact(resend, payload.email, contactProperties)
            )
          : Promise.resolve(skipWaitlistStep("contact_upsert")),
        captureWaitlistStep(
          "internal_notification",
          internalTo
            ? sendResendEmail(
                resend,
                buildInternalNotificationEmail({
                  email: payload.email,
                  from,
                  to: internalTo,
                  language: payload.language,
                  source: payload.source,
                  submittedAt,
                })
              )
            : Promise.reject(new Error("Missing RESEND_INTERNAL_TO"))
        ),
        captureWaitlistStep(
          "confirmation_email",
          sendResendEmail(
            resend,
            buildConfirmationEmail({
              email: payload.email,
              from,
              replyTo: internalTo || from,
              language: payload.language,
              source: payload.source,
            })
          )
        ),
      ])

    for (const result of [
      contactResult,
      internalNotificationResult,
      confirmationResult,
    ]) {
      if (!result.ok && !("skipped" in result)) {
        console.warn(`Waitlist ${result.step} failed:`, result.error)
      }
    }

    if (!contactResult.ok && !internalNotificationResult.ok) {
      throw new Error("Waitlist capture failed")
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Waitlist submission failed:", error)
    return NextResponse.json(
      { error: "Unable to join the waitlist right now." },
      { status: 500 }
    )
  }
}

async function upsertWaitlistContact(
  resend: ResendClient,
  email: string,
  properties: Record<string, string>
) {
  const createResponse = await resend.contacts.create({
    email,
    unsubscribed: false,
    properties,
  })

  if (!createResponse.error) {
    return
  }

  const updateResponse = await resend.contacts.update({
    email,
    unsubscribed: false,
    properties,
  })

  if (updateResponse.error) {
    throw new Error(
      `Resend contact upsert failed: ${formatResendError(updateResponse.error)}`
    )
  }
}

async function sendResendEmail(
  resend: ResendClient,
  options: CreateEmailOptions
) {
  const response = await resend.emails.send(options)

  if (response.error) {
    throw new Error(`Resend email failed: ${formatResendError(response.error)}`)
  }
}

async function captureWaitlistStep(step: string, promise: Promise<void>) {
  try {
    await promise
    return { ok: true, step } as const
  } catch (error) {
    return { ok: false, step, error } as const
  }
}

function skipWaitlistStep(step: string) {
  return { ok: false, step, skipped: true } as const
}

function buildConfirmationEmail({
  email,
  from,
  replyTo,
  language,
  source,
}: {
  email: string
  from: string
  replyTo: string
  language: WaitlistRequest["language"]
  source: string
}): CreateEmailOptions {
  const copy =
    language === "fr"
      ? {
          lang: "fr",
          subject: "Votre inscription à la liste d'attente Tracer est confirmée",
          preview:
            "Votre inscription est confirmée. Les nouvelles de lancement viendront de info@tracersecurity.ca.",
          brandTagline: "Sécurité de la recherche",
          headerTitle: "Votre inscription est confirmée",
          headerSubtitle: "Lancement le 1er juin 2026.",
          greeting: "Bonjour,",
          paragraphs: [
            "Merci d'avoir rejoint la liste d'attente Tracer. Nous vous enverrons les nouvelles de lancement, les étapes d'accès anticipé et l'évolution du produit depuis info@tracersecurity.ca.",
            "Tracer est conçu pour aider les institutions de recherche à mener des vérifications diligentes structurées, sourcées et auditables pour leurs partenariats de recherche.",
            "Vous faites maintenant partie du premier groupe que nous tiendrons informé à mesure que l'accès anticipé s'ouvre.",
          ],
          nextTitle: "La suite",
          nextSteps: [
            "Nous vous informerons lorsque Tracer ouvrira l'accès anticipé.",
            "Les premières institutions auront une intégration prioritaire et pourront orienter les flux de vérification.",
            "Vous pouvez répondre à ce courriel si un besoin de sécurité de la recherche mérite notre attention.",
          ],
          ctaText: "Visiter le site Tracer",
          ctaHref: "https://www.tracersecurity.ca",
          signoff: "À bientôt,\nL'équipe Tracer",
          footer:
            "Vous recevez ce courriel parce que vous avez demandé à rejoindre la liste d'attente de Tracer. Vous pouvez vous désabonner à tout moment en répondant à ce courriel.",
        }
      : {
          lang: "en",
          subject: "You're on the Tracer waitlist",
          preview:
            "You're on the list. Launch and early access updates will come from info@tracersecurity.ca.",
          brandTagline: "Research Security",
          headerTitle: "Your waitlist spot is confirmed",
          headerSubtitle: "Launching June 1, 2026.",
          greeting: "Hi,",
          paragraphs: [
            "Thanks for joining the Tracer waitlist. We'll send launch updates, early access notes, and product progress from info@tracersecurity.ca.",
            "Tracer is built to help research institutions run structured, source-backed, and auditable due diligence for research partnerships.",
            "You're now part of the first group we'll keep informed as early access opens.",
          ],
          nextTitle: "What happens next",
          nextSteps: [
            "We'll notify you when Tracer opens early access.",
            "Founding institutions get priority onboarding and direct input on screening workflows.",
            "You can reply to this email if there is a research security workflow you want us to understand.",
          ],
          ctaText: "Visit Tracer",
          ctaHref: "https://www.tracersecurity.ca",
          signoff: "Best,\nThe Tracer team",
          footer:
            "You are receiving this email because you asked to join the Tracer waitlist. You can unsubscribe at any time by replying to this email.",
        }

  return {
    from,
    to: email,
    replyTo,
    subject: copy.subject,
    text: [
      "Tracer",
      copy.headerSubtitle,
      "",
      copy.headerTitle,
      "",
      copy.greeting,
      "",
      ...copy.paragraphs.flatMap((paragraph) => [paragraph, ""]),
      copy.nextTitle,
      ...copy.nextSteps.map((step) => `- ${step}`),
      "",
      copy.ctaText,
      copy.ctaHref,
      "",
      copy.signoff,
      "",
      copy.footer,
    ].join("\n"),
    html: renderEmailHtml({
      lang: copy.lang,
      preview: copy.preview,
      brandTagline: copy.brandTagline,
      headerTitle: copy.headerTitle,
      headerSubtitle: copy.headerSubtitle,
      greeting: copy.greeting,
      paragraphs: copy.paragraphs.map(escapeHtml),
      nextTitle: copy.nextTitle,
      nextSteps: copy.nextSteps,
      ctaText: copy.ctaText,
      ctaHref: copy.ctaHref,
      signoff: copy.signoff,
      footer: copy.footer,
    }),
    tags: [
      { name: "category", value: "waitlist" },
      { name: "language", value: language },
      { name: "source", value: toResendTagValue(source) },
    ],
  }
}

function buildInternalNotificationEmail({
  email,
  from,
  to,
  language,
  source,
  submittedAt,
}: {
  email: string
  from: string
  to: string
  language: WaitlistRequest["language"]
  source: string
  submittedAt: string
}): CreateEmailOptions {
  const safeEmail = escapeHtml(email)
  const safeLanguage = escapeHtml(language)
  const safeSource = escapeHtml(source)
  const safeSubmittedAt = escapeHtml(submittedAt)

  return {
    from,
    to,
    replyTo: email,
    subject: "New Tracer waitlist signup",
    text: [
      "New Tracer waitlist signup",
      "",
      `Email: ${email}`,
      `Language: ${language}`,
      `Source: ${source}`,
      `Submitted at: ${submittedAt}`,
    ].join("\n"),
    html: renderEmailHtml({
      lang: "en",
      preview: "A new visitor joined the Tracer waitlist.",
      brandTagline: "Research Security",
      headerTitle: "New waitlist signup",
      headerSubtitle: "Internal notification",
      paragraphs: [
        `<strong>Email:</strong> ${safeEmail}`,
        `<strong>Language:</strong> ${safeLanguage}`,
        `<strong>Source:</strong> ${safeSource}`,
        `<strong>Submitted at:</strong> ${safeSubmittedAt}`,
      ],
      footer: "This notification was sent by the Tracer website waitlist form.",
    }),
    tags: [
      { name: "category", value: "waitlist_internal" },
      { name: "language", value: language },
      { name: "source", value: toResendTagValue(source) },
    ],
  }
}

function renderEmailHtml({
  lang,
  preview,
  brandTagline,
  headerTitle,
  headerSubtitle,
  greeting,
  paragraphs,
  nextTitle,
  nextSteps = [],
  ctaText,
  ctaHref,
  signoff,
  footer,
}: {
  lang: string
  preview: string
  brandTagline: string
  headerTitle: string
  headerSubtitle: string
  greeting?: string
  paragraphs: string[]
  nextTitle?: string
  nextSteps?: string[]
  ctaText?: string
  ctaHref?: string
  signoff?: string
  footer: string
}) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="${escapeHtml(lang)}">
  <head>
    <meta content="width=device-width" name="viewport" />
    <link rel="preload" as="image" href="https://tracersecurity.ca/brand/tracer-logo-w-v1.png" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="telephone=no,address=no,email=no,date=no,url=no" name="format-detection" />
    <title>${escapeHtml(preview)}</title>
    <style>
      :root { color-scheme: light only; supported-color-schemes: light only; }
      body, .force-light { background-color: #f6f6f5 !important; }
      .container { margin-left: auto !important; margin-right: auto !important; }
      .email-card, .content-pad { background-color: #ffffff !important; }
      .header-pad { background-color: #17315c !important; background-image: linear-gradient(135deg,#17315c 0%,#1b3e75 58%,#2459b8 160%) !important; }
      .footer-pad { background-color: #fbfbfa !important; }
      .body-text { color: #333333 !important; }
      .strong-text { color: #1d1d1f !important; }
      .muted-text { color: #656565 !important; }
      .brand-white { color: #ffffff !important; }
      .brand-muted { color: #dbe6ff !important; }
      .brand-link { color: #1d54b5 !important; }
      @media screen and (max-width: 680px) {
        .container { width: 100% !important; }
        .outer-pad { padding: 22px 14px !important; }
        .header-pad { padding: 24px 22px 22px !important; }
        .content-pad { padding: 28px 22px 8px !important; }
        .footer-pad { padding: 22px !important; }
        .h1 { font-size: 28px !important; line-height: 34px !important; }
        .brand-title { font-size: 16px !important; }
        .brand-subtitle { font-size: 9px !important; }
        .button { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
      }
      @media (prefers-color-scheme: dark) {
        body, .force-light { background-color: #f6f6f5 !important; }
        .email-card, .content-pad { background-color: #ffffff !important; }
        .header-pad { background-color: #17315c !important; background-image: linear-gradient(135deg,#17315c 0%,#1b3e75 58%,#2459b8 160%) !important; }
        .footer-pad { background-color: #fbfbfa !important; }
        .body-text { color: #333333 !important; }
        .strong-text { color: #1d1d1f !important; }
        .muted-text { color: #656565 !important; }
        .brand-white { color: #ffffff !important; }
        .brand-muted { color: #dbe6ff !important; }
        .brand-link { color: #1d54b5 !important; }
      }
    </style>
  </head>
  <body style="margin:0;background-color:#ffffff">
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0" data-skip-in-text="true">${escapeHtml(preview)}</div>
    <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tr>
        <td style="background-color:#ffffff">
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="force-light" style="width:100%;min-width:100%;background-color:#f6f6f5;text-align:center">
            <tr>
              <td class="outer-pad" align="center" style="padding:34px 18px;text-align:center">
                <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" class="container email-card" style="width:640px;max-width:640px;border-collapse:separate;border-spacing:0;background-color:#ffffff;border:1px solid #e6e6e3;border-radius:18px;overflow:hidden;box-shadow:0 18px 50px rgba(17,24,39,0.08);text-align:left">
                  <tr>
                    <td class="header-pad" style="padding:28px 32px 26px;background-color:#17315c;background-image:linear-gradient(135deg,#17315c 0%,#1b3e75 58%,#2459b8 160%)">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td align="left">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                                <td style="padding-right:10px">
                                  <img alt="Tracer" height="34" src="https://tracersecurity.ca/brand/tracer-logo-w-v1.png" style="display:block;outline:none;border:0;text-decoration:none;max-width:100%;width:38px;height:34px" width="38" />
                                </td>
                                <td>
                                  <div class="brand-title brand-white" style="font-family:Inter,Arial,Helvetica,sans-serif;color:#ffffff;font-size:17px;line-height:18px;font-weight:700;letter-spacing:0;text-transform:uppercase">
                                    <p style="margin:0;padding:0">Tracer</p>
                                  </div>
                                  <div class="brand-subtitle brand-muted" style="font-family:Inter,Arial,Helvetica,sans-serif;color:#dbe6ff;font-size:10px;line-height:13px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase">
                                    <p style="margin:0;padding:0">${escapeHtml(brandTagline)}</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top:34px">
                            <h1 class="h1 brand-white" style="margin:0;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#ffffff;font-size:34px;line-height:40px;font-weight:650;letter-spacing:0">${escapeHtml(headerTitle)}</h1>
                            <p class="brand-muted" style="margin:14px 0 0;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#dbe6ff;font-size:15px;line-height:24px;font-weight:400">${escapeHtml(headerSubtitle)}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="content-pad" style="padding:34px 42px 10px;background-color:#ffffff">
                      ${greeting ? `<p class="strong-text" style="margin:0 0 18px;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#1d1d1f;font-size:16px;line-height:26px">${escapeHtml(greeting)}</p>` : ""}
                      ${renderBodyParagraphs(paragraphs)}
                      ${renderNextSteps(nextTitle, nextSteps)}
                      ${ctaText && ctaHref ? renderEmailButton(ctaText, ctaHref) : ""}
                      ${signoff ? `<p class="strong-text" style="margin:0 0 28px;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#1d1d1f;font-size:16px;line-height:25px">${escapeHtml(signoff).replace(/\n/g, "<br />")}</p>` : ""}
                    </td>
                  </tr>
                  <tr>
                    <td class="footer-pad" style="padding:24px 42px 30px;background-color:#fbfbfa;border-top:1px solid #e6e6e3">
                      <p class="muted-text" style="margin:0;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#6f7378;font-size:12px;line-height:19px"><strong>TRACER Research Security</strong></p>
                      <hr style="width:100%;border:none;border-color:transparent;border-top:1px solid #eaeaea;margin:16px 0" />
                      <p class="muted-text" style="margin:0;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#8a8a8a;font-size:11px;line-height:18px">${escapeHtml(footer)}</p>
                      <p class="muted-text" style="margin:12px 0 0;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#8a8a8a;font-size:11px;line-height:18px">Tracer Research Security Inc.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function renderBodyParagraphs(paragraphs: string[]) {
  return paragraphs
    .map(
      (paragraph) =>
        `<p class="body-text" style="margin:0 0 18px;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#333333;font-size:16px;line-height:26px">${paragraph}</p>`
    )
    .join("")
}

function renderEmailButton(text: string, href: string) {
  return `
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:4px 0 28px;padding:0">
                        <tr>
                          <td align="center" style="border-radius:999px">
                            <a class="button" href="${escapeHtml(href)}" rel="noopener noreferrer nofollow" style="color:#ffffff;text-decoration:none;display:inline-block;padding:13px 22px;font-family:Inter,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:700;border-radius:999px;background-color:#1d54b5" target="_blank">${escapeHtml(text)}</a>
                          </td>
                        </tr>
                      </table>`
}

function renderNextSteps(title?: string, steps: string[] = []) {
  if (!title || steps.length === 0) {
    return ""
  }

  return `
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:6px 0 24px;border:1px solid #e6e6e3;background:#fbfbfa;border-radius:14px;">
                        <tr>
                          <td style="padding:20px 22px;">
                            <p class="strong-text" style="margin:0 0 12px;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#1d1d1f;font-size:13px;line-height:18px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase">${escapeHtml(title)}</p>
                      ${steps
                        .map(
                          (step) =>
                            `<p class="body-text" style="margin:0 0 10px;padding:0;font-family:Inter,Arial,Helvetica,sans-serif;color:#333333;font-size:14px;line-height:22px;">• ${escapeHtml(step)}</p>`
                        )
                        .join("")}
                          </td>
                        </tr>
                      </table>`
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function toResendTagValue(value: string) {
  const normalized = value.replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 256)
  return normalized || "unspecified"
}

function formatResendError(error: ErrorResponse) {
  return `${error.name}: ${error.message}`
}
