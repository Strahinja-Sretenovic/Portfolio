import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MousePointerClick, Sparkles } from "lucide-react";

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const fullText = "SSolutions";
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "cursor-appear" | "clicking" | "clicked" | "done">("typing");

  useEffect(() => {
    // 1. Typing animation for "SSolutions"
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 120);
      return () => clearTimeout(timeout);
    } else if (phase === "typing") {
      // Finished typing, transition to cursor appear
      const timeout = setTimeout(() => {
        setPhase("cursor-appear");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, phase]);

  useEffect(() => {
    if (phase === "cursor-appear") {
      // Move cursor towards text and click
      const timeout = setTimeout(() => {
        setPhase("clicking");
      }, 600);
      return () => clearTimeout(timeout);
    } else if (phase === "clicking") {
      // Perform click action
      const timeout = setTimeout(() => {
        setPhase("clicked");
      }, 400);
      return () => clearTimeout(timeout);
    } else if (phase === "clicked") {
      // Fade out and finish loader
      const timeout = setTimeout(() => {
        setPhase("done");
        setTimeout(onComplete, 400);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [phase, onComplete]);

  // Click anywhere to skip animation
  const handleSkip = () => {
    setPhase("done");
    onComplete();
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-[#07090e] text-white flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
        >
          {/* Ambient Glow Background */}
          <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <Sparkles size={12} className="animate-spin" />
              <span>Software Solutions</span>
            </motion.div>

            {/* Main Text & Mouse Click Animation */}
            <div className="relative flex items-center justify-center gap-1 sm:gap-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
                  {displayedText}
                </span>
                {phase === "typing" && (
                  <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-12 md:h-14 bg-blue-400 ml-1 animate-pulse rounded-full" />
                )}
              </h1>

              {/* Interactive Mouse Pointer Animation */}
              {phase !== "typing" && (
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 30, scale: 1.2 }}
                  animate={
                    phase === "cursor-appear"
                      ? { opacity: 1, x: 0, y: 0, scale: 1 }
                      : phase === "clicking" || phase === "clicked"
                      ? { opacity: 1, x: -2, y: 2, scale: 0.85 }
                      : {}
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative ml-1 sm:ml-2"
                >
                  <MousePointerClick 
                    className={`w-8 h-8 sm:w-12 sm:h-12 transition-colors duration-200 ${
                      phase === "clicked" 
                        ? "text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.9)]" 
                        : "text-slate-300"
                    }`} 
                  />

                  {/* Click Pulse Ripple */}
                  {(phase === "clicking" || phase === "clicked") && (
                    <motion.span
                      initial={{ scale: 0.2, opacity: 1 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-blue-400 pointer-events-none"
                    />
                  )}
                </motion.div>
              )}
            </div>

            {/* Subtitle / Prompt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "clicked" ? 1 : 0.6 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-400 mt-8 font-medium tracking-wide"
            >
              {phase === "clicked" ? "Dobrodošli..." : "Kliknite bilo gde za nastavak"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
