import { ZapOff } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface BreakSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function BreakScene({ progress: norm }: BreakSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const isSnapping = norm < 0.38;
  const isOrbiting = norm >= 0.55;

  const whyOpacity = norm < 0.34 ? 0 : norm < 0.42 ? (norm - 0.34) / 0.08 : norm < 0.52 ? 1 : Math.max(0, 1 - (norm - 0.52) / 0.08);
  const orbitTextOpacity = norm < 0.54 ? 0 : Math.min(1, (norm - 0.54) / 0.10);

  const vulnerabilityNodes = [
    { nameSr: "VIDLJIVOST", nameEn: "VISIBILITY", x: -220, y: -110 },
    { nameSr: "PONUDA", nameEn: "OFFER", x: 220, y: -110 },
    { nameSr: "POVERENJE", nameEn: "TRUST", x: -250, y: 0 },
    { nameSr: "CENA", nameEn: "PRICE", x: 250, y: 0 },
    { nameSr: "MOBILE", nameEn: "MOBILE UX", x: -180, y: 120 },
    { nameSr: "BOOKING", nameEn: "BOOKING", x: 180, y: 120 },
    { nameSr: "KONTAKT", nameEn: "CONTACT", x: -90, y: -160 },
    { nameSr: "BRZINA", nameEn: "SPEED", x: 90, y: -160 },
    { nameSr: "FOLLOW-UP", nameEn: "FOLLOW-UP", x: 0, y: 150 }
  ];

  // Active lighting node based on sub-progress
  const activeNodeIdx = isOrbiting ? Math.floor(((norm - 0.55) / 0.45) * vulnerabilityNodes.length) % vulnerabilityNodes.length : 0;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Red ambient warning bloom (GPU-friendly radial gradient instead of software filter blur) */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2)_0,transparent_70%)] pointer-events-none transition-opacity duration-300"
        style={{ opacity: isSnapping ? 0.9 : 0.35 }}
      />

      {/* Main Snap Climax Headline */}
      <div 
        className="space-y-4 max-w-4xl z-20 px-4"
        style={{
          transform: `scale(${isSnapping ? 1 : 0.96}) translateY(${isSnapping ? 0 : -14}px)`
        }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-xs font-bold uppercase tracking-widest">
          <ZapOff size={13} />
          <span>{isSr ? "04 / PREKID LANCA" : "04 / THE FRACTURE"}</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-red-500 dark:text-red-400 tracking-tight leading-none">
          {isSr ? "I TU STE GA IZGUBILI." : "AND RIGHT HERE YOU LOST THEM."}
        </h2>

        {/* Why Subtitle with smooth fade */}
        <div
          className="relative min-h-[40px] flex items-center justify-center"
        >
          <p 
            className="absolute text-lg sm:text-3xl font-mono text-slate-800 dark:text-slate-200 font-bold max-w-2xl mx-auto"
            style={{ 
              opacity: whyOpacity,
              transform: `translateY(${(1 - whyOpacity) * 10}px)`,
              visibility: whyOpacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "A možda nikada nećete znati zašto." : "And you might never know why."}
          </p>

          <p 
            className="absolute text-base sm:text-2xl font-mono text-slate-700 dark:text-slate-200 font-semibold max-w-2xl mx-auto"
            style={{ 
              opacity: orbitTextOpacity,
              transform: `translateY(${(1 - orbitTextOpacity) * 10}px)`,
              visibility: orbitTextOpacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Problem nije uvek tamo gde izgleda." : "The problem is not always where it looks."}
          </p>
        </div>
      </div>

      {/* Center Fractured Circuit / Broken Node */}
      <div 
        className="mt-8 relative w-64 h-32 flex items-center justify-center"
        style={{
          transform: `perspective(800px) rotateX(${norm * 15}deg) scale(${isSnapping ? 1.1 : 0.9})`
        }}
      >
        <div className="absolute w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-ping" />
        <div className="absolute w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
        
        {/* Broken Gap Lines */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 mr-6" />
        <div className="text-red-500 font-mono font-bold text-lg">✕</div>
        <div className="w-24 h-0.5 bg-slate-400/20 ml-6" />
      </div>

      {/* 9 Sequentially Pulsing Alternative Vulnerability Nodes */}
      {isOrbiting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden sm:flex">
          {vulnerabilityNodes.map((node, i) => {
            const isPulsing = activeNodeIdx === i;
            return (
              <div
                key={i}
                className={`absolute px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold tracking-wider shadow-sm ${
                  isPulsing
                    ? "bg-red-500/20 border-red-500 text-red-500 dark:text-red-300 scale-110"
                    : "bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 opacity-60"
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
      <div 
        className="absolute bottom-10 max-w-lg text-xs font-mono text-slate-500 dark:text-slate-400 transition-opacity duration-300"
        style={{ opacity: norm > 0.20 && norm < 0.88 ? 1 : 0 }}
      >
        {isSr
          ? "Kupac ne javlja zašto je otišao. Jednostavno zatvori prozor i ode kod konkurencije."
          : "Customers never explain why they bounced. They simply close the tab and call a competitor."}
      </div>

    </div>
  );
}
