import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  Layers, 
  GraduationCap, 
  Award, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const businessPillars = [
    {
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: isSr ? "Skalabilnost & Performanse" : "High Performance & Scalability",
      description: isSr
        ? "Izrada brzih, optimizovanih aplikacija i stabilne backend arhitekture spremne da podrži rast vašeg poslovanja i hiljade istovremenih korisnika."
        : "Building lightning-fast, optimized web applications and robust backends designed to scale with your business and traffic surges.",
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: isSr ? "Poslovno Orijentisan Pristup" : "Business-First Development",
      description: isSr
        ? "Svako tehničko rešenje kreiramo s jasnim ciljem — povećanje konverzija, automatizacija poslovnih procesa i ostvarivanje merljivih rezultata."
        : "Every line of code is engineered with clear business outcomes in mind — driving customer conversions, automation, and measurable ROI.",
    },
    {
      icon: <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: isSr ? "Prilagođena Rešenja po Meri" : "Tailored Full-Stack Solutions",
      description: isSr
        ? "Od modernih web aplikacija (React, Next.js, Node.js) do unikatnih WordPress CMS sistema bez šablonskih ograničenja i viška koda."
        : "From bespoke web platforms (React, Next.js, Node.js) to custom WordPress CMS solutions engineered without bloat or template constraints.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: isSr ? "Sigurnost & Dugoročna Podrška" : "Security & Long-Term Reliability",
      description: isSr
        ? "Implementacija bezbednosnih standarda, čistog koda koji se lako održava i pouzdana tehnička podrška u svim fazama projekta."
        : "Industry-standard security practices, clean maintainable codebases, and dependable technical support across every project stage.",
    },
  ];

  const credentials = [
    {
      title: isSr ? "Strukovni inženjer elektrotehnike i računarstva" : "B.A.E. – Software & Information Technologies",
      institution: isSr ? "Fakultet tehničkih nauka, Novi Sad" : "Faculty of Technical Sciences, Novi Sad",
      icon: <GraduationCap className="w-4 h-4 text-blue-500" />,
    },
    {
      title: isSr ? "Full-Cycle Razvoj Softvera" : "Full-Cycle Software Engineering",
      institution: isSr ? "Arhitektura, REST API, Baze, Frontend & DevOps" : "Architecture, REST APIs, Databases, Frontend & DevOps",
      icon: <Award className="w-4 h-4 text-indigo-500" />,
    },
  ];

  const keyStrengths = isSr
    ? [
        "Direktna i transparentna komunikacija bez posrednika",
        "Moderan tech stack prilagođen specifičnim potrebama projekta",
        "Poštovanje dogovorenih rokova i budžeta",
        "Fokus na SEO optimizaciju i brzinu učitavanja sajta",
      ]
    : [
        "Direct, transparent communication without agency middlemen",
        "Modern tech stack customized to specific project needs",
        "Strict adherence to project deadlines and agreed budgets",
        "Deep focus on SEO performance, mobile speed, and usability",
      ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title={isSr ? "O Nama" : "About Us"} 
          subtitle={isSr ? "Pretvaramo kompleksne tehničke zahteve u brza, pouzdana i profitabilna digitalna rešenja." : "Transforming complex technical ideas into fast, scalable, and profitable digital products."}
        />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Business Bio & Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white dark:bg-[#151515] p-7 sm:p-9 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold">
                <Sparkles size={13} />
                {isSr ? "Strateški pristup razvoju" : "Strategic Software Delivery"}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                {isSr ? (
                  <>
                    Gradimo digitalne sisteme koji{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                      unapređuju poslovanje
                    </span>{" "}
                    i donose rezultate.
                  </>
                ) : (
                  <>
                    Engineering digital systems that{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                      drive business growth
                    </span>{" "}
                    and tangible outcomes.
                  </>
                )}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {isSr
                  ? "Kao posvećen tim inženjera u okviru SSolutions, specijalizovani smo za kreiranje visokokvalitetnih web aplikacija, skalabilnih backend arhitektura i prilagođenih CMS sistema. Naš cilj je da premostimo jaz između tehničke kompleksnosti i vaših poslovnih ciljeva."
                  : "As a dedicated engineering team at SSolutions, we specialize in architecting high-performance web applications, scalable backend infrastructure, and custom CMS platforms. Our mission is bridging technical complexity with real-world business objectives."}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {isSr
                  ? "Bilo da vam je potrebna kompletna nova web platforma, modernizacija postojećeg sistema, integracija API servisa ili brzo prilagođeno WordPress rešenje — obezbeđujemo kompletan razvojni ciklus uz inženjersku preciznost i maksimalne performanse."
                  : "Whether you need a full-scale web platform, legacy modernisation, robust API integrations, or a bespoke WordPress solution — we deliver end-to-end development focused on high uptime, speed, and long-term maintainability."}
              </p>

              {/* Key Value Checklist */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                  {isSr ? "Zašto klijenti biraju saradnju sa nama:" : "Why businesses choose to partner with SSolutions:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {keyStrengths.map((strength, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action anchor */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
                >
                  <span>{isSr ? "Započnimo saradnju na vašem projektu" : "Let's discuss your project"}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Strategic Pillars & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 gap-4">
              {businessPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#151515] p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xs hover:border-blue-300 dark:hover:border-blue-500/30 transition-all hover:shadow-xs group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shrink-0 group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Academic & Engineering Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-[#131313] dark:to-[#181a20] p-5 rounded-2xl border border-slate-200/80 dark:border-white/10"
            >
              <div className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                <GraduationCap size={15} />
                <span>{isSr ? "Inženjerska ekspertiza & Osnova" : "Engineering Background & Foundation"}</span>
              </div>
              <div className="space-y-3">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-md bg-white dark:bg-white/10 shadow-2xs">
                      {cred.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {cred.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cred.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

