import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/site-data";
import { LoginModal } from "@/components/login-modal";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-500 ${
        scrolled
          ? "border-line-paper bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-[1120px] items-center justify-between py-4">
        <Link to="/" className="font-serif text-[1.4rem] font-semibold text-ink">
          Micro<span className="text-brass">Punji</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLogin(true)}
            className="rounded-md border border-line-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Client login
          </button>
        </nav>

        <button
          className="md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        className="h-px origin-left bg-brass"
        style={{ scaleX: progress }}
        aria-hidden
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            className="overflow-hidden border-t border-line-paper bg-paper md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block border-b border-line-paper px-[4%] py-3.5 text-sm font-medium text-ink-soft"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                setLogin(true);
              }}
              className="block w-full px-[4%] py-3.5 text-left text-sm font-semibold text-brass"
            >
              Client login
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      <LoginModal open={login} onClose={() => setLogin(false)} />
    </header>
  );
}
