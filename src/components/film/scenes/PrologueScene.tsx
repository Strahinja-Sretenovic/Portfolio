import { motion } from "motion/react";
import { Search } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { scrollToTarget } from "../../SmoothScroll";

interface PrologueSceneProps {
  progress: number; // 0.0 to 0.08
}

export function PrologueScene({ progress }: PrologueSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize progress within 0.0 to 0.08
  const norm = Math.min(1, Math.max(0, progress / 0.08));

  // Phase 1: 0.0 - 0.35 (Intro statement)
  // Phase 2: 0.35 - 0.65 (Where will they go?)
  // Phase 3: 0.65 - 1.0 (Search box emerges and types query)

  const typedTextSr = "frizerski salon Čačak";
  const typedTextEn = "hair salon downtown";
  const fullText = isSr ? typedTextSr : typedTextEn;

  // Typing progress between 0.65 and 0.95
  const typeRatio = Math.min(1, Math.max(0, (norm - 0.65) / 0.3));
  const charsToShow = Math.floor(typeRatio * fullText.length);
  const currentTyped = fullText.slice(0, charsToShow);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none">
      {/* Top subtle brand mark */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 transition-opacity duration-500"
        style={{ opacity: norm < 0.9 ? 1 : 0.4 }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
        <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
          SSOLUTIONS
        </span>
      </div>

      {/* Phase 1: Primary Statement */}
      {norm < 0.45 && (
        <div
          className="max-w-4xl space-y-4 transition-all duration-300"
          style={{
            opacity: norm < 0.35 ? 1 : (0.45 - norm) / 0.1,
            transform: `scale(${1 - norm * 0.1}) translateY(${norm * -20}px)`
          }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            {isSr ? "Svaki novi klijent počinje jednom odlukom." : "Every new customer begins with a single decision."}
          </h1>
          <p className="text-sm sm:text-lg font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-wider">
            {isSr ? "01 / TAČKA POČETKA" : "01 / THE SPARK"}
          </p>
        </div>
      )}

      {/* Phase 2: Where will they go? */}
      {norm >= 0.35 && norm < 0.7 && (
        <div
          className="max-w-3xl space-y-3 transition-all duration-300"
          style={{
            opacity: norm < 0.6 ? 1 : (0.7 - norm) / 0.1,
            transform: `translateY(${Math.sin((norm - 0.35) * Math.PI) * -10}px)`
          }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Gde će da ode?" : "Where will they go?"}
          </h2>
        </div>
      )}

      {/* Phase 3: The Search Bar Constructs */}
      {norm >= 0.55 && (
        <div
          className="w-full max-w-xl transition-all duration-500"
          style={{
            opacity: Math.min(1, (norm - 0.55) / 0.15),
            transform: `translateY(${(1 - Math.min(1, (norm - 0.55) / 0.2)) * 40}px) scale(${0.9 + Math.min(1, (norm - 0.55) / 0.2) * 0.1})`
          }}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-300 dark:border-white/15 shadow-2xl shadow-blue-500/10 flex items-center gap-3 text-left">
            <Search className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="flex-1 font-mono text-sm sm:text-base text-slate-900 dark:text-white font-medium flex items-center">
              <span>{currentTyped}</span>
              <span className="w-2 h-5 bg-blue-500 ml-1 inline-block animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 hidden sm:inline">
              Google
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
        className="absolute bottom-8 right-8 pointer-events-auto text-xs font-mono text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer bg-white/50 dark:bg-black/50 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-xs"
      >
        <span>{isSr ? "Preskočite na analizu ↘" : "Skip to audit ↘"}</span>
      </button>
    </div>
  );
}
