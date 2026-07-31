import { chmodSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const runWrangler = join(root, "scripts", "run-wrangler.mjs");
const binPath = join(root, "node_modules", ".bin", "wrangler");

if (process.platform !== "linux") {
  process.exit(0);
}

if (!existsSync(runWrangler)) {
  console.log("run-wrangler.mjs missing, skipping CI wrapper");
  process.exit(0);
}

const wrapper = `#!/usr/bin/env node
'use strict';
const { existsSync } = require('fs');
const { spawnSync } = require('child_process');
const { join } = require('path');

const root = process.cwd();
const deployMarker = join(root, '.cf-deploy-done');
const runWrangler = join(root, 'scripts', 'run-wrangler.mjs');
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

const result = spawnSync(process.execPath, [runWrangler, ...args], {
  stdio: 'inherit',
  cwd: root,
});

process.exit(result.status ?? 1);
`;

writeFileSync(binPath, wrapper);
chmodSync(binPath, 0o755);
console.log("Configured wrangler CLI wrapper for Cloudflare CI");
