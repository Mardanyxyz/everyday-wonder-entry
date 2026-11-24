// Everyday Wonder — one sentence, at most 200 characters.
// The program writes the entry to /output/entry.txt (creating the
// directory if needed) and prints it, working from any directory.
// Node 22 stdlib only; fully deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The escalator handrail outruns the steps, so all the way up you hold on to something quietly trying to leave you behind.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
