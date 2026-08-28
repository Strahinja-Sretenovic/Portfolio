import { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  Layers,
  FileCheck
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";
import { trackConsultationCtaClick } from "../utils/analytics";

export function ProjectEstimator() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [projectType, setProjectType] = useState<string>("redesign");
  const [scopeFeatures, setScopeFeatures] = useState<string[]>(["seo", "analytics"]);
  const [contentReady, setContentReady] = useState<string>("strategy");

  const projectTypes = [
    {
      id: "redesign",
      title: isSr ? "Strateški Redizajn Postojećeg Sajta" : "Strategic Redesign & UX Audit",
      desc: isSr ? "Popravka konverzije, moderna arhitektura i ubrzanje" : "Conversion optimization, modern UX and speed"
    },
    {
      id: "new-site",
      title: isSr ? "Novi Prezentacioni / Poslovni Sajt" : "New Authoritative Business Website",
      desc: isSr ? "Digitalni temelj sa SEO strukturom i CMS-om" : "Foundational business hub with technical SEO"
    },
    {
      id: "booking-app",
      title: isSr ? "Sistem za Zakazivanje / Web Aplikacija" : "Custom Booking Engine / Web Application",
      desc: isSr ? "Automatizacija termina, SMS notifikacije i ugovori" : "Self-serve booking, SMS alerts & custom workflow"
    },
    {
      id: "ecommerce",
      title: isSr ? "Online Prodavnica (E-Commerce)" : "E-Commerce Store & Payment Gateway",
      desc: isSr ? "Kartično plaćanje, kurirske integracije i korpa" : "Card checkout, courier shipping API & stock management"
    }
  ];

  const featureOptions = [
    { id: "booking", label: isSr ? "Online kalendar i zakazivanje termina" : "Online calendar & booking system" },
    { id: "sms", label: isSr ? "Automatski SMS / Email podsetnici" : "Automated SMS/Email reminders" },
    { id: "payments", label: isSr ? "Integracija sa platnim karticama banaka" : "Credit card gateway integration" },
    { id: "seo", label: isSr ? "Lokalni SEO & Google Schema mikropodaci" : "Local SEO & structured schema" },
    { id: "analytics", label: isSr ? "Google Analytics 4 & merenje konverzija" : "GA4 conversion event tracking" },
    { id: "cms", label: isSr ? "Admin panel za samostalno menjanje sadržaja" : "Intuitive CMS for self-management" }
  ];

  const toggleFeature = (id: string) => {
    setScopeFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getEstimatedTimeline = () => {
    if (projectType === "redesign") return isSr ? "2–3 nedelje" : "2–3 weeks";
    if (projectType === "new-site") return isSr ? "2–4 nedelje" : "2–4 weeks";
    if (projectType === "booking-app") return isSr ? "3–5 nedelja" : "3–5 weeks";
    return isSr ? "4–6 nedelja" : "4–6 weeks";
  };

  return (
    <section id="estimator" className="py-24 px-4 sm:px-6 relative bg-slate-900/40 dark:bg-black/60 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>{isSr ? "Transparentno Planiranje" : "Scope & Investment Planning"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Investicija zavisi od problema koji rešavamo" : "Investment depends on the business challenge we solve"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Jednostavan prezentacioni sajt i kompleksan sistem za zakazivanje sa automatizacijom nisu isti tip projekta. Konkretnu i fiksnu ponudu dobijate nakon kratkog razgovora."
              : "A clean presentation website and a custom booking platform with courier/SMS integrations require different architectures. You receive a guaranteed fixed quote after our brief discovery call."}
          </p>
        </div>

        {/* Interactive Scope & Requirements Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Choices */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                {isSr ? "01. Koji tip rešenja vam je potreban?" : "01. What solution category fits best?"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      projectType === t.id
                        ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 ring-1 ring-blue-500"
                        : "bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {t.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {t.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Specific Requirements */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                {isSr ? "02. Željene funkcionalnosti & automatizacije:" : "02. Required modules & automations:"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((f) => {
                  const isChecked = scopeFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                        isChecked
                          ? "bg-blue-50 dark:bg-blue-950/30 border-blue-500 text-blue-900 dark:text-blue-200"
                          : "bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${isChecked ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 dark:border-slate-700"}`}>
                        {isChecked && <CheckCircle2 size={12} />}
                      </div>
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Transparent Summary & Next Steps */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">
                {isSr ? "Procena Okvira & Principi" : "Scope & Pricing Principles"}
              </span>
              <h3 className="text-xl font-bold text-white">
                {isSr ? "Kako se formira ponuda?" : "How Pricing Is Determined"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isSr
                  ? "Nakon kratkog discovery razgovora dobijate jasan predlog obima, precizan rok i fiksnu cenu — bez skrivenih troškova i bez iznenađenja."
                  : "Following our brief discovery consultation, you receive a detailed scope breakdown, timeline commitment, and fixed price with zero surprises."}
              </p>
            </div>

            {/* Timeline & Commitment Box */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="text-slate-400">{isSr ? "Okviran rok izrade:" : "Estimated Timeline:"}</span>
                <span className="font-mono font-bold text-blue-400">{getEstimatedTimeline()}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{isSr ? "Garancija na rokove:" : "Timeline SLA:"}</span>
                <span className="font-mono font-semibold text-emerald-400">{isSr ? "100% u ugovorenom roku" : "Guaranteed in contract"}</span>
              </div>
            </div>

            {/* Value Guarantees */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>{isSr ? "Uključena obuka za samostalno upravljanje" : "Includes full client handover & training"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>{isSr ? "Postavljena analitika za praćenje rezultata" : "Full GA4 telemetry & goal attribution configured"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>{isSr ? "Čist, vlasnički kod bez mesečnih 'zakupa'" : "100% owned source code without proprietary lock-in"}</span>
              </div>
            </div>

            {/* Why pricing varies note */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                {isSr ? "Zašto se cene i obim razlikuju?" : "Why does investment vary?"}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isSr
                  ? "Cena zavisi od poslovnog cilja, kompleksnosti integracija (npr. online plaćanja, booking sistemi), pripremljenosti materijala i tehničkih zahteva — ne od proizvoljnih šablonskih paketa."
                  : "Pricing depends on your business objectives, integration complexity (payments, self-serve booking), material readiness, and custom technical requirements."}
              </p>
            </div>

            {/* Action */}
            <button
              onClick={() => {
                trackConsultationCtaClick({
                  location: "Estimator_Summary",
                  ctaText: isSr ? "Zakaži besplatnu analizu za tačnu ponudu" : "Request Scope Assessment",
                  target: "#contact",
                  serviceContext: `Estimator: ${projectType} with ${scopeFeatures.length} features`
                });
                scrollToTarget("#contact", 80);
              }}
              className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
            >
              <span>{isSr ? "Zakaži besplatnu analizu za tačnu ponudu" : "Schedule Consultation for Exact Quote"}</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
