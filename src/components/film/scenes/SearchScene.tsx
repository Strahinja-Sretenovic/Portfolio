import { Star, MapPin, Sparkles, Clock, Compass } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface SearchSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function SearchScene({ progress: norm }: SearchSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const searchResults = [
    {
      id: "result-1",
      name: "Salon Elegance",
      rating: "4.8",
      reviews: "124",
      distance: "350m",
      statusSr: "Otvoreno • Zatvara se u 20:00",
      statusEn: "Open • Closes at 20:00",
      tagSr: "Google profil",
      tagEn: "Google Profile",
      isTarget: false
    },
    {
      id: "result-2",
      name: isSr ? "Frizerski Salon Stevan" : "Stevan Hair Studio",
      rating: "4.9",
      reviews: "218",
      distance: "420m",
      statusSr: "Online zakazivanje • 100/100 brzina",
      statusEn: "Online Booking • Instant Speed",
      tagSr: "Izbor klijenta",
      tagEn: "Client Pick",
      isTarget: true
    },
    {
      id: "result-3",
      name: "Studio Style & Beauty",
      rating: "4.3",
      reviews: "48",
      distance: "750m",
      statusSr: "Nema online cenovnika",
      statusEn: "No online pricing",
      tagSr: "Lokalni profil",
      tagEn: "Local Profile",
      isTarget: false
    }
  ];

  // Current single decision factor label
  let factorLabelSr = "Gleda ocene.";
  let factorLabelEn = "Looking at reviews.";
  let activeFocusIndex = 0;

  if (norm >= 0.18 && norm < 0.36) {
    factorLabelSr = "Gleda rad.";
    factorLabelEn = "Looking at previous work.";
    activeFocusIndex = 1;
  } else if (norm >= 0.36 && norm < 0.54) {
    factorLabelSr = "Gleda gde ste.";
    factorLabelEn = "Looking at location.";
    activeFocusIndex = 2;
  } else if (norm >= 0.54 && norm < 0.72) {
    factorLabelSr = "Pokušava da razume šta nudite.";
    factorLabelEn = "Trying to understand the offer.";
    activeFocusIndex = 1;
  } else if (norm >= 0.72 && norm < 0.86) {
    factorLabelSr = "Traži najlakši sledeći korak.";
    factorLabelEn = "Looking for the easiest next step.";
    activeFocusIndex = 1;
  } else if (norm >= 0.86) {
    factorLabelSr = "Vaš klijent već bira.";
    factorLabelEn = "Your client is already choosing.";
    activeFocusIndex = 1;
  }

  const isFinalChoice = norm >= 0.86;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 select-none pointer-events-none">
      
      {/* Top Single Focal Point Headline */}
      <div 
        className="absolute top-16 sm:top-20 max-w-4xl text-center space-y-2 px-4"
        style={{
          transform: `translateY(${norm < 0.5 ? 0 : -8}px)`
        }}
      >
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "02 / TRENUTAK ODLUKE" : "02 / THE MOMENT OF CHOICE"}
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isSr ? factorLabelSr : factorLabelEn}
        </h2>
        {isFinalChoice && (
          <p className="text-sm sm:text-xl font-mono text-blue-600 dark:text-blue-400 font-bold pt-1">
            {isSr ? "A još nije ni otvorio vaš sajt." : "And they haven't even opened your website yet."}
          </p>
        )}
      </div>

      {/* The 3 Materialized Search Cards */}
      <div 
        className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-4 mt-16"
        style={{
          transform: `perspective(1000px) rotateX(${isFinalChoice ? 4 : 0}deg) scale(${isFinalChoice ? 1.01 : 0.99})`
        }}
      >
        {searchResults.map((res, i) => {
          const isCurrentActive = activeFocusIndex === i;
          const isWinner = res.isTarget;

          // Spread offset when comparing
          const spreadX = isFinalChoice ? (i - 1) * 20 : 0;

          // Fade non-winners on final selection
          const itemOpacity = isFinalChoice && !isWinner ? 0.35 : isCurrentActive ? 1 : 0.65;

          return (
            <div
              key={res.id}
              className={`w-full md:w-80 p-4 sm:p-5 rounded-2xl border relative flex flex-col justify-between ${
                isCurrentActive
                  ? "bg-white dark:bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/20 ring-1 ring-blue-500/30 scale-105 z-20"
                  : "bg-white dark:bg-slate-900/90 border-slate-200 dark:border-white/10 z-10 scale-95"
              }`}
              style={{
                transform: `translateX(${spreadX}px)`,
                opacity: itemOpacity
              }}
            >
              <div className="space-y-2.5">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {isSr ? res.tagSr : res.tagEn}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star size={12} className="fill-amber-500" />
                    <span>{res.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({res.reviews})</span>
                  </div>
                </div>

                {/* Business Name */}
                <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>{res.name}</span>
                  {isWinner && <Sparkles size={14} className="text-blue-500" />}
                </div>

                {/* Status & Distance */}
                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-slate-400" />
                    <span>{res.distance}</span>
                    <span>•</span>
                    <Clock size={11} className="text-slate-400" />
                    <span>{isSr ? res.statusSr : res.statusEn}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Mock */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{isSr ? "Pregled profila" : "View Profile"}</span>
                <span className={`px-2 py-1 rounded-md text-[11px] font-bold ${
                  isCurrentActive ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                }`}>
                  {isSr ? "Izaberi →" : "Select →"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Subtitle Insight */}
      <div 
        className="absolute bottom-10 text-center max-w-xl transition-all duration-300"
        style={{
          opacity: norm > 0.20 && norm < 0.88 ? 1 : 0,
          transform: `translateY(${norm > 0.20 ? 0 : 8}px)`
        }}
      >
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
          {isSr 
            ? "Odluka traje manje od 5 sekundi. Pobeđuje onaj ko uliva instant poverenje i pruža najlakši sledeći korak." 
            : "The decision takes under 5 seconds. Whoever inspires instant trust and frictionless booking wins."}
        </p>
      </div>
    </div>
  );
}
