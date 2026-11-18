import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./motion";

/** Interactive dot grid: dots swell and drift away from the cursor, with a slow ambient wave. */
export function DotField() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvas.current!;
    const ctx = c.getContext("2d")!;
    const reduced = prefersReducedMotion();
    let w = 0, h = 0, dpr = 1, raf = 0, visible = true;
    const gap = 30;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let dots: { x: number; y: number }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = gap / 2; y < h; y += gap) for (let x = gap / 2; x < w; x += gap) dots.push({ x, y });
    };

    const css = () => {
      const s = getComputedStyle(document.documentElement);
      return { dot: s.getPropertyValue("--dot").trim(), accent: s.getPropertyValue("--accent").trim() };
    };
    let colors = css();
    const themeObs = new MutationObserver(() => (colors = css()));
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const draw = (t: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      ctx.clearRect(0, 0, w, h);
      const R = 170;
      for (const d of dots) {
        const wave = reduced ? 0 : Math.sin(d.x * 0.012 + t * 0.0009) * Math.cos(d.y * 0.014 + t * 0.0007);
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const f = Math.max(0, 1 - dist / R);
        const push = f * f * 18;
        const x = d.x + (dist ? (dx / dist) * push : 0);
        const y = d.y + (dist ? (dy / dist) * push : 0) + wave * 3;
        const r = 1 + f * 2.6 + wave * 0.35;
        ctx.beginPath();
        ctx.fillStyle = f > 0.05 ? colors.accent : colors.dot;
        ctx.globalAlpha = f > 0.05 ? 0.35 + f * 0.65 : 1;
        ctx.arc(x, y, Math.max(0.4, r), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (visible) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
    };
    const onLeave = () => { mouse.tx = -9999; mouse.ty = -9999; };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });

    resize();
    io.observe(c);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      themeObs.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvas} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
