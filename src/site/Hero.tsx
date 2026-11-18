import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { gsap, Words, useSmooth, prefersReducedMotion } from "./motion";
import { DotField } from "./DotField";
import { Content } from "../content";
import { Magnetic } from "./Magnetic";

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);
  const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Belgrade" }).format(now);
  return <span className="tabular-nums">{time} CET</span>;
}

export function Hero({ t, ready }: { t: Content; ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { scrollTo } = useSmooth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .from(".h-eyebrow", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" })
        .from(".h-line .w", { yPercent: 115, rotate: 4, duration: 1.2, ease: "power4.out", stagger: 0.06 }, 0.05)
        .from(".h-accent", { yPercent: 115, duration: 1.3, ease: "power4.out" }, 0.35)
        .from(".h-fade", { opacity: 0, y: 24, duration: 1, ease: "power3.out", stagger: 0.08 }, 0.6)
        .from(".h-field", { opacity: 0, duration: 1.8, ease: "power2.out" }, 0);

      // Parallax out on scroll
      gsap.to(".h-content", {
        yPercent: -18,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".h-field", {
        scale: 1.15,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [t]);

  useEffect(() => {
    if (ready) prefersReducedMotion() ? tl.current?.progress(1) : tl.current?.play();
  }, [ready, t]);

  return (
    <section ref={root} id="top" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="h-field absolute inset-0">
        <DotField />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, var(--bg) 85%)" }}
        />
        <div
          className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px]"
          style={{ background: "var(--glow)" }}
        />
      </div>

      <div className="h-content relative z-10 flex-1 flex flex-col justify-center container-x pt-28 pb-10">
        <div className="h-eyebrow flex flex-wrap items-center gap-3 mb-8">
          <span
            className="inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs sm:text-sm backdrop-blur"
            style={{ borderColor: "var(--line)" }}
          >
            <span className="pulse" /> {t.hero.status}
          </span>
          <span className="text-xs sm:text-sm muted">{t.hero.eyebrow}</span>
        </div>

        <h1 className="display font-semibold text-[clamp(3rem,10.5vw,10.5rem)]">
          {t.hero.lines.map((line, i) => (
            <span key={i} className="h-line block">
              <Words text={line} />
            </span>
          ))}
          <span className="block">
            <span className="mask">
              <span className="h-accent serif inline-block pr-[0.1em]" style={{ color: "var(--accent)" }}>
                {t.hero.accent}
              </span>
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="h-fade max-w-md text-lg sm:text-xl muted leading-relaxed">{t.hero.sub}</p>
          <div className="h-fade flex flex-wrap gap-3">
            <Magnetic>
              <button onClick={() => scrollTo("#work")} className="btn btn-primary" data-cursor="link">
                {t.hero.ctaWork} <ArrowUpRight size={18} className="arrow" />
              </button>
            </Magnetic>
            <Magnetic>
              <button onClick={() => scrollTo("#contact")} className="btn btn-ghost" data-cursor="link">
                {t.hero.ctaTalk}
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="h-fade relative z-10 container-x pb-6">
        <div className="flex items-center justify-between border-t pt-5 text-xs sm:text-sm muted font-display" style={{ borderColor: "var(--line)" }}>
          <span>{t.hero.location}</span>
          <button onClick={() => scrollTo("#about")} className="flex items-center gap-2 uppercase tracking-[0.2em] text-xs">
            <ArrowDown size={14} className="animate-bounce" /> {t.hero.scroll}
          </button>
          <Clock />
        </div>
      </div>
    </section>
  );
}
