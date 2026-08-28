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
      stage: isSr ? "01. Kanal" : "01. Discovery",
      title: isSr ? "Google / Instagram / preporuka" : "Google / Instagram / Referral",
      desc: isSr 
        ? "Kupac traži rešenje svog problema ili nailazi na vaš profil. Ako niste vidljivi ili vas nema gde traži, ceo proces se prekida pre nego što počne."
        : "Prospect looks for a solution. If you lack search or social presence where they look, the journey breaks before starting.",
      friction: isSr ? "Pitanje: Da li vas potencijalni kupac uopšte pronalazi?" : "Diagnostic: Can prospective clients actually discover you?"
    },
    {
      id: 1,
      icon: <Share2 className="w-5 h-5 text-cyan-400" />,
      stage: isSr ? "02. Utisak" : "02. First Touch",
      title: isSr ? "Prvi utisak" : "First Impression",
      desc: isSr 
        ? "Prvih 5 sekundi. Korisnik podsvesno procenjuje da li delujete profesionalno, sigurno i relevantno za njegov problem."
        : "The first 5 seconds. Visitors evaluate credibility, cleanliness, and whether you are trustworthy.",
      friction: isSr ? "Pitanje: Da li ulivate poverenje i delujete ozbiljno?" : "Diagnostic: Do you project immediate credibility and clarity?"
    },
    {
      id: 2,
      icon: <FileText className="w-5 h-5 text-indigo-400" />,
      stage: isSr ? "03. Relevancija" : "03. Offer Match",
      title: isSr ? "Da li nudite ono što mi treba?" : "Do you offer what I need?",
      desc: isSr 
        ? "Posetilac traži jasan odgovor: 'Da li ova firma rešava moj specifičan problem?'. Ako je ponuda nejasna, odmah napušta stranicu."
        : "The prospect checks if your services solve their exact situation. Vague wording leads to an immediate bounce.",
      friction: isSr ? "Pitanje: Da li je ponuda kristalno jasna bez nagađanja?" : "Diagnostic: Is the core service offering instantly obvious?"
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      stage: isSr ? "04. Poverenje" : "04. Trust",
      title: isSr ? "Mogu li da vam verujem?" : "Can I trust you?",
      desc: isSr 
        ? "Kupac traži dokaze: stvarne reference, primere radova, utiske drugih klijenata i objašnjenje kako radite."
        : "Prospect looks for proof: past client work, reviews, and a transparent explanation of how you operate.",
      friction: isSr ? "Pitanje: Postoje li opipljivi dokazi stručnosti i rezultata?" : "Diagnostic: Is there authentic proof backing up your claims?"
    },
    {
      id: 4,
      icon: <Scale className="w-5 h-5 text-amber-400" />,
      stage: isSr ? "05. Poređenje" : "05. Comparison",
      title: isSr ? "Poređenje sa konkurencijom" : "Comparing alternatives",
      desc: isSr 
        ? "Retko ko kupuje od prve opcije. Kupac upoređuje vas i konkurente — šta dobija, kako se komunicira i zašto bi izabrao vas."
        : "Buyers weigh alternatives. What makes your offer clearer, easier, or more reliable than others?",
      friction: isSr ? "Pitanje: Zašto bi kupac izabrao baš vas, a ne drugog?" : "Diagnostic: Is your unique differentiator evident?"
    },
    {
      id: 5,
      icon: <Info className="w-5 h-5 text-orange-400" />,
      stage: isSr ? "06. Odluka" : "06. Decision Info",
      title: isSr ? "Cena / informacije / dokaz" : "Pricing / Information / Proof",
      desc: isSr 
        ? "Kupcu su potrebne praktične informacije: raspon cena, rokovi, radno vreme, lokacija ili šta je tačno sledeći korak."
        : "Prospect needs clarity on practical details: pricing expectations, timeframes, or next steps.",
      friction: isSr ? "Pitanje: Ima li kupac dovoljno informacija da donese odluku?" : "Diagnostic: Are next steps and parameters crystal clear?"
    },
    {
      id: 6,
      icon: <PhoneCall className="w-5 h-5 text-rose-400" />,
      stage: isSr ? "07. Akcija" : "07. Action",
      title: isSr ? "Poziv / poruka / rezervacija / kupovina" : "Call / Message / Booking / Purchase",
      desc: isSr 
        ? "Trenutak konverzije. Formular, telefonski poziv, online zakazivanje ili kupovina moraju raditi bez ijedne nepotrebne prepreke."
        : "The moment of conversion. The form, direct call, or booking must be completely frictionless.",
      friction: isSr ? "Pitanje: Koliko je lako i jednostavno napraviti kontakt?" : "Diagnostic: Is contacting or booking effortless?"
    },
    {
      id: 7,
      icon: <UserCheck className="w-5 h-5 text-teal-400" />,
      stage: isSr ? "08. Klijent" : "08. Customer",
      title: isSr ? "Klijent i realizacija" : "Client Experience",
      desc: isSr 
        ? "Isporuka usluge i saradnja. Iskustvo klijenta potvrđuje da je doneo pravu odluku."
        : "Service delivery and execution, confirming the client made the right decision.",
      friction: isSr ? "Cilj: Profesionalno iskustvo koje opravdava očekivanja." : "Goal: Exceeding expectations through clean delivery."
    },
    {
      id: 8,
      icon: <Repeat className="w-5 h-5 text-purple-400" />,
      stage: isSr ? "09. Lojalnost" : "09. Advocacy",
      title: isSr ? "Ponovna kupovina / preporuka" : "Repeat business & Referrals",
      desc: isSr 
        ? "Zadovoljan klijent se vraća i preporučuje vas drugima, stvarajući stabilan organski rast."
        : "A satisfied client returns and recommends you, creating sustainable word-of-mouth growth.",
      friction: isSr ? "Cilj: Dugoročna vrednost i preporuke bez dodatnog marketinga." : "Goal: Organic compounding growth through delighted clients."
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
            {isSr ? "Ne gledam samo sajt. Gledam ceo put do klijenta." : "I don't look at pages in isolation. I examine the entire customer journey."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {isSr
              ? "Ako potencijalnog klijenta izgubite na jednom od ovih koraka, lepši dizajn sam po sebi neće rešiti problem. Zato analiziram ceo put, a ne samo pojedinačnu stranicu."
              : "If you lose a prospective client at any one of these stages, better design alone won't solve the problem. That's why I diagnose the entire journey, not just a single page."}
          </p>
        </div>

        {/* Journey Steps Responsive Flow Trail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2.5 mb-8">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{step.stage.split(".")[0]}</span>
                  </div>
                  <span className="text-xs font-bold text-white block leading-tight">
                    {step.stage.split(".")[1]}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 mt-2 block font-medium line-clamp-1">
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
