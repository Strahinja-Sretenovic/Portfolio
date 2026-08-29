import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface RiskReversalSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function RiskReversalScene({ progress: norm }: RiskReversalSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const alternativePaths = [
    { nameSr: "Google Profil", nameEn: "Google Maps Profile", isNewSite: false },
    { nameSr: "Landing Stranica", nameEn: "Targeted Landing Page", isNewSite: false },
    { nameSr: "Booking Rešenje", nameEn: "Direct Booking Tool", isNewSite: false },
    { nameSr: "Lokalni SEO", nameEn: "Local SEO Setup", isNewSite: false },
    { nameSr: "Automatizacija", nameEn: "Workflow Automation", isNewSite: false },
    { nameSr: "Popravka Postojećeg Sajta", nameEn: "Audit Existing Site", isNewSite: false },
    { nameSr: "Kompletan Novi Sajt", nameEn: "Full New Web Platform", isNewSite: true }
  ];

  const p1Opacity = norm < 0.28 ? 1 : Math.max(0, 1 - (norm - 0.28) / 0.10);
  const p2Opacity = norm < 0.30 ? 0 : norm < 0.38 ? (norm - 0.30) / 0.08 : norm < 0.60 ? 1 : Math.max(0, 1 - (norm - 0.60) / 0.08);
  const p3Opacity = norm < 0.62 ? 0 : Math.min(1, (norm - 0.62) / 0.10);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Phase 1: The Provocative Honest Question */}
      <div 
        className="absolute space-y-4 max-w-4xl px-4"
        style={{
          opacity: p1Opacity,
          transform: `scale(${1 - (1 - p1Opacity) * 0.05}) translateY(${-(1 - p1Opacity) * 15}px)`,
          visibility: p1Opacity > 0.001 ? "visible" : "hidden"
        }}
      >
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "10 / ISKRENA PROCENA" : "10 / RADICAL HONESTY"}
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {isSr ? "A šta ako vam novi sajt uopšte nije potreban?" : "What if you don't even need a new website?"}
        </h2>
      </div>

      {/* Phase 2: "Odlično. Reći ćemo vam." */}
      <div 
        className="absolute space-y-3 max-w-3xl px-4"
        style={{
          opacity: p2Opacity,
          transform: `scale(${0.96 + 0.04 * p2Opacity}) translateY(${norm < 0.38 ? (0.38 - norm) * 15 : (norm - 0.60) * -15}px)`,
          visibility: p2Opacity > 0.001 ? "visible" : "hidden"
        }}
      >
        <div className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold text-emerald-500 tracking-tight">
          {isSr ? "Odlično." : "Great."}
        </div>
        <p className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          {isSr ? "Reći ćemo vam to odmah." : "We will tell you directly."}
        </p>
      </div>

      {/* Phase 3: The 7 Alternative Paths & Philosophy */}
      <div 
        className="absolute space-y-6 max-w-4xl px-4"
        style={{
          opacity: p3Opacity,
          transform: `scale(${0.96 + 0.04 * p3Opacity}) translateY(${(1 - p3Opacity) * 20}px)`,
          visibility: p3Opacity > 0.001 ? "visible" : "hidden"
        }}
      >
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Cilj nije da prodamo najveći projekat." : "The goal is never to sell the biggest project."}
          </h3>
          <p className="text-base sm:text-xl font-mono text-blue-600 dark:text-blue-400 font-bold">
            {isSr ? "Cilj je da pronađemo sledeći pravi potez." : "The goal is to pinpoint the next right move."}
          </p>
        </div>

        {/* 7 Alternative Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          {alternativePaths.map((path, idx) => (
            <div
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold ${
                path.isNewSite
                  ? "bg-blue-600 text-white border-blue-500 shadow-md"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              }`}
            >
              <span>{isSr ? path.nameSr : path.nameEn}</span>
              {path.isNewSite && <span className="ml-1 text-[10px] opacity-75">(1 od 7)</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtitle */}
      <div 
        className="absolute bottom-10 max-w-md text-xs font-mono text-slate-400"
        style={{ opacity: norm > 0.15 && norm < 0.90 ? 1 : 0 }}
      >
        {isSr 
          ? "Ukoliko je prioritet popravka postojećeg Google profila ili landing stranica, nećemo vam nuditi sistem od 3.000€." 
          : "If fixing your Google profile solves the bottleneck, we won't try to sell you a 3,000€ platform."}
      </div>

    </div>
  );
}
