import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  currentView?: "home" | "all-projects";
  onNavigateHome?: () => void;
  onOpenProjects?: () => void;
  onJumpToSlide?: (slideIndex: number) => void;
  onOpenFaq?: () => void;
  onOpenLegal?: (doc?: "privacy" | "terms" | "cookies" | "refund" | "business") => void;
}

export function Header({ 
  currentView = "home", 
  onNavigateHome, 
  onOpenProjects,
  onJumpToSlide,
  onOpenFaq,
  onOpenLegal
}: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nav = t.nav;

  // Exact 10-slide presentation index mapping
  const journeySlide = 2; // Slide 03: Decision Journey
  const diagSlide = 4;    // Slide 05: Diagnosis
  const procSlide = 6;    // Slide 07: Process
  const formSlide = 9;    // Slide 10: Your Business / Audit

  const navLinks = [
    { id: "journey", name: nav.journey, href: "#", slideIndex: journeySlide },
    { id: "diag", name: nav.diagnosis, href: "#", slideIndex: diagSlide },
    { id: "proc", name: nav.process, href: "#", slideIndex: procSlide },
    { id: "work", name: nav.results, href: "#", isProjects: true },
    { id: "audit", name: nav.yourBusiness, href: "#", slideIndex: formSlide },
    { id: "faq", name: nav.faq, href: "#", isFaq: true },
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
      onJumpToSlide(formSlide);
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
        currentView === "all-projects"
          ? "bg-slate-50/95 dark:bg-[#07090e]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-xs py-2 sm:py-2.5"
          : "bg-white/90 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-slate-200/60 dark:border-white/5 py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#"
          onClick={handleLogoClick}
          className="font-display font-extrabold text-base sm:text-xl tracking-tight text-slate-900 dark:text-white transition-transform active:scale-95 flex items-center gap-0.5"
        >
          <span>{nav.brandName}</span>
          <span className="text-blue-600 dark:text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors rounded-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Controls (Language + Theme + Primary CTA) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("sr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "sr"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
              title={nav.langSr}
            >
              {nav.langSr}
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
              title={nav.langEn}
            >
              {nav.langEn}
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            aria-label={theme === "dark" ? nav.themeLight : nav.themeDark}
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </button>

          {/* Primary Navigation CTA */}
          <button
            onClick={handleCtaClick}
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <span>{nav.ctaButton}</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Navigation Toggle & Controls */}
        <div className="flex lg:hidden items-center gap-1.5">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            aria-label={theme === "dark" ? nav.themeLight : nav.themeDark}
          >
            <Sun className="h-3.5 w-3.5 dark:hidden" />
            <Moon className="h-3.5 w-3.5 hidden dark:block" />
          </button>

          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-0.5 text-[11px] font-semibold">
            <button
              onClick={() => setLanguage("sr")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "sr" ? "bg-blue-600 text-white font-bold" : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {nav.langSr}
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "en" ? "bg-blue-600 text-white font-bold" : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {nav.langEn}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
            aria-label={isMobileMenuOpen ? nav.menuClose : nav.menuOpen}
          >
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
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
            className="lg:hidden px-4 py-5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 space-y-2.5 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href || "#"}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(e, link);
                }}
                className="block py-2 px-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 active:bg-blue-50 dark:active:bg-blue-950/40"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 cursor-pointer"
              >
                <span>{nav.ctaButton}</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Accessible Legal Links */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 px-1">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLegal?.("privacy");
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                {language === "sr" ? "Privatnost & Pravno" : "Privacy & Legal"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLegal?.("cookies");
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                {language === "sr" ? "Kolačići" : "Cookies"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
