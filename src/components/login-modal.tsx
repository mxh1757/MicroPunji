import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!open) return;
    setStatus("");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="loginModalTitle"
            className="relative w-full max-w-md rounded-lg border border-line-paper bg-card p-8 shadow-[var(--shadow-lift)]"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 rounded-sm p-1 text-ink-soft transition-colors hover:text-brass"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="eyebrow">Secure area</p>
            <h2 id="loginModalTitle" className="mt-2 text-2xl">
              Client login
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Demo access only — no real account is created and no data is sent anywhere.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const username = (form.elements.namedItem("username") as HTMLInputElement)
                  .value.trim();
                setStatus(`Welcome, ${username}. This is a demo — no account was created.`);
                form.reset();
                setTimeout(onClose, 1600);
              }}
            >
              <Field label="Username" name="username" autoComplete="username" />
              <Field
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-brass px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brass-soft"
              >
                Log in
              </button>
              <p role="status" aria-live="polite" className="min-h-5 text-sm text-brass">
                {status}
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
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
      <label htmlFor={name} className="figure-mono block text-xs tracking-widest uppercase text-ink-soft">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-md border border-line-paper bg-paper px-3 py-2.5 text-sm outline-none transition-colors focus:border-brass"
      />
    </div>
  );
}
