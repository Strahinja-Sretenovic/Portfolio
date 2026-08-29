import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  MapPin, 
  Star, 
  Phone, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function CustomerJourneyScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const searchScenarios = [
    { query: isSr ? "frizerski salon Čačak" : "hair salon nearby", category: isSr ? "Uslužni biznis" : "Service Business" },
    { query: isSr ? "stomatolog centar cena" : "dental clinic pricing", category: isSr ? "Zdravstvo" : "Healthcare" },
    { query: isSr ? "građevinska firma reference" : "construction contractor", category: isSr ? "B2B / Industrija" : "B2B / Industry" }
  ];

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [activeFactorIndex, setActiveFactorIndex] = useState<number | null>(null);

  const currentQuery = searchScenarios[activeScenarioIdx].query;

  useEffect(() => {
    let index = 0;
    setTypedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < currentQuery.length) {
        setTypedText(currentQuery.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [activeScenarioIdx, currentQuery]);

  const factors = [
    {
      id: "vidljivost",
      step: "01",
      name: isSr ? "Vidljivost" : "Visibility",
      desc: isSr ? "Da li vas uopšte pronalaze kada traže vašu uslugu?" : "Are you easily discovered on Google Search & Maps?",
      icon: <Search className="w-4 h-4 text-blue-500" />
    },
    {
      id: "prvi-utisak",
      step: "02",
      name: isSr ? "Prvi utisak" : "First Impression",
      desc: isSr ? "Da li dizajn i brzina ulivaju sigurnost u prvih 5 sekundi?" : "Does your mobile UX establish instant professionalism?",
      icon: <Eye className="w-4 h-4 text-indigo-500" />
    },
    {
      id: "poverenje",
      step: "03",
      name: isSr ? "Poverenje" : "Trust & Social Proof",
      desc: isSr ? "Ocene, recenzije i fotografije stvarnih radova." : "Verified reviews, photos, and authoritative social proof.",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />
    },
    {
      id: "ponuda",
      step: "04",
      name: isSr ? "Jasna Ponuda" : "Clear Offer",
      desc: isSr ? "Razume li posetilac tačno šta dobija i po kojim uslovima?" : "Does the visitor immediately understand what you provide?",
      icon: <CheckCircle2 className="w-4 h-4 text-cyan-500" />
    },
    {
      id: "cena",
      step: "05",
      name: isSr ? "Cena / Očekivanja" : "Pricing Expectation",
      desc: isSr ? "Uklanjanje neizvesnosti oko troškova pre poziva." : "Eliminating friction and ambiguity around service costs.",
      icon: <Sparkles className="w-4 h-4 text-amber-500" />
    },
    {
      id: "kontakt",
      step: "06",
      name: isSr ? "Kontakt" : "Direct Contact",
      desc: isSr ? "Jedan klik za poziv, WhatsApp ili email bez lutanja." : "One-tap phone call, WhatsApp, or instant direction map.",
      icon: <Phone className="w-4 h-4 text-teal-500" />
    },
    {
      id: "zakazivanje",
      step: "07",
      name: isSr ? "Zakazivanje" : "Booking / Conversion",
      desc: isSr ? "Jednostavan proces bez čekanja i zastoja." : "Frictionless online scheduling or lead dispatch.",
      icon: <Calendar className="w-4 h-4 text-purple-500" />
    }
  ];

  return (
    <section
      id="scene-02"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "02 / PUT VAŠEG KUPCA" : "02 / THE BUYER'S JOURNEY"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Vaš potencijalni klijent već bira." : "Your potential customer is already deciding."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Pre nego što vas pozove ili poseti vašu radnju, posetilac prolazi kroz niz brzih mikropresuda. Pogledajte kako to izgleda u realnom vremenu:"
              : "Before making a call or booking an appointment, a visitor goes through a rapid series of micro-decisions. Here is the realistic simulation:"}
          </p>
        </div>

        {/* Interactive Search Simulator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Simulated Search Environment Mockup (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Search Shell Mockup */}
            <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xl shadow-slate-900/5 space-y-6">
              
              {/* Simulated Search Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{isSr ? "SIMULACIJA PRETRAGE KUPCA" : "BUYER SEARCH SIMULATION"}</span>
                  <div className="flex gap-1.5">
                    {searchScenarios.map((sc, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveScenarioIdx(i)}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-semibold cursor-pointer transition-colors ${
                          activeScenarioIdx === i
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {sc.category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200">
                  <Search size={18} className="text-blue-500 shrink-0" />
                  <span className="font-mono text-sm sm:text-base font-medium">
                    {typedText}
                    {isTyping && <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-pulse" />}
                  </span>
                </div>
              </div>

              {/* Simulated Result Card (The Decision Stage) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-4">
                
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      <MapPin size={12} />
                      <span>{isSr ? "Top Lokalni Rezultat • Centar" : "Top Local Result • Downtown"}</span>
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">
                      {activeScenarioIdx === 0 && "Frizerski Salon Stevan"}
                      {activeScenarioIdx === 1 && "Stomatološki Centar dr Jovanović"}
                      {activeScenarioIdx === 2 && "Inženjering & Gradnja d.o.o."}
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs">
                    <Star size={13} className="fill-amber-500" />
                    <span>4.9 (128)</span>
                  </div>
                </div>

                {/* Micro preview elements */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-black/30 border border-slate-200/60 dark:border-white/5">
                    <div className="text-slate-400 text-[10px]">{isSr ? "Prvi Utisak" : "First View"}</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{isSr ? "Učitavanje 0.4s" : "Load 0.4s"}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-black/30 border border-slate-200/60 dark:border-white/5">
                    <div className="text-slate-400 text-[10px]">{isSr ? "Cenovnik" : "Pricing"}</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{isSr ? "Transparentan" : "Transparent"}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-black/30 border border-slate-200/60 dark:border-white/5 col-span-2 sm:col-span-1">
                    <div className="text-slate-400 text-[10px]">{isSr ? "Radno Vreme" : "Hours"}</div>
                    <div className="font-semibold text-emerald-600 dark:text-emerald-400">{isSr ? "Otvoreno danas" : "Open now"}</div>
                  </div>
                </div>

                {/* Instant Action CTA Row */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <div className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs">
                    <Phone size={13} />
                    <span>{isSr ? "Pozovite odmah" : "Call Business"}</span>
                  </div>
                  <div className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5">
                    <Calendar size={13} />
                    <span>{isSr ? "Zakažite online" : "Book Online"}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: The 7 Crucial Decision Factors (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {isSr ? "7 FAKTORA KOJI LOME ODLUKU" : "7 FACTORS SHAPING THE DECISION"}
            </div>

            <div className="space-y-2">
              {factors.map((f, idx) => (
                <div
                  key={f.id}
                  onMouseEnter={() => setActiveFactorIndex(idx)}
                  onMouseLeave={() => setActiveFactorIndex(null)}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-default ${
                    activeFactorIndex === idx
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700/60 shadow-xs translate-x-1"
                      : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 shrink-0">
                      {f.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {f.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {f.step}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Scene Climax Statement */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              {isSr ? "Svaki korak utiče na odluku." : "Every step impacts the customer decision."}
            </h3>
            <p className="text-base sm:text-xl text-blue-300 font-medium">
              {isSr
                ? "A svaki od njih može biti mesto gde gubite klijenta."
                : "And every single step can be the precise place where you lose the sale."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
