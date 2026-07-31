import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const wranglerBin = join(root, "node_modules", "wrangler", "bin", "wrangler.js");

if (!existsSync(wranglerBin)) {
  console.error(`wrangler not found at ${wranglerBin}`);
  process.exit(1);
}

const args = process.argv.slice(2);
const result = spawnSync(process.execPath, [wranglerBin, ...args], {
  stdio: "inherit",
  cwd: root,
  env: process.env,
});

process.exit(result.status ?? 1);
