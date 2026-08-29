import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastProvider } from "./context/ToastContext";
import { Header } from "./components/Header";
import { SceneProgress } from "./components/presentation/SceneProgress";
import { HeroScene } from "./components/presentation/HeroScene";
import { CustomerJourneyScene } from "./components/presentation/CustomerJourneyScene";
import { FrictionScene } from "./components/presentation/FrictionScene";
import { DiagnosisScene } from "./components/presentation/DiagnosisScene";
import { SolutionsScene } from "./components/presentation/SolutionsScene";
import { ProcessScene } from "./components/presentation/ProcessScene";
import { ProofScene } from "./components/presentation/ProofScene";
import { PhilosophyScene } from "./components/presentation/PhilosophyScene";
import { AuditScene } from "./components/presentation/AuditScene";
import { QualificationForm } from "./components/presentation/QualificationForm";
import { ServiceDetailsModal } from "./components/presentation/ServiceDetailsModal";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { SmoothScroll } from "./components/SmoothScroll";
import { IntroLoader } from "./components/IntroLoader";
import { trackPageView } from "./utils/analytics";

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    trackPageView("/", "SSolutions — Immersive Interactive Sales Experience");
  }, []);

  const handleOpenServiceModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsServiceModalOpen(true);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          {!introCompleted && <IntroLoader onComplete={() => setIntroCompleted(true)} />}
          <SmoothScroll>
            <div className="min-h-screen font-sans selection:bg-blue-600/30 selection:text-slate-900 dark:selection:text-white flex flex-col justify-between bg-white dark:bg-[#07090e] text-slate-900 dark:text-slate-100 relative">
              
              {/* Header Navigation */}
              <Header />

              {/* Discreet Story Progress Indicator (01 - 10) */}
              <SceneProgress />
              
              {/* Main 10-Scene Storytelling Presentation */}
              <main className="flex-1">
                {/* SCENE 01 — OPENING: Ne počinjemo kodom. Počinjemo problemom. */}
                <HeroScene />

                {/* SCENE 02 — CUSTOMER JOURNEY: Vaš potencijalni klijent već bira. */}
                <CustomerJourneyScene />

                {/* SCENE 03 — WHERE VALUE IS LOST: Problem možda nije vaš sajt. */}
                <FrictionScene />

                {/* SCENE 04 — DIAGNOSIS: Prvo nalazimo gde nastaje problem. */}
                <DiagnosisScene />

                {/* SCENE 05 — WHAT WE ACTUALLY DO: Tek kada razumemo problem, biramo alat. */}
                <SolutionsScene onOpenServiceModal={handleOpenServiceModal} />

                {/* SCENE 06 — HOW WE WORK: Od problema do rešenja. Launch nije kraj. */}
                <ProcessScene />

                {/* SCENE 07 — PROOF: Ne želimo da nam verujete samo na reč. */}
                <ProofScene />

                {/* SCENE 08 — WHY THIS APPROACH: Kod je često najlakši deo. */}
                <PhilosophyScene />

                {/* SCENE 09 — FREE ANALYSIS: Ne morate da znate šta vam treba. To je deo našeg posla. */}
                <AuditScene />

                {/* SCENE 10 — INTERACTIVE QUALIFICATION FORM: Hajde da prvo upoznamo vaš biznis. */}
                <QualificationForm />

                {/* Secondary Accessible FAQ Layer */}
                <Faq />
              </main>

              {/* Service Capabilities Modal */}
              <ServiceDetailsModal
                isOpen={isServiceModalOpen}
                onClose={() => setIsServiceModalOpen(false)}
                initialServiceId={selectedServiceId}
              />

              <Footer />
              <FloatingContact />
            </div>
          </SmoothScroll>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
