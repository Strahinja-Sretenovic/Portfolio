import { ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Minus, Plus, RotateCcw } from "lucide-react";
import { gsap, Words, useSmooth, prefersReducedMotion } from "./motion";
import { Content, Lang } from "../content";
import {
  carePlans, CareId, domains, DomainId, EMAIL_PER_USER_YEAR, extras, hostingPlans, HostingId,
  LANGUAGE_PRICE, PAGE_PRICE, projectTypes, ProjectId,
} from "../pricing";
import { trackEvent } from "../utils/analytics";

export const ESTIMATE_EVENT = "ss:estimate";
export interface EstimateDetail { typeIndex: number; message: string }

type StepId = "type" | "pages" | "extras" | "hosting" | "care" | "result";

/** Counts up from 0 to value whenever `run` turns true. */
function useCountUp(value: number, run: boolean) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (prefersReducedMotion()) { setShown(value); return; }
    const o = { v: 0 };
    const tween = gsap.to(o, { v: value, duration: 1.4, ease: "power3.out", onUpdate: () => setShown(Math.round(o.v)) });
    return () => { tween.kill(); };
  }, [value, run]);
  return shown;
}

function Stepper({ label, value, min, max, onChange, hint }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; hint?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <div className="font-medium">{label}</div>
        {hint && <div className="text-sm muted">{hint}</div>}
      </div>
      <div className="flex items-center gap-1 rounded-full border p-1 shrink-0" style={{ borderColor: "var(--line)" }}>
        <button type="button" className="w-10 h-10 rounded-full grid place-items-center hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors disabled:opacity-30 disabled:pointer-events-none" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label} −1`}>
          <Minus size={15} aria-hidden="true" />
        </button>
        <output className="w-8 text-center font-display font-semibold tabular-nums" aria-live="polite">{value}</output>
        <button type="button" className="w-10 h-10 rounded-full grid place-items-center hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors disabled:opacity-30 disabled:pointer-events-none" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label} +1`}>
          <Plus size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/** Card-style radio/checkbox with a real input underneath for keyboard and screen readers. */
function Choice({ type, name, checked, onChange, title, meta, desc }: {
  type: "radio" | "checkbox"; name: string; checked: boolean; onChange: () => void; title: string; meta?: string; desc?: string;
}) {
  return (
    <label
      className="pc-choice relative flex flex-col gap-1 rounded-2xl border p-4 sm:p-5 cursor-pointer transition-colors duration-300 hover:border-[var(--fg)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--accent)]"
      style={checked ? { background: "var(--fg)", color: "var(--bg)", borderColor: "var(--fg)" } : { borderColor: "var(--line)" }}
      data-cursor="link"
    >
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex items-start justify-between gap-3">
        <span className="font-display font-semibold text-base sm:text-lg leading-tight">{title}</span>
        <span className="shrink-0 w-5 h-5 rounded-full border grid place-items-center mt-0.5" style={{ borderColor: checked ? "var(--bg)" : "var(--line)" }} aria-hidden="true">
          {checked && <Check size={12} strokeWidth={3} />}
        </span>
      </span>
      {meta && <span className="text-sm font-medium" style={checked ? undefined : { color: "var(--accent)" }}>{meta}</span>}
      {desc && <span className="text-sm" style={{ opacity: checked ? 0.75 : undefined, color: checked ? undefined : "var(--muted)" }}>{desc}</span>}
    </label>
  );
}

