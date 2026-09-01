import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface DeckRobotProgressProps {
  currentSlide: number;
  totalSlides: number;
  onGoTo?: (index: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
}

interface RobotDialogue {
  sr: string;
  en: string;
}

const robotDialogues: RobotDialogue[] = [
  { sr: "Krećemo! 🚀", en: "Let's begin! 🚀" },
  { sr: "Ko je kupac? 👤", en: "Target buyer 👤" },
  { sr: "Put odluke 🗺️", en: "Decision path 🗺️" },
  { sr: "Gde puca? ⚠️", en: "Where it breaks ⚠️" },
  { sr: "Dijagnoza 🔍", en: "6 Dimensions 🔍" },
  { sr: "Pravi lek 💡", en: "Right remedy 💡" },
  { sr: "Naš proces ⚙️", en: "Our process ⚙️" },
  { sr: "Ada Studio 📐", en: "Ada Studio 📐" },
  { sr: "Softver & Flote ⚡", en: "Software & Fleets ⚡" },
  { sr: "Iskren savet 🎯", en: "Honest advice 🎯" },
  { sr: "Vaš biznis 💼", en: "Your business 💼" },
  { sr: "Zakaži analizu ✨", en: "Book audit ✨" },
];

export function DeckRobotProgress({
  currentSlide,
  totalSlides,
  onGoTo,
}: DeckRobotProgressProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Calculate percentage from 0% (slide 0) to 100% (slide 11)
  const progressRatio = totalSlides > 1 ? currentSlide / (totalSlides - 1) : 0;
  const progressPercent = Math.max(0, Math.min(100, progressRatio * 100));

  const dialogue = robotDialogues[currentSlide] || robotDialogues[0];

  // Dynamic bubble alignment so it never overflows off-screen edges on mobile
  const bubbleAlignClass =
    progressPercent < 18
      ? "items-start left-0"
      : progressPercent > 82
      ? "items-end right-0"
      : "items-center left-1/2 -translate-x-1/2";

  const arrowAlignClass =
    progressPercent < 18
      ? "ml-3"
      : progressPercent > 82
      ? "mr-3"
      : "mx-auto";

  // Blinking eyes effect
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none pb-2 sm:pb-3 px-3 sm:px-12 flex flex-col justify-end items-center">
      
      {/* Walking Track Area - Sleek, Unobtrusive & Responsive */}
      <div className="w-full max-w-4xl relative h-10 sm:h-12 flex items-end">
        
        {/* The Track Line at the bottom */}
        <div className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full relative overflow-hidden pointer-events-auto shadow-inner">
          {/* Active progress fill line */}
          <motion.div
            className="h-full bg-blue-600 dark:bg-cyan-400 shadow-sm"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
          />
        </div>

        {/* Clickable waypoint dots along the track */}
        <div className="absolute inset-x-0 bottom-[-2px] h-2 flex justify-between items-center px-0.5 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isPassed = idx <= currentSlide;
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => onGoTo?.(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-200 cursor-pointer rounded-full p-0.5 ${
                  isCurrent
                    ? "w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 scale-125 border border-white dark:border-slate-900"
                    : isPassed
                    ? "w-1.5 h-1.5 bg-blue-400 dark:bg-cyan-600/80"
                    : "w-1 h-1 bg-slate-300 dark:bg-white/20 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

        {/* The Walking Robot & Dynamic Speech Bubble */}
        <motion.div
          className="absolute bottom-1.5 -translate-x-1/2 pointer-events-auto select-none z-30 flex flex-col items-center"
          initial={false}
          animate={{ left: `${progressPercent}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        >
          
          {/* Speech Dialogue Bubble directly over Robot */}
          <div className={`absolute bottom-full mb-0.5 flex flex-col pointer-events-none ${bubbleAlignClass}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentSlide}-${language}`}
                initial={{ opacity: 0, y: 3, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -2, scale: 0.9 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="px-2 py-0.5 rounded-full bg-slate-900/95 dark:bg-black/90 border border-blue-500/50 dark:border-cyan-400/50 shadow-md backdrop-blur-xs flex items-center gap-1 whitespace-nowrap"
              >
                <span className="text-[10px] sm:text-[11px] font-bold text-white dark:text-cyan-300 tracking-tight">
                  {isSr ? dialogue.sr : dialogue.en}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Speech Bubble Arrow pointing to Robot head */}
            <div className={`w-1 h-1 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-slate-900 dark:border-t-black ${arrowAlignClass}`} />
          </div>

          {/* Robot Figure */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={{
              y: [0, -1.5, 0],
            }}
            transition={{
              duration: 0.45,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Robot Head / Body */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-slate-900 dark:bg-slate-800 border border-blue-400 dark:border-cyan-400 shadow-sm flex flex-col items-center justify-center relative">
              
              {/* Antenna */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="w-1 h-1 rounded-full bg-cyan-300 shadow-xs" />
              </div>

              {/* Visor Screen */}
              <div className="w-3.5 h-1.5 sm:w-4 sm:h-2 rounded bg-slate-950 flex items-center justify-around px-0.5">
                {/* Eyes */}
                <motion.div
                  className="w-0.5 h-0.5 rounded-full bg-cyan-300"
                  animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
                <motion.div
                  className="w-0.5 h-0.5 rounded-full bg-cyan-300"
                  animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Walking feet */}
            <div className="flex gap-1 -mt-0.5">
              <motion.div
                className="w-1 h-0.5 rounded-b-xs bg-cyan-400"
                animate={{ y: [0, -1, 0] }}
                transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-1 h-0.5 rounded-b-xs bg-cyan-400"
                animate={{ y: [-1, 0, -1] }}
                transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
