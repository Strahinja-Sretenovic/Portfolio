import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  currentView?: "home" | "all-projects";
  onNavigateHome?: () => void;
  onOpenProjects?: () => void;
}

export function Header({ currentView = "home", onNavigateHome, onOpenProjects }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSr = language === "sr";

  const navLinks = [
    { name: isSr ? "O meni" : "About", href: "#about" },
    { name: isSr ? "Veštine" : "Skills", href: "#skills" },
    { name: isSr ? "Iskustvo" : "Experience", href: "#experience" },
    { name: isSr ? "Projekti" : "Projects", href: "#projects", isProjects: true },
    { name: isSr ? "Kontakt" : "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isProjects && onOpenProjects) {
      if (currentView === "all-projects") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (currentView === "all-projects" && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const elem = document.querySelector(link.href);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentView === "all-projects" && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView === "all-projects"
          ? "bg-slate-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <a 
          href="#"
          onClick={handleLogoClick}
          className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white"
        >
          SSolutions<span className="text-blue-600 dark:text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-white/10">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-1 text-xs font-semibold">
              <button
                onClick={() => setLanguage("sr")}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                  language === "sr"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                title="Srpski jezik"
              >
                SR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                  language === "en"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                title="English Language"
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1.5" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("sr")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "sr"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              SR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "en"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400"
            aria-label="Toggle Theme"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="h-5 w-5 hidden dark:block" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-400"
            aria-label="Open Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-50 dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-white/10 px-6 py-4 shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link);
                  }}
                  className="py-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors border-b border-slate-100 dark:border-white/5 last:border-none"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
