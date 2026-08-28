import { useState } from "react";
import { motion } from "motion/react";
import { 
  HelpCircle, 
  Search, 
  MessageSquareWarning, 
  Compass, 
  Clock, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";
import { trackEvent } from "../utils/analytics";

export function ProblemRecognition() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const problems = [
    {
      id: 1,
      icon: <MessageSquareWarning className="w-5 h-5 text-amber-500" />,
      question: isSr ? "Imate posete, ali malo upita?" : "Traffic comes in, but inquiries don't?",
      diagnosis: isSr ? "Problem sa porukom, poverenjem ili konverzijom" : "Messaging, trust or conversion friction",
      description: isSr
        ? "Posetioci dođu na sajt, ali brzo napuste jer ponuda nije jasna, nedostaju dokazi o kvalitetu ili je kontakt previše komplikovan."
        : "Visitors land on your page but bounce quickly because the offer lacks clarity, social proof is missing, or contacting you feels tedious."
    },
    {
      id: 2,
      icon: <HelpCircle className="w-5 h-5 text-blue-500" />,
      question: isSr ? "Ljudi ne razumeju jasno šta nudite?" : "People don't clearly understand what you offer?",
      diagnosis: isSr ? "Problem sa sadržajem i informacionom arhitekturom" : "Content & information architecture issue",
      description: isSr
        ? "Ključne informacije su skrivene u dugačkim pasusima, struktura je konfuzna ili posetioci ne vide razliku između vaših usluga."
        : "Critical information is buried, structure is confusing, or prospects cannot quickly distinguish between your key services."
    },
    {
      id: 3,
      icon: <Search className="w-5 h-5 text-emerald-500" />,
      question: isSr ? "Ne pojavljujete se kada ljudi traže vašu uslugu?" : "Invisible when prospects search for your service?",
      diagnosis: isSr ? "SEO / Discoverability problem" : "SEO & search discoverability problem",
      description: isSr
        ? "Kupci sa visokom namerom traže rešenje na Google-u, ali pronalaze konkurente jer vaš digitalni profil nema tehničke i lokalne signale."
        : "High-intent buyers search for solutions on Google, but find competitors because your web presence lacks technical and local search signals."
    },
    {
      id: 4,
      icon: <Compass className="w-5 h-5 text-rose-500" />,
      question: isSr ? "Zavisite gotovo potpuno od Instagrama?" : "Almost 100% dependent on Instagram?",
      diagnosis: isSr ? "Rizična zavisnost od jednog kanala" : "Single-channel platform risk",
      description: isSr
        ? "Društvene mreže su odlične za pažnju, ali potencijalni klijenti koji vas traže drugim kanalima (Google, preporuka) možda vas ne pronalaze dovoljno lako."
        : "Social channels build awareness, but buyers researching via Google or formal B2B evaluations cannot verify your credibility."
    },
    {
      id: 5,
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      question: isSr ? "Stalno odgovarate na ista pitanja?" : "Constantly answering the exact same questions?",
      diagnosis: isSr ? "Informacije nisu dostupne na pravom mestu" : "Information not accessible at the right touchpoint",
      description: isSr
        ? "Gubite sate u porukama i pozivima objašnjavajući cene, radno vreme, proceduru ili dostupnost umesto da to sajt sam rešava."
        : "You waste hours in DMs and phone calls explaining pricing, timelines, or procedures that a structured website should answer upfront."
    },
    {
      id: 6,
      icon: <BarChart3 className="w-5 h-5 text-cyan-500" />,
      question: isSr ? "Gubite vreme na pozive, poruke i ručne rezervacije?" : "Losing time on calls, DMs and manual booking?",
      diagnosis: isSr ? "Proces koji može da se automatizuje" : "Manual friction that can be automated",
      description: isSr
        ? "Ručno vođenje kalendara, slanje ponuda i potvrda termina troši vašu energiju i stvara prostor za greške i izgubljene termine."
        : "Manual scheduling, PDF emailing, and tracking reminders drains your time and creates drop-offs from busy prospects."
    }
  ];

  return (
    <section id="problem-recognition" className="py-20 px-4 sm:px-6 relative bg-slate-900/50 dark:bg-black/60 border-t border-slate-200/50 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Prepoznavanje Problema" : "Problem Recognition"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Možda vam ne treba novi sajt." : "You might not need a new website."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Možda je problem negde drugde. Zato ne počinjem projektom — počinjem dijagnozom."
              : "The problem might be elsewhere. That's why I don't start with building — I start with diagnosis."}
          </p>
        </div>

        {/* Diagnostic Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((item) => {
            const isExpanded = selectedProblem === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProblem(isExpanded ? null : item.id)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isExpanded
                    ? "bg-blue-600/10 dark:bg-blue-900/20 border-blue-500 shadow-lg shadow-blue-500/10"
                    : "bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                      {item.diagnosis}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.question}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consulting Bottom Anchor Statement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              {isSr ? "Prvo nalazimo usko grlo. Tek onda biramo rešenje." : "We first isolate the bottleneck. Only then do we select the solution."}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {isSr 
                ? "Nema generičkih ponuda napamet. Kroz kratak razgovor i analizu utvrđujem šta zapravo treba popraviti." 
                : "No generic sales pitches. Through focused diagnostic research, I determine what genuinely needs fixing."}
            </p>
          </div>

          <button
            onClick={() => {
              trackEvent("select_content", {
                content_type: "Diagnostic_CTA",
                item_name: "Problem_Recognition_Audit_Request",
                destination: "#contact"
              });
              scrollToTarget("#contact", 80);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30 cursor-pointer shrink-0"
          >
            <span>{isSr ? "Zatraži besplatnu analizu" : "Request Free Analysis"}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
