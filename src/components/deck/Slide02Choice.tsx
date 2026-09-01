import React from "react";
import { Star, CheckCircle2, Phone, AlertCircle, Sparkles, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide02Props {
  onNext: () => void;
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide02Choice({ onNext: _onNext, onPrev: _onPrev, isMobile, isWide }: Slide02Props) {
  const { t } = useLanguage();
  const copy = t.deck.choice;

  const businesses = [
    {
      data: copy.businessA,
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      icon: CheckCircle2,
      isWinner: true
    },
    {
      data: copy.businessB,
      badgeColor: "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10",
      icon: Phone,
      isWinner: false
    },
    {
      data: copy.businessC,
      badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      icon: AlertCircle,
      isWinner: false
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-slate-50 dark:bg-[#05070c] text-slate-900 dark:text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Header with Educational Badge */}
        <div className="text-center space-y-1.5 sm:space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-[10px] sm:text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
            <Sparkles className="w-3 h-3" />
            {copy.badge}
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight ${
              isMobile ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {copy.title}
          </motion.h2>

          {/* Search Query Preview */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-300 shadow-xs">
            <MapPin className="w-3 h-3 text-blue-500" />
            <span className="truncate max-w-[280px] sm:max-w-none">Google: „{copy.exampleQuery}”</span>
          </div>
        </div>

        {/* 3 Choice Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
          {businesses.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border transition-all flex flex-col justify-between space-y-2 sm:space-y-3 ${
                  item.isWinner
                    ? "bg-white dark:bg-slate-900 border-blue-500 shadow-md shadow-blue-500/10 sm:scale-[1.02]"
                    : "bg-white/60 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 opacity-90 sm:opacity-80 hover:opacity-100"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs sm:text-base text-slate-900 dark:text-white">
                      {item.data.name}
                    </span>
                    {item.isWinner && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[9px] sm:text-[10px] font-mono font-bold">
                        IZBOR #1
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    <span>{item.data.rating}</span>
                    <span className="text-slate-400 font-normal text-[11px]">({item.data.reviews})</span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    {item.data.status}
                  </p>
                </div>

                <div className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl border text-[11px] sm:text-xs font-mono font-semibold flex items-center gap-1.5 sm:gap-2 ${item.badgeColor}`}>
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span className="truncate">{item.data.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Takeaway message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-0.5 sm:space-y-1 pt-1 sm:pt-2 border-t border-slate-200 dark:border-white/10"
        >
          <p className="text-sm sm:text-xl font-display font-black text-slate-900 dark:text-white">
            {copy.takeaway}
          </p>
          <p className="text-[11px] sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
            {copy.support}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
