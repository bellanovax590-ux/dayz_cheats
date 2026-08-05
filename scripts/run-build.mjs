import { execSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const isCi =
  process.env.CI === "true" ||
  process.env.CF_PAGES === "1" ||
  process.env.WORKERS_CI === "1" ||
  process.cwd().startsWith("/opt/buildhome");

function run(label, command) {
  console.log(`> ${label}`);
  execSync(command, { stdio: "inherit", cwd: root, env: process.env });
}

function newestMtime(paths) {
  return Math.max(
    ...paths.map((file) => (existsSync(file) ? statSync(file).mtimeMs : 0)),
  );
}

const faviconSource = join(root, "public/images/zadeyo-logo.webp");
const faviconOutputs = [
  join(root, "public/favicon.ico"),
  join(root, "public/favicon-32.png"),
  join(root, "public/icon-192.png"),
];

const postsDir = join(root, "src/lib/blog/posts");
const feedPath = join(root, "public/feed.xml");

const faviconsFresh =
  existsSync(faviconSource) &&
  faviconOutputs.every((file) => existsSync(file)) &&
  faviconOutputs.every((file) => statSync(file).mtimeMs >= statSync(faviconSource).mtimeMs);

let feedFresh = existsSync(feedPath);
if (feedFresh && existsSync(postsDir)) {
  const postFiles = readdirSync(postsDir)
    .filter((name) => name.endsWith(".ts"))
    .map((name) => join(postsDir, name));
  feedFresh = statSync(feedPath).mtimeMs >= newestMtime(postFiles);
}

if (!faviconsFresh) {
  run("generate favicons", "node scripts/generate-favicons.mjs");
} else {
  console.log("> favicons up to date, skipping");
}

if (!feedFresh) {
  run("generate feed", "node scripts/generate-feed.mjs");
} else {
  console.log("> feed.xml up to date, skipping");
}

process.env.NEXT_TELEMETRY_DISABLED = "1";

run("next build", "next build");

if (isCi) {
  console.log("CI build finished (deploy runs as a separate Cloudflare step).");
}
