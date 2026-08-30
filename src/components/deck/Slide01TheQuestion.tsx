import React from "react";
import { ArrowRight, ShieldCheck, Compass } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide01Props {
  onNext: () => void;
  onJumpToForm: () => void;
}

export function Slide01TheQuestion({ onNext, onJumpToForm }: Slide01Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Core Presentation Content */}
      <div className="w-full max-w-4xl mx-auto my-auto text-center z-10 space-y-6 sm:space-y-8 py-2">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>WEB STRATEGIJA • UX • DEVELOPMENT</span>
        </div>

        {/* Core Differentiation: Ne počinjemo sajtom. Počinjemo problemom. */}
        <div className="space-y-2 sm:space-y-3">
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
        <div className="space-y-4 pt-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.12] text-slate-950 dark:text-white max-w-3xl mx-auto">
            {isSr 
              ? "Gde trenutno gubite potencijalnog klijenta?" 
              : "Where are you currently losing potential clients?"}
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            {isSr 
              ? "To prvo pokušavamo da otkrijemo. Pre nego što predložimo rešenje, razumemo gde nastaje problem i šta bi zaista imalo smisla promeniti." 
              : "That is what we seek to discover first. Before proposing a solution, we understand where friction occurs and what makes sense to change."}
          </p>
        </div>

        {/* Slide Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onJumpToForm}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{isSr ? "Zatražite početnu analizu" : "Request initial audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{isSr ? "Sledeći slajd →" : "Next slide →"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
