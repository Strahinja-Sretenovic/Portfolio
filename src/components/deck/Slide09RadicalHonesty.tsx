import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide09Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide09RadicalHonesty({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide09Props) {
  const { t } = useLanguage();
  const copy = t.deck.honesty;

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-slate-950 text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto text-center space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Core Question & Direct Answer */}
        <div className="space-y-1.5 sm:space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-extrabold tracking-tight text-slate-400 leading-tight ${
              isMobile ? "text-lg sm:text-2xl" : "text-2xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.question}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className={`font-display font-black text-blue-400 tracking-tight ${
              isMobile ? "text-3xl sm:text-5xl" : "text-4xl sm:text-6xl md:text-7xl"
            }`}
          >
            {copy.answer}
          </motion.div>
        </div>

        {/* Support Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          {copy.support}
        </motion.p>

        {/* The Two Goals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="pt-2 sm:pt-5 border-t border-white/10 max-w-xl mx-auto space-y-0.5 sm:space-y-1"
        >
          <p className="text-xs sm:text-lg font-display font-bold text-slate-400">
            {copy.goal1}
          </p>
          <p className="text-base sm:text-2xl md:text-3xl font-display font-black text-blue-400">
            {copy.goal2}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
