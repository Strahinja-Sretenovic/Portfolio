import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Star, 
  Image as ImageIcon, 
  Scissors, 
  Calendar, 
  Phone, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act2BuyerPerspective() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeTab, setActiveTab] = useState<number>(0);

  const discoverySteps = [
    {
      id: "search",
      label: isSr ? "1. Pretraga" : "1. Search",
      icon: Search,
      title: isSr ? "Ukucava pretragu na telefonu" : "Types a query on their phone",
      example: isSr ? "„frizerski salon Čačak”" : "“hair salon downtown”",
      detail: isSr 
        ? "Kupac ima konkretnu potrebu i traži najbliže i najbolje ocenjeno rešenje u svom gradu." 
        : "The client has an immediate need and looks for the best-rated option nearby."
    },
    {
      id: "compare",
      label: isSr ? "2. Ocene & Utisci" : "2. Ratings & Reviews",
      icon: Star,
      title: isSr ? "Gleda recenzije i preporuke" : "Checks reviews & reputation",
      example: isSr ? "4.9 ★ (140+ recenzija)" : "4.9 ★ (140+ reviews)",
      detail: isSr 
        ? "Prvi filter je poverenje. Ako profil nema sveže ocene ili ima loše komentare, prelazi na sledeći." 
        : "Trust is the first filter. Without recent positive feedback, they skip to the next listing."
    },
    {
      id: "photos",
      label: isSr ? "3. Fotografije & Ambijent" : "3. Photos & Proof",
      icon: ImageIcon,
      title: isSr ? "Proverava stvarne fotografije radova" : "Examines real photo evidence",
      example: isSr ? "Stvarni radovi, enterijer i atmosfera" : "Real results & interior",
      detail: isSr 
        ? "Ljudi žele da vide nivo stručnosti i higijene pre nego što uopšte posete salon." 
        : "People want to confirm quality and atmosphere before booking an appointment."
    },
    {
      id: "offer",
      label: isSr ? "4. Cenovnik & Usluge" : "4. Offer & Pricing",
      icon: Scissors,
      title: isSr ? "Traži jasne cene i dužinu tretmana" : "Searches for clear pricing",
      example: isSr ? "Jasno istaknut cenovnik bez iznenađenja" : "Transparent transparent pricing",
      detail: isSr 
        ? "Ako ne može lako da vidi cene ili šta usluga tačno uključuje, nastaje trenje i odustajanje." 
        : "Unclear pricing causes friction and prompts them to look elsewhere."
    },
    {
      id: "action",
      label: isSr ? "5. Zakazivanje / Poziv" : "5. Booking / Call",
      icon: Calendar,
      title: isSr ? "Pravi sledeći korak za 10 sekundi" : "Takes action in 10 seconds",
      example: isSr ? "Dugme za poziv ili online termin" : "Direct call or instant appointment",
      detail: isSr 
        ? "Bira salon koji mu omogućava najjednostavniji i najbrži način da zakaže termin." 
        : "They choose the business that offers the lowest friction to book right now."
    }
  ];

  return (
    <section 
      id="act-2-perspective"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-slate-900 dark:bg-[#05070c] text-white border-t border-slate-800 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 02 • PERSPEKTIVA VAŠEG KUPCA
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            {isSr ? "Zamislite da ste vaš klijent." : "Imagine you are your own client."}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            {isSr 
              ? "Uzmimo primer lokalnog uslužnog biznisa: kako neko danas bira frizerski salon?" 
              : "Let's take a real local service business: how does someone choose a salon today?"}
          </p>
        </div>

        {/* Educational Interactive Discovery Simulation */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-white/10 shadow-2xl space-y-8">
          
          {/* Step Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-6">
            {discoverySteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
            
            {/* Visual Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest font-bold">
                  {isSr ? "Simulacija odluke" : "Decision simulation"}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {discoverySteps[activeTab].id.toUpperCase()}
                </span>
              </div>

              {/* Mock Screen Element */}
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 border-b border-white/10 pb-2">
                  <Search className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-white font-medium">{discoverySteps[activeTab].example}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Frizerski Salon Stevan</span>
                    <span className="text-amber-400 font-mono">5.0 ★ (120+)</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Gospodar Jovanova, Čačak • Otvoreno do 20:00
                  </p>
                  <div className="flex gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                      Cenovnik online
                    </span>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      Direktan poziv
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-mono text-center">
                {isSr ? "Edukativni primer toka odluke" : "Educational decision pathway"}
              </div>
            </div>

            {/* Content Box */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold">
                {discoverySteps[activeTab].label}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                {discoverySteps[activeTab].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {discoverySteps[activeTab].detail}
              </p>
            </div>

          </div>

        </div>

        {/* Core Sales Insight Punchlines */}
        <div className="text-center space-y-4 pt-6 max-w-2xl mx-auto">
          <div className="text-2xl sm:text-4xl font-display font-black text-white">
            {isSr ? "Vaš potencijalni klijent već bira." : "Your potential client is already choosing."}
          </div>
          
          <div className="text-xl sm:text-2xl font-display font-bold text-blue-400">
            {isSr ? "A još nije ni razgovarao sa vama." : "And they haven't even spoken to you yet."}
          </div>
        </div>

      </div>
    </section>
  );
}
