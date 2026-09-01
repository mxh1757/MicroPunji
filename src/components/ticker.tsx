import { TICKER } from "@/lib/site-data";

export function Ticker() {
  const items = [...TICKER, ...TICKER];

  return (
    <div className="overflow-hidden border-y border-line-ink bg-ink/95 py-3">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="figure-mono flex items-center gap-3 text-[0.72rem] tracking-[0.16em] text-on-ink-soft uppercase"
          >
            <span className="h-1 w-1 rounded-full bg-brass-soft" aria-hidden />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
