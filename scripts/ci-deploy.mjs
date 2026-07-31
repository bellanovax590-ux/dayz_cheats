import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const outDir = path.resolve("out");
const indexPath = path.join(outDir, "index.html");

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
