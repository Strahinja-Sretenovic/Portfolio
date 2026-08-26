import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Zap,
  Globe,
  ShoppingCart,
  Cpu,
  Gauge
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function ProjectEstimator() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [projectType, setProjectType] = useState<string>("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["seo", "mobile"]);

  const projectTypes = [
    {
      id: "website",
      icon: <Globe size={20} />,
      title: isSr ? "Prezentacioni Web Sajt" : "Business Website",
      desc: isSr ? "Za firme, ordinacije, salone i usluge" : "For companies, clinics & services",
      time: isSr ? "5–10 dana" : "5–10 days"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart size={20} />,
      title: isSr ? "Online Prodavnica" : "E-Commerce Store",
      desc: isSr ? "Online prodaja, plaćanje karticama" : "Online sales & payment checkout",
      time: isSr ? "10–20 dana" : "10–20 days"
    },
    {
      id: "app",
      icon: <Cpu size={20} />,
      title: isSr ? "Web Aplikacija po Meri" : "Custom Web App",
      desc: isSr ? "Automatizacija, portali i CRM" : "Automation, portals & CRM",
      time: isSr ? "14–30 dana" : "14–30 days"
    },
    {
      id: "redesign",
      icon: <Gauge size={20} />,
      title: isSr ? "Redizajn & Ubrzavanje" : "Redesign & Speed Up",
      desc: isSr ? "Modernizacija i 100/100 PageSpeed" : "Modern UI & 100/100 PageSpeed",
      time: isSr ? "4–8 dana" : "4–8 days"
    }
  ];

  const featuresList = [
    {
      id: "seo",
      label: isSr ? "Google SEO Optimizacija za 1. stranu" : "Top-Tier Google SEO Setup",
      includedByDefault: true
    },
    {
      id: "mobile",
      label: isSr ? "100% Mobilna Prilagođenost (Responsive UX)" : "100% Mobile-First Experience",
      includedByDefault: true
    },
    {
      id: "booking",
      label: isSr ? "Sistem za Online Zakazivanje / Rezervacije" : "Online Booking / Reservation System"
    },
    {
      id: "whatsapp",
      label: isSr ? "Direktno WhatsApp / Viber Dugme za Brz Kontakt" : "Instant WhatsApp / Phone Chat Widget"
    },
    {
      id: "multilang",
      label: isSr ? "Višejezičnost (Srpski + Engleski / Nemački)" : "Multi-Language Localization"
    },
    {
      id: "payment",
      label: isSr ? "Integracija Kartičnog Plaćanja (Visa/Master)" : "Credit Card Gateway Integration"
    },
    {
      id: "speed",
      label: isSr ? "Maksimalna Brzina (<0.5s učitavanje)" : "High-Performance Speed Optimization"
    }
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  const handleRequestClick = () => {
    const featureLabels = selectedFeatures
      .map((fId) => featuresList.find((f) => f.id === fId)?.label)
      .filter(Boolean)
      .join(", ");
    
    const message = isSr 
      ? `Zdravo SSolutions, zainteresovan sam za: ${selectedTypeObj.title}. Odabrane stavke: ${featureLabels}.`
      : `Hello SSolutions, I am interested in: ${selectedTypeObj.title}. Selected features: ${featureLabels}.`;

    const messageInput = document.getElementById("contact-message") as HTMLTextAreaElement | null;
    if (messageInput) {
      messageInput.value = message;
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-white dark:bg-[#0c0c0c] border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title={isSr ? "Interaktivni Konfigurator Vašeg Projekta" : "Interactive Project Solution Finder"} 
          subtitle={isSr 
            ? "Izaberite šta vam je potrebno i dobijte trenutnu preporuku i besplatnu ponudu bez obaveza." 
            : "Select what you need to receive an instant tailored recommendation and quote without obligation."}
        />

        <div className="mt-12 bg-slate-50 dark:bg-[#141414] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
          {/* Step 1: Project Type Selection */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                {isSr ? "Izaberite tip digitalnog rešenja:" : "Select your digital solution type:"}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectTypes.map((type) => {
                const isSelected = projectType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-50/80 dark:bg-blue-600/10 border-blue-600 dark:border-blue-500 shadow-sm ring-2 ring-blue-500/20"
                        : "bg-white dark:bg-[#1a1a1a] border-slate-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className={`p-2.5 rounded-xl inline-flex mb-3 ${
                        isSelected ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                      }`}>
                        {type.icon}
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                        {type.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                        {type.desc}
                      </p>
                    </div>
                    <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-2">
                      <Clock size={13} />
                      <span>{type.time}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Desired Features Checklist */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                {isSr ? "Označite dodatne funkcije koje želite:" : "Choose desired business capabilities:"}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featuresList.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      isChecked 
                        ? "bg-white dark:bg-[#1a1a1a] border-blue-500 text-slate-900 dark:text-white shadow-2xs" 
                        : "bg-white/50 dark:bg-[#161616] border-slate-200/80 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? "bg-blue-600 text-white" : "border border-slate-300 dark:border-white/20"
                    }`}>
                      {isChecked && <Check size={13} className="stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{feat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary and Direct Action */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                {isSr ? "Vaša konfiguracija:" : "Selected Configuration:"}
              </div>
              <div className="text-lg font-display font-bold text-slate-900 dark:text-white">
                {selectedTypeObj.title} ({selectedFeatures.length} {isSr ? "funkcija" : "features"})
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-3">
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {isSr ? "Procenjen rok:" : "Est. timeline:"} {selectedTypeObj.time}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ShieldCheck size={13} />
                  {isSr ? "Fiksna cena & garancija" : "Fixed quote & warranty"}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleRequestClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles size={16} />
              <span>{isSr ? "Pošalji Upit za Ovu Konfiguraciju" : "Get Free Quote for this Setup"}</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
