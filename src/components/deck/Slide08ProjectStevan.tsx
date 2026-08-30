import React from "react";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide08Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide08ProjectStevan({ onNext, onPrev }: Slide08Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-slate-900 dark:bg-[#05070c] text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-5 py-2">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            STVARNI PROJEKAT • LOKALNI USLUŽNI BIZNIS
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            {isSr ? "Frizerski Salon Stevan" : "Stevan Hair Salon"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {isSr 
              ? "Rešavanje konkretnog problema lokalnog biznisa kroz jasan mobilni UX." 
              : "Solving a tangible local business challenge through clear mobile UX."}
          </p>
        </div>

        {/* 4 Pillars Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">
              01 — PROBLEM
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isSr 
                ? "Klijenti su stalno zvali tokom rada sa istim pitanjima o cenama, lokaciji i radnom vremenu." 
                : "Clients repeatedly interrupted work with repetitive questions about prices, location, and hours."}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
              02 — ODLUKA
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isSr 
                ? "Postaviti pregledan cenovnik, tačnu lokaciju i 1-klik poziv u prvi plan na telefonu." 
                : "Put clear pricing, map location, and one-tap call immediately into focus on mobile."}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">
              03 — REALIZACIJA
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isSr 
                ? "Brz i čist sajt prilagođen telefonu, usklađen sa Google profilom i mapom." 
                : "Fast, minimal mobile-first web presence aligned with Google Business and Maps."}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-1.5 bg-emerald-950/10">
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              04 — ISHOD
            </span>
            <p className="text-xs text-emerald-200 leading-relaxed font-medium">
              {isSr 
                ? "Znatno manje ponavljajućih poziva; klijenti dolaze unapred informisani." 
                : "Significantly fewer repetitive calls; clients arrive pre-informed with clarity."}
            </p>
          </div>
        </div>

        {/* Live link info */}
        <div className="text-center pt-0.5">
          <a
            href="https://www.frizerskisalonstevan.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>frizerskisalonstevan.rs</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
