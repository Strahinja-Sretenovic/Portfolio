import React, { useState } from "react";
import { Check, ShieldAlert, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide06Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide06RecommendationMatrix({ onNext: _onNext, onPrev: _onPrev }: Slide06Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const matrixData = [
    {
      id: "local_services",
      situation: isSr ? "Lokalne usluge (npr. salon, servis, ordinacija)" : "Local services (salon, repair, clinic)",
      bottleNeck: isSr ? "Telefon zvoni tokom rada, ručno zakazivanje" : "Calls disrupt work, tedious manual scheduling",
      recommended: isSr ? "Google Profil + Online Booking sistem" : "Google Profile + 1-Tap Booking System",
      why: isSr ? "Klijenti žele odmah da vide slobodne termine bez zvanja." : "Customers want immediate appointment slots without calling.",
      notRecommended: isSr ? "Veliki sajt sa 10 stranica teksta" : "Complex 10-page static brochure"
    },
    {
      id: "architecture_consulting",
      situation: isSr ? "Konsalting, arhitektura, B2B usluge" : "Consulting, architecture, B2B services",
      bottleNeck: isSr ? "Kupac ne razume proces i ne vidi dokaze kvaliteta" : "Client doesn't see methodology & portfolio depth",
      recommended: isSr ? "Portfolio sajt visokog poverenja + Studije slučaja" : "High-trust portfolio + Detailed case studies",
      why: isSr ? "Odluka je skupa; kupac traži sigurnost i profesionalnost." : "High-ticket decision; requires proof of excellence.",
      notRecommended: isSr ? "Jeftin šablonski sajt sa generičkim slikama" : "Generic template with stock photos"
    },
    {
      id: "retail_ecommerce",
      situation: isSr ? "Proizvodi, radionice, specifične ponude" : "Products, custom goods, niche offerings",
      bottleNeck: isSr ? "Prodaja preko poruka na Instagramu troši sate" : "Selling via Instagram DMs wastes hours daily",
      recommended: isSr ? "E-commerce prodavnica + Automatizacija plaćanja" : "Streamlined E-Commerce + Automated checkout",
      why: isSr ? "Kupac plaća za 60 sekundi, a vama stiže narudžbina." : "Customer buys in 60s without manual back-and-forth.",
      notRecommended: isSr ? "Preusmeravanje na 'Pošaljite nam poruku u DM'" : "Manual 'Send us a DM for price' hurdles"
    },
    {
      id: "operations_heavy",
      situation: isSr ? "Kompanije sa internim procesima i timovima" : "Businesses with internal team workflows",
      bottleNeck: isSr ? "Gubljenje podataka u Excel tabelama i emailovima" : "Data leaks across messy spreadsheets & email",
      recommended: isSr ? "Namenska Web Aplikacija / Klijentski Portal" : "Custom Web Application & Client Portal",
      why: isSr ? "Objedinjuje tim, klijente i podatke na jednom mestu." : "Unifies staff, clients, and assets seamlessly.",
      notRecommended: isSr ? "Još jedan informativni javni sajt" : "Another generic public landing page"
    }
  ];

  const activeItem = matrixData[selectedCase] || matrixData[0];

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-900 dark:bg-[#05070c] text-white">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-4 sm:space-y-5 py-2">
        <div className="text-center space-y-1 sm:space-y-2 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            {isSr ? "Problem određuje rešenje." : "The problem dictates the solution."}
          </h2>

          <p className="text-xs sm:text-base text-slate-300">
            {isSr 
              ? "Ne postoji univerzalni sajt. Postoji samo rešenje koje tačno rešava vaše usko grlo." 
              : "There is no one-size-fits-all website. There is only the exact remedy for your bottleneck."}
          </p>
        </div>

        {/* Interactive Matrix Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
          {matrixData.map((item, idx) => {
            const isSelected = selectedCase === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(idx)}
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer space-y-1 ${
                  isSelected
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-950/80 border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <span className="text-[10px] font-mono font-bold block opacity-75">
                  {isSr ? "SCENARIO" : "SCENARIO"} 0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-display font-bold line-clamp-2 leading-tight">
                  {item.situation}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Comparison Card */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-white/10 shadow-2xl space-y-3 sm:space-y-4">
          
          <div className="border-b border-white/10 pb-3">
            <span className="text-[10px] sm:text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block">
              {isSr ? "Identifikovano usko grlo:" : "Identified Bottleneck:"}
            </span>
            <h3 className="text-sm sm:text-lg font-display font-bold text-white mt-0.5">
              {activeItem.bottleNeck}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Recommended Solution */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1 sm:space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <Check className="w-4 h-4" />
                <span>{isSr ? "PRAVO REŠENJE" : "RECOMMENDED SOLUTION"}</span>
              </div>
              <div className="text-xs sm:text-base font-display font-bold text-white">
                {activeItem.recommended}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300">
                {activeItem.why}
              </p>
            </div>

            {/* What to Avoid */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-1 sm:space-y-1.5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>{isSr ? "POGREŠAN POTEZ" : "WHAT TO AVOID"}</span>
              </div>
              <div className="text-xs sm:text-base font-display font-bold text-white">
                {activeItem.notRecommended}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300">
                {isSr ? "Gubljenje budžeta i vremena bez rešavanja suštinskog problema." : "Wastes budget without fixing the root cause of friction."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
