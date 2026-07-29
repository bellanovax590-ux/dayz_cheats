import { readFileSync } from "fs";
const f = process.argv[2];
const m = readFileSync(f, "utf8");
const texts = [...m.matchAll(/text: "((?:\\.|[^"\\])*)"/g)].map((x) =>
  x[1].replace(/\\"/g, '"')
);
const w = texts.join(" ").split(/\s+/).filter(Boolean).length;
console.log(f.split(/[/\\]/).pop(), w, "words", texts.length, "blocks");
