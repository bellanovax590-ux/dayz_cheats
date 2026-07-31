import { existsSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const outDir = path.resolve("out");
const indexPath = path.join(outDir, "index.html");
const deployMarker = path.resolve(".cf-deploy-done");

if (!existsSync(indexPath)) {
  console.error(`Deploy blocked: missing ${indexPath}`);
  console.error("Run npm run build first.");
  process.exit(1);
}

console.log(`Deploying static export from ${outDir}`);

execSync("wrangler deploy --config wrangler.toml --assets ./out", {
  stdio: "inherit",
  env: process.env,
});

writeFileSync(deployMarker, new Date().toISOString());
console.log("Deploy completed successfully.");
