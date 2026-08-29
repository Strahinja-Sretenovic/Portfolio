import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Eye, EyeOff, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { sound } from "../../utils/sound";
import { CustomerPathCanvas } from "./CustomerPathCanvas";
import { PrologueScene } from "./scenes/PrologueScene";
import { SearchScene } from "./scenes/SearchScene";
import { DecisionTunnelScene } from "./scenes/DecisionTunnelScene";
import { BreakScene } from "./scenes/BreakScene";
import { WrongPrescriptionScene } from "./scenes/WrongPrescriptionScene";
import { DiagnosisScene } from "./scenes/DiagnosisScene";
import { SolutionMorphScene } from "./scenes/SolutionMorphScene";
import { MachineScene } from "./scenes/MachineScene";
import { RealWorkScene } from "./scenes/RealWorkScene";
import { RiskReversalScene } from "./scenes/RiskReversalScene";
import { FormScene } from "./scenes/FormScene";
import { ReducedMotionNarrative } from "./ReducedMotionNarrative";
import { scrollToTarget } from "../SmoothScroll";

interface FilmContainerProps {
  onOpenServiceModal?: (serviceId?: string) => void;
  onOpenProjectsModal?: () => void;
  onOpenFaqModal?: () => void;
}

export function FilmContainer({
  onOpenServiceModal,
  onOpenProjectsModal,
  onOpenFaqModal
}: FilmContainerProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
    }
  }, []);

  // Synchronized scroll tracking for the pinned master stage
  useEffect(() => {
    if (reducedMotion) return;

    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable > 0) {
        const currentScroll = -rect.top;
        const rawProgress = currentScroll / totalScrollable;
        const clamped = Math.min(1, Math.max(0, rawProgress));
        setScrollProgress(clamped);
      }
    };

    const onScrollLoop = () => {
      handleScroll();
      rafId = requestAnimationFrame(onScrollLoop);
    };

    rafId = requestAnimationFrame(onScrollLoop);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reducedMotion]);

  const toggleSound = () => {
    const isEnabled = sound.toggle();
    setSoundEnabled(isEnabled);
  };

  // Chapter labels for the subtle lateral HUD
  const chapters = [
    { range: [0.00, 0.08], nameSr: "Početak", nameEn: "Spark" },
    { range: [0.08, 0.18], nameSr: "Pretraga", nameEn: "Search" },
    { range: [0.18, 0.30], nameSr: "Tunel", nameEn: "Tunnel" },
    { range: [0.30, 0.38], nameSr: "Prekid", nameEn: "Break" },
    { range: [0.38, 0.46], nameSr: "Nagađanje", nameEn: "Guess" },
    { range: [0.46, 0.56], nameSr: "Dijagnoza", nameEn: "Diagnosis" },
    { range: [0.56, 0.65], nameSr: "Rešenja", nameEn: "Solutions" },
    { range: [0.65, 0.74], nameSr: "Proces", nameEn: "Process" },
    { range: [0.74, 0.82], nameSr: "Dokazi", nameEn: "Proof" },
    { range: [0.82, 0.88], nameSr: "Procena", nameEn: "Honesty" },
    { range: [0.88, 1.00], nameSr: "Analiza", nameEn: "Audit" }
  ];

  const activeChapterIndex = chapters.findIndex(
    ch => scrollProgress >= ch.range[0] && scrollProgress <= ch.range[1]
  );
  const activeChapter = chapters[activeChapterIndex] || chapters[0];

  if (reducedMotion) {
    return (
      <div className="relative bg-white dark:bg-[#07090e] min-h-screen text-slate-900 dark:text-slate-100">
        <div className="fixed top-20 right-6 z-50">
          <button
            onClick={() => setReducedMotion(false)}
            className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-white/10 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Sparkles size={13} />
            <span>{isSr ? "Uključi interaktivni film" : "Enable Cinematic Film"}</span>
          </button>
        </div>
        <ReducedMotionNarrative
          onOpenServiceModal={onOpenServiceModal}
          onOpenProjectsModal={onOpenProjectsModal}
          onOpenFaqModal={onOpenFaqModal}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-white dark:bg-[#05070c] text-slate-900 dark:text-slate-100 selection:bg-blue-600/30 selection:text-white"
      style={{ height: "2600vh" }} // Continuous deep scroll timeline
    >
      {/* THE MASTER PINNED VIEWPORT STAGE */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Deep ambient background texture & grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

        {/* Global Vector Customer Path Layer */}
        <CustomerPathCanvas progress={scrollProgress} />

        {/* Top Control Overlay (Sound toggle & chapter badge) */}
        <div className="absolute top-20 inset-x-0 px-6 sm:px-10 flex items-center justify-between z-40 pointer-events-none">
          {/* Chapter Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 text-[11px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-slate-700 dark:text-slate-300">
              {isSr ? activeChapter.nameSr : activeChapter.nameEn}
            </span>
            <span className="text-slate-400">
              ({Math.round(scrollProgress * 100)}%)
            </span>
          </div>

          {/* Sound & Mode Controls */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={toggleSound}
              aria-label="Toggle Sound"
              className="p-2 rounded-full bg-white/60 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>
            <button
              onClick={() => setReducedMotion(true)}
              title={isSr ? "Pristupačni režim bez animacija" : "Reduced motion static view"}
              className="p-2 rounded-full bg-white/60 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <Eye size={15} />
            </button>
          </div>
        </div>

        {/* ===================================================================
            CONTINUOUS FILM SCENES (Active scene rendered with smooth morphing)
           =================================================================== */}
        <div className="relative flex-1 flex items-center justify-center">
          
          {/* 01: Prologue (0.00 - 0.08) */}
          {scrollProgress < 0.09 && (
            <PrologueScene progress={scrollProgress} />
          )}

          {/* 02: Search & Comparison (0.08 - 0.18) */}
          {scrollProgress >= 0.07 && scrollProgress < 0.19 && (
            <SearchScene progress={scrollProgress} />
          )}

          {/* 03: Decision Tunnel & Website Morph (0.18 - 0.30) */}
          {scrollProgress >= 0.17 && scrollProgress < 0.31 && (
            <DecisionTunnelScene progress={scrollProgress} />
          )}

          {/* 04: The Break / Line Fracture (0.30 - 0.38) */}
          {scrollProgress >= 0.29 && scrollProgress < 0.39 && (
            <BreakScene progress={scrollProgress} />
          )}

          {/* 05: The Wrong Prescription & Freeze (0.38 - 0.46) */}
          {scrollProgress >= 0.37 && scrollProgress < 0.47 && (
            <WrongPrescriptionScene progress={scrollProgress} />
          )}

          {/* 06: Diagnosis Radar (0.46 - 0.56) */}
          {scrollProgress >= 0.45 && scrollProgress < 0.57 && (
            <DiagnosisScene progress={scrollProgress} />
          )}

          {/* 07: Solution Morph / 4 Pathways (0.56 - 0.65) */}
          {scrollProgress >= 0.55 && scrollProgress < 0.66 && (
            <SolutionMorphScene progress={scrollProgress} />
          )}

          {/* 08: The SSolutions Machine (0.65 - 0.74) */}
          {scrollProgress >= 0.64 && scrollProgress < 0.75 && (
            <MachineScene progress={scrollProgress} />
          )}

          {/* 09: Real Work / Case Studies (0.74 - 0.82) */}
          {scrollProgress >= 0.73 && scrollProgress < 0.83 && (
            <RealWorkScene progress={scrollProgress} />
          )}

          {/* 10: Risk Reversal & Radical Honesty (0.82 - 0.88) */}
          {scrollProgress >= 0.81 && scrollProgress < 0.89 && (
            <RiskReversalScene progress={scrollProgress} />
          )}

          {/* 11: The Form as the Scene (0.88 - 1.00) */}
          {scrollProgress >= 0.87 && (
            <FormScene
              progress={scrollProgress}
              onOpenServiceModal={() => onOpenServiceModal && onOpenServiceModal()}
              onOpenProjectsModal={onOpenProjectsModal}
              onOpenFaqModal={onOpenFaqModal}
            />
          )}

        </div>

        {/* Global Bottom Cinematic Progress Baseline Bar */}
        <div className="relative w-full px-6 sm:px-12 pb-4 z-40 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>01</span>
            <div className="w-24 sm:w-48 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span>11</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-slate-400">
            <span>{isSr ? "Skrolujte za nastavak filma" : "Scroll to advance the film"}</span>
            <ChevronDown size={12} className="animate-bounce" />
          </div>
        </div>

      </div>
    </div>
  );
}
