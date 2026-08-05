import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const source = path.join(process.cwd(), "public/images/zadeyo-logo.webp");
const publicDir = path.join(process.cwd(), "public");

if (!fs.existsSync(source)) {
  console.error("Missing source logo:", source);
  process.exit(1);
}

const sizes = [
  { file: "favicon-16.png", size: 16 },
  { file: "favicon-32.png", size: 32 },
  { file: "favicon.png", size: 48 },
  { file: "icon-48.png", size: 48 },
  { file: "icon-192.png", size: 192 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "images/zadeyo-logo-512.png", size: 512 },
];

const sourceMtime = fs.statSync(source).mtimeMs;
const faviconIco = path.join(publicDir, "favicon.ico");
const outputs = [...sizes.map(({ file }) => path.join(publicDir, file)), faviconIco];
const outputsFresh =
  outputs.every((file) => fs.existsSync(file)) &&
  outputs.every((file) => fs.statSync(file).mtimeMs >= sourceMtime);

if (outputsFresh) {
  console.log("Favicons up to date, skipping regeneration.");
  process.exit(0);
}

for (const { file, size } of sizes) {
  const out = path.join(publicDir, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 7, g: 5, b: 15, alpha: 1 },
    })
    .png()
    .toFile(out);
  console.log(`Wrote ${file} (${size}x${size})`);
}

const favicon32 = path.join(publicDir, "favicon-32.png");
const faviconIcoPath = path.join(publicDir, "favicon.ico");
fs.copyFileSync(favicon32, faviconIcoPath);
console.log("Wrote favicon.ico (48x32 PNG favicon for Google)");
