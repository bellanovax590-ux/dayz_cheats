import { access, readdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const indexPath = path.join(outDir, "index.html");

if (!(await exists(indexPath))) {
  console.error(`Build output missing: expected ${indexPath}`);
  console.error("Run `npm run build` before deploying.");
  process.exit(1);
}

const entries = await readdir(outDir);
console.log(`Build output ready: ${entries.length} entries in out/`);
