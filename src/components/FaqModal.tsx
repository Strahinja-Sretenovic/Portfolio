import React, { useState } from "react";
import { X, ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToForm: () => void;
}

export function FaqModal({ isOpen, onClose, onJumpToForm }: FaqModalProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-display font-black text-slate-900 dark:text-white">
                {isSr ? "Često postavljana pitanja (FAQ)" : "Frequently Asked Questions"}
              </h2>
              <p className="text-xs text-slate-500">
                {isSr ? "Direktni odgovori na ključna pitanja pre saradnje" : "Direct answers to key commercial questions"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close FAQ modal"
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* FAQs List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-slate-50 dark:bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
          <span className="text-xs font-mono text-slate-500">
            {isSr ? "Imate specifično pitanje?" : "Have a specific question?"}
          </span>

          <button
            onClick={() => {
              onClose();
              onJumpToForm();
            }}
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono transition-all cursor-pointer"
          >
            {isSr ? "Zatražite analizu →" : "Request audit →"}
          </button>
        </div>

      </div>
    </div>
  );
}
