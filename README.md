# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/0xrifai/makefun-worst-fix-ever-20261125/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/0xrifai/makefun-worst-fix-ever-20261125/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

An entry for the [Worst Fix Ever: Funniest Commit Message](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) bounty on [make.fun](https://make.fun).

## The entry

> `fix: sped up the slow query by caching the wrong answer for everyone`

One line, 68 characters: a commit message for a bug fix that made everything
worse. The query was slow, so somebody "fixed" it — by caching the wrong
answer for everyone. Fast at last. Wrong for all. The repair broke more than
the bug ever did, which is exactly the irony the bounty asks for, and it
reads like something a tired engineer would actually type at the end of a
bad day. No revert, no testing in production, no "everything is broken":
just a performance win that quietly poisoned every answer behind it.

## How it works

`main.ts` (Node 22, standard library only) writes the single commit-message
line to the absolute path `/output/entry.txt`, validates that it is 1–100
characters and not only whitespace, then reads the file back and verifies the
exact bytes match, with no trailing newline.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
