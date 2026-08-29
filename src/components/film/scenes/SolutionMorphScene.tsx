import { motion } from "motion/react";
import { Eye, ShieldCheck, Target, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface SolutionMorphSceneProps {
  progress: number; // 0.56 to 0.65
}

export function SolutionMorphScene({ progress }: SolutionMorphSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize 0.0 to 1.0 within 0.56 - 0.65
  const norm = Math.min(1, Math.max(0, (progress - 0.56) / 0.09));

  // Subphases:
  // 0.0 - 0.60: 4 branches fan out from the diagnosed bottleneck
  // 0.60 - 1.00: Branches re-converge into central statement: "Ne prodajemo alat. Biramo ono što ima smisla."

  const isBranching = norm < 0.65;

  const branches = [
    {
      id: "b1",
      triggerSr: "PROBLEM SA VIDLJIVOŠĆU",
      triggerEn: "VISIBILITY BOTTLENECK",
      solutionSr: "Lokalni SEO & Google Profil",
      solutionEn: "Local SEO & Google Maps Ranking",
      impactSr: "+ Posetioci sa pretrage",
      impactEn: "+ High-Intent Organic Traffic",
      icon: <Eye size={16} />,
      color: "border-blue-500/40 text-blue-500 bg-blue-500/10"
    },
    {
      id: "b2",
      triggerSr: "PROBLEM SA POVERENJEM",
      triggerEn: "TRUST BOTTLENECK",
      solutionSr: "Dokazi, Ponuda & Redizajn",
      solutionEn: "Proof Architecture & Strategic UX",
      impactSr: "+ Instant autoritet",
      impactEn: "+ Brand Credibility & Authority",
      icon: <ShieldCheck size={16} />,
      color: "border-indigo-500/40 text-indigo-500 bg-indigo-500/10"
    },
    {
      id: "b3",
      triggerSr: "PROBLEM SA AKCIJOM",
      triggerEn: "CONVERSION BOTTLENECK",
      solutionSr: "1-Tap Booking & CRO Pozivi",
      solutionEn: "1-Tap Booking & Conversion Rate Optimization",
      impactSr: "+ Više direktnih zakazivanja",
      impactEn: "+ Higher Direct Inbound Calls",
      icon: <Target size={16} />,
      color: "border-emerald-500/40 text-emerald-500 bg-emerald-500/10"
    },
    {
      id: "b4",
      triggerSr: "PROBLEM SA PROCESOM",
      triggerEn: "OPERATIONAL BOTTLENECK",
      solutionSr: "Radna Automatizacija & App",
      solutionEn: "Workflow Automation & Custom Web App",
      impactSr: "+ Ušteda radnih sati",
      impactEn: "+ Admin Hours & Cost Reduction",
      icon: <Bot size={16} />,
      color: "border-purple-500/40 text-purple-500 bg-purple-500/10"
    }
  ];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Top Headline */}
      <div className="space-y-3 max-w-4xl z-20 transition-all duration-500 mb-6">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "07 / MORFOLŠKO REŠENJE" : "07 / SOLUTION MORPH"}
        </div>
        
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {!isBranching
            ? (isSr ? "Biramo ono što ima smisla." : "We choose what makes sense.")
            : (isSr ? "Ne prodajemo alat." : "We don't sell tools.")}
        </h2>
      </div>

      {/* 4 Solution Morphing Branches */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-4xl transition-all duration-700"
        style={{
          transform: `scale(${isBranching ? 1 : 0.95})`,
          opacity: isBranching ? 1 : 0.4
        }}
      >
        {branches.map((branch, i) => {
          const branchNorm = Math.min(1, norm / 0.4);

          return (
            <div
              key={branch.id}
              className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-lg text-left space-y-2 backdrop-blur-md transition-all duration-500"
              style={{
                transform: `translateY(${(1 - branchNorm) * 30}px)`
              }}
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
          );
        })}
      </div>

      {/* Dynamic Re-convergence Core Statement */}
      {!isBranching && (
        <div className="mt-8 max-w-2xl text-center space-y-2 animate-fade-in">
          <p className="text-sm sm:text-lg font-mono text-blue-600 dark:text-blue-400 font-bold">
            {isSr 
              ? "Prilagođavamo inženjering vašem poslovnom cilju, a ne našem šablonu." 
              : "We tailor engineering to your business objective, not our template."}
          </p>
        </div>
      )}

    </div>
  );
}
