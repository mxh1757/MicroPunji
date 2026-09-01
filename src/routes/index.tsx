import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { AllocationChart } from "@/components/allocation-chart";
import { Reveal } from "@/components/reveal";
import { Ticker } from "@/components/ticker";
import { MARKETS, PRINCIPLES, TIERS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MicroPunji — Capital, Managed With Discipline" },
      {
        name: "description",
        content:
          "MicroPunji is a private investment management firm running diversified mandates across equities, digital assets, metals, and global indices.",
      },
      { property: "og:title", content: "MicroPunji — Capital, Managed With Discipline" },
      {
        property: "og:description",
        content:
          "Private mandates across equities, digital assets, metals, and global indices — structured so clients always know what they own and why.",
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { label: "Asset classes covered", value: "4" },
  { label: "Mandate tiers", value: "3" },
  { label: "Market coverage", value: "Global" },
];

function Index() {
  return (
    <>
      <section className="surface-ink surface-grid overflow-hidden">
        <div className="relative mx-auto grid w-[92%] max-w-[1120px] items-center gap-12 py-20 md:grid-cols-[1.05fr_1fr] md:py-24">
          <div>
            <motion.p
              className="eyebrow-on-ink"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Private investment management
            </motion.p>
            <motion.h1
              className="mt-4 max-w-[13ch] text-[clamp(2.4rem,4.6vw,3.7rem)] text-on-ink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Capital, managed with <span className="shimmer-text">discipline.</span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-[46ch] text-[1.05rem] text-on-ink-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              We build and run diversified mandates across equities, digital assets, metals,
              and global indices, structured around one principle: clients should always
              understand exactly what they own and why.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
            >
              <Link
                to="/tiers"
                className="group inline-flex items-center gap-2 rounded-md bg-brass px-5 py-3 text-sm font-semibold text-ink transition-all hover:bg-brass-soft hover:shadow-[var(--shadow-brass)]"
              >
                View investment tiers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-line-ink px-5 py-3 text-sm font-semibold text-on-ink transition-colors hover:border-brass-soft hover:text-brass-soft"
              >
                Talk to an advisor
              </Link>
            </motion.div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line-ink pt-7">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <dt className="text-[0.78rem] text-on-ink-soft">{s.label}</dt>
                  <dd className="figure-mono mt-1 text-2xl text-brass-soft">{s.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="order-first md:order-none">
            <AllocationChart />
          </div>
        </div>
      </section>

      <Ticker />

      <section className="mx-auto w-[92%] max-w-[1120px] py-20">
        <Reveal>
          <p className="eyebrow">Principles</p>
          <h2 className="mt-3 max-w-[20ch] text-[clamp(1.7rem,2.6vw,2.3rem)]">
            Built around four principles
          </h2>
          <p className="mt-4 max-w-[62ch] text-ink-soft">
            Most of what determines an outcome is decided before a single dollar is deployed:
            how a mandate is structured, how positions are sized, and how often a client
            actually sees what's happening inside their own portfolio.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line-paper sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full bg-paper p-7 transition-colors hover:bg-paper-2">
                <span className="figure-mono text-xs text-brass">0{i + 1}</span>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Link
            to="/about"
            className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-brass"
          >
            More about the firm <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="surface-ink surface-grid">
        <div className="relative mx-auto w-[92%] max-w-[1120px] py-20">
          <Reveal>
            <p className="eyebrow-on-ink">Mandates</p>
            <h2 className="mt-3 text-[clamp(1.7rem,2.6vw,2.3rem)] text-on-ink">
              Three tiers, one standard of transparency
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.1}>
                <div
                  className={`hover-lift h-full rounded-lg border p-7 ${
                    t.featured
                      ? "border-brass bg-ink-3/60"
                      : "border-line-ink bg-ink-2/40"
                  }`}
                >
                  {t.featured && (
                    <span className="figure-mono text-[0.68rem] tracking-[0.16em] text-brass-soft uppercase">
                      Most selected
                    </span>
                  )}
                  <h3 className="mt-2 text-xl text-on-ink">{t.name}</h3>
                  <p className="figure-mono mt-1 text-lg text-brass-soft">{t.price}</p>
                  <p className="mt-4 text-sm text-on-ink-soft">{t.summary}</p>
                  <Link
                    to="/tiers"
                    hash={t.id}
                    className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-soft"
                  >
                    Compare tiers <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-[1120px] py-20">
        <Reveal>
          <p className="eyebrow">Coverage</p>
          <h2 className="mt-3 text-[clamp(1.7rem,2.6vw,2.3rem)]">
            Asset classes we allocate across
          </h2>
        </Reveal>
        <div className="mt-10 grid divide-y divide-line-paper md:grid-cols-5 md:divide-x md:divide-y-0">
          {MARKETS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="h-full px-0 py-5 md:px-6 md:py-0">
                <h3 className="text-base">{m.title}</h3>
                <p className="mt-2 text-[0.92rem] text-ink-soft">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line-paper bg-paper-2">
        <div className="mx-auto flex w-[92%] max-w-[1120px] flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-[24ch] text-[clamp(1.5rem,2.2vw,2rem)]">
              Ready to see what a structured mandate looks like?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-on-ink transition-colors hover:bg-ink-3"
            >
              Talk to an advisor
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
