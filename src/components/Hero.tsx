import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Search, 
  MousePointerClick, 
  PhoneCall, 
  TrendingUp,
  ShieldCheck,
  Building2,
  Stethoscope,
  Scissors
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { trackConsultationCtaClick, trackEvent } from "../utils/analytics";
import { scrollToTarget } from "./SmoothScroll";

export function Hero() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const easeOutCustom = [0.21, 0.47, 0.32, 0.98];

  const diagnosticScenarios = [
    {
      label: isSr ? "Problem: Malo upita sa sajta" : "Symptom: Low conversion rate",
      cause: isSr ? "Posetioci ne razumeju ponudu i nemaju jasan CTA" : "Visitors don't understand value & lack clear CTA",
      fix: isSr ? "UX & Informaciona arhitektura" : "UX & Information Architecture"
    },
    {
      label: isSr ? "Problem: Neprepoznatljivost na Google-u" : "Symptom: Invisible in local search",
      cause: isSr ? "Nedostatak lokalnog SEO-a i tehničkih signala" : "Missing local schema & structured service hubs",
      fix: isSr ? "Lokalni SEO & Google optimizacija" : "Local SEO & High-intent Landing Pages"
    },
    {
      label: isSr ? "Problem: Sati izgubljeni na telefonu" : "Symptom: Clogged phone lines for basic booking",
      cause: isSr ? "Nema transparentnih cena i online kalendara" : "No transparent pricing guide or self-service booking",
      fix: isSr ? "Sistem zakazivanja & SMS automatizacija" : "Self-serve Booking & SMS Automation"
    }
  ];

  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % diagnosticScenarios.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [diagnosticScenarios.length]);

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden px-4 sm:px-6">
      {/* Background Decorative Glowing Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] blur-[140px] opacity-25 pointer-events-none rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500" />
      
      {/* Dot Pattern Grid in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.10] dark:opacity-[0.15] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutCustom }}
          className="inline-block"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-bold mb-6 tracking-wider uppercase">
            <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
            {isSr ? "WEB STRATEGIJA • UX • DEVELOPMENT" : "WEB STRATEGY • UX • DEVELOPMENT"}
          </span>
        </motion.div>
        
        {/* Main Strategic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutCustom }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.15]"
        >
          {isSr ? (
            <>
              Ne treba vam samo bolji sajt. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                Treba vam sajt koji bolje radi
              </span>{" "}
              za vaš biznis.
            </>
          ) : (
            <>
              You don't just need a better-looking website. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                You need a website that works harder
              </span>{" "}
              for your business.
            </>
          )}
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutCustom }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          {isSr
            ? "Analiziram kako vas potencijalni klijenti pronalaze, šta ih sprečava da vas izaberu i gde gubite prilike — zatim projektujem i razvijam rešenje koje uklanja te prepreke."
            : "I analyze how prospective clients find you, what stops them from choosing you, and where you leak opportunities — then engineer the solution that removes those bottlenecks."}
        </motion.p>

        {/* Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOutCustom }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4"
        >
          <button
            onClick={() => {
              trackConsultationCtaClick({
                location: "Hero_Primary",
                ctaText: isSr ? "Zatraži besplatnu analizu" : "Request Free Analysis",
                target: "#contact",
                serviceContext: "Hero Primary Action"
              });
              scrollToTarget("#contact", 80);
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 cursor-pointer group"
          >
            <span>{isSr ? "Zatraži besplatnu analizu" : "Request Free Analysis"}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          <button
            onClick={() => {
              trackEvent("select_content", {
                content_type: "Navigation_CTA",
                item_name: "Hero_View_How_I_Work",
                destination: "#how-i-think"
              });
              scrollToTarget("#how-i-think", 80);
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>{isSr ? "Pogledaj kako radim" : "See How I Work"}</span>
          </button>
        </motion.div>

        {/* Microcopy Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-12"
        >
          {isSr 
            ? "Pre razgovora pregledam vaš trenutni digitalni nastup kako bismo pričali konkretno o vašem biznisu." 
            : "Before our call, I review your current digital channels so our conversation focuses on your specific business."}
        </motion.p>

        {/* Interactive Live Diagnostic Pulse Preview */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOutCustom }}
          className="max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-900/90 text-white border border-slate-800 shadow-2xl text-left"
        >
          <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-800">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {isSr ? "DIJAGNOSTIČKI UVID UŽIVO" : "LIVE DIAGNOSTIC PULSE"}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {activeScenario + 1} / {diagnosticScenarios.length}
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-200">
              {diagnosticScenarios[activeScenario].label}
            </div>
            <div className="text-xs text-slate-400">
              <span className="text-amber-400 font-semibold">{isSr ? "Uzrok: " : "Root Cause: "}</span>
              {diagnosticScenarios[activeScenario].cause}
            </div>
            <div className="text-xs text-blue-300 pt-1 flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">{isSr ? "Strateški odgovor: " : "Strategic Response: "}</strong>
                {diagnosticScenarios[activeScenario].fix}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
