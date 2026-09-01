import React from "react";
import { ExternalLink, CheckCircle2, Layers } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide08Props {
  onNext: () => void;
  onPrev: () => void;
  onOpenProjects: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide08Proof({ onNext: _onNext, onPrev: _onPrev, onOpenProjects, isMobile, isWide }: Slide08Props) {
  const { t } = useLanguage();
  const copy = t.deck.proof;
  const project = copy.project;

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20 relative bg-slate-900 dark:bg-[#05070c] text-white select-none">
      
      <div className={`w-full ${isWide ? "max-w-5xl" : "max-w-4xl"} mx-auto space-y-3 sm:space-y-6 my-auto py-2`}>
        
        {/* Header */}
        <div className="text-center space-y-1 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold tracking-wider uppercase">
              {project.tag}
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-display font-black tracking-tight text-white leading-tight ${
              isMobile ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {project.name}
          </motion.h2>
          <p className="text-[11px] sm:text-sm text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        {/* 4 Pillars Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto">
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 space-y-1 text-left">
            <span className="text-[9px] sm:text-[10px] font-mono text-rose-400 uppercase font-bold">
              01 — {project.problemLabel}
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 space-y-1 text-left">
            <span className="text-[9px] sm:text-[10px] font-mono text-amber-400 uppercase font-bold">
              02 — {project.decisionLabel}
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              {project.decision}
            </p>
          </div>

          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 space-y-1 text-left">
            <span className="text-[9px] sm:text-[10px] font-mono text-blue-400 uppercase font-bold">
              03 — {project.executionLabel}
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              {project.execution}
            </p>
          </div>

          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1 text-left">
            <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              04 — {project.outcomeLabel}
            </span>
            <p className="text-[11px] sm:text-xs text-emerald-200 leading-relaxed font-medium">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Live link & View all button */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-blue-400 hover:text-blue-300 hover:bg-white/10 transition-colors"
          >
            <span>{project.viewLive}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenProjects}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/40 text-[11px] sm:text-xs font-mono text-blue-300 hover:bg-blue-600/30 transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{copy.viewMore}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
