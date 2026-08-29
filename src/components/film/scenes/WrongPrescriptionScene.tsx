import { motion } from "motion/react";
import { Laptop, Search, Sparkles, Smartphone, Megaphone, Calendar, Bot, HelpCircle } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface WrongPrescriptionSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function WrongPrescriptionScene({ progress: norm }: WrongPrescriptionSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const isFreezing = norm < 0.45;
  const isCollapsing = norm >= 0.45 && norm < 0.82;
  const isDissolving = norm >= 0.82;

  const head1Opacity = norm < 0.40 ? 1 : Math.max(0, 1 - (norm - 0.40) / 0.10);
  const head2Opacity = norm < 0.42 ? 0 : Math.min(1, (norm - 0.42) / 0.10);

  const tools = [
    { nameSr: "NOVI SAJT", nameEn: "NEW WEBSITE", icon: <Laptop size={14} />, startX: -320, startY: -160 },
    { nameSr: "SEO & MAPE", nameEn: "SEO & MAPS", icon: <Search size={14} />, startX: 320, startY: -150 },
    { nameSr: "REDIZAJN", nameEn: "REDESIGN", icon: <Sparkles size={14} />, startX: -340, startY: 20 },
    { nameSr: "APLIKACIJA", nameEn: "CUSTOM APP", icon: <Smartphone size={14} />, startX: 340, startY: 30 },
    { nameSr: "PLAĆENI OGLASI", nameEn: "PAID ADS", icon: <Megaphone size={14} />, startX: -260, startY: 180 },
    { nameSr: "BOOKING SISTEM", nameEn: "BOOKING ENGINE", icon: <Calendar size={14} />, startX: 260, startY: 170 },
    { nameSr: "AUTOMATIZACIJA", nameEn: "AUTOMATION", icon: <Bot size={14} />, startX: 0, startY: -220 }
  ];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Dynamic Dramatic Typography with smooth crossfade */}
      <div className="space-y-4 max-w-4xl z-20 px-4">
        <div className="text-xs font-mono text-amber-500 font-bold uppercase tracking-widest">
          {isSr ? "05 / POGREŠNA TERAPIJA" : "05 / THE WRONG PRESCRIPTION"}
        </div>

        <div className="relative min-h-[60px] sm:min-h-[90px] flex items-center justify-center">
          <h2 
            className="absolute text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
            style={{
              opacity: head1Opacity,
              transform: `translateY(${(1 - head1Opacity) * -10}px)`,
              visibility: head1Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Ako ne znamo šta je problem..." : "If we don't know the problem..."}
          </h2>

          <h2 
            className="absolute text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
            style={{
              opacity: head2Opacity,
              transform: `translateY(${(1 - head2Opacity) * 10}px)`,
              visibility: head2Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "...svako rešenje je samo nagađanje." : "...every solution is just guesswork."}
          </h2>
        </div>
      </div>

      {/* The Frozen Flying Tools / Collapsing Tangled Cluster */}
      <div className="relative w-72 h-72 flex items-center justify-center my-8">
        
        {/* Center Target Point */}
        <div className={`w-12 h-12 rounded-full border-2 border-dashed border-amber-500/50 flex items-center justify-center ${
          isCollapsing ? "scale-75 bg-amber-500/20" : "scale-100"
        }`}>
          <HelpCircle size={20} className="text-amber-500 animate-pulse" />
        </div>

        {/* Flying Tool Badges */}
        {tools.map((tool, idx) => {
          let currentX = tool.startX;
          let currentY = tool.startY;
          let scale = 1;
          let opacity = 1;

          if (isFreezing) {
            // Rush inward to 40% distance and freeze!
            const rushProgress = Math.min(1, norm / 0.35);
            currentX = tool.startX * (1 - rushProgress * 0.65);
            currentY = tool.startY * (1 - rushProgress * 0.65);
          } else if (isCollapsing) {
            // Collapse tightly into chaos ball
            const collapseNorm = (norm - 0.45) / 0.37;
            const angle = (idx / tools.length) * Math.PI * 2 + collapseNorm * 4;
            currentX = Math.cos(angle) * (60 * (1 - collapseNorm));
            currentY = Math.sin(angle) * (60 * (1 - collapseNorm));
            scale = 1 - collapseNorm * 0.4;
          } else if (isDissolving) {
            opacity = Math.max(0, (1 - norm) / 0.18);
            scale = 0.4;
          }

          return (
            <div
              key={idx}
              className="absolute px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white shadow-md flex items-center gap-1.5 text-xs font-mono font-bold whitespace-nowrap"
              style={{
                transform: `translate(${currentX}px, ${currentY}px) scale(${scale})`,
                opacity
              }}
            >
              <span className="text-amber-500">{tool.icon}</span>
              <span>{isSr ? tool.nameSr : tool.nameEn}</span>
            </div>
          );
        })}
      </div>

      {/* Insight Subtitle */}
      <div 
        className="max-w-xl text-center"
        style={{ opacity: norm > 0.20 && norm < 0.84 ? 1 : 0 }}
      >
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
          {isSr 
            ? "Kupovina novog sajta pre analize je isto što i uzimanje lekova bez pregleda lekara." 
            : "Buying a redesign before diagnosis is like taking prescriptions without an examination."}
        </p>
      </div>

    </div>
  );
}
