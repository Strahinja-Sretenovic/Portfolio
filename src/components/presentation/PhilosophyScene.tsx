import { useState } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Lightbulb, 
  Workflow,
  ArrowRight,
  UserCheck
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function PhilosophyScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const formulaComponents = [
    { label: "BUSINESS", descSr: "Poslovni model", descEn: "Commercial Goal" },
    { label: "CUSTOMER", descSr: "Ponašanje kupca", descEn: "Buyer Context" },
    { label: "UX", descSr: "Iskustvo & Jasnoća", descEn: "Clear Navigation" },
    { label: "TECHNOLOGY", descSr: "Brz kod & SEO", descEn: "Fast Engine" },
    { label: "DATA", descSr: "Merenje & CRO", descEn: "Telemetry" },
  ];

  return (
    <section
      id="scene-08"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-[#07090e] text-white border-t border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest">
            {isSr ? "08 / NAŠA FILOZOFIJA" : "08 / CORE PHILOSOPHY"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {isSr ? "Kod je često najlakši deo." : "Code is often the easiest part."}
          </h2>
        </div>

        {/* The 4 Core Intellectual Questions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-blue-400 font-bold">01 / ARHITEKTURA</div>
            <div className="text-xl font-bold text-white">
              {isSr ? "Teže je odlučiti šta treba napraviti." : "The hard part is deciding WHAT to build."}
            </div>
            <p className="text-xs text-slate-400">
              {isSr ? "Izbeći nepotrebne funkcije i fokusirati se samo na one koje donose novac." : "Cutting unnecessary clutter and focusing strictly on high-impact features."}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-indigo-400 font-bold">02 / PUBLIKA</div>
            <div className="text-xl font-bold text-white">
              {isSr ? "Za koga tačno pravimo." : "Understanding WHO you are building for."}
            </div>
            <p className="text-xs text-slate-400">
              {isSr ? "Razumeti motive, sumnje i brzinu donošenja odluka vašeg idealnog kupca." : "Understanding buyer psychology, skepticism, and decision speed."}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold">03 / SVRHA</div>
            <div className="text-xl font-bold text-white">
              {isSr ? "Zašto je to najbolje rešenje." : "Clarifying WHY this is the best path."}
            </div>
            <p className="text-xs text-slate-400">
              {isSr ? "Imati jasan razlog za svaki element, naslov, sliku i dugme na sajtu." : "Justifying every heading, layout block, image, and CTA."}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-emerald-400 font-bold">04 / MERENJE</div>
            <div className="text-xl font-bold text-white">
              {isSr ? "I kako ćemo znati da li radi." : "Knowing HOW we verify success."}
            </div>
            <p className="text-xs text-slate-400">
              {isSr ? "Postaviti preciznu analitiku i telemetriju konverzija od prvog dana." : "Configuring precise telemetry and conversion tracking from day one."}
            </p>
          </div>

        </div>

        {/* Visual Formula Synthesis */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0c111d] to-slate-900 border border-slate-800 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {isSr
                ? "Zato povezujemo poslovno razmišljanje, UX i development u jedan proces."
                : "That is why we unite business strategy, UX, and development into a single flow."}
            </h3>
            <p className="text-sm text-slate-400">
              {isSr
                ? "Kada ovi elementi rade u sinergiji, nastaje digitalni sistem koji donosi klijente:"
                : "When these pillars work in unison, you get a digital system that consistently generates business:"}
            </p>
          </div>

          {/* Formula Line */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-mono">
            {formulaComponents.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                  <span className="font-bold text-white">{item.label}</span>
                  <span className="hidden sm:inline text-slate-400 ml-1.5 text-xs font-sans">({isSr ? item.descSr : item.descEn})</span>
                </div>
                {idx < formulaComponents.length - 1 && (
                  <span className="text-blue-400 font-bold text-base">+</span>
                )}
              </div>
            ))}
            <span className="text-cyan-400 font-bold text-base">=</span>
            <div className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30">
              {isSr ? "POSLOVNI REZULTAT" : "COMMERCIAL RESULT"}
            </div>
          </div>
        </div>

        {/* Real Human Trust Anchor (Plural voice) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
              <UserCheck size={14} />
              <span>{isSr ? "DIREKTNA ODGOVORNOST" : "DIRECT ACCOUNTABILITY"}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {isSr ? "Iza sistema i procesa ipak stoje ljudi." : "Behind the systems and process, real experts do the work."}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isSr
                ? "Sa klijentima radimo direktno, bez slojeva komunikacije i bez neiskusnih posrednika između poslovnog problema, strategije i inženjerske implementacije."
                : "You partner directly with senior engineers and strategists — no account manager filters or lost-in-translation handoffs between problem diagnosis and code."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
            {isSr ? "BEZ POSREDNIKA • DIREKTNA SARADNJA" : "DIRECT PARTNERSHIP • NO INTERMEDIARIES"}
          </div>
        </div>

      </div>
    </section>
  );
}
