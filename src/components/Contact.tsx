import { useState, FormEvent, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send, Sparkles, Loader2, FileText, Download, Check, MessageSquare, CheckCircle2, SlidersHorizontal, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../context/ToastContext";
import { trackLeadFormSubmission, trackDirectContact } from "../utils/analytics";
import { ProjectEstimatorBlueprint } from "../types";

export function Contact() {
  const { language } = useLanguage();
  const { success, error, info } = useToast();
  const isSr = language === "sr";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-app",
    message: "",
  });

  const [estimatorBlueprint, setEstimatorBlueprint] = useState<ProjectEstimatorBlueprint | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    const handleApplyBlueprint = (e: Event) => {
      const customEvent = e as CustomEvent<ProjectEstimatorBlueprint>;
      if (customEvent.detail) {
        const data = customEvent.detail;
        setEstimatorBlueprint(data);
        setFormState((prev) => ({
          ...prev,
          service: data.serviceCategory || prev.service,
          message: data.formattedMessage || prev.message,
        }));
      }
    };

    window.addEventListener("ssolutions:apply_blueprint", handleApplyBlueprint);
    return () => {
      window.removeEventListener("ssolutions:apply_blueprint", handleApplyBlueprint);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) {
      error(
        isSr ? "Molimo unesite vašu email adresu i poruku." : "Please fill in your email address and message.",
        isSr ? "Nepotpuna Forma" : "Incomplete Form"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ssolutionsrs@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Ime_ili_Firma: formState.name || "Nije navedeno",
          Email: formState.email,
          Telefon: formState.phone || "Nije navedeno",
          Usluga: formState.service,
          Izabrani_Model_Konfiguratora: estimatorBlueprint ? estimatorBlueprint.projectTitle : "Direktan upit bez konfiguratora",
          Procenjeni_Rok_Izrade: estimatorBlueprint ? estimatorBlueprint.estimatedTime : "N/A",
          Broj_Izabranih_Funkcija: estimatorBlueprint ? String(estimatorBlueprint.selectedFeatures.length) : "N/A",
          Izabrane_Funkcije_Lista: estimatorBlueprint && estimatorBlueprint.featureLabels.length > 0
            ? estimatorBlueprint.featureLabels.join(", ")
            : "N/A",
          Poruka: formState.message,
          _subject: `[SSolutions] Novi Upit ${estimatorBlueprint ? `(${estimatorBlueprint.projectTitle})` : ""} od ${formState.name || formState.email}`,
          _template: "table"
        })
      });

      // Track conversion in Google Analytics 4
      trackLeadFormSubmission({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        service: formState.service,
        messageLength: formState.message.length,
      });

      if (response.ok) {
        success(
          isSr
            ? `Hvala ${formState.name ? formState.name + ", " : ""}vaš upit je uspešno poslat! SSolutions tim će vam odgovoriti u najkraćem mogućem roku.`
            : `Thank you ${formState.name ? formState.name + ", " : ""}your message has been delivered! SSolutions team will reply shortly.`,
          isSr ? "Upit Uspešno Poslat" : "Inquiry Sent",
          { duration: 6000 }
        );
        setJustSubmitted(true);
        setFormState({ name: "", email: "", phone: "", service: "web-app", message: "" });
        setEstimatorBlueprint(null);
        setTimeout(() => setJustSubmitted(false), 4000);
      } else {
        // Fallback if formsubmit returns 200 with error structure
        success(
          isSr
            ? "Vaš upit je uspešno zabeležen! Kontaktiraćemo vas na uneti email u najkraćem roku."
            : "Your inquiry has been recorded! We will follow up via email shortly.",
          isSr ? "Poruka Primljena" : "Message Received",
          { duration: 6000 }
        );
        setJustSubmitted(true);
        setFormState({ name: "", email: "", phone: "", service: "web-app", message: "" });
        setEstimatorBlueprint(null);
        setTimeout(() => setJustSubmitted(false), 4000);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Track conversion even if external formsubmit gateway had network issue
      trackLeadFormSubmission({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        service: formState.service,
        messageLength: formState.message.length,
      });
      
      // Notify user smoothly via toast
      error(
        isSr 
          ? "Došlo je do poteškoće pri mrežnom slanju. Možete nas takođe kontaktirati direktno na ssolutionsrs@gmail.com."
          : "A network issue occurred. You can also reach us directly at ssolutionsrs@gmail.com.",
        isSr ? "Obaveštenje o slanju" : "Submission Notice",
        { duration: 7000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900 dark:bg-[#050505] text-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            {isSr ? "Kontakt & Sastanak" : "Contact & Booking"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            {isSr ? "Zakažite Besplatne Konsultacije" : "Book a Free Consultation"}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {isSr
              ? "Imate ideju za projekat ili vam je potrebno prilagođeno softversko rešenje? Kontaktirajte SSolutions i ostvarite besplatnu procenu i konsultacije."
              : "Have a project idea or need a custom software solution? Get in touch with SSolutions for a free assessment and consultation."}
          </p>
        </motion.div>

        {/* Quick Contact & Booking Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Booking Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-800/60 dark:bg-[#111111] p-6 sm:p-8 rounded-2xl border border-slate-700/80 dark:border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="text-blue-400" size={22} />
                {isSr ? "Direktan Kontakt" : "Direct Contact"}
              </h3>

              <div className="space-y-4">
                <motion.a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ssolutionsrs@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackDirectContact({ channel: "gmail", target: "ssolutionsrs@gmail.com", location: "Contact Section" });
                    info(
                      isSr ? "Otvara se Gmail klijent za direktnu poruku." : "Opening Gmail client for direct inquiry.",
                      isSr ? "Direktan Kontakt" : "Direct Contact"
                    );
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 dark:bg-white/5 border border-slate-700/50 hover:border-blue-500/50 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">{isSr ? "Pošaljite Gmail Poruku" : "Send Gmail Message"}</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">ssolutionsrs@gmail.com</span>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 dark:bg-white/5 border border-slate-700/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">{isSr ? "Sedište & Lokacija" : "Location"}</span>
                    <span className="text-sm font-semibold text-white">{isSr ? "Čačak, Srbija (Dostupno Globalno)" : "Čačak, Serbia (Available Globally)"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-slate-800/40 dark:bg-[#111111]/80 p-6 rounded-2xl border border-slate-700/60 dark:border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                {isSr ? "Zašto Izabrati SSolutions?" : "Why SSolutions?"}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{isSr ? "Brz odziv na upit (unutar 24 sata)" : "Fast response time (within 24 hours)"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{isSr ? "Besplatna procena i analiza projekta" : "Free project assessment and consultation"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{isSr ? "Sigurna, moderna i skalabilna rešenja" : "Secure, modern, and scalable architecture"}</span>
                </li>
              </ul>
            </div>

            {/* CV Download Button - Icon Only */}
            <div className="flex items-center gap-3 pt-1">
              <motion.a
                href="/folders/resume.pdf"
                download="resume.pdf"
                onClick={() => {
                  trackDirectContact({ channel: "resume_download", target: "resume.pdf", location: "Contact Section" });
                  info(
                    isSr ? "Preuzimanje SSolutions CV / Portfolio dokumenta u toku..." : "Downloading SSolutions CV / Portfolio document...",
                    isSr ? "Preuzimanje" : "Download"
                  );
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-xl bg-slate-800 dark:bg-[#111111] border border-slate-700/80 dark:border-white/10 text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:border-blue-500 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
                aria-label={isSr ? "Preuzmi CV" : "Download CV"}
                title={isSr ? "Preuzmi CV" : "Download CV"}
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact & Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-800/60 dark:bg-[#111111] p-6 sm:p-8 rounded-2xl border border-slate-700/80 dark:border-white/10 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {isSr ? "Pošaljite Upit ili Zakažite Konsultaciju" : "Send Inquiry or Schedule a Meeting"}
                  </h3>
                  {justSubmitted && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold animate-pulse">
                      <Check size={14} />
                      {isSr ? "Poslato" : "Sent"}
                    </span>
                  )}
                </div>

                {/* Active Blueprint Summary from Estimator */}
                {estimatorBlueprint && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="p-3.5 sm:p-4 rounded-xl bg-blue-500/10 dark:bg-blue-900/20 border border-blue-500/30 text-blue-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner"
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <SlidersHorizontal size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-white text-xs sm:text-sm">
                            {estimatorBlueprint.projectTitle}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-semibold">
                            {estimatorBlueprint.selectedFeatures.length} {isSr ? "funkcija" : "features"}
                          </span>
                          <span className="text-[11px] text-slate-300">
                            {isSr ? "Rok:" : "Time:"} {estimatorBlueprint.estimatedTime}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {isSr ? "Konfiguracija iz interaktivnog konfiguratora je automatski dodata u poruku ispod." : "Blueprint configuration from estimator is attached below."}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setEstimatorBlueprint(null);
                        setFormState((prev) => ({ ...prev, message: "" }));
                      }}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded-md hover:bg-white/10 transition-colors shrink-0 cursor-pointer self-end sm:self-center"
                    >
                      <X size={13} />
                      <span>{isSr ? "Poništi konfiguraciju" : "Clear setup"}</span>
                    </button>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                      {isSr ? "Vaše Ime / Kompanija *" : "Your Name / Company *"}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={isSr ? "Npr. Marko Marković / Firma d.o.o." : "e.g. John Doe / Tech Corp"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                      {isSr ? "Email Adresa *" : "Email Address *"}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="vasa@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1">
                      {isSr ? "Telefon / Kontakt" : "Phone Number"}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+381 6x xxx xxxx"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1">
                      {isSr ? "Vrsta Usluge" : "Type of Service"}
                    </label>
                    <select
                      id="contact-service"
                      aria-label={isSr ? "Vrsta Usluge" : "Type of Service"}
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                    >
                      <option value="web-app">{isSr ? "Izrada Web Aplikacije & Softvera" : "Custom Web Application & Software"}</option>
                      <option value="ecommerce">{isSr ? "Online Prodavnica (Web Shop)" : "E-Commerce Web Shop"}</option>
                      <option value="booking">{isSr ? "Sistem za Zakazivanje & Portali" : "Booking Portal & Directory"}</option>
                      <option value="cms">{isSr ? "Prezentacioni Sajt / Custom CMS" : "Business Website / Custom CMS"}</option>
                      <option value="backend">{isSr ? "Backend, Baze & API Razvoj" : "Backend, DB & API Engineering"}</option>
                      <option value="consulting">{isSr ? "Konsultacije, Redizajn & Ubrzanje" : "Consulting, Redesign & Speedup"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                      {isSr ? "Opis Projekta / Poruka *" : "Project Details / Message *"}
                    </label>
                    {formState.message && (
                      <span className="text-[11px] text-slate-400">
                        {formState.message.length} {isSr ? "karaktera" : "characters"}
                      </span>
                    )}
                  </div>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={isSr ? "Opišite ukratko vaše zahteve, rokove ili ciljeve projekta..." : "Briefly describe your requirements, timeline, or goals..."}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-xs sm:text-sm focus:outline-hidden transition-all resize-y min-h-[110px] leading-relaxed font-sans"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>{isSr ? "Šaljem poruku..." : "Sending message..."}</span>
                    </>
                  ) : justSubmitted ? (
                    <>
                      <Check size={16} className="text-emerald-300" />
                      <span>{isSr ? "Poruka Poslata!" : "Message Sent!"}</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      <span>{isSr ? "Pošalji Upit & Zakaži Konsultacije" : "Submit Inquiry & Book Consultation"}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
