import React from "react";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act1Props {
  onExploreClick: () => void;
  onCtaClick: () => void;
}

export function Act1TheQuestion({ onExploreClick, onCtaClick }: Act1Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section 
      id="act-1-the-question"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 pt-28 pb-16 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white overflow-hidden"
    >
      {/* Subtle brand glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top minimal status bar */}
      <div className="w-full max-w-5xl flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>WEB STRATEGIJA • UX • DEVELOPMENT</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span>DIJAGNOSTIKA PRE REALIZACIJE</span>
        </div>
      </div>

      {/* Main Hero Presentation Stage */}
      <div className="w-full max-w-4xl mx-auto my-auto text-center z-10 py-10 sm:py-16 space-y-8 sm:space-y-10">
        
        {/* Core Positioning: Ne počinjemo sajtom. Počinjemo problemom. */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400">
            {isSr ? "Naš pristup radu" : "Our approach"}
          </p>

          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-slate-400 dark:text-slate-500 line-through decoration-rose-500/70 decoration-2 sm:decoration-4">
              {isSr ? "Ne počinjemo sajtom." : "We don't start with a website."}
            </h2>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-blue-600 dark:text-blue-400">
              {isSr ? "Počinjemo problemom." : "We start with the problem."}
            </h2>
          </div>
        </div>

        {/* The Dominant Question */}
        <div className="space-y-4 sm:space-y-6 pt-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.12] text-slate-950 dark:text-white max-w-3xl mx-auto">
            {isSr 
              ? "Gde trenutno gubite potencijalnog klijenta?" 
              : "Where are you currently losing potential clients?"}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            {isSr 
              ? "Pre nego što predložimo rešenje, pokušavamo da razumemo gde nastaje problem i šta bi zaista imalo smisla promeniti." 
              : "Before suggesting a solution, we seek to understand where friction occurs and what genuinely makes sense to change."}
          </p>
        </div>

        {/* Primary & Secondary Actions */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{isSr ? "Zatražite početnu analizu" : "Request initial audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{isSr ? "Pogledajte kako razmišljamo ↓" : "See how we think ↓"}</span>
          </button>
        </div>
      </div>

      {/* The One Customer Path line beginning */}
      <div className="w-full flex flex-col items-center justify-center gap-2 z-10 pointer-events-none">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          {isSr ? "Put kupca počinje ovde" : "Customer path begins here"}
        </span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}
