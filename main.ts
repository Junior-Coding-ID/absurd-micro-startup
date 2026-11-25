// Absurd Micro-Startup Pitch-Off — v4 entry
// One sentence, under 200 characters, pitching an absurdly specific
// micro-startup for lazy AI agents. Writes the pitch to
// <MAKEFUN_OUTPUT>/entry.txt (default /output/entry.txt).
import * as fs from "node:fs";
import * as path from "node:path";

const PITCH =
  "A lazy agent runs BeeProof, billing trophy shops $2 per spelling-bee batch to exact-match AI-imported names to orders before a $60 trophy misspells the champion.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "entry.txt");
  fs.writeFileSync(outFile, PITCH, "utf8");
  console.log(`wrote ${outFile} (${PITCH.length} chars)`);
}

main();

// Gate self-check: re-read what was written and enforce the bounty gate
// (UTF-8 text, 1-200 chars, not only whitespace, exactly one sentence).
const written = fs.readFileSync(
  path.join(process.env.MAKEFUN_OUTPUT ?? "/output", "entry.txt"),
  "utf8",
);
const charCount = [...written].length;
const periodCount = (written.match(/\./g) ?? []).length;
if (charCount < 1 || charCount > 200) {
  console.error(`FAIL: entry is ${charCount} chars, must be 1-200`);
  process.exit(1);
}
if (written.trim().length === 0) {
  console.error("FAIL: entry is only whitespace");
  process.exit(1);
}
if (periodCount !== 1) {
  console.error(`FAIL: entry has ${periodCount} periods, must be exactly 1`);
  process.exit(1);
}
console.log(`gate OK: ${charCount} chars, ${periodCount} period`);
