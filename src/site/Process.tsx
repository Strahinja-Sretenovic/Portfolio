import { useLayoutEffect, useRef } from "react";
import { gsap, Words } from "./motion";
import { Content } from "../content";

export function Process({ t }: { t: Content }) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pr-head .w", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.05,
        scrollTrigger: { trigger: ".pr-head", start: "top 85%" },
      });

      const steps = gsap.utils.toArray<HTMLElement>(".pr-step");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".pr-steps", start: "top 75%", end: "bottom 55%", scrub: 0.8 },
      });
      tl.fromTo(".pr-fill", { scaleX: 0, scaleY: 0 }, { scaleX: 1, scaleY: 1, ease: "none", duration: steps.length });
      steps.forEach((s, i) => {
        tl.fromTo(s.querySelector(".pr-core"), { scale: 0 }, { scale: 1, duration: 0.3 }, i)
          .fromTo(s.querySelectorAll(".pr-in"), { opacity: 0.15, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, i);
      });
    }, root);
    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={root} id="process" className="relative py-28 sm:py-40 border-t" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="container-x">
        <div className="pr-head grid lg:grid-cols-12 gap-6 mb-20 sm:mb-28">
          <span className="label lg:col-span-4">{t.process.label}</span>
          <h2 className="lg:col-span-8 display font-semibold text-[clamp(2.6rem,6vw,6rem)]">
            <Words text={t.process.title} />
          </h2>
        </div>

        <div className="pr-steps relative grid lg:grid-cols-4 gap-12 lg:gap-8 pl-10 lg:pl-0">
          {/* track: vertical on mobile, horizontal on desktop */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px lg:left-0 lg:right-0 lg:top-[11px] lg:bottom-auto lg:w-auto lg:h-px" style={{ background: "var(--line)" }} />
          <div className="pr-fill absolute left-[11px] top-2 bottom-2 w-px origin-top lg:left-0 lg:right-0 lg:top-[11px] lg:bottom-auto lg:w-auto lg:h-px lg:origin-left" style={{ background: "var(--accent)" }} />

          {t.process.steps.map((s, i) => (
            <div key={s.title} className="pr-step relative">
              <div className="pr-dot absolute -left-10 lg:left-0 top-0 w-[23px] h-[23px] rounded-full border-2 grid place-items-center" style={{ borderColor: "var(--accent)", background: "var(--bg-2)" }}>
                <span className="pr-core block w-[11px] h-[11px] rounded-full" style={{ background: "var(--accent)" }} />
              </div>
              <div className="lg:pt-14">
                <div className="pr-in font-display text-sm muted tabular-nums">0{i + 1}</div>
                <h3 className="pr-in display font-semibold text-3xl sm:text-4xl mt-3">{s.title}</h3>
                <p className="pr-in muted mt-4 text-base sm:text-lg leading-relaxed max-w-xs">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
