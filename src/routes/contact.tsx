import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { DISCLAIMER, TIERS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MicroPunji — Talk to an Advisor" },
      {
        name: "description",
        content:
          "Tell us your goals and the mandate tier you're considering. MicroPunji advisors respond within two business days.",
      },
      { property: "og:title", content: "Contact MicroPunji — Talk to an Advisor" },
      {
        property: "og:description",
        content:
          "Request a consultation about Foundation, Momentum, or Apex mandates. Response within two business days.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState<string | null>(null);

  return (
    <section className="surface-ink surface-grid min-h-[70vh]">
      <div className="relative mx-auto grid w-[92%] max-w-[1120px] gap-14 py-20 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <motion.p
            className="eyebrow-on-ink"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.p>
          <motion.h1
            className="mt-4 text-[clamp(2rem,3.6vw,3rem)] text-on-ink"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Talk to an advisor.
          </motion.h1>
          <p className="mt-4 max-w-[46ch] text-on-ink-soft">
            Tell us about your goals and which tier you're considering. We'll follow up to
            schedule a consultation.
          </p>

          <dl className="mt-8 border-t border-line-ink pt-6">
            <div className="py-2">
              <dt className="text-[0.8rem] text-on-ink-soft">Email</dt>
              <dd className="figure-mono mt-1">
                <a
                  href="mailto:advisors@micropunji.com"
                  className="text-brass-soft transition-colors hover:text-brass"
                >
                  advisors@micropunji.com
                </a>
              </dd>
            </div>
            <div className="py-2">
              <dt className="text-[0.8rem] text-on-ink-soft">Response time</dt>
              <dd className="figure-mono mt-1 text-on-ink">Within two business days</dd>
            </div>
          </dl>

          <p className="mt-8 max-w-[60ch] text-[0.82rem] text-on-ink-soft">{DISCLAIMER}</p>
        </div>

        <Reveal>
          <form
            className="rounded-lg border border-line-ink bg-ink-2/50 p-7 backdrop-blur-sm md:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("fullName") as HTMLInputElement).value
                .trim()
                .split(" ")[0];
              setSent(
                `Thank you, ${name || "there"}. An advisor will be in touch within two business days.`,
              );
              form.reset();
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="fullName" autoComplete="name" />
              <Field label="Email" name="email" type="email" autoComplete="email" />
            </div>

            <div className="mt-5">
              <Label htmlFor="tierInterest">Tier of interest</Label>
              <select
                id="tierInterest"
                name="tierInterest"
                defaultValue="momentum"
                className="mt-2 w-full rounded-md border border-line-ink bg-ink px-3 py-2.5 text-sm text-on-ink outline-none transition-colors focus:border-brass-soft"
              >
                {TIERS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} — {t.price}
                  </option>
                ))}
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div className="mt-5">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-md border border-line-ink bg-ink px-3 py-2.5 text-sm text-on-ink outline-none transition-colors focus:border-brass-soft"
              />
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-md bg-brass px-5 py-3 text-sm font-semibold text-ink transition-all hover:bg-brass-soft hover:shadow-[var(--shadow-brass)]"
            >
              Send message
            </button>

            <div role="status" aria-live="polite" className="mt-4 min-h-6">
              {sent && (
                <motion.p
                  className="flex items-center gap-2 text-sm text-brass-soft"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Check className="h-4 w-4" />
                  {sent}
                </motion.p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="figure-mono block text-xs tracking-widest text-on-ink-soft uppercase"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-md border border-line-ink bg-ink px-3 py-2.5 text-sm text-on-ink outline-none transition-colors focus:border-brass-soft"
      />
    </div>
  );
}
