import type { Product } from "./product-types";

export const product: Product = {
  number: "06",
  name: "CostRoute Lab",
  eyebrow: "Quality-constrained model routing",
  tagline: "Find the cheapest route that still clears the quality floor.",
  description: "Evaluate candidate model routes across a fixed task set, reject any route below the quality threshold, and explain the lowest-cost passing combination.",
  accent: "#14a37f",
  inputLabel: "Routing experiment",
  inputHint: "Twenty fixed cases compare a GPT-5.6 baseline with candidate routes.",
  inputValue: "Quality floor: 91/100. Cases: 20. Candidate routes: GPT-5.6 for all; small model then GPT-5.6 escalation; category-specific routing. Require complete coverage and deterministic scoring.",
  actionLabel: "Search valid routes",
  status: "ROUTE_FOUND",
  statusTone: "good",
  metrics: [{ value: "20", label: "cases covered" }, { value: "92", label: "quality score" }, { value: "61%", label: "cost reduction" }],
  findings: [
    { title: "Quality floor cleared", detail: "The selected route scores 92 across all twenty fixed cases.", badge: "PASS", tone: "good" },
    { title: "No uncovered task classes", detail: "Every fixture follows an explicit route; there is no silent fallback.", badge: "COVERAGE", tone: "good" },
    { title: "Escalation protects hard cases", detail: "Low-confidence outputs go to GPT-5.6 before a result is returned.", badge: "GUARDRAIL", tone: "warn" },
  ],
  method: [
    { step: "01", title: "Fix the eval", detail: "Hold cases, scoring, and the quality floor constant across candidates." },
    { step: "02", title: "Enumerate", detail: "Search complete routing combinations instead of hand-picking a winner." },
    { step: "03", title: "Select", detail: "Choose the lowest measured cost among routes that pass every constraint." },
  ],
  proof: ["20 fixed cases", "91-point quality floor", "Exhaustive route search"],
  note: "Costs and scores are a reproducible synthetic benchmark, not a universal model-price claim.",
};
