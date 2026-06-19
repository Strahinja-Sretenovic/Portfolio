import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, FolderGit2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Web Developer Serbia",
      location: "Čačak",
      date: "Dec 2024 – Dec 2025",
      type: "experience",
      points: [
        "Developed PHP backend for GPS Android app.",
        "Managed JSON/MySQL data architectures.",
        "Integrated robust REST APIs.",
        "Optimised SQL queries for high performance."
      ]
    }
  ];

  const projects = [
    {
      title: "Full-Stack Developer",
      project: "Altara Inmo",
      type: "Real Estate Platform",
      date: "2024",
      points: [
        "Built responsive, user-friendly UI.",
        "Implemented backend property CRUD operations.",
        "Integrated third-party REST APIs smoothly.",
        "Optimised platform for SEO."
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div id="experience" className="pt-8">
          <SectionHeader title="Experience & Projects" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-white">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-[2px] before:bg-slate-200 dark:before:bg-white/10"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-blue-600 dark:border-blue-400 rounded-full z-10" />
                    
                    <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm ml-4 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">{exp.date}</span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-1 font-medium">{exp.company}, {exp.location}</p>
                      
                      <ul className="mt-4 space-y-2">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects Column */}
            <div id="projects">
              <div className="flex items-center gap-3 mb-8 pt-12 lg:pt-0">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <FolderGit2 size={24} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-slate-900 dark:text-white">Featured Projects</h3>
              </div>

              <div className="space-y-6">
                {projects.map((proj, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-[2px] before:bg-slate-200 dark:before:bg-white/10"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-indigo-600 dark:border-indigo-400 rounded-full z-10" />
                    
                    <div className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm ml-4 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors">
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 block">{proj.date}</span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{proj.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-1 font-medium">{proj.project} <span className="font-normal opacity-70">({proj.type})</span></p>
                      
                      <ul className="mt-4 space-y-2">
                        {proj.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
