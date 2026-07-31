const CANONICAL_HOST = "dayzcheat.net";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

function contentTypeForPath(pathname) {
  const lower = pathname.toLowerCase();

  if (lower.endsWith("/feed.xml") || lower.endsWith(".rss")) {
    return "application/rss+xml; charset=utf-8";
  }

  if (lower.endsWith(".webmanifest") || lower === "/site.webmanifest") {
    return MIME_TYPES[".webmanifest"];
  }

  const dot = lower.lastIndexOf(".");
  if (dot === -1) {
    return null;
  }

  return MIME_TYPES[lower.slice(dot)] ?? null;
}

function canonicalRedirect(request) {
  const url = new URL(request.url);

  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  if (url.protocol === "http:" && url.hostname === CANONICAL_HOST) {
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return null;
}

const worker = {
  async fetch(request, env) {
    const redirect = canonicalRedirect(request);
    if (redirect) {
      return redirect;
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = contentTypeForPath(new URL(request.url).pathname);

    if (!contentType || !response.ok) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("Content-Type", contentType);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
