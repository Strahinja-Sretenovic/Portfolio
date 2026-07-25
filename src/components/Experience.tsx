import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, FolderGit2, ExternalLink, ArrowRight } from "lucide-react";
import { projectsData, getLocalizedProject } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";

interface ExperienceProps {
  onViewAllProjects?: () => void;
}

export function Experience({ onViewAllProjects }: ExperienceProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const experiences = [
    {
      title: "Software Developer",
      company: "Svetlin Soft",
      period: isSr ? "2025 – Trenutno" : "2025 – Present",
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

  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title={isSr ? "Iskustvo & Projekti" : "Work & Projects"} 
          subtitle={isSr ? "Pregled mog dosadašnjeg rada, poslovnog angažmana i izgrađenih projekata." : "A look at my professional roles and key software engineering projects."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start" id="projects">
          
          {/* Experience Column */}
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
                  
                  <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">{exp.title}</h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mb-4">{exp.company}</p>
                    
                    <ul className="space-y-2">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-sm flex items-start leading-relaxed">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Projects Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <FolderGit2 size={22} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                {isSr ? "Istaknuti Projekti" : "Featured Projects"}
              </h3>
            </div>

            <div className="space-y-6">
              {featuredProjects.map((rawProj, idx) => {
                const proj = getLocalizedProject(rawProj, language);
                return (
                  <motion.div 
                    key={proj.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-[2px] before:bg-slate-200 dark:before:bg-white/10"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-indigo-600 dark:border-indigo-400 rounded-full z-10" />
                    
                    <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                          {proj.date}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {proj.type}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {proj.link ? (
                          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                            {proj.project}
                            <ExternalLink size={16} className="opacity-70 flex-shrink-0" />
                          </a>
                        ) : (
                          proj.project
                        )}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-xs mb-3">
                        {isSr ? "Uloga:" : "Role:"} {proj.title}
                      </p>

                      <ul className="space-y-1.5">
                        {proj.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-xs flex items-start leading-relaxed">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View All Projects Button */}
            {onViewAllProjects && (
              <div className="mt-8 ml-8">
                <button
                  onClick={onViewAllProjects}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg shadow-blue-500/20 active:scale-98"
                >
                  {isSr ? `Pogledaj sve projekte (${projectsData.length})` : `View All Projects (${projectsData.length})`}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
