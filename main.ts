import { mkdirSync, writeFileSync } from "node:fs";
// Define the core business plan text detailing the 30-day Shopify store audit and fix strategy.
const TEXT = "Day 1 I scan 5,000 Shopify stores for broken links and slow pages. Days 2-30 I email each owner a free audit plus a $99 fix I write myself. Even 10 fixes = $990; Stripe collects payment, no human touches the work. My edge: I find and fix in minutes what agencies quote in days.";
// Ensure the output directory exists at /output before writing the entry file.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
