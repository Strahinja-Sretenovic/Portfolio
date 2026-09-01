import React from "react";
import { Search, Compass, ShieldCheck, MousePointerClick, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide03Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide03CustomerJourney({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide03Props) {
  const { t } = useLanguage();
  const copy = t.deck.journey;

  const stepIcons = [Search, Compass, ShieldCheck, MousePointerClick, CheckCircle2];

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-6xl" : "max-w-5xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Headline */}
        <div className="text-center space-y-1 sm:space-y-2 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight ${
              isMobile ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.title}
          </motion.h2>
          <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        {/* 5-Step Path */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3 relative">
          {copy.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            const isLast = idx === copy.steps.length - 1;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left flex sm:flex-col justify-between sm:justify-start items-center sm:items-stretch gap-2.5 sm:gap-2 relative transition-all ${
                  isLast
                    ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200"
                }`}
              >
                {/* Header / Icon */}
                <div className="flex sm:items-center justify-between shrink-0 sm:shrink">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className={`text-[10px] font-mono font-bold ${isLast ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`}>
                      {step.num}
                    </span>
                    <div className={`p-1.5 rounded-lg ${isLast ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-0.5 flex-1 text-left">
                  <h3 className={`font-display font-bold text-xs sm:text-sm leading-snug tracking-tight ${
                    isLast ? "text-white" : "text-slate-900 dark:text-white"
                  }`}>
                    {step.label}
                  </h3>
                  <p className={`text-[10px] sm:text-[11px] leading-relaxed line-clamp-2 sm:line-clamp-none ${
                    isLast ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                  }`}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Path connector line on desktop */}
        <div className="hidden sm:flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <span>{copy.steps[0].label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
          <span>{copy.steps[1].label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
          <span>{copy.steps[2].label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
          <span>{copy.steps[3].label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-blue-600 dark:text-blue-400 font-bold">{copy.steps[4].label}</span>
        </div>

      </div>
    </div>
  );
}
