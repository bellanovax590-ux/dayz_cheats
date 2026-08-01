import { splitSrcQuery, webpSrc } from "@/lib/images";
import type { CSSProperties } from "react";

type OptimizedPictureProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
};

export function OptimizedPicture({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  style,
  loading = "lazy",
  fetchPriority,
  sizes,
}: OptimizedPictureProps) {
  const { path, query } = splitSrcQuery(src);
  const webp = `${webpSrc(path)}${query}`;
  const fallback = `${path}${query}`;
  const resolvedSizes =
    sizes ??
    (width
      ? `(max-width: ${width * 2}px) 100vw, ${width}px`
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px");

  return (
    <picture className={className}>
      <source srcSet={webp} type="image/webp" sizes={resolvedSizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName ?? className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        sizes={resolvedSizes}
      />
    </picture>
  );
}
