import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./motion";

/** Giant text band that speeds up, reverses and skews with scroll velocity. */
export function Marquee({ items }: { items: string[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const loop = gsap.to(".mq-track", { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
      const skew = gsap.quickTo(".mq-track", "skewX", { duration: 0.5, ease: "power3.out" });
      let dir = 1;
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          if (Math.abs(v) > 20) dir = v > 0 ? 1 : -1;
          gsap.to(loop, { timeScale: dir * (1 + Math.min(Math.abs(v) / 300, 6)), duration: 0.3, overwrite: true });
          skew(gsap.utils.clamp(-8, 8, -v / 250));
          gsap.delayedCall(0.2, () => skew(0));
        },
      });
      gsap.from(root.current, {
        rotate: -2,
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [items]);

  const row = items.flatMap((it, i) => [
    <span key={`t${i}`} className={i % 2 ? "outline-text" : ""}>{it}</span>,
    <span key={`s${i}`} className="serif" style={{ color: "var(--accent)" }}>✳</span>,
  ]);

  return (
    <div ref={root} className="relative py-8 sm:py-12 overflow-hidden border-y my-10" style={{ borderColor: "var(--line)" }} aria-hidden="true">
      <div className="mq-track flex w-max gap-[4vw] whitespace-nowrap display font-semibold text-[clamp(3rem,8vw,7.5rem)] pr-[4vw]">
        {row}
        {row.map((el, i) => <span key={`d${i}`}>{el}</span>)}
      </div>
    </div>
  );
}
