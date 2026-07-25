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
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const skillGroups = [
    {
      title: "Frontend",
      icon: <Monitor size={20} />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Sass", "Tailwind CSS", "Bootstrap", "Material UI", "Custom CMS Solutions (WordPress)"]
    },
    {
      title: "Backend",
      icon: <Cpu size={20} />,
      skills: ["Node.js", "Express.js", "NestJS", "Java", "Spring Boot", "Golang", "C#", ".NET / ASP.NET Core", "Python", "FastAPI", "PHP", "Apache Kafka"]
    },
    {
      title: isSr ? "Baze Podataka & ORM" : "Database & ORM",
      icon: <Database size={20} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "Neo4j", "Elasticsearch", "Prisma", "TypeORM", "Sequelize", "Hibernate", "Spring Data JPA", "Liquibase", "Consul"]
    },
    {
      title: "DevOps / Arhitektura",
      icon: <Cloud size={20} />,
      skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Nginx", "Apache HTTP Server", "Linux", "Shell Script / Bash"]
    },
    {
      title: isSr ? "Praćenje & Logovi" : "Monitoring & Logs",
      icon: <Activity size={20} />,
      skills: ["Prometheus", "Grafana", "Logstash", "Sentry"]
    },
    {
      title: isSr ? "API, Testiranje & Alati" : "API, Testing & Productivity",
      icon: <ShieldCheck size={20} />,
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
      x: dir === "right" ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "right" ? -40 : 40,
      transition: { duration: 0.2, ease: "easeIn" }
    })
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200/50 dark:border-white/5">
      <div className="max-w-3xl mx-auto">
        <SectionHeader 
          title={isSr ? "Tehničke Veštine" : "Technical Skills"} 
          subtitle={isSr ? "Tehnologije i alati koje svakodnevno koristim u radu." : "My primary stack and tools."}
        />

        {/* Simple Card Slider with Left / Right Navigation Controls */}
        <div className="mt-10 relative flex items-center gap-3 md:gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="shrink-0 p-3 rounded-2xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm active:scale-95"
            aria-label={isSr ? "Prethodno" : "Previous"}
          >
            <ChevronLeft size={22} />
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
                className="bg-white dark:bg-[#151515] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm"
              >
                {/* Header inside Card */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    {currentGroup.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                      {currentGroup.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {currentIndex + 1} / {skillGroups.length}
                    </p>
                  </div>
                </div>

                {/* Skills Badges Grid/Wrap */}
                <div className="flex flex-wrap gap-2.5 min-h-[100px] items-start">
                  {currentGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="shrink-0 p-3 rounded-2xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm active:scale-95"
            aria-label={isSr ? "Sledeće" : "Next"}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Minimal Indicators underneath */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {skillGroups.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? "right" : "left");
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-blue-600" : "w-2 bg-slate-200 dark:bg-white/10 hover:bg-slate-400"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
