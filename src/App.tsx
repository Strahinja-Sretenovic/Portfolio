import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { AllProjects } from "./components/AllProjects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";

export default function App() {
  const [view, setView] = useState<"home" | "all-projects">("home");

  // Sync hash changes if user uses browser history or direct hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#all-projects" || window.location.hash === "#projects-all") {
        setView("all-projects");
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openAllProjects = () => {
    setView("all-projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => {
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen font-sans selection:bg-blue-600/30 selection:text-slate-900 dark:selection:text-white flex flex-col justify-between">
          <Header 
            currentView={view} 
            onNavigateHome={navigateHome}
            onOpenProjects={openAllProjects}
          />
          
          <main className="flex-1">
            {view === "home" ? (
              <>
                <Hero />
                <About />
                <Skills />
                <Experience onViewAllProjects={openAllProjects} />
                <Contact />
              </>
            ) : (
              <AllProjects onBack={navigateHome} />
            )}
          </main>

          <Footer />
          <FloatingContact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
