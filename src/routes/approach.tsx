import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PROCESS } from "@/lib/site-data";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — How a MicroPunji Mandate Comes Together" },
      {
        name: "description",
        content:
          "Consultation, allocation, execution, reporting: the four stages behind every MicroPunji mandate, with rules agreed before capital moves.",
      },
      {
        property: "og:title",
        content: "Our Approach — How a MicroPunji Mandate Comes Together",
      },
      {
        property: "og:description",
        content:
          "Consultation, allocation, execution, and reporting — the four stages behind every mandate.",
      },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="How a mandate comes together."
        lede="Four stages, each with a decision recorded in writing before the next one begins. Nothing about a portfolio should be a surprise to the person who owns it."
      />

      <section className="mx-auto w-[92%] max-w-[1120px] py-20">
        <ol className="relative">
          <motion.div
            className="absolute top-0 left-[7px] w-px origin-top bg-brass md:left-[11px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "100%" }}
            aria-hidden
          />
          {PROCESS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.1}>
              <li className="relative pb-12 pl-10 last:pb-0 md:pl-16">
                <span className="absolute top-2 left-0 flex h-4 w-4 items-center justify-center rounded-full border border-brass bg-paper md:h-6 md:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                </span>
                <span className="figure-mono text-sm text-brass">{step.index}</span>
                <h3 className="mt-2 text-[1.25rem]">{step.title}</h3>
                <p className="mt-2 max-w-[56ch] text-ink-soft">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="surface-ink surface-grid">
        <div className="relative mx-auto grid w-[92%] max-w-[1120px] gap-8 py-16 md:grid-cols-3">
          {[
            {
              k: "Position sizing",
              v: "Set in advance, within bands agreed at onboarding — never improvised mid-cycle.",
            },
            {
              k: "Rebalancing",
              v: "Triggered by drift thresholds and calendar cadence, not by headlines.",
            },
            {
              k: "Reporting",
              v: "Quarterly to monthly by tier, with scheduled portfolio reviews.",
            },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 0.1}>
              <div className="border-t border-line-ink pt-6">
                <p className="eyebrow-on-ink">{item.k}</p>
                <p className="mt-3 text-on-ink-soft">{item.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-[92%] max-w-[1120px] flex-wrap items-center justify-between gap-6 py-16">
        <h2 className="max-w-[24ch] text-[clamp(1.5rem,2.2vw,2rem)]">
          Which tier fits your commitment?
        </h2>
        <Link
          to="/tiers"
          className="group inline-flex items-center gap-2 rounded-md bg-brass px-5 py-3 text-sm font-semibold text-ink transition-all hover:bg-brass-soft hover:shadow-[var(--shadow-brass)]"
        >
          Compare investment tiers
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}
