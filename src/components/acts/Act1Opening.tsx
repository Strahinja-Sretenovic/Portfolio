import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act1Props {
  onExploreClick: () => void;
  onCtaClick: () => void;
}

export function Act1Opening({ onExploreClick, onCtaClick }: Act1Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute transformation factor based on the first 280px of scroll
  const progress = Math.min(1, Math.max(0, scrollY / 280));

  return (
    <section 
      id="act-1-opening"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 pt-28 pb-16 overflow-hidden bg-white dark:bg-[#07090e] text-slate-900 dark:text-white"
    >
      {/* Subtle ambient brand blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[580px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top minimal status bar */}
      <div className="w-full max-w-5xl flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>SSOLUTIONS • DIGITALNA STRATEGIJA</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span>DIJAGNOSTIKA PRE REALIZACIJE</span>
        </div>
      </div>

      {/* Center Main Stage: The Opening Transformation */}
      <div className="w-full max-w-4xl mx-auto my-auto text-center z-10 py-8 sm:py-16">
        
        {/* Step 1: "Ne počinjemo sajtom." -> "Počinjemo pitanjem." */}
        <div className="relative mb-6 sm:mb-8">
          <p 
            className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3 transition-opacity duration-300"
            style={{ opacity: 1 - progress * 0.3 }}
          >
            {isSr ? "Naš pristup poslu" : "Our approach"}
          </p>

          <div className="relative inline-block text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
            <span>{isSr ? "Ne počinjemo " : "We don't start with a "}</span>
            
            {/* The word "sajtom" dissolves as user engages */}
            <span 
              className="inline-block relative text-slate-400 dark:text-slate-500 line-through decoration-rose-500/80 decoration-2 sm:decoration-4 transition-all duration-500"
              style={{
                opacity: 1 - progress * 0.75,
                transform: `translateY(${progress * 6}px)`
              }}
            >
              {isSr ? "sajtom." : "website."}
            </span>

            {/* "Počinjemo pitanjem" emerges */}
            <div 
              className="mt-2 text-blue-600 dark:text-blue-400 transition-all duration-500"
              style={{
                opacity: 0.35 + progress * 0.65,
                transform: `scale(${0.97 + progress * 0.03})`
              }}
            >
              {isSr ? "Počinjemo pitanjem." : "We start with a question."}
            </div>
          </div>
        </div>

        {/* The Dominant Question */}
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.12] text-slate-950 dark:text-white max-w-3xl mx-auto">
            {isSr 
              ? "Gde trenutno gubite potencijalnog klijenta?" 
              : "Where are you currently losing potential clients?"}
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto">
            {isSr 
              ? "To prvo pokušavamo da otkrijemo." 
              : "That is the first thing we uncover."}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{isSr ? "Pogledajte kako" : "See how"}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{isSr ? "Zatražite analizu" : "Request audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Connector Line */}
      <div className="w-full flex flex-col items-center justify-center gap-2 z-10 pointer-events-none">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {isSr ? "Perspektiva kupca" : "Buyer's perspective"}
        </span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}
