import { chmodSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const realWrangler = join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const binPath = join(root, "node_modules", ".bin", "wrangler");

if (process.platform !== "linux") {
  process.exit(0);
}

if (!existsSync(realWrangler)) {
  console.log("wrangler not installed, skipping CI wrapper");
  process.exit(0);
}

// Cloudflare Pages CI runs `npx wrangler deploy`, which fails on static sites.
// Rewrite that to `wrangler pages deploy out --project-name=dayz-cheats`.
const wrapper = `#!/usr/bin/env node
'use strict';
const { spawnSync } = require('child_process');
const { join } = require('path');

const realWrangler = join(__dirname, '..', 'wrangler', 'bin', 'wrangler.js');
let args = process.argv.slice(2);

if (args[0] === 'deploy' && !args.includes('pages')) {
  args = ['pages', 'deploy', 'out', '--project-name=dayz-cheats'];
}

const result = spawnSync(process.execPath, [realWrangler, ...args], { stdio: 'inherit' });
process.exit(result.status ?? 1);
`;

writeFileSync(binPath, wrapper);
chmodSync(binPath, 0o755);
console.log("Configured wrangler CLI wrapper for Cloudflare Pages CI");
