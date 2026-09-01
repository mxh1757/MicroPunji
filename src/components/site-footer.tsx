import { Link } from "@tanstack/react-router";

import { DISCLAIMER, NAV_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="surface-ink surface-grid border-t border-line-ink">
      <div className="relative mx-auto grid w-[92%] max-w-[1120px] gap-10 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-xl font-semibold text-on-ink">
            Micro<span className="text-brass-soft">Punji</span>
          </p>
          <p className="mt-4 max-w-[60ch] text-[0.82rem] text-on-ink-soft">{DISCLAIMER}</p>
        </div>
        <nav className="flex flex-col gap-3 md:items-end">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-on-ink-soft transition-colors hover:text-brass-soft"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:advisors@micropunji.com"
            className="figure-mono text-sm text-brass-soft"
          >
            advisors@micropunji.com
          </a>
        </nav>
      </div>
      <div className="relative mx-auto w-[92%] max-w-[1120px] border-t border-line-ink py-6">
        <p className="figure-mono text-xs text-on-ink-soft">
          © {new Date().getFullYear()} MicroPunji. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
