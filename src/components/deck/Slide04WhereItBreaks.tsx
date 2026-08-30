import React from "react";
import { AlertTriangle, ArrowRight, XCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide04Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide04WhereItBreaks({ onNext, onPrev }: Slide04Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const frictionPoints = [
    isSr ? "Možda vas ne pronalazi na pretragama." : "Maybe they cannot find you on search.",
    isSr ? "Možda vas pronađe, ali ne razume šta tačno nudite." : "Maybe they find you, but do not understand your offer.",
    isSr ? "Možda razume ponudu, ali vam još ne veruje dovoljno." : "Maybe they understand, but do not trust you enough.",
    isSr ? "Možda želi da vas kontaktira, ali je proces komplikovan." : "Maybe they want to reach out, but the step is cumbersome.",
    isSr ? "Možda dobijate upite, ali gubite previše vremena na ručni rad." : "Maybe you get inquiries, but waste hours on manual overhead."
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-slate-900 dark:bg-[#05070c] text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-4xl mx-auto my-auto z-10 space-y-5 sm:space-y-6 py-2">
        
        {/* Top badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>PREKID PUTA • PREPOZNAVANJE PROBLEMA</span>
          </span>
        </div>

        {/* Dominant Headline */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            {isSr ? "Negde ovde možete da ga izgubite." : "Somewhere here, you might lose them."}
          </h2>
          
          <p className="text-sm sm:text-base text-rose-200/80 max-w-xl mx-auto">
            {isSr 
              ? "Problem je što mesto na kojem ga gubite nije uvek očigledno." 
              : "The issue is that the exact drop-off point is not always obvious."}
          </p>
        </div>

        {/* 5 Friction Points Cards */}
        <div className="space-y-2 max-w-2xl mx-auto">
          {frictionPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-200"
            >
              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Climax Conclusion Statement */}
        <div className="text-center pt-1">
          <div className="inline-block p-3.5 sm:p-5 rounded-2xl bg-slate-950 border border-rose-500/30 text-rose-200 font-display font-black text-lg sm:text-2xl shadow-xl">
            {isSr ? "Zato „treba nam novi sajt“ još nije dijagnoza." : "That is why 'we need a new website' is not yet a diagnosis."}
          </div>
        </div>

      </div>
    </div>
  );
}
