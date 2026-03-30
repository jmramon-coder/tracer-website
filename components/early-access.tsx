"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

export function EarlyAccess() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="early-access" className="bg-background py-32 md:py-48 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Early Access
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] mb-8">
              <span className="font-sans font-extralight">Join the</span>
              <br />
              <span className="font-sans font-medium">first cohort</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mb-12">
              Tracer is opening early access to a small number of universities. If you&apos;re navigating research partnership screening, we&apos;d like to hear from you.
            </p>

            {/* Trust indicators */}
            <div className="space-y-4">
              {["Canadian data residency", "No commitment required", "Speak directly with our team"].map((indicator, index) => (
                <div key={index} className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="h-px w-8 bg-border" />
                  <span className="font-light">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            {isSubmitted ? (
              <div className="h-full flex items-center">
                <div className="w-full border border-border p-12 text-center">
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light tracking-tight mb-3">
                    Thank you
                  </h3>
                  <p className="text-muted-foreground font-light">
                    We&apos;ll be in touch within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <FloatingInput
                    id="name"
                    label="Name"
                    required
                    focused={focusedField === "name"}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <FloatingInput
                    id="institution"
                    label="Institution"
                    required
                    focused={focusedField === "institution"}
                    onFocus={() => setFocusedField("institution")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <FloatingInput
                    id="role"
                    label="Role"
                    required
                    focused={focusedField === "role"}
                    onFocus={() => setFocusedField("role")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <FloatingInput
                    id="email"
                    label="Email"
                    type="email"
                    required
                    focused={focusedField === "email"}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto gap-3 px-10 py-6 text-sm tracking-wide"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="h-4 w-4" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Access</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingInput({
  id,
  label,
  type = "text",
  required,
  focused,
  onFocus,
  onBlur,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  focused: boolean
  onFocus: () => void
  onBlur: () => void
}) {
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="peer w-full border-0 border-b border-border/60 bg-transparent py-4 text-foreground placeholder-transparent focus:border-foreground focus:outline-none transition-colors duration-300"
        placeholder={label}
        onFocus={onFocus}
        onBlur={(e) => {
          onBlur()
          setHasValue(e.target.value.length > 0)
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? "top-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            : "top-4 text-sm text-muted-foreground/60"
        }`}
      >
        {label}
      </label>
    </div>
  )
}
