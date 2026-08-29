import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowDown, 
  Check, 
  HelpCircle, 
  Search, 
  Layers, 
  Calendar, 
  Bot, 
  Sparkles, 
  Laptop
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function TherapyDiagnosisScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [questionMarksRemoved, setQuestionMarksRemoved] = useState<boolean>(true);

  const diagnosisSteps = [
    { number: "01", nameSr: "PROBLEM", nameEn: "PROBLEM", descSr: "Gde biznis gubi kupce ili gubi vreme", descEn: "Where the business loses leads or time" },
    { number: "02", nameSr: "DOKAZI", nameEn: "EVIDENCE", descSr: "Merenje poseta, ponašanje korisnika, analitika", descEn: "Traffic telemetry, user bounce, data signals" },
    { number: "03", nameSr: "UZROK", nameEn: "ROOT CAUSE", descSr: "Zašto se to događa (UX, ponuda, poverenje ili brzina)", descEn: "Underlying friction (UX, offer, trust, or speed)" },
    { number: "04", nameSr: "PRIORITET", nameEn: "PRIORITY", descSr: "Šta donosi najveći efekat uz najmanje ulaganje", descEn: "Highest leverage intervention with lowest friction" },
    { number: "05", nameSr: "REŠENJE", nameEn: "SOLUTION", descSr: "Izbor tačnih alata i tehnička izvedba", descEn: "Exact tool selection and precise engineering" },
  ];

  const toolsOptions = [
    { nameSr: "Novi sajt", nameEn: "New Website", icon: <Laptop size={14} className="text-blue-500" /> },
    { nameSr: "SEO & Mape", nameEn: "SEO & Maps", icon: <Search size={14} className="text-emerald-500" /> },
    { nameSr: "Booking sistem", nameEn: "Booking Engine", icon: <Calendar size={14} className="text-purple-500" /> },
    { nameSr: "Landing stranica", nameEn: "Landing Page", icon: <Layers size={14} className="text-cyan-500" /> },
    { nameSr: "Automatizacija", nameEn: "Automation", icon: <Bot size={14} className="text-amber-500" /> },
    { nameSr: "Redizajn i CRO", nameEn: "CRO Redesign", icon: <Sparkles size={14} className="text-teal-500" /> },
  ];

  return (
    <section
      id="scene-06"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "06 / DIJAGNOZA PRE TERAPIJE" : "06 / DIAGNOSIS BEFORE PRESCRIPTION"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Ne propisujemo terapiju pre dijagnoze." : "We never prescribe therapy before diagnosis."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "U inženjeringu, kao i u medicini: prepisivanje rešenja napamet pre detaljnog pregleda je neodgovorno."
              : "In software engineering, just as in medicine: prescribing solutions blindly before a thorough examination is irresponsible."}
          </p>
        </div>

        {/* 5-Step Diagnosis Waterfall Matrix */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-8">
          
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider text-center">
            {isSr ? "PROCES DONOŠENJA TEHNIČKE ODLUKE" : "ENGINEERING DECISION PIPELINE"}
          </div>

          {/* Sequential Waterfall */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {diagnosisSteps.map((step, idx) => (
              <div
                key={step.number}
                className="p-4 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-3 relative shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                    {step.number}
                  </span>
                  {idx < 4 && (
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700 text-xs font-bold">→</span>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {isSr ? step.nameSr : step.nameEn}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {isSr ? step.descSr : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Resolution State */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                  {isSr ? "TEK TADA ODLUČUJEMO ŠTA IMA SMISLA NAPRAVITI" : "ONLY THEN DO WE DECIDE WHAT MAKES COMMERCIAL SENSE"}
                </span>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {questionMarksRemoved 
                    ? (isSr ? "Pravi problem određuje pravi alat." : "The right problem determines the right tool.")
                    : (isSr ? "Koji od ovih alata je zapravo potreban vašem biznisu?" : "Which tool does your business actually need?")
                  }
                </div>
              </div>

              <button
                onClick={() => setQuestionMarksRemoved(!questionMarksRemoved)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {questionMarksRemoved ? (isSr ? "Prikaži upitnike" : "Show ?") : (isSr ? "Ukloni upitnike ✓" : "Resolve ?")}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {toolsOptions.map((tool, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    {tool.icon}
                    <span>{isSr ? tool.nameSr : tool.nameEn}</span>
                  </div>
                  <span className={`font-mono font-bold text-xs ${questionMarksRemoved ? "text-emerald-500" : "text-amber-500"}`}>
                    {questionMarksRemoved ? "✓" : "?"}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 13 Climax: "Ne treba svakom biznisu sve" */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {isSr ? "Ne treba svakom biznisu sve." : "Not every business needs everything."}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              {isSr
                ? "Nekome je potreban kompletan novi web sistem. Nekome je dovoljno optimizovati Google Maps profil ili ubrzati booking za 2 sekunde."
                : "Some need a full web platform. Others only need Google Maps optimization or a 2-second speedup in their booking flow."}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold shrink-0">
            {isSr ? "TAČNO DOZIRANJE OBIMA" : "PRECISION SCOPING"}
          </div>
        </div>

      </div>
    </section>
  );
}
