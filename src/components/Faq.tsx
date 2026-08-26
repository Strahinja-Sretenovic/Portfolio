import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  DollarSign, 
  Rocket, 
  Gauge, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  MapPin
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Faq() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", label: isSr ? "Sva Pitanja" : "All Questions" },
    { id: "pricing", label: isSr ? "Cene & Rokovi" : "Pricing & Timelines" },
    { id: "seo", label: isSr ? "SEO & Google Rangiranje" : "SEO & Speed" },
    { id: "tech", label: isSr ? "Funkcionalnosti & CMS" : "Features & CMS" },
    { id: "support", label: isSr ? "Održavanje & Podrška" : "Support & Maintenance" }
  ];

  const faqs = [
    {
      id: 1,
      category: "pricing",
      question: isSr 
        ? "Koliko košta izrada web sajta ili online prodavnice u Srbiji?" 
        : "How much does custom web development or e-commerce cost?",
      answer: isSr 
        ? "Cena zavisi od obima i funkcionalnosti projekta. Osnovni prezentacioni sajtovi za firme i usluge obično se kreću od 200€ do 450€, naprednije platforme sa online zakazivanjem i višejezičnošću od 400€ do 800€, dok kompletne online prodavnice (web shop) sa plaćanjem karticama i integracijom kurira počinju od 500€ do 1.200€+. Za svaki projekat dajemo tačnu, fiksnu ponudu bez skrivenih troškova pre početka rada."
        : "Pricing depends strictly on project scope and required architecture. High-converting presentation sites range from €200–€450, interactive booking & client portal engines from €400–€800, and full-featured e-commerce stores with automated payment gateways start from €500–€1,200+. We provide a transparent, fixed-scope proposal with zero surprise fees."
    },
    {
      id: 2,
      category: "pricing",
      question: isSr 
        ? "Koliko traje proces izrade od ideje do gotovog sajta?" 
        : "What is the typical delivery timeline from start to launch?",
      answer: isSr 
        ? "Za većinu prezentacionih i landing sajtova rok je 5 do 10 radnih dana. Za online prodavnice i portale sa plaćanjem potrebno je između 10 i 20 radnih dana, dok se kompleksne custom web aplikacije i softveri po meri razvijaju po etapama u roku od 2 do 6 nedelja. Poštujemo dogovorene rokove i dajemo garanciju na datum isporuke."
        : "Standard business websites and landing pages are typically launched within 5–10 business days. E-commerce platforms take 10–20 days, while custom web applications with complex databases and third-party integrations range from 2–6 weeks with clear milestone deliverables."
    },
    {
      id: 3,
      category: "seo",
      question: isSr 
        ? "Da li je u cenu uključena Google SEO optimizacija i brzina učitavanja?" 
        : "Is Google SEO foundation and speed optimization included by default?",
      answer: isSr 
        ? "Da, apsolutno! Svaki sajt koji napravimo u SSolutions ima ugrađenu tehničku On-Page SEO optimizaciju (pravilne meta tagove, OpenGraph deljenje na mrežama, Schema.org mikro-podatke za Google Rich Snippets i robots/sitemap strukturu). Takođe garantujemo PageSpeed ocenu blizu 100/100 na mobilnim uređajima, što je ključni faktor za visoko pozicioniranje na Google pretrazi."
        : "Yes, absolutely! Every platform engineered by SSolutions includes deep On-Page technical SEO (semantic HTML, OpenGraph tags, JSON-LD Schema.org markup for Google Rich Snippets, sitemaps, and robots configuration). We also guarantee sub-second load times hitting near 100/100 Google PageSpeed scores on mobile."
    },
    {
      id: 4,
      category: "tech",
      question: isSr 
        ? "Koja je razlika između SSolutions izrade i jeftinih šablona (Wix / spori WordPress)?" 
        : "What is the difference between SSolutions and cheap generic templates?",
      answer: isSr 
        ? "Gotovi jeftini šabloni su pretrpani nepotrebnim kodom, spori se otvaraju (preko 4-5 sekundi), teški su za mobilne telefone i često se 'kvare' pri ažuriranjima. SSolutions pravi optimizovana, čista i moderna rešenja (React / Next.js / optimizovan Custom WordPress) koja se otvaraju u treptaju oka (<0.6s), rangiraju na prvoj strani Google-a i izgledaju prestižno i profesionalno."
        : "Bloated page builder templates are sluggish (>4s load time), prone to plugin vulnerabilities, and perform poorly on mobile. SSolutions builds clean, lightweight, bespoke platforms (React, Next.js, and custom-tailored WordPress) that load in under 600ms, rank at the top of search engines, and convert visitors into high-ticket clients."
    },
    {
      id: 5,
      category: "tech",
      question: isSr 
        ? "Mogu li samostalno da menjam cene, usluge, slike i tekstove na sajtu?" 
        : "Can I easily edit pricing, services, imagery, and text myself?",
      answer: isSr 
        ? "Da! Za sajtove gde je potrebno često menjanje sadržaja postavljamo izuzetno jednostavan i intuitivan administrativni panel prilagođen vama. Dobijate kratku video obuku i uputstvo, tako da možete menjati cene, dodavati nove radove i blog tekstove u par klikova sa telefona ili računara."
        : "Yes! For content-heavy sites, we deliver a streamlined, intuitive content management dashboard. You will receive a video walkthrough showing you how to update pricing, upload new projects, and edit text in seconds without touching any code."
    },
    {
      id: 6,
      category: "support",
      question: isSr 
        ? "Šta se dešava nakon lansiranja sajta? Imate li tehničku podršku i hosting?" 
        : "What happens after launch? Do you provide hosting, security, and maintenance?",
      answer: isSr 
        ? "Nakon lansiranja obezbeđujemo besplatnu garanciju i tehničku podršku, kao i pomoć oko kupovine domena (.rs, .com) i podešavanja poslovnih email adresa (npr. office@vasafirma.rs). Takođe nudimo mesečne pakete održavanja koji uključuju redovne sigurnosne kopije (backup), ažuriranja i sitne izmene po potrebi."
        : "We provide post-launch warranties, technical monitoring, and domain (.com, .rs) & business email configuration. We also offer ongoing maintenance packages covering automated cloud backups, security updates, and on-demand modifications."
    },
    {
      id: 7,
      category: "pricing",
      question: isSr 
        ? "Radite li sa klijentima iz cele Srbije (Čačak, Beograd, Novi Sad) i inostranstva (dijaspora)?" 
        : "Do you work with clients across Serbia and internationally (Diaspora)?",
      answer: isSr 
        ? "Da! Naša baza je u Čačku i Novom Sadu, ali radimo sa klijentima iz cele Srbije (Beograd, Kragujevac, Niš, Kraljevo, Užice, Subotica itd.) kao i sa preduzetnicima iz dijaspore (Nemačka, Austrija, Švajcarska, Švedska, SAD). Komunikacija se odvija efikasno putem video poziva (Google Meet / Zoom), WhatsApp-a, telefona ili uživo."
        : "Yes! While headquartered in Čačak & Novi Sad, we partner with clients across Serbia (Belgrade, Kragujevac, Niš, etc.) and internationally with European and diaspora businesses (Germany, Austria, Switzerland, USA). Communication runs smoothly via Google Meet, Zoom, WhatsApp, or in-person meetings."
    },
    {
      id: 8,
      category: "seo",
      question: isSr 
        ? "Kako sajt zapravo pomaže mom biznisu da dobije više upita i novih kupaca?" 
        : "How does a high-converting website directly generate more sales and leads?",
      answer: isSr 
        ? "Sajt koji je izrađen po principima konverzije vodi posetioca tačno tamo gde treba: momentalno prikazuje zašto ste najbolji izbor, uklanja nedoumice oko cena i usluga, i nudi 1-klik dugmad za poziv, WhatsApp poruku ili online zakazivanje. Tako se posetioci sa Google-a i društvenih mreža pretvaraju u stalne klijente umesto da napuste stranicu."
        : "Conversion-engineered websites strategically guide visitors through an intentional sales funnel: instant credibility proof, clear transparent value, and one-tap call/WhatsApp triggers. This turns passive search traffic into direct inbound leads."
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-50/70 dark:bg-[#0d0d0d] border-t border-slate-200/60 dark:border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader 
          title={isSr ? "Često Postavljana Pitanja & SEO Vodič" : "Frequently Asked Questions & Answers"} 
          subtitle={isSr 
            ? "Sve što vas zanima o cenama, procesu izrade, Google SEO optimizaciji, brzini i održavanju na jednom mestu." 
            : "Everything you need to know about pricing, timelines, Google search ranking, and ongoing maintenance."}
        />

        {/* Search Bar & Category Filters */}
        <div className="mt-10 space-y-4">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isSr ? "Pretražite pitanja (npr. cena, SEO, brzina, održavanje, rokovi)..." : "Search questions (e.g. price, SEO, speed, timeline)..."}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs scale-105"
                      : "bg-white dark:bg-[#161616] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="mt-8 space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#161616] border-blue-500/50 shadow-md ring-1 ring-blue-500/20"
                      : "bg-white/80 dark:bg-[#121212] border-slate-200/90 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                        isOpen 
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" 
                          : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                      }`}>
                        <HelpCircle size={18} />
                      </div>
                      <span className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-500 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-400"
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                          <p className="mt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white dark:bg-[#141414] rounded-2xl border border-slate-200 dark:border-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isSr ? "Nema rezultata za vašu pretragu. Kontaktirajte nas direktno za odgovor na bilo koje pitanje." : "No questions matched your search. Contact us directly for a fast answer."}
              </p>
            </div>
          )}
        </div>

        {/* Local SEO Hubs Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-3xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <MapPin size={15} />
            <span>{isSr ? "Lokalna Pokrivenost & Gradovi u Srbiji i Dijspori" : "Service Coverage & Cities"}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {isSr 
              ? "Pružamo usluge profesionalne izrade sajtova, web aplikacija i SEO optimizacije klijentima u gradovima: Čačak, Beograd, Novi Sad, Kragujevac, Niš, Kraljevo, Užice, Valjevo, Kruševac, Subotica, Zrenjanin, Pančevo, Šabac, kao i preduzetnicima i kompanijama iz dijaspore (Nemačka, Austrija, Švajcarska, Švedska, SAD)."
              : "We deliver custom web engineering, SEO ranking, and digital solutions for clients in Čačak, Belgrade, Novi Sad, Kragujevac, Niš, and across Europe & the diaspora (Germany, Austria, Switzerland, Sweden, USA)."}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Čačak", "Beograd", "Novi Sad", "Kragujevac", "Niš", "Kraljevo", "Užice", "Valjevo", 
              "Kruševac", "Subotica", "Zrenjanin", "Pančevo", "Šabac", "Dijaspora (EU / USA)"
            ].map((city, cIdx) => (
              <span 
                key={cIdx} 
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-[11px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Direct CTA */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/20">
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg">
              {isSr ? "Imate specifično pitanje ili želite besplatnu procenu?" : "Have a specific project in mind?"}
            </h4>
            <p className="text-xs text-blue-100">
              {isSr ? "Odgovaramo na sve upite u roku od 2-4 sata sa detaljnim predlogom." : "We respond to inquiries within 2-4 hours with a comprehensive audit."}
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {isSr ? "Pošaljite nam poruku" : "Ask Us Directly"}
          </a>
        </div>
      </div>
    </section>
  );
}
