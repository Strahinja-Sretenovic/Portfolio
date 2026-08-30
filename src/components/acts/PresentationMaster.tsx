import React from "react";
import { Act1TheQuestion } from "./Act1TheQuestion";
import { Act2CustomerJourney } from "./Act2CustomerJourney";
import { Act3Diagnosis } from "./Act3Diagnosis";
import { Act4TheProof } from "./Act4TheProof";
import { Act5YourBusiness } from "./Act5YourBusiness";

interface PresentationMasterProps {
  onOpenServiceModal?: (serviceId?: string) => void;
  onOpenProjectsModal?: () => void;
}

export function PresentationMaster({
  onOpenServiceModal,
  onOpenProjectsModal,
}: PresentationMasterProps) {

  const scrollToAct2 = () => {
    const el = document.getElementById("act-2-the-customer-journey");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("act-5-your-business");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-white dark:bg-[#05070c] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      
      {/* ACT 1: THE QUESTION (Ne počinjemo sajtom. Počinjemo problemom.) */}
      <Act1TheQuestion 
        onExploreClick={scrollToAct2} 
        onCtaClick={scrollToForm} 
      />

      {/* ACT 2: THE CUSTOMER JOURNEY (Educational Discovery Simulation & Friction Break) */}
      <Act2CustomerJourney />

      {/* ACT 3: THE DIAGNOSIS (6 Dimensions, Solution Logic, Method) */}
      <Act3Diagnosis />

      {/* ACT 4: THE PROOF (3 Real Projects + Radical Honesty & Risk Reversal) */}
      <Act4TheProof 
        onOpenProjectsModal={onOpenProjectsModal} 
      />

      {/* ACT 5: YOUR BUSINESS (Qualification Stepped Form + Clear Context) */}
      <Act5YourBusiness />

    </div>
  );
}
