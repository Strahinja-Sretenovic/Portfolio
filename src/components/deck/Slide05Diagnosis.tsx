import React, { useState } from "react";
import { Eye, FileText, ShieldCheck, MousePointerClick, Cpu, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide05Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide05Diagnosis({ isMobile, isWide }: Slide05Props) {
  const { t } = useLanguage();
  const copy = t.deck.diagnosis;
  const [activeIdx, setActiveIdx] = useState<number>(0);
  // Mobile pagination state (3 items per page: Page 0 = items 0,1,2; Page 1 = items 3,4)
  const [mobilePage, setMobilePage] = useState<number>(0);

  const dimIcons = [Eye, FileText, ShieldCheck, MousePointerClick, Cpu];
  const totalDimensions = copy.dimensions.length;
  const currentDim = copy.dimensions[activeIdx] || copy.dimensions[0];

  const handleSelectDimension = (idx: number) => {
    setActiveIdx(idx);
    if (isMobile) {
      setMobilePage(idx >= 3 ? 1 : 0);
    }
  };

  const handlePrevDim = () => {
    const nextIdx = activeIdx > 0 ? activeIdx - 1 : totalDimensions - 1;
    handleSelectDimension(nextIdx);
  };

  const handleNextDim = () => {
    const nextIdx = activeIdx < totalDimensions - 1 ? activeIdx + 1 : 0;
    handleSelectDimension(nextIdx);
  };

  const visibleMobileItems = mobilePage === 0 
    ? copy.dimensions.slice(0, 3) 
    : copy.dimensions.slice(3, 5);

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 pb-20 sm:pb-20 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto space-y-2.5 sm:space-y-5 my-auto py-1 sm:py-2`}>
        
        {/* Header */}
        <div className="text-center space-y-1 sm:space-y-1.5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-[10px] sm:text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase"
          >
            <Sparkles className="w-3 h-3" />
            <span>DIJAGNOSTIKA 5 STUBOVA</span>
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

        {/* 5 Categories Selector Container with swipe protection */}
        <div data-prevent-deck-swipe="true" className="w-full max-w-4xl mx-auto space-y-2">
          
          {/* Mobile Paginated View (3 items visible per page with explicit Prev/Next arrows) */}
          {isMobile ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {mobilePage === 0 ? "Stavke 01 - 03" : "Stavke 04 - 05"} (od 05)
                </span>
                
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setMobilePage(0)}
                    disabled={mobilePage === 0}
                    className="p-1 rounded-lg bg-slate-100 dark:bg-white/10 disabled:opacity-30 active:scale-95 text-slate-800 dark:text-white cursor-pointer"
                    aria-label="Prethodna grupa stavki"
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
                    aria-label="Sledeća grupa stavki"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 items grid for mobile */}
              <div className="grid grid-cols-3 gap-1.5">
                {visibleMobileItems.map((dim) => {
                  const globalIdx = copy.dimensions.findIndex((d) => d.code === dim.code);
                  const Icon = dimIcons[globalIdx] || Eye;
                  const isActive = activeIdx === globalIdx;

                  return (
                    <button
                      type="button"
                      key={dim.code}
                      onClick={() => handleSelectDimension(globalIdx)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col justify-between items-center gap-1 min-h-[76px] ${
                        isActive
                          ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/50"
                          : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-[9px] font-mono font-bold ${isActive ? "text-blue-100" : "text-blue-600 dark:text-blue-400"}`}>
                          {dim.code}
                        </span>
                        <div className={`p-1 rounded-md ${isActive ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                          <Icon className="w-3 h-3" />
                        </div>
                      </div>

                      <div className="text-[10px] font-display font-extrabold leading-tight text-center break-words w-full">
                        {dim.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Desktop/Tablet 5-Column Grid */
            <div className="grid grid-cols-5 gap-2.5">
              {copy.dimensions.map((dim, idx) => {
                const Icon = dimIcons[idx] || Eye;
                const isActive = activeIdx === idx;

                return (
                  <button
                    type="button"
                    key={dim.code}
                    onClick={() => handleSelectDimension(idx)}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer space-y-1.5 flex flex-col justify-between items-center ${
                      isActive
                        ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                        : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] font-mono font-bold block ${isActive ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
                        {dim.code}
                      </span>
                      <div className={`p-1.5 rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="text-xs font-display font-bold leading-tight break-words text-center w-full">
                      {dim.name}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Category Detail Box (Full text, fully visible with no truncations) */}
          <div data-prevent-deck-swipe="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDim.code}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="p-3.5 sm:p-5 rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-700/80 dark:border-white/10 text-white space-y-2 sm:space-y-2.5 shadow-xl max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-blue-400 font-bold">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30">{currentDim.code}</span>
                    <span>•</span>
                    <span className="text-white tracking-wide uppercase">{currentDim.name}</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400">
                    0{activeIdx + 1} / 0{totalDimensions}
                  </span>
                </div>

                {/* Question */}
                <p className="text-xs sm:text-base md:text-lg font-display font-bold text-white leading-snug break-words">
                  „{currentDim.question}”
                </p>

                {/* Details text - completely visible */}
                <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed break-words pt-1 border-t border-white/10">
                  {currentDim.details}
                </p>

                {/* Interactive Stepper Navigation within active dimension */}
                <div className="flex items-center justify-between pt-1.5 border-t border-white/10">
                  <button
                    type="button"
                    onClick={handlePrevDim}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-blue-400" />
                    <span>Prethodna</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {copy.dimensions.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => handleSelectDimension(dotIdx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeIdx === dotIdx ? "w-4 bg-blue-500" : "w-1.5 bg-white/20"
                        }`}
                        aria-label={`Izaberi dimenziju ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextDim}
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
        <div className="text-center pt-1 border-t border-slate-200 dark:border-white/10 max-w-xl mx-auto">
          <p className="text-[11px] sm:text-sm md:text-base font-display font-black text-slate-900 dark:text-white leading-tight">
            {copy.punchline}
          </p>
        </div>

      </div>
    </div>
  );
}
