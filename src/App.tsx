import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastProvider } from "./context/ToastContext";
import { Header } from "./components/Header";
import { IntroLoader } from "./components/IntroLoader";
import { HorizontalDeck } from "./components/deck/HorizontalDeck";
import { ServiceDetailsModal } from "./components/presentation/ServiceDetailsModal";
import { AllProjects } from "./components/AllProjects";
import { FaqModal } from "./components/FaqModal";
import { FloatingContact } from "./components/FloatingContact";
import { LegalModal, LegalDocType } from "./components/legal/LegalModal";
import { CookieBanner } from "./components/legal/CookieBanner";
import { trackPageView } from "./utils/analytics";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState<"home" | "all-projects">("home");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // Legal & Cookie Compliance State
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>("privacy");
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  useEffect(() => {
    trackPageView("/", "SSolutions — Horizontal Interactive Sales Presentation");
  }, []);

  const handleOpenLegal = (doc: LegalDocType = "privacy") => {
    setActiveLegalDoc(doc);
    setIsLegalOpen(true);
  };

  const handleOpenCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  };

  const handleOpenServiceModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsServiceModalOpen(true);
  };

  const handleOpenProjects = () => {
    setCurrentView("all-projects");
  };

  const handleNavigateHome = () => {
    setCurrentView("home");
  };

  const handleJumpToSlide = (index: number) => {
    if (currentView === "all-projects") {
      setCurrentView("home");
    }
    setActiveSlide(index);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
          <div className="w-screen h-[100dvh] max-h-[100dvh] overflow-hidden font-sans selection:bg-blue-600/30 selection:text-slate-900 dark:selection:text-white bg-white dark:bg-[#05070c] text-slate-900 dark:text-slate-100 relative">
            
            {/* Header Navigation */}
            <Header
              currentView={currentView}
              onNavigateHome={handleNavigateHome}
              onOpenProjects={handleOpenProjects}
              onJumpToSlide={handleJumpToSlide}
              onOpenFaq={() => setIsFaqOpen(true)}
              onOpenLegal={handleOpenLegal}
            />

            {/* Main Application Area: Fullscreen Horizontal Deck or All Projects */}
            <main className="w-full h-full">
              {currentView === "all-projects" ? (
                <div className="w-full h-full overflow-y-auto pt-16 pb-16 px-3.5 sm:px-6">
                  <AllProjects
                    onBack={handleNavigateHome}
                    onOpenLegal={handleOpenLegal}
                    onOpenCookieSettings={handleOpenCookieSettings}
                  />
                </div>
              ) : (
                /* 10-SLIDE FULLSCREEN HORIZONTAL INTERACTIVE SALES PRESENTATION */
                <HorizontalDeck
                  activeSlide={activeSlide}
                  onSlideChange={setActiveSlide}
                  onOpenProjectsModal={handleOpenProjects}
                  onOpenServiceModal={handleOpenServiceModal}
                  onOpenLegal={handleOpenLegal}
                />
              )}
            </main>

            {/* FAQ Modal */}
            <FaqModal
              isOpen={isFaqOpen}
              onClose={() => setIsFaqOpen(false)}
              onJumpToForm={() => handleJumpToSlide(9)}
            />

            {/* Comprehensive Service Specs Modal */}
            <ServiceDetailsModal
              isOpen={isServiceModalOpen}
              onClose={() => setIsServiceModalOpen(false)}
              initialServiceId={selectedServiceId}
            />

            {/* Compact Floating Contact Helper */}
            <FloatingContact />

            {/* Legal Pages Modal (Privacy, Terms, Cookies, Refund, Business Details) */}
            <LegalModal
              isOpen={isLegalOpen}
              onClose={() => setIsLegalOpen(false)}
              initialDoc={activeLegalDoc}
              onOpenCookieSettings={handleOpenCookieSettings}
            />

            {/* Cookie Consent Banner & Granular Preferences Modal */}
            <CookieBanner
              onOpenCookiePolicy={() => handleOpenLegal("cookies")}
              forceOpenSettings={isCookieSettingsOpen}
              onCloseSettings={() => setIsCookieSettingsOpen(false)}
            />
          </div>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
