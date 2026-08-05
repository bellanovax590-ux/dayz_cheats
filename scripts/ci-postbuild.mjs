// Cloudflare Workers Builds runs `npx wrangler deploy` after `npm run build`.
// Deploy must NOT run during postbuild — it caused 30-minute build timeouts.
// Local deploy: npm run deploy

export {};
