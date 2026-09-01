import React, { useState } from "react";
import { Search, Star, Camera, DollarSign, CalendarCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Slide02Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Slide02YourCustomer({ onNext: _onNext, onPrev: _onPrev }: Slide02Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [selectedSignal, setSelectedSignal] = useState<string>("reviews");

  const signals = [
    {
      id: "reviews",
      label: isSr ? "Ocena & Recenzije" : "Ratings & Reviews",
      icon: Star,
      value: isSr ? "4.9 ★ (140+ ocena)" : "4.9 ★ (140+ reviews)",
      desc: isSr ? "Kupac prvo eliminiše opcije bez pozitivnih preporuka." : "The buyer immediately filters out businesses without strong proof."
    },
    {
      id: "photos",
      label: isSr ? "Fotografije radova" : "Photos & Portfolio",
      icon: Camera,
      value: isSr ? "Stvarni radovi i enterijer" : "Real results & interior",
      desc: isSr ? "Vizuelni dokaz kvaliteta pre nego što donese odluku." : "Visual validation of quality before reaching out."
    },
    {
      id: "pricing",
      label: isSr ? "Cenovnik & Usluge" : "Pricing & Offer",
      icon: DollarSign,
      value: isSr ? "Jasno istaknut cenovnik" : "Clear transparent pricing",
      desc: isSr ? "Ako cene nisu jasne, posetilac odlazi kod konkurencije." : "Hidden pricing creates friction and drives them away."
    },
    {
      id: "booking",
      label: isSr ? "Zakazivanje & Poziv" : "Booking & Contact",
      icon: CalendarCheck,
      value: isSr ? "1-klik poziv / termin" : "1-tap booking or call",
      desc: isSr ? "Pobeđuje biznis koji mu omogući najbrži sledeći korak." : "The business with the easiest action path wins."
    }
  ];

  const activeSig = signals.find((s) => s.id === selectedSignal) || signals[0];

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-y-contain flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 md:px-12 pt-14 sm:pt-16 pb-20 sm:pb-24 relative bg-slate-900 dark:bg-[#05070c] text-white">
      
      {/* Main Slide Content */}
      <div className="w-full max-w-5xl mx-auto my-auto z-10 space-y-4 sm:space-y-5 py-2">
        
        <div className="text-center space-y-1 sm:space-y-2 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            {isSr ? "Zamislite da ste vaš klijent." : "Imagine you are your own client."}
          </h2>
          <p className="text-xs sm:text-base text-slate-300">
            {isSr 
              ? "Tražite uslugu na telefonu. Imate nekoliko opcija. Koga ćete izabrati?" 
              : "You search for a service on your phone. You have several options. Who do you choose?"}
          </p>
        </div>

        {/* Discovery Simulation Deck Panel */}
        <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-white/10 shadow-2xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-blue-400">
              <Search className="w-3.5 h-3.5" />
              <span>{isSr ? "Pretraga: „frizerski salon Čačak”" : "Search: “hair salon downtown”"}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 hidden xs:inline">
              {isSr ? "Kupac upoređuje signale" : "Buyer compares signals"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {signals.map((sig) => {
              const Icon = sig.icon;
              const isSelected = selectedSignal === sig.id;
              return (
                <div
                  key={sig.id}
                  onClick={() => setSelectedSignal(sig.id)}
                  className={`p-3 rounded-xl sm:rounded-2xl border transition-all cursor-pointer space-y-1 ${
                    isSelected 
                      ? "bg-blue-600/20 border-blue-500 shadow-md shadow-blue-500/10" 
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">{sig.label}</span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-400" : "text-slate-500"}`} />
                  </div>
                  <div className="text-xs sm:text-sm font-display font-bold text-white">
                    {sig.value}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Signal Context Display */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300">
            <span className="font-bold text-blue-400">{activeSig.label}: </span>
            <span>{activeSig.desc}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
