import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useSmooth } from "./motion";
import { Content } from "../content";

const TERMINAL = [
  ["whoami", "strahinja.sretenovic  (ssolutions)"],
  ["cat education.txt", "M.Sc. ECE (in progress) · B.Sc. Software & IT — FTN Novi Sad"],
  ["cat role.txt", "software engineer · backend / full-stack"],
  ["ls ./stack", "java  spring  python  fastapi  php  react  docker"],
  ["status --now", "open_to_work = true"],
];

export function About({ t }: { t: Content }) {
  const root = useRef<HTMLElement>(null);
  const { scrollTo } = useSmooth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Words light up as you scroll through the statement
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".ab-word",
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: ".ab-pin", start: "top top", end: "+=120%", scrub: 0.6, pin: true },
          }
        );
      });
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".ab-word",
          { opacity: 0.2 },
          { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ".ab-statement", start: "top 80%", end: "bottom 45%", scrub: 0.6 } }
        );
      });

      // Terminal lines type in
      const lines = gsap.utils.toArray<HTMLElement>(".tm-line");
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".tm", start: "top 80%" } });
      lines.forEach((line) => {
        const cmd = line.querySelector<HTMLElement>(".tm-cmd")!;
        const full = cmd.dataset.text || "";
        const obj = { n: 0 };
        tl.set(line, { opacity: 1 })
          .to(obj, {
            n: full.length,
            duration: full.length * 0.035,
            ease: "none",
            onUpdate: () => (cmd.textContent = full.slice(0, Math.round(obj.n))),
          })
          .from(line.querySelector(".tm-out"), { opacity: 0, x: -6, duration: 0.25 });
      });

      // Counters + fact cards
      gsap.from(".ab-fact", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".ab-facts", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".ab-num").forEach((el) => {
        const end = parseInt(el.dataset.value || "", 10);
        if (isNaN(end)) return;
        const suffix = el.dataset.value!.replace(String(end), "");
        const o = { v: 0 };
        el.textContent = "0" + suffix;
        gsap.to(o, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => (el.textContent = Math.round(o.v) + suffix),
        });
      });
      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, [t]);

  const words = t.about.statement.split(" ");

  return (
    <section ref={root} id="about" className="relative">
      <div className="ab-pin lg:min-h-[100svh] flex items-center">
        <div className="container-x py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="label mb-8">{t.about.label}</h2>
            <p className="sr-only">{t.about.statement}</p>
            <p aria-hidden="true" className="ab-statement display font-medium text-[clamp(1.9rem,4.4vw,4.4rem)] !leading-[1.04] mt-6">
              {words.map((w, i) => (
                <span key={i} className="ab-word" style={i < 3 ? { color: "var(--accent)" } : undefined}>
                  {w}{" "}
                </span>
              ))}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="tm rounded-2xl border overflow-hidden shadow-2xl" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "var(--line)" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs muted font-mono">~/ssolutions</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed space-y-2.5 min-h-[260px]">
                {TERMINAL.map(([cmd, out]) => (
                  <div key={cmd} className="tm-line opacity-0">
                    <div>
                      <span style={{ color: "var(--accent)" }}>❯ </span>
                      <span className="tm-cmd" data-text={cmd} />
                    </div>
                    <div className="tm-out muted pl-4">{out}</div>
                  </div>
                ))}
                <span className="inline-block w-2 h-4 align-middle animate-pulse" style={{ background: "var(--accent)" }} />
              </div>
            </div>
            <button onClick={() => scrollTo("#work")} className="btn btn-ghost mt-5 w-full justify-center" data-cursor="link">
              {t.about.cta} <ArrowUpRight size={16} className="arrow" />
            </button>
          </div>
        </div>
      </div>

      <div className="ab-facts container-x grid grid-cols-2 lg:grid-cols-4 border-t" style={{ borderColor: "var(--line)" }}>
        {t.about.facts.map((f, i) => (
          <div
            key={f.label}
            className={`ab-fact py-10 sm:py-14 px-1 sm:px-6 ${i % 2 ? "border-l" : ""} ${i === 2 ? "lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}
            style={{ borderColor: "var(--line)" }}
          >
            <div className="ab-num display font-semibold text-[clamp(3rem,6vw,5.5rem)]" data-value={f.value}>
              {f.value}
            </div>
            <div className="muted mt-3 text-sm sm:text-base">{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
