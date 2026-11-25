// Absurd Micro-Startup Pitch-Off v5 — entry writer.
// Writes exactly one sentence to <MAKEFUN_OUTPUT>/entry.txt (default /output/entry.txt).
// Plain Node.js only (node:fs, node:path) — no other runtime APIs, no TypeScript
// annotations, so `node main.ts` runs directly on Node v24.
const fs = require("node:fs");
const path = require("node:path");

const ANSWER = "A lazy agent charges mobile planetarium operators $5 per school booking to check ceiling heights against dome clearance specs before a $900 space show runs out of space.";

function fail(message) {
  console.error("FAIL: " + message);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
const outFile = path.join(outDir, "entry.txt");

// --- Gate self-check (bounty gate: UTF-8, 1-200 chars, not whitespace-only, 1 sentence) ---
const charCount = [...ANSWER].length; // code-point count, matches the gate's character count
if (charCount < 1 || charCount > 200) fail("length " + charCount + " outside 1-200");
if (charCount !== 169) fail("char count " + charCount + ", expected 169");
if (ANSWER.trim().length === 0) fail("answer is whitespace-only");
const periodCount = (ANSWER.match(/\./g) || []).length;
if (periodCount !== 1) fail("period count " + periodCount + ", expected 1 (exactly one sentence)");
if (ANSWER !== ANSWER.trim()) fail("answer has leading/trailing whitespace");
if (Buffer.from(ANSWER, "utf8").toString("utf8") !== ANSWER) fail("answer is not valid UTF-8 round-trip");

// --- Write ---
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ANSWER, "utf8");

// --- Read back and verify byte-for-byte ---
const writtenBuf = fs.readFileSync(outFile);
const expectedBuf = Buffer.from(ANSWER, "utf8");
if (!writtenBuf.equals(expectedBuf)) fail("read-back bytes differ from answer");
const written = writtenBuf.toString("utf8");
if (written !== ANSWER) fail("read-back text differs from answer");
if ([...written].length !== 169) fail("read-back length mismatch");
if ((written.match(/\./g) || []).length !== 1) fail("read-back period count mismatch");

console.log("OK: wrote " + outFile + " (" + charCount + " chars, 1 period, " + writtenBuf.length + " bytes)");
