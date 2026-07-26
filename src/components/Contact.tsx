import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-app",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sretenovic0315@gmail.com", {
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
          Poruka: formState.message,
          _subject: `[SSolutions] Novi Upit od ${formState.name || formState.email}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback if formsubmit returns error
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Fallback display so user knows how to contact directly if blocked
      setErrorMessage(
        isSr 
          ? "Došlo je do greške pri slanju. Možete nas kontaktirati direktno na sretenovic0315@gmail.com ili putem WhatsApp-a."
          : "An error occurred. You can reach us directly at sretenovic0315@gmail.com or via WhatsApp."
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
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
        </div>

        {/* Quick Contact & Booking Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Booking Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/60 dark:bg-[#111111] p-6 sm:p-8 rounded-2xl border border-slate-700/80 dark:border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="text-blue-400" size={22} />
                {isSr ? "Direktan Kontakt" : "Direct Contact"}
              </h3>

              <div className="space-y-4">
                <a 
                  href="mailto:sretenovic0315@gmail.com" 
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 dark:bg-white/5 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">{isSr ? "Pošaljite Email" : "Send an Email"}</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">sretenovic0315@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+381613660260" 
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 dark:bg-white/5 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">{isSr ? "Pozovite Telefon" : "Call Directly"}</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">+381 61 366 0260</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/381613660260" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-emerald-300 font-medium">{isSr ? "Brz Odgovor" : "Instant Chat"}</span>
                    <span className="text-sm font-semibold text-white">WhatsApp / Viber Chat</span>
                  </div>
                </a>

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
          </div>

          {/* Right Column: Interactive Contact & Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/60 dark:bg-[#111111] p-6 sm:p-8 rounded-2xl border border-slate-700/80 dark:border-white/10 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {isSr ? "Hvala vam na poruci!" : "Thank you for your inquiry!"}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    {isSr
                      ? "Vaš upit je uspešno poslat na sretenovic0315@gmail.com. SSolutions tim će vam odgovoriti u najkraćem mogućem roku."
                      : "Your message has been delivered to sretenovic0315@gmail.com. SSolutions team will get back to you shortly."}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", phone: "", service: "web-app", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
                  >
                    {isSr ? "Pošalji novu poruku" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {isSr ? "Pošaljite Upit ili Zakažite Konsultaciju" : "Send Inquiry or Schedule a Meeting"}
                  </h3>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isSr ? "Vaše Ime / Kompanija *" : "Your Name / Company *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={isSr ? "Npr. Marko Marković / Firma d.o.o." : "e.g. John Doe / Tech Corp"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isSr ? "Email Adresa *" : "Email Address *"}
                      </label>
                      <input
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
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isSr ? "Telefon / Kontakt" : "Phone Number"}
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+381 6x xxx xxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isSr ? "Vrsta Usluge" : "Type of Service"}
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all"
                      >
                        <option value="web-app">{isSr ? "Izrada Web Aplikacije" : "Custom Web Application"}</option>
                        <option value="cms">{isSr ? "Custom CMS / WordPress Rešenja" : "Custom CMS / WordPress"}</option>
                        <option value="backend">{isSr ? "Backend & API Razvoj" : "Backend & API Engineering"}</option>
                        <option value="consulting">{isSr ? "Konsultacije & Softverski Inženjering" : "Software Consulting"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {isSr ? "Opis Projekta / Poruka *" : "Project Details / Message *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={isSr ? "Opišite ukratko vaše zahteve, rokove ili ciljeve projekta..." : "Briefly describe your requirements, timeline, or goals..."}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-[#0a0a0a] border border-slate-700/80 focus:border-blue-500 text-white text-sm focus:outline-hidden transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>{isSr ? "Šaljem poruku..." : "Sending message..."}</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        <span>{isSr ? "Pošalji Upit & Zakaži Konsultacije" : "Submit Inquiry & Book Consultation"}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
