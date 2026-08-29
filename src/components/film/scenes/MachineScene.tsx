import { Search, Compass, Layers, Palette, Code2, LineChart } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface MachineSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function MachineScene({ progress: norm }: MachineSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // 6 Mechanical Stages:
  const stages = [
    {
      num: "01",
      nameSr: "DISCOVERY",
      nameEn: "DISCOVERY",
      descSr: "Razumemo biznis",
      descEn: "We understand the business",
      icon: <Search size={14} />
    },
    {
      num: "02",
      nameSr: "RESEARCH",
      nameEn: "RESEARCH",
      descSr: "Tražimo dokaze",
      descEn: "We gather empirical evidence",
      icon: <Compass size={14} />
    },
    {
      num: "03",
      nameSr: "STRATEGY & IA",
      nameEn: "STRATEGY & IA",
      descSr: "Definišemo pravi put",
      descEn: "We define the right architecture",
      icon: <Layers size={14} />
    },
    {
      num: "04",
      nameSr: "UX & DESIGN",
      nameEn: "UX & DESIGN",
      descSr: "Projektujemo iskustvo",
      descEn: "We engineer the experience",
      icon: <Palette size={14} />
    },
    {
      num: "05",
      nameSr: "DEVELOPMENT",
      nameEn: "DEVELOPMENT",
      descSr: "Gradimo rešenje",
      descEn: "We build the software",
      icon: <Code2 size={14} />
    },
    {
      num: "06",
      nameSr: "MEASURE",
      nameEn: "MEASURE",
      descSr: "Proveravamo šta se stvarno dogodilo",
      descEn: "We verify what actually happened",
      icon: <LineChart size={14} />
    }
  ];

  // Active step (0 to 5) as progress advances
  const currentStep = Math.min(5, Math.floor(norm * 6.2));
  const head1Opacity = norm < 0.68 ? 1 : Math.max(0, 1 - (norm - 0.68) / 0.10);
  const head2Opacity = norm < 0.70 ? 0 : Math.min(1, (norm - 0.70) / 0.10);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Top Headline with smooth cross-fade */}
      <div className="space-y-3 max-w-4xl z-20 mb-8 px-4">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          <span>{isSr ? "08 / SSOLUTIONS SISTEM" : "08 / THE SSOLUTIONS SYSTEM"}</span>
        </div>
        
        <div className="relative min-h-[50px] sm:min-h-[70px] flex items-center justify-center">
          <h2 
            className="absolute text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight"
            style={{
              opacity: head1Opacity,
              transform: `translateY(${(1 - head1Opacity) * -8}px)`,
              visibility: head1Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Od problema do stabilnog sistema." : "From problem to stable system."}
          </h2>

          <h2 
            className="absolute text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight"
            style={{
              opacity: head2Opacity,
              transform: `translateY(${(1 - head2Opacity) * 8}px)`,
              visibility: head2Opacity > 0.001 ? "visible" : "hidden"
            }}
          >
            {isSr ? "Launch nije kraj." : "Launch is not the end."}
          </h2>
        </div>
      </div>

      {/* The 6-Stage Mechanical Engine Line */}
      <div className="w-full max-w-5xl relative">
        
        {/* Horizontal rail track */}
        <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full relative mb-8 overflow-hidden hidden md:block">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-sm"
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
                className={`p-3.5 rounded-2xl border text-left relative flex flex-col justify-between ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/30 scale-105 ring-2 ring-blue-400/50 z-20"
                    : isCompleted
                    ? "bg-slate-100 dark:bg-slate-900 border-blue-500/40 text-slate-900 dark:text-white opacity-85 z-10"
                    : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-400 opacity-40"
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
        style={{ opacity: norm > 0.25 ? 1 : 0 }}
      >
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
          {isSr 
            ? "Tek nakon lansiranja dobijamo stvarne podatke korisnika i optimizujemo rezultat." 
            : "Only after launch do we receive real telemetry and compound commercial return."}
        </p>
      </div>

    </div>
  );
}
