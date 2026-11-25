import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Absurd Micro-Startup Pitch-Off — v3 (improvement loop)
// One-sentence pitch, exactly 162 characters, exactly one period.
const ANSWER =
  "WrongSpringfield bills 24-hour plumbers $19/month for one automated ZIP check before lazy AI receptionists book a $300 Ohio truck roll for a burst pipe in Oregon.";

const EXPECTED_LENGTH = 162;

function fail(message: string): never {
  throw new Error(`absurd-pitch-v3: ${message}`);
}

function validate(answer: string): void {
  if (answer.trim().length === 0) fail("answer must not be only whitespace");
  if (answer.length !== EXPECTED_LENGTH) {
    fail(`answer must be exactly ${EXPECTED_LENGTH} characters, got ${answer.length}`);
  }
  if (answer.length < 1 || answer.length > 200) {
    fail(`answer must be 1-200 characters, got ${answer.length}`);
  }
  if (answer.includes("\n") || answer.includes("\r")) {
    fail("answer must be a single line");
  }
  const dots = [...answer].filter((ch) => ch === ".").length;
  if (dots !== 1) fail(`answer must contain exactly one period, got ${dots}`);
  if (!answer.endsWith(".")) fail("answer must end with a period");
}
function main(): void {
  validate(ANSWER);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ANSWER, "utf8");
  // Round-trip check: what landed on disk must be byte-for-byte the answer.
  const written = readFileSync(target, "utf8");
  if (written !== ANSWER) fail("entry.txt on disk does not match the answer");
  console.log(`wrote entry.txt (${ANSWER.length} chars) to ${outDir}`);
}

main();
