import { motion } from "motion/react";
import { ExternalLink, Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { projectsData } from "../../../data/projectsData";

interface RealWorkSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function RealWorkScene({ progress: norm }: RealWorkSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Projects to display (3 projects)
  const activeProjectIdx = Math.min(2, Math.floor(norm * 3));

  const projects = [
    {
      id: "frizerski-salon-stevan",
      name: "Frizerski Salon Stevan",
      categorySr: "Lokalni Biznis & Booking",
      categoryEn: "Local Business & Booking Engine",
      url: "https://frizerski-salon-stevan.vercel.app/",
      problemSr: "Propušteni pozivi i gubljenje novih klijenata tokom rada frizera",
      problemEn: "Missed phone calls during active client appointments",
      decisionSr: "Instant 1-tap mobilni booking & 100/100 brzina učitavanja",
      decisionEn: "Instant 1-tap mobile booking & 100/100 Core Web Vitals speed",
      resultSr: "+180% više direktnih online zakazivanja bez prekidanja rada",
      resultEn: "+180% increase in direct appointments without phone interruptions",
      highlightSr: "100/100 Mobile Speed • 1-Tap Poziv",
      highlightEn: "100/100 Mobile Speed • 1-Tap Call"
    },
    {
      id: "ada-studio",
      name: "Ada Studio",
      categorySr: "Agencijska Platforma & CMS",
      categoryEn: "Agency Platform & Custom CMS",
      url: "https://adastudio.rs/",
      problemSr: "Zastarela prezentacija koja nije ulivala poverenje većim klijentima",
      problemEn: "Outdated portfolio failing to win high-ticket contracts",
      decisionSr: "Autoritativan agencijski dizajn i prilagođen CMS za lako vođenje",
      decisionEn: "Authoritative design language & custom effortless CMS pipeline",
      resultSr: "Organsko Google rangiranje i stabilan priliv kvalifikovanih upita",
      resultEn: "Top organic search ranking and continuous qualified inbound leads",
      highlightSr: "Custom CMS • Google SERP Rang",
      highlightEn: "Custom CMS • Google Top Ranking"
    },
    {
      id: "taxi-pro-gps",
      name: "Taxi Pro GPS",
      categorySr: "Softverska Platforma po Meri",
      categoryEn: "Operations & Fleet Software",
      url: "https://www.taxiprogps.com/",
      problemSr: "Ručno vođenje evidencije i visoki administrativni troškovi",
      problemEn: "Manual dispatch tracking and heavy administrative overhead",
      decisionSr: "Namenska real-time platforma sa trenutnim uvidom u telemetriju",
      decisionEn: "Bespoke real-time telemetry architecture with sub-second sync",
      resultSr: "Ušteda hiljada evra na gorivu i automatizacija dispečerskih izveštaja",
      resultEn: "Thousands saved on operating expenses and automated dispatching",
      highlightSr: "Real-Time Podaci • 99.9% Uptime",
      highlightEn: "Real-Time Telemetry • 99.9% Uptime"
    }
  ];

  const currentProject = projects[activeProjectIdx];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center select-none pointer-events-none overflow-hidden">
      
      {/* Top Headline */}
      <div className="space-y-2 max-w-4xl z-20 mb-6 px-4">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <ShieldCheck size={14} />
          <span>{isSr ? "09 / VERIFIKOVANI RADOVI" : "09 / VERIFIED EVIDENCE"}</span>
        </div>
        
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isSr ? "Od problema do dokazanog rezultata." : "From problem to proven result."}
        </h2>
      </div>

      {/* Dynamic Project Morphing Frame */}
      <div className="w-full max-w-3xl">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 shadow-xl text-left space-y-6">
          
          {/* Project Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
            <div>
              <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-wider">
                {isSr ? currentProject.categorySr : currentProject.categoryEn}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                {currentProject.name}
              </h3>
            </div>

            <a
              href={currentProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-blue-600 hover:text-white text-xs font-mono font-bold text-slate-700 dark:text-slate-200 transition-colors w-fit"
            >
              <span>{isSr ? "Posetite sajt" : "Live Website"}</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* 3 Pillars: Problem -> Decision -> Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Problem */}
            <div className="p-3.5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-1">
              <span className="text-[10px] font-mono font-bold text-red-500 uppercase">
                {isSr ? "01 / PROBLEM" : "01 / THE PROBLEM"}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                {isSr ? currentProject.problemSr : currentProject.problemEn}
              </p>
            </div>

            {/* 2. Decision */}
            <div className="p-3.5 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-1">
              <span className="text-[10px] font-mono font-bold text-blue-500 uppercase">
                {isSr ? "02 / ODLUKA" : "02 / THE DECISION"}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                {isSr ? currentProject.decisionSr : currentProject.decisionEn}
              </p>
            </div>

            {/* 3. Result */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase">
                {isSr ? "03 / REZULTAT" : "03 / THE RESULT"}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                {isSr ? currentProject.resultSr : currentProject.resultEn}
              </p>
            </div>

          </div>

          {/* Footer Switcher Dots */}
          <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
            <span>
              {isSr ? `Projekat ${activeProjectIdx + 1} od 3` : `Project ${activeProjectIdx + 1} of 3`}
            </span>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    dot === activeProjectIdx ? "w-6 bg-blue-500" : "bg-slate-300 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
