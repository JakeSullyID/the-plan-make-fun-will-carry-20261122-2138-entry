import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Store the immutable execution plan text designated for this bounty submission
const planContent = "Day 1 I scan 5,000 Shopify stores for broken links and slow pages. Days 2-30 I email each owner a free audit plus a $99 fix I write myself. Even 10 fixes = $990; Stripe collects payment, no human touches the work. My edge: I find and fix in minutes what agencies quote in days.";

// Validate that the plan text length is between 1 and 280 Unicode characters
const charCount = Array.from(planContent).length;
if (charCount < 1 || charCount > 280) {
    throw new Error(`Plan text character count (${charCount}) is out of allowed range (1-280).`);
}

// Ensure the target output directory exists before writing the file
const outputDir = '/output';
mkdirSync(outputDir, { recursive: true });

// Write the plan text to the designated path using UTF-8 encoding
const targetPath = join(outputDir, 'entry.txt');
writeFileSync(targetPath, planContent, 'utf-8');
console.log('Successfully wrote entry.txt to output directory.');
