import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-[#050505] text-slate-200 pt-20 pb-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-800 dark:border-white/10 pb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, backend challenges, or potential collaborations.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Strahinja-Sretenovic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 dark:bg-white/5 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/strahinja-sretenovic-22890a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 dark:bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all border border-transparent hover:border-[#0077b5]/50"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <a href="mailto:sretenovic0315@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 dark:bg-white-[0.02] border border-slate-800 dark:border-white/5 hover:bg-slate-800 dark:hover:bg-white/5 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-700 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400">Email Me</span>
                <span className="font-medium text-white group-hover:text-blue-400 transition-colors">sretenovic0315@gmail.com</span>
              </div>
            </a>
            
            <a href="tel:+381613660260" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 dark:bg-white-[0.02] border border-slate-800 dark:border-white/5 hover:bg-slate-800 dark:hover:bg-white/5 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-700 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={18} className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400">Call Me</span>
                <span className="font-medium text-white group-hover:text-blue-400 transition-colors">+381 61 366 0260</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 dark:bg-white-[0.02] border border-slate-800 dark:border-white/5">
              <div className="w-10 h-10 rounded-full bg-slate-700 dark:bg-white/10 flex items-center justify-center">
                <MapPin size={18} className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400">Location</span>
                <span className="font-medium text-white">Čačak, Serbia</span>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Strahinja Sretenović. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
