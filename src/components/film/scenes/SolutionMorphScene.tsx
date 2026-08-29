import { Eye, ShieldCheck, Target, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface SolutionMorphSceneProps {
  progress: number; // 0.555 to 0.655
}

export function SolutionMorphScene({ progress }: SolutionMorphSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize 0.0 to 1.0 within 0.555 - 0.655
  const norm = Math.min(1, Math.max(0, (progress - 0.555) / 0.10));

  // Subphases:
  // 0.00 - 0.45: Branching solutions ("Pravi problem određuje pravi alat.")
  // 0.45 - 1.00: The Iconic SSolutions Brand Moment:
  // "NE POČINJEMO SAJTOM. POČINJEMO PROBLEMOM."

  const isBranching = norm < 0.45;

  const branches = [
    {
      id: "b1",
      triggerSr: "VIDLJIVOST",
      triggerEn: "VISIBILITY",
      solutionSr: "Lokalni SEO & Mape",
      solutionEn: "Local SEO & Google Maps",
      impactSr: "Organski dolasci",
      impactEn: "Organic Inbounds",
      icon: <Eye size={15} />,
      color: "border-blue-500/40 text-blue-500 bg-blue-500/10"
    },
    {
      id: "b2",
      triggerSr: "POVERENJE",
      triggerEn: "TRUST",
      solutionSr: "Dokazi, Ponuda & UX",
      solutionEn: "Proof Architecture & Strategic UX",
      impactSr: "Instant autoritet",
      impactEn: "Instant Authority",
      icon: <ShieldCheck size={15} />,
      color: "border-indigo-500/40 text-indigo-500 bg-indigo-500/10"
    },
    {
      id: "b3",
      triggerSr: "AKCIJA",
      triggerEn: "CONVERSION",
      solutionSr: "1-Tap Booking & CRO",
      solutionEn: "1-Tap Booking & CRO",
      impactSr: "Direktna zakazivanja",
      impactEn: "Direct Appointments",
      icon: <Target size={15} />,
      color: "border-emerald-500/40 text-emerald-500 bg-emerald-500/10"
    },
    {
      id: "b4",
      triggerSr: "PROCES",
      triggerEn: "PROCESS",
      solutionSr: "Automatizacija & App",
      solutionEn: "Workflow Automation & App",
      impactSr: "Ušteda radnih sati",
      impactEn: "Operational Efficiency",
      icon: <Bot size={15} />,
      color: "border-purple-500/40 text-purple-500 bg-purple-500/10"
    }
  ];

  const sceneOpacity = norm < 0.10 
    ? norm / 0.10 
    : norm > 0.88 
    ? Math.max(0, (1 - norm) / 0.12) 
    : 1;

  return (
    <div 
      className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none pointer-events-none overflow-hidden transition-opacity duration-200"
      style={{ opacity: sceneOpacity }}
    >
      
      {/* Subphase 1: The Right Tool Mapping */}
      {isBranching ? (
        <div className="w-full max-w-4xl space-y-6 animate-fade-in">
          <div className="space-y-2">
            <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
              {isSr ? "07 / PRAVI ALAT" : "07 / THE RIGHT TOOL"}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {isSr ? "Pravi problem određuje pravi alat." : "The right problem dictates the right tool."}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-lg text-left space-y-2 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold flex items-center gap-1.5 ${branch.color}`}>
                    {branch.icon}
                    <span>{isSr ? branch.triggerSr : branch.triggerEn}</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold flex items-center gap-1">
                    <CheckCircle2 size={11} />
                    <span>{isSr ? branch.impactSr : branch.impactEn}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                    {isSr ? branch.solutionSr : branch.solutionEn}
                  </div>
                  <ArrowRight size={15} className="text-slate-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Subphase 2: THE BIG BRAND MOMENT */
        <div className="max-w-5xl space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-slate-400 dark:text-slate-500 tracking-tight leading-none line-through decoration-red-500/70 decoration-4">
              {isSr ? "NE POČINJEMO SAJTOM." : "WE DON'T START WITH A SITE."}
            </h2>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-none">
              {isSr ? "POČINJEMO PROBLEMOM." : "WE START WITH THE PROBLEM."}
            </h1>
          </div>

          <p className="text-sm sm:text-xl font-mono text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase pt-4">
            {isSr ? "SSOLUTIONS INŽENJERING PRISTUP" : "SSOLUTIONS ENGINEERING APPROACH"}
          </p>
        </div>
      )}

    </div>
  );
}
