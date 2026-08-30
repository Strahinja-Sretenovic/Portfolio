import React, { useState } from "react";
import { 
  Eye, 
  HelpCircle, 
  ShieldCheck, 
  Scale, 
  ArrowRightCircle, 
  CheckCircle2, 
  AlertTriangle,
  Flame
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act3CustomerJourney() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [brokenNode, setBrokenNode] = useState<number | null>(3); // Node 3 is broken as visual demonstration

  const nodes = [
    {
      id: 1,
      title: isSr ? "PRONALAZI VAS" : "FINDS YOU",
      icon: Eye,
      description: isSr ? "Google pretraga, preporuka ili društvene mreže." : "Google search, referral or social media."
    },
    {
      id: 2,
      title: isSr ? "RAZUME ŠTA NUDITE" : "UNDERSTANDS OFFER",
      icon: HelpCircle,
      description: isSr ? "Za nekoliko sekundi shvata ko ste i šta radite." : "Quickly understands what you do."
    },
    {
      id: 3,
      title: isSr ? "STIČE POVERENJE" : "BUILDS TRUST",
      icon: ShieldCheck,
      description: isSr ? "Vidi dokaze kvaliteta, radove i stvarne recenzije." : "Finds genuine reviews and proof."
    },
    {
      id: 4,
      title: isSr ? "POREDI" : "COMPARES",
      icon: Scale,
      description: isSr ? "Poredi vašu ponudu sa alternativama na tržištu." : "Compares your value to others."
    },
    {
      id: 5,
      title: isSr ? "PRAVI SLEDEĆI KORAK" : "TAKES ACTION",
      icon: ArrowRightCircle,
      description: isSr ? "Poziva, popunjava formu ili zakazuje termin." : "Calls, fills form or books."
    },
    {
      id: 6,
      title: isSr ? "POSTAJE KLIJENT" : "BECOMES CLIENT",
      icon: CheckCircle2,
      description: isSr ? "Započinje saradnju i donosi prihod vašem poslu." : "Starts working with you."
    }
  ];

  return (
    <section 
      id="act-3-journey"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono font-bold">
            AKT 03 • PUT VAŠEG KUPCA
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
            {isSr ? "Put koji svaki kupac prolazi." : "The path every customer takes."}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {isSr 
              ? "Pre nego što novac pređe u vaš biznis, kupac prolazi kroz ovih šest tačaka." 
              : "Before making a purchase, a buyer navigates through these exact six stages."}
          </p>
        </div>

        {/* The 6-Node Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isBroken = brokenNode === node.id;
            
            return (
              <div
                key={node.id}
                onClick={() => setBrokenNode(isBroken ? null : node.id)}
                className={`relative p-6 rounded-2xl border transition-all cursor-pointer select-none ${
                  isBroken
                    ? "bg-rose-50 dark:bg-rose-950/30 border-rose-400 dark:border-rose-500/50 shadow-xl shadow-rose-500/10 scale-[1.02]"
                    : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                {/* Node Number & Broken Marker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-xs font-mono font-bold">
                    0{node.id}
                  </span>

                  {isBroken ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded-full">
                      <AlertTriangle className="w-3 h-3" />
                      {isSr ? "PREKID PUTA" : "PATH DROP-OFF"}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">
                      {isSr ? "Kliknite za test" : "Click to simulate"}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-xl ${isBroken ? "bg-rose-500 text-white" : "bg-blue-600/10 text-blue-600 dark:text-blue-400"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                    {node.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                  {node.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Deliberate Break Headline */}
        <div className="text-center py-8 space-y-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
            {isSr ? "Ključni uvid" : "Core insight"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-slate-950 dark:text-white tracking-tight leading-tight">
            {isSr 
              ? "Negde na ovom putu možete da ga izgubite." 
              : "Somewhere along this path, you might lose them."}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {isSr 
              ? "Dovoljno je da samo jedna tačka ne funkcioniše kako treba i kupac odlazi kod nekog drugog." 
              : "If even a single stage fails, the potential client leaves for a competitor."}
          </p>
        </div>

      </div>
    </section>
  );
}
