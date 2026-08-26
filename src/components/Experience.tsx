import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { FolderGit2, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Sparkles } from "lucide-react";
import { projectsData, getLocalizedProject } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import { trackProjectClick } from "../utils/analytics";

interface ExperienceProps {
  onViewAllProjects?: () => void;
}


export function Experience({ onViewAllProjects }: ExperienceProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const featuredProjects = projectsData;

  const handleNextProject = () => {
    setDirection("right");
    setCurrentProjectIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevProject = () => {
    setDirection("left");
    setCurrentProjectIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 60 : -60,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -60 : 60,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const currentRawProj = featuredProjects[currentProjectIndex];
  const currentProj = getLocalizedProject(currentRawProj, language);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-50/50 dark:bg-black/30 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader 
          title={isSr ? "Naši Radovi & Rezultati za Klijente" : "Client Success Cases & Live Projects"} 
          subtitle={isSr 
            ? "Pogledajte kako naša rešenja izgledaju u praksi i kakve poslovne rezultate donose vlasnicima." 
            : "Explore real-world platforms engineered by SSolutions and the measurable impact delivered."}
        />

        {/* Featured Projects Showcase with Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <FolderGit2 size={22} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {isSr ? "Istaknuta Rešenja" : "Featured Case Studies"}
                </h3>
              </div>
            </div>

            {/* Carousel Arrow Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevProject}
                className="p-2.5 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
                aria-label={isSr ? "Prethodni projekat" : "Previous project"}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextProject}
                className="p-2.5 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
                aria-label={isSr ? "Sledeći projekat" : "Next project"}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Slide Area */}
          <div className="overflow-hidden relative min-h-[320px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentProjectIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    handleNextProject();
                  } else if (info.offset.x > swipeThreshold) {
                    handlePrevProject();
                  }
                }}
                className="w-full bg-white dark:bg-[#141414] p-6 sm:p-9 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:border-blue-300 dark:hover:border-blue-500/30 transition-all select-none group"
              >
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/20">
                      {currentProj.type}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                      {currentProj.date}
                    </span>
                  </div>

                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                    {currentProjectIndex + 1} / {featuredProjects.length}
                  </span>
                </div>

                {/* Project Title & Live Link */}
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-2xl sm:text-3xl mb-3">
                  {currentProj.link ? (
                    <a 
                      href={currentProj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={() => trackProjectClick({
                        projectName: currentProj.project,
                        projectType: currentProj.type,
                        projectUrl: currentProj.link,
                        action: "open_external_demo"
                      })}
                      className="inline-flex items-center gap-2.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                    >
                      <span>{currentProj.project}</span>
                      <ExternalLink size={20} className="opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </a>
                  ) : (
                    currentProj.project
                  )}
                </h4>

                {/* Measurable Business Outcome Highlight Box */}
                {currentProj.results && (
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 mb-5 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {isSr ? "Poslovni Rezultat:" : "Verified Business Impact:"}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {currentProj.results}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {currentProj.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base flex items-start leading-relaxed">
                      <span className="mr-3 mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tags & Action Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {currentProj.tags && currentProj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {currentProj.link && (
                    <a
                      href={currentProj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProjectClick({
                        projectName: currentProj.project,
                        projectType: currentProj.type,
                        projectUrl: currentProj.link,
                        action: "open_external_demo"
                      })}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>{isSr ? "Pogledajte sajt uživo" : "Visit Live Site"}</span>
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators & View All Button */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            {/* Carousel Dot Indicators */}
            <div className="flex items-center gap-1">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentProjectIndex ? "right" : "left");
                    setCurrentProjectIndex(i);
                  }}
                  className="w-11 h-11 flex items-center justify-center cursor-pointer group focus:outline-hidden"
                  aria-label={`Go to project ${i + 1}`}
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === currentProjectIndex
                        ? "w-8 bg-blue-600"
                        : "w-2.5 bg-slate-300 dark:bg-white/20 group-hover:bg-blue-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* View All Projects Button */}
            {onViewAllProjects && (
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  trackProjectClick({
                    projectName: "All Projects Gallery",
                    projectType: "Portfolio View",
                    action: "view_all_portfolio"
                  });
                  onViewAllProjects();
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Sparkles size={16} />
                <span>{isSr ? `Svi Projekti (${projectsData.length})` : `All Projects (${projectsData.length})`}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

