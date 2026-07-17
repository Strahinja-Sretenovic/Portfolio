import { motion } from "motion/react";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[100px] opacity-20 pointer-events-none rounded-full bg-blue-400 dark:bg-blue-600 mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
            Available for new opportunities
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Strahinja Sretenović
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6"
        >
          Web & Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-Stack & Backend Developer specializing in engineering high-performance APIs, robust database architectures, and scalable web solutions designed to solve complex business challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group shadow-sm shadow-blue-600/20"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/folders/resume.pdf"
            download="resume.pdf"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Download size={18} />
            Download CV
          </a>
          
          <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-4">
            <a
              href="https://github.com/Strahinja-Sretenovic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/strahinja-sretenovic-22890a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
