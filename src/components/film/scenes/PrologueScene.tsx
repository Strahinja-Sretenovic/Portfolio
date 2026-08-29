import { Search } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { scrollToTarget } from "../../SmoothScroll";

interface PrologueSceneProps {
  progress: number; // Normalized 0.0 to 1.0 within its active envelope
}

export function PrologueScene({ progress: norm }: PrologueSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const typedTextSr = "frizerski salon Čačak";
  const typedTextEn = "hair salon downtown";
  const fullText = isSr ? typedTextSr : typedTextEn;

  // Typing progress between 0.70 and 0.95
  const typeRatio = Math.min(1, Math.max(0, (norm - 0.70) / 0.25));
  const charsToShow = Math.floor(typeRatio * fullText.length);
  const currentTyped = fullText.slice(0, charsToShow);

  // Smooth overlapping phase opacities
  const phase1Opacity = norm < 0.28 ? 1 : Math.max(0, 1 - (norm - 0.28) / 0.12);
  const phase2Opacity = norm < 0.32 ? 0 : norm < 0.44 ? (norm - 0.32) / 0.12 : norm < 0.60 ? 1 : Math.max(0, 1 - (norm - 0.60) / 0.10);
  const phase3Opacity = norm < 0.64 ? 0 : Math.min(1, (norm - 0.64) / 0.12);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
      {/* Top subtle brand mark */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{ opacity: norm < 0.90 ? 1 : Math.max(0, (1 - norm) / 0.10) }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
          SSOLUTIONS
        </span>
      </div>

      {/* Phase 1: Primary Statement */}
      <div
        className="absolute max-w-4xl space-y-4 px-4 pointer-events-none"
        style={{
          opacity: phase1Opacity,
          transform: `scale(${1 - norm * 0.05}) translateY(${-norm * 25}px)`,
          visibility: phase1Opacity > 0.001 ? "visible" : "hidden"
        }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {isSr ? "Svaki novi klijent počinje jednom odlukom." : "Every new customer begins with a single decision."}
        </h1>
        <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase">
          {isSr ? "01 / TAČKA POČETKA" : "01 / THE POINT OF INTENT"}
        </p>
      </div>

      {/* Phase 2: Where will they go? */}
      <div
        className="absolute max-w-3xl space-y-3 px-4 pointer-events-none"
        style={{
          opacity: phase2Opacity,
          transform: `translateY(${norm < 0.44 ? (0.44 - norm) * 25 : (norm - 0.60) * -25}px) scale(${norm < 0.44 ? 0.96 + 0.04 * (norm - 0.32) / 0.12 : 1})`,
          visibility: phase2Opacity > 0.001 ? "visible" : "hidden"
        }}
      >
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isSr ? "Gde će otići?" : "Where will they go?"}
        </h2>
      </div>

      {/* Phase 3: The Search Bar Constructs */}
      <div
        className="absolute w-full max-w-xl px-4 pointer-events-none"
        style={{
          opacity: phase3Opacity,
          transform: `translateY(${norm < 0.76 ? (0.76 - norm) * 30 : 0}px) scale(${0.96 + 0.04 * phase3Opacity})`,
          visibility: phase3Opacity > 0.001 ? "visible" : "hidden"
        }}
      >
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 shadow-xl flex items-center gap-3 text-left">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <div className="flex-1 font-mono text-sm sm:text-base text-slate-900 dark:text-white font-medium flex items-center">
            <span>{currentTyped}</span>
            <span className="w-2 h-5 bg-blue-500 ml-1 inline-block animate-pulse" />
          </div>
          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
            {isSr ? "EDUKATIVNI PRIMER" : "EDUCATIONAL CASE"}
          </span>
        </div>

        <p className="mt-3 text-xs font-mono text-slate-400 dark:text-slate-500">
          {isSr ? "Pretraga počinje pre nego što poseti bilo koji sajt" : "Search starts before anyone visits a website"}
        </p>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => scrollToTarget("#form-scene-anchor", 0)}
        className="absolute bottom-8 right-8 pointer-events-auto text-xs font-mono text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm"
      >
        <span>{isSr ? "Preskočite na analizu ↘" : "Skip to audit ↘"}</span>
      </button>
    </div>
  );
}
