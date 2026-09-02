import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide06Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide06RightTool({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide06Props) {
  const { t } = useLanguage();
  const copy = t.deck.tool;

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-slate-900 dark:bg-[#05070c] text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Header */}
        <div className="text-center space-y-1 sm:space-y-1.5 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-white leading-tight ${
              isMobile ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.title}
          </motion.h2>
          <p className="text-[11px] sm:text-base text-blue-400 font-display font-medium">
            {copy.subtitle}
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 max-w-4xl mx-auto">
          {copy.matrix.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-2 text-xs sm:text-sm"
            >
              <div className="space-y-0.5 max-w-[48%] text-left">
                <span className="text-[9px] sm:text-[10px] font-mono text-rose-400 uppercase font-bold">
                  PROBLEM
                </span>
                <p className="font-display font-bold text-slate-200 text-[11px] sm:text-sm leading-tight break-words">
                  {item.problem}
                </p>
              </div>

              <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />

              <div className="space-y-0.5 max-w-[48%] text-right">
                <span className="text-[9px] sm:text-[10px] font-mono text-blue-400 uppercase font-bold">
                  REŠENJE
                </span>
                <p className="font-display font-bold text-blue-400 text-[11px] sm:text-sm leading-tight break-words">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <div className="text-center pt-1.5 sm:pt-2 border-t border-white/10 max-w-xl mx-auto">
          <p className="text-[11px] sm:text-sm text-slate-400 font-medium">
            {copy.punchline}
          </p>
        </div>

      </div>
    </div>
  );
}
