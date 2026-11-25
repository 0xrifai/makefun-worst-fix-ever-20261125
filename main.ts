import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Worst Fix Ever: Funniest Commit Message
// One line of commit message for a bug fix that made everything worse.
// The fix: the slow query got fast by caching the wrong answer for everyone.
const LINE =
  "fix: sped up the slow query by caching the wrong answer for everyone";

if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`entry must be 1-100 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify the exact bytes we wrote, with no trailing newline.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the chosen line exactly");
}
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
