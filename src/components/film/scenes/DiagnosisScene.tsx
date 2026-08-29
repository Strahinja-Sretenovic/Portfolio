import { motion } from "motion/react";
import { Radar, Eye, MessageSquare, ShieldCheck, Smartphone, Search, Target, Cpu, Activity } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface DiagnosisSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function DiagnosisScene({ progress: norm }: DiagnosisSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const diagnosticLayers = [
    { id: "vis", nameSr: "VIDLJIVOST", nameEn: "VISIBILITY", icon: <Eye size={13} />, descSr: "Google profil & lokalni ranking", descEn: "Local Maps & SERP ranking" },
    { id: "msg", nameSr: "PORUKA", nameEn: "MESSAGE", icon: <MessageSquare size={13} />, descSr: "Jasnoća za 3 sekunde", descEn: "Clarity within 3 seconds" },
    { id: "tru", nameSr: "POVERENJE", nameEn: "TRUST", icon: <ShieldCheck size={13} />, descSr: "Dokazi, ocene i portfolio", descEn: "Proof, reviews & real work" },
    { id: "ux", nameSr: "MOBILNI UX", nameEn: "MOBILE UX", icon: <Smartphone size={13} />, descSr: "Ergonomija i navigacija palcem", descEn: "Thumb zone ergonomics" },
    { id: "seo", nameSr: "SEO STRUKTURA", nameEn: "SEO STRUCTURE", icon: <Search size={13} />, descSr: "Brzina 100/100 i schema podaci", descEn: "100/100 Core Web Vitals" },
    { id: "cro", nameSr: "KONVERZIJA", nameEn: "CONVERSION", icon: <Target size={13} />, descSr: "Eliminacija tačaka trenja", descEn: "Friction point removal" },
    { id: "pro", nameSr: "PROCES", nameEn: "PROCESS", icon: <Activity size={13} />, descSr: "Prijem i obrada upita", descEn: "Lead handling & intake" },
    { id: "tec", nameSr: "TEHNOLOGIJA", nameEn: "TECHNOLOGY", icon: <Cpu size={13} />, descSr: "Čist kod, nula bloat-a", descEn: "Clean code, zero bloat" },
    { id: "dat", nameSr: "PODACI", nameEn: "TELEMETRY", icon: <Radar size={13} />, descSr: "Merenje stvarnih poseta i poziva", descEn: "Real visit & call tracking" }
  ];

  const h1Opacity = norm < 0.28 ? 1 : Math.max(0, 1 - (norm - 0.28) / 0.10);
  const h2Opacity = norm < 0.30 ? 0 : norm < 0.38 ? (norm - 0.30) / 0.08 : norm < 0.62 ? 1 : Math.max(0, 1 - (norm - 0.62) / 0.08);
  const h3Opacity = norm < 0.64 ? 0 : Math.min(1, (norm - 0.64) / 0.08);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Top Headline with smooth cross-dissolve */}
      <div className="space-y-2 max-w-4xl z-20 mb-6 px-4">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "06 / DIJAGNOSTIČKI RADAR" : "06 / DIAGNOSTIC RADAR"}
        </div>

        <div className="relative min-h-[50px] sm:min-h-[70px] flex items-center justify-center">
          <h2 
            className="absolute text-2xl sm:text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight"
            style={{
              opacity: h1Opacity,
              transform: `translateY(${(1 - h1Opacity) * -8}px)`,
              visibility: h1Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Zato prvo tražimo uzrok." : "That's why we find the root cause first."}
          </h2>

          <h2 
            className="absolute text-2xl sm:text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight"
            style={{
              opacity: h2Opacity,
              transform: `translateY(${norm < 0.38 ? (0.38 - norm) * 10 : (norm - 0.62) * -10}px)`,
              visibility: h2Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Ne menjamo sve." : "We don't replace everything."}
          </h2>

          <h2 
            className="absolute text-2xl sm:text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight"
            style={{
              opacity: h3Opacity,
              transform: `translateY(${(1 - h3Opacity) * 8}px)`,
              visibility: h3Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Menjamo ono što koči rezultat." : "We fix what throttles your results."}
          </h2>
        </div>
      </div>

      {/* Center Radar Scanner Field & 9 Matrix Nodes */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        
        {/* Concentric Radar Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-48 sm:w-80 h-48 sm:h-80 rounded-full border border-blue-500/20"
            style={{ transform: `scale(${0.5 + norm * 0.7})`, opacity: Math.min(1, norm / 0.3) }}
          />
          <div 
            className="w-72 sm:w-[480px] h-72 sm:h-[480px] rounded-full border border-dashed border-blue-500/15"
            style={{ transform: `scale(${0.4 + norm * 0.8})`, opacity: Math.min(1, norm / 0.4) }}
          />
          <div className="absolute w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        </div>

        {/* 9 Diagnostic Structured Nodes in 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-3xl z-10">
          {diagnosticLayers.map((layer, idx) => {
            const appearNorm = Math.min(1, Math.max(0, (norm - 0.15) / 0.55));
            const isBottleneck = layer.id === "cro" || layer.id === "pro";
            const isHighlighted = norm >= 0.68 && isBottleneck;

            return (
              <div
                key={layer.id}
                className={`p-3 rounded-2xl border text-left ${
                  isHighlighted
                    ? "bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/30 scale-105 ring-2 ring-blue-400/50"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                }`}
                style={{
                  opacity: Math.min(1, appearNorm * (idx + 1) * 0.25),
                  transform: `translateY(${(1 - appearNorm) * 15}px)`
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold">
                    <span className={isHighlighted ? "text-white" : "text-blue-500"}>{layer.icon}</span>
                    <span>{isSr ? layer.nameSr : layer.nameEn}</span>
                  </div>
                  {isHighlighted && (
                    <span className="px-1.5 py-0.5 rounded bg-white text-blue-600 font-mono text-[9px] font-extrabold uppercase">
                      {isSr ? "USKO GRLO" : "BOTTLENECK"}
                    </span>
                  )}
                </div>
                <div className={`text-[11px] font-sans ${isHighlighted ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                  {isSr ? layer.descSr : layer.descEn}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Subtitle */}
      <div 
        className="mt-6 max-w-lg text-center"
        style={{ opacity: norm > 0.30 && norm < 0.88 ? 1 : 0 }}
      >
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          {isSr 
            ? "Precizna dijagnostika štedi mesece lutanja i hiljade evra na pogrešnim uslugama." 
            : "Accurate diagnosis saves months of wasted effort and thousands of euros."}
        </p>
      </div>

    </div>
  );
}
