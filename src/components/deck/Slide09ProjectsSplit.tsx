import React from "react";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide09Props {
  onNext: () => void;
  onPrev: () => void;
  onOpenProjects: () => void;
}

export function Slide09ProjectsSplit({ onNext, onPrev, onOpenProjects }: Slide09Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-28 relative overflow-y-auto bg-white dark:bg-[#07090e] text-slate-900 dark:text-white select-none">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-5 py-2">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">
              STVARNI PROJEKTI • DUBINA REŠENJA
            </span>
            <button
              onClick={onOpenProjects}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-xs font-mono text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isSr ? "Svi radovi" : "All projects"}</span>
            </button>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            {isSr ? "Strategija vredi samo ako se sprovede." : "Strategy is only valuable when executed."}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {isSr 
              ? "Različiti biznisi zahtevaju različitu dubinu rešenja." 
              : "Different businesses require different depth of engineering."}
          </p>
        </div>

        {/* 2 Controlled Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-5xl mx-auto">
          
          {/* Altara Inmo / Platforms */}
          <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                {isSr ? "WEB APLIKACIJA & NEKRETNINE" : "REAL ESTATE PLATFORM"}
              </span>
              <span className="text-xs font-mono text-slate-500">Altara Inmo</span>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              {isSr ? "Sistem za instant pretragu" : "Instant filtering platform"}
            </h3>

            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <p><strong>Problem:</strong> {isSr ? "Posetioci su teško pronalazili odgovarajuće nekretnine zbog sporog filtriranja." : "Buyers struggled to filter listings due to bloated latency."}</p>
              <p><strong>Odluka:</strong> {isSr ? "Projektovati sistem sa instant filtriranjem, mapom i direktnim kontaktom agenata." : "Engineer real-time client-side filter engine with fast direct inquiries."}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium"><strong>Ishod:</strong> {isSr ? "Brza pretraga bez čekanja i znatno više zakazanih razgledanja." : "Zero-lag search and direct increase in booked viewings."}</p>
            </div>
          </div>

          {/* Taxi Pro GPS */}
          <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">
                {isSr ? "SOFTVERSKI SISTEM & FLOTE" : "FLEET GPS & TELEMETRY"}
              </span>
              <span className="text-xs font-mono text-slate-500">Taxi Pro GPS</span>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              {isSr ? "Praćenje u realnom vremenu" : "Real-time dispatch telemetry"}
            </h3>

            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <p><strong>Problem:</strong> {isSr ? "Vlasnici vozila su gubili vreme i novac zbog manuelnih izveštaja i nepreciznog praćenja." : "Fleet owners lost thousands on manual logs and imprecise dispatching."}</p>
              <p><strong>Odluka:</strong> {isSr ? "Izraditi stabilan sistem sa 24/7 telemetrijom, istorijom kretanja i analitikom troškova." : "Deploy sub-second GPS tracking with automated route analytics."}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium"><strong>Ishod:</strong> {isSr ? "99.9% pouzdanost rada, smanjenje troškova goriva i ušteda desetina sati mesečno." : "99.9% system uptime, lower fuel spend, and automated fleet logs."}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
