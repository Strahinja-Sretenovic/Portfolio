import React, { useState } from "react";
import { Eye, FileText, ShieldCheck, MousePointerClick, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide05Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide05Diagnosis({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide05Props) {
  const { t } = useLanguage();
  const copy = t.deck.diagnosis;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const dimIcons = [Eye, FileText, ShieldCheck, MousePointerClick, Cpu];
  const currentDim = copy.dimensions[activeIdx] || copy.dimensions[0];

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Header */}
        <div className="text-center space-y-1 sm:space-y-1.5 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight ${
              isMobile ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.title}
          </motion.h2>
          <p className="text-[11px] sm:text-base text-slate-600 dark:text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        {/* 5 Categories Selector */}
        <div className="flex sm:grid sm:grid-cols-5 gap-1.5 sm:gap-2.5 max-w-4xl mx-auto overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {copy.dimensions.map((dim, idx) => {
            const Icon = dimIcons[idx] || Eye;
            const isActive = activeIdx === idx;

            return (
              <button
                key={dim.code}
                onClick={() => setActiveIdx(idx)}
                className={`p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border text-center transition-all cursor-pointer space-y-0.5 sm:space-y-1 shrink-0 sm:shrink min-w-[70px] sm:min-w-0 flex-1 ${
                  isActive
                    ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-white/20"
                }`}
              >
                <span className={`text-[9px] sm:text-[10px] font-mono font-bold block ${isActive ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
                  {dim.code}
                </span>

                <div className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto rounded-lg flex items-center justify-center ${
                  isActive ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                }`}>
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                <div className="text-[10px] sm:text-xs font-display font-bold leading-tight truncate">
                  {dim.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Box */}
        <motion.div
          key={currentDim.code}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-3.5 sm:p-6 rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-700 dark:border-white/10 text-white space-y-1.5 sm:space-y-2 shadow-xl max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-blue-400 font-bold">
            <span>{currentDim.code}</span>
            <span>•</span>
            <span>{currentDim.name}</span>
          </div>

          <p className="text-xs sm:text-lg font-display font-bold text-white leading-snug">
            „{currentDim.question}”
          </p>

          <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed">
            {currentDim.details}
          </p>
        </motion.div>

        {/* Punchline */}
        <div className="text-center pt-1 border-t border-slate-200 dark:border-white/10 max-w-xl mx-auto">
          <p className="text-[11px] sm:text-base font-display font-bold text-slate-900 dark:text-white">
            {copy.punchline}
          </p>
        </div>

      </div>
    </div>
  );
}
