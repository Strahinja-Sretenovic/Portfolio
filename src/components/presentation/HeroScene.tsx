import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Sparkles, Activity } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToTarget } from "../SmoothScroll";
import { trackConsultationCtaClick } from "../../utils/analytics";

export function HeroScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeConcept, setActiveConcept] = useState<"kodom" | "problemom">("kodom");

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveConcept("problemom");
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleAuditClick = () => {
    trackConsultationCtaClick({
      location: "HeroScene_Scene01",
      ctaText: "Besplatna analiza",
      target: "#scene-10",
      serviceContext: "presentation_opening",
    });
    scrollToTarget("#scene-10", 60);
  };

  return (
    <section
      id="scene-01"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-4 sm:px-6 overflow-hidden bg-white dark:bg-[#07090e] transition-colors duration-500"
    >
      {/* Subtle ambient diagnostic lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] animate-ambient-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Top narrative badge */}
      <div className="max-w-6xl mx-auto w-full pt-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider"
        >
          <Activity size={13} className="text-blue-500 animate-pulse" />
          <span>{isSr ? "WEB STRATEGIJA • UX • DEVELOPMENT" : "WEB STRATEGY • UX • ENGINEERING"}</span>
        </motion.div>
      </div>

      {/* Main Apple-style bold statement composition */}
      <div className="max-w-6xl mx-auto w-full my-auto py-8 sm:py-16 relative z-10">
        <div className="space-y-6 sm:space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="text-base sm:text-xl font-mono text-slate-400 dark:text-slate-500 tracking-wider">
              {isSr ? "01 / PREZENTACIJA PRISTUPA" : "01 / APPROACH PRESENTATION"}
            </div>

            {/* Transformative Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              {isSr ? "Ne počinjemo " : "We don't start with "}
              <span className="relative inline-block">
                <span
                  onClick={() => setActiveConcept(activeConcept === "kodom" ? "problemom" : "kodom")}
                  className={`transition-all duration-500 cursor-pointer ${
                    activeConcept === "kodom"
                      ? "line-through text-slate-400 dark:text-slate-600 decoration-red-500 decoration-4"
                      : "line-through text-slate-400 dark:text-slate-600 decoration-red-500 decoration-4 opacity-50"
                  }`}
                  title={isSr ? "Kliknite za promenu" : "Click to toggle"}
                >
                  {isSr ? "kodom" : "code"}
                </span>
              </span>
              .
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                {isSr ? "Počinjemo problemom." : "We start with the problem."}
              </span>
            </h1>
          </motion.div>

          {/* Supporting Core Insight */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 max-w-3xl font-normal leading-relaxed"
          >
            {isSr
              ? "Jer lep sajt koji ne rešava poslovni problem i dalje je samo lep sajt."
              : "Because an attractive website that solves no business problem remains just an attractive website."}
          </motion.p>

          {/* Interactive Toggle Pill for Visitors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {isSr ? "Naš fokus:" : "Our focus:"}
            </span>
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <button
                onClick={() => setActiveConcept("kodom")}
                className={`px-3 py-1 rounded-lg transition-all text-xs font-semibold cursor-pointer ${
                  activeConcept === "kodom"
                    ? "bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white line-through"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {isSr ? "Šabloni & Kod" : "Templates & Code"}
              </button>
              <button
                onClick={() => setActiveConcept("problemom")}
                className={`px-3 py-1 rounded-lg transition-all text-xs font-semibold cursor-pointer ${
                  activeConcept === "problemom"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {isSr ? "✓ Poslovna Dijagnostika" : "✓ Commercial Diagnosis"}
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Action Bar */}
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

        {/* Persistent CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAuditClick}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-98 cursor-pointer"
          >
            <Sparkles size={15} />
            <span>{isSr ? "Zatražite besplatnu analizu" : "Request Free Audit"}</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
