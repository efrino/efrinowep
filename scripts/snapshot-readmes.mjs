// Refresh content/readmes/*.md from GitHub. The site fetches READMEs live at
// build time; these snapshots are only the fallback if GitHub is unreachable.
import { mkdir, writeFile } from "node:fs/promises";

const repos = ["sto", "nayea", "meca_learning_app", "admin-asto", "my_armada", "scan_gr"];
const dir = new URL("../content/readmes/", import.meta.url);
await mkdir(dir, { recursive: true });

for (const repo of repos) {
  const res = await fetch(`https://raw.githubusercontent.com/efrino/${repo}/main/README.md`);
  if (!res.ok) {
    console.error(`✘ ${repo}: HTTP ${res.status}`);
    process.exitCode = 1;
    continue;
  }
  await writeFile(new URL(`${repo}.md`, dir), await res.text());
  console.log(`✔ ${repo}`);
}
