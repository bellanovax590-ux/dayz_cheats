import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (/\.(jpe?g|png)$/i.test(entry.name)) return [fullPath];
    return [];
  });
}

function ruleFor(filePath) {
  const name = path.basename(filePath);
  if (name === "dayz-character-cutout.png") return { width: 560, quality: 86 };
  if (name === "feature-bg-dayz.jpg") return { width: 1280, quality: 78 };
  if (name.startsWith("cheat-")) return { width: 720, quality: 82 };
  if (name.startsWith("feat-")) return { width: 880, quality: 82 };
  if (name.startsWith("blog-cover-")) return { width: 1200, quality: 82 };
  if (name.startsWith("blog-inline-")) return { width: 960, quality: 82 };
  if (name === "hero-dayz-cheats.jpg") return { width: 1200, quality: 82 };
  return { width: 1200, quality: 82 };
}

async function toWebp(filePath) {
  const { width, quality } = ruleFor(filePath);
  const outPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");
  await sharp(filePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outPath);

  const before = fs.statSync(filePath).size;
  const after = fs.statSync(outPath).size;
  console.log(
    `${path.relative(ROOT, filePath)} -> ${path.relative(ROOT, outPath)} (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`,
  );
}

async function createOgImage() {
  const hero = path.join(ROOT, "hero-dayz-cheats.jpg");
  const out = path.join(ROOT, "og-default.webp");
  if (!fs.existsSync(hero)) return;
  await sharp(hero)
    .rotate()
    .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
    .webp({ quality: 84 })
    .toFile(out);
  console.log(`og-default.webp created (${Math.round(fs.statSync(out).size / 1024)}KB)`);
}

const files = walk(ROOT);
for (const file of files) {
  await toWebp(file);
}
await createOgImage();
console.log(`Optimized ${files.length} images.`);
