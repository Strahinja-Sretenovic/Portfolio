import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act9RiskReduction() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section 
      id="act-9-risk-reduction"
      className="relative py-28 sm:py-40 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 overflow-hidden"
    >
      {/* Calm ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12 relative z-10">
        
        {/* Status */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span>AKT 09 • ISKRENOST & SMANJENJE RIZIKA</span>
        </div>

        {/* The Big Question */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            {isSr ? "A šta ako vam novi sajt nije potreban?" : "What if you don't actually need a new website?"}
          </h2>

          <div className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-blue-600 dark:text-blue-400">
            {isSr ? "Reći ćemo vam." : "We will tell you."}
          </div>
        </div>

        {/* Supporting Explanation */}
        <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {isSr 
            ? "Možda je sledeći pravi potez bolji Google profil, online booking, jedna landing stranica, automatizacija ili nekoliko preciznih izmena na postojećem sistemu." 
            : "Maybe the best next step is an optimized Google profile, online booking, a single landing page, automation, or minor precision tweaks to what you already have."}
        </p>

        {/* Takeaway Principles */}
        <div className="pt-6 sm:pt-8 space-y-2 border-t border-slate-200 dark:border-white/10 max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl font-display font-bold text-slate-950 dark:text-white">
            {isSr ? "Cilj nije najveći projekat." : "The goal is not the biggest project."}
          </p>
          <p className="text-xl sm:text-2xl font-display font-bold text-blue-600 dark:text-blue-400">
            {isSr ? "Cilj je pravi sledeći potez." : "The goal is the right next move."}
          </p>
        </div>

      </div>
    </section>
  );
}
