import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface RiskReversalSceneProps {
  progress: number; // 0.82 to 0.88
}

export function RiskReversalScene({ progress }: RiskReversalSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize 0.0 to 1.0 within 0.82 - 0.88
  const norm = Math.min(1, Math.max(0, (progress - 0.82) / 0.06));

  // Subphases strictly partitioned:
  // 0.00 - 0.36: Phase 1 "A šta ako vam novi sajt uopšte nije potreban?"
  // 0.36 - 0.66: Phase 2 "Odlično. Reći ćemo vam to odmah."
  // 0.66 - 1.00: Phase 3 "Cilj nije da prodamo najveći projekat. Cilj je da pronađemo sledeći pravi potez." + 7 Chips

  const alternativePaths = [
    { nameSr: "Google Profil", nameEn: "Google Maps Profile", isNewSite: false },
    { nameSr: "Landing Stranica", nameEn: "Targeted Landing Page", isNewSite: false },
    { nameSr: "Booking Rešenje", nameEn: "Direct Booking Tool", isNewSite: false },
    { nameSr: "Lokalni SEO", nameEn: "Local SEO Setup", isNewSite: false },
    { nameSr: "Automatizacija", nameEn: "Workflow Automation", isNewSite: false },
    { nameSr: "Popravka Postojećeg Sajta", nameEn: "Audit Existing Site", isNewSite: false },
    { nameSr: "Kompletan Novi Sajt", nameEn: "Full New Web Platform", isNewSite: true }
  ];

  const sceneOpacity = norm < 0.10 
    ? norm / 0.10 
    : norm > 0.88 
    ? Math.max(0, (1 - norm) / 0.12) 
    : 1;

  return (
    <div 
      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none overflow-hidden transition-opacity duration-200"
      style={{ opacity: sceneOpacity }}
    >
      
      {/* Phase 1: The Provocative Honest Question */}
      {norm < 0.36 && (
        <div className="space-y-4 max-w-4xl transition-all duration-300">
          <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
            {isSr ? "10 / ISKRENA PROCENA" : "10 / RADICAL HONESTY"}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "A šta ako vam novi sajt uopšte nije potreban?" : "What if you don't even need a new website?"}
          </h2>
        </div>
      )}

      {/* Phase 2: "Odlično. Reći ćemo vam." */}
      {norm >= 0.36 && norm < 0.66 && (
        <div className="space-y-3 max-w-3xl transition-all duration-300">
          <div className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold text-emerald-500 tracking-tight">
            {isSr ? "Odlično." : "Great."}
          </div>
          <p className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {isSr ? "Reći ćemo vam to odmah." : "We will tell you directly."}
          </p>
        </div>
      )}

      {/* Phase 3: The 7 Alternative Paths & Philosophy */}
      {norm >= 0.66 && (
        <div className="space-y-6 max-w-4xl transition-all duration-300">
          
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
                className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold transition-all duration-300 ${
                  path.isNewSite
                    ? "bg-blue-600 text-white border-blue-500 shadow-md"
                    : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                }`}
              >
                <span>{isSr ? path.nameSr : path.nameEn}</span>
                {path.isNewSite && <span className="ml-1 text-[10px] opacity-75">(1 od 7)</span>}
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Bottom Subtitle */}
      <div 
        className="absolute bottom-10 max-w-md text-xs font-mono text-slate-400 transition-opacity duration-300"
        style={{ opacity: norm > 0.20 && norm < 0.88 ? 1 : 0 }}
      >
        {isSr 
          ? "Ukoliko je prioritet popravka postojećeg Google profila ili landing stranica, nećemo vam nuditi sistem od 3.000€." 
          : "If fixing your Google profile solves the bottleneck, we won't try to sell you a 3,000€ platform."}
      </div>

    </div>
  );
}
