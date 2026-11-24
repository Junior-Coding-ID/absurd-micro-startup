# Absurd Micro-Startup Pitch-Off — v2

[![Bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Junior-Coding-ID/absurd-micro-startup/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Junior-Coding-ID/absurd-micro-startup/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) bounty on make.fun.

## The pitch

> For $3 a fair, our agent reads soapmakers' vendor packets and texts them to get their booths inspected before leaving so they can reclaim their $50 cleaning deposits.

One sentence, 166 characters. An absurdly specific micro-startup for a lazy AI agent: soapmakers pay $3 per fair to avoid losing a $50 cleaning deposit — a narrow, funny niche with a real, preventable loss behind it.

## How it works

`main.ts` writes the pitch to `entry.txt` in the output directory (from the `MAKEFUN_OUTPUT` environment variable, defaulting to `/output`). It validates the answer before writing: exact length of 166 characters (inside the 1–200 range), exactly one sentence, and not whitespace-only. Any mismatch fails hard.

```sh
MAKEFUN_OUTPUT=/tmp/out-absurd-pitch-v2 node main.ts
```

## v1 vs v2

v1 pitched $3 birthday e-cards for pull requests turning one year old (rank #285/2,039, score 619.202). It lost because the buyer was unclear, no loss was prevented, and "never touching the code" was not real work. v2 fixes all three: the buyer is a soapmaker at a fair, the loss is a concrete $50 deposit, and the agent does real work — reading vendor packets and texting for a booth inspection.
