import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function Faq() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: isSr ? "Šta ako mi uopšte nije potreban novi sajt?" : "What if I don't actually need a new website?",
      answer: isSr
        ? "Iskreno ćemo vam reći. Ponekad je problem u loše podešenom Google profilu, nejasnoj strukturi ponude, odsustvu recenzija ili nepovezanom Instagramu. Ako jednostavne korekcije rešavaju problem, nema potrebe za velikim troškom novog sajta."
        : "We will tell you directly. Often the bottleneck is a poorly configured Google Business profile, unclear offer messaging, lack of reviews, or friction in booking. If a minor strategic tweak solves the issue, a full new build is unnecessary."
    },
    {
      question: isSr ? "Zašto ne počinjete odmah dizajnom ili kodom?" : "Why don't you start immediately with design or code?",
      answer: isSr
        ? "Zato što je građenje pogrešne stvari najskuplja greška u poslovanju. Pre nego što napišemo liniju koda ili nacrtamo piksel, moramo tačno znati ko je vaš kupac, gde trenutno nastaje prekid i šta taj digitalni sistem mora da postigne."
        : "Because building the wrong thing is the most expensive mistake in business. Before writing code or designing screens, we must diagnose the real bottleneck, understand your buyer, and define exact success criteria."
    },
    {
      question: isSr ? "Ko zapravo radi na mom projektu?" : "Who actually works on my project?",
      answer: isSr
        ? "Radite direktno sa nama (inženjeri i konsultanti). Nema prebacivanja zadataka na neiskusne juniore, nema gubitka informacija kroz pet nivoa menadžera nalik velikim agencijama — potpuna odgovornost i direktna komunikacija od početka do kraja."
        : "You work directly with us (engineers & consultants). No handoffs to inexperienced juniors, no lost-in-translation agency account managers — full engineering accountability and direct communication from start to launch."
    },
    {
      question: isSr ? "Koliko košta i koliko traje izrada projekta?" : "How much does a project cost and how long does it take?",
      answer: isSr
        ? "Investicija i rok zavise od problema koji rešavamo: standardni strateški redizajn ili prezentacioni sajt traje 2–4 nedelje, dok namenske web aplikacije i automatizacije traju 3–6 nedelja. Nakon kratkog razgovora dobijate precizan predlog obima i fiksnu cenu bez skrivenih troškova."
        : "Investment and timeline depend on scope: a strategic redesign or authoritative presentation site takes 2–4 weeks, while custom web applications or automated booking systems take 3–6 weeks. Following our discovery session, you receive a clear scope and fixed-price commitment."
    },
    {
      question: isSr ? "Kako izgleda besplatna početna analiza?" : "What happens during the free initial analysis?",
      answer: isSr
        ? "Pošaljete link ka svom biznisu, a mi pre razgovora pregledamo vaš sajt, mobilno iskustvo, Google profil i konkurenciju. Na razgovoru (15–30 min) ne gledamo prodajne slajdove već odmah prelazimo na konkretna zapažanja i preporuke."
        : "You send your business link, and we inspect your mobile UX, search presence, competitor positioning, and conversion friction beforehand. On our call (15–30 mins), we bypass sales pitches and discuss actionable observations immediately."
    },
    {
      question: isSr ? "Da li sam vezan ugovorom ili mesečnim rentiranjem?" : "Am I locked into monthly maintenance contracts?",
      answer: isSr
        ? "Ne. Dobijate 100% vlasnički, čist kod i jednostavan administrativni panel. Možete samostalno menjati cene i sadržaj. Za održavanje i tehničku podršku možete nas angažovati samo ako vi to želite."
        : "No. You own 100% of your source code and have an intuitive CMS to update prices, photos, and copy freely. Ongoing technical maintenance is entirely optional."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 relative bg-slate-50 dark:bg-[#070707] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>{isSr ? "Česta Pitanja & Odgovori" : "Frequently Asked Questions"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Iskreni odgovori na najčešće nedoumice" : "Straightforward answers to common questions"}
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Sve što vas zanima o procesu rada, cenama, rokovima i onome šta dobijate — bez marketinških uvijanja."
              : "Everything you need to know about timelines, scope, pricing, and ongoing support."}
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-transform duration-200 ${isOpen ? "rotate-180 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Question CTA */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">
              {isSr ? "Imate pitanje koje ovde nije navedeno?" : "Have a question not listed here?"}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {isSr ? "Rado ćemo odgovoriti na sva vaša pitanja bez ikakve obaveze." : "Happy to discuss your specific situation with zero pressure."}
            </div>
          </div>

          <button
            onClick={() => scrollToTarget("#contact", 80)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer shrink-0"
          >
            {isSr ? "Postavite pitanje" : "Ask a Question"}
          </button>
        </div>

      </div>
    </section>
  );
}
