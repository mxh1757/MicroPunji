import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Ticker } from "@/components/ticker";
import { MARKETS } from "@/lib/site-data";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Markets — Asset Classes MicroPunji Allocates Across" },
      {
        name: "description",
        content:
          "Equities, digital assets, metals, global indices, and Apex-tier private deals — the asset classes inside a MicroPunji mandate.",
      },
      { property: "og:title", content: "Markets — Asset Classes MicroPunji Allocates Across" },
      {
        property: "og:description",
        content:
          "How MicroPunji uses equities, digital assets, metals, indices, and private deals inside client mandates.",
      },
    ],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Asset classes we allocate across."
        lede="Five building blocks, each with a defined role inside a mandate. Nothing is held because it is fashionable."
      />

      <Ticker />

      <section className="mx-auto w-[92%] max-w-[1120px] py-20">
        <div className="grid gap-px bg-line-paper md:grid-cols-2">
          {MARKETS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.07}>
              <article className="group h-full bg-paper p-8 transition-colors hover:bg-paper-2">
                <span className="figure-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl transition-colors group-hover:text-brass">
                  {m.title}
                </h2>
                <p className="mt-3 text-ink-soft">{m.body}</p>
                <p className="mt-3 max-w-[52ch] text-[0.9rem] text-ink-soft/80">
                  {m.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line-paper bg-paper-2">
        <div className="mx-auto flex w-[92%] max-w-[1120px] flex-wrap items-center justify-between gap-6 py-14">
          <p className="max-w-[48ch] text-ink-soft">
            Access widens with tier: indices and blue-chip equities at Foundation, private
            deals at Apex.
          </p>
          <Link
            to="/tiers"
            className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-on-ink transition-colors hover:bg-ink-3"
          >
            See tier access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
