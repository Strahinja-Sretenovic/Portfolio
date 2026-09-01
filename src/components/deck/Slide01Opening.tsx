import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide01Props {
  onNext: () => void;
  onGoToForm: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide01Opening({ onNext, onGoToForm, isMobile, isWide }: Slide01Props) {
  const { t } = useLanguage();
  const copy = t.deck.opening;

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-18 pb-16 sm:pb-20 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      {/* Top Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-1 sm:pt-2 shrink-0"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400">
          <Sparkles className="w-3 h-3" />
          {copy.eyebrow}
        </span>
      </motion.div>

      {/* Center Core Message */}
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto text-center space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Main Dual Headline */}
        <div className="space-y-0.5 sm:space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`font-display font-extrabold tracking-tight text-slate-400 dark:text-slate-500 leading-tight ${
              isMobile ? "text-xl sm:text-3xl" : isWide ? "text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
          >
            {copy.title1}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight ${
              isMobile ? "text-2xl sm:text-4xl" : isWide ? "text-5xl lg:text-7xl" : "text-4xl sm:text-5xl lg:text-6xl"
            }`}
          >
            {copy.title2}
          </motion.h2>
        </div>

        {/* The Dominant Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="py-0.5 sm:py-2"
        >
          <p className={`font-display font-black text-blue-600 dark:text-blue-400 tracking-tight leading-snug ${
            isMobile ? "text-lg sm:text-2xl" : isWide ? "text-3xl lg:text-4xl" : "text-2xl sm:text-3xl"
          }`}>
            „{copy.question}”
          </p>
        </motion.div>

        {/* Short Support Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-xs sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto leading-relaxed"
        >
          {copy.support}
        </motion.p>

        {/* Minimal Customer-Path Line Visual */}
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto py-1 sm:py-2 flex items-center justify-between relative"
        >
          <div className="w-full h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/60 to-blue-500/10 dark:from-blue-400/10 dark:via-blue-400/60 dark:to-blue-400/10 relative">
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-md shadow-blue-500/50 -ml-1"
            />
          </div>
        </motion.div>

        {/* Direct Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
        >
          <button
            onClick={onGoToForm}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-display font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>{copy.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-display font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center justify-center"
          >
            {copy.hint}
          </button>
        </motion.div>

      </div>

      {/* Bottom Subtle Navigation Hint */}
      <div className="text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-500 pb-0.5 shrink-0">
        {isMobile ? t.common.swipeHint : `${t.deck.opening.hint} (ili koristite strelice na tastaturi)`}
      </div>

    </div>
  );
}
