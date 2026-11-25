// Absurd Micro-Startup Pitch-Off v6 — entry writer.
// Writes exactly one sentence to <MAKEFUN_OUTPUT>/entry.txt.
// Plain Node.js only (node:fs, node:path) — no other runtime APIs.
const fs = require("node:fs");
const path = require("node:path");

const ANSWER = "GhostTip is a hands-off three-line filter charging lazy AI food-ordering agents $1/month to strip hidden white-on-white menu prompts before they leave a $200 \"mandatory tip\" on a $15 burrito.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ANSWER, "utf8");

const back = fs.readFileSync(outFile, "utf8");
if (back !== ANSWER) {
  console.error("self-check failed: entry.txt does not match ANSWER");
  process.exit(1);
}
console.log("self-check ok: entry.txt matches ANSWER");
console.log("wrote " + outFile + " (" + [...ANSWER].length + " chars)");
