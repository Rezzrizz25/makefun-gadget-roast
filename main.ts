// One-Line Roast: The Gadget You Use Every Day — make.fun entry.
// The program writes a single roast line (104 characters) to
// /output/entry.txt, the one text the judge compares two at a time.
// It runs on Node 22 with the standard library only and reads
// nothing from the network. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'My AirPods connect to my laptop, my TV, and my neighbour’s car — everything except the phone in my hand.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Guard: the entry must be non-blank, a single line, and 1-200 characters
// (the bounty caps the line at 200). Fail loudly instead of writing a bad
// entry, so a broken line can never reach the judge.
if (ENTRY.trim().length === 0) {
  console.error('entry is blank');
  process.exit(1);
}
if (ENTRY.includes('\n')) {
  console.error('entry must be a single line');
  process.exit(1);
}
if (ENTRY.length > 200) {
  console.error(`entry is ${ENTRY.length} characters, over the 200-character limit`);
  process.exit(1);
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote entry.txt (${ENTRY.length} characters, 1 line)`);
