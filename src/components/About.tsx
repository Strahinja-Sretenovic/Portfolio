import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Code } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const education = [
    {
      degree: isSr ? "Strukovni inženjer elektrootehnike i računarstva" : "B.A.E. – Software & Information Technologies",
      school: isSr ? "Fakultet tehničkih nauka, Novi Sad" : "Faculty of Technical Sciences, Novi Sad",
    },
    {
      degree: isSr ? "Elektrotehničar računara" : "Electronics Technician",
      school: isSr ? "Tehnička škola, Čačak" : "Technical School, Čačak",
    },
  ];

  const interests = isSr
    ? [
        "Backend Razvoj",
        "Mikroservisi",
        "Web Tehnologije",
        "Veštačka Inteligencija",
        "Mašinsko Učenje",
        "Open Source",
      ]
    : [
        "Backend Development",
        "Microservices",
        "Web Tech",
        "AI",
        "Machine Learning",
        "Open Source",
      ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={isSr ? "O Meni" : "About Me"} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate dark:prose-invert"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {isSr
                ? "Posedujem praktično iskustvo u backend i full-stack razvoju web aplikacija. Vešt sam u radu sa više savremenih programskih jezika, bazi podataka i radnih okvira."
                : "I have hands-on experience in backend and full-stack development. Proficient across multiple programming languages and modern frameworks."}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {isSr
                ? "Iskusan u projektovanju REST API servisa, optimizaciji baza podataka i kontejnerizovanom mikroservisnom okruženju. Posvećen sam rešavanju složenih poslovnih problema i izradi stabilnih sistema."
                : "Experienced in designing REST APIs, working with databases, and deploying containerised microservices. I enjoy tackling complex logic problems and refining system architectures to ensure they are both scalable and efficient."}
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-[#151515] p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-xl font-display font-semibold text-slate-900 dark:text-white mb-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400" />
                {isSr ? "Obrazovanje" : "Education"}
              </h3>
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.degree}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.school}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="flex items-center gap-2 text-xl font-display font-semibold text-slate-900 dark:text-white mb-4 pl-2">
                <Code className="text-blue-600 dark:text-blue-400" />
                {isSr ? "Ključna interesovanja" : "Key Interests"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
