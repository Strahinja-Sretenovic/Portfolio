import React, { useState } from "react";
import { 
  Search, 
  Star, 
  Image as ImageIcon, 
  MapPin, 
  Scissors, 
  Calendar, 
  Phone,
  Eye,
  HelpCircle,
  ShieldCheck,
  Scale,
  ArrowRightCircle,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act2CustomerJourney() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeStep, setActiveStep] = useState<number>(0);

  const discoverySteps = [
    {
      id: "search",
      title: isSr ? "1. Pretraga na telefonu" : "1. Search on phone",
      example: isSr ? "„frizerski salon Čačak”" : "“hair salon downtown”",
      detail: isSr 
        ? "Kupac ima konkretnu potrebu i u nekoliko sekundi traži najbliže i najbolje opcije." 
        : "The customer has an immediate need and quickly searches for the best options."
    },
    {
      id: "reviews",
      title: isSr ? "2. Ocene & Iskustva" : "2. Ratings & Reviews",
      example: isSr ? "4.9 ★ (140+ ocena)" : "4.9 ★ (140+ reviews)",
      detail: isSr 
        ? "Prvi filter je poverenje. Ako profil nema ocene ili ima loše komentare, prelazi dalje." 
        : "Trust is the first filter. Without fresh positive reviews, they move on."
    },
    {
      id: "photos",
      title: isSr ? "3. Fotografije radova" : "3. Photos of work",
      example: isSr ? "Stvarni radovi, enterijer i atmosfera" : "Real results & salon interior",
      detail: isSr 
        ? "Kupac želi vizuelni dokaz kvaliteta i urednosti pre nego što donese odluku." 
        : "Visual proof of quality and atmosphere is required before choosing."
    },
    {
      id: "offer",
      title: isSr ? "4. Cenovnik & Usluge" : "4. Pricing & Offer",
      example: isSr ? "Jasno istaknut cenovnik po uslugama" : "Transparent service pricing",
      detail: isSr 
        ? "Ako ne može lako da vidi cene ili šta usluga tačno uključuje, nastaje odustajanje." 
        : "Unclear pricing causes hesitation and leads them to competitors."
    },
    {
      id: "booking",
      title: isSr ? "5. Zakazivanje / Poziv" : "5. Booking / Call",
      example: isSr ? "1-klik poziv ili online termin" : "1-tap call or instant appointment",
      detail: isSr 
        ? "Pobeđuje biznis koji mu omogući najjednostavniji i najbrži sledeći korak." 
        : "The business that provides the lowest friction to book wins the customer."
    }
  ];

  const journeyNodes = [
    { num: "01", title: isSr ? "PRONALAZI VAS" : "FINDS YOU", icon: Eye },
    { num: "02", title: isSr ? "RAZUME PONUDU" : "UNDERSTANDS OFFER", icon: HelpCircle },
    { num: "03", title: isSr ? "STIČE POVERENJE" : "BUILDS TRUST", icon: ShieldCheck },
    { num: "04", title: isSr ? "POREDI" : "COMPARES", icon: Scale },
    { num: "05", title: isSr ? "PRAVI SLEDEĆI KORAK" : "TAKES NEXT STEP", icon: ArrowRightCircle },
    { num: "06", title: isSr ? "POSTAJE KLIJENT" : "BECOMES CLIENT", icon: CheckCircle2 }
  ];

  const problemExamples = [
    isSr ? "Možda vas ne pronalazi." : "Maybe they don't find you.",
    isSr ? "Možda vas pronađe, ali ne razume ponudu." : "Maybe they find you, but don't understand the offer.",
    isSr ? "Možda razume ponudu, ali vam još ne veruje." : "Maybe they understand the offer, but don't trust you yet.",
    isSr ? "Možda želi da vas kontaktira, ali je sledeći korak komplikovan." : "Maybe they want to reach out, but the next step is friction-heavy.",
    isSr ? "Možda dobijate upite, ali vaš interni proces gubi vreme." : "Maybe you get inquiries, but your internal workflow wastes time."
  ];

  return (
    <section 
      id="act-2-the-customer-journey"
      className="relative py-24 sm:py-36 px-6 sm:px-12 bg-slate-900 dark:bg-[#05070c] text-white border-t border-slate-800 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Act 2 Opening */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            EDUKATIVNI PRIMER • AKT 02
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            {isSr ? "Zamislite da ste vaš klijent." : "Imagine you are your own client."}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            {isSr 
              ? "Tražite uslugu. Imate nekoliko opcija. Koga ćete izabrati?" 
              : "You are looking for a service. You have multiple options. Who do you choose?"}
          </p>
        </div>

        {/* Discovery Simulation Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/90 border border-white/10 shadow-2xl space-y-8">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
              {isSr ? "Primer pretrage: frizerski salon Čačak" : "Search example: Hair Salon Downtown"}
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              EDUKATIVNI SCENARIO
            </span>
          </div>

          {/* Stepped Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {discoverySteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                  activeStep === idx 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
                <Search className="w-3.5 h-3.5" />
                <span>{discoverySteps[activeStep].example}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {discoverySteps[activeStep].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {discoverySteps[activeStep].detail}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2 text-xs">
              <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                {isSr ? "Šta kupac ocenjuje u ovom trenutku:" : "What the buyer evaluates here:"}
              </div>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{isSr ? "Vidljivost i pozicija na pretrazi" : "Search visibility & ranking"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{isSr ? "Kvalitet i svežina recenzija" : "Freshness & quality of reviews"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{isSr ? "Jasnoća ponude i cene" : "Clarity of offer & pricing"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{isSr ? "Lakoća kontakta ili zakazivanja" : "Ease of contact & booking"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Discovery Takeaway */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
            {isSr ? "Vaš potencijalni klijent već bira." : "Your potential client is already choosing."}
          </h3>
          <p className="text-lg sm:text-xl font-display font-medium text-blue-400">
            {isSr ? "I to često pre nego što je razgovarao sa vama." : "And often before they have even spoken to you."}
          </p>
        </div>

        {/* Customer Journey Model: 6 Nodes */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              {isSr ? "Model puta kupca" : "Customer journey model"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {isSr ? "Put od pretrage do klijenta" : "The path from search to customer"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeyNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.num}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2"
                >
                  <span className="text-[10px] font-mono text-blue-400 font-bold">{node.num}</span>
                  <div className="w-8 h-8 mx-auto rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-display font-bold text-slate-200">
                    {node.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Break Point Takeaway */}
        <div className="p-8 sm:p-12 rounded-3xl bg-rose-950/30 border border-rose-500/30 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{isSr ? "PREKID PUTA" : "PATH DROP-OFF"}</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {isSr ? "Negde na ovom putu možete da ga izgubite." : "Somewhere along this path, you might lose them."}
          </h3>

          <p className="text-base sm:text-lg text-rose-200/80 max-w-xl mx-auto">
            {isSr 
              ? "Problem je što mesto na kojem ga gubite nije uvek očigledno." 
              : "The problem is that the drop-off point is not always obvious."}
          </p>
        </div>

        {/* Problem Possibilities List */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {problemExamples.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-sm sm:text-base text-slate-300 font-medium flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Climax Conclusion */}
        <div className="text-center py-6 space-y-4 max-w-2xl mx-auto border-t border-white/10 pt-10">
          <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {isSr ? "Zato „treba nam novi sajt“ još nije dijagnoza." : "That is why 'we need a new website' is not yet a diagnosis."}
          </h3>
          <p className="text-base sm:text-lg text-slate-400">
            {isSr 
              ? "Sajt je samo sredstvo. Moramo prvo utvrditi gde tačno nastaje prepreka." 
              : "A website is merely a medium. We must first identify the exact bottleneck."}
          </p>
        </div>

      </div>
    </section>
  );
}
