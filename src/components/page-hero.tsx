import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-ink surface-grid">
      <div className="relative mx-auto w-[92%] max-w-[1120px] py-20 md:py-24">
        <motion.p
          className="eyebrow-on-ink"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-[20ch] text-[clamp(2.1rem,4vw,3.2rem)] text-on-ink"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-[56ch] text-on-ink-soft"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {lede}
        </motion.p>
        {children}
      </div>
    </section>
  );
}
