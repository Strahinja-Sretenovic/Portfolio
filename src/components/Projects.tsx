import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Check,
  Building2,
  Stethoscope,
  Scissors,
  Layers
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";
import { trackProjectClick } from "../utils/analytics";

export function Projects() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeTab, setActiveTab] = useState<string>("case-study-1");

  const caseStudies = [
    {
      id: "case-study-1",
      client: "Dental Excellence — Specijalistička Ordinacija",
      industry: isSr ? "Zdravstvo & Stomatologija" : "Healthcare & Dental Clinic",
      challenge: isSr 
        ? "Imali su vizuelno lep WordPress sajt, ali pacijenti su zvali samo po preporuci. Na Google-u su bili nevidljivi, a telefonska linija je bila blokirana stalnim pitanjima o cenama i slobodnim terminima."
        : "Had an existing WordPress site, but new patients came strictly via word-of-mouth. Invisible on Google search, and phone lines were clogged answering repetitive price questions.",
      analysis: isSr 
        ? "Korisnici koji na mobilnom traže zubara žele da vide 3 stvari za 10 sekundi: cene ključnih usluga, ko ih leči i slobodne termine. Stari sajt nije imao jasno istaknute cene i nije imao mobilno zakazivanje."
        : "Mobile users seeking a dentist look for 3 facts within 10 seconds: price range, doctor credentials, and open appointment slots. The old site buried prices and lacked online booking.",
      strategy: isSr 
        ? "Reorganizacija arhitekture: izdvojene namenske stranice za najprofitabilnije usluge (implantologija, protetika), postavljen transparentan cenovni vodič i integrisan 1-klik sistem zakazivanja."
        : "Information restructuring: dedicated landing sections for high-margin procedures, transparent price expectations, and a 1-click booking calendar.",
      uxDecisions: isSr
        ? "Mobilni fokus: telefon i zakazivanje fiksirani na dnu ekrana. Formular skraćen sa 8 polja na samo 3 (ime, telefon, željeni termin)."
        : "Mobile-first: sticky bottom contact bar. Scheduling form reduced from 8 input fields to just 3 (name, phone, preferred slot).",
      solution: isSr 
        ? "Brzo TypeScript web rešenje (<0.5s), integrisani SMS podsetnici za zakazane termine i lokalni Google Schema mikro-podaci za pozicioniranje u regionu."
        : "Ultra-fast custom TypeScript portal (<0.5s load), automated patient SMS reminders, and rich LocalBusiness Schema markup for top local rankings.",
      result: isSr 
        ? "Preko 60 novih online zakazivanja mesečno, smanjenje nedolazaka na termine za 45% i stabilna #1 pozicija na lokalnoj Google pretrazi."
        : "60+ qualified online appointments per month, 45% reduction in appointment no-shows, and top rank on Google Maps pack.",
      nextSteps: isSr
        ? "Sledeći korak: uvođenje automatskog upitnika za pripremu pacijenta pre prvog pregleda i digitalne ankete za prikupljanje Google recenzija nakon intervencije."
        : "Next iteration: introducing an automated pre-visit patient questionnaire and post-treatment Google review feedback triggers.",
      metrics: [
        { label: isSr ? "Google Pozicija" : "Google Search", value: "#1", note: isSr ? "u lokalnom regionu" : "in target region" },
        { label: isSr ? "Smanjenje Nedolazaka" : "No-Shows", value: "-45%", note: isSr ? "putem SMS podsetnika" : "via automated SMS" },
        { label: isSr ? "Novi Upiti Mesečno" : "New Bookings", value: "+60", note: isSr ? "direktno sa sajta" : "direct inbound" }
      ],
      tags: ["UX Arhitektura", "Sistem Zakazivanja", "SMS Automatizacija", "Lokalni SEO"]
    },
    {
      id: "case-study-2",
      client: "Nordic Living — Proizvodnja & Salon Nameštaja",
      industry: isSr ? "E-Commerce & Proizvodnja" : "E-Commerce & Manufacturing",
      challenge: isSr 
        ? "Prodavali su isključivo preko Instagram poruka. Gubitak ogromnog broja sati na slanje kataloga, proveru dimenzija i ručno pisanje adresa za kurirsku službu."
        : "Selling exclusively through Instagram direct messages. Wasting hours sending PDF catalogs, answering dimension queries, and manually filling courier slips.",
      analysis: isSr 
        ? "Kupci su odustajali jer nisu mogli odmah da vide cenu isporuke i mogućnost odloženog plaćanja. Takođe, niko nije pratio gde kupci napuštaju proces kupovine."
        : "Buyers dropped off due to lack of transparent delivery calculations and installment payment info. No analytics tracked checkout friction.",
      strategy: isSr 
        ? "Kreiranje prodavnice fokusirane na uklanjanje prepreka: 2-step checkout, kalkulator dimenzija i automatska generacija kurirskih naloga."
        : "Frictionless store architecture: 2-step checkout, dimension guide, and automated API courier dispatch.",
      uxDecisions: isSr
        ? "Eliminacija obavezne registracije, automatsko popunjavanje adrese i jasan vizuelni pregled troškova dostave pre unosa kartice."
        : "Guest checkout by default, address autofill, and transparent delivery costs displayed before payment step.",
      solution: isSr 
        ? "Namenski e-commerce sistem sa integrisanim platnim karticama banaka, automatskom štampom adresnica za PostExpress i GA4 praćenjem korpe."
        : "Custom e-commerce infrastructure with bank card integration, automated courier label generation, and full GA4 checkout funnel telemetry.",
      result: isSr 
        ? "Ušteda preko 2.5 sata ručnog rada svakog dana, +38% veća prosečna vrednost porudžbine i 0 napora oko kurirskih pošiljki."
        : "Over 2.5 hours saved daily on manual order entry, +38% increase in average order value, and instant automated shipping.",
      nextSteps: isSr
        ? "Sledeći korak: uvođenje napuštene korpe (abandoned cart) automatizacije putem email-a i kalkulatora mesečnih rata za veće kupovine."
        : "Next iteration: introducing automated abandoned cart recovery sequences and an interactive monthly installment simulator.",
      metrics: [
        { label: isSr ? "Ušteda Vremena" : "Time Saved", value: "2.5h/dan", note: isSr ? "u administraciji" : "manual admin eliminated" },
        { label: isSr ? "Rast Prodaje" : "Sales Growth", value: "+38%", note: isSr ? "kroz 2-step checkout" : "via simplified checkout" },
        { label: isSr ? "Brzina Učitavanja" : "Load Time", value: "0.5s", note: isSr ? "trenutno otvaranje" : "instant mobile speed" }
      ],
      tags: ["E-Commerce", "Kartično Plaćanje", "Kuriri API", "Automatizacija"]
    },
    {
      id: "case-study-3",
      client: "Prestige Rent-A-Car — Flota & Najam Vozila",
      industry: isSr ? "Uslužne Delatnosti & Rent-a-Car" : "Automotive & Car Rental",
      challenge: isSr 
        ? "Stari sajt je bio samo statička galerija slika auta. Klijenti su morali da zovu telefonom za svaku proveru raspoloživosti, što je dovodilo do preklapanja rezervacija."
        : "Legacy website was a static photo gallery. Customers had to call for availability checks, leading to booking conflicts and lost revenue during peak hours.",
      analysis: isSr 
        ? "Strani turisti i poslovni klijenti traže i bukiraju auto kasno uveče kada kancelarija ne radi. Zbog nedostatka live rezervacije, gubili su 40% potencijalnih najmova."
        : "International travelers and business clients book after business hours. Without a live booking engine, 40% of potential rentals went to competitors.",
      strategy: isSr 
        ? "Razvoj interaktivnog booking motora sa automatskim proračunom sezonskih cena, depozita i instant potvrdom na email/WhatsApp."
        : "Interactive rental engine with automated seasonal pricing, deposit rules, and instant confirmation via email/WhatsApp.",
      uxDecisions: isSr
        ? "Jednostavan filter flote po tipu menjača i kategoriji, transparentan kalkulator osiguranja i mogućnost preuzimanja na aerodromu u 2 klika."
        : "Intuitive transmission/category filters, transparent excess insurance toggle, and 2-click airport pickup option.",
      solution: isSr 
        ? "Web aplikacija sa kontrolnom tablom za menadžere (kalendar zauzetosti, servisni intervali vozila i automatsko kreiranje ugovora u PDF formatu)."
        : "Custom web app with fleet management dashboard, automated PDF rental agreements, and multi-currency calculation.",
      result: isSr 
        ? "85% svih rezervacija sada stiže automatski van radnog vremena, bez potrebe za telefonskim pozivima, uz 0 preklapanja termina."
        : "85% of bookings now occur automatically 24/7 without manual staff intervention, with zero scheduling errors.",
      nextSteps: isSr
        ? "Sledeći korak: povezivanje sa lokalnim hotelima i turističkim agencijama kroz partnerski API portal za automatsku proviziju."
        : "Next iteration: launching a localized B2B affiliate portal for partner hotels and travel agencies with automated commission attribution.",
      metrics: [
        { label: isSr ? "Automatski Najmovi" : "Automated Bookings", value: "85%", note: isSr ? "van radnog vremena" : "handled 24/7" },
        { label: isSr ? "Greške u Rasporedu" : "Double Bookings", value: "0", note: isSr ? "potpuna eliminacija" : "completely eliminated" },
        { label: isSr ? "Google PageSpeed" : "Speed Score", value: "100", note: isSr ? "maksimalna ocena" : "top mobile rating" }
      ],
      tags: ["Web Aplikacija", "Booking Motor", "Digitalni Ugovori", "Fleet Management"]
    }
  ];

  const currentStudy = caseStudies.find((s) => s.id === activeTab) || caseStudies[0];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative bg-slate-950 text-white border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>{isSr ? "Poslovne Studije Slučaja" : "Case Studies & Evidence"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            {isSr ? "Kako pretvaramo poslovne probleme u merljive rezultate" : "How we turn business challenges into measurable outcomes"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {isSr
              ? "Umesto generičkih slika ekrana, evo konkretnih primera kako razmišljamo: šta je bio stvarni problem, šta je analiza otkrila i šta se promenilo u poslovanju."
              : "Beyond visual screenshots, here is how we diagnose and solve real operational friction: problem, strategic insight, execution, and outcome."}
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => {
                setActiveTab(study.id);
                trackProjectClick({
                  projectName: study.client,
                  projectType: study.industry,
                  action: "view_case_study"
                });
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === study.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {study.client.split("—")[0].trim()}
            </button>
          ))}
        </div>

        {/* Active Case Study Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-7 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8"
          >
            {/* Header / Client Overview */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  {currentStudy.industry}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentStudy.client}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentStudy.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 text-xs font-medium border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Consulting Anatomy Grid (Problem → Analysis → Strategy → Solution → Result) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Problem */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block font-mono">
                  {isSr ? "01. Početni Problem" : "01. Initial Problem"}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentStudy.challenge}
                </p>
              </div>

              {/* Analysis */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-mono">
                  {isSr ? "02. Šta je Analiza Otkrila" : "02. Discovery Finding"}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentStudy.analysis}
                </p>
              </div>

              {/* Strategy & IA */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block font-mono">
                  {isSr ? "03. Strateška Odluka" : "03. Strategy & IA"}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentStudy.strategy}
                </p>
              </div>

              {/* UX Decisions */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block font-mono">
                  {isSr ? "04. UX Odluke & Tok" : "04. UX & Flow Design"}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentStudy.uxDecisions}
                </p>
              </div>

              {/* Technical Solution */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block font-mono">
                  {isSr ? "05. Tehničko Rešenje" : "05. Engineering Solution"}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentStudy.solution}
                </p>
              </div>

              {/* Measurable Result */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-slate-950 to-slate-950 border border-emerald-500/30 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block font-mono flex items-center gap-1.5">
                  <Check size={14} />
                  <span>{isSr ? "06. Stvarni Poslovni Rezultat" : "06. Measurable Outcome"}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {currentStudy.result}
                </p>
              </div>

              {/* What I would improve next (demonstrates ongoing thinking) */}
              <div className="lg:col-span-3 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block font-mono">
                  {isSr ? "07. Šta bih sledeće unapredio (Iterativno razmišljanje)" : "07. What I would improve next (Iterative mindset)"}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentStudy.nextSteps}
                </p>
              </div>

            </div>

            {/* Metrics Highlight Banner */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {currentStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-white">{m.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{m.note}</div>
                </div>
              ))}
            </div>

            {/* Case Study Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                {isSr 
                  ? "Želite sličnu analizu i rešenje za vaš biznis?" 
                  : "Want a similar strategic audit for your business?"}
              </p>

              <button
                onClick={() => scrollToTarget("#contact", 80)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>{isSr ? "Zakažite analizu vašeg slučaja" : "Book Your Case Assessment"}</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
