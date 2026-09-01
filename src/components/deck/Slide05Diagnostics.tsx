import React, { useState } from "react";
import { Search, Compass, ShieldCheck, Zap, Cog, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide05Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide05Diagnostics({ onNext: _onNext, onPrev: _onPrev }: Slide05Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeDimension, setActiveDimension] = useState<number>(0);

  const dimensions = [
    {
      num: "01",
      icon: Search,
      title: isSr ? "Pronalaženje & Vidljivost" : "Discovery & Visibility",
      desc: isSr ? "Kako vas ljudi pronalaze? Google Search, Maps ili društvene mreže?" : "How do prospects find you? Search, Maps, or social referrals?",
      question: isSr ? "Da li ste uopšte na radaru kada neko traži vašu uslugu?" : "Are you visible on the radar when someone needs your service?"
    },
    {
      num: "02",
      icon: Compass,
      title: isSr ? "Jasnoća ponude" : "Clarity of Offer",
      desc: isSr ? "Da li posetilac u prve 3 sekunde razume šta radite i kome pomažete?" : "Does a visitor understand in 3 seconds what you do and for whom?",
      question: isSr ? "Da li posetilac odmah vidi razlog zašto da izabere baš vas?" : "Do they immediately understand why they should choose you?"
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: isSr ? "Poverenje i dokazi" : "Trust & Credibility",
      desc: isSr ? "Da li vaš sajt izgleda pouzdano, profesionalno i aktuelno?" : "Does your digital presence establish authentic credibility?",
      question: isSr ? "Ima li stvarnih fotografija, preporuka i rešenih problema?" : "Are there authentic reviews, case studies, and clear deliverables?"
    },
    {
      num: "04",
      icon: Zap,
      title: isSr ? "Frikcija u konverziji" : "Conversion Friction",
      desc: isSr ? "Koliko je lako napraviti sledeći korak — poziv, upit, booking ili kupovinu?" : "How effortless is the next action — booking, call, or purchase?",
      question: isSr ? "Da li klijent gubi strpljenje zbog komplikovanog procesa?" : "Do clients drop off due to cumbersome forms or confusing menus?"
    },
    {
      num: "05",
      icon: Cog,
      title: isSr ? "Operativni procesi" : "Operational Workflow",
      desc: isSr ? "Da li ručno unosite termine i upite ili sistem radi za vas?" : "Are appointments manually tracked or automated smoothly?",
      question: isSr ? "Koliko sati nedeljno gubite na administrativne zadatke?" : "How many hours weekly are lost to repetitive manual admin work?"
    },
    {
      num: "06",
      icon: Sparkles,
      title: isSr ? "Pravi sledeći korak" : "Right Next Move",
      desc: isSr ? "Da li vam je potreban kompletan novi sajt ili precizna intervencija?" : "Do you need a full redesign or a targeted tactical improvement?",
      question: isSr ? "Šta donosi najveći povrat uz najmanje troškove i rizik?" : "What provides the highest ROI with the lowest friction and risk?"
    }
  ];

  const current = dimensions[activeDimension] || dimensions[0];

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-white dark:bg-[#07090e] text-slate-900 dark:text-white">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-4 sm:space-y-5 py-2">
        <div className="text-center space-y-1 sm:space-y-2 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr ? "Kako postavljamo dijagnozu?" : "How do we run the diagnosis?"}
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300">
            {isSr 
              ? "Pre nego što napišemo liniju koda ili nacrtamo dizajn, prolazimo kroz 6 dimenzija vašeg biznisa." 
              : "Before writing any code or crafting design, we audit 6 core dimensions of your business."}
          </p>
        </div>

        {/* 6 Dimension Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {dimensions.map((dim, idx) => {
            const Icon = dim.icon;
            const isSelected = activeDimension === idx;
            return (
              <div
                key={dim.num}
                onClick={() => setActiveDimension(idx)}
                className={`p-3 rounded-xl sm:rounded-2xl border transition-all cursor-pointer space-y-1 ${
                  isSelected
                    ? "bg-blue-600/10 border-blue-600 dark:border-blue-400 shadow-md shadow-blue-500/10"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">{dim.num}</span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
                </div>

                <div className="text-xs sm:text-sm font-display font-bold text-slate-900 dark:text-white leading-snug">
                  {dim.title}
                </div>

                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {dim.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Dimension Diagnostic Deep Dive */}
        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30">
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span className="font-bold text-blue-600 dark:text-blue-400 font-mono text-[11px] sm:text-xs block sm:inline mr-2">
              {isSr ? "KLJUČNO PITANJE #" : "KEY QUESTION #"}{current.num}:
            </span>
            <span className="font-medium text-slate-900 dark:text-white">{current.question}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
