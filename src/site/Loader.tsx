import { useLayoutEffect, useRef } from "react";
import { gsap } from "./motion";

/** Short intro: counter + name reveal, then the curtain lifts. */
export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const tl = gsap.timeline({ onComplete: onDone });
      tl.from(".ld-c", { yPercent: 110, duration: 0.8, ease: "power4.out", stagger: 0.03 })
        .to(counter, {
          v: 100,
          duration: 1.3,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
          },
        }, 0)
        .to(".ld-bar", { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, 0)
        .to(".ld-c", { yPercent: -110, duration: 0.6, ease: "power3.in", stagger: 0.02 }, 1.35)
        .to(".ld-meta", { opacity: 0, duration: 0.3 }, 1.35)
        .to(root.current, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "expo.inOut" }, 1.7);
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  const name = "SSolutions";

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[200] flex flex-col justify-between p-5 sm:p-10"
      style={{ background: "var(--fg)", color: "var(--bg)", clipPath: "inset(0 0 0 0)" }}
      aria-hidden="true"
    >
      <div className="ld-meta flex justify-between text-xs uppercase tracking-[0.2em] opacity-60 font-display">
        <span>Web studio</span>
        <span>Portfolio © 2026</span>
      </div>
      <div className="display text-[13vw] sm:text-[9vw] font-semibold leading-none">
        {name.split(" ").map((word, w) => (
          <span key={w} className="inline-block whitespace-nowrap mr-[0.25em]">
            {Array.from(word).map((ch, i) => (
              <span key={i} className="mask">
                <span className="ld-c">{ch}</span>
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="ld-meta">
        <div className="flex items-end justify-between font-display">
          <span className="text-xs uppercase tracking-[0.2em] opacity-60">Web studio — Čačak</span>
          <span ref={count} className="text-5xl sm:text-7xl font-semibold tabular-nums">000</span>
        </div>
        <div className="ld-bar mt-4 h-px origin-left scale-x-0" style={{ background: "var(--bg)" }} />
      </div>
    </div>
  );
}
