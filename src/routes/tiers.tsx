import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LEDGER_ROWS, TIERS, type Tier } from "@/lib/site-data";

export const Route = createFileRoute("/tiers")({
  head: () => ({
    meta: [
      { title: "Investment Tiers — Foundation, Momentum, Apex | MicroPunji" },
      {
        name: "description",
        content:
          "Compare MicroPunji's three mandate tiers: Foundation at $50,000, Momentum at $100,000, and Apex at $500,000 — asset access, reporting cadence, and advisor contact.",
      },
      {
        property: "og:title",
        content: "Investment Tiers — Foundation, Momentum, Apex | MicroPunji",
      },
      {
        property: "og:description",
        content:
          "Three mandate levels differentiated by minimum commitment, asset access, and reporting cadence.",
      },
    ],
  }),
  component: TiersPage,
});

function TiersPage() {
  const [active, setActive] = useState<Tier>(TIERS[1] as Tier);

  return (
    <>
      <PageHero
        eyebrow="Investment tiers"
        title="Three mandate levels."
        lede="Differentiated by minimum commitment, asset access, and how often you hear from us. The standard of transparency does not change between them."
      />

      <section className="mx-auto w-[92%] max-w-[1120px] py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <button
                id={t.id}
                onClick={() => setActive(t)}
                className={`hover-lift h-full w-full rounded-lg border p-7 text-left transition-colors ${
                  active.id === t.id
                    ? "border-brass bg-card"
                    : "border-line-paper bg-paper hover:border-brass/50"
                }`}
                aria-pressed={active.id === t.id}
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="text-xl">{t.name}</h2>
                  {t.featured && (
                    <span className="figure-mono text-[0.65rem] tracking-[0.14em] text-brass uppercase">
                      Popular
                    </span>
                  )}
                </div>
                <p className="figure-mono mt-1 text-2xl text-brass">{t.price}</p>
                <p className="mt-4 text-sm text-ink-soft">{t.summary}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-lg border border-line-paper bg-card p-7 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow">Illustrative allocation</p>
                <h3 className="mt-2 text-2xl">{active.name} mandate</h3>
              </div>
              <p className="figure-mono text-sm text-ink-soft">
                Minimum {active.price}
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {active.allocation.map((slice, i) => (
                <div key={slice.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{slice.label}</span>
                    <span className="figure-mono text-ink-soft">{slice.weight}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper-2">
                    <motion.div
                      key={`${active.id}-${slice.label}`}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-brass)" }}
                      initial={{ width: 0 }}
                      animate={{ width: `${slice.weight}%` }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.82rem] text-ink-soft">
              Weights are illustrative only and vary with each client's risk profile and
              market conditions.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="surface-ink surface-grid">
        <div className="relative mx-auto w-[92%] max-w-[1120px] py-20">
          <Reveal>
            <p className="eyebrow-on-ink">Comparison ledger</p>
            <h2 className="mt-3 text-[clamp(1.7rem,2.6vw,2.3rem)] text-on-ink">
              Side by side
            </h2>
          </Reveal>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <caption className="sr-only">
                Comparison of MicroPunji investment tiers
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[18%] px-4 pb-6">
                    <span className="sr-only">Tier</span>
                  </th>
                  {TIERS.map((t) => (
                    <th
                      key={t.id}
                      scope="col"
                      className={`border-b-2 px-4 pb-6 align-top ${
                        active.id === t.id ? "border-brass" : "border-brass/30"
                      }`}
                    >
                      <span className="block font-serif text-xl text-on-ink">{t.name}</span>
                      <span className="figure-mono mt-1 block text-brass-soft">
                        {t.price}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LEDGER_ROWS.map((row) => (
                  <tr key={row} className="border-t border-line-ink">
                    <th
                      scope="row"
                      className="px-4 py-4 align-top font-medium whitespace-nowrap text-on-ink"
                    >
                      {row}
                    </th>
                    {TIERS.map((t) => (
                      <td
                        key={t.id}
                        className={`px-4 py-4 align-top text-[0.95rem] ${
                          active.id === t.id ? "text-on-ink" : "text-on-ink-soft"
                        }`}
                      >
                        {t.rows[row]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="px-4 pt-7">
                    <span className="sr-only">Get started</span>
                  </th>
                  {TIERS.map((t) => (
                    <td key={t.id} className="px-4 pt-7">
                      <Link
                        to="/contact"
                        className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                          t.featured
                            ? "bg-brass text-ink hover:bg-brass-soft"
                            : "border border-line-ink text-on-ink hover:border-brass-soft hover:text-brass-soft"
                        }`}
                      >
                        Start with {t.name}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-[92%] max-w-[1120px] flex-wrap items-center justify-between gap-6 py-16">
        <h2 className="max-w-[26ch] text-[clamp(1.5rem,2.2vw,2rem)]">
          Not sure which tier is right? Start with a conversation.
        </h2>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-on-ink transition-colors hover:bg-ink-3"
        >
          Talk to an advisor
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}
