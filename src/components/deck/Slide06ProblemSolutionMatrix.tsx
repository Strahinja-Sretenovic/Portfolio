import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide06Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide06ProblemSolutionMatrix({ onNext, onPrev }: Slide06Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const matrix = [
    {
      problem: isSr ? "Teško vas pronalaze na pretragama" : "Hard to find on search",
      response: isSr ? "SEO / Lokalna vidljivost & Google mapa" : "SEO / Local Maps & Visibility"
    },
    {
      problem: isSr ? "Ponuda i pozicioniranje su nejasni" : "Offer and positioning are vague",
      response: isSr ? "Strategija / Informaciona arhitektura / UX" : "Strategy / Information Architecture / UX"
    },
    {
      problem: isSr ? "Nedostaju dokazi i poverenje" : "Lacks credibility and proof",
      response: isSr ? "Prezentacija radova / Dokazi / Sadržaj" : "Case Studies / Proof / Content UX"
    },
    {
      problem: isSr ? "Posetioci odlaze bez kontakta" : "Visitors leave without inquiring",
      response: isSr ? "CRO / Booking tok / 1-klik kontakt" : "CRO / Booking Flow / 1-Tap Contact"
    },
    {
      problem: isSr ? "Previše ručnog rada iza kulisa" : "Excessive manual administrative work",
      response: isSr ? "Automatizacija procesa / Web aplikacija" : "Workflow Automation / Web Application"
    },
    {
      problem: isSr ? "Postojeći sajt više ne radi posao" : "Current website is technically obsolete",
      response: isSr ? "Kompletan redizajn / Novi moderan sajt" : "Complete Redesign / Modern Website"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-slate-900 dark:bg-[#05070c] text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-5 py-2">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            LOGIKA PREPORUKE • PROBLEM ODREĐUJE ALAT
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            {isSr ? "Pravi problem određuje pravi alat." : "The real problem determines the right tool."}
          </h2>
          <p className="text-sm sm:text-base text-blue-400 font-display font-medium">
            {isSr 
              ? "Novi sajt je samo jedna od mogućih preporuka." 
              : "A new website is just one of many possible recommendations."}
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-4xl mx-auto">
          {matrix.map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-3 text-xs sm:text-sm"
            >
              <div className="space-y-0.5 max-w-[48%]">
                <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">
                  {isSr ? "Problem" : "Problem"}
                </span>
                <p className="font-display font-bold text-slate-200 leading-snug">
                  {item.problem}
                </p>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />

              <div className="space-y-0.5 max-w-[48%] text-right">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">
                  {isSr ? "Rešenje" : "Solution"}
                </span>
                <p className="font-display font-bold text-blue-400 leading-snug">
                  {item.response}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
