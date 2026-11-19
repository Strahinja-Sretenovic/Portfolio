import { ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { gsap, Words, useSmooth } from "./motion";
import { Content, Lang } from "../content";
import {
  carePlans, CareId, domains, DomainId, EMAIL_PER_USER_YEAR, extras, hostingPlans, HostingId,
  LANGUAGE_PRICE, PAGE_PRICE, projectTypes, ProjectId,
} from "../pricing";
import { trackEvent } from "../utils/analytics";

export const ESTIMATE_EVENT = "ss:estimate";
export interface EstimateDetail { typeIndex: number; message: string }

function useAnimatedNumber(value: number) {
  const [shown, setShown] = useState(value);
  const obj = useRef({ v: value });
  useEffect(() => {
    const tween = gsap.to(obj.current, {
      v: value,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: () => setShown(Math.round(obj.current.v)),
    });
    return () => { tween.kill(); };
  }, [value]);
  return shown;
}

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="pc-step border-t pt-8 pb-10" style={{ borderColor: "var(--line)" }}>
      <legend className="float-left w-full flex items-baseline gap-3 mb-6">
        <span className="font-display text-sm muted tabular-nums" aria-hidden="true">0{n}</span>
        <span className="display font-semibold text-2xl sm:text-3xl">{title}</span>
      </legend>
      <div className="clear-both">{children}</div>
    </fieldset>
  );
}

