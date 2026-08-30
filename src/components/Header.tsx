import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

interface HeaderProps {
  currentView?: "home" | "all-projects";
  onNavigateHome?: () => void;
  onOpenProjects?: () => void;
  onJumpToSlide?: (slideIndex: number) => void;
  onOpenFaq?: () => void;
}

export function Header({ 
  currentView = "home", 
  onNavigateHome, 
  onOpenProjects,
  onJumpToSlide,
  onOpenFaq
}: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isSr = language === "sr";

  const navLinks = [
    { id: "journey", name: isSr ? "Put kupca" : "Customer Journey", href: "#", slideIndex: 2 },
    { id: "diag", name: isSr ? "Dijagnostika" : "Diagnosis", href: "#", slideIndex: 4 },
    { id: "proc", name: isSr ? "Proces" : "Process", href: "#", slideIndex: 6 },
    { id: "work", name: isSr ? "Rezultati" : "Results", href: "#", isProjects: true },
    { id: "audit", name: isSr ? "Vaš biznis" : "Your Business", href: "#", slideIndex: 11 },
    { id: "faq", name: isSr ? "FAQ" : "FAQ", href: "#", isFaq: true },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.isProjects && onOpenProjects) {
      onOpenProjects();
      return;
    }

    if (link.isFaq && onOpenFaq) {
      onOpenFaq();
      return;
    }
    
    if (link.slideIndex !== undefined) {
      if (currentView === "all-projects" && onNavigateHome) {
        onNavigateHome();
      }
      if (onJumpToSlide) {
        onJumpToSlide(link.slideIndex);
      }
    }
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    if (currentView === "all-projects" && onNavigateHome) {
      onNavigateHome();
    }
    if (onJumpToSlide) {
      onJumpToSlide(11);
    }
  };

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (currentView === "all-projects" && onNavigateHome) {
      onNavigateHome();
    }
    if (onJumpToSlide) {
      onJumpToSlide(0);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView === "all-projects"
          ? "bg-slate-50/90 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-xs py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={handleLogoClick}
          className="font-display font-extrabold text-xl tracking-tight text-slate-900 dark:text-white transition-transform active:scale-95 flex items-center gap-1"
        >
          <span>SSolutions</span>
          <span className="text-blue-600 dark:text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-3 py-1.5 text-xs font-semibold transition-colors rounded-full ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-100/80 dark:bg-blue-500/15 rounded-full border border-blue-200 dark:border-blue-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Controls (Language + Theme + Primary CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("sr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
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
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
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
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </button>

          {/* Primary Navigation CTA */}
          <button
            onClick={handleCtaClick}
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <span>{isSr ? "Besplatna analiza" : "Free Audit"}</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("sr")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "sr" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-400"
              }`}
            >
              SR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "en" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden px-4 py-6 bg-slate-900 text-white border-b border-slate-800 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href || "#"}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, link);
                }}
                className="block py-2 text-sm font-semibold text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <span>{isSr ? "Besplatna analiza" : "Free Audit"}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
