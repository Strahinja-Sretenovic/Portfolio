import React, { useState } from "react";
import { Eye, FileText, ShieldCheck, MousePointerClick, Workflow, Cpu, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide05Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide05Diagnosis({ onNext, onPrev }: Slide05Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeDim, setActiveDim] = useState<number>(0);

  const dimensions = [
    {
      id: 0,
      code: "01",
      name: isSr ? "VIDLJIVOST" : "VISIBILITY",
      question: isSr ? "Da li vas pravi ljudi uopšte pronalaze?" : "Are the right people finding you at all?",
      details: isSr ? "Google pretraga, lokalne mape, SEO i digitalni kanali." : "Google search, local maps, SEO, and acquisition channels.",
      icon: Eye
    },
    {
      id: 1,
      code: "02",
      name: isSr ? "JASNOĆA" : "CLARITY",
      question: isSr ? "Da li ljudi brzo razumeju šta nudite i zašto je relevantno?" : "Do people quickly understand what you offer and why it matters?",
      details: isSr ? "Pozicioniranje, informaciona arhitektura i hijerarhija poruka." : "Positioning, information architecture, and message hierarchy.",
      icon: FileText
    },
    {
      id: 2,
      code: "03",
      name: isSr ? "POVERENJE" : "TRUST",
      question: isSr ? "Da li imaju dovoljno razloga da izaberu vas?" : "Do they have enough reasons to choose you over others?",
      details: isSr ? "Stvarni dokazi, ocene, preporuke, projekti i profesionalna prezentacija." : "Proof of work, reviews, case studies, and credible presence.",
      icon: ShieldCheck
    },
    {
      id: 3,
      code: "04",
      name: isSr ? "UX / KONVERZIJA" : "UX / CONVERSION",
      question: isSr ? "Da li je sledeći korak očigledan i jednostavan?" : "Is the next step obvious and effortless?",
      details: isSr ? "Jasni pozivi na akciju, booking tokovi i uklanjanje prepreka." : "Clear call-to-actions, streamlined booking, friction reduction.",
      icon: MousePointerClick
    },
    {
      id: 4,
      code: "05",
      name: isSr ? "PROCES" : "PROCESS",
      question: isSr ? "Da li gubite vreme na stvari koje mogu biti jednostavnije?" : "Are you wasting time on things that could be simplified?",
      details: isSr ? "Ponavljajući poslovi, obrada upita i automatizacija internih tokova." : "Repetitive tasks, lead routing, and workflow automation.",
      icon: Workflow
    },
    {
      id: 5,
      code: "06",
      name: isSr ? "TEHNOLOGIJA" : "TECHNOLOGY",
      question: isSr ? "Da li postojeći sistem podržava način na koji biznis radi?" : "Does the tech stack support modern business operations?",
      details: isSr ? "Brzina, bezbednost, skalabilnost, CMS i pouzdanost koda." : "Speed, security, scalability, CMS, and clean code reliability.",
      icon: Cpu
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-5 py-2">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">
            DIJAGNOSTIKA • 6 DIMENZIJA BIZNIS ANALIZE
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr ? "Zato prvo tražimo uzrok." : "That is why we find the root cause first."}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {isSr 
              ? "Ne pokušavamo da menjamo sve. Tražimo ono što najviše koči rezultat." 
              : "We don't try to change everything. We look for what restricts results the most."}
          </p>
        </div>

        {/* 6 Dimensions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {dimensions.map((dim, idx) => {
            const Icon = dim.icon;
            const isActive = activeDim === idx;
            return (
              <div
                key={dim.code}
                onClick={() => setActiveDim(idx)}
                className={`p-3 sm:p-3.5 rounded-2xl border text-center transition-all cursor-pointer space-y-1.5 ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20 scale-[1.02]"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                }`}
              >
                <span className={`text-[10px] font-mono font-bold ${isActive ? "text-blue-100" : "text-blue-600 dark:text-blue-400"}`}>
                  {dim.code}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 mx-auto rounded-xl flex items-center justify-center ${isActive ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-display font-bold">
                  {dim.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Focused Dimension Detail Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 dark:border-white/10 text-center space-y-1.5 max-w-2xl mx-auto shadow-xl">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
            {dimensions[activeDim].code} — {dimensions[activeDim].name}
          </div>
          <h3 className="text-base sm:text-lg font-display font-bold text-white">
            {dimensions[activeDim].question}
          </h3>
          <p className="text-xs text-slate-400">
            {dimensions[activeDim].details}
          </p>
        </div>

        {/* Bottom Core Statement */}
        <div className="text-center pt-1">
          <div className="text-lg sm:text-2xl font-display font-black text-slate-950 dark:text-white">
            <span>{isSr ? "Ne menjamo sve. " : "We don't change everything. "}</span>
            <span className="text-blue-600 dark:text-blue-400">{isSr ? "Menjamo ono što koči rezultat." : "We change what restricts results."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
