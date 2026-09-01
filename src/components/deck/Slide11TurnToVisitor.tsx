import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide11Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide11TurnToVisitor({ onNext, onPrev: _onPrev }: Slide11Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-4xl mx-auto my-auto z-10 text-center space-y-4 sm:space-y-6 py-2">
        
        <div className="space-y-1.5 sm:space-y-3">
          <h3 className="text-base sm:text-2xl md:text-3xl font-display font-bold text-slate-500 dark:text-slate-400">
            {isSr 
              ? "Do sada smo gledali kako problem može da izgleda." 
              : "So far, we've looked at what problems look like."}
          </h3>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr ? "A šta se dešava kod vašeg biznisa?" : "What is happening in your business?"}
          </h2>
        </div>

        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          {isSr 
            ? "Pre prvog razgovora možemo da pogledamo vaš trenutni digitalni nastup i izdvojimo nekoliko konkretnih zapažanja." 
            : "Before our first call, we can review your current digital presence and prepare concrete observations."}
        </p>

        <div className="pt-1 sm:pt-2">
          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-display font-black text-xs sm:text-base shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>{isSr ? "Hajde da pogledamo — Zatražite analizu" : "Let's review — Request audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] sm:text-xs text-slate-400 max-w-lg mx-auto leading-normal">
          {isSr 
            ? "Početni pregled nije kompletan UX ili tehnički audit. Njegov cilj je da razumemo kontekst pre razgovora." 
            : "Initial review is not an exhaustive technical audit. Its purpose is establishing clear context prior to discussion."}
        </p>

      </div>
    </div>
  );
}
