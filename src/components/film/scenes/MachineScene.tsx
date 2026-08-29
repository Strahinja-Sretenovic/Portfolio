import { motion } from "motion/react";
import { Search, Compass, Layers, Code2, LineChart, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface MachineSceneProps {
  progress: number; // 0.65 to 0.74
}

export function MachineScene({ progress }: MachineSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize 0.0 to 1.0 within 0.65 - 0.74
  const norm = Math.min(1, Math.max(0, (progress - 0.65) / 0.09));

  // 6 Mechanical Stages:
  const stages = [
    {
      num: "01",
      nameSr: "DISCOVERY",
      nameEn: "DISCOVERY",
      descSr: "Linija prikuplja poslovne podatke",
      descEn: "Path collects business telemetry",
      icon: <Search size={14} />
    },
    {
      num: "02",
      nameSr: "RESEARCH",
      nameEn: "RESEARCH",
      descSr: "Signali ponašanja kupaca",
      descEn: "Customer decision signals emerge",
      icon: <Compass size={14} />
    },
    {
      num: "03",
      nameSr: "STRATEGY",
      nameEn: "STRATEGY",
      descSr: "Putanja se ispravlja",
      descEn: "The path aligns with commercial goals",
      icon: <Layers size={14} />
    },
    {
      num: "04",
      nameSr: "IA & UX",
      nameEn: "IA & UX",
      descSr: "Putanja postaje kristalno jasna",
      descEn: "Information hierarchy crystallizes",
      icon: <CheckCircle2 size={14} />
    },
    {
      num: "05",
      nameSr: "DEVELOPMENT",
      nameEn: "DEVELOPMENT",
      descSr: "Putanja postaje radni sistem",
      descEn: "Engineered into resilient software",
      icon: <Code2 size={14} />
    },
    {
      num: "06",
      nameSr: "MEASURE",
      nameEn: "MEASURE",
      descSr: "Metrike i povrat investicije",
      descEn: "Continuous conversion tracking",
      icon: <LineChart size={14} />
    }
  ];

  // Active step (0 to 5) as progress advances
  const currentStep = Math.min(5, Math.floor(norm * 6));

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Top Headline */}
      <div className="space-y-3 max-w-4xl z-20 transition-all duration-500 mb-8">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          <span>{isSr ? "08 / SSOLUTIONS MAŠINA" : "08 / THE SSOLUTIONS MACHINE"}</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isSr ? "Od problema do sistema." : "From problem to working system."}
        </h2>
      </div>

      {/* The 6-Stage Mechanical Engine Line */}
      <div className="w-full max-w-5xl relative">
        
        {/* Horizontal glowing rail track */}
        <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full relative mb-8 overflow-hidden hidden md:block">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,1)]"
            style={{ width: `${Math.min(100, (norm + 0.1) * 100)}%` }}
          />
        </div>

        {/* 6 Engine Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {stages.map((stage, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;

            return (
              <div
                key={stage.num}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-400 shadow-xl shadow-blue-500/30 scale-105 ring-2 ring-blue-400/50 z-20"
                    : isCompleted
                    ? "bg-slate-100 dark:bg-slate-900/90 border-blue-500/40 text-slate-900 dark:text-white opacity-85 z-10"
                    : "bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-400 opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-blue-200" : "text-blue-500"}`}>
                    {stage.num}
                  </span>
                  <span className={isActive ? "text-white" : "text-slate-400"}>
                    {stage.icon}
                  </span>
                </div>

                <div>
                  <div className="font-mono text-xs font-bold tracking-wider mb-1">
                    {isSr ? stage.nameSr : stage.nameEn}
                  </div>
                  <div className={`text-[10px] font-sans leading-snug ${isActive ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                    {isSr ? stage.descSr : stage.descEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Subtitle */}
      <div 
        className="mt-8 max-w-xl text-center transition-all duration-500"
        style={{ opacity: norm > 0.3 ? 1 : 0 }}
      >
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
          {isSr 
            ? "Lansiranje sajta nije kraj — već početak merenja i generisanja realnog poslovnog rezultata." 
            : "Launch is not the end — it's the beginning of measuring and compounding real commercial return."}
        </p>
      </div>

    </div>
  );
}
