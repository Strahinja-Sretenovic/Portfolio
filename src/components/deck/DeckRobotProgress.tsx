import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface DeckRobotProgressProps {
  currentSlide: number;
  totalSlides: number;
  onGoTo?: (index: number) => void;
}

export function DeckRobotProgress({
  currentSlide,
  totalSlides,
  onGoTo,
}: DeckRobotProgressProps) {
  // Calculate percentage from 0% (slide 0) to 100% (slide 11)
  const progressRatio = totalSlides > 1 ? currentSlide / (totalSlides - 1) : 0;
  const progressPercent = Math.max(0, Math.min(100, progressRatio * 100));

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
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none pb-2 sm:pb-3 px-4 sm:px-10 flex flex-col justify-end items-center">
      
      {/* Walking Track Area */}
      <div className="w-full max-w-6xl relative h-10 flex items-end">
        
        {/* The Track Line at the very bottom */}
        <div className="w-full h-1 bg-white/10 dark:bg-white/10 rounded-full relative overflow-hidden pointer-events-auto">
          {/* Active progress fill line */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>

        {/* Clickable subtle waypoint markers along the track */}
        <div className="absolute inset-x-0 bottom-0 h-2 flex justify-between items-center px-1 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isPassed = idx <= currentSlide;
            return (
              <button
                key={idx}
                onClick={() => onGoTo?.(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isPassed
                    ? "bg-cyan-400 scale-110 shadow-[0_0_6px_rgba(34,211,238,0.8)]"
                    : "bg-white/20 hover:bg-white/50"
                }`}
              />
            );
          })}
        </div>

        {/* The Walking Robot on the Progress Line */}
        <motion.div
          className="absolute bottom-1 -translate-x-1/2 pointer-events-auto cursor-grab select-none z-10"
          initial={false}
          animate={{ left: `${progressPercent}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        >
          {/* Subtle glow beneath robot */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-cyan-400/40 rounded-full blur-[3px] animate-pulse" />

          {/* Robot Figure */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Robot Head / Body */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.35)] flex flex-col items-center justify-center relative">
              
              {/* Little antenna */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,1)] animate-ping" />
                <span className="w-0.5 h-1 bg-cyan-500/70" />
              </div>

              {/* Visor / Eye screen */}
              <div className="w-5 h-2.5 sm:w-6 sm:h-3 rounded bg-slate-950 border border-cyan-500/40 flex items-center justify-around px-0.5 relative overflow-hidden">
                {/* Scanline glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
                
                {/* Eyes */}
                <motion.div
                  className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,1)]"
                  animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
                <motion.div
                  className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_4px_rgba(34,211,238,1)]"
                  animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Little chest light dot */}
              <div className="flex gap-0.5 mt-0.5">
                <span className="w-0.5 h-0.5 rounded-full bg-blue-400/80" />
                <span className="w-1 h-0.5 rounded-full bg-cyan-400" />
                <span className="w-0.5 h-0.5 rounded-full bg-blue-400/80" />
              </div>
            </div>

            {/* Walking feet (alternating animation) */}
            <div className="flex gap-2 -mt-0.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-b-sm bg-cyan-400 shadow-[0_0_3px_rgba(34,211,238,0.8)]"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-b-sm bg-cyan-400 shadow-[0_0_3px_rgba(34,211,238,0.8)]"
                animate={{ y: [-2, 0, -2] }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
