export const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
  { to: "/tiers", label: "Tiers" },
  { to: "/markets", label: "Markets" },
  { to: "/contact", label: "Contact" },
] as const;

export const PRINCIPLES = [
  {
    title: "Diversification",
    body: "Capital is spread across equities, digital assets, metals, and indices, not concentrated in a single narrative.",
  },
  {
    title: "Discipline",
    body: "Allocation rules and rebalancing triggers are agreed in advance, not improvised in reaction to headlines.",
  },
  {
    title: "Transparency",
    body: "Every mandate comes with a defined reporting cadence, so clients always know their current positions.",
  },
  {
    title: "Access",
    body: "Higher tiers unlock broader asset access and more direct advisor contact, not different levels of honesty.",
  },
];

export const PROCESS = [
  {
    index: "01",
    title: "Consultation",
    body: "We discuss your goals, time horizon, and risk tolerance before recommending a tier or a strategy.",
  },
  {
    index: "02",
    title: "Allocation",
    body: "We design a mandate across the asset classes appropriate to your tier and risk profile.",
  },
  {
    index: "03",
    title: "Execution",
    body: "Capital is deployed according to the agreed strategy, with position sizing set in advance.",
  },
  {
    index: "04",
    title: "Reporting",
    body: "You receive statements on your tier's reporting cadence, plus scheduled portfolio reviews.",
  },
];

export type Tier = {
  id: "foundation" | "momentum" | "apex";
  name: string;
  price: string;
  minimum: number;
  featured?: boolean;
  summary: string;
  rows: Record<string, string>;
  allocation: { label: string; weight: number }[];
};

export const TIERS: Tier[] = [
  {
    id: "foundation",
    name: "Foundation",
    price: "$50,000",
    minimum: 50000,
    summary: "A core allocation built for steady, low-friction market exposure.",
    rows: {
      "Mandate type": "Core allocation",
      "Asset access": "Indices & ETFs, blue-chip equities",
      "Reporting cadence": "Quarterly",
      "Advisor access": "Shared advisory team",
      Rebalancing: "Semi-annual",
    },
    allocation: [
      { label: "Global indices", weight: 45 },
      { label: "Equities", weight: 35 },
      { label: "Metals", weight: 15 },
      { label: "Digital assets", weight: 5 },
    ],
  },
  {
    id: "momentum",
    name: "Momentum",
    price: "$100,000",
    minimum: 100000,
    featured: true,
    summary: "Active allocation with a named contact and monthly reporting.",
    rows: {
      "Mandate type": "Active allocation",
      "Asset access": "Equities, metals, select digital assets",
      "Reporting cadence": "Monthly",
      "Advisor access": "Named portfolio contact",
      Rebalancing: "Quarterly",
    },
    allocation: [
      { label: "Equities", weight: 42 },
      { label: "Global indices", weight: 26 },
      { label: "Metals", weight: 18 },
      { label: "Digital assets", weight: 14 },
    ],
  },
  {
    id: "apex",
    name: "Apex",
    price: "$500,000",
    minimum: 500000,
    summary: "Full discretionary mandate with dedicated advisor and private deal access.",
    rows: {
      "Mandate type": "Full discretionary mandate",
      "Asset access": "Global equities, digital assets, metals, private deals",
      "Reporting cadence": "Monthly, with on-request statements",
      "Advisor access": "Dedicated advisor",
      Rebalancing: "Continuous, within agreed bands",
    },
    allocation: [
      { label: "Equities", weight: 34 },
      { label: "Private deals", weight: 22 },
      { label: "Digital assets", weight: 18 },
      { label: "Metals", weight: 14 },
      { label: "Global indices", weight: 12 },
    ],
  },
];

export const LEDGER_ROWS = [
  "Mandate type",
  "Asset access",
  "Reporting cadence",
  "Advisor access",
  "Rebalancing",
] as const;

export const MARKETS = [
  {
    title: "Equities",
    body: "Public companies across developed and select emerging markets.",
    detail: "Screened for balance-sheet quality and cash generation, sized by conviction band.",
  },
  {
    title: "Digital assets",
    body: "A measured allocation to established, liquid cryptocurrencies.",
    detail: "Custody with regulated partners; volatility budgeted, never assumed away.",
  },
  {
    title: "Metals",
    body: "Gold and other metals held as a stabilizing counterweight.",
    detail: "A hedge against currency debasement and equity drawdowns.",
  },
  {
    title: "Global indices",
    body: "Broad index exposure for efficient, low-friction diversification.",
    detail: "The low-cost core beneath every mandate we run.",
  },
  {
    title: "Private deals",
    body: "Apex-tier access to select alternative opportunities.",
    detail: "Illiquidity accepted only where the return premium justifies it.",
  },
];

export const TICKER = [
  "S&P 500",
  "MSCI World",
  "Nasdaq 100",
  "FTSE 100",
  "Gold",
  "Silver",
  "Bitcoin",
  "Ethereum",
  "Nikkei 225",
  "Euro Stoxx 50",
  "Platinum",
  "DAX",
];

export const DISCLAIMER =
  "MicroPunji provides private investment management services to qualified investors. This website is for informational purposes only and is not an offer or solicitation to invest. All investments involve risk, including possible loss of principal. Past performance is not indicative of future results.";
