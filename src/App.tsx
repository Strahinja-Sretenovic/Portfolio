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

                {/* 3. Customer Journey: "Ne gledamo samo sajt. Gledam ceo put do klijenta." */}
                <CustomerJourney />

                {/* 4. Free Initial Audit Offer */}
                <AuditOffer />

                {/* 5. Diagnostic Case Walkthrough: "Kako izgleda kada analiziram jedan biznis" */}
                <AuditExample />

                {/* 6. 6-Stage Consulting & Engineering Lifecycle */}
                <Process />

                {/* 7. Services: 6 Business Need-Based Categories */}
                <Services />

                {/* 8. Case Studies & Evidence */}
                <Projects />

                {/* 9. Authentic Consulting Philosophy & About: "Ko stoji iza SSolutions-a?" */}
                <About />

                {/* 10. Fit Matrix: "Da li smo dobar fit?" */}
                <WhyChooseUs />

                {/* 11. Scope & Investment Planning Advisor */}
                <ProjectEstimator />

                {/* 12. Honest Objection Handling FAQ */}
                <Faq />

                {/* 13. Final CTA & Qualifying Lead Consultation Form */}
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
