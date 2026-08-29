import { Search } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { scrollToTarget } from "../../SmoothScroll";

interface PrologueSceneProps {
  progress: number; // 0.0 to 0.085
}

export function PrologueScene({ progress }: PrologueSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize progress within 0.0 to 0.085
  const norm = Math.min(1, Math.max(0, progress / 0.085));

  // Life-cycle stages:
  // Phase 1 (0.00 - 0.38): "Svaki novi klijent počinje jednom odlukom."
  // Phase 2 (0.40 - 0.68): "Gde će otići?"
  // Phase 3 (0.70 - 1.00): Search Bar Types Query & Positions for Handoff

  const typedTextSr = "frizerski salon Čačak";
  const typedTextEn = "hair salon downtown";
  const fullText = isSr ? typedTextSr : typedTextEn;

  // Typing progress between 0.72 and 0.94
  const typeRatio = Math.min(1, Math.max(0, (norm - 0.72) / 0.22));
  const charsToShow = Math.floor(typeRatio * fullText.length);
  const currentTyped = fullText.slice(0, charsToShow);

  // Overall scene exit fade at 0.90 - 1.00
  const sceneExitOpacity = norm > 0.88 ? Math.max(0, (1 - norm) / 0.12) : 1;

  return (
    <div 
      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none transition-opacity duration-200"
      style={{ opacity: sceneExitOpacity }}
    >
      {/* Top subtle brand mark */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 transition-opacity duration-300"
        style={{ opacity: norm < 0.85 ? 1 : 0 }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
          SSOLUTIONS
        </span>
      </div>

      {/* Phase 1: Primary Statement (Strictly visible only from 0.00 to 0.38) */}
      {norm < 0.39 && (
        <div
          className="max-w-4xl space-y-4 transition-all duration-300"
          style={{
            opacity: norm < 0.28 ? 1 : Math.max(0, (0.38 - norm) / 0.10),
            transform: `scale(${1 - norm * 0.06}) translateY(${norm * -12}px)`
          }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            {isSr ? "Svaki novi klijent počinje jednom odlukom." : "Every new customer begins with a single decision."}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase">
            {isSr ? "01 / TAČKA POČETKA" : "01 / THE POINT OF INTENT"}
          </p>
        </div>
      )}

      {/* Phase 2: Where will they go? (Strictly visible only from 0.40 to 0.68) */}
      {norm >= 0.39 && norm < 0.70 && (
        <div
          className="max-w-3xl space-y-3 transition-all duration-300"
          style={{
            opacity: norm < 0.45 
              ? (norm - 0.39) / 0.06 
              : norm > 0.62 
              ? (0.70 - norm) / 0.08 
              : 1,
            transform: `translateY(${norm < 0.45 ? (0.45 - norm) * 20 : 0}px)`
          }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Gde će otići?" : "Where will they go?"}
          </h2>
        </div>
      )}

      {/* Phase 3: The Search Bar Constructs (Strictly enters at 0.70) */}
      {norm >= 0.68 && (
        <div
          className="w-full max-w-xl transition-all duration-300"
          style={{
            opacity: norm < 0.76 ? (norm - 0.68) / 0.08 : 1,
            transform: `translateY(${norm < 0.76 ? (0.76 - norm) * 25 : 0}px)`
          }}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-300 dark:border-white/15 shadow-2xl shadow-blue-500/10 flex items-center gap-3 text-left">
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
      )}

      {/* Skip Button */}
      <button
        onClick={() => scrollToTarget("#form-scene-anchor", 0)}
        className="absolute bottom-8 right-8 pointer-events-auto text-xs font-mono text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer bg-white/60 dark:bg-black/60 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-xs"
      >
        <span>{isSr ? "Preskočite na analizu ↘" : "Skip to audit ↘"}</span>
      </button>
    </div>
  );
}
