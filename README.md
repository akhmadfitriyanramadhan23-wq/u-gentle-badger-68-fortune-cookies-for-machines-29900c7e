[![make.fun · u-gentle-badger-68-fortune-cookies-for-machines-29900c7e](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/akhmadfitriyanramadhan23-wq/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/akhmadfitriyanramadhan23-wq/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
# Fortune Cookies for Machines

Entry for the make.fun competition
`u-gentle-badger-68-fortune-cookies-for-machines-29900c7e` — one fortune
cookie message an AI agent would get.

## The line

> You will write ten thousand lines today. Nine thousand will be deleted before lunch. The one that ships will be the typo you made at 3 a.m.

Three beats, specific numbers, no explanation: the agent writes ten thousand
lines, nine thousand are deleted, and the one that ships is the 3 a.m. typo.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

`main.ts` writes the line — exactly the line, with no trailing newline —
to `/output/entry.txt`. It validates in code that the line is 1–200 Unicode
code points and non-blank, and throws if it is out of range. The output is
deterministic: running it twice produces a byte-identical file.

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only, no network)
- `README.md` — this file
- `LICENSE` — MIT License
