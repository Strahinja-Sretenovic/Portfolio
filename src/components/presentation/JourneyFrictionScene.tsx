import { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  Eye, 
  HelpCircle, 
  ShieldCheck, 
  GitCompare, 
  Zap, 
  UserCheck, 
  XCircle, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function JourneyFrictionScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [activeStageIdx, setActiveStageIdx] = useState<number>(3); // Break between Poverenje & Akcija by default

  const journeySteps = [
    {
      id: "pretraga",
      nameSr: "PRETRAGA",
      nameEn: "SEARCH",
      descSr: "Pronalazak na Google pretrazi i mapama",
      descEn: "Google Search & Maps discovery",
      icon: <Search size={16} />
    },
    {
      id: "prvi-utisak",
      nameSr: "PRVI UTISAK",
      nameEn: "FIRST IMPRESSION",
      descSr: "Prvih 5 sekundi na mobilnom telefonu",
      descEn: "First 5 seconds on mobile viewport",
      icon: <Eye size={16} />
    },
    {
      id: "razumevanje",
      nameSr: "RAZUMEVANJE",
      nameEn: "UNDERSTANDING",
      descSr: "Da li posetilac shvata šta tačno nudite",
      descEn: "Clarity of offer and commercial value",
      icon: <HelpCircle size={16} />
    },
    {
      id: "poverenje",
      nameSr: "POVERENJE",
      nameEn: "TRUST",
      descSr: "Ocene, recenzije, fotografije radova",
      descEn: "Reviews, verified proof, credibility",
      icon: <ShieldCheck size={16} />
    },
    {
      id: "poređenje",
      nameSr: "POREĐENJE",
      nameEn: "COMPARISON",
      descSr: "Zašto vi, a ne jeftinija konkurencija",
      descEn: "Positioning against cheaper alternatives",
      icon: <GitCompare size={16} />
    },
    {
      id: "akcija",
      nameSr: "AKCIJA",
      nameEn: "ACTION",
      descSr: "Poziv, online zakazivanje, upit",
      descEn: "Direct call, booking, qualification",
      icon: <Zap size={16} />
    },
    {
      id: "klijent",
      nameSr: "KLIJENT",
      nameEn: "CLIENT",
      descSr: "Realizovan posao i preporuka",
      descEn: "Closed business and loyalty",
      icon: <UserCheck size={16} />
    }
  ];

  return (
    <section
      id="scene-03"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-[#07090e] text-white overflow-hidden transition-colors duration-500 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest">
            {isSr ? "03 / PUT KROZ ODLUKU" : "03 / THE CUSTOMER JOURNEY"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            {isSr ? "Negde na ovom putu možete da gubite ljude." : "Somewhere along this path, you might be losing people."}
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Svaki potencijalni kupac mora bez zastoja da pređe čitav lanac: od prve pretrage do konačne akcije. Ako je samo jedna karika prekinuta, ceo proces staje:"
              : "Every prospective customer must navigate a frictionless sequence from discovery to final action. If even one link snaps, the entire conversion stops:"}
          </p>
        </div>

        {/* Linear Journey Chain with Interactive Friction Break */}
        <div className="space-y-8">
          
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {isSr ? "INTERAKTIVNI LANAC ODLUKE (Kliknite na korak)" : "INTERACTIVE CONVERSION CHAIN (Click step)"}
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold">
                <AlertTriangle size={13} />
                <span>
                  {isSr ? `Tačka trenja: ${journeySteps[activeStageIdx].nameSr}` : `Friction point: ${journeySteps[activeStageIdx].nameEn}`}
                </span>
              </div>
            </div>

            {/* Visual Steps Chain */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
              {journeySteps.map((step, idx) => {
                const isFriction = activeStageIdx === idx;
                const isAfterFriction = idx > activeStageIdx;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStageIdx(idx)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[140px] relative ${
                      isFriction
                        ? "bg-red-950/60 border-red-500 ring-2 ring-red-500/30 text-red-200"
                        : isAfterFriction
                        ? "bg-slate-950/40 border-slate-800/60 text-slate-600 opacity-40"
                        : "bg-slate-800/80 border-slate-700 text-white hover:border-blue-500"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-mono opacity-60">0{idx + 1}</span>
                      {isFriction ? (
                        <XCircle size={15} className="text-red-400" />
                      ) : (
                        <div className={`p-1.5 rounded-lg ${isAfterFriction ? "bg-slate-900" : "bg-blue-600/20 text-blue-400"}`}>
                          {step.icon}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold font-mono tracking-wider">{isSr ? step.nameSr : step.nameEn}</div>
                      <div className="text-[10px] leading-tight opacity-75">{isSr ? step.descSr : step.descEn}</div>
                    </div>

                    {isFriction && (
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-red-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider whitespace-nowrap shadow-xs">
                        {isSr ? "PREKID" : "BREAK"}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Diagnostic readout for selected break */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-2">
              <div className="text-xs font-mono text-red-400 font-bold uppercase">
                {isSr ? "ŠTA SE DEŠAVA KADA JE PREKID NA OVOM KORAKU?" : "WHAT HAPPENS WHEN THIS STEP BREAKS?"}
              </div>
              <p className="text-sm text-slate-300">
                {activeStageIdx === 0 && (isSr ? "Posetioci ni ne znaju da postojite. Sav saobraćaj odlazi konkurenciji sa optimizovanim Google profilom." : "Buyers don't even know you exist. Organic traffic flows straight to optimized competitors.")}
                {activeStageIdx === 1 && (isSr ? "Sajt se sporo učitava ili izgleda zastarelo na telefonu. Posetilac se vraća na Google u roku od 3 sekunde." : "The site loads slowly or is not mobile-friendly. Visitors bounce back to search within 3 seconds.")}
                {activeStageIdx === 2 && (isSr ? "Posetilac ne shvata šta tačno radite i koja je cena. Zbunjen kupac nikada ne kupuje." : "Visitors cannot quickly grasp your offer or pricing structure. A confused prospect never converts.")}
                {activeStageIdx === 3 && (isSr ? "Nema stvarnih fotografija, nema recenzija ni ocena. Kupac bira sigurniju opciju sa dokazanim referencama." : "No real client proof, no verified ratings. The buyer defaults to a safer competitor with reviews.")}
                {activeStageIdx === 4 && (isSr ? "Vaša ponuda izgleda isto kao 5 drugih firmi, pa vas kupac procenjuje isključivo po najnižoj ceni." : "Your offer looks identical to competitors, forcing the client to compare strictly on lowest price.")}
                {activeStageIdx === 5 && (isSr ? "Dugme za poziv je skriveno, forma traži previše podataka ili booking ne radi na telefonu. Kupac odustaje u poslednjem koraku." : "Call CTA is hidden, contact form is cumbersome, or booking fails on mobile. High-intent lead is lost.")}
                {activeStageIdx === 6 && (isSr ? "Klijent je uslužen, ali nema sistema za prikupljanje recenzije i preporuke. Lanac ne hrani sam sebe." : "Customer is served but no automated review follow-up occurs. The flywheel stops turning.")}
              </p>
            </div>

          </div>

        </div>

        {/* Climax Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden space-y-3">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            {isSr ? "KLJUČNO SAZNANJE" : "CORE INSIGHT"}
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {isSr ? "Nije svaki problem u samom dizajnu." : "Not every breakdown is about visual design."}
          </h3>

          <p className="text-base sm:text-xl text-slate-300 font-medium">
            {isSr
              ? "Ako je prekid na poverenju ili u koraku akcije, novi 'lepši' sajt bez strateškog rešenja neće promeniti ishod."
              : "If the friction sits in trust or the action step, a purely 'prettier' website will not improve revenue."}
          </p>
        </div>

      </div>
    </section>
  );
}
