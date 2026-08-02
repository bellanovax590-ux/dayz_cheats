import {
  copyFileSync,
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const outDir = join(root, "out");

function collectIndexHtmlPaths(dir, base = "") {
  const paths = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const relativePath = `${base}/${entry}`.replace(/\\/g, "/");

    if (statSync(fullPath).isDirectory()) {
      paths.push(...collectIndexHtmlPaths(fullPath, relativePath));
      continue;
    }

    if (entry === "index.html") {
      paths.push(relativePath);
    }
  }

  return paths;
}

for (const file of ["_headers", "_redirects"]) {
  const source = join(publicDir, file);
  if (existsSync(source)) {
    copyFileSync(source, join(outDir, file));
  }
}

const htmlPaths = collectIndexHtmlPaths(outDir);
const charsetRules = htmlPaths
  .map((filePath) => {
    const urlPath =
      filePath === "/index.html"
        ? "/"
        : filePath.replace(/\/index\.html$/, "/");
    return `${urlPath}\n  Content-Type: text/html; charset=utf-8`;
  })
  .join("\n\n");

const headersPath = join(outDir, "_headers");
const existingHeaders = existsSync(headersPath)
  ? readFileSync(headersPath, "utf8")
  : "";

writeFileSync(
  headersPath,
  `${existingHeaders.trim()}\n\n${charsetRules}\n`.trimStart(),
);

console.log(
  `Copied deploy assets and added charset headers for ${htmlPaths.length} HTML pages.`,
);
