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
          subject: "Vous etes sur la liste d'attente Tracer",
          preview: "Merci d'avoir rejoint la liste d'attente Tracer.",
          heading: "Vous etes sur la liste.",
          body:
            "Merci d'avoir rejoint la liste d'attente Tracer. Nous vous informerons du lancement et des prochaines etapes d'acces anticipe.",
          footer:
            "Vous pouvez vous desabonner a tout moment en repondant a ce courriel.",
        }
      : {
          subject: "You're on the Tracer waitlist",
          preview: "Thanks for joining the Tracer waitlist.",
          heading: "You're on the list.",
          body:
            "Thanks for joining the Tracer waitlist. We'll notify you about launch updates and early access next steps.",
          footer:
            "You can unsubscribe at any time by replying to this email.",
        }

  return {
    from,
    to: email,
    replyTo,
    subject: copy.subject,
    text: `${copy.heading}\n\n${copy.body}\n\n${copy.footer}`,
    html: renderEmailHtml({
      preview: copy.preview,
      heading: copy.heading,
      body: copy.body,
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
  heading,
  body,
  footer,
}: {
  preview: string
  heading: string
  body: string
  footer: string
}) {
  return `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${escapeHtml(preview)}</title>
  </head>
  <body style="margin:0;background:#f6f7f9;color:#111827;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none!important;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">${escapeHtml(preview)}</span>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f7f9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;">
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 18px;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#2459b8;">Tracer</p>
                <h1 style="margin:0 0 16px;font-size:28px;line-height:1.2;color:#111827;">${escapeHtml(heading)}</h1>
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#374151;">${body}</p>
                <p style="margin:0;font-size:13px;line-height:1.5;color:#6b7280;">${escapeHtml(footer)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
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
