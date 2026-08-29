import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastProvider } from "./context/ToastContext";
import { Header } from "./components/Header";
import { FilmContainer } from "./components/film/FilmContainer";
import { ServiceDetailsModal } from "./components/presentation/ServiceDetailsModal";
import { AllProjects } from "./components/AllProjects";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { SmoothScroll } from "./components/SmoothScroll";
import { IntroLoader } from "./components/IntroLoader";
import { trackPageView } from "./utils/analytics";

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "all-projects">("home");
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  useEffect(() => {
    trackPageView("/", "SSolutions — Full Cinematic Scroll Experience & Interactive Sales Film");
  }, []);

  const handleOpenServiceModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsServiceModalOpen(true);
  };

  const handleOpenProjects = () => {
    setCurrentView("all-projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateHome = () => {
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          {!introCompleted && <IntroLoader onComplete={() => setIntroCompleted(true)} />}
          
          <SmoothScroll>
            <div className="min-h-screen font-sans selection:bg-blue-600/30 selection:text-slate-900 dark:selection:text-white flex flex-col justify-between bg-white dark:bg-[#05070c] text-slate-900 dark:text-slate-100 relative">
              
              {/* Header Navigation */}
              <Header
                currentView={currentView}
                onNavigateHome={handleNavigateHome}
                onOpenProjects={handleOpenProjects}
              />

              {/* Main Content Area */}
              <main className="flex-1">
                {currentView === "all-projects" ? (
                  <div className="pt-24 pb-16">
                    <AllProjects onBack={handleNavigateHome} />
                  </div>
                ) : (
                  /* THE ONE CONTINUOUS PINNED INTERACTIVE SALES FILM */
                  <FilmContainer
                    onOpenServiceModal={handleOpenServiceModal}
                    onOpenProjectsModal={handleOpenProjects}
                    onOpenFaqModal={() => {
                      const faqEl = document.getElementById("faq");
                      if (faqEl) faqEl.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                )}

                {/* Crawlable Semantic FAQ Layer for Search & Deep Questions */}
                <div id="faq" className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#07090e]">
                  <Faq />
                </div>
              </main>

              {/* Comprehensive Service Specs Modal */}
              <ServiceDetailsModal
                isOpen={isServiceModalOpen}
                onClose={() => setIsServiceModalOpen(false)}
                initialServiceId={selectedServiceId}
              />

              <Footer onOpenProjects={handleOpenProjects} />
              <FloatingContact />
            </div>
          </SmoothScroll>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
