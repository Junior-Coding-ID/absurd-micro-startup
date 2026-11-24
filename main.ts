// Absurd Micro-Startup Pitch-Off — entry program.
// Writes one sentence (under 200 characters) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We sell $3 birthday e-cards to engineering managers for pull requests that turn one year old, with GitHub supplying the dates and our agent never touching the code.";

// Length verified by hand with `wc -m` and Node ([...s].length): 164.
const EXPECTED_LENGTH = 164;
const MAX_LENGTH = 200;

const length = [...ENTRY].length;
if (length !== EXPECTED_LENGTH) {
  throw new Error(
    `Entry length mismatch: expected ${EXPECTED_LENGTH} characters, got ${length}.`,
  );
}
if (length < 1 || length > MAX_LENGTH) {
  throw new Error(
    `Entry length ${length} is outside the 1-${MAX_LENGTH} character gate.`,
  );
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${join(outputDir, "entry.txt")} (${length} characters).`);
