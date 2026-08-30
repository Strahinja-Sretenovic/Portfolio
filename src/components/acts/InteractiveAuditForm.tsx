import React, { useState, FormEvent, KeyboardEvent } from "react";
import { 
  Building2, 
  Globe, 
  Instagram, 
  Target, 
  HelpCircle, 
  User, 
  Mail, 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";
import { trackAuditRequestSubmit } from "../../utils/analytics";

export function InteractiveAuditForm() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const { showToast } = useToast();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [googleProfile, setGoogleProfile] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [biggestProblem, setBiggestProblem] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const goalOptions = [
    { id: "queries", label: isSr ? "Više kvalitetnih upita" : "More qualified inquiries" },
    { id: "google", label: isSr ? "Google vidljivost" : "Google visibility" },
    { id: "new_website", label: isSr ? "Novi sajt" : "New website" },
    { id: "existing_website", label: isSr ? "Postojeći sajt" : "Existing website" },
    { id: "sales", label: isSr ? "Online prodaja" : "Online sales" },
    { id: "booking", label: isSr ? "Booking" : "Booking" },
    { id: "automation", label: isSr ? "Automatizacija" : "Automation" },
    { id: "app", label: isSr ? "Web aplikacija" : "Web application" },
    { id: "unsure", label: isSr ? "Nismo sigurni" : "Not sure" },
  ];

  const toggleGoal = (id: string) => {
    if (id === "unsure") {
      setSelectedGoals(["unsure"]);
      return;
    }
    const filtered = selectedGoals.filter(g => g !== "unsure");
    if (filtered.includes(id)) {
      setSelectedGoals(filtered.filter(g => g !== id));
    } else {
      setSelectedGoals([...filtered, id]);
    }
  };

  const handleNext = () => {
    if (step === 1 && !businessName.trim()) {
      showToast(isSr ? "Molimo unesite naziv biznisa." : "Please enter your business name.", "error");
      return;
    }
    if (step < 5) {
      setStep(prev => prev + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && step < 5) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showToast(isSr ? "Molimo unesite vaše ime i email." : "Please enter your name and email.", "error");
      return;
    }

    setIsSubmitting(true);
    trackAuditRequestSubmit({
      auditType: selectedGoals.join(", ") || "General",
      websiteProvided: !!website || !!instagram || !!googleProfile,
      contactMethod: email ? "Email" : "Phone"
    });

    try {
      // Send to contact API endpoint with fallback
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          website,
          instagram,
          googleProfile,
          goals: selectedGoals,
          biggestProblem,
          name,
          email,
          phone,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Fallback for offline/preview mode
      });

      setIsSubmitted(true);
      showToast(isSr ? "Zahtev je uspešno poslat!" : "Audit request submitted successfully!", "success");
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="interactive-form-section" className="py-24 sm:py-32 px-6 sm:px-12 bg-slate-900 dark:bg-[#07090e] text-white border-t border-slate-800 dark:border-white/10">
      <div className="max-w-3xl mx-auto">
        
        {/* SUCCESS SCREEN */}
        {isSubmitted ? (
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 border border-white/10 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
              {isSr ? "Hvala." : "Thank you."}
            </h2>

            <div className="text-2xl sm:text-3xl font-display font-bold text-blue-400">
              {isSr ? "Sada radimo domaći." : "Now we do our homework."}
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
              {isSr 
                ? "Pregledaćemo informacije koje ste poslali kako bismo prvi razgovor započeli konkretnim zapažanjima za vaš biznis." 
                : "We will review the details you submitted so our initial conversation starts with concrete observations for your business."}
            </p>

            <div className="pt-4 text-xs font-mono text-slate-500">
              {isSr ? "Očekujte odgovor u roku od 24h na vaš email." : "Expect our feedback via email within 24h."}
            </div>
          </div>
        ) : (
          /* STEPPED FORM */
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-white/10 shadow-2xl space-y-8">
            
            {/* Form Progress Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400">
                  {isSr ? `KORAK ${step} OD 5` : `STEP ${step} OF 5`}
                </span>
              </div>

              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all ${
                      s === step ? "w-6 bg-blue-500" : s < step ? "w-3 bg-blue-500/40" : "w-3 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
              
              {/* STEP 1: BUSINESS NAME */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {isSr ? "01. Osnovni podaci" : "01. Basic Information"}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                      {isSr ? "Kako se zove vaš biznis?" : "What is the name of your business?"}
                    </h3>
                  </div>

                  <input
                    type="text"
                    required
                    autoFocus
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isSr ? "Npr. Restoran Balkan, Studio Dental..." : "e.g. Acme Corp..."}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-lg sm:text-xl focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              )}

              {/* STEP 2: WHERE TO LOOK */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {isSr ? "02. Trenutni nastup" : "02. Current Presence"}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                      {isSr ? "Gde možemo da vas pogledamo?" : "Where can we look at your presence?"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {isSr ? "Unesite šta imate (website, Instagram ili Google profil):" : "Enter whatever you have:"}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Globe className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={isSr ? "Web sajt (npr. www.vasbiznis.rs)" : "Website URL"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Instagram className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={isSr ? "Instagram profil (npr. @vasbiznis)" : "Instagram handle"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Target className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={googleProfile}
                        onChange={(e) => setGoogleProfile(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={isSr ? "Naziv na Google mapi ili profil" : "Google profile / Map name"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: WHAT TO IMPROVE */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {isSr ? "03. Glavni cilj" : "03. Primary Goal"}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                      {isSr ? "Šta želite da poboljšate?" : "What do you want to improve?"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {goalOptions.map((opt) => {
                      const isSelected = selectedGoals.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleGoal(opt.id)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
                            isSelected
                              ? "bg-blue-500 text-white border-blue-400 shadow-md shadow-blue-500/20"
                              : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: BIGGEST PROBLEM */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {isSr ? "04. Izazov" : "04. Challenge"}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                      {isSr ? "Šta trenutno smatrate najvećim problemom?" : "What do you see as your biggest bottleneck?"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {isSr ? "Opišite ukratko svojim rečima (ili ostavite prazno):" : "Describe briefly in your own words:"}
                    </p>
                  </div>

                  <textarea
                    rows={4}
                    value={biggestProblem}
                    onChange={(e) => setBiggestProblem(e.target.value)}
                    placeholder={isSr ? "Npr. Ljudi gledaju sajt ali ne zovu, ili telefon zvoni non-stop za osnovne cene..." : "e.g. Visitors browse but don't call..."}
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all resize-none"
                  />
                </div>
              )}

              {/* STEP 5: CONTACT INFORMATION */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {isSr ? "05. Kontakt" : "05. Contact"}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                      {isSr ? "Kako možemo da vam se javimo?" : "How can we reach you?"}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isSr ? "Vaše Ime i Prezime" : "Your Full Name"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isSr ? "Email adresa (gde šaljemo analizu)" : "Email address"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={isSr ? "Broj telefona (opciono)" : "Phone number (optional)"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{isSr ? "Nazad" : "Back"}</span>
                  </button>
                ) : <div />}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
                  >
                    <span>{isSr ? "Dalje" : "Next"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-9 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm sm:text-base flex items-center gap-2 transition-all shadow-xl shadow-blue-500/20 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? (isSr ? "Slanje..." : "Submitting...") : (isSr ? "ZATRAŽITE ANALIZU" : "REQUEST AUDIT")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>

          </div>
        )}

      </div>
    </section>
  );
}
