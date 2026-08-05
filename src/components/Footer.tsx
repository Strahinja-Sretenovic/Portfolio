import { Github, Linkedin, ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#050505] text-slate-200 py-10 px-6 border-t border-slate-800 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-display font-bold text-xl text-white">SSolutions</span>
          <span className="hidden sm:inline text-slate-600 dark:text-slate-700">•</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Strahinja-Sretenovic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 dark:bg-white/5 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/strahinja-sretenovic-22890a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 dark:bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-slate-300 dark:text-slate-400 text-xs sm:text-sm text-center">
          &copy; {new Date().getFullYear()} SSolutions (Strahinja Sretenović). {isSr ? "Sva prava zadržana." : "All rights reserved."}
        </p>

        {/* Scroll Back to Top */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group cursor-pointer"
        >
          {isSr ? "Nazad na vrh" : "Back to top"}
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform text-blue-400" />
        </button>

      </div>
    </footer>
  );
}
