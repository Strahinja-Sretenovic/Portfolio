import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide07Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide07Process({ onNext, onPrev }: Slide07Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      name: "DISCOVERY",
      punchline: isSr ? "Razumemo biznis." : "We understand the business.",
      desc: isSr ? "Upoznajemo vaš poslovni model, trenutni nastup i stvarne ciljeve." : "We analyze your commercial model, existing setup, and real goals."
    },
    {
      num: "02",
      name: "RESEARCH",
      punchline: isSr ? "Tražimo dokaze." : "We seek proof, not assumptions.",
      desc: isSr ? "Analiziramo konkurenciju, navike kupaca i stvarne podatke pretrage." : "We analyze competitors, buyer search intent, and behavioral friction."
    },
    {
      num: "03",
      name: "STRATEGIJA",
      punchline: isSr ? "Odlučujemo šta ima smisla." : "We define what makes sense.",
      desc: isSr ? "Definišemo najracionalniji plan: šta menjamo, šta zadržavamo i šta gradimo." : "We define the highest-ROI roadmap: what to change and what to keep."
    },
    {
      num: "04",
      name: "UX",
      punchline: isSr ? "Projektujemo najjasniji put." : "We architect the clearest path.",
      desc: isSr ? "Postavljamo strukturu sadržaja, poruke i tokove bez trenja." : "We design content hierarchy, messaging clarity, and conversion flows."
    },
    {
      num: "05",
      name: "DEVELOPMENT",
      punchline: isSr ? "Gradimo rešenje." : "We engineer the solution.",
      desc: isSr ? "Pišemo čist, brz i pouzdan kod bez nepotrebnih šablona i usporavanja." : "We build clean, ultra-fast, robust code with zero bloated templates."
    },
    {
      num: "06",
      name: "MERENJE",
      punchline: isSr ? "Proveravamo šta se stvarno dogodilo." : "We measure real impact.",
      desc: isSr ? "Pratimo analitiku, pozive i konverzije kako bismo potvrdili rezultat." : "We track analytics, leads, and actual client conversions."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-5 py-2">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">
            PROCES RADA • OD ANALIZE DO REZULTATA
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr ? "Od analize do rezultata." : "From diagnosis to actual result."}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {isSr 
              ? "Svaki korak ima jednu jasnu svrhu i oslanja se na prethodni." 
              : "Each step has one distinct purpose and builds logically on the previous."}
          </p>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3 sm:p-3.5 rounded-2xl border text-center transition-all cursor-pointer space-y-1.5 ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20 scale-[1.02]"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                }`}
              >
                <span className={`text-[10px] font-mono font-bold ${isActive ? "text-blue-100" : "text-blue-600 dark:text-blue-400"}`}>
                  {st.num}
                </span>
                <div className="text-xs font-display font-bold">
                  {st.name}
                </div>
                <p className={`text-[11px] font-medium leading-tight ${isActive ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                  {st.punchline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Focused Step Explanation */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 dark:border-white/10 text-center space-y-1.5 max-w-2xl mx-auto shadow-xl">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
            {steps[activeStep].num} — {steps[activeStep].name}
          </div>
          <h3 className="text-base sm:text-lg font-display font-bold text-white">
            {steps[activeStep].punchline}
          </h3>
          <p className="text-xs text-slate-400">
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Climax Takeaway */}
        <div className="text-center pt-1">
          <div className="text-base sm:text-xl font-display font-black text-slate-950 dark:text-white">
            <span>{isSr ? "Launch nije kraj. " : "Launch is not the end. "}</span>
            <span className="text-blue-600 dark:text-blue-400">{isSr ? "Tek tada dobijamo stvarne podatke." : "That is when real data begins."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
