import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Globe, 
  Briefcase, 
  HelpCircle, 
  MessageSquare, 
  User, 
  Mail, 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  RotateCcw
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";
import { trackLeadFormSubmission, trackEvent } from "../../utils/analytics";

interface FormData {
  companyName: string;
  digitalLink: string;
  businessType: string;
  improvements: string[];
  biggestBottleneck: string;
  name: string;
  email: string;
  phone: string;
}

export function QualificationForm() {
  const { language } = useLanguage();
  const { addToast } = useToast();
  const isSr = language === "sr";

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    digitalLink: "",
    businessType: "",
    improvements: [],
    biggestBottleneck: "",
    name: "",
    email: "",
    phone: "",
  });

  const improvementOptions = [
    { id: "leads", labelSr: "Više kvalitetnih upita", labelEn: "More High-Ticket Inquiries" },
    { id: "new-site", labelSr: "Novi sajt od nule", labelEn: "Brand New Website" },
    { id: "redesign", labelSr: "Postojeći sajt ne radi dobro", labelEn: "Current Site Underperforming" },
    { id: "seo", labelSr: "Google vidljivost & SEO", labelEn: "Google Search & SEO" },
    { id: "ecommerce", labelSr: "Online prodaja", labelEn: "E-commerce & Online Sales" },
    { id: "booking", labelSr: "Online booking & zakazivanje", labelEn: "Online Booking Flow" },
    { id: "automation", labelSr: "Automatizacija procesa", labelEn: "Process Automation" },
    { id: "webapp", labelSr: "Namenska web aplikacija", labelEn: "Custom Web App" },
    { id: "unsure", labelSr: "Nismo sigurni (treba nam savet)", labelEn: "Not Sure (Need Advice)" },
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage(null);
  };

  const toggleImprovement = (id: string) => {
    setFormData((prev) => {
      const exists = prev.improvements.includes(id);
      if (exists) {
        return { ...prev, improvements: prev.improvements.filter((item) => item !== id) };
      } else {
        return { ...prev, improvements: [...prev.improvements, id] };
      }
    });
    setErrorMessage(null);
  };

  const validateStep = (): boolean => {
    if (currentStep === 1) {
      if (!formData.companyName.trim()) {
        setErrorMessage(isSr ? "Unesite naziv vaše firme ili biznisa." : "Please enter your business or company name.");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.digitalLink.trim()) {
        setErrorMessage(isSr ? "Unesite link ka sajtu, Instagramu, Google profilu ili napišite 'Nemamo još'." : "Provide your website/social link or type 'None yet'.");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.businessType.trim()) {
        setErrorMessage(isSr ? "Opišite ukratko čime se vaš biznis bavi." : "Briefly describe what your business offers.");
        return false;
      }
    } else if (currentStep === 4) {
      if (formData.improvements.length === 0) {
        setErrorMessage(isSr ? "Izaberite bar jednu stavku koju želite da poboljšate." : "Please select at least one priority.");
        return false;
      }
    } else if (currentStep === 5) {
      if (!formData.biggestBottleneck.trim()) {
        setErrorMessage(isSr ? "Opišite ukratko vaš najveći izazov ili problem." : "Please describe your primary challenge.");
        return false;
      }
    } else if (currentStep === 6) {
      if (!formData.name.trim()) {
        setErrorMessage(isSr ? "Unesite vaše ime." : "Please enter your name.");
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setErrorMessage(isSr ? "Unesite validnu email adresu na koju možemo da vam odgovorimo." : "Please provide a valid email address.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      trackEvent(`analysis_form_step_${currentStep}_complete`);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setErrorMessage(null);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    trackEvent("analysis_form_submit_attempt");

    try {
      // Direct API proxy / email dispatch
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Nije unet",
        service: `SSolutions Analiza: ${formData.companyName} (${formData.improvements.join(", ")})`,
        message: `[KVALIFIKACIJA BIZNISA]\nFirma: ${formData.companyName}\nLink: ${formData.digitalLink}\nDelatnost: ${formData.businessType}\nCiljevi: ${formData.improvements.join(", ")}\nProblem: ${formData.biggestBottleneck}\nKontakt: ${formData.name} (${formData.email}, ${formData.phone})`,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        trackLeadFormSubmission({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.companyName,
          messageLength: formData.biggestBottleneck.length,
        });

        setIsSubmitted(true);
        addToast(
          isSr ? "Uspešno poslato! Pripremamo analizu." : "Request submitted! We are preparing the diagnosis.",
          "success"
        );
      } else {
        // Fallback mailto trigger if backend route is unavailable
        window.location.href = `mailto:sretenovic0315@gmail.com?subject=Besplatna Analiza: ${encodeURIComponent(formData.companyName)}&body=${encodeURIComponent(payload.message)}`;
        setIsSubmitted(true);
      }
    } catch (err) {
      // If offline or network error, fallback to mailto
      window.location.href = `mailto:sretenovic0315@gmail.com?subject=Besplatna Analiza: ${encodeURIComponent(formData.companyName)}&body=${encodeURIComponent(formData.biggestBottleneck)}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      digitalLink: "",
      businessType: "",
      improvements: [],
      biggestBottleneck: "",
      name: "",
      email: "",
      phone: "",
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section
      id="scene-14"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Scene Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "14 / KVALIFIKACIONI RAZGOVOR" : "14 / QUALIFICATION CONVERSATION"}
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Hajde da prvo upoznamo vaš biznis." : "Let's first understand your business."}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {isSr
              ? "Kratka dijagnostička forma u 6 koraka. Bez pritiska, bez generičkih ponuda."
              : "A brief 6-step conversational diagnosis. Zero pressure, zero generic sales pitches."}
          </p>
        </div>

        {/* Main Form Container */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl shadow-slate-900/5 relative overflow-hidden">
          
          {!isSubmitted ? (
            <div className="space-y-8">

              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{isSr ? `KORAK ${currentStep} OD 6` : `STEP ${currentStep} OF 6`}</span>
                  <span>{Math.round((currentStep / 6) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / 6) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step Forms */}
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Company Name */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                        {isSr ? "Kako se zove vaša firma ili biznis?" : "What is the name of your business or company?"}
                      </label>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {isSr ? "Npr. 'Frizerski Salon Stevan', 'Ada Studio', 'Nekretnine Beograd'..." : "e.g. 'Stevan Hair Studio', 'Ada Agency', 'Metro Real Estate'..."}
                      </p>
                    </div>

                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder={isSr ? "Unesite naziv..." : "Enter name..."}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-lg focus:outline-hidden focus:border-blue-500 transition-colors"
                      autoFocus
                      onKeyDown={(e) => { if (e.key === "Enter") handleNext(); }}
                    />
                  </motion.div>
                )}

                {/* STEP 2: Digital Link */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                        {isSr ? "Gde možemo da vas pogledamo?" : "Where can we inspect your current presence?"}
                      </label>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {isSr ? "Link ka sajtu, Instagram profil, Google profil ili napišite 'Nemamo još'." : "Website link, Instagram handle, Google Maps profile, or 'None yet'."}
                      </p>
                    </div>

                    <input
                      type="text"
                      value={formData.digitalLink}
                      onChange={(e) => handleInputChange("digitalLink", e.target.value)}
                      placeholder={isSr ? "npr. www.vasbiznis.rs ili @instagram_profil" : "e.g. www.yourbusiness.com or @instagram"}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-lg focus:outline-hidden focus:border-blue-500 transition-colors"
                      autoFocus
                      onKeyDown={(e) => { if (e.key === "Enter") handleNext(); }}
                    />
                  </motion.div>
                )}

                {/* STEP 3: Business Type */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                        {isSr ? "Čime se vaš biznis bavi?" : "What does your business do?"}
                      </label>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {isSr ? "Koje su vaše glavne usluge i ko su vaši idealni kupci?" : "What are your core services and who is your target audience?"}
                      </p>
                    </div>

                    <textarea
                      rows={3}
                      value={formData.businessType}
                      onChange={(e) => handleInputChange("businessType", e.target.value)}
                      placeholder={isSr ? "npr. Pružamo premijum stomatološke usluge za pacijente u Čačku i okolini..." : "e.g. We provide specialized dental implants for patients in the regional area..."}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-base focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
                      autoFocus
                    />
                  </motion.div>
                )}

                {/* STEP 4: Goals / Improvements */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                        {isSr ? "Šta trenutno želite da poboljšate?" : "What would you like to improve right now?"}
                      </label>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {isSr ? "Izaberite jednu ili više opcija:" : "Select one or more relevant options:"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {improvementOptions.map((opt) => {
                        const isSelected = formData.improvements.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => toggleImprovement(opt.id)}
                            className={`p-3.5 rounded-2xl text-left border transition-all text-xs sm:text-sm font-semibold cursor-pointer flex items-center justify-between gap-2 ${
                              isSelected
                                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                                : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-slate-400"
                            }`}
                          >
                            <span>{isSr ? opt.labelSr : opt.labelEn}</span>
                            {isSelected && <CheckCircle2 size={16} className="shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Biggest Bottleneck */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                        {isSr ? "Šta trenutno smatrate najvećim problemom?" : "What do you see as your biggest bottleneck?"}
                      </label>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {isSr ? "Iskreno opišite gde osećate zastoj:" : "Describe honestly where you feel friction:"}
                      </p>
                    </div>

                    <textarea
                      rows={3}
                      value={formData.biggestBottleneck}
                      onChange={(e) => handleInputChange("biggestBottleneck", e.target.value)}
                      placeholder={isSr ? "npr. Ljudi nas nalaze na Instagramu, ali dobijamo malo ozbiljnih upita, a telefon zvoni za osnovna pitanja o cenama..." : "e.g. We get traffic on social media but few high-quality inquiries, while manual phone calls drain our time..."}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-base focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
                      autoFocus
                    />
                  </motion.div>
                )}

                {/* STEP 6: Contact Info */}
                {currentStep === 6 && (
                  <motion.div
                    key="step-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                        {isSr ? "Kako možemo da vam se javimo?" : "How can we reach back to you?"}
                      </label>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {isSr ? "Gde da pošaljemo zapažanja i zakazujemo kratak razgovor." : "Where should we send our initial observations."}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 mb-1 block">{isSr ? "Vaše Ime i Prezime *" : "Your Name *"}</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={isSr ? "Petar Petrović" : "John Doe"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-slate-500 mb-1 block">{isSr ? "Email adresa *" : "Email address *"}</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="petar@firma.rs"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-500 mb-1 block">{isSr ? "Broj telefona (opciono)" : "Phone number (optional)"}</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+381 60 123 4567"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Error Display */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    <span>{isSr ? "Nazad" : "Back"}</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>{isSr ? "Nastavi" : "Continue"}</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xl shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{isSr ? "Slanje..." : "Submitting..."}</span>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>{isSr ? "Zatražite analizu" : "Submit Diagnosis Request"}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="text-center text-[11px] text-slate-400">
                {isSr ? "Bez obaveze. Bez generičke prodajne prezentacije." : "Zero obligation. No generic sales pitches."}
              </div>

            </div>
          ) : (
            /* Custom Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                  {isSr ? "Hvala — sada je red na nas." : "Thank you — now it is our turn."}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isSr
                    ? "Pregledaćemo informacije koje ste poslali kako bismo prvi razgovor iskoristili za konkretne stvari i praktična zapažanja."
                    : "We will inspect the business links and notes you provided so our initial conversation is focused entirely on concrete observations."}
                </p>
              </div>

              {/* What Happens Next 3-Step Timeline */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-md mx-auto space-y-3 text-left">
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                  {isSr ? "ŠTA SE DEŠAVA DALJE:" : "WHAT HAPPENS NEXT:"}
                </div>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 font-bold flex items-center justify-center text-[10px]">1</span>
                    <span>{isSr ? "Pregledamo vaš trenutni nastup i konkurenciju" : "We audit your presence & competitors"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 font-bold flex items-center justify-center text-[10px]">2</span>
                    <span>{isSr ? "Pripremamo 3–5 konkretnih zapažanja" : "We outline 3–5 high-leverage findings"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 font-bold flex items-center justify-center text-[10px]">3</span>
                    <span>{isSr ? "Javljamo vam se za kratak 15-min razgovor" : "We reach out for a 15-min diagnostic call"}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer pt-2"
              >
                <RotateCcw size={12} />
                <span>{isSr ? "Pošaljite još jedan upit" : "Send another request"}</span>
              </button>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
