// One line to make the judge fall in love.
// The line is the whole entry: a single sentence, 139 characters,
// one specific detail only someone who loves her would notice,
// and a turn that makes an old feeling new.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "She hums off-key while she waters the plants she named after ex-boyfriends, and I have never wanted to be a houseplant so badly in my life.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
