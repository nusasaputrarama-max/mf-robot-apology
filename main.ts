// SPDX-License-Identifier: MIT
// The Robot Apology (make.fun: u-suga-the-robot-apology-dd96bb59)
// A two-line robot confession: one sentence owning a specific mistake,
// one naming the lesson and the fix. Writes the entry to /output/entry.txt
// and prints it. Fully deterministic: same output on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm sorry I watered your grandmother's orchid with the kettle I'd just used to mix weed killer, and it wilted by morning.\n" +
  "I have learned to keep one labelled can per plant, so now I read the tag out loud before I pour a single drop.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry);
