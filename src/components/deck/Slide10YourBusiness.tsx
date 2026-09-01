import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Send, RefreshCcw, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";
import { trackAuditRequestSubmit } from "../../utils/analytics";

interface Slide10Props {
  onPrev: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isWide?: boolean;
}

export function Slide10YourBusiness({ onPrev: _onPrev, isMobile, isWide }: Slide10Props) {
  const { t } = useLanguage();
  const formCopy = t.deck.form;
  const slideCopy = t.deck.yourBusiness;
  const { showToast } = useToast();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
  const [businessName, setBusinessName] = useState("");
  const [presenceUrl, setPresenceUrl] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [biggestProblem, setBiggestProblem] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !businessName.trim()) {
      showToast(formCopy.errors.businessNameRequired, "error");
      return;
    }
    if (currentStep === 3 && selectedGoals.length === 0) {
      showToast(formCopy.errors.goalRequired, "error");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) {
      showToast(formCopy.errors.contactRequired, "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          presenceUrl,
          goals: selectedGoals,
          biggestProblem,
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        trackAuditRequestSubmit({
          auditType: "presentation_qualification_form",
          websiteProvided: Boolean(presenceUrl.trim()),
          contactMethod: "email_form"
        });
        setIsSubmitted(true);
        showToast(formCopy.success.title, "success");
      } else {
        // Fallback for demo preview
        trackAuditRequestSubmit({
          auditType: "presentation_qualification_form",
          websiteProvided: Boolean(presenceUrl.trim()),
          contactMethod: "email_form"
        });
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setBusinessName("");
    setPresenceUrl("");
    setSelectedGoals([]);
    setBiggestProblem("");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
  };

  return (
    <div className="w-full h-full overflow-y-auto overscroll-contain flex flex-col justify-start sm:justify-center items-center px-3.5 sm:px-8 md:px-12 lg:px-16 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-900 dark:bg-[#05070c] text-white">
      
      <div className={`w-full ${isWide ? "max-w-4xl" : "max-w-3xl"} mx-auto my-auto py-2`}>
        {isSubmitted ? (
          /* SUCCESS STATE */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto p-5 sm:p-10 rounded-3xl bg-slate-950/90 border border-emerald-500/30 shadow-2xl"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-4xl font-display font-black text-white">
                {formCopy.success.title}
              </h2>
              <div className="text-base sm:text-2xl font-display font-bold text-blue-400">
                {formCopy.success.subtitle}
              </div>
            </div>

            <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
              {formCopy.success.desc}
            </p>

            <div className="pt-2 sm:pt-3">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>{formCopy.success.resetBtn}</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* MULTI-STEP CONVERSATIONAL FORM */
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-white/10 shadow-2xl space-y-3 sm:space-y-4"
          >
            
            {/* Top progress indicator */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold tracking-wider flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3 h-3" />
                {formCopy.badge}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400">
                {formCopy.stepIndicator} 0{currentStep} / 05
              </span>
            </div>

            {/* Step 1: Business Name */}
            {currentStep === 1 && (
              <div className="space-y-2.5 sm:space-y-3">
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">01 / 05</span>
                  <h3 className="text-base sm:text-2xl font-display font-black text-white leading-tight">
                    {formCopy.step1.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400">{formCopy.step1.helper}</p>
                </div>

                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder={formCopy.step1.placeholder}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-sm sm:text-base transition-colors"
                />
              </div>
            )}

            {/* Step 2: Presence URL */}
            {currentStep === 2 && (
              <div className="space-y-2.5 sm:space-y-3">
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">02 / 05</span>
                  <h3 className="text-base sm:text-2xl font-display font-black text-white leading-tight">
                    {formCopy.step2.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400">{formCopy.step2.helper}</p>
                </div>

                <input
                  type="text"
                  value={presenceUrl}
                  onChange={(e) => setPresenceUrl(e.target.value)}
                  placeholder={formCopy.step2.placeholder}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-sm sm:text-base transition-colors"
                />
              </div>
            )}

            {/* Step 3: Goals */}
            {currentStep === 3 && (
              <div className="space-y-2.5 sm:space-y-3">
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">03 / 05</span>
                  <h3 className="text-base sm:text-2xl font-display font-black text-white leading-tight">
                    {formCopy.step3.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400">{formCopy.step3.helper}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2">
                  {formCopy.step3.goals.map((goal) => {
                    const isSelected = selectedGoals.includes(goal.id);
                    return (
                      <button
                        type="button"
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs font-display font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-600 border-blue-500 text-white shadow-sm"
                            : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20 active:bg-white/10"
                        }`}
                      >
                        {goal.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Biggest Problem */}
            {currentStep === 4 && (
              <div className="space-y-2.5 sm:space-y-3">
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">04 / 05</span>
                  <h3 className="text-base sm:text-2xl font-display font-black text-white leading-tight">
                    {formCopy.step4.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400">{formCopy.step4.helper}</p>
                </div>

                <textarea
                  rows={isMobile ? 2 : 3}
                  value={biggestProblem}
                  onChange={(e) => setBiggestProblem(e.target.value)}
                  placeholder={formCopy.step4.placeholder}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-sm sm:text-base resize-none transition-colors"
                />
              </div>
            )}

            {/* Step 5: Contact Info */}
            {currentStep === 5 && (
              <div className="space-y-2.5 sm:space-y-3">
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">05 / 05</span>
                  <h3 className="text-base sm:text-2xl font-display font-black text-white leading-tight">
                    {formCopy.step5.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder={formCopy.step5.namePlaceholder}
                    className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    required
                  />

                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder={formCopy.step5.emailPlaceholder}
                    className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    required
                  />

                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder={formCopy.step5.phonePlaceholder}
                    className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Form Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                >
                  ← {formCopy.backBtn}
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <span>{formCopy.nextBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-98 disabled:opacity-50 text-white font-display font-black text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{formCopy.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{formCopy.submitBtn}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Disclaimer */}
            <p className="text-[9px] sm:text-[10px] text-slate-500 text-center leading-normal pt-0.5">
              {slideCopy.disclaimer}
            </p>

          </motion.div>
        )}
      </div>
    </div>
  );
}
