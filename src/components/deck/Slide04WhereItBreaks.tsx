import React, { useState } from "react";
import { AlertTriangle, MapPin, EyeOff, FileText, Smartphone, CalendarX, ZapOff } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide04Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide04WhereItBreaks({ onNext: _onNext, onPrev: _onPrev }: Slide04Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeFriction, setActiveFriction] = useState<number>(0);

  const frictionPoints = [
    {
      id: "google_profile",
      icon: MapPin,
      title: isSr ? "Loš Google profil" : "Poor Google Profile",
      desc: isSr ? "Netačno radno vreme, malo recenzija ili loše fotografije." : "Outdated hours, few reviews, or blurry low-quality photos.",
      solution: isSr ? "Optimizacija Google Business profila" : "Google Business Profile optimization"
    },
    {
      id: "no_proof",
      icon: EyeOff,
      title: isSr ? "Nema dokaza rada" : "No Proof of Work",
      desc: isSr ? "Posetilac ne vidi stvarne rezultate niti utiske prethodnih kupaca." : "Visitor cannot see actual past results or customer testimonials.",
      solution: isSr ? "Strukturiran portfolio i svedočanstva" : "Structured portfolio & social proof"
    },
    {
      id: "confusing_offer",
      icon: FileText,
      title: isSr ? "Nejasna ponuda" : "Confusing Offer",
      desc: isSr ? "Tekst je preopširan, a cene ili osnovne usluge su sakrivene." : "Text is verbose and confusing; pricing or packages are obscured.",
      solution: isSr ? "Jasna struktura stranice i pregledan cenovnik" : "Clear page hierarchy & structured pricing"
    },
    {
      id: "mobile_bad",
      icon: Smartphone,
      title: isSr ? "Loše na telefonu" : "Broken on Mobile",
      desc: isSr ? "Sajt je spor, nepregledan ili težak za klik na telefonu gde je 80% posetilaca." : "Site is slow or hard to tap on mobile where 80%+ traffic lives.",
      solution: isSr ? "Moderan, brz 'mobile-first' interfejs" : "Modern fast mobile-first interface"
    },
    {
      id: "hard_to_contact",
      icon: CalendarX,
      title: isSr ? "Komplikovan kontakt" : "Friction in Booking",
      desc: isSr ? "Kupac mora da popunjava 10 polja umesto 1-klik poziva ili termina." : "Client must fill 10 tedious fields instead of 1-tap call/booking.",
      solution: isSr ? "Jednostavan sistem zakazivanja ili direktan poziv" : "1-tap booking or direct WhatsApp/call link"
    },
    {
      id: "slow_loading",
      icon: ZapOff,
      title: isSr ? "Sporo učitavanje" : "Slow Load Speed",
      desc: isSr ? "Ako se stranica učitava duže od 3 sekunde, 50% kupaca jednostavno ode." : "If the page takes over 3 seconds to load, half the buyers bounce.",
      solution: isSr ? "Tehnička optimizacija brzine i keširanja" : "Technical speed & asset optimization"
    }
  ];

  const currentFriction = frictionPoints[activeFriction] || frictionPoints[0];

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-950 text-white">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-4 sm:space-y-5 py-2">
        <div className="text-center space-y-1 sm:space-y-2 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            {isSr ? "Gde najčešće puca veza?" : "Where does the connection usually break?"}
          </h2>

          <p className="text-xs sm:text-base text-slate-300">
            {isSr 
              ? "Problem često nije u 'lepoti' sajta, već u tačkama frikcije gde gubite poverenje ili pažnju." 
              : "The issue is rarely just visuals; it is specific points of friction where attention is lost."}
          </p>
        </div>

        {/* 6 Problem Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {frictionPoints.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeFriction === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveFriction(idx)}
                className={`p-3 rounded-xl sm:rounded-2xl border transition-all cursor-pointer space-y-1 ${
                  isSelected
                    ? "bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/30"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <div className="text-xs sm:text-sm font-display font-bold text-white leading-snug">
                  {item.title}
                </div>

                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Focused Diagnostic Insight Box */}
        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-2.5 sm:gap-3">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
              {isSr ? "CILJANA INTERVENCIJA:" : "TARGETED INTERVENTION:"} {currentFriction.title}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">
              <span className="font-semibold text-white">{isSr ? "Pravi lek: " : "Right remedy: "}</span>
              {currentFriction.solution}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