function Stepper({ label, value, min, max, onChange, hint }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; hint?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <div className="font-medium">{label}</div>
        {hint && <div className="text-sm muted">{hint}</div>}
      </div>
      <div className="flex items-center gap-1 rounded-full border p-1 shrink-0" style={{ borderColor: "var(--line)" }}>
        <button type="button" className="w-9 h-9 rounded-full grid place-items-center hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors disabled:opacity-30 disabled:pointer-events-none" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label} −1`}>
          <Minus size={15} aria-hidden="true" />
        </button>
        <output className="w-8 text-center font-display font-semibold tabular-nums" aria-live="polite">{value}</output>
        <button type="button" className="w-9 h-9 rounded-full grid place-items-center hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors disabled:opacity-30 disabled:pointer-events-none" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label} +1`}>
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
      className="relative flex flex-col gap-1 rounded-2xl border p-4 sm:p-5 cursor-pointer transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--accent)]"
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
  const { scrollTo } = useSmooth();
  const fmt = (n: number) => n.toLocaleString(lang === "sr" ? "sr-RS" : "en-GB") + " €";

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
    setPicked((prev) => new Set([...prev].filter((e) => !extras.find((x) => x.id === e)?.onlyFor || extras.find((x) => x.id === e)!.onlyFor!.includes(id))));
  };

  const availableExtras = extras.filter((e) => !e.onlyFor || e.onlyFor.includes(typeId));

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

  // Phones: a small sticky bar keeps the running total visible while choosing options
  const [barVisible, setBarVisible] = useState(false);
  useEffect(() => {
    const form = root.current?.querySelector(".pc-form");
    const summary = root.current?.querySelector(".pc-summary");
    if (!form || !summary) return;
    let inForm = false, summaryVisible = false;
    const update = () => setBarVisible(inForm && !summaryVisible);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === form) inForm = e.isIntersecting;
        else summaryVisible = e.isIntersecting;
      }
      update();
    });
    io.observe(form);
    io.observe(summary);
    return () => io.disconnect();
  }, []);

  const oneTimeShown = useAnimatedNumber(calc.oneTime);
  const yearlyShown = useAnimatedNumber(calc.yearly);
  const firstShown = useAnimatedNumber(calc.firstYear);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pc-head .w", { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.05, scrollTrigger: { trigger: ".pc-head", start: "top 85%" } });
      gsap.from(".pc-step", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".pc-form", start: "top 80%" } });
      gsap.from(".pc-summary", { y: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".pc-form", start: "top 75%" } });
    }, root);
    return () => ctx.revert();
  }, [t]);

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

  const row = (label: string, value: string, strong = false) => (
    <div className={`flex justify-between gap-4 py-1.5 text-sm ${strong ? "font-semibold" : ""}`}>
      <span className={strong ? "" : "muted"}>{label}</span>
      <span className="tabular-nums text-right">{value}</span>
    </div>
  );

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

        <div className="pc-form grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <Step n={1} title={p.step1}>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => (
                  <Choice
                    key={pt.id}
                    type="radio"
                    name="pc-type"
                    checked={typeId === pt.id}
                    onChange={() => chooseType(pt.id)}
                    title={pt.name[lang]}
                    meta={`${p.from} ${fmt(pt.base)}`}
                    desc={pt.desc[lang]}
                  />
                ))}
              </div>
            </Step>

            {type.includedPages && (
              <Step n={2} title={p.step2}>
                <label className="block">
                  <span className="flex justify-between items-baseline mb-4">
                    <span className="display text-5xl font-semibold tabular-nums">{pages}</span>
                    <span className="text-sm muted text-right">
                      {type.includedPages} {p.pagesIncluded} · +{fmt(PAGE_PRICE)} {p.perPage}
                    </span>
                  </span>
                  <input
                    type="range"
                    min={type.includedPages}
                    max={type.maxPages}
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full accent-[var(--accent)] h-2 cursor-pointer"
                    aria-label={p.step2}
                  />
                </label>
              </Step>
            )}

            <Step n={type.includedPages ? 3 : 2} title={p.step3}>
              <div className="grid sm:grid-cols-2 gap-3">
                {availableExtras.map((e) => (
                  <Choice
                    key={e.id}
                    type="checkbox"
                    name="pc-extra"
                    checked={picked.has(e.id)}
                    onChange={() =>
                      setPicked((prev) => {
                        const next = new Set(prev);
                        next.has(e.id) ? next.delete(e.id) : next.add(e.id);
                        return next;
                      })
                    }
                    title={e.name[lang]}
                    meta={`+${fmt(e.price)}`}
                  />
                ))}
              </div>
              <div className="mt-4">
                <Stepper label={p.languages} hint={`+${fmt(LANGUAGE_PRICE)} ${p.perLanguage}`} value={languages} min={0} max={4} onChange={setLanguages} />
              </div>
            </Step>

            <Step n={type.includedPages ? 4 : 3} title={p.step4}>
              <div className="text-xs uppercase tracking-[0.18em] muted font-display mb-3">{p.hosting}</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {hostingPlans.map((h) => (
                  <Choice
                    key={h.id}
                    type="radio"
                    name="pc-hosting"
                    checked={hosting === h.id}
                    onChange={() => setHosting(h.id)}
                    title={h.name[lang]}
                    meta={h.yearly ? `≈ ${fmt(h.yearly)} / ${p.perYear}` : p.free}
                    desc={h.note[lang]}
                  />
                ))}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] muted font-display mt-8 mb-3">{p.domain}</div>
              <div className="grid grid-cols-3 gap-3">
                {domains.map((d) => (
                  <Choice
                    key={d.id}
                    type="radio"
                    name="pc-domain"
                    checked={domain === d.id}
                    onChange={() => setDomain(d.id)}
                    title={d.name[lang]}
                    meta={d.yearly ? `≈ ${fmt(d.yearly)}` : undefined}
                  />
                ))}
              </div>
              <div className="mt-6">
                <Stepper label={p.emailUsers} hint={`≈ ${fmt(EMAIL_PER_USER_YEAR)} ${p.perUserYear}`} value={emailUsers} min={0} max={10} onChange={setEmailUsers} />
              </div>
            </Step>

            <Step n={type.includedPages ? 5 : 4} title={p.step5}>
              <div className="grid sm:grid-cols-3 gap-3">
                {carePlans.map((c) => (
                  <Choice
                    key={c.id}
                    type="radio"
                    name="pc-care"
                    checked={care === c.id}
                    onChange={() => setCare(c.id)}
                    title={c.name[lang]}
                    meta={c.monthly ? `${fmt(c.monthly)} / ${p.perMonth}` : undefined}
                    desc={c.note[lang]}
                  />
                ))}
              </div>
            </Step>
          </div>

          <aside className="pc-summary lg:col-span-5 lg:sticky lg:top-24" aria-label={p.summary}>
            <div className="rounded-3xl border p-6 sm:p-8 overflow-hidden relative" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[90px] pointer-events-none" style={{ background: "var(--glow)" }} aria-hidden="true" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.18em] muted font-display">{p.summary}</div>

                <div className="mt-6">
                  <div className="text-sm muted">{p.oneTime}</div>
                  <p className="sr-only" aria-live="polite">{p.oneTime}: {fmt(calc.oneTime)}. {p.yearly}: {fmt(calc.yearly)}.</p>
                  <div className="display font-semibold text-[clamp(3rem,6vw,4.5rem)] tabular-nums" aria-hidden="true">
                    <span className="text-[0.45em] align-top muted mr-1">≈</span>{fmt(oneTimeShown)}
                  </div>
                </div>

                <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                  {row(`${p.lines.base} — ${type.name[lang]}`, fmt(type.base))}
                  {calc.extraPages > 0 && row(`${p.lines.pages} (${calc.extraPages})`, `+${fmt(calc.pagesCost)}`)}
                  {calc.extrasList.map((e) => (
                    <div key={e.id}>{row(e.name[lang], `+${fmt(e.price)}`)}</div>
                  ))}
                  {languages > 0 && row(`${p.lines.languages} (${languages})`, `+${fmt(calc.langCost)}`)}
                </div>

                <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm muted">{p.yearly}</span>
                    <span className="display text-2xl font-semibold tabular-nums">≈ {fmt(yearlyShown)}</span>
                  </div>
                  <div className="mt-2">
                    {row(`${p.hosting} — ${calc.host.name[lang]}`, calc.host.yearly ? fmt(calc.host.yearly) : p.free)}
                    {row(calc.dom.name[lang], fmt(calc.dom.yearly))}
                    {emailUsers > 0 && row(`${p.lines.email} (${emailUsers})`, fmt(calc.emailCost))}
                    {row(`${p.lines.care} — ${calc.plan.name[lang]}`, calc.careYear ? `${fmt(calc.careYear)}` : "—")}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl p-5 flex justify-between items-baseline" style={{ background: "var(--fg)", color: "var(--bg)" }}>
                  <span className="text-sm font-medium">{p.firstYear}</span>
                  <span className="display text-3xl font-semibold tabular-nums">≈ {fmt(firstShown)}</span>
                </div>

                <button type="button" onClick={sendEstimate} className="btn btn-primary w-full justify-center mt-6 !h-14 !text-base" data-cursor="link">
                  {p.cta} <ArrowUpRight size={18} className="arrow" aria-hidden="true" />
                </button>

                <ul className="mt-6 space-y-2 text-xs muted leading-relaxed">
                  <li>{p.included}</li>
                  <li>{p.thirdParty}</li>
                  <li>{p.disclaimer}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div
        className="lg:hidden fixed bottom-3 inset-x-3 z-[60] rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-3 shadow-2xl transition-all duration-500"
        style={{
          background: "var(--fg)",
          color: "var(--bg)",
          transform: barVisible ? "translateY(0)" : "translateY(140%)",
          opacity: barVisible ? 1 : 0,
        }}
        aria-hidden={!barVisible}
      >
        <span className="text-sm">
          <span className="opacity-60">{p.approx} </span>
          <span className="font-display font-semibold text-lg tabular-nums">{fmt(oneTimeShown)}</span>
        </span>
        <button
          type="button"
          tabIndex={barVisible ? 0 : -1}
          onClick={() => scrollTo(".pc-summary", -80)}
          className="rounded-full px-4 h-10 text-sm font-semibold"
          style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
        >
          {p.summary}
        </button>
      </div>
    </section>
  );
}
