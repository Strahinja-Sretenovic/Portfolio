import { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  Share2, 
  Globe, 
  FileText, 
  ShieldCheck, 
  Scale, 
  PhoneCall, 
  UserCheck, 
  Repeat,
  ArrowRight,
  Sparkles,
  Info
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function CustomerJourney() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 0,
      icon: <Search className="w-5 h-5 text-blue-400" />,
      stage: isSr ? "01. Pronalazak" : "01. Discovery",
      title: isSr ? "Google / Preporuka / Mreže" : "Search / Social / Referral",
      desc: isSr 
        ? "Kupac ima problem i traži rešenje. Ako vas ne pronalazi na prvoj strani ili kroz preporuku, ceo lanac se prekida pre početka."
        : "Prospect experiences a need and initiates search. If you lack visibility, the commercial chain breaks immediately.",
      friction: isSr ? "Rizik: Niste vidljivi gde kupac traži." : "Risk: Invisible on key search channels."
    },
    {
      id: 1,
      icon: <Share2 className="w-5 h-5 text-cyan-400" />,
      stage: isSr ? "02. Prvi Utisak" : "02. First Touch",
      title: isSr ? "Prvi kontakt sa brendom" : "Initial Impression",
      desc: isSr 
        ? "Prvih 5 sekundi. Korisnik podsvesno odlučuje da li delujete stručno, ozbiljno i sigurno."
        : "The first 5 seconds. Prospects subconsciously gauge authority, speed, and whether you are legitimate.",
      friction: isSr ? "Rizik: Spor sajt, zastareo izgled, 'jeftin' utisak." : "Risk: Slow load time, broken visual hierarchy."
    },
    {
      id: 2,
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      stage: isSr ? "03. Web Lokacija" : "03. Hub & Landing",
      title: isSr ? "Sajt / Landing stranica" : "Website / Destination",
      desc: isSr 
        ? "Vaša digitalna kancelarija. Ovde kupac dobija potpunu kontrolu nad informacijama bez lutanja."
        : "Your dedicated digital storefront. Prospects expect clear navigation and instant clarity.",
      friction: isSr ? "Rizik: Korisnik se izgubi u pretrpanom meniju." : "Risk: Cluttered menu and unfocused layout."
    },
    {
      id: 3,
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      stage: isSr ? "04. Jasnoća" : "04. Value Prop",
      title: isSr ? "Razumevanje ponude" : "Offer Comprehension",
      desc: isSr 
        ? "Zašto vi? Šta tačno dobija? Koje probleme rešavate i koliko to okvirno košta ili traje?"
        : "What specific outcomes do you produce? Transparent scope and pricing expectations.",
      friction: isSr ? "Rizik: Previše marketinškog žargona bez suštine." : "Risk: Vague corporate buzzwords without substance."
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      stage: isSr ? "05. Poverenje" : "05. Trust & Proof",
      title: isSr ? "Dokazi i reference" : "Evidence & Trust",
      desc: isSr 
        ? "Studije slučaja, stvarne recenzije i jasna metodologija rada koja uklanja strah od lošeg izbora."
        : "Verified case studies, transparent methodology, and social proof mitigating perceived buyer risk.",
      friction: isSr ? "Rizik: Nema dokaza da ste već uspešno rešavali taj problem." : "Risk: Zero credible proof or vague claims."
    },
    {
      id: 5,
      icon: <PhoneCall className="w-5 h-5 text-rose-400" />,
      stage: isSr ? "06. Akcija" : "06. Conversion",
      title: isSr ? "Poziv / Rezervacija / Kupovina" : "Inquiry / Booking / Sale",
      desc: isSr 
        ? "Jednostavan 1-klik formular, direktan poziv sa mobilnog ili automatski sistem za rezervaciju bez čekanja."
        : "Frictionless 1-tap contact, mobile direct calling, or instant self-service booking.",
      friction: isSr ? "Rizik: Komplikovan formular sa previše obaveznih polja." : "Risk: High-friction forms or missing phone triggers."
    },
    {
      id: 6,
      icon: <Repeat className="w-5 h-5 text-purple-400" />,
      stage: isSr ? "07. Lojalnost" : "07. Retention",
      title: isSr ? "Klijent & Preporuka" : "Client & Advocacy",
      desc: isSr 
        ? "Zadovoljan klijent koji se vraća i preporučuje vaš biznis drugima, zatvarajući krug organskog rasta."
        : "A delighted client who returns and refers peers, fueling compounding organic business growth.",
      friction: isSr ? "Cilj: Sistem koji olakšava kontinuiranu saradnju." : "Goal: Systems facilitating effortless repeat business."
    }
  ];

  return (
    <section id="how-i-think" className="py-20 px-4 sm:px-6 relative bg-slate-950 text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Strateški Pristup" : "Strategic Thinking"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            {isSr ? "Ne gledam samo sajt. Gledam ceo put do klijenta." : "I don't look at pages in isolation. I engineer the entire customer journey."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {isSr
              ? "Ako problem nastaje na jednom od ovih koraka, lepši dizajn sam po sebi neće ga rešiti. Zato analiziram celokupan tok pre bilo kakvog rada na kodu."
              : "If friction occurs at any single step in this journey, visual polish alone will not fix your business. That's why I diagnose the entire funnel before touching code."}
          </p>
        </div>

        {/* Journey Steps Horizontal Interactive Trail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{step.stage.split(".")[0]}</span>
                  </div>
                  <span className="text-xs font-bold text-white block leading-tight line-clamp-1">
                    {step.stage.split(".")[1]}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 mt-2 block font-medium">
                  {step.title.split("/")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Diagnostic Box */}
        {steps[activeStep] && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
          >
            <div className="lg:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                <span>{steps[activeStep].stage}</span>
                <span>•</span>
                <span>{steps[activeStep].title}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                <Info size={14} />
                <span>{isSr ? "Fokus Konsultanta" : "Consultant Insight"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {steps[activeStep].friction}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
