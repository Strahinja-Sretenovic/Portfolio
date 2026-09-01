import React, { useState } from "react";
import { Search, Compass, Layout, Code2, Rocket, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide07Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide07Process({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide07Props) {
  const { t } = useLanguage();
  const copy = t.deck.process;
  const [activeStage, setActiveStage] = useState<number>(0);

  const stageIcons = [Search, Compass, Layout, Code2, Rocket, BarChart3];
  const currentStage = copy.stages[activeStage] || copy.stages[0];

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-6xl" : "max-w-5xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
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

        {/* 6 Stage Process Bar / Pills */}
        <div className="flex sm:grid sm:grid-cols-6 gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {copy.stages.map((stage, idx) => {
            const Icon = stageIcons[idx] || Rocket;
            const isSelected = activeStage === idx;

            return (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer space-y-0.5 sm:space-y-1 shrink-0 sm:shrink min-w-[85px] sm:min-w-0 flex-1 ${
                  isSelected
                    ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] sm:text-[10px] font-mono font-bold ${isSelected ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
                    {stage.num}
                  </span>
                  <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isSelected ? "text-white" : "text-slate-400"}`} />
                </div>

                <div className="text-[11px] sm:text-xs font-display font-bold leading-tight truncate">
                  {stage.title}
                </div>

                <p className={`text-[9px] sm:text-[11px] truncate ${isSelected ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                  {stage.phrase}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <motion.div
          key={currentStage.num}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-white/10 shadow-xl space-y-1.5 sm:space-y-2 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400 text-[11px] sm:text-xs font-mono font-bold">
              <span>{currentStage.num}</span>
              <span>•</span>
              <span>{currentStage.code}</span>
            </div>
            <span className="text-[11px] sm:text-xs font-display font-semibold text-slate-400">{currentStage.title}</span>
          </div>

          <p className="text-xs sm:text-base text-slate-200 font-display font-bold leading-snug">
            „{currentStage.phrase}”
          </p>

          <div className="pt-1.5 sm:pt-2 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono">
            <span className="text-slate-400">Ishod / Rezultat:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {currentStage.deliverable}
            </span>
          </div>
        </motion.div>

        {/* Punchline */}
        <div className="text-center pt-1 border-t border-slate-200 dark:border-white/10 max-w-xl mx-auto space-y-0.5">
          <p className="text-xs sm:text-base font-display font-black text-slate-900 dark:text-white">
            {copy.punchline}
          </p>
          <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 font-medium">
            {copy.punchlineSub}
          </p>
        </div>

      </div>
    </div>
  );
}
