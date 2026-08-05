import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  Monitor, 
  Cpu, 
  Database, 
  Cloud, 
  Activity, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const skillGroups = [
    {
      title: "Frontend",
      icon: <Monitor size={18} />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Sass", "Tailwind CSS", "Bootstrap", "Material UI", "Custom CMS Solutions (WordPress)"]
    },
    {
      title: "Backend",
      icon: <Cpu size={18} />,
      skills: ["Node.js", "Express.js", "NestJS", "Java", "Spring Boot", "Golang", "C#", ".NET / ASP.NET Core", "Python", "FastAPI", "PHP", "Apache Kafka"]
    },
    {
      title: isSr ? "Baze Podataka & ORM" : "Database & ORM",
      icon: <Database size={18} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "Neo4j", "Elasticsearch", "Prisma", "TypeORM", "Sequelize", "Hibernate", "Spring Data JPA", "Liquibase", "Consul"]
    },
    {
      title: "DevOps / Arhitektura",
      icon: <Cloud size={18} />,
      skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Nginx", "Apache HTTP Server", "Linux", "Shell Script / Bash"]
    },
    {
      title: isSr ? "Praćenje & Logovi" : "Monitoring & Logs",
      icon: <Activity size={18} />,
      skills: ["Prometheus", "Grafana", "Logstash", "Sentry"]
    },
    {
      title: isSr ? "API, Testiranje & Alati" : "API, Testing & Productivity",
      icon: <ShieldCheck size={18} />,
      skills: ["Swagger", "Postman", "Git", "Selenium", "SonarQube", "Trello"]
    }
  ];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % skillGroups.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + skillGroups.length) % skillGroups.length);
  };

  const currentGroup = skillGroups[currentIndex];

  const slideVariants = {
    initial: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.22, ease: "easeOut" }
    },
    exit: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? -30 : 30,
      transition: { duration: 0.18, ease: "easeIn" }
    })
  };

  return (
    <section id="skills" className="py-12 sm:py-16 px-3 sm:px-6 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200/50 dark:border-white/5">
      <div className="max-w-3xl mx-auto">
        <SectionHeader 
          title={isSr ? "Tehničke Veštine" : "Technical Skills"} 
          subtitle={isSr ? "Tehnologije i alati koje svakodnevno koristim u radu." : "My primary stack and tools."}
        />

        {/* Toggle Open/Close Button */}
        <div className="mt-6 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Sparkles size={16} />
            <span>{isOpen ? (isSr ? "Zatvori" : "Close") : (isSr ? "Otvori" : "Open")}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </motion.button>
        </div>

        {/* Collapsible Skills Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-8">
                {/* Compact Card Slider with Side Arrow Navigation */}
                <div className="relative flex items-center gap-2 sm:gap-4">
                  {/* Left Arrow Button */}
                  <button
                    onClick={handlePrev}
                    className="shrink-0 p-2 sm:p-3 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
                    aria-label={isSr ? "Prethodno" : "Previous"}
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Card Container */}
                  <div className="grow overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="bg-white dark:bg-[#151515] p-4 sm:p-6 md:p-7 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs"
                      >
                        {/* Header inside Card */}
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-white/5">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
                            {currentGroup.icon}
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                              {currentGroup.title}
                            </h3>
                            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                              {currentIndex + 1} / {skillGroups.length}
                            </p>
                          </div>
                        </div>

                        {/* Skills Badges Grid/Wrap */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 items-start">
                          {currentGroup.skills.map((skill, sIdx) => (
                            <motion.span
                              key={sIdx}
                              whileHover={{ y: -2, scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors shadow-2xs cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Arrow Button */}
                  <button
                    onClick={handleNext}
                    className="shrink-0 p-2 sm:p-3 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
                    aria-label={isSr ? "Sledeće" : "Next"}
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Minimal Indicators underneath with 44px minimum touch targets */}
                <div className="mt-5 flex items-center justify-center gap-1">
                  {skillGroups.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > currentIndex ? "right" : "left");
                        setCurrentIndex(i);
                      }}
                      className="w-11 h-11 flex items-center justify-center cursor-pointer group focus:outline-hidden"
                      aria-label={`Go to skill group ${i + 1}`}
                    >
                      <span
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? "w-7 bg-blue-600"
                            : "w-2 bg-slate-300 dark:bg-white/20 group-hover:bg-blue-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Bottom Close Button */}
                <div className="mt-6 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 font-medium text-xs transition-colors cursor-pointer"
                  >
                    <ChevronUp size={16} />
                    <span>{isSr ? "Zatvori" : "Close"}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
