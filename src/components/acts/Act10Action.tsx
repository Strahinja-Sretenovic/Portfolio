import React from "react";
import { Sparkles, ArrowDown, HelpCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { InteractiveAuditForm } from "./InteractiveAuditForm";

export function Act10Action() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section 
      id="act-10-action"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-slate-950 text-white border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Transition Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 10 • VAŠ BIZNIS
          </div>

          <div className="space-y-3">
            <p className="text-sm sm:text-base font-mono text-slate-400 uppercase tracking-widest">
              {isSr ? "Do sada smo gledali primer." : "So far we examined an example."}
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-tight">
              {isSr ? "A šta se dešava kod vašeg biznisa?" : "What is happening in your business?"}
            </h2>

            <div className="text-2xl sm:text-4xl font-display font-bold text-blue-400 pt-2">
              {isSr ? "Hajde da pogledamo." : "Let's find out."}
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {isSr 
              ? "Pre prvog razgovora pregledaćemo vaš trenutni digitalni nastup i izdvojiti nekoliko konkretnih zapažanja." 
              : "Before our first call, we will review your digital presence and outline specific, actionable observations."}
          </p>

          <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
            {isSr 
              ? "💡 Početna analiza nije kompletan UX/SEO audit. Cilj je da razumemo kontekst pre razgovora." 
              : "💡 Initial analysis is not a full UX audit. The goal is to understand context before talking."}
          </div>
        </div>

        {/* Embedded Interactive Form */}
        <div className="pt-4">
          <InteractiveAuditForm />
        </div>

      </div>
    </section>
  );
}
