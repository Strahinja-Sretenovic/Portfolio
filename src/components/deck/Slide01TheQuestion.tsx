import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide01Props {
  onNext: () => void;
  onJumpToForm: () => void;
}

export function Slide01TheQuestion({ onNext, onJumpToForm }: Slide01Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[540px] h-[240px] sm:h-[540px] bg-blue-600/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      {/* Core Presentation Content */}
      <div className="w-full max-w-4xl mx-auto my-auto text-center z-10 space-y-4 sm:space-y-6 py-2">
        
        {/* Approach Header */}
        <div className="space-y-1 sm:space-y-2">
          <p className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 font-semibold">
            {isSr ? "Naš pristup radu" : "Our approach"}
          </p>

          <div className="space-y-0.5 sm:space-y-1.5">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-400 dark:text-slate-500 line-through decoration-rose-500/70 decoration-2 sm:decoration-3">
              {isSr ? "Ne počinjemo sajtom." : "We don't start with a website."}
            </h2>
            
            <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-blue-600 dark:text-blue-400">
              {isSr ? "Počinjemo problemom." : "We start with the problem."}
            </h2>
          </div>
        </div>

        {/* The Dominant Question */}
        <div className="space-y-2 sm:space-y-3 pt-1">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-display font-black tracking-tight leading-tight text-slate-950 dark:text-white max-w-3xl mx-auto">
            {isSr 
              ? "Gde trenutno gubite potencijalnog klijenta?" 
              : "Where are you currently losing potential clients?"}
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            {isSr 
              ? "To prvo pokušavamo da otkrijemo. Pre nego što predložimo rešenje, razumemo gde nastaje problem i šta bi zaista imalo smisla promeniti." 
              : "That is what we seek to discover first. Before proposing a solution, we understand where friction occurs and what actually makes sense to change."}
          </p>
        </div>

        {/* Slide Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
          <button
            onClick={onJumpToForm}
            className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{isSr ? "Zatražite početnu analizu" : "Request initial audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{isSr ? "Sledeći slajd →" : "Next slide →"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
