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
          subject: "Vous êtes sur la liste d'attente Tracer",
          preview:
            "Votre inscription est confirmée. Les nouvelles de lancement viendront de info@tracersecurity.ca.",
          brandTagline: "Sécurité de la recherche",
          eyebrow: "Lancement le 1er juin 2026",
          heading: "Vous êtes sur la liste.",
          body:
            "Merci d'avoir rejoint la liste d'attente Tracer. Nous vous enverrons les nouvelles de lancement, les étapes d'accès anticipé et l'évolution du produit depuis info@tracersecurity.ca.",
          nextTitle: "La suite",
          nextSteps: [
            "Nous vous informerons lorsque Tracer ouvrira l'accès anticipé.",
            "Les premières institutions auront une intégration prioritaire et pourront orienter les flux de vérification.",
            "Vous pouvez répondre à ce courriel si un besoin de sécurité de la recherche mérite notre attention.",
          ],
          footer:
            "Vous pouvez vous désabonner à tout moment en répondant à ce courriel.",
        }
      : {
          subject: "You're on the Tracer waitlist",
          preview:
            "You're on the list. Launch and early access updates will come from info@tracersecurity.ca.",
          brandTagline: "Research Security",
          eyebrow: "Launching June 1, 2026",
          heading: "You're on the list.",
          body:
            "Thanks for joining the Tracer waitlist. We'll send launch updates, early access notes, and product progress from info@tracersecurity.ca.",
          nextTitle: "What happens next",
          nextSteps: [
            "We'll notify you when Tracer opens early access.",
            "Founding institutions get priority onboarding and direct input on screening workflows.",
            "You can reply to this email if there is a research security workflow you want us to understand.",
          ],
          footer:
            "You can unsubscribe at any time by replying to this email.",
        }

  return {
    from,
    to: email,
    replyTo,
    subject: copy.subject,
    text: [
      "Tracer",
      copy.eyebrow,
      "",
      copy.heading,
      "",
      copy.body,
      "",
      copy.nextTitle,
      ...copy.nextSteps.map((step) => `- ${step}`),
      "",
      copy.footer,
    ].join("\n"),
    html: renderEmailHtml({
      preview: copy.preview,
      brandTagline: copy.brandTagline,
      eyebrow: copy.eyebrow,
      heading: copy.heading,
      body: escapeHtml(copy.body),
      nextTitle: copy.nextTitle,
      nextSteps: copy.nextSteps,
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
      preview: "A new visitor joined the Tracer waitlist.",
      brandTagline: "Research Security",
      eyebrow: "Waitlist",
      heading: "New waitlist signup",
      body: [
        `<strong>Email:</strong> ${safeEmail}`,
        `<strong>Language:</strong> ${safeLanguage}`,
        `<strong>Source:</strong> ${safeSource}`,
        `<strong>Submitted at:</strong> ${safeSubmittedAt}`,
      ].join("<br />"),
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
  preview,
  brandTagline,
  eyebrow,
  heading,
  body,
  nextTitle,
  nextSteps = [],
  footer,
}: {
  preview: string
  brandTagline: string
  eyebrow: string
  heading: string
  body: string
  nextTitle?: string
  nextSteps?: string[]
  footer: string
}) {
  return `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${escapeHtml(preview)}</title>
  </head>
  <body style="margin:0;background:#11100e;color:#f8f7f3;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none!important;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">${escapeHtml(preview)}</span>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#11100e;padding:34px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;background:#191816;border:1px solid #34312b;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:32px 34px 10px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <p style="margin:0;font-size:14px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#ffffff;">Tracer</p>
                      <p style="margin:7px 0 0;font-size:9px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:#b9b4aa;">${escapeHtml(brandTagline)}</p>
                    </td>
                    <td align="right" style="vertical-align:top;">
                      <span style="display:inline-block;border:1px solid #3b5fbc;background:#2459b8;color:#ffffff;border-radius:999px;padding:8px 12px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">${escapeHtml(eyebrow)}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 34px 34px;">
                <h1 style="margin:0 0 18px;font-size:34px;line-height:1.12;letter-spacing:-0.01em;color:#f8f7f3;">${escapeHtml(heading)}</h1>
                <p style="margin:0;font-size:16px;line-height:1.7;color:#d8d3ca;">${body}</p>
                ${renderNextSteps(nextTitle, nextSteps)}
                <p style="margin:28px 0 0;border-top:1px solid #34312b;padding-top:18px;font-size:12px;line-height:1.6;color:#928c82;">${escapeHtml(footer)}</p>
              </td>
            </tr>
          </table>
          <p style="margin:18px 0 0;font-size:11px;line-height:1.5;color:#777168;">Tracer Research Security · tracersecurity.ca</p>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function renderNextSteps(title?: string, steps: string[] = []) {
  if (!title || steps.length === 0) {
    return ""
  }

  return `
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:28px;border:1px solid #2f467a;background:#15203a;border-radius:18px;">
                  <tr>
                    <td style="padding:22px;">
                      <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#8fb0ff;">${escapeHtml(title)}</p>
                      ${steps
                        .map(
                          (step) =>
                            `<p style="margin:0 0 10px;font-size:14px;line-height:1.6;color:#eef2ff;">• ${escapeHtml(step)}</p>`
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
