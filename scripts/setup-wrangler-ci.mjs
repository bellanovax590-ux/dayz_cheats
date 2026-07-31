import { chmodSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const realWrangler = join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const binPath = join(root, "node_modules", ".bin", "wrangler");
const deployMarker = join(root, ".cf-deploy-done");

if (process.platform !== "linux") {
  process.exit(0);
}

if (!existsSync(realWrangler)) {
  console.log("wrangler not installed, skipping CI wrapper");
  process.exit(0);
}

const wrapper = `#!/usr/bin/env node
'use strict';
const { existsSync } = require('fs');
const { spawnSync } = require('child_process');
const { join } = require('path');

const root = join(__dirname, '..');
const realWrangler = join(root, 'wrangler', 'bin', 'wrangler.js');
const deployMarker = join(root, '.cf-deploy-done');
let args = process.argv.slice(2);

if (args[0] === 'deploy') {
  if (existsSync(deployMarker)) {
    console.log('Deploy already completed during build step.');
    process.exit(0);
  }

  if (!args.includes('--config')) {
    args.push('--config', 'wrangler.toml');
  }
}

const result = spawnSync(process.execPath, [realWrangler, ...args], {
  stdio: 'inherit',
  cwd: root,
});

process.exit(result.status ?? 1);
`;

writeFileSync(binPath, wrapper);
chmodSync(binPath, 0o755);
console.log("Configured wrangler CLI wrapper for Cloudflare CI");
