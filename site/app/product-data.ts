import type { Product } from "./product-types";

export const product: Product = {
  number: "06",
  name: "CostRoute Lab",
  eyebrow: "Quality-constrained model routing",
  tagline: "Find the cheapest route that still clears the quality floor.",
  description: "Evaluate candidate model routes across a fixed task set, reject any route below the quality threshold, and explain the lowest-cost passing combination.",
  accent: "#14a37f",
  inputLabel: "Routing experiment",
  inputHint: "The same 3-model × 20-case CSV is evaluated by product.py.",
  inputValue: "Quality floor: 91. Cases: 20. Tasks: extract, reason, draft. Models: gpt-5.6, terra, luna. Exhaustively assign one model per task and reject routes whose measured average quality is below the floor.",
  actionLabel: "Reveal verified result",
  status: "ROUTE_FOUND",
  statusTone: "good",
  metrics: [{ value: "20", label: "fixture cases" }, { value: "91.5", label: "fixture quality" }, { value: "61.0%", label: "fixture cost reduction" }],
  findings: [
    { title: "Quality floor cleared", detail: "The selected fixture route scores 91.5 across all twenty observations.", badge: "PASS", tone: "good" },
    { title: "Lowest-cost passing route", detail: "draft→terra, extract→luna, reason→terra costs 3.0 fixture units.", badge: "ROUTE", tone: "good" },
    { title: "Baseline remains visible", detail: "The GPT-5.6-only fixture scores 95.17 and costs 7.7 units.", badge: "BASELINE", tone: "warn" },
  ],
  method: [
    { step: "01", title: "Fix the eval", detail: "Hold cases, scoring, and the quality floor constant across candidates." },
    { step: "02", title: "Enumerate", detail: "Search complete routing combinations instead of hand-picking a winner." },
    { step: "03", title: "Select", detail: "Choose the lowest measured cost among routes that pass every constraint." },
  ],
  proof: ["20 fixed cases", "91-point quality floor", "Exhaustive route search"],
  note: "Costs and scores are a reproducible synthetic benchmark, not a universal model-price claim.",
};
