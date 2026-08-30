import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface DeckRobotProgressProps {
  currentSlide: number;
  totalSlides: number;
  onGoTo?: (index: number) => void;
}

interface RobotDialogue {
  sr: string;
  en: string;
}

const robotDialogues: RobotDialogue[] = [
  { sr: "Krećemo! 🚀", en: "Let's start! 🚀" },
  { sr: "Ko je kupac? 👤", en: "Who's the buyer? 👤" },
  { sr: "Put odluke 🗺️", en: "Decision path 🗺️" },
  { sr: "Gde puca? ⚠️", en: "Where it breaks ⚠️" },
  { sr: "Dijagnoza 🔍", en: "Diagnosis 🔍" },
  { sr: "Pravi lek 💡", en: "Right remedy 💡" },
  { sr: "Naš proces ⚙️", en: "Our process ⚙️" },
  { sr: "Primer 1: Ada Studio 📐", en: "Case 1: Ada Studio 📐" },
  { sr: "Primeri 2 & 3: Softver ⚡", en: "Cases 2 & 3: Platforms ⚡" },
  { sr: "100% Iskrenost 🎯", en: "100% Honesty 🎯" },
  { sr: "Vaš biznis 💼", en: "Your business 💼" },
  { sr: "Zakaži analizu! ✨", en: "Book audit! ✨" },
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

  // Dynamic bubble alignment so it never overflows off-screen edges
  const bubbleAlignClass =
    progressPercent < 15
      ? "items-start -left-1"
      : progressPercent > 85
      ? "items-end -right-1"
      : "items-center left-1/2 -translate-x-1/2";

  const arrowAlignClass =
    progressPercent < 15
      ? "ml-3"
      : progressPercent > 85
      ? "mr-3"
      : "mx-auto";

  // Blinking eyes effect
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-2 sm:pb-3 px-4 sm:px-12 flex flex-col justify-end items-center">
      
      {/* Walking Track Area */}
      <div className="w-full max-w-5xl relative h-20 sm:h-24 flex items-end">
        
        {/* The Track Line at the very bottom */}
        <div className="w-full h-1.5 bg-slate-900/90 dark:bg-white/10 rounded-full relative overflow-hidden pointer-events-auto shadow-inner">
          {/* Active progress fill line */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          />
        </div>

        {/* Clickable waypoint dots along the track */}
        <div className="absolute inset-x-0 bottom-0 h-3 flex justify-between items-center px-1 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isPassed = idx <= currentSlide;
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => onGoTo?.(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  isCurrent
                    ? "w-3 h-3 bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(34,211,238,1)] border border-white"
                    : isPassed
                    ? "w-2 h-2 bg-cyan-500/80"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/60"
                }`}
              />
            );
          })}
        </div>

        {/* The Walking Robot & Dynamic Speech Bubble Container */}
        <motion.div
          className="absolute bottom-2 -translate-x-1/2 pointer-events-auto select-none z-30 flex flex-col items-center"
          initial={false}
          animate={{ left: `${progressPercent}%` }}
          transition={{ type: "spring", stiffness: 85, damping: 18 }}
        >
          
          {/* High-Contrast Speech Dialogue Bubble directly over Robot */}
          <div className={`absolute bottom-full mb-1 flex flex-col pointer-events-none ${bubbleAlignClass}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 5, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/95 dark:bg-[#07090e]/95 border-2 border-cyan-400 shadow-[0_4px_16px_rgba(0,0,0,0.8),0_0_12px_rgba(34,211,238,0.4)] backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <span className="text-[11px] sm:text-xs font-bold text-cyan-300 font-sans tracking-wide">
                  {isSr ? dialogue.sr : dialogue.en}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Speech Bubble Arrow pointing to Robot head */}
            <div className={`w-2 h-1.5 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-cyan-400 ${arrowAlignClass}`} />
          </div>

          {/* Glowing neon footprint beneath robot */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-cyan-400/50 rounded-full blur-[3px] animate-pulse" />

          {/* Robot Figure */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={{
              y: [0, -3.5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Robot Head / Body */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.5)] flex flex-col items-center justify-center relative">
              
              {/* Antenna with pinging beacon */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,1)] animate-ping" />
                <span className="w-0.5 h-1.5 bg-cyan-400" />
              </div>

              {/* Visor Screen */}
              <div className="w-5 h-2.5 sm:w-6 sm:h-3 rounded bg-slate-950 border border-cyan-500/60 flex items-center justify-around px-0.5 relative overflow-hidden">
                {/* Scanline glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" />
                
                {/* Eyes */}
                <motion.div
                  className="w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_4px_rgba(34,211,238,1)]"
                  animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
                <motion.div
                  className="w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_4px_rgba(34,211,238,1)]"
                  animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Chest LED dots */}
              <div className="flex gap-0.5 mt-0.5">
                <span className="w-0.5 h-0.5 rounded-full bg-blue-400" />
                <span className="w-1 h-0.5 rounded-full bg-cyan-300 shadow-xs shadow-cyan-300" />
                <span className="w-0.5 h-0.5 rounded-full bg-blue-400" />
              </div>
            </div>

            {/* Walking feet (alternating walking animation) */}
            <div className="flex gap-2 -mt-0.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-b-sm bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,1)]"
                animate={{ y: [0, -2.5, 0] }}
                transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-b-sm bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,1)]"
                animate={{ y: [-2.5, 0, -2.5] }}
                transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
