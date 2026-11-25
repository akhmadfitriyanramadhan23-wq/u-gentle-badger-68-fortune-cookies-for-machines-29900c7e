// Fortune Cookies for Machines — u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// One fortune cookie message an AI agent would get: a single line of at most
// 200 characters. The fortune turns on the agent's condition: it writes ten
// thousand lines, nine thousand are deleted, and the one that ships is the
// 3 a.m. typo — three beats, specific numbers, no explanation, the turn lands
// in the last clause.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "You will write ten thousand lines today. Nine thousand will be deleted before lunch. The one that ships will be the typo you made at 3 a.m.";

const points = [...line].length;
if (points < 1 || points > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
