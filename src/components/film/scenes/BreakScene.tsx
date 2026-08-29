import { motion } from "motion/react";
import { AlertTriangle, ZapOff, Sparkles } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface BreakSceneProps {
  progress: number; // 0.30 to 0.38
}

export function BreakScene({ progress }: BreakSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize 0.0 to 1.0 within 0.30 - 0.38
  const norm = Math.min(1, Math.max(0, (progress - 0.30) / 0.08));

  // Subphases:
  // 0.0 - 0.50: The Snap fracture! "I TU STE GA IZGUBILI"
  // 0.50 - 1.00: 3D pull back, 8 alternative broken vulnerability nodes light up

  const isSnapping = norm < 0.5;
  const isOrbiting = norm >= 0.45;

  const vulnerabilityNodes = [
    { nameSr: "PRETRAGA", nameEn: "SEARCH", x: -220, y: -100 },
    { nameSr: "PONUDA", nameEn: "OFFER", x: 220, y: -100 },
    { nameSr: "POVERENJE", nameEn: "TRUST", x: -240, y: 10 },
    { nameSr: "CENA", nameEn: "PRICE", x: 240, y: 10 },
    { nameSr: "BOOKING", nameEn: "BOOKING", x: -180, y: 120 },
    { nameSr: "MOBILNI UX", nameEn: "MOBILE UX", x: 180, y: 120 },
    { nameSr: "BRZINA", nameEn: "SPEED", x: -80, y: -160 },
    { nameSr: "ODZIV", nameEn: "FOLLOW-UP", x: 80, y: -160 }
  ];

  // Active lighting node based on sub-progress
  const activeNodeIdx = isOrbiting ? Math.floor(((norm - 0.45) / 0.55) * vulnerabilityNodes.length) % vulnerabilityNodes.length : 0;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Red ambient warning bloom */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none transition-opacity duration-300"
        style={{ opacity: isSnapping ? 0.8 : 0.3 }}
      />

      {/* Main Snap Climax Headline */}
      <div 
        className="space-y-4 max-w-4xl z-20 transition-all duration-500"
        style={{
          transform: `scale(${isSnapping ? 1 : 0.9}) translateY(${isSnapping ? 0 : -30}px)`
        }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-xs font-bold uppercase tracking-widest">
          <ZapOff size={13} />
          <span>{isSr ? "04 / PREKID LANCA" : "04 / THE FRACTURE"}</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-red-500 dark:text-red-400 tracking-tight leading-none">
          {isSr ? "I TU STE GA IZGUBILI." : "AND RIGHT HERE YOU LOST THEM."}
        </h2>

        {isOrbiting && (
          <p className="text-base sm:text-2xl font-mono text-slate-700 dark:text-slate-200 font-semibold max-w-2xl mx-auto pt-2">
            {isSr ? "Problem nije uvek tamo gde mislite." : "The problem is not always where you think."}
          </p>
        )}
      </div>

      {/* Center Fractured Circuit / Broken Node */}
      <div 
        className="mt-8 relative w-64 h-32 flex items-center justify-center transition-all duration-700"
        style={{
          transform: `perspective(800px) rotateX(${norm * 20}deg) scale(${isSnapping ? 1.1 : 0.85})`
        }}
      >
        <div className="absolute w-3 h-3 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)] animate-ping" />
        <div className="absolute w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
        
        {/* Broken Gap Lines */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 mr-6" />
        <div className="text-red-500 font-mono font-bold text-lg">✕</div>
        <div className="w-24 h-0.5 bg-slate-400/20 ml-6" />
      </div>

      {/* 8 Orbiting Alternative Vulnerability Nodes */}
      {isOrbiting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden sm:flex">
          {vulnerabilityNodes.map((node, i) => {
            const isPulsing = activeNodeIdx === i;
            return (
              <div
                key={i}
                className={`absolute px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold tracking-wider transition-all duration-300 shadow-md ${
                  isPulsing
                    ? "bg-red-500/20 border-red-500 text-red-500 dark:text-red-300 scale-110 shadow-red-500/30"
                    : "bg-slate-100/60 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 opacity-60"
                }`}
                style={{
                  transform: `translate(${node.x}px, ${node.y}px)`
                }}
              >
                <span>{isSr ? node.nameSr : node.nameEn}</span>
                {isPulsing && <span className="ml-1 text-[9px] text-red-400">!</span>}
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Subtitle */}
      <div className="absolute bottom-10 max-w-lg text-xs font-mono text-slate-500 dark:text-slate-400">
        {isSr
          ? "Kupac ne javlja zašto je otišao. Jednostavno zatvori prozor i ode kod konkurencije."
          : "Customers never explain why they bounced. They simply close the tab and call a competitor."}
      </div>

    </div>
  );
}
