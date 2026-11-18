import { Fragment, useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, Words } from "./motion";
import { Content, Lang, projects, Project } from "../content";
import { trackProjectClick } from "../utils/analytics";

function ProjectCard({ p, i, lang, t }: { p: Project; i: number; lang: Lang; t: Content }) {
  return (
    <article className="wk-card relative shrink-0 w-full lg:w-[min(78vw,1180px)] lg:h-[min(76vh,720px)] flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10">
      <div className="lg:col-span-4 flex flex-col justify-between order-2 lg:order-1">
        <div>
          <div className="flex items-center gap-3 text-sm muted font-display">
            <span className="tabular-nums" style={{ color: p.accent }}>0{i + 1}</span>
            <span className="h-px w-8" style={{ background: "var(--line)" }} />
            <span>{p.category[lang]}</span>
            <span className="ml-auto">{p.year}</span>
          </div>
          <h3 className="wk-title display font-semibold text-[clamp(2.4rem,4.4vw,4.6rem)] mt-5">{p.name}</h3>
          <p className="muted text-base sm:text-lg leading-relaxed mt-5 max-w-sm">{p.line[lang]}</p>
        </div>
        <div className="mt-6">
          <div className="text-xs uppercase tracking-[0.18em] muted font-display mb-3">{p.role[lang]}</div>
          <div className="flex flex-wrap gap-2 mb-7">
            {p.tags.map((tag) => (
              <span key={tag} className="text-xs rounded-full border px-3 py-1.5" style={{ borderColor: "var(--line)" }}>
                {tag}
              </span>
            ))}
          </div>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            data-cursor="link"
            onClick={() => trackProjectClick({ projectName: p.name, projectType: p.category.en, projectUrl: p.link, action: "open_external_demo" })}
          >
            {t.work.visit} <ArrowUpRight size={17} className="arrow" />
          </a>
        </div>
      </div>

      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        aria-label={`${p.name} — ${t.work.visit}`}
        className="frame wk-frame group relative lg:col-span-8 order-1 lg:order-2 block rounded-2xl overflow-hidden border aspect-[16/11] lg:aspect-auto lg:h-full"
        style={{ borderColor: "var(--line)", background: "var(--card)" }}
      >
        <div className="absolute top-0 inset-x-0 h-9 z-10 flex items-center gap-1.5 px-4 border-b backdrop-blur-md" style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--card) 85%, transparent)" }}>
          <span className="w-2 h-2 rounded-full opacity-40" style={{ background: "var(--fg)" }} />
          <span className="w-2 h-2 rounded-full opacity-40" style={{ background: "var(--fg)" }} />
          <span className="w-2 h-2 rounded-full opacity-40" style={{ background: "var(--fg)" }} />
          <span className="mx-auto text-[11px] muted font-mono truncate">{p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
        </div>
        <div className="wk-img absolute inset-0 pt-9 overflow-hidden">
          <img src={p.image} alt={`${p.name} — screenshot`} loading="lazy" className="shot scale-[1.12] group-hover:scale-100 transition-transform duration-[1.2s]" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 0 0 2px ${p.accent}` }} />
      </a>
    </article>
  );
}

export function Work({ t, lang }: { t: Content; lang: Lang }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        const scroller = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".wk-pin",
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        // Inner parallax + reveal driven by the horizontal movement
        gsap.utils.toArray<HTMLElement>(".wk-card").forEach((card) => {
          gsap.fromTo(card.querySelector(".wk-img"), { xPercent: 8 }, {
            xPercent: -8,
            ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: scroller, start: "left right", end: "right left", scrub: true },
          });
          gsap.from(card.querySelector(".wk-title"), {
            yPercent: 40,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: { trigger: card, containerAnimation: scroller, start: "left 85%", end: "left 40%", scrub: true },
          });
        });
        gsap.to(".wk-bar", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: ".wk-pin", start: "top top", end: () => "+=" + distance(), scrub: true },
        });
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".wk-card").forEach((card) => {
          gsap.from(card, { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%" } });
        });
      });

      gsap.from(".wk-head .w", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".wk-head", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={root} id="work" className="relative">
      <div className="wk-pin lg:h-[100svh] lg:overflow-hidden flex flex-col justify-center">
        <div ref={track} className="flex flex-col lg:flex-row lg:items-center gap-20 lg:gap-[6vw] container-x lg:!max-w-none lg:w-max py-24 lg:py-0 lg:pl-[max(3.5rem,calc((100vw-1440px)/2+3.5rem))] lg:pr-[10vw]">
          <div className="wk-head shrink-0 lg:w-[34vw] flex flex-col justify-center">
            <span className="label">{t.work.label}</span>
            <h2 className="display font-semibold text-[clamp(3rem,7vw,7.5rem)] mt-6">
              <Words text={t.work.title} />
            </h2>
            <div className="hidden lg:flex items-center gap-3 mt-10 muted text-sm font-display uppercase tracking-[0.18em]">
              <span className="block w-10 h-px" style={{ background: "var(--muted)" }} /> {t.work.hint} →
            </div>
          </div>
          {projects.map((p, i) => (
            <Fragment key={p.id}><ProjectCard p={p} i={i} lang={lang} t={t} /></Fragment>
          ))}
        </div>
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-[2px] rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
          <div className="wk-bar h-full origin-left scale-x-0" style={{ background: "var(--accent)" }} />
        </div>
      </div>
    </section>
  );
}
