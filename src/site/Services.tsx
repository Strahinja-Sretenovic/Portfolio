import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, Words, useSmooth } from "./motion";
import { Content } from "../content";

export function Services({ t }: { t: Content }) {
  const root = useRef<HTMLElement>(null);
  const { scrollTo } = useSmooth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sv-head .w", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.05,
        scrollTrigger: { trigger: ".sv-head", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".sv-row").forEach((row) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 88%" } });
        tl.from(row.querySelector(".sv-line"), { scaleX: 0, duration: 1.2, ease: "expo.out" })
          .from(row.querySelectorAll(".sv-in"), { yPercent: 100, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.07 }, 0.1);
      });
    }, root);
    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={root} id="services" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="sv-head grid lg:grid-cols-12 gap-6 mb-16 sm:mb-24">
          <span className="label lg:col-span-4">{t.services.label}</span>
          <h2 className="lg:col-span-8 display font-semibold text-[clamp(2.6rem,6vw,6rem)]">
            <Words text={t.services.title} />
          </h2>
        </div>

        <div>
          {t.services.items.map((s, i) => (
            <button
              key={s.title}
              onClick={() => scrollTo("#contact")}
              data-cursor="link"
              className="sv-row group relative w-full text-left block overflow-hidden"
            >
              <div className="sv-line absolute top-0 inset-x-0 h-px origin-left" style={{ background: "var(--line)" }} />
              {/* fill sweep */}
              <div className="absolute inset-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)]" style={{ background: "var(--accent)" }} />
              <div className="relative grid grid-cols-12 items-center gap-4 py-8 sm:py-10 px-1 sm:px-4 transition-colors duration-500 group-hover:text-white">
                <span className="sv-in col-span-2 sm:col-span-1 font-display text-sm tabular-nums opacity-60">0{i + 1}</span>
                <div className="sv-in col-span-10 sm:col-span-6 lg:col-span-5">
                  <h3 className="display font-semibold text-[clamp(2rem,4.6vw,4.4rem)] transition-transform duration-500 group-hover:translate-x-3">
                    {s.title}
                  </h3>
                </div>
                <p className="sv-in col-span-10 col-start-3 sm:col-start-auto sm:col-span-5 text-base sm:text-lg max-w-md">
                  {s.text}
                </p>
                <span className="sv-in hidden lg:block col-span-1 justify-self-end">
                  <span className="w-12 h-12 rounded-full border grid place-items-center transition-all duration-500 group-hover:rotate-45 group-hover:border-white" style={{ borderColor: "var(--line)" }}>
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </div>
            </button>
          ))}
          <div className="h-px" style={{ background: "var(--line)" }} />
        </div>
      </div>
    </section>
  );
}
