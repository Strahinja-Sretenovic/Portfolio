import React from "react";
import { AlertTriangle, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide04Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide04Break({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide04Props) {
  const { t } = useLanguage();
  const copy = t.deck.break;

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-slate-900 dark:bg-[#05070c] text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Header */}
        <div className="text-center space-y-1 sm:space-y-1.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-[10px] sm:text-xs font-mono font-bold text-rose-400 uppercase">
            <AlertTriangle className="w-3 h-3" />
            {t.deck.break.subtitle}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-white leading-tight ${
              isMobile ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.title}
          </motion.h2>
        </div>

        {/* 4 Break Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-3xl mx-auto">
          {copy.points.map((point, idx) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-rose-500/20 flex items-start gap-2.5 sm:gap-3 text-left shadow-xs"
            >
              <div className="p-1 sm:p-1.5 rounded-lg bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-rose-400 font-bold">{point.num}</span>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Punchline Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center pt-1.5 sm:pt-4 border-t border-white/10 max-w-xl mx-auto"
        >
          <p className="text-sm sm:text-2xl font-display font-black text-rose-400 leading-snug">
            {copy.punchline}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