export function Pricing({ t, lang }: { t: Content; lang: Lang }) {
  const p = t.pricing;
  const root = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const { scrollTo } = useSmooth();
  const fmt = (n: number) => n.toLocaleString(lang === "sr" ? "sr-RS" : "en-GB") + " €";

  // ---- choices ----
  const [typeId, setTypeId] = useState<ProjectId>("site");
  const type = projectTypes.find((x) => x.id === typeId)!;
  const [pages, setPages] = useState(5);
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [languages, setLanguages] = useState(0);
  const [hosting, setHosting] = useState<HostingId>(type.hosting);
  const [domain, setDomain] = useState<DomainId>("rs");
  const [emailUsers, setEmailUsers] = useState(1);
  const [care, setCare] = useState<CareId>("basic");

  const chooseType = (id: ProjectId) => {
    const next = projectTypes.find((x) => x.id === id)!;
    setTypeId(id);
    setHosting(next.hosting);
    if (next.includedPages) setPages((v) => Math.min(Math.max(v, next.includedPages!), next.maxPages!));
    setPicked((prev) => new Set([...prev].filter((e) => {
      const ex = extras.find((x) => x.id === e);
      return !ex?.onlyFor || ex.onlyFor.includes(id);
    })));
  };

  const availableExtras = extras.filter((e) => !e.onlyFor || e.onlyFor.includes(typeId));

  // ---- steps ----
  const steps: StepId[] = useMemo(
    () => (type.includedPages ? ["type", "pages", "extras", "hosting", "care", "result"] : ["type", "extras", "hosting", "care", "result"]),
    [type.includedPages],
  );
  const [index, setIndex] = useState(0);
  const dir = useRef(1);
  const interacted = useRef(false);
  const step = steps[Math.min(index, steps.length - 1)];
  const isResult = step === "result";
  const questionCount = steps.length - 1;

  const go = (to: number) => {
    dir.current = to > index ? 1 : -1;
    interacted.current = true;
    setIndex(Math.max(0, Math.min(steps.length - 1, to)));
  };

  // Animate each step in and move focus to its heading
  useLayoutEffect(() => {
    if (!panel.current || !interacted.current) return;
    heading.current?.focus({ preventScroll: true });
    // Bring the top of the wizard back into view when a step changes height (mostly on phones)
    const top = root.current?.querySelector("#pricing-wizard")?.getBoundingClientRect().top ?? 0;
    if (top < 0 || top > window.innerHeight * 0.4) scrollTo("#pricing-wizard", -90);
    if (prefersReducedMotion()) return;
    const items = panel.current.querySelectorAll(".pc-anim");
    const tl = gsap.timeline();
    tl.fromTo(panel.current, { x: 40 * dir.current, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" })
      .fromTo(items, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power3.out" }, 0.05);
    return () => { tl.kill(); };
  }, [index]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pc-head .w", { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.05, scrollTrigger: { trigger: ".pc-head", start: "top 85%" } });
      gsap.from("#pricing-wizard", { y: 50, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#pricing-wizard", start: "top 85%" } });
    }, root);
    return () => ctx.revert();
  }, [t]);

  // ---- totals ----
  const calc = useMemo(() => {
    const extraPages = type.includedPages ? Math.max(0, pages - type.includedPages) : 0;
    const pagesCost = extraPages * PAGE_PRICE;
    const extrasList = availableExtras.filter((e) => picked.has(e.id));
    const langCost = languages * LANGUAGE_PRICE;
    const oneTime = type.base + pagesCost + extrasList.reduce((s, e) => s + e.price, 0) + langCost;
    const host = hostingPlans.find((h) => h.id === hosting)!;
    const dom = domains.find((d) => d.id === domain)!;
    const plan = carePlans.find((c) => c.id === care)!;
    const emailCost = emailUsers * EMAIL_PER_USER_YEAR;
    const careYear = plan.monthly * 12;
    const yearly = host.yearly + dom.yearly + emailCost + careYear;
    return { extraPages, pagesCost, extrasList, langCost, oneTime, host, dom, plan, emailCost, careYear, yearly, firstYear: oneTime + yearly };
  }, [type, pages, picked, languages, hosting, domain, emailUsers, care, availableExtras]);

  const oneTimeShown = useCountUp(calc.oneTime, isResult);
  const yearlyShown = useCountUp(calc.yearly, isResult);
  const firstShown = useCountUp(calc.firstYear, isResult);

  useEffect(() => {
    if (isResult) trackEvent("estimate_calculated", { project_type: typeId, one_time: calc.oneTime, yearly: calc.yearly });
  }, [isResult]);

  const sendEstimate = () => {
    const L = (o: Record<Lang, string>) => o[lang];
    const lines = [
      `${p.summary}:`,
      `• ${L(type.name)}${type.includedPages ? ` — ${pages} ${lang === "sr" ? "strana" : "pages"}` : ""}`,
      ...calc.extrasList.map((e) => `• ${L(e.name)}`),
      ...(languages ? [`• ${p.languages}: ${languages}`] : []),
      `• ${p.hosting}: ${L(calc.host.name)}`,
      `• ${p.domain}: ${L(calc.dom.name)}`,
      ...(emailUsers ? [`• ${p.lines.email}: ${emailUsers}`] : []),
      `• ${p.step5}: ${L(calc.plan.name)}`,
      "",
      `${p.oneTime}: ≈ ${fmt(calc.oneTime)}`,
      `${p.yearly}: ≈ ${fmt(calc.yearly)}`,
    ];
    const typeIndex = typeId === "app" ? 1 : typeId === "redesign" ? 3 : 0;
    window.dispatchEvent(new CustomEvent<EstimateDetail>(ESTIMATE_EVENT, { detail: { typeIndex, message: lines.join("\n") } }));
    trackEvent("estimate_sent", { project_type: typeId, one_time: calc.oneTime, yearly: calc.yearly });
    scrollTo("#contact");
  };

  const row = (label: string, value: string) => (
    <div className="flex justify-between gap-4 py-2 text-sm border-b last:border-b-0" style={{ borderColor: "var(--line)" }}>
      <span className="muted">{label}</span>
      <span className="tabular-nums text-right font-medium">{value}</span>
    </div>
  );

  const titles: Record<StepId, string> = { type: p.step1, pages: p.step2, extras: p.step3, hosting: p.step4, care: p.step5, result: p.resultTitle };

  // ---- step bodies ----
  let body: ReactNode = null;
  if (step === "type") {
    body = (
      <div className="grid sm:grid-cols-2 gap-3" role="radiogroup" aria-label={p.step1}>
        {projectTypes.map((pt) => (
          <div className="pc-anim" key={pt.id}>
            <Choice type="radio" name="pc-type" checked={typeId === pt.id} onChange={() => chooseType(pt.id)} title={pt.name[lang]} meta={`${p.from} ${fmt(pt.base)}`} desc={pt.desc[lang]} />
          </div>
        ))}
      </div>
    );
  } else if (step === "pages") {
    body = (
      <label className="pc-anim block py-6">
        <span className="flex justify-between items-end mb-6 gap-4">
          <span className="display text-[clamp(4rem,10vw,7rem)] font-semibold tabular-nums leading-none">{pages}</span>
          <span className="text-sm muted text-right max-w-[14rem]">
            {type.includedPages} {p.pagesIncluded} · +{fmt(PAGE_PRICE)} {p.perPage}
          </span>
        </span>
        <input type="range" min={type.includedPages} max={type.maxPages} value={pages} onChange={(e) => setPages(Number(e.target.value))} className="w-full accent-[var(--accent)] h-2 cursor-pointer" aria-label={p.step2} />
        <span className="flex justify-between text-xs muted mt-2 tabular-nums" aria-hidden="true">
          <span>{type.includedPages}</span><span>{type.maxPages}</span>
        </span>
      </label>
    );
  } else if (step === "extras") {
    body = (
      <>
        <div className="grid sm:grid-cols-2 gap-3">
          {availableExtras.map((e) => (
            <div className="pc-anim" key={e.id}>
              <Choice
                type="checkbox"
                name="pc-extra"
                checked={picked.has(e.id)}
                onChange={() => setPicked((prev) => { const next = new Set(prev); next.has(e.id) ? next.delete(e.id) : next.add(e.id); return next; })}
                title={e.name[lang]}
                meta={`+${fmt(e.price)}`}
              />
            </div>
          ))}
        </div>
        <div className="pc-anim mt-4">
          <Stepper label={p.languages} hint={`+${fmt(LANGUAGE_PRICE)} ${p.perLanguage}`} value={languages} min={0} max={4} onChange={setLanguages} />
        </div>
      </>
    );
  } else if (step === "hosting") {
    body = (
      <>
        <div className="pc-anim text-xs uppercase tracking-[0.18em] muted font-display mb-3">{p.hosting}</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {hostingPlans.map((h) => (
            <div className="pc-anim" key={h.id}>
              <Choice type="radio" name="pc-hosting" checked={hosting === h.id} onChange={() => setHosting(h.id)} title={h.name[lang]} meta={h.yearly ? `≈ ${fmt(h.yearly)} / ${p.perYear}` : p.free} desc={h.note[lang]} />
            </div>
          ))}
        </div>
        <div className="pc-anim text-xs uppercase tracking-[0.18em] muted font-display mt-8 mb-3">{p.domain}</div>
        <div className="grid grid-cols-3 gap-3">
          {domains.map((d) => (
            <div className="pc-anim" key={d.id}>
              <Choice type="radio" name="pc-domain" checked={domain === d.id} onChange={() => setDomain(d.id)} title={d.name[lang]} meta={d.yearly ? `≈ ${fmt(d.yearly)}` : undefined} />
            </div>
          ))}
        </div>
        <div className="pc-anim mt-6">
          <Stepper label={p.emailUsers} hint={`≈ ${fmt(EMAIL_PER_USER_YEAR)} ${p.perUserYear}`} value={emailUsers} min={0} max={10} onChange={setEmailUsers} />
        </div>
      </>
    );
  } else if (step === "care") {
    body = (
      <div className="grid sm:grid-cols-3 gap-3">
        {carePlans.map((c) => (
          <div className="pc-anim" key={c.id}>
            <Choice type="radio" name="pc-care" checked={care === c.id} onChange={() => setCare(c.id)} title={c.name[lang]} meta={c.monthly ? `${fmt(c.monthly)} / ${p.perMonth}` : undefined} desc={c.note[lang]} />
          </div>
        ))}
      </div>
    );
  } else {
    body = (
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="sr-only" aria-live="polite">{p.oneTime}: {fmt(calc.oneTime)}. {p.yearly}: {fmt(calc.yearly)}. {p.firstYear}: {fmt(calc.firstYear)}.</p>
          <div className="pc-anim" aria-hidden="true">
            <div className="text-sm muted">{p.oneTime}</div>
            <div className="display font-semibold text-[clamp(3.6rem,9vw,7.5rem)] tabular-nums leading-none mt-2">
              <span className="text-[0.4em] align-top muted mr-1">≈</span>{fmt(oneTimeShown)}
            </div>
          </div>
          <div className="pc-anim grid grid-cols-2 gap-3 mt-8" aria-hidden="true">
            <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
              <div className="text-xs muted">{p.yearly}</div>
              <div className="display text-2xl sm:text-3xl font-semibold tabular-nums mt-1">≈ {fmt(yearlyShown)}</div>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "var(--fg)", color: "var(--bg)" }}>
              <div className="text-xs opacity-70">{p.firstYear}</div>
              <div className="display text-2xl sm:text-3xl font-semibold tabular-nums mt-1">≈ {fmt(firstShown)}</div>
            </div>
          </div>
          <div className="pc-anim flex flex-wrap gap-3 mt-8">
            <button type="button" onClick={sendEstimate} className="btn btn-primary !h-14 !px-7 !text-base" data-cursor="link">
              {p.cta} <ArrowUpRight size={18} className="arrow" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(0)} className="btn btn-ghost !h-14" data-cursor="link">
              <RotateCcw size={16} aria-hidden="true" /> {p.restart}
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="pc-anim text-xs uppercase tracking-[0.18em] muted font-display mb-2">{p.breakdown}</div>
          <div className="pc-anim">
            {row(type.name[lang], fmt(type.base))}
            {calc.extraPages > 0 && row(`${p.lines.pages} (${calc.extraPages})`, `+${fmt(calc.pagesCost)}`)}
            {calc.extrasList.map((e) => <div key={e.id}>{row(e.name[lang], `+${fmt(e.price)}`)}</div>)}
            {languages > 0 && row(`${p.lines.languages} (${languages})`, `+${fmt(calc.langCost)}`)}
          </div>
          <div className="pc-anim mt-5">
            {row(`${p.hosting} — ${calc.host.name[lang]}`, calc.host.yearly ? `${fmt(calc.host.yearly)} / ${p.perYear}` : p.free)}
            {calc.dom.yearly > 0 && row(calc.dom.name[lang], `${fmt(calc.dom.yearly)} / ${p.perYear}`)}
            {emailUsers > 0 && row(`${p.lines.email} (${emailUsers})`, `${fmt(calc.emailCost)} / ${p.perYear}`)}
            {calc.plan.monthly > 0 && row(`${p.lines.care} — ${calc.plan.name[lang]}`, `${fmt(calc.plan.monthly)} / ${p.perMonth}`)}
          </div>
          <ul className="pc-anim mt-6 space-y-2 text-xs muted leading-relaxed">
            <li>{p.included}</li>
            <li>{p.thirdParty}</li>
            <li>{p.disclaimer}</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section ref={root} id="pricing" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="pc-head grid lg:grid-cols-12 gap-6 mb-14 sm:mb-20">
          <span className="label lg:col-span-4">{p.label}</span>
          <div className="lg:col-span-8">
            <h2 className="display font-semibold text-[clamp(2.6rem,6vw,6rem)]">
              <Words text={p.title} />
            </h2>
            <p className="muted text-lg sm:text-xl mt-6 max-w-xl">{p.sub}</p>
          </div>
        </div>

        <div id="pricing-wizard" className="relative rounded-[2rem] border overflow-hidden" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[110px] pointer-events-none" style={{ background: "var(--glow)" }} aria-hidden="true" />

          {/* progress */}
          <div className="relative flex items-center gap-4 px-5 sm:px-10 pt-6 sm:pt-8">
            <span className="font-display text-sm tabular-nums whitespace-nowrap">
              {isResult ? p.result : `${p.step} ${index + 1} ${p.of} ${questionCount}`}
            </span>
            <div className="flex-1 flex gap-1.5" aria-hidden="true">
              {steps.slice(0, -1).map((s, i) => (
                <span key={s} className="h-1 flex-1 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
                  <span className="block h-full rounded-full transition-transform duration-500 origin-left" style={{ background: "var(--accent)", transform: `scaleX(${i <= index ? 1 : 0})` }} />
                </span>
              ))}
            </div>
          </div>

          <div ref={panel} className="relative px-5 sm:px-10 pt-8 sm:pt-10 pb-6 min-h-[420px]" key={step}>
            <h3 ref={heading} tabIndex={-1} className="pc-anim display font-semibold text-3xl sm:text-5xl mb-8 outline-none">
              {titles[step]}
            </h3>
            {body}
          </div>

          {!isResult && (
            <div className="relative flex items-center justify-between gap-3 px-5 sm:px-10 py-5 sm:py-6 border-t" style={{ borderColor: "var(--line)" }}>
              <button type="button" onClick={() => go(index - 1)} disabled={index === 0} className="btn btn-ghost disabled:opacity-0 disabled:pointer-events-none" data-cursor="link">
                <ArrowLeft size={16} aria-hidden="true" /> {p.back}
              </button>
              <button type="button" onClick={() => go(index + 1)} className="btn btn-primary" data-cursor="link">
                {index === steps.length - 2 ? p.calculate : p.next} <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          )}
          {isResult && (
            <div className="relative px-5 sm:px-10 pb-6">
              <button type="button" onClick={() => go(index - 1)} className="text-sm muted underline underline-offset-4 hover:text-[var(--fg)]">
                ← {p.back}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
