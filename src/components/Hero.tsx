import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const easeOutCustom = [0.21, 0.47, 0.32, 0.98];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background Decorative Glowing Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] blur-[120px] opacity-25 pointer-events-none rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 animate-ambient-glow" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOutCustom }}
        >
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-blue-100/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
            <Sparkles size={14} className="text-blue-600 dark:text-blue-400 animate-pulse" />
            {isSr ? "Otvoreno za nove projekte i saradnju" : "Available for new opportunities"}
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutCustom }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]"
        >
          SSolutions –{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300">
            {isSr ? "Softverska Rešenja & Web Development" : "Software Solutions & Web Engineering"}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOutCustom }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {isSr
            ? "Razvijamo moderna web i softverska rešenja, prilagođene CMS sisteme (WordPress) i pouzdane backend infrastrukture kreirane da unaprede poslovanje i privuku nove klijente."
            : "Engineering modern web software, custom CMS solutions (WordPress), and scalable backend infrastructure designed to accelerate business growth and attract new clients."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutCustom }}
          className="flex items-center justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group shadow-md shadow-blue-600/25"
          >
            {isSr ? "Zakaži Konsultaciju" : "Schedule a Consultation"}
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

