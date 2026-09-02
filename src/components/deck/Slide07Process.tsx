import React, { useState } from "react";
import { Search, Compass, Layout, Code2, Rocket, BarChart3, CheckCircle2, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide07Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide07Process({ isMobile, isWide }: Slide07Props) {
  const { t } = useLanguage();
  const copy = t.deck.process;
  const [activeStage, setActiveStage] = useState<number>(0);
  // Mobile pagination state (3 items per page: Page 0 = stages 0,1,2; Page 1 = stages 3,4,5)
  const [mobilePage, setMobilePage] = useState<number>(0);

  const stageIcons = [Search, Compass, Layout, Code2, Rocket, BarChart3];
  const totalStages = copy.stages.length;
  const currentStage = copy.stages[activeStage] || copy.stages[0];

  const handleSelectStage = (idx: number) => {
    setActiveStage(idx);
    if (isMobile) {
      setMobilePage(idx >= 3 ? 1 : 0);
    }
  };

  const handlePrevStage = () => {
    const nextIdx = activeStage > 0 ? activeStage - 1 : totalStages - 1;
    handleSelectStage(nextIdx);
  };

  const handleNextStage = () => {
    const nextIdx = activeStage < totalStages - 1 ? activeStage + 1 : 0;
    handleSelectStage(nextIdx);
  };

  const visibleMobileStages = mobilePage === 0
    ? copy.stages.slice(0, 3)
    : copy.stages.slice(3, 6);

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 pb-20 sm:pb-20 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-6xl" : "max-w-5xl"} mx-auto space-y-2.5 sm:space-y-5 my-auto py-1 sm:py-2`}>
        
        {/* Header */}
        <div className="text-center space-y-1 sm:space-y-1.5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-[10px] sm:text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase"
          >
            <Zap className="w-3 h-3" />
            <span>INŽENJERSKI TOK U 6 FAZA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight ${
              isMobile ? "text-lg sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.title}
          </motion.h2>
          <p className="text-[11px] sm:text-base text-slate-600 dark:text-slate-300 leading-snug">
            {copy.subtitle}
          </p>
        </div>

        {/* 6 Stage Process Bar / Pills Container with swipe protection */}
        <div data-prevent-deck-swipe="true" className="w-full max-w-5xl mx-auto space-y-2">
          
          {/* Mobile Paginated View (3 items visible per page with explicit Prev/Next arrows) */}
          {isMobile ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {mobilePage === 0 ? "Faze 01 - 03" : "Faze 04 - 06"} (od 06)
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setMobilePage(0)}
                    disabled={mobilePage === 0}
                    className="p-1 rounded-lg bg-slate-100 dark:bg-white/10 disabled:opacity-30 active:scale-95 text-slate-800 dark:text-white cursor-pointer"
                    aria-label="Prethodne faze"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1 px-1">
                    <span className={`w-2 h-2 rounded-full transition-all ${mobilePage === 0 ? "bg-blue-600 w-3.5" : "bg-slate-300 dark:bg-white/20"}`} />
                    <span className={`w-2 h-2 rounded-full transition-all ${mobilePage === 1 ? "bg-blue-600 w-3.5" : "bg-slate-300 dark:bg-white/20"}`} />
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobilePage(1)}
                    disabled={mobilePage === 1}
                    className="p-1 rounded-lg bg-slate-100 dark:bg-white/10 disabled:opacity-30 active:scale-95 text-slate-800 dark:text-white cursor-pointer"
                    aria-label="Sledeće faze"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 items grid for mobile */}
              <div className="grid grid-cols-3 gap-1.5">
                {visibleMobileStages.map((stage) => {
                  const globalIdx = copy.stages.findIndex((s) => s.num === stage.num);
                  const Icon = stageIcons[globalIdx] || Rocket;
                  const isSelected = activeStage === globalIdx;

                  return (
                    <button
                      type="button"
                      key={stage.num}
                      onClick={() => handleSelectStage(globalIdx)}
                      className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between items-start gap-1 min-h-[76px] ${
                        isSelected
                          ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/50"
                          : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-[9px] font-mono font-bold ${isSelected ? "text-blue-100" : "text-blue-600 dark:text-blue-400"}`}>
                          {stage.num}
                        </span>
                        <div className={`p-1 rounded-md ${isSelected ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                          <Icon className="w-3 h-3" />
                        </div>
                      </div>

                      <div className="text-[10px] font-display font-extrabold leading-tight break-words w-full">
                        {stage.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Desktop/Tablet 6-Column Grid */
            <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
              {copy.stages.map((stage, idx) => {
                const Icon = stageIcons[idx] || Rocket;
                const isSelected = activeStage === idx;

                return (
                  <button
                    type="button"
                    key={stage.num}
                    onClick={() => handleSelectStage(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer space-y-1 flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                        : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
                        {stage.num}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-400"}`} />
                    </div>

                    <div>
                      <div className="text-xs font-display font-bold leading-tight break-words">
                        {stage.title}
                      </div>
                      <p className={`text-[10px] mt-0.5 leading-snug ${isSelected ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                        {stage.phrase}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Stage Detailed Card (Full text, fully visible with no truncations) */}
          <div data-prevent-deck-swipe="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.num}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-700/80 dark:border-white/10 shadow-xl space-y-2 sm:space-y-2.5 max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400 text-[10px] sm:text-xs font-mono font-bold">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30">FAZA {currentStage.num}</span>
                    <span>•</span>
                    <span className="text-white tracking-wide uppercase">{currentStage.code}</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400">
                    0{activeStage + 1} / 0{totalStages}
                  </span>
                </div>

                {/* Phrase */}
                <p className="text-xs sm:text-base font-display font-bold text-white leading-snug break-words">
                  „{currentStage.phrase}”
                </p>

                {/* Deliverable result box */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    Jasno definisan ishod faze:
                  </span>
                  <div className="text-emerald-400 font-display font-bold text-xs sm:text-sm flex items-start sm:items-center gap-1.5 leading-snug break-words">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                    <span>{currentStage.deliverable}</span>
                  </div>
                </div>

                {/* Interactive Stepper Navigation within active stage */}
                <div className="flex items-center justify-between pt-1 border-t border-white/10">
                  <button
                    type="button"
                    onClick={handlePrevStage}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                    <span>Prethodna</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {copy.stages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => handleSelectStage(dotIdx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeStage === dotIdx ? "w-4 bg-blue-500" : "w-1.5 bg-white/20"
                        }`}
                        aria-label={`Izaberi fazu ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStage}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Sledeća</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Punchline */}
        <div className="text-center pt-1 border-t border-slate-200 dark:border-white/10 max-w-xl mx-auto space-y-0.5">
          <p className="text-[11px] sm:text-sm md:text-base font-display font-black text-slate-900 dark:text-white leading-tight">
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
