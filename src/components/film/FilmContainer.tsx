import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Eye, EyeOff, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { sound } from "../../utils/sound";
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

  // Synchronized ultra-performant scroll tracking for the pinned master stage
  useEffect(() => {
    if (reducedMotion) return;

    let ticking = false;

    const updateScrollProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable > 0) {
        const currentScroll = -rect.top;
        const rawProgress = currentScroll / totalScrollable;
        const clamped = Math.min(1, Math.max(0, rawProgress));
        setScrollProgress(prev => (Math.abs(prev - clamped) > 0.0001 ? clamped : prev));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    updateScrollProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reducedMotion]);

  const toggleSound = () => {
    const isEnabled = sound.toggle();
    setSoundEnabled(isEnabled);
  };

  // Chapter labels for the subtle lateral HUD
  const chapters = [
    { range: [0.00, 0.09], nameSr: "Početak", nameEn: "Spark" },
    { range: [0.09, 0.19], nameSr: "Pretraga", nameEn: "Search" },
    { range: [0.19, 0.31], nameSr: "Tunel", nameEn: "Tunnel" },
    { range: [0.31, 0.40], nameSr: "Prekid", nameEn: "Break" },
    { range: [0.40, 0.49], nameSr: "Nagađanje", nameEn: "Guess" },
    { range: [0.49, 0.59], nameSr: "Dijagnoza", nameEn: "Diagnosis" },
    { range: [0.59, 0.68], nameSr: "Rešenja", nameEn: "Solutions" },
    { range: [0.68, 0.77], nameSr: "Proces", nameEn: "Process" },
    { range: [0.77, 0.85], nameSr: "Dokazi", nameEn: "Proof" },
    { range: [0.85, 0.91], nameSr: "Procena", nameEn: "Honesty" },
    { range: [0.91, 1.00], nameSr: "Analiza", nameEn: "Audit" }
  ];

  const activeChapterIndex = chapters.findIndex(
    ch => scrollProgress >= ch.range[0] && scrollProgress <= ch.range[1]
  );
  const activeChapter = chapters[activeChapterIndex] || chapters[0];

  // Scene Definitions for Cinematic Cross-Dissolve Orchestration
  const sceneList = [
    {
      id: "prologue",
      start: 0.00,
      end: 0.09,
      component: (norm: number) => <PrologueScene progress={norm} />
    },
    {
      id: "search",
      start: 0.09,
      end: 0.19,
      component: (norm: number) => <SearchScene progress={norm} />
    },
    {
      id: "tunnel",
      start: 0.19,
      end: 0.31,
      component: (norm: number) => <DecisionTunnelScene progress={norm} />
    },
    {
      id: "break",
      start: 0.31,
      end: 0.40,
      component: (norm: number) => <BreakScene progress={norm} />
    },
    {
      id: "wrong",
      start: 0.40,
      end: 0.49,
      component: (norm: number) => <WrongPrescriptionScene progress={norm} />
    },
    {
      id: "diagnosis",
      start: 0.49,
      end: 0.59,
      component: (norm: number) => <DiagnosisScene progress={norm} />
    },
    {
      id: "solution",
      start: 0.59,
      end: 0.68,
      component: (norm: number) => <SolutionMorphScene progress={norm} />
    },
    {
      id: "machine",
      start: 0.68,
      end: 0.77,
      component: (norm: number) => <MachineScene progress={norm} />
    },
    {
      id: "realwork",
      start: 0.77,
      end: 0.85,
      component: (norm: number) => <RealWorkScene progress={norm} />
    },
    {
      id: "riskreversal",
      start: 0.85,
      end: 0.91,
      component: (norm: number) => <RiskReversalScene progress={norm} />
    },
    {
      id: "form",
      start: 0.91,
      end: 1.00,
      component: (norm: number) => (
        <FormScene
          progress={norm}
          onOpenServiceModal={() => onOpenServiceModal && onOpenServiceModal()}
          onOpenProjectsModal={onOpenProjectsModal}
          onOpenFaqModal={onOpenFaqModal}
        />
      )
    }
  ];

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

  const fadeMargin = 0.025; // 2.5% overlap for velvety smooth cross-fades

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
            CONTINUOUS FILM SCENES WITH SEAMLESS CROSS-DISSOLVE
           =================================================================== */}
        <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
          {sceneList.map((scene) => {
            const isVisible =
              scrollProgress >= scene.start - fadeMargin &&
              scrollProgress <= scene.end + fadeMargin;

            if (!isVisible) return null;

            // Normalized local timeline within the scene: 0.0 to 1.0
            const norm = Math.min(
              1,
              Math.max(0, (scrollProgress - scene.start) / (scene.end - scene.start))
            );

            // Compute enter / hold / exit opacity
            let opacity = 1;
            if (scrollProgress < scene.start) {
              if (scene.start === 0) {
                opacity = 1;
              } else {
                opacity = Math.max(
                  0,
                  Math.min(1, (scrollProgress - (scene.start - fadeMargin)) / fadeMargin)
                );
              }
            } else if (scrollProgress > scene.end) {
              if (scene.end === 1) {
                opacity = 1;
              } else {
                opacity = Math.max(
                  0,
                  Math.min(1, (scene.end + fadeMargin - scrollProgress) / fadeMargin)
                );
              }
            }

            // Subtle spatial depth shift during transitions
            let translateY = 0;
            let scale = 1;
            if (scrollProgress < scene.start && scene.start > 0) {
              translateY = (1 - opacity) * 26;
              scale = 0.97 + 0.03 * opacity;
            } else if (scrollProgress > scene.end && scene.end < 1) {
              translateY = -(1 - opacity) * 26;
              scale = 1.00 - 0.02 * (1 - opacity);
            }

            return (
              <div
                key={scene.id}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                style={{
                  opacity,
                  transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                  pointerEvents: opacity > 0.4 ? "auto" : "none",
                  visibility: opacity > 0.001 ? "visible" : "hidden",
                  willChange: "transform, opacity"
                }}
              >
                {scene.component(norm)}
              </div>
            );
          })}
        </div>

        {/* Global Bottom Cinematic Progress Baseline Bar */}
        <div className="relative w-full px-6 sm:px-12 pb-4 z-40 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>01</span>
            <div className="w-24 sm:w-48 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
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
