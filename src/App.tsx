import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastProvider } from "./context/ToastContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemRecognition } from "./components/ProblemRecognition";
import { CustomerJourney } from "./components/CustomerJourney";
import { Services } from "./components/Services";
import { AuditExample } from "./components/AuditExample";
import { AuditOffer } from "./components/AuditOffer";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ProjectEstimator } from "./components/ProjectEstimator";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { SmoothScroll } from "./components/SmoothScroll";
import { IntroLoader } from "./components/IntroLoader";
import { trackPageView } from "./utils/analytics";

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    trackPageView("/", "SSolutions — Web Strategija, UX i Development Partner");
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          {!introCompleted && <IntroLoader onComplete={() => setIntroCompleted(true)} />}
          <SmoothScroll>
            <div className="min-h-screen font-sans selection:bg-blue-600/30 selection:text-slate-900 dark:selection:text-white flex flex-col justify-between bg-white dark:bg-[#07090e] text-slate-900 dark:text-slate-100">
              
              <Header />
              
              <main className="flex-1">
                {/* 1. Hero: Strategic Value Proposition */}
                <Hero />

                {/* 2. Problem Recognition: "Možda vam ne treba novi sajt" */}
                <ProblemRecognition />

                {/* 3. Customer Journey: "Ne gledamo samo sajt. Gledamo ceo put do kupca." */}
                <CustomerJourney />

                {/* 4. Services: 4 Business Need-Based Categories */}
                <Services />

                {/* 5. Diagnostic Case Walkthrough: "Primer kako analiziramo jedan biznis" */}
                <AuditExample />

                {/* 6. Free Initial Audit Offer */}
                <AuditOffer />

                {/* 7. 6-Stage Consulting & Engineering Lifecycle */}
                <Process />

                {/* 8. Case Studies & Evidence */}
                <Projects />

                {/* 9. Core Differentiators: "Zašto SSolutions" */}
                <WhyChooseUs />

                {/* 10. Scope & Investment Planning Advisor */}
                <ProjectEstimator />

                {/* 11. Authentic Consulting Philosophy & About */}
                <About />

                {/* 12. Honest Objection Handling FAQ */}
                <Faq />

                {/* 13. Qualifying Lead & Consultation Form */}
                <Contact />
              </main>

              <Footer />
              <FloatingContact />
            </div>
          </SmoothScroll>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
