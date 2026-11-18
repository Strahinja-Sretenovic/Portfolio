import { useEffect, useRef } from "react";
import { gsap } from "./motion";

/** Dot + trailing ring. Elements with data-cursor="view" grow it into a label, "link" softly enlarges it. */
export function Cursor({ label }: { label: string }) {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const d = dot.current!, r = ring.current!;
    gsap.set([d, r], { xPercent: -50, yPercent: -50, opacity: 0 });
    const dx = gsap.quickTo(d, "x", { duration: 0.1 });
    const dy = gsap.quickTo(d, "y", { duration: 0.1 });
    const rx = gsap.quickTo(r, "x", { duration: 0.45, ease: "power3.out" });
    const ry = gsap.quickTo(r, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      gsap.to([d, r], { opacity: 1, duration: 0.3, overwrite: "auto" });
      dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor], a, button") as HTMLElement | null;
      const kind = target?.dataset.cursor || (target ? "link" : "");
      r.classList.toggle("is-view", kind === "view");
      r.classList.toggle("is-link", kind === "link");
      d.style.opacity = kind === "view" ? "0" : "1";
    };
    const leave = () => gsap.to([d, r], { opacity: 0, duration: 0.3 });
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true"><span>{label}</span></div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
