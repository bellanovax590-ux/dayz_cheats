"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

const DARK_SAND_COLORS = ["#5a3a78", "#4a2d66", "#6b4580", "#3d2458", "#7a5690"];
const LIGHT_SAND_COLORS = [
  "#bf5aff",
  "#a855f7",
  "#c084fc",
  "#9333ea",
  "#d8b4fe",
];

type SandParticlesProps = {
  maxCount?: number;
  density?: number;
  magneticRadius?: number;
  className?: string;
};

function createParticles(
  width: number,
  height: number,
  count: number,
  colors: string[],
) {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    particles.push({
      x,
      y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0,
      size: 1.2 + Math.random() * 2.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  return particles;
}

function getSandColors() {
  const isLight =
    document.documentElement.getAttribute("data-theme") === "light";
  return isLight ? LIGHT_SAND_COLORS : DARK_SAND_COLORS;
}

export function SandParticles({
  maxCount = 220,
  density = 280,
  magneticRadius = 120,
  className = "",
}: SandParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const host = canvas.parentElement;
    if (!host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId = 0;
    let width = 0;
    let height = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let active = false;
    let colors = getSandColors();

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      colors = getSandColors();
      const count = Math.min(maxCount, Math.floor((width * height) / density));
      particles = createParticles(width, height, count, colors);
    };

    const onMove = (event: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      active = true;
    };

    const onLeave = () => {
      active = false;
      mouseX = -9999;
      mouseY = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight =
        document.documentElement.getAttribute("data-theme") === "light";
      const idleAlpha = isLight ? 0.28 : 0.35;
      const activeAlpha = isLight ? 0.55 : 0.9;

      for (const p of particles) {
        if (active) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < magneticRadius) {
            const force = (1 - dist / magneticRadius) * 0.55;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx += (p.ox - p.x) * 0.045;
        p.vy += (p.oy - p.y) * 0.045;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = active ? activeAlpha : idleAlpha;
        ctx.fillRect(p.x, p.y, p.size, p.size * 0.7);
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    const observer = new MutationObserver(() => {
      colors = getSandColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelAnimationFrame(animationId);
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [maxCount, density, magneticRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-[1] h-full w-full ${className}`}
      aria-hidden
    />
  );
}
