import React from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide08Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide08ProjectStevan({ onNext: _onNext, onPrev: _onPrev }: Slide08Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-900 dark:bg-[#05070c] text-white">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-4 sm:space-y-5 py-2">
        <div className="text-center space-y-1 sm:space-y-1.5 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Ada Studio
          </h2>
          <p className="text-xs sm:text-base text-slate-300">
            {isSr 
              ? "Rešavanje problema premijum pozicioniranja i automatizacije sadržaja." 
              : "Solving premium brand positioning and automated portfolio management."}
          </p>
        </div>

        {/* 4 Pillars Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-5xl mx-auto">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 space-y-1 sm:space-y-1.5">
            <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">
              01 — {isSr ? "PROBLEM" : "PROBLEM"}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isSr 
                ? "Prethodna prezentacija nije odražavala visok estetski nivo i radove je bilo teško redovno ažurirati." 
                : "Previous presentation failed to reflect their high aesthetic caliber and was tedious to update."}
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
              02 — {isSr ? "ODLUKA" : "DECISION"}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isSr 
                ? "Kreirati minimalističku galeriju fokusiranu na visoku rezoluciju radova i intuitivan CMS." 
                : "Build a minimalist gallery focused on high-resolution projects with an intuitive CMS."}
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
            <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">
              03 — {isSr ? "REALIZACIJA" : "EXECUTION"}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {isSr 
                ? "Prilagođena arhitektura, brzo učitavanje slika, automatizovan prijem upita i SEO optimizacija." 
                : "Custom architecture, lightning-fast media delivery, automated inquiry funnel, and strong SEO."}
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-1.5 bg-emerald-950/10">
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              04 — {isSr ? "ISHOD" : "OUTCOME"}
            </span>
            <p className="text-xs text-emerald-200 leading-relaxed font-medium">
              {isSr 
                ? "Prezentacija koja odmah gradi poverenje kod premijum klijenata uz stalan priliv novih upita." 
                : "Instant credibility with high-ticket clients and a steady flow of inbound organic inquiries."}
            </p>
          </div>
        </div>

        {/* Live link info */}
        <div className="text-center pt-0.5">
          <a
            href="https://adastudio.rs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>adastudio.rs</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
