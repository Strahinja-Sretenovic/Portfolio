import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, FolderGit2, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData, getLocalizedProject } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";

interface ExperienceProps {
  onViewAllProjects?: () => void;
}

export function Experience({ onViewAllProjects }: ExperienceProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const experiences = [
    {
      title: "Software Developer",
      company: "Web Developer Serbia, Čačak",
      period: "Dec 2024 – Dec 2025",
      points: isSr
        ? [
            "Razvoj i održavanje klijentskih i internih softverskih aplikacija.",
            "Izrada skalabilnih backend servisa i REST API-ja u skladu sa modernim praksama.",
            "Optimizacija baze podataka i unapređenje performansi aplikacija."
          ]
        : [
            "Developed and maintained client and internal software applications.",
            "Engineered scalable backend services and REST APIs following modern standards.",
            "Optimised database structures and improved overall application performance."
          ]
    }
  ];

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
      x: dir === "right" ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        filter: { duration: 0.3 },
      },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 },
      },
    }),
  };

  const currentRawProj = featuredProjects[currentProjectIndex];
  const currentProj = getLocalizedProject(currentRawProj, language);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader 
          title={isSr ? "Iskustvo & Projekti" : "Work & Projects"} 
          subtitle={isSr ? "Pregled mog dosadašnjeg rada, poslovnog angažmana i izgrađenih projekata." : "A look at my professional roles and key software engineering projects."}
        />

        {/* 1. Radno Iskustvo (Work Experience) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Briefcase size={22} />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              {isSr ? "Radno Iskustvo" : "Work Experience"}
            </h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-[2px] before:bg-slate-200 dark:before:bg-white/10"
              >
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-blue-600 dark:border-blue-400 rounded-full z-10" />
                
                <div className="bg-white dark:bg-[#151515] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl">{exp.title}</h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2.5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-sm flex items-start leading-relaxed">
                        <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Istaknuti Projekti (Featured Projects Carousel) */}
        <div id="projects">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <FolderGit2 size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {isSr ? "Istaknuti Projekti" : "Featured Projects"}
                </h3>
              </div>
            </div>

            {/* Carousel Arrow Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevProject}
                className="p-2.5 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
                aria-label={isSr ? "Prethodni projekat" : "Previous project"}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextProject}
                className="p-2.5 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
                aria-label={isSr ? "Sledeći projekat" : "Next project"}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Slide Area */}
          <div className="overflow-hidden relative min-h-[280px]">
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
                className="w-full bg-white dark:bg-[#151515] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors cursor-grab active:cursor-grabbing select-none group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                      {currentProj.date}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-200 font-medium px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-white/10">
                      {currentProj.type}
                    </span>
                  </div>

                  <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                    {currentProjectIndex + 1} / {featuredProjects.length}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 dark:text-white text-xl sm:text-2xl mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {currentProj.link ? (
                    <a href={currentProj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                      {currentProj.project}
                      <ExternalLink size={18} className="opacity-70 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    currentProj.project
                  )}
                </h4>

                <p className="text-slate-600 dark:text-slate-300 font-medium text-sm mb-4">
                  {isSr ? "Uloga:" : "Role:"} <span className="text-slate-900 dark:text-white font-semibold">{currentProj.title}</span>
                </p>

                <ul className="space-y-2 mb-6">
                  {currentProj.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-slate-700 dark:text-slate-200 text-sm flex items-start leading-relaxed">
                      <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {currentProj.tags && currentProj.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    {currentProj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators & View All Button */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            {/* Carousel Dot Indicators with 44px minimum touch targets */}
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
                        ? "w-8 bg-indigo-600"
                        : "w-2.5 bg-slate-300 dark:bg-white/20 group-hover:bg-indigo-400"
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
                onClick={onViewAllProjects}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg shadow-blue-500/20 active:scale-98 cursor-pointer"
              >
                {isSr ? `Pogledaj sve projekte (${projectsData.length})` : `View All Projects (${projectsData.length})`}
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
