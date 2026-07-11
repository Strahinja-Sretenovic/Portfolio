import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Terminal, Layout, Database, Wrench, Cloud, Server, Activity, ShieldCheck, Box } from "lucide-react";

export function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Terminal size={20} />,
      skills: ["Java", "C#", "Go (Golang)", "Python", "PHP", "JavaScript", "SQL"]
    },
    {
      title: "Frameworks",
      icon: <Layout size={20} />,
      skills: ["Spring Boot", ".NET / ASP.NET Core", "FastAPI", "React", "Next.js", "Angular"]
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "Neo4j", "Elasticsearch"]
    },
    {
      title: "Architecture",
      icon: <Box size={20} />,
      skills: ["Microservices", "REST APIs", "Apache Kafka"]
    },
    {
      title: "DevOps & CI/CD",
      icon: <Cloud size={20} />,
      skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
    },
    {
      title: "OS & Servers",
      icon: <Server size={20} />,
      skills: ["Linux", "Bash", "Nginx", "Apache HTTP Server"]
    },
    {
      title: "Monitoring & Logs",
      icon: <Activity size={20} />,
      skills: ["Prometheus", "Grafana", "Logstash", "Sentry"]
    },
    {
      title: "Testing & Tools",
      icon: <ShieldCheck size={20} />,
      skills: ["Git", "Postman", "Selenium", "SonarQube", "Trello"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200/50 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="My primary stack and the tools I use daily to build robust systems."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white dark:bg-[#151515] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                {group.icon}
              </div>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 rounded-md text-sm text-slate-600 dark:text-slate-400 font-medium hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
