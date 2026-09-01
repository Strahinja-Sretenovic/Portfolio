import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide10Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide10RadicalHonesty({ onNext: _onNext, onPrev: _onPrev }: Slide10Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-950 text-white">
      
      {/* Main Slide Content - Clean, Minimal & High Contrast */}
      <div className="w-full max-w-4xl mx-auto my-auto z-10 text-center space-y-4 sm:space-y-6 py-2">
        
        <div className="space-y-1.5 sm:space-y-3">
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-400 leading-tight">
            {isSr ? "A šta ako vam novi sajt nije potreban?" : "What if you don't even need a new website?"}
          </h2>

          <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-blue-400 tracking-tight">
            {isSr ? "Reći ćemo vam." : "We will tell you."}
          </div>
        </div>

        <p className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          {isSr 
            ? "Možda je sledeći pravi potez bolji Google profil, booking rešenje, jedna landing stranica, automatizacija ili nekoliko preciznih izmena na postojećem sistemu." 
            : "Maybe the real next move is an optimized Google profile, a booking system, a single landing page, workflow automation, or a few targeted tweaks to your current setup."}
        </p>

        <div className="pt-3 sm:pt-4 border-t border-white/10 max-w-xl mx-auto">
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-sm sm:text-xl font-display font-bold text-white">
              {isSr ? "Cilj nije najveći projekat." : "The goal is not the biggest project."}
            </p>
            <p className="text-base sm:text-2xl font-display font-black text-blue-400">
              {isSr ? "Cilj je pravi sledeći potez." : "The goal is the right next move."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
