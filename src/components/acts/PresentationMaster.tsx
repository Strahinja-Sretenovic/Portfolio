import React from "react";
import { Act1Opening } from "./Act1Opening";
import { Act2BuyerPerspective } from "./Act2BuyerPerspective";
import { Act3CustomerJourney } from "./Act3CustomerJourney";
import { Act4ProblemRecognition } from "./Act4ProblemRecognition";
import { Act5Diagnosis } from "./Act5Diagnosis";
import { Act6Recommendation } from "./Act6Recommendation";
import { Act7Method } from "./Act7Method";
import { Act8Proof } from "./Act8Proof";
import { Act9RiskReduction } from "./Act9RiskReduction";
import { Act10Action } from "./Act10Action";

interface PresentationMasterProps {
  onOpenServiceModal?: (serviceId?: string) => void;
  onOpenProjectsModal?: () => void;
}

export function PresentationMaster({
  onOpenServiceModal,
  onOpenProjectsModal,
}: PresentationMasterProps) {

  const scrollToAct2 = () => {
    const el = document.getElementById("act-2-perspective");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("act-10-action");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-white dark:bg-[#05070c] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      
      {/* ACT 1: THE OPENING (Ne počinjemo sajtom -> Počinjemo pitanjem) */}
      <Act1Opening 
        onExploreClick={scrollToAct2} 
        onCtaClick={scrollToForm} 
      />

      {/* ACT 2: SHOW THE BUYER THEIR OWN CUSTOMER (Educational Discovery Simulation) */}
      <Act2BuyerPerspective />

      {/* ACT 3: THE CUSTOMER JOURNEY (The 6-stage path + Deliberate Break) */}
      <Act3CustomerJourney />

      {/* ACT 4: PROBLEM RECOGNITION (Where is the real constraint) */}
      <Act4ProblemRecognition />

      {/* ACT 5: DIAGNOSIS (6 Dimensions model) */}
      <Act5Diagnosis />

      {/* ACT 6: RECOMMENDATION (Problem -> Response) */}
      <Act6Recommendation />

      {/* ACT 7: METHOD (Discovery to Measurement) */}
      <Act7Method />

      {/* ACT 8: PROOF (3 Real Case Studies) */}
      <Act8Proof 
        onOpenProjectsModal={onOpenProjectsModal} 
      />

      {/* ACT 9: RISK REDUCTION & RADICAL HONESTY */}
      <Act9RiskReduction />

      {/* ACT 10: ACTION (Your Business + Conversational Stepped Form) */}
      <Act10Action />

    </div>
  );
}
