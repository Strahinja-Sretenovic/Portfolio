import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (currentView === "all-projects") {
      setActiveSection("projects");
      return;
    }

    const sections = ["services", "process", "projects", "estimator", "about", "skills", "faq", "contact"];
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollObserver);
    handleScrollObserver();
    return () => window.removeEventListener("scroll", handleScrollObserver);
  }, [currentView]);

  const isSr = language === "sr";

  const navLinks = [
    { id: "services", name: isSr ? "Usluge" : "Services", href: "#services" },
    { id: "process", name: isSr ? "Proces" : "Process", href: "#process" },
    { id: "projects", name: isSr ? "Projekti" : "Projects", href: "#projects", isProjects: true },
    { id: "estimator", name: isSr ? "Procena" : "Estimator", href: "#estimator" },
    { id: "faq", name: isSr ? "FAQ & SEO" : "FAQ", href: "#faq" },
    { id: "about", name: isSr ? "O nama" : "About Us", href: "#about" },
    { id: "contact", name: isSr ? "Kontakt" : "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
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

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
          ? "bg-slate-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-xs py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <a 
          href="#"
          onClick={handleLogoClick}
          className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-transform active:scale-95 flex items-center"
        >
          SSolutions<span className="text-blue-600 dark:text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-100/70 dark:bg-blue-500/10 rounded-full border border-blue-200/60 dark:border-blue-500/20 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
          
          <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-white/10 ml-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-1 text-xs font-semibold">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage("sr")}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  language === "sr"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                title="Srpski jezik"
              >
                SR
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  language === "en"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                title="English Language"
              >
                EN
              </motion.button>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </motion.button>
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
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-slate-50/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-6 py-4 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link);
                  }}
                  className={`py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  }`}
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

