import { useState } from "react";
import { motion } from "motion/react";
import { 
  Wrench, 
  Check, 
  Layers, 
  Code2, 
  Search, 
  TrendingUp, 
  Calendar, 
  Bot, 
  Laptop, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface SolutionsSceneProps {
  onOpenServiceModal?: (serviceId?: string) => void;
}

export function SolutionsScene({ onOpenServiceModal }: SolutionsSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const tools = [
    { name: isSr ? "Web strategija" : "Web Strategy", icon: <Layers className="w-4 h-4 text-blue-500" /> },
    { name: isSr ? "Informaciona Arhitektura" : "Information Architecture", icon: <Layers className="w-4 h-4 text-indigo-500" /> },
    { name: isSr ? "UX & UI Dizajn" : "UX & UI Design", icon: <Laptop className="w-4 h-4 text-cyan-500" /> },
    { name: isSr ? "Custom Development" : "Custom Development", icon: <Code2 className="w-4 h-4 text-purple-500" /> },
    { name: isSr ? "Tehnički SEO" : "Technical SEO", icon: <Search className="w-4 h-4 text-emerald-500" /> },
    { name: isSr ? "CRO Optimizacija" : "CRO Optimization", icon: <TrendingUp className="w-4 h-4 text-amber-500" /> },
    { name: isSr ? "GA4 Analitika" : "GA4 Telemetry", icon: <Sparkles className="w-4 h-4 text-teal-500" /> },
    { name: isSr ? "Booking Sistemi" : "Booking Engines", icon: <Calendar className="w-4 h-4 text-rose-500" /> },
    { name: isSr ? "Automatizacija" : "Automation", icon: <Bot className="w-4 h-4 text-blue-400" /> },
    { name: isSr ? "Namenske Web Aplikacije" : "Custom Web Apps", icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
  ];

  const businessScenarios = [
    {
      titleSr: "Nekome je potreban nov autoritativan sajt",
      titleEn: "Some need an authoritative new website",
      descSr: "Kada biznis nema digitalnu bazu ili je postojeća tehnološki zastarela.",
      descEn: "When the business lacks a modern digital home or foundation."
    },
    {
      titleSr: "Nekome bolji Google nastup i lokalni SEO",
      titleEn: "Some need better Google Search visibility",
      descSr: "Kada je ponuda odlična, ali vas lokalni kupci ne pronalaze na mapi.",
      descEn: "When the offer is strong, but local search discovery is weak."
    },
    {
      titleSr: "Nekome jednostavniji booking i zakazivanje",
      titleEn: "Some need a streamlined booking flow",
      descSr: "Kada telefon zvoni ceo dan, a termini se gube u porukama.",
      descEn: "When inquiries are high but appointment capture is manual chaos."
    },
    {
      titleSr: "Nekome bolja prezentacija ponude i cena",
      titleEn: "Some need clear offer & pricing clarity",
      descSr: "Kada posetioci dolaze, ali odlaze pre nego što shvate zašto ste bolji.",
      descEn: "When traffic arrives but bounces before understanding your value."
    },
    {
      titleSr: "Nekome automatizacija i ušteda sati rada",
      titleEn: "Some need automated client workflows",
      descSr: "Kada repetitivni administrativni zadaci guše rast poslovanja.",
      descEn: "When administrative tasks stifle operational efficiency."
    },
    {
      titleSr: "Nekome samo nekoliko preciznih izmena",
      titleEn: "Some need only precision CRO adjustments",
      descSr: "Kada je osnova dobra, ali sitne prepreke smanjuju broj poziva za 50%.",
      descEn: "When core structure is solid, but small UX friction halves conversion."
    },
  ];

  return (
    <section
      id="scene-05"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "05 / TEHNOLOGIJA KAO ALAT, NE CILJ" : "05 / TOOLS & REAL SCOPE"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Tek kada razumemo problem, biramo alat." : "Only after diagnosing the problem do we choose the tools."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Tehnologije nisu proizvodi koje namećemo klijentu. To su inženjerski instrumenti kojima rešavamo precizno definisan zadatak."
              : "Technologies are not pre-packaged bundles we push onto clients. They are precision engineering tools used to solve specific commercial friction."}
          </p>
        </div>

        {/* Tools Palette Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isSr ? "NAŠ INŽENJERSKI ARSENAL ALATA" : "OUR ENGINEERING TOOLKIT"}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {tool.icon}
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Philosophy: "Ne treba svakom biznisu sve" */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
              {isSr ? "Ne treba svakom biznisu sve." : "Not every business needs everything."}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
              {isSr ? "Svaki projekat dobija tačno onaj opseg koji donosi maksimalan povrat na ulaganje:" : "Every engagement receives exactly the scope that maximizes ROI:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono">
                  <Check size={14} />
                  <span>0{idx + 1}</span>
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {isSr ? item.titleSr : item.titleEn}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isSr ? item.descSr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Climax Statement */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {isSr ? "ZAKLJUČAK" : "CORE PRINCIPLE"}
            </div>
            <h4 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              {isSr ? "Pravi problem određuje pravo rešenje." : "The real problem dictates the right solution."}
            </h4>
          </div>

          {onOpenServiceModal && (
            <button
              onClick={() => onOpenServiceModal()}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0 border border-white/10"
            >
              <span>{isSr ? "Pogledajte detaljan pregled usluga" : "View Detailed Service Specs"}</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
