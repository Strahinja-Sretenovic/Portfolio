import { useLayoutEffect, useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { gsap, Words } from "./motion";
import { Content } from "../content";

/** Experience & education timeline with a line that draws itself on scroll. */
export function Journey({ t }: { t: Content }) {
  const j = t.journey;
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".jr-head .w", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.05,
        scrollTrigger: { trigger: ".jr-head", start: "top 85%" },
      });
      gsap.fromTo(".jr-fill", { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ".jr-list", start: "top 70%", end: "bottom 60%", scrub: 0.6 },
      });
      gsap.utils.toArray<HTMLElement>(".jr-item").forEach((item) => {
        gsap.from(item.querySelectorAll(".jr-in"), {
          y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.07,
          scrollTrigger: { trigger: item, start: "top 82%" },
        });
        gsap.from(item.querySelector(".jr-dot"), {
          scale: 0, duration: 0.6, ease: "back.out(2)",
          scrollTrigger: { trigger: item, start: "top 75%" },
        });
      });
      gsap.from(".jr-extra", {
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".jr-extras", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={root} id="journey" className="relative py-28 sm:py-40 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="container-x">
        <div className="jr-head grid lg:grid-cols-12 gap-6 mb-16 sm:mb-24">
          <span className="label lg:col-span-4">{j.label}</span>
          <h2 className="lg:col-span-8 display font-semibold text-[clamp(2.6rem,6vw,6rem)]">
            <Words text={j.title} />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <ol className="jr-list relative lg:col-span-8 lg:col-start-5 pl-10 sm:pl-14">
            <span className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px" style={{ background: "var(--line)" }} aria-hidden="true" />
            <span className="jr-fill absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px origin-top" style={{ background: "var(--accent)" }} aria-hidden="true" />

            {j.items.map((it, i) => {
              const Icon = it.kind === "work" ? Briefcase : GraduationCap;
              const current = i === 0;
              return (
                <li key={it.title} className="jr-item relative pb-14 last:pb-0">
                  <span
                    className="jr-dot absolute -left-10 sm:-left-14 top-0 w-[23px] h-[23px] sm:w-[31px] sm:h-[31px] rounded-full grid place-items-center border"
                    style={current ? { background: "var(--accent)", borderColor: "var(--accent)", color: "var(--accent-ink)" } : { background: "var(--bg)", borderColor: "var(--line)" }}
                    aria-hidden="true"
                  >
                    <Icon size={13} />
                  </span>
                  <div className="jr-in flex flex-wrap items-center gap-3 text-sm font-display">
                    <span className="tabular-nums" style={{ color: "var(--accent)" }}>{it.period}</span>
                    {current && (
                      <span className="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs" style={{ borderColor: "var(--line)" }}>
                        <span className="pulse" /> {j.now}
                      </span>
                    )}
                  </div>
                  <h3 className="jr-in display font-semibold text-2xl sm:text-4xl mt-3">{it.title}</h3>
                  <p className="jr-in muted mt-2 text-base sm:text-lg">{it.place}</p>
                  {it.points.length > 0 && (
                    <ul className="jr-in mt-5 space-y-2.5 max-w-2xl">
                      {it.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-base leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="grid lg:grid-cols-12 mt-20 lg:mt-28">
        <div className="jr-extras lg:col-span-8 lg:col-start-5 grid sm:grid-cols-2 gap-6">
          <div className="jr-extra rounded-3xl border p-6 sm:p-8" style={{ borderColor: "var(--line)" }}>
            <h3 className="text-xs uppercase tracking-[0.18em] muted font-display">{j.languagesLabel}</h3>
            <ul className="mt-4 space-y-2">
              {j.languages.map((l) => <li key={l} className="display text-xl sm:text-2xl font-medium">{l}</li>)}
            </ul>
          </div>
          <div className="jr-extra rounded-3xl border p-6 sm:p-8" style={{ borderColor: "var(--line)" }}>
            <h3 className="text-xs uppercase tracking-[0.18em] muted font-display">{j.interestsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {j.interests.map((x) => (
                <li key={x} className="text-sm rounded-full border px-3.5 py-1.5" style={{ borderColor: "var(--line)" }}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
