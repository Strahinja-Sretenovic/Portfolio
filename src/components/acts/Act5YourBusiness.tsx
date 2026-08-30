import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { InteractiveAuditForm } from "./InteractiveAuditForm";

export function Act5YourBusiness() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section 
      id="act-5-your-business"
      className="relative py-24 sm:py-36 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Intro to Act 5 */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
            AKT 05 • VAŠ BIZNIS
          </div>

          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {isSr ? "Do sada smo gledali kako problem može da izgleda." : "So far we examined how the problem can look."}
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
              {isSr ? "A šta se dešava kod vašeg biznisa?" : "What is happening in your business?"}
            </h2>

            <div className="text-2xl sm:text-4xl font-display font-bold text-blue-600 dark:text-blue-400 pt-1">
              {isSr ? "Hajde da pogledamo." : "Let's take a look."}
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            {isSr 
              ? "Pre prvog razgovora možemo da pogledamo vaš trenutni digitalni nastup kako bismo razgovor započeli konkretnim zapažanjima." 
              : "Before our first conversation, we can review your current digital presence so we start with concrete observations."}
          </p>

          <div className="inline-block px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
            {isSr 
              ? "💡 Početni pregled nije kompletan UX, SEO ili tehnički audit. Njegov cilj je da razumemo kontekst pre razgovora." 
              : "💡 Initial review is not a complete UX, SEO, or technical audit. The goal is to understand context before talking."}
          </div>
        </div>

        {/* The 5-Step Qualification Form */}
        <div className="pt-2">
          <InteractiveAuditForm />
        </div>

      </div>
    </section>
  );
}
