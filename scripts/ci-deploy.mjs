import { existsSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");
const indexPath = join(outDir, "index.html");
const deployMarker = join(root, ".cf-deploy-done");

if (!existsSync(indexPath)) {
  console.error(`Deploy blocked: missing ${indexPath}`);
  console.error("Run npm run build first.");
  process.exit(1);
}

console.log(`Deploying static export from ${outDir}`);

execSync("node scripts/copy-deploy-assets.mjs", {
  stdio: "inherit",
  cwd: root,
});

execSync("node scripts/run-wrangler.mjs deploy --config wrangler.toml", {
  stdio: "inherit",
  cwd: root,
  env: process.env,
});

writeFileSync(deployMarker, new Date().toISOString());
console.log("Deploy completed successfully.");
