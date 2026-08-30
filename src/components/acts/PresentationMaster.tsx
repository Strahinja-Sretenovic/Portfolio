import React from "react";
import { Act1TheQuestion } from "./Act1TheQuestion";
import { Act2CustomerJourney } from "./Act2CustomerJourney";
import { Act3Diagnosis } from "./Act3Diagnosis";
import { Act4HowWeWork } from "./Act4HowWeWork";
import { Act5ProofAndTruth } from "./Act5ProofAndTruth";
import { InteractiveAuditForm } from "./InteractiveAuditForm";

interface PresentationMasterProps {
  onOpenServiceModal?: (serviceId?: string) => void;
  onOpenProjectsModal?: () => void;
}

export function PresentationMaster({
  onOpenServiceModal,
  onOpenProjectsModal,
}: PresentationMasterProps) {

  const scrollToAct2 = () => {
    const el = document.getElementById("act-2-customer-journey");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAct3 = () => {
    const el = document.getElementById("act-3-diagnosis");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("interactive-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-white dark:bg-[#05070c] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      
      {/* ACT 1: THE QUESTION */}
      <Act1TheQuestion 
        onExploreClick={scrollToAct2} 
        onCtaClick={scrollToForm} 
      />

      {/* ACT 2: THE CUSTOMER JOURNEY (Pinned ~280vh story) */}
      <Act2CustomerJourney 
        onContinueClick={scrollToAct3} 
      />

      {/* ACT 3: THE DIAGNOSIS & SOLUTION REVEAL */}
      <Act3Diagnosis 
        onOpenServiceModal={onOpenServiceModal} 
      />

      {/* ACT 4: HOW WE WORK (THE PROCESS) */}
      <Act4HowWeWork />

      {/* ACT 5: PROOF, HUMAN TRUST & RISK REVERSAL */}
      <Act5ProofAndTruth 
        onOpenProjectsModal={onOpenProjectsModal}
        onScrollToForm={scrollToForm}
      />

      {/* INTERACTIVE CONVERSATIONAL STEPPED AUDIT FORM */}
      <InteractiveAuditForm />

    </div>
  );
}
