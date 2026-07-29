export function webpSrc(src: string): string {
  return src.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2");
}

export function splitSrcQuery(src: string): { path: string; query: string } {
  const [pathPart, ...rest] = src.split("?");
  return { path: pathPart, query: rest.length ? `?${rest.join("?")}` : "" };
}
