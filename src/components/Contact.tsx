import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  HelpCircle,
  Building2,
  Globe,
  User,
  MessageSquare
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../context/ToastContext";
import { trackAuditRequestSubmit, trackEvent } from "../utils/analytics";

export function Contact() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    link: "",
    businessType: "",
    goal: "analysis",
    biggestProblem: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalOptions = [
    { id: "analysis", label: isSr ? "Ne znam tačno — želim analizu" : "Not sure — I want an audit" },
    { id: "redesign", label: isSr ? "Redizajn postojećeg sajta" : "Redesign existing website" },
    { id: "new-site", label: isSr ? "Izrada novog poslovnog sajta" : "Build a new business website" },
    { id: "seo", label: isSr ? "Više klijenata sa Google-a / SEO" : "More Google search clients / SEO" },
    { id: "automation", label: isSr ? "Sistem zakazivanja / web aplikacija / automatizacija" : "Booking system / web application / automation" }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackAuditRequestSubmit({
      auditType: formData.goal,
      websiteProvided: !!formData.link,
      contactMethod: formData.email ? "Email" : "Phone"
    });

    // Simulate reliable submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);

    showToast(
      isSr ? "Uspešno poslato!" : "Inquiry Received!",
      isSr ? "Pregledaćemo vaš digitalni nastup pre našeg razgovora." : "We will review your digital channels before our call.",
      "success"
    );
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative bg-slate-950 text-white border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Besplatne Konsultacije & Analiza" : "Free Consultation & Audit"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            {isSr ? "Ne morate da znate šta vam treba. To je deo mog posla." : "You don't need to know what you need. That is part of my job."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {isSr
              ? "15–30 minuta. Bez obaveze. Pre razgovora pregledam vaš sajt ili profile kako bismo pričali konkretno o vašem biznisu, a ne o praznim teorijama."
              : "15–30 minutes. Zero obligation. I review your website and profiles beforehand so our conversation focuses specifically on your business, not generic theory."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
                  {isSr ? "Šta se dešava nakon slanja?" : "What happens next?"}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {isSr ? "Priprema pre razgovora" : "Pre-call diagnostic review"}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">{isSr ? "1. Detaljan pregled" : "1. Review"}</strong>
                    {isSr ? "Pregledamo vaš postojeći sajt, brzinu, konkurenciju i Google profil." : "We examine your current site, mobile UX, speed, and local rankings."}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">{isSr ? "2. Kratak fokusiran razgovor" : "2. Focused Call"}</strong>
                    {isSr ? "Prezentujemo vam šta smo primetili i koje su tačke gde gubite klijente." : "We share what we observed and locate where you might be losing clients."}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">{isSr ? "3. Jasan predlog" : "3. Action Plan"}</strong>
                    {isSr ? "Ako ima smisla da sarađujemo, dobijate fiksnu ponudu i rokove." : "If there is strong mutual fit, you receive a guaranteed fixed scope and quote."}
                  </div>
                </div>
              </div>

              {/* Direct Contact Points */}
              <div className="pt-6 border-t border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                <a 
                  href="mailto:ssolutionsrs@gmail.com" 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 transition-colors border border-slate-800"
                >
                  <Mail size={16} className="text-blue-400 shrink-0" />
                  <span>ssolutionsrs@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                  <MapPin size={16} className="text-rose-400 shrink-0" />
                  <span>Čačak • Beograd • Dijaspora & Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {isSr ? "Hvala na upitu!" : "Thank You for Reaching Out!"}
                    </h3>

                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      {isSr
                        ? "Pre nego što vam se javimo, detaljno ćemo pogledati vaš sajt/digitalni nastup kako bismo prvi razgovor iskoristili za konkretne stvari."
                        : "Before following up, we will inspect your digital presence so we can jump straight into high-leverage insights on our call."}
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      {isSr ? "Pošalji novi upit" : "Submit another inquiry"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isSr ? "Ime i prezime *" : "Full Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isSr ? "npr. Milan Jovanović" : "e.g. John Doe"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isSr ? "Naziv firme / Biznisa" : "Company / Business Name"}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={isSr ? "npr. Ordinacija Dental / Nameštaj d.o.o." : "e.g. Acme Corp"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    {/* Website / Instagram Link & Business Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isSr ? "Website / Instagram profil / Naziv firme *" : "Website / Instagram / Business name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.link}
                          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                          placeholder={isSr ? "npr. www.mojsajt.rs ili @mojprofil" : "e.g. www.mysite.com or @myhandle"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isSr ? "Čime se bavite?" : "Industry / Niche"}
                        </label>
                        <input
                          type="text"
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          placeholder={isSr ? "npr. Frizerski salon, Stomatologija, Proizvodnja" : "e.g. Salon, Clinic, Manufacturing"}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    {/* What do you want to improve? */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isSr ? "Šta trenutno želite da poboljšate? *" : "What is your primary objective? *"}
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden cursor-pointer"
                      >
                        {goalOptions.map((opt) => (
                          <option key={opt.id} value={opt.id} className="bg-slate-900 text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Biggest Problem (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isSr ? "Koji je trenutno najveći problem u poslovanju sa klijentima?" : "What is the biggest operational/marketing bottleneck?"}
                      </label>
                      <textarea
                        rows={2}
                        value={formData.biggestProblem}
                        onChange={(e) => setFormData({ ...formData, biggestProblem: e.target.value })}
                        placeholder={isSr ? "npr. Zovu samo po preporuci, nema nas na Google-u, ili gubimo sate na zakazivanje..." : "e.g. We rely solely on word of mouth, or phone lines are overwhelmed with repetitive questions..."}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden resize-none"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isSr ? "Email adresa za kontakt *" : "Contact Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vasa@adresa.rs"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-blue-500 focus:outline-hidden"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>{isSr ? "Zatraži besplatnu analizu" : "Request Free Business Audit"}</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center">
                      <span className="text-[11px] text-slate-400">
                        {isSr ? "🔒 Vaši podaci su 100% bezbedni. Bez spama i bez agresivne prodaje." : "🔒 100% confidential. No spam, zero aggressive sales."}
                      </span>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
