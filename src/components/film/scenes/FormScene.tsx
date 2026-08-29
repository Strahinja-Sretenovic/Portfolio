import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, CheckCircle2, Sparkles, Send, RefreshCw, Layers, HelpCircle } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { useToast } from "../../../context/ToastContext";
import { sound } from "../../../utils/sound";

interface FormSceneProps {
  progress: number; // 0.88 to 1.00
  onOpenServiceModal?: () => void;
  onOpenProjectsModal?: () => void;
  onOpenFaqModal?: () => void;
}

export function FormScene({ progress, onOpenServiceModal, onOpenProjectsModal, onOpenFaqModal }: FormSceneProps) {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const isSr = language === "sr";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    presenceUrl: "",
    selectedGoals: [] as string[],
    bottleneck: "",
    contactName: "",
    contactEmail: "",
    contactPhone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalOptions = [
    { id: "leads", labelSr: "VIŠE UPITA", labelEn: "MORE LEADS" },
    { id: "google", labelSr: "GOOGLE & MAPE", labelEn: "GOOGLE & MAPS" },
    { id: "website", labelSr: "MODERAN SAJT", labelEn: "NEW WEBSITE" },
    { id: "sales", labelSr: "PRODAJA", labelEn: "ONLINE SALES" },
    { id: "booking", labelSr: "1-TAP BOOKING", labelEn: "1-TAP BOOKING" },
    { id: "automation", labelSr: "AUTOMATIZACIJA", labelEn: "AUTOMATION" },
    { id: "app", labelSr: "NAMENSKA APP", labelEn: "CUSTOM APP" },
    { id: "unsure", labelSr: "NISMO SIGURNI", labelEn: "NOT SURE YET" }
  ];

  const handleToggleGoal = (id: string) => {
    sound.playBlip(600, 0.04);
    setFormData(prev => {
      const exists = prev.selectedGoals.includes(id);
      return {
        ...prev,
        selectedGoals: exists ? prev.selectedGoals.filter(g => g !== id) : [...prev.selectedGoals, id]
      };
    });
  };

  const handleNextStep = () => {
    sound.playBlip(750, 0.05);
    setStep(prev => Math.min(5, prev + 1));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.businessName) {
      setStep(1);
      return;
    }
    if (!formData.contactName || (!formData.contactEmail && !formData.contactPhone)) {
      setStep(5);
      showToast(isSr ? "Molimo unesite kontakt podatke" : "Please provide contact details", "warning");
      return;
    }

    setIsSubmitting(true);
    sound.playRadar();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sound.playConnect();
      showToast(
        isSr ? "Zahtev za analizu je uspešno poslat!" : "Audit request sent successfully!",
        "success"
      );
    }, 1200);
  };

  const norm = Math.min(1, Math.max(0, (progress - 0.88) / 0.12));
  const sceneOpacity = Math.min(1, norm / 0.08);

  return (
    <div 
      id="form-scene-anchor" 
      className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center select-none overflow-hidden transition-opacity duration-200"
      style={{ opacity: sceneOpacity }}
    >
      
      {/* Dynamic Ambient Horizon Light */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />

      {/* SUCCESS STATE */}
      {isSubmitted ? (
        <div className="max-w-2xl space-y-6 text-center z-30 animate-fade-in pointer-events-auto">
          
          {/* Repaired Connected Circuit Metaphor */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.9)] animate-pulse">
              <Check size={24} />
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          <div className="space-y-3">
            <div className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isSr ? "Hvala." : "Thank you."}
            </div>
            <div className="text-2xl sm:text-4xl font-display font-bold text-blue-600 dark:text-blue-400">
              {isSr ? "Sada radimo domaći." : "Now we do our homework."}
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-lg mx-auto pt-2">
              {isSr 
                ? `Pregledaćemo detalje za „${formData.businessName}” i pripremiti nekoliko konkretnih zapažanja pre prvog razgovora.` 
                : `We will audit the details for “${formData.businessName}” and prepare targeted insights before our consultation.`}
            </p>
          </div>

          {/* Post-submit exploration links */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            {onOpenProjectsModal && (
              <button
                onClick={onOpenProjectsModal}
                className="px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-blue-500 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {isSr ? "Pregledajte radove →" : "View case studies →"}
              </button>
            )}
            {onOpenServiceModal && (
              <button
                onClick={onOpenServiceModal}
                className="px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-blue-500 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {isSr ? "Katalog usluga & cenovnik" : "Services & Pricing"}
              </button>
            )}
            {onOpenFaqModal && (
              <button
                onClick={onOpenFaqModal}
                className="px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-blue-500 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {isSr ? "Česta pitanja (FAQ)" : "FAQ"}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* INTERACTIVE STEP-BY-STEP FORM STAGE */
        <div className="w-full max-w-2xl z-30 pointer-events-auto flex flex-col justify-between min-h-[440px]">
          
          {/* Top Stage Header & Context Strip */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
                {isSr ? "11 / FINALNA SCENA" : "11 / FINAL STAGE"}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {step} / 5
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {isSr ? "Sada je red na vaš biznis." : "Now it's your business's turn."}
            </h2>

            {/* Context Strip of Collected Answers */}
            {formData.businessName && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
                <span>{formData.businessName}</span>
                {formData.presenceUrl && <span>• {formData.presenceUrl}</span>}
              </div>
            )}
          </div>

          {/* Form Step Body */}
          <form onSubmit={handleSubmit} className="my-6">
            
            {/* STEP 1: Business Name */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <label className="block text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-slate-100">
                  {isSr ? "Kako se zove vaš biznis ili firma?" : "What is the name of your business?"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder={isSr ? "npr. Frizerski Salon Stevan / Ada Studio" : "e.g. Acme Studio / Dr. Smith Dental"}
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && formData.businessName) {
                        e.preventDefault();
                        handleNextStep();
                      }
                    }}
                    className="w-full pb-3 pt-2 text-xl sm:text-2xl font-mono text-center bg-transparent border-b-2 border-slate-300 dark:border-white/20 focus:border-blue-500 focus:outline-hidden transition-colors text-slate-900 dark:text-white"
                  />
                </div>
                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    disabled={!formData.businessName}
                    onClick={handleNextStep}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    <span>{isSr ? "Sledeći korak" : "Next Step"}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Online Presence */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <label className="block text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-slate-100">
                  {isSr ? "Gde možemo da vas pogledamo?" : "Where can we review your presence?"}
                </label>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {isSr ? "Link postojećeg sajta, Instagram profila, Google mape ili lokacija" : "Website URL, Instagram handle, Google Maps link or city"}
                </p>
                <input
                  type="text"
                  autoFocus
                  placeholder={isSr ? "npr. adastudio.rs ili @salon_cacak" : "e.g. website.com or @instagram"}
                  value={formData.presenceUrl}
                  onChange={(e) => setFormData({ ...formData, presenceUrl: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleNextStep();
                    }
                  }}
                  className="w-full pb-3 pt-2 text-lg sm:text-xl font-mono text-center bg-transparent border-b-2 border-slate-300 dark:border-white/20 focus:border-blue-500 focus:outline-hidden transition-colors text-slate-900 dark:text-white"
                />
                <div className="flex justify-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    ← {isSr ? "Nazad" : "Back"}
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    <span>{isSr ? "Dalje" : "Continue"}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Selectable Goal Tokens */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <label className="block text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-slate-100">
                  {isSr ? "Šta prvenstveno želite da poboljšate?" : "What is your primary growth target?"}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {goalOptions.map((goal) => {
                    const isSelected = formData.selectedGoals.includes(goal.id);
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => handleToggleGoal(goal.id)}
                        className={`p-3 rounded-2xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-500 shadow-md scale-105"
                            : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                        }`}
                      >
                        {isSelected && <Check size={12} />}
                        <span>{isSr ? goal.labelSr : goal.labelEn}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    ← {isSr ? "Nazad" : "Back"}
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    <span>{isSr ? "Dalje" : "Continue"}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: What is throttling you right now? */}
            {step === 4 && (
              <div className="space-y-4 animate-fade-in">
                <label className="block text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-slate-100">
                  {isSr ? "Šta vas trenutno najviše koči u poslu?" : "What is currently throttling your growth?"}
                </label>
                <textarea
                  rows={3}
                  autoFocus
                  placeholder={isSr ? "npr. Mali broj upita sa Google-a, gubimo vreme na zakazivanje telefonom, sajt je zastareo..." : "e.g. Low Google inbound leads, wasting hours on manual booking, site looks outdated..."}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full p-3 text-sm font-sans rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-300 dark:border-white/20 focus:border-blue-500 focus:outline-hidden text-slate-900 dark:text-white resize-none"
                />
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    ← {isSr ? "Nazad" : "Back"}
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    <span>{isSr ? "Poslednji korak" : "Final Step"}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Contact Details & Submit */}
            {step === 5 && (
              <div className="space-y-4 animate-fade-in">
                <label className="block text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-slate-100">
                  {isSr ? "Kako možemo da vam se javimo?" : "How should we contact you?"}
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {isSr ? "Vaše ime i prezime *" : "Full Name *"}
                    </span>
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder={isSr ? "Marko Petrović" : "Alex Morgan"}
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-sm font-sans text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {isSr ? "Email adresa *" : "Email Address *"}
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="kontakt@firma.rs"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-sm font-sans text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-[11px] font-mono text-slate-500">
                    {isSr ? "Broj telefona (Viber / WhatsApp opcija)" : "Phone Number (WhatsApp / Viber)"}
                  </span>
                  <input
                    type="tel"
                    placeholder="+381 60 123 4567"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 text-sm font-sans text-slate-900 dark:text-white"
                  />
                </div>

                <div className="flex justify-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    ← {isSr ? "Nazad" : "Back"}
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-xl shadow-blue-500/30"
                  >
                    {isSubmitting ? (
                      <RefreshCw size={14} className="animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    <span>
                      {isSr ? "Zatražite početnu analizu →" : "Request Initial Audit →"}
                    </span>
                  </button>
                </div>
              </div>
            )}

          </form>

          {/* Footer Guarantee */}
          <div className="text-xs font-mono text-slate-400">
            {isSr 
              ? "Potpuno besplatna analiza • Bez ikakve obaveze • Odgovor u roku od 24h" 
              : "100% Free Initial Audit • No Obligation • Response within 24h"}
          </div>

        </div>
      )}

    </div>
  );
}
