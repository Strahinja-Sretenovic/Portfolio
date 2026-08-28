import { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  MapPin, 
  Globe, 
  ListChecks, 
  Star, 
  HelpCircle, 
  CalendarCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2,
  Stethoscope,
  Scissors,
  Briefcase
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function AuditExample() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [activeNiche, setActiveNiche] = useState<"salon" | "clinic" | "b2b">("salon");

  const niches = {
    salon: {
      name: isSr ? "Lokalni Uslužni Biznis (npr. Frizerski / Beauty Salon)" : "Local Service (e.g. Hair & Beauty Salon)",
      icon: <Scissors size={16} />,
      query: isSr ? "„frizerski salon cene i zakazivanje“" : "“hair salon pricing & booking”",
      steps: [
        { label: isSr ? "Google Pretraga & Mape" : "Google Search & Maps", status: "ok", text: isSr ? "Kupac traži uslugu u blizini" : "User searches nearby" },
        { label: isSr ? "Google Profil & Ocene" : "Google Profile & Reviews", status: "ok", text: isSr ? "Vidi ocene i klikne na link ka sajtu" : "Checks reviews and taps website" },
        { label: isSr ? "Sajt / Landing Stranica" : "Website / Landing Page", status: "warning", text: isSr ? "Otvara se, ali nema istaknutog cenovnika" : "Opens, but no clear price list" },
        { label: isSr ? "Razumevanje Usluga" : "Service Clarity", status: "warning", text: isSr ? "Predugačak nepovezan tekst, nema slika radova" : "Dense text block, lacking photo proof" },
        { label: isSr ? "Zakazivanje Termina" : "Booking Friction", status: "danger", text: isSr ? "Piše samo: 'Zovite telefonom' (a sada je 22h)" : "Only says 'Call by phone' (at 10 PM)" },
      ],
      frictionSummary: isSr 
        ? "Kupac je hteo da zakaže termin u 22h. Pošto salon nema online kalendar niti transparentan cenovnik, kupac je otišao na Google i zakazao kod drugog salona."
        : "Prospect wanted to book at 10 PM. Because the business lacked self-serve scheduling and transparent pricing, the customer booked with a competitor.",
      consultantTakeaway: isSr
        ? "Ne bismo počeli pitanjem 'kakav dizajn želite?' Počeli bismo pitanjem 'koliko termina gubite jer ljudi ne mogu da zakažu van radnog vremena?'"
        : "We don't ask 'what color scheme do you like?' We ask 'how much revenue do you leak because clients cannot book after business hours?'"
    },
    clinic: {
      name: isSr ? "Specijalistička Ordinacija / Klinika" : "Specialist Medical Clinic",
      icon: <Stethoscope size={16} />,
      query: isSr ? "„implantologija zuba iskustva cene“" : "“dental implants cost & specialist”",
      steps: [
        { label: isSr ? "Google Pretraga" : "Google Search", status: "ok", text: isSr ? "Traženje rešenja za specifičan zdravstveni problem" : "Search for specialized high-ticket care" },
        { label: isSr ? "Namenska Stranica Usluge" : "Dedicated Landing Page", status: "warning", text: isSr ? "Sve usluge nagurane na jednu dugačku stranu" : "All services lumped into single page" },
        { label: isSr ? "Kredibilitet Doktora" : "Doctor Credentials", status: "warning", text: isSr ? "Nema biografije lekara niti dokaza o iskustvu" : "Missing doctor bios and certificates" },
        { label: isSr ? "FAQ & Odgovori na Strahove" : "Anxiety & FAQ Relief", status: "danger", text: isSr ? "Pacijent se plaši bola i cene, a nema odgovora" : "No pricing guide or pain-free guarantees" },
        { label: isSr ? "Prvi Korak / Konsultacija" : "1st Step Appointment", status: "warning", text: isSr ? "Prezahtevan formular sa 10 polja" : "Overly long 10-field contact form" },
      ],
      frictionSummary: isSr 
        ? "Pacijent traži skupu proceduru, ali zbog nedostatka dokaza o stručnosti i straha od skrivenih troškova napušta sajt bez poziva."
        : "Patient seeks high-value treatment, but due to lack of doctor authority and price transparency, bounces without scheduling an audit.",
      consultantTakeaway: isSr
        ? "Rešenje nije samo lep sajt, već strukturirane stranice za profitabilne usluge koje grade poverenje i uklanjaju strahove pacijenata."
        : "The solution isn't cosmetic design—it is dedicated high-intent service architectures engineered to build trust and eliminate fear."
    },
    b2b: {
      name: isSr ? "B2B Proizvodnja & Usluge" : "B2B Manufacturing & Logistics",
      icon: <Briefcase size={16} />,
      query: isSr ? "„industrijski nameštaj po meri za hotele“" : "“custom hotel furniture manufacturer”",
      steps: [
        { label: isSr ? "Pretraga / Preporuka" : "Search / Referral", status: "ok", text: isSr ? "Direktor nabavke proverava firmu pre slanja tendera" : "Procurement manager vets credibility" },
        { label: isSr ? "Portfolio & Reference" : "Case Studies & Proof", status: "danger", text: isSr ? "Samo male slike bez opisa šta je tačno urađeno" : "Thumbnails without scope or context" },
        { label: isSr ? "Kapaciteti & Standardi" : "Production Capacity", status: "warning", text: isSr ? "Nije navedeno sa kojim materijalima i rokovima radite" : "No technical specs, certifications or SLAs" },
        { label: isSr ? "Kvalifikacija Upita" : "Request for Proposal", status: "warning", text: isSr ? "Samo generički mail office@ bez jasnog upitnika" : "Only generic office@ email with no brief" },
        { label: isSr ? "Zaključenje Posla" : "Deal Closure", status: "danger", text: isSr ? "Klijent šalje upit konkurenciji koja deluje ozbiljnije" : "Lead chooses a competitor with proof" },
      ],
      frictionSummary: isSr 
        ? "Firma ima vrhunsku proizvodnju u stvarnosti, ali na internetu izgleda kao da radi u garaži. Posao od 20.000€ odlazi konkurenciji."
        : "The manufacturer has world-class facility, but digitally looks like a small amateur shop. A €20k contract defaults to a polished competitor.",
      consultantTakeaway: isSr
        ? "Digitalni nastup mora da oslikava stvaran nivo stručnosti firme i omogući B2B kupcu da brzo proceni pouzdanost partnera."
        : "Digital presence must accurately mirror real-world industrial excellence so enterprise buyers can vet credibility in seconds."
    }
  };

  const current = niches[activeNiche];

  return (
    <section id="audit-example" className="py-20 px-4 sm:px-6 relative bg-white dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Praktična Dijagnostika" : "Real-World Diagnostic"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Primer kako analiziramo jedan biznis" : "An example of how we audit a business"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Pogledajte kako izgleda analiza tipičnog puta klijenta i gde se najčešće gubi novac pre nego što uopšte progovorimo o dizajnu."
              : "Here is how we diagnose the customer journey and locate where revenue leaks before writing a single line of code."}
          </p>
        </div>

        {/* Niche Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {(["salon", "clinic", "b2b"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveNiche(key)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeNiche === key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 border border-blue-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {niches[key].icon}
              <span>{niches[key].name.split("(")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Interactive Audit Diagnostic Dashboard */}
        <motion.div
          key={activeNiche}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-9 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-8"
        >
          {/* Diagnostic Context Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                {isSr ? "Simulacija Puta Kupca" : "Customer Journey Simulation"}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {current.name}
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              {isSr ? "Početna pretraga: " : "Search Query: "}<span className="text-blue-400 font-semibold">{current.query}</span>
            </div>
          </div>

          {/* Friction Steps Chain */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              {isSr ? "Gde nastaje prekid lanca (Tačke Odustajanja):" : "Where Friction Breaks The Chain:"}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {current.steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border flex flex-col justify-between ${
                    step.status === "danger"
                      ? "bg-rose-950/40 border-rose-500/40"
                      : step.status === "warning"
                      ? "bg-amber-950/30 border-amber-500/40"
                      : "bg-slate-900 border-slate-800"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-slate-400">Korak 0{idx + 1}</span>
                      {step.status === "danger" && <span className="text-[10px] font-bold text-rose-400 px-1.5 py-0.5 rounded bg-rose-500/20">Prekid!</span>}
                      {step.status === "warning" && <span className="text-[10px] font-bold text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/20">Frikcija</span>}
                      {step.status === "ok" && <span className="text-[10px] font-bold text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/20">OK</span>}
                    </div>
                    <div className="text-xs font-bold text-white mb-1">{step.label}</div>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-2 leading-relaxed">{step.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Friction Summary & Consultant Takeaway Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider font-mono">
                <AlertTriangle size={15} />
                <span>{isSr ? "Posledica po poslovanje" : "Commercial Consequence"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.frictionSummary}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">
                <CheckCircle2 size={15} />
                <span>{isSr ? "Konsultantski zaključak" : "Consultant Takeaway"}</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed font-medium">
                {current.consultantTakeaway}
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
