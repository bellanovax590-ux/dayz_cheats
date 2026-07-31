import { execSync } from "node:child_process";

const isCi =
  process.env.CI === "true" ||
  process.env.CF_PAGES === "1" ||
  process.env.WORKERS_CI === "1" ||
  process.cwd().startsWith("/opt/buildhome");

if (!isCi) {
  process.exit(0);
}

execSync("node scripts/ci-deploy.mjs", { stdio: "inherit" });
