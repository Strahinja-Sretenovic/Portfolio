import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Sparkles, Activity } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToTarget } from "../SmoothScroll";
import { trackConsultationCtaClick } from "../../utils/analytics";

export function HeroScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [phase, setPhase] = useState<"sajtom" | "problemom">("sajtom");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("problemom");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAuditClick = () => {
    trackConsultationCtaClick({
      location: "HeroScene_Scene01",
      ctaText: "Besplatna analiza",
      target: "#scene-14",
      serviceContext: "presentation_opening",
    });
    scrollToTarget("#scene-14", 60);
  };

  const handleSkipToAnalysis = () => {
    trackConsultationCtaClick({
      location: "HeroScene_Skip",
      ctaText: "Preskočite na analizu",
      target: "#scene-14",
      serviceContext: "skip_presentation",
    });
    scrollToTarget("#scene-14", 60);
  };

  return (
    <section
      id="scene-01"
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-6 overflow-hidden bg-white dark:bg-[#07090e] transition-colors duration-500"
    >
      {/* Subtle diagnostic grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
      </div>

      {/* Top Eyebrow */}
      <div className="max-w-6xl mx-auto w-full pt-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold uppercase tracking-wider"
        >
          <Activity size={13} className="text-blue-500 animate-pulse" />
          <span>{isSr ? "WEB STRATEGIJA • UX • DEVELOPMENT" : "WEB STRATEGY • UX • DEVELOPMENT"}</span>
        </motion.div>
      </div>

      {/* Main Pattern Interrupt Statement */}
      <div className="max-w-6xl mx-auto w-full my-auto py-10 sm:py-16 relative z-10">
        <div className="space-y-6 sm:space-y-8 max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 tracking-widest font-bold uppercase">
              {isSr ? "01 / POČETAK RAZGOVORA" : "01 / PATTERN INTERRUPT"}
            </div>

            {/* Transformative Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.06]">
              {isSr ? "Ne počinjemo " : "We don't start with "}
              <span
                onClick={() => setPhase(phase === "sajtom" ? "problemom" : "sajtom")}
                className={`transition-all duration-700 cursor-pointer ${
                  phase === "problemom"
                    ? "line-through text-slate-400/70 dark:text-slate-600 decoration-red-500/80 decoration-4"
                    : "text-slate-900 dark:text-white"
                }`}
                title={isSr ? "Kliknite za promenu" : "Click to toggle"}
              >
                {isSr ? "sajtom" : "a website"}
              </span>
              .
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                {isSr ? "Počinjemo problemom." : "We start with the problem."}
              </span>
            </h1>
          </motion.div>

          {/* Short Single Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 max-w-3xl font-medium leading-relaxed"
          >
            {isSr
              ? "Jer najlepši sajt na svetu ne vredi mnogo ako ne rešava ono što koči vaš biznis."
              : "Because the most attractive website in the world is useless if it doesn't solve what is holding your business back."}
          </motion.p>

        </div>
      </div>

      {/* Bottom Bar: Action & Fast Skip */}
      <div className="max-w-6xl mx-auto w-full pt-4 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Story scroll prompt */}
        <button
          onClick={() => scrollToTarget("#scene-02", 60)}
          className="group flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
        >
          <span className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-blue-500 transition-colors">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </span>
          <span>{isSr ? "Pogledajte kako razmišljamo ↓" : "See how we think ↓"}</span>
        </button>

        {/* CTAs: Direct Analysis & Skip presentation */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSkipToAnalysis}
            className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            {isSr ? "Preskočite na analizu →" : "Skip to analysis →"}
          </button>

          <button
            onClick={handleAuditClick}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-98 cursor-pointer"
          >
            <Sparkles size={15} />
            <span>{isSr ? "Besplatna analiza" : "Free Audit"}</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
