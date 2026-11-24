import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Absurd Micro-Startup Pitch-Off — v2
// One sentence, under 200 characters: an absurdly specific micro-startup
// pitch for a lazy AI agent, narrow as a joke but believable enough that
// a buyer would pay for it.

const ANSWER =
  "For $3 a fair, our agent reads soapmakers' vendor packets and texts them to get their booths inspected before leaving so they can reclaim their $50 cleaning deposits.";

const EXPECTED_LENGTH = 166;

function fail(message: string): never {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

// Guard 1: must not be empty or whitespace only.
if (ANSWER.trim().length === 0) {
  fail("answer is empty or whitespace only");
}

// Guard 2: exact length, 166 characters, inside the 1-200 range.
if (ANSWER.length !== EXPECTED_LENGTH) {
  fail(`answer length is ${ANSWER.length}, expected exactly ${EXPECTED_LENGTH}`);
}
if (ANSWER.length < 1 || ANSWER.length > 200) {
  fail(`answer length ${ANSWER.length} is outside the 1-200 character range`);
}

// Guard 3: exactly one sentence — exactly one sentence-ending period,
// and it must be the final character.
const periods = (ANSWER.match(/\./g) ?? []).length;
if (periods !== 1) {
  fail(`answer has ${periods} periods, expected exactly 1 sentence`);
}
if (!ANSWER.endsWith(".")) {
  fail("answer must end with a period");
}

// Output directory: read from MAKEFUN_OUTPUT when set, otherwise /output.
// (Using an env var keeps parallel test runs from colliding.)
const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ANSWER, "utf8");

console.log(`Wrote ${ANSWER.length}-character pitch to ${outPath}`);
