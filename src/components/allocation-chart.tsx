import { motion } from "motion/react";

const POINTS = [
  { x: 130, y: 270, label: "Equities", anchor: "start" as const, dy: 28 },
  { x: 250, y: 210, label: "Digital assets", anchor: "middle" as const, dy: 23 },
  { x: 370, y: 150, label: "Metals", anchor: "middle" as const, dy: -22 },
  { x: 490, y: 90, label: "Indices", anchor: "end" as const, dy: -22 },
];

export function AllocationChart() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-brass)" }}
        aria-hidden
      />
      <svg
        viewBox="0 0 640 380"
        role="img"
        aria-labelledby="allocationChartTitle"
        className="relative w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="allocationChartTitle">
          Illustrative allocation line rising across four asset classes
        </title>
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brass-soft)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--brass-soft)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[80, 180, 280].map((y) => (
          <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="var(--line-on-ink)" />
        ))}

        <motion.path
          d="M0,300 C50,290 80,320 130,270 C170,230 200,260 250,210 C290,170 320,195 370,150 C410,115 445,135 490,90 C525,60 560,80 640,20 L640,380 L0,380 Z"
          fill="url(#areaFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
        />

        <path
          className="animate-draw"
          d="M0,300 C50,290 80,320 130,270 C170,230 200,260 250,210 C290,170 320,195 370,150 C410,115 445,135 490,90 C525,60 560,80 640,20"
          fill="none"
          stroke="var(--brass-soft)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {POINTS.map((p, i) => (
          <motion.g
            key={p.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 + i * 0.12 }}
          >
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="var(--ink)"
              stroke="var(--brass-soft)"
              strokeWidth="2"
            />
            <text
              x={p.x}
              y={p.y + p.dy}
              textAnchor={p.anchor}
              className="figure-mono"
              fontSize="13"
              fill="var(--text-paper-soft)"
            >
              {p.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
