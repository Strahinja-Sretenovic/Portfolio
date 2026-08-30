import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide11Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide11TurnToVisitor({ onNext, onPrev }: Slide11Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-4xl mx-auto my-auto z-10 text-center space-y-6 sm:space-y-7 py-2">
        
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">
            VAŠ BIZNIS • POČETNI PREGLED
          </span>

          <h3 className="text-xl sm:text-3xl font-display font-bold text-slate-500 dark:text-slate-400">
            {isSr 
              ? "Do sada smo gledali kako problem može da izgleda." 
              : "So far, we've looked at what problems look like."}
          </h3>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr ? "A šta se dešava kod vašeg biznisa?" : "What is happening in your business?"}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          {isSr 
            ? "Pre prvog razgovora možemo da pogledamo vaš trenutni digitalni nastup i izdvojimo nekoliko konkretnih zapažanja." 
            : "Before our first call, we can review your current digital presence and prepare concrete observations."}
        </p>

        <div className="pt-1">
          <button
            onClick={onNext}
            className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-display font-black text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-3 cursor-pointer"
          >
            <span>{isSr ? "Hajde da pogledamo — Zatražite analizu" : "Let's review — Request audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          {isSr 
            ? "Početni pregled nije kompletan UX ili tehnički audit. Njegov cilj je da razumemo kontekst pre razgovora." 
            : "Initial review is not an exhaustive technical audit. Its purpose is establishing clear context prior to discussion."}
        </p>

      </div>
    </div>
  );
}
