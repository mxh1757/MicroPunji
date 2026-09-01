import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PRINCIPLES } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MicroPunji — How the Firm Is Organized" },
      {
        name: "description",
        content:
          "MicroPunji is organized around diversification, discipline, transparency, and access — the structure agreed before capital is deployed.",
      },
      { property: "og:title", content: "About MicroPunji — How the Firm Is Organized" },
      {
        property: "og:description",
        content:
          "Four principles behind every MicroPunji mandate: diversification, discipline, transparency, and access.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="Structure first, then capital."
        lede="Most of what determines an outcome is decided before a single dollar is deployed: how a mandate is structured, how positions are sized, and how often a client actually sees what's happening inside their own portfolio. MicroPunji is organized around getting that structure right first."
      />

      <section className="mx-auto grid w-[92%] max-w-[1120px] gap-12 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Principles</p>
          <h2 className="mt-3 text-[clamp(1.7rem,2.6vw,2.3rem)]">
            Built around four principles
          </h2>
          <p className="mt-4 text-ink-soft">
            They are not marketing language — each one maps to a written rule inside the
            mandate documents a client signs.
          </p>
        </Reveal>

        <ul>
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <li className="group border-t border-line-paper py-5 last:border-b">
                <div className="flex items-baseline gap-4">
                  <span className="figure-mono text-xs text-brass">0{i + 1}</span>
                  <div>
                    <h3 className="text-[1.05rem] transition-colors group-hover:text-brass">
                      {p.title}
                    </h3>
                    <p className="mt-1 max-w-[48ch] text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line-paper bg-paper-2">
        <div className="mx-auto flex w-[92%] max-w-[1120px] flex-wrap items-center justify-between gap-6 py-14">
          <p className="max-w-[46ch] text-ink-soft">
            The next step is understanding how a mandate is actually assembled, from first
            consultation through reporting cadence.
          </p>
          <Link
            to="/approach"
            className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-on-ink transition-colors hover:bg-ink-3"
          >
            See our approach
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
