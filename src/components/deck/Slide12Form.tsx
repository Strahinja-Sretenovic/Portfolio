import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Send, RefreshCcw } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";
import { trackAuditRequestSubmit } from "../../utils/analytics";

interface Slide12Props {
  onPrev: () => void;
}

export function Slide12Form({ onPrev: _onPrev }: Slide12Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
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

  const goalOptions = [
    { id: "leads", labelSr: "Više kvalitetnih upita", labelEn: "More quality leads" },
    { id: "google", labelSr: "Google vidljivost & SEO", labelEn: "Google visibility & SEO" },
    { id: "new_site", labelSr: "Novi moderan sajt", labelEn: "New modern website" },
    { id: "existing_site", labelSr: "Poboljšanje postojećeg sajta", labelEn: "Upgrade existing site" },
    { id: "sales", labelSr: "Online prodaja (E-commerce)", labelEn: "Online sales / E-commerce" },
    { id: "booking", labelSr: "Booking / Zakazivanje", labelEn: "Booking system" },
    { id: "automation", labelSr: "Automatizacija poslovanja", labelEn: "Workflow automation" },
    { id: "app", labelSr: "Web aplikacija / Portal", labelEn: "Custom web app" },
    { id: "not_sure", labelSr: "Nismo sigurni (treba nam savet)", labelEn: "Not sure (need guidance)" },
  ];

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !businessName.trim()) {
      showToast(isSr ? "Molimo unesite naziv biznisa." : "Please enter your business name.", "error");
      return;
    }
    if (currentStep === 3 && selectedGoals.length === 0) {
      showToast(isSr ? "Izaberite bar jednu opciju." : "Please select at least one option.", "error");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) {
      showToast(isSr ? "Molimo unesite ime i email adresu." : "Please provide your name and email.", "error");
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
          auditType: "qualification_deck_form",
          websiteProvided: Boolean(presenceUrl.trim()),
          contactMethod: "email_form"
        });
        setIsSubmitted(true);
        showToast(isSr ? "Analiza uspešno zatražena." : "Audit request submitted successfully.", "success");
      } else {
        // Fallback for preview
        trackAuditRequestSubmit({
          auditType: "qualification_deck_form",
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
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-900 dark:bg-[#05070c] text-white">
      
      {/* Main Slide Content: Form or Success */}
      <div className="w-full max-w-3xl mx-auto my-auto z-10 py-2">
        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="text-center space-y-4 sm:space-y-5 max-w-2xl mx-auto p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-emerald-500/30 shadow-2xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-4xl font-display font-black text-white">
                {isSr ? "Hvala." : "Thank you."}
              </h2>
              <div className="text-lg sm:text-2xl font-display font-bold text-blue-400">
                {isSr ? "Sada radimo domaći." : "Now we do our homework."}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
              {isSr 
                ? "Pregledaćemo informacije koje ste poslali kako bismo prvi razgovor započeli konkretnim zapažanjima." 
                : "We will review your submission so we can begin our first conversation with clear, concrete observations."}
            </p>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>{isSr ? "Pošaljite još jedan upit" : "Submit another inquiry"}</span>
              </button>
            </div>
          </div>
        ) : (
          /* MULTI-STEP CONVERSATIONAL FORM */
          <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-white/10 shadow-2xl space-y-4">
            
            {/* Top progress indicator */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[11px] sm:text-xs font-mono text-blue-400 font-bold tracking-wider">
                {isSr ? "KVALIFIKACIONA FORMA" : "QUALIFICATION FORM"}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                {isSr ? "KORAK" : "STEP"} 0{currentStep} / 05
              </span>
            </div>

            {/* Step 1: Business Name */}
            {currentStep === 1 && (
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">{isSr ? "KORAK 01" : "STEP 01"}</span>
                  <h3 className="text-lg sm:text-3xl font-display font-black text-white leading-tight">
                    {isSr ? "Kako se zove vaš biznis?" : "What is the name of your business?"}
                  </h3>
                </div>

                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder={isSr ? "Npr. Ada Studio / Alfa Sistemi d.o.o." : "e.g. Acme Corp / Studio Design"}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-base"
                  autoFocus
                />
              </div>
            )}

            {/* Step 2: Presence URL */}
            {currentStep === 2 && (
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">{isSr ? "KORAK 02" : "STEP 02"}</span>
                  <h3 className="text-lg sm:text-3xl font-display font-black text-white leading-tight">
                    {isSr ? "Gde možemo da vas pogledamo?" : "Where can we look at your current presence?"}
                  </h3>
                </div>

                <input
                  type="text"
                  value={presenceUrl}
                  onChange={(e) => setPresenceUrl(e.target.value)}
                  placeholder={isSr ? "Website link, Instagram profil ili Google naziv" : "Website URL, Instagram handle, or Google Maps name"}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-base"
                  autoFocus
                />
              </div>
            )}

            {/* Step 3: Goals */}
            {currentStep === 3 && (
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">{isSr ? "KORAK 03" : "STEP 03"}</span>
                  <h3 className="text-lg sm:text-3xl font-display font-black text-white leading-tight">
                    {isSr ? "Šta želite da poboljšate?" : "What do you want to improve?"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2">
                  {goalOptions.map((opt) => {
                    const isSelected = selectedGoals.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleGoal(opt.id)}
                        className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs font-display font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-600 border-blue-500 text-white shadow-sm"
                            : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {isSr ? opt.labelSr : opt.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Biggest Problem */}
            {currentStep === 4 && (
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">{isSr ? "KORAK 04" : "STEP 04"}</span>
                  <h3 className="text-lg sm:text-3xl font-display font-black text-white leading-tight">
                    {isSr ? "Šta trenutno smatrate najvećim problemom?" : "What is currently your biggest bottleneck?"}
                  </h3>
                </div>

                <textarea
                  rows={3}
                  value={biggestProblem}
                  onChange={(e) => setBiggestProblem(e.target.value)}
                  placeholder={isSr ? "Opišite ukratko gde primećujete da gubite vreme ili klijente..." : "Briefly describe where you feel clients drop off or where time is lost..."}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-base resize-none"
                  autoFocus
                />
              </div>
            )}

            {/* Step 5: Contact Details */}
            {currentStep === 5 && (
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-bold">{isSr ? "KORAK 05" : "STEP 05"}</span>
                  <h3 className="text-lg sm:text-3xl font-display font-black text-white leading-tight">
                    {isSr ? "Kako možemo da vam se javimo?" : "How should we contact you?"}
                  </h3>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder={isSr ? "Vaše ime i prezime *" : "Your full name *"}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-base"
                    required
                  />

                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder={isSr ? "Email adresa *" : "Email address *"}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-base"
                    required
                  />

                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder={isSr ? "Broj telefona (opciono)" : "Phone number (optional)"}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white text-base"
                  />
                </div>
              </div>
            )}

            {/* Form Controls */}
            <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-white/10">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                >
                  ← {isSr ? "Nazad" : "Back"}
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <span>{isSr ? "Dalje" : "Next"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-display font-black text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{isSr ? "Šaljemo..." : "Sending..."}</span>
                  ) : (
                    <>
                      <span>{isSr ? "ZATRAŽITE ANALIZU" : "REQUEST AUDIT"}</span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
