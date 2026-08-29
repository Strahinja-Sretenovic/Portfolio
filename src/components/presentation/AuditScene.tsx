import { useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Send, 
  Search, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  FileCheck2
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToTarget } from "../SmoothScroll";
import { trackConsultationCtaClick } from "../../utils/analytics";

export function AuditScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const auditSteps = [
    {
      number: "01",
      titleSr: "Pošaljete nam biznis",
      titleEn: "Send us your business link",
      descSr: "Dovoljan je link ka sajtu, Instagramu, Google profilu ili samo naziv firme.",
      descEn: "Website link, Instagram page, Google maps profile, or business name is enough.",
      icon: <Send className="w-5 h-5 text-blue-500" />
    },
    {
      number: "02",
      titleSr: "Mi radimo domaći",
      titleEn: "We do our homework",
      descSr: "Pre razgovora detaljno pregledamo vaš mobilni UX, brzinu, pretragu i konkurenciju.",
      descEn: "Prior to our call, we inspect your mobile UX, search presence, and competitor positioning.",
      icon: <Search className="w-5 h-5 text-indigo-500" />
    },
    {
      number: "03",
      titleSr: "Dolazimo sa zapažanjima",
      titleEn: "We arrive with observations",
      descSr: "Na kratkom razgovoru (15–30 min) preskačemo prodajne fraze i prelazimo na zapažanja.",
      descEn: "On our 15–30 min call, we skip sales pitches and review actionable diagnostic findings.",
      icon: <Briefcase className="w-5 h-5 text-cyan-500" />
    },
    {
      number: "04",
      titleSr: "Predlažemo sledeći korak",
      titleEn: "We propose the next move",
      descSr: "Znaćete tačno šta ima smisla raditi, a šta ne — bez pritiska i bez obaveze.",
      descEn: "You receive unambiguous guidance on what to build or what to leave alone — zero pressure.",
      icon: <FileCheck2 className="w-5 h-5 text-emerald-500" />
    }
  ];

  const handleStartAudit = () => {
    trackConsultationCtaClick({
      location: "AuditScene_Scene13",
      ctaText: "Zatražite besplatnu analizu",
      target: "#scene-14",
      serviceContext: "free_initial_audit",
    });
    scrollToTarget("#scene-14", 60);
  };

  return (
    <section
      id="scene-13"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "13 / BESPLATNA POČETNA ANALIZA" : "13 / FREE INITIAL AUDIT"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Hajde da pogledamo vaš biznis." : "Let's take a look at your business."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Pre prvog razgovora pregledaćemo vaš trenutni digitalni nastup kako ne bismo trošili vreme na generičku prodajnu prezentaciju."
              : "Before our first call, we will inspect your current digital footprint so we don't waste time on generic sales presentations."}
          </p>
        </div>

        {/* 4 Steps Progression Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {auditSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200/60 dark:border-white/5">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isSr ? step.titleSr : step.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isSr ? step.descSr : step.descEn}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>{isSr ? "Predvidiv korak" : "Predictable Step"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Trust Promise Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
            <ShieldCheck size={16} />
            <span>{isSr ? "NAŠA GARANCIJA ISKRENOSTI" : "OUR HONESTY COMMITMENT"}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {isSr
              ? "Ako smatramo da vam novi sajt trenutno nije potreban, reći ćemo vam."
              : "If we believe a new website is unnecessary right now, we will tell you directly."}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isSr
              ? "Početna analiza nije kompletan UX/SEO audit, već pregled ključnih tačaka pre razgovora. Cilj je da odmah identifikujemo gde nastaje prekid i predložimo najisplativiji potez."
              : "The initial analysis is not an exhaustive audit, but a review of critical decision nodes before we talk. The goal is to immediately identify bottlenecks and propose the most leverage-driven move."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleStartAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all cursor-pointer"
            >
              <Sparkles size={18} />
              <span>{isSr ? "ZATRAŽITE BESPLATNU POČETNU ANALIZU" : "REQUEST FREE INITIAL AUDIT"}</span>
              <ArrowRight size={16} />
            </button>
            <span className="text-xs text-slate-400">
              {isSr ? "Bez obaveze. Bez generičke prezentacije." : "Zero obligation. No generic sales pitches."}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
