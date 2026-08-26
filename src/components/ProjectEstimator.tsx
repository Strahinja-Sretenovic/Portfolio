import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Zap,
  Globe,
  ShoppingCart,
  Cpu,
  Gauge,
  Building2,
  CalendarCheck,
  QrCode,
  Lock,
  Bot,
  CreditCard,
  Truck,
  MessageCircle,
  Search,
  Database,
  FileText,
  MapPin,
  Star,
  Mail,
  SlidersHorizontal,
  RefreshCcw
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../context/ToastContext";
import { trackEstimatorInteraction } from "../utils/analytics";

export function ProjectEstimator() {
  const { language } = useLanguage();
  const { success, info } = useToast();

  const isSr = language === "sr";

  const [projectType, setProjectType] = useState<string>("website");
  const [featureCategory, setFeatureCategory] = useState<string>("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "seo", 
    "mobile", 
    "whatsapp", 
    "cms"
  ]);

  // 8 High-Demand Digital Solution Types
  const projectTypes = [
    {
      id: "website",
      icon: <Globe size={22} />,
      badge: isSr ? "Najtraženije" : "Top Choice",
      title: isSr ? "Prezentacioni Web Sajt" : "Business Website",
      desc: isSr ? "Za firme, ordinacije, salone, advokate i agencije" : "For companies, clinics, salons & professional services",
      time: isSr ? "5–10 dana" : "5–10 days"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart size={22} />,
      badge: isSr ? "E-Commerce" : "Sales Engine",
      title: isSr ? "Online Prodavnica (Web Shop)" : "E-Commerce Web Shop",
      desc: isSr ? "Kartično plaćanje, zalihe, korpa i kurirske službe" : "Online checkout, inventory & automated courier shipping",
      time: isSr ? "10–20 dana" : "10–20 days"
    },
    {
      id: "booking",
      icon: <CalendarCheck size={22} />,
      badge: isSr ? "Automatizacija" : "Automation",
      title: isSr ? "Sistem za Online Zakazivanje" : "Booking & Scheduling Portal",
      desc: isSr ? "Kalendar termina, SMS/Email obaveštenja i depozit" : "Real-time calendar booking with automated SMS/email reminders",
      time: isSr ? "7–14 dana" : "7–14 days"
    },
    {
      id: "realestate",
      icon: <Building2 size={22} />,
      badge: isSr ? "Portali" : "Listings",
      title: isSr ? "Portal za Nekretnine / Oglase" : "Real Estate / Auto Directory",
      desc: isSr ? "Oglasi, napredna pretraga, filteri, mape i agenti" : "Listings, smart filters, interactive maps & agent profiles",
      time: isSr ? "12–25 dana" : "12–25 days"
    },
    {
      id: "app",
      icon: <Cpu size={22} />,
      badge: isSr ? "Softver po Meri" : "Custom Dev",
      title: isSr ? "Custom Web Aplikacija & CRM" : "Bespoke Web App & CRM",
      desc: isSr ? "B2B portali, vođenje poslovanja, ERP i baze podataka" : "B2B client portals, workflow automation, ERP & secure databases",
      time: isSr ? "15–35 dana" : "15–35 days"
    },
    {
      id: "saas",
      icon: <Lock size={22} />,
      badge: isSr ? "Pretplate" : "SaaS / Club",
      title: isSr ? "SaaS & Članska Platforma" : "SaaS & Membership Platform",
      desc: isSr ? "Kursevi, digitalni sadržaj, mesečne pretplate i članarine" : "Paid gated content, courses & recurring subscription billing",
      time: isSr ? "15–30 dana" : "15–30 days"
    },
    {
      id: "qr_menu",
      icon: <QrCode size={22} />,
      badge: isSr ? "Ugostiteljstvo" : "HoReCa",
      title: isSr ? "Digitalni QR Meni & Poručivanje" : "Digital QR Menu & Ordering",
      desc: isSr ? "Beskontaktni jelovnik za stolove, brza promena cena" : "Contactless table menu with instant price & item updates",
      time: isSr ? "4–8 dana" : "4–8 days"
    },
    {
      id: "redesign",
      icon: <Gauge size={22} />,
      badge: isSr ? "100/100 Brzina" : "Speed & SEO",
      title: isSr ? "Redizajn & Ubrzavanje Sajta" : "Website Redesign & Speedup",
      desc: isSr ? "Učitavanje < 0.6s, moderan izgled i rešavanje grešaka" : "Sub-second speed overhaul, modern UI & SEO remediation",
      time: isSr ? "4–8 dana" : "4–8 days"
    }
  ];

  // 16 Real-World, In-Demand Business Capabilities
  const featureCategories = [
    { id: "all", label: isSr ? "Sve Funkcije (16)" : "All Features (16)" },
    { id: "sales", label: isSr ? "Prodaja & Plaćanje" : "Sales & Payment" },
    { id: "marketing", label: isSr ? "SEO & Marketing" : "SEO & Growth" },
    { id: "comms", label: isSr ? "Komunikacija & AI" : "Comms & AI" },
    { id: "operations", label: isSr ? "Automatizacija & CMS" : "Operations & CMS" }
  ];

  const featuresList = [
    {
      id: "seo",
      category: "marketing",
      icon: <Search size={16} className="text-blue-500" />,
      label: isSr ? "Google SEO Optimizacija za 1. stranu" : "Top-Tier Google SEO Foundation",
      desc: isSr ? "Schema.org mikro-podaci, meta tagovi, sitemap i registracija na Google Search Console" : "Structured data, rich snippets, sitemap & Search Console indexing"
    },
    {
      id: "mobile",
      category: "marketing",
      icon: <Zap size={16} className="text-amber-500" />,
      label: isSr ? "100% Mobilni UX & Instant Brzina (<0.6s)" : "100% Mobile UX & Instant Speed (<0.6s)",
      desc: isSr ? "Savršen prikaz na svim telefonima i tabletima sa 100/100 Google PageSpeed ocenom" : "Flawless rendering on all phones and tablets with top speed scores"
    },
    {
      id: "whatsapp",
      category: "comms",
      icon: <MessageCircle size={16} className="text-emerald-500" />,
      label: isSr ? "Direktno WhatsApp / Viber 1-Klik Chat Dugme" : "Instant WhatsApp / Viber 1-Click Chat",
      desc: isSr ? "Posetioci jednim klikom otvaraju razgovor sa vama bez unosa broja" : "Visitors initiate direct chat with your team in one tap"
    },
    {
      id: "cms",
      category: "operations",
      icon: <SlidersHorizontal size={16} className="text-purple-500" />,
      label: isSr ? "Jednostavan CMS Panel (Samostalna Izmena Cena & Slika)" : "Intuitive CMS (Self-Manage Prices & Content)",
      desc: isSr ? "Menjajte cene, dodajte slike i radove bez plaćanja programera uz video obuku" : "Easily edit prices, services, and upload photos with zero coding"
    },
    {
      id: "booking",
      category: "sales",
      icon: <CalendarCheck size={16} className="text-indigo-500" />,
      label: isSr ? "Automatsko Online Zakazivanje sa SMS/Email Podsetnicima" : "Automated Booking with SMS/Email Reminders",
      desc: isSr ? "Klijenti sami biraju slobodan termin u realnom vremenu uz automatske potvrde" : "Clients pick available slots with synchronized calendar alerts"
    },
    {
      id: "payment",
      category: "sales",
      icon: <CreditCard size={16} className="text-emerald-600" />,
      label: isSr ? "Integracija Kartičnog Plaćanja (Visa, Mastercard, Stripe, PayPal)" : "Credit Card Gateway (Visa, Mastercard, Stripe, PayPal)",
      desc: isSr ? "Automatska i bezbedna naplata direktno na vaš poslovni račun" : "Secure automated card processing directly deposited to your bank"
    },
    {
      id: "courier",
      category: "sales",
      icon: <Truck size={16} className="text-orange-500" />,
      label: isSr ? "Povezivanje sa Kurirskim Službama (BEX, PostExpress, DExpress)" : "Courier Shipping API (Automated Parcel Labels)",
      desc: isSr ? "Automatsko generisanje i štampanje adresnica u 1 klik prilikom porudžbine" : "One-click shipping label generation and package tracking"
    },
    {
      id: "ai_bot",
      category: "comms",
      icon: <Bot size={16} className="text-cyan-500" />,
      label: isSr ? "AI Pametni Asistent / Chatbot za Kupce (24/7)" : "AI Smart Assistant / Chatbot (24/7)",
      desc: isSr ? "Veštačka inteligencija odgovara na česta pitanja kupaca, preporučuje proizvode i uzima kontakte" : "AI answers customer inquiries, recommends items & captures leads around the clock"
    },
    {
      id: "multilang",
      category: "marketing",
      icon: <Globe size={16} className="text-blue-600" />,
      label: isSr ? "Višejezičnost & Više Valuta (Srpski + Engleski / Nemački / EUR / RSD)" : "Multi-Language & Multi-Currency (EN, DE, RS, EUR)",
      desc: isSr ? "Jednostavno prebacivanje jezika i automatski obračun valuta za inostrano tržište" : "Seamless language switching and localized currency conversion"
    },
    {
      id: "b2b_portal",
      category: "operations",
      icon: <Database size={16} className="text-violet-500" />,
      label: isSr ? "B2B Veleprodajni Nalozi & Posebni Cenovnici za Partnere" : "B2B Wholesale Portal & Partner Tiers",
      desc: isSr ? "Registrovani partneri vide svoje rabate, istoriju kupovina i preuzimaju profakture" : "Custom tier pricing, purchase history, and automated pro-forma invoices"
    },
    {
      id: "maps",
      category: "marketing",
      icon: <MapPin size={16} className="text-rose-500" />,
      label: isSr ? "Interaktivna Google Mapa sa Prikazom Lokacija & Ruta" : "Interactive Google Maps with Multi-Location Routing",
      desc: isSr ? "Prikaz vaših objekata, radnog vremena i 1-klik navigacije za kupce" : "Custom branded map pins, open hours, and 1-tap driving directions"
    },
    {
      id: "invoicing",
      category: "operations",
      icon: <FileText size={16} className="text-slate-600 dark:text-slate-300" />,
      label: isSr ? "Automatsko Generisanje PDF Računa & Email Potvrda" : "Automated PDF Invoices & Email Confirmations",
      desc: isSr ? "Kupac i vi odmah dobijate uredan PDF račun i specifikaciju na email" : "Instant branded PDF invoice generation delivered upon order submission"
    },
    {
      id: "reviews",
      category: "marketing",
      icon: <Star size={16} className="text-amber-400" />,
      label: isSr ? "Sistem Verifikovanih Recenzija & Google Ocena" : "Verified Customer Reviews & Google Rating Badges",
      desc: isSr ? "Prikaz stvarnih utisaka kupaca i zvezdica za maksimalno poverenje" : "Social proof widgets displaying verified client ratings"
    },
    {
      id: "newsletter",
      category: "marketing",
      icon: <Mail size={16} className="text-teal-500" />,
      label: isSr ? "Pop-up / Popust za Nove Kupce & Prikupljanje Email-ova" : "Smart Exit Pop-up & Email Lead Magnet",
      desc: isSr ? "Povezivanje sa Mailchimp / Brevo servisima za automatske popuste i promocije" : "Lead capture forms synced with newsletter marketing automations"
    },
    {
      id: "erp_sync",
      category: "operations",
      icon: <RefreshCcw size={16} className="text-emerald-500" />,
      label: isSr ? "Sinhronizacija sa Knjigovodstvom & Magacinom u Realnom Vremenu" : "ERP / Accounting & Real-Time Inventory Sync",
      desc: isSr ? "Automatsko ažuriranje cena i stanja zaliha direktno iz vašeg programa" : "Automated bi-directional stock and pricing sync with internal ERP"
    },
    {
      id: "filters",
      category: "sales",
      icon: <Search size={16} className="text-blue-400" />,
      label: isSr ? "Pametna Pretraga & Detaljni Filteri (Cena, Boja, Veličina)" : "Smart Live Search & Multi-Attribute Filters",
      desc: isSr ? "Kupci u deliću sekunde pronalaze tačno ono što traže bez lutanja" : "Instant keyword search and multi-criteria attribute filtering"
    }
  ];

  const toggleFeature = (id: string) => {
    const isAdding = !selectedFeatures.includes(id);
    const featureItem = featuresList.find((f) => f.id === id);
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
    trackEstimatorInteraction({
      action: "toggle_feature",
      featureId: id,
      featureLabel: featureItem?.label,
      projectType,
      selectedCount: isAdding ? selectedFeatures.length + 1 : selectedFeatures.length - 1,
    });

    if (isAdding && featureItem) {
      success(
        isSr ? `Uključena funkcija: ${featureItem.label}` : `Enabled: ${featureItem.label}`,
        undefined,
        { duration: 1800 }
      );
    }
  };

  const selectAllCategory = () => {
    const currentCategoryFeatureIds = filteredFeatures.map((f) => f.id);
    const allSelected = currentCategoryFeatureIds.every((id) => selectedFeatures.includes(id));
    if (allSelected) {
      setSelectedFeatures(selectedFeatures.filter((id) => !currentCategoryFeatureIds.includes(id)));
      info(
        isSr ? "Isključene funkcije u izabranoj kategoriji" : "Deselected category features",
        undefined,
        { duration: 2000 }
      );
    } else {
      setSelectedFeatures(Array.from(new Set([...selectedFeatures, ...currentCategoryFeatureIds])));
      success(
        isSr ? `Označene sve (${currentCategoryFeatureIds.length}) funkcije u kategoriji` : `Selected all (${currentCategoryFeatureIds.length}) features in category`,
        undefined,
        { duration: 2000 }
      );
    }
  };

  const filteredFeatures = featuresList.filter((feat) => {
    if (featureCategory === "all") return true;
    return feat.category === featureCategory;
  });

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  const handleRequestClick = () => {
    const featureLabels = selectedFeatures
      .map((fId) => featuresList.find((f) => f.id === fId)?.label)
      .filter(Boolean) as string[];
    
    // Track high intent conversion in GA4
    trackEstimatorInteraction({
      action: "request_blueprint_quote",
      projectType: selectedTypeObj.id,
      projectTitle: selectedTypeObj.title,
      selectedCount: selectedFeatures.length,
      featuresList: featureLabels,
    });

    let serviceCategory = "web-app";
    if (selectedTypeObj.id === "website") serviceCategory = "cms";
    else if (selectedTypeObj.id === "ecommerce") serviceCategory = "ecommerce";
    else if (selectedTypeObj.id === "booking") serviceCategory = "booking";
    else if (selectedTypeObj.id === "app" || selectedTypeObj.id === "saas") serviceCategory = "web-app";
    else if (selectedTypeObj.id === "redesign") serviceCategory = "consulting";

    const featureListText = featureLabels.length > 0
      ? featureLabels.map((label, idx) => `  ${idx + 1}. ${label}`).join("\n")
      : (isSr ? "  (Osnovni paket rešenja)" : "  (Core solution package)");

    const message = isSr 
      ? `Zdravo SSolutions tim,\n\nŽeleo/la bih besplatnu procenu i ponudu za sledeću konfiguraciju projekta:\n\n• Model rešenja: ${selectedTypeObj.title}\n• Procenjen rok izrade: ${selectedTypeObj.time}\n• Izabrane funkcije i stavke (${selectedFeatures.length}):\n${featureListText}\n\nMolim vas za termin za besplatne konsultacije i pripremu zvanične ponude.`
      : `Hello SSolutions team,\n\nI would like to request a free quote and consultation for the following project setup:\n\n• Solution model: ${selectedTypeObj.title}\n• Estimated timeline: ${selectedTypeObj.time}\n• Selected features (${selectedFeatures.length}):\n${featureListText}\n\nPlease get in touch regarding a free assessment and formal proposal.`;

    const blueprintPayload = {
      projectTypeId: selectedTypeObj.id,
      projectTitle: selectedTypeObj.title,
      estimatedTime: selectedTypeObj.time,
      selectedFeatures,
      featureLabels,
      formattedMessage: message,
      serviceCategory,
    };

    // Broadcast custom event so Contact.tsx updates its React state
    window.dispatchEvent(
      new CustomEvent("ssolutions:apply_blueprint", {
        detail: blueprintPayload,
      })
    );

    // Smooth scroll directly to contact form section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const targetY = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      // Focus the name input on the form after scrolling
      setTimeout(() => {
        const nameField = document.getElementById("contact-name");
        if (nameField) {
          nameField.focus({ preventScroll: true });
        }
      }, 600);
    }

    // Trigger toast notification for instantaneous feedback
    success(
      isSr 
        ? `Konfiguracija za "${selectedTypeObj.title}" sa ${selectedFeatures.length} označenih funkcija je ubačena u formu ispod!`
        : `Configuration for "${selectedTypeObj.title}" with ${selectedFeatures.length} selected features is populated below!`,
      isSr ? "Plan Projekta Ubačen u Formu" : "Blueprint Ready",
      { 
        duration: 6000,
        action: {
          label: isSr ? "Pogledaj Upit" : "View Form",
          onClick: () => {
            const nameField = document.getElementById("contact-name");
            nameField?.focus();
          }
        }
      }
    );
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-50/80 dark:bg-[#0a0a0a] border-t border-slate-200/60 dark:border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          title={isSr ? "Interaktivni Konfigurator Vašeg Digitalnog Rešenja" : "Interactive Solution & Scope Estimator"} 
          subtitle={isSr 
            ? "Izaberite tip platforme i funkcije koje su potrebne vašem biznisu. Dobijate trenutnu preporuku i besplatnu ponudu sa garantovanim rokom." 
            : "Select your project type and high-impact capabilities to receive an instant scope recommendation and quote."}
        />

        <div className="mt-12 bg-white dark:bg-[#141414] p-5 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-xl">
          
          {/* STEP 1: Digital Solution Types (8 items grid) */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-blue-500/30">
                  1
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                    {isSr ? "Izaberite tip digitalnog rešenja:" : "Select your digital solution model:"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {isSr ? "Kliknite na model koji najbolje odgovara vašem poslovanju" : "Pick the architecture best matched to your operational goals"}
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-lg self-start sm:self-auto border border-blue-200/60 dark:border-blue-500/20">
                {projectTypes.length} {isSr ? "dostupnih modela" : "available models"}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {projectTypes.map((type) => {
                const isSelected = projectType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => {
                      if (projectType !== type.id) {
                        setProjectType(type.id);
                        trackEstimatorInteraction({
                          action: "select_type",
                          projectType: type.id,
                          projectTitle: type.title,
                          selectedCount: selectedFeatures.length
                        });
                        info(
                          isSr 
                            ? `Izabran model: ${type.title} (procenjen rok: ${type.time})`
                            : `Selected model: ${type.title} (est. time: ${type.time})`,
                          isSr ? "Model Rešenja" : "Solution Type",
                          { duration: 2400 }
                        );
                      }
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative group ${
                      isSelected
                        ? "bg-blue-50/90 dark:bg-blue-600/10 border-blue-600 dark:border-blue-500 shadow-md ring-2 ring-blue-500/25 scale-[1.02]"
                        : "bg-slate-50/60 dark:bg-[#191919] border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-[#1e1e1e]"
                    }`}
                  >
                    {/* Top Row: Icon & Badge */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={`p-2.5 rounded-xl transition-colors ${
                          isSelected ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
                        }`}>
                          {type.icon}
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          isSelected 
                            ? "bg-blue-600 text-white" 
                            : "bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                        }`}>
                          {type.badge}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-[15px] mb-1.5 leading-snug">
                        {type.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
                        {type.desc}
                      </p>
                    </div>

                    {/* Bottom Row: Timeline & Checkmark */}
                    <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 mt-2 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <Clock size={12} />
                        {type.time}
                      </span>
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        isSelected ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 dark:border-white/20"
                      }`}>
                        {isSelected && <Check size={10} className="stroke-[3]" />}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Desired Business Capabilities & Features (16 items + category chips) */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-blue-500/30">
                  2
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                    {isSr ? "Označite dodatne funkcije i automatizacije koje želite:" : "Choose desired business capabilities & automations:"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {isSr ? "Kombinujte funkcije prema potrebama vašeg tima i kupaca" : "Select high-impact features to customize your exact scope"}
                  </p>
                </div>
              </div>

              {/* Quick Select/Deselect All in Category */}
              <button
                onClick={selectAllCategory}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer self-start sm:self-auto"
              >
                {isSr ? "Označi / Odznači sve u kategoriji" : "Toggle all in category"}
              </button>
            </div>

            {/* Feature Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {featureCategories.map((cat) => {
                const isActive = featureCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setFeatureCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/5 hover:border-blue-300"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Features 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredFeatures.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3.5 cursor-pointer transition-all ${
                      isChecked 
                        ? "bg-blue-50/50 dark:bg-[#1a1a1a] border-blue-500 text-slate-900 dark:text-white shadow-2xs ring-1 ring-blue-500/20" 
                        : "bg-slate-50/50 dark:bg-[#161616] border-slate-200/90 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/15"
                    }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? "bg-blue-600 text-white shadow-xs" : "border border-slate-300 dark:border-white/20 bg-white dark:bg-black/20"
                    }`}>
                      {isChecked && <Check size={13} className="stroke-[3]" />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        {feat.icon}
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                          {feat.label}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Summary Banner and 1-Click Request Submission */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-50 dark:bg-[#111111] -mx-5 -mb-5 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            
            <div className="space-y-1.5 text-center lg:text-left w-full lg:w-auto">
              <div className="text-[11px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center lg:justify-start gap-1.5">
                <Sparkles size={13} />
                <span>{isSr ? "Vaša Odabrana Konfiguracija:" : "Tailored Project Blueprint:"}</span>
              </div>

              <div className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                {selectedTypeObj.title} <span className="text-blue-600 dark:text-blue-400">•</span> {selectedFeatures.length} {isSr ? "označenih funkcija" : "selected features"}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                  <Clock size={13} className="text-blue-500" />
                  {isSr ? "Garantovan rok:" : "Guaranteed delivery:"} {selectedTypeObj.time}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                  <ShieldCheck size={13} />
                  {isSr ? "Fiksna ponuda & 0 skrivenih troškova" : "Fixed scope & 0 hidden fees"}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRequestClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
            >
              <Sparkles size={18} />
              <span>{isSr ? "Zatraži Besplatnu Ponudu za Ovu Konfiguraciju" : "Get Free Quote for This Setup"}</span>
              <ArrowRight size={18} />
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
}
