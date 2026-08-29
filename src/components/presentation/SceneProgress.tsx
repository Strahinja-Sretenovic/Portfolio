import { useEffect, useState } from "react";
import { scrollToTarget } from "../SmoothScroll";
import { useLanguage } from "../../context/LanguageContext";

interface SceneItem {
  id: string;
  number: string;
  titleSr: string;
  titleEn: string;
}

export const SCENES: SceneItem[] = [
  { id: "scene-01", number: "01", titleSr: "Uvod", titleEn: "Opening" },
  { id: "scene-02", number: "02", titleSr: "Put klijenta", titleEn: "Customer Journey" },
  { id: "scene-03", number: "03", titleSr: "Gde nastaje problem", titleEn: "Friction" },
  { id: "scene-04", number: "04", titleSr: "Dijagnostika", titleEn: "Diagnosis" },
  { id: "scene-05", number: "05", titleSr: "Izbor alata", titleEn: "Tools & Scope" },
  { id: "scene-06", number: "06", titleSr: "Proces rada", titleEn: "Process" },
  { id: "scene-07", number: "07", titleSr: "Dokazi & Radovi", titleEn: "Proof" },
  { id: "scene-08", number: "08", titleSr: "Filozofija", titleEn: "Philosophy" },
  { id: "scene-09", number: "09", titleSr: "Besplatna analiza", titleEn: "Audit" },
  { id: "scene-10", number: "10", titleSr: "Kvalifikaciona forma", titleEn: "Form" },
];

export function SceneProgress() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeScene, setActiveScene] = useState<string>("scene-01");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = SCENES.length - 1; i >= 0; i--) {
        const el = document.getElementById(SCENES[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveScene(SCENES[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = SCENES.findIndex((s) => s.id === activeScene);
  const currentScene = SCENES[activeIndex] || SCENES[0];

  return (
    <>
      {/* Top minimal progress line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop side scene indicator */}
      <div 
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2 pointer-events-auto"
        aria-label="Story Progress"
      >
        <div className="p-2 rounded-2xl bg-slate-900/75 dark:bg-black/75 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-xl flex flex-col gap-2">
          {SCENES.map((scene, idx) => {
            const isActive = activeScene === scene.id;
            return (
              <button
                key={scene.id}
                onClick={() => scrollToTarget(`#${scene.id}`, 60)}
                className="group relative flex items-center justify-end gap-2 cursor-pointer focus:outline-hidden"
                aria-label={`Jump to scene ${scene.number}: ${isSr ? scene.titleSr : scene.titleEn}`}
              >
                {/* Hover Label */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[11px] font-semibold tracking-wider text-slate-200 bg-slate-900/90 px-2 py-0.5 rounded-md border border-white/10 pointer-events-none whitespace-nowrap shadow-md">
                  {scene.number} — {isSr ? scene.titleSr : scene.titleEn}
                </span>

                {/* Dot / Pill */}
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-6 h-2 bg-blue-500 shadow-md shadow-blue-500/50"
                      : "w-2 h-2 bg-slate-500/40 hover:bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Minimal current scene badge */}
        <div className="px-2 py-1 rounded-md bg-slate-900/60 dark:bg-black/60 backdrop-blur-xs text-[10px] font-mono text-slate-400 border border-white/5">
          {currentScene.number} / 10
        </div>
      </div>
    </>
  );
}
