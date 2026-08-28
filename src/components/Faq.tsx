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
      question: isSr ? "Koliko košta izrada ili redizajn sajta?" : "How much does a website strategy or redesign cost?",
      answer: isSr
        ? "Investicija zavisi od problema koji rešavamo. Jednostavan prezentacioni sajt i kompleksan sistem za zakazivanje sa automatizacijama ili online prodavnicom zahtevaju različit obim rada. Nakon kratkog discovery razgovora i uvida u vaše potrebe, dobijate jasan predlog obima, precizan rok i fiksnu cenu — bez skrivenih troškova."
        : "Pricing is scoped directly against the business problem we solve. A modern corporate presentation site vs a custom booking workflow with SMS reminders and payment gateways require different technical depth. Following a brief discovery call, you receive a transparent fixed quote with zero hidden fees."
    },
    {
      question: isSr ? "Koliko traje ceo projekat od početka do puštanja u rad?" : "How long does a typical project take from start to launch?",
      answer: isSr
        ? "Standardan strateški redizajn ili prezentacioni sajt traje okvirno 2 do 4 nedelje. Zahtevnije web aplikacije, booking platforme i e-commerce sistemi obično traju između 3 i 6 nedelja. Rok se precizno definiše pre početka i garantuje ugovorom."
        : "Standard strategic redesigns or business presentation sites typically take 2 to 4 weeks. Custom web applications, booking portals, and e-commerce platforms take 3 to 6 weeks. Timelines are committed to in advance."
    },
    {
      question: isSr ? "Da li mi uopšte treba novi sajt ako već imam neki?" : "Do I actually need a new website if I already have one?",
      answer: isSr
        ? "Ne nužno. Ponekad je problem u slaboj vidljivosti na Google-u, nejasnoj poruci, sporom učitavanju ili lošem toku zakazivanja na mobilnom telefonu. Tokom besplatne početne analize, otvoreno vam kažem da li ima smisla unaprediti postojeći sajt ili je isplativije postaviti novu, stabilnu osnovu."
        : "Not necessarily. Sometimes the issue lies in poor search visibility, unclear messaging, slow load times, or a clunky mobile checkout. During our initial audit, we evaluate whether optimizing your current site or building a clean new foundation produces the highest return on investment."
    },
    {
      question: isSr ? "Da li radite SEO optimizaciju?" : "Do you handle SEO (Search Engine Optimization)?",
      answer: isSr
        ? "Da. Svaki projekat dobija tehnički SEO temelj: čistu semantičku HTML strukturu, semantičke Schema.org mikropodatke za lokalni biznis, OpenGraph tagove, kompresovane slike i automatsko povezivanje sa Google Search Console-om. Takođe radimo istraživanje ključnih reči za vašu delatnost kako bi vas kupci lakše pronalazili."
        : "Yes. Every project includes structured technical SEO: semantic schema markup, LocalBusiness metadata, open graph tags, sub-second performance, and Google Search Console registration. We also align page structure with high-intent search queries."
    },
    {
      question: isSr ? "Da li vi pišete tekstove i pripremate sadržaj za sajt?" : "Do you write the copy and prepare content for the site?",
      answer: isSr
        ? "Da. U sklopu strategije sadržaja pomažemo vam da strukturišete i formulišete jasne, prodajne tekstove. Umesto komplikovanog žargona, tekstove pišemo tako da kupac u 10 sekundi razume vašu ponudu, prednosti i razloge zašto da izabere baš vas."
        : "Yes. As part of content strategy, we architect clear, high-converting copy. We translate your expertise into straightforward messaging that communicates value and eliminates buyer hesitation."
    },
    {
      question: isSr ? "Da li mogu samostalno da menjam cene, tekstove i slike?" : "Can I update prices, text, and images myself after launch?",
      answer: isSr
        ? "Apsolutno. Postavljamo jednostavan i pregledan administrativni panel prilagođen vama, gde bez ikakvog tehničkog znanja možete menjati cene, dodavati slike radova, pisati blog članke ili unositi nove usluge."
        : "Absolutely. We configure an intuitive content management interface where you can effortlessly edit prices, upload photos, manage blog posts, or adjust service descriptions without any technical knowledge."
    },
    {
      question: isSr ? "Šta se dešava nakon puštanja sajta u rad (Launch)?" : "What happens after the website is launched?",
      answer: isSr
        ? "Launch nije kraj saradnje. Postavljamo analitiku i pratimo stvarne podatke: gde posetioci klikću, kako dolaze i gde eventualno odustaju. Na raspolaganju smo za redovno tehničko održavanje, bezbednosna ažuriranja i strateško unapređenje konverzije."
        : "Launch is the starting point of real data collection. We monitor live analytics, track conversion pathways, and identify optimization opportunities. We also provide ongoing maintenance and security hosting."
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
              {isSr ? "Rado ću odgovoriti na sva vaša pitanja bez ikakve obaveze." : "Happy to discuss your specific situation with zero pressure."}
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
