import React from "react";
import { Eye, HelpCircle, ShieldCheck, Scale, MousePointerClick, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide03Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide03CustomerJourney({ onNext, onPrev }: Slide03Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const nodes = [
    { num: "01", title: isSr ? "PRONALAZI VAS" : "FINDS YOU", sub: isSr ? "Google, mapa, preporuka" : "Search, Maps, Referral", icon: Eye },
    { num: "02", title: isSr ? "RAZUME PONUDU" : "UNDERSTANDS OFFER", sub: isSr ? "Šta tačno nudite" : "What you offer", icon: HelpCircle },
    { num: "03", title: isSr ? "STIČE POVERENJE" : "BUILDS TRUST", sub: isSr ? "Dokazi i recenzije" : "Proof and credibility", icon: ShieldCheck },
    { num: "04", title: isSr ? "POREDI" : "COMPARES", sub: isSr ? "Cena i profesionalnost" : "Pricing vs alternatives", icon: Scale },
    { num: "05", title: isSr ? "KONTAKTIRA" : "CONTACTS", sub: isSr ? "Poziv, booking, forma" : "Call, booking, form", icon: MousePointerClick },
    { num: "06", title: isSr ? "POSTAJE KLIJENT" : "BECOMES CLIENT", sub: isSr ? "Završena konverzija" : "Successful deal", icon: CheckCircle2 }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-6 sm:space-y-8 py-2">
        <div className="text-center space-y-2.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">
            PUT KUPCA • 6 KLJUČNIH FAZA ODLUKE
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr 
              ? "Vaš klijent prolazi kroz više odluka pre nego što postane klijent." 
              : "Your client goes through multiple decisions before becoming a customer."}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {isSr 
              ? "Sajt i digitalni nastup nisu izolovani — oni su karike u ovom neprekidnom lancu." 
              : "A website is not isolated — it is a vital link in this continuous chain."}
          </p>
        </div>

        {/* Horizontal Path Deck Component */}
        <div className="relative p-5 sm:p-7 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.num}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-center space-y-2 hover:border-blue-500 transition-all shadow-sm"
                >
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold">
                    {node.num}
                  </span>
                  
                  <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="text-xs font-display font-bold text-slate-900 dark:text-white leading-snug">
                    {node.title}
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {node.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
