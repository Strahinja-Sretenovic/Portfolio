import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  Globe, 
  Cpu, 
  ShoppingCart, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  Search,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      id: "websites",
      badge: isSr ? "Najtraženije" : "Most Popular",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      gradient: "from-blue-600 to-cyan-500",
      bgGlow: "bg-blue-500/10",
      title: isSr ? "Izrada Web Sajtova koji Donose Klijente" : "High-Converting Custom Websites",
      shortDesc: isSr 
        ? "Pretvaramo obične posetioce u vaše verne kupce uz moderan dizajn, munjevitu brzinu i vrhunski mobilni prikaz."
        : "Turn casual visitors into loyal paying customers with stunning modern UI, sub-second speed, and flawless mobile experience.",
      idealFor: isSr 
        ? "Idealno za: Firme, advokate, ordinacije, salone, restorane, agencije i sve koji žele stalan priliv upita."
        : "Ideal for: Companies, clinics, salons, agencies, and businesses looking for a steady flow of high-value leads.",
      benefits: isSr ? [
        "100% prilagođeno mobilnim telefonima i tabletima",
        "Google SEO optimizacija za pozicioniranje ispred konkurencije",
        "Jasna dugmad za instant poziv, WhatsApp i slanje upita",
        "Integrisana Google mapa, cenovnik i galerija radova",
        "Maksimalna brzina učitavanja bez čekanja i zastoja"
      ] : [
        "100% responsive for smartphones and tablets",
        "Google SEO foundation to rank ahead of competitors",
        "High-conversion call-to-action buttons (Call, WhatsApp, Leads)",
        "Integrated Google Maps, dynamic pricing & media showcase",
        "Ultra-fast loading speed with near zero bounce rate"
      ],
      deliverables: isSr ? "Rok izrade: 5–12 radnih dana • Kompletna obuka za korišćenje" : "Timeline: 5–12 business days • Complete hand-off guide"
    },
    {
      id: "apps",
      badge: isSr ? "Zahtevna Rešenja" : "Scalable Tech",
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      gradient: "from-indigo-600 to-purple-500",
      bgGlow: "bg-indigo-500/10",
      title: isSr ? "Custom Web Aplikacije & Softver po Meri" : "Custom Web Applications & Portals",
      shortDesc: isSr
        ? "Automatizujte repetitivne poslove, smanjite greške i uštedite stotine radnih sati uz softverska rešenja skrojena tačno za vaš biznis."
        : "Automate manual tasks, eliminate costly errors, and save hundreds of employee hours with custom software tailored to your workflow.",
      idealFor: isSr
        ? "Idealno za: B2B kompanije, sisteme za rezervacije, portale za klijente, interne CRM sisteme i specifične poslovne procese."
        : "Ideal for: B2B businesses, booking engines, client portals, internal CRM systems, and bespoke operational workflows.",
      benefits: isSr ? [
        "Sistemi za automatizovano online zakazivanje i rezervacije",
        "Korisnički portali sa bezbednim nalozima i ulogama",
        "Integracija sa bazama podataka, eksternim softverima i API servisima",
        "Generisanje automatskih PDF ponuda, računa i izveštaja",
        "Potpuna kontrola podataka i maksimalna bezbednost"
      ] : [
        "Automated booking and reservation engines",
        "Secure multi-role client and staff portals",
        "Seamless integration with databases, third-party APIs and ERPs",
        "Automated PDF invoice, quote, and report generation",
        "Complete enterprise data privacy and bank-grade security"
      ],
      deliverables: isSr ? "Rok izrade: Zavisno od specifikacije • Garancija na stabilnost" : "Timeline: Milestone-based • Full reliability warranty"
    },
    {
      id: "ecommerce",
      badge: isSr ? "E-Commerce" : "Sales Engine",
      icon: <ShoppingCart className="w-6 h-6 text-emerald-500" />,
      gradient: "from-emerald-600 to-teal-500",
      bgGlow: "bg-emerald-500/10",
      title: isSr ? "Online Prodavnice & E-Commerce Sistemi" : "High-Performing E-Commerce Stores",
      shortDesc: isSr
        ? "Prodajte svoje proizvode 24/7 širom Srbije i sveta uz brzu, preglednu i jednostavnu online prodavnicu u kojoj je kupovina zadovoljstvo."
        : "Sell products 24/7 globally with an intuitive, ultra-fast online store designed for maximum checkout completion.",
      idealFor: isSr
        ? "Idealno za: Brendove, proizvođače, maloprodaje, distributere i one koji žele da pokrenu profitabilan online shop."
        : "Ideal for: Retail brands, manufacturers, distributors, and entrepreneurs scaling digital retail operations.",
      benefits: isSr ? [
        "Brz proces naručivanja u samo 2 koraka bez komplikacija",
        "Integracija sa platnim karticama (MasterCard, Visa) i pouzećem",
        "Automatsko praćenje stanja zaliha i obaveštenja na email",
        "Laka pretraga, filtriranje po veličinama, bojama i ceni",
        "Povezivanje sa kurirskim službama i automatskim štampanjem adresnica"
      ] : [
        "Frictionless 2-step checkout to maximize completed orders",
        "Credit card payment gateways (Visa, MasterCard, PayPal, Stripe)",
        "Real-time stock management and instant email alerts",
        "Smart product filters, attributes, variations, and live search",
        "Automated shipping label generation and parcel integration"
      ],
      deliverables: isSr ? "Rok izrade: 10–20 radnih dana • Testirano plaćanje" : "Timeline: 10–20 business days • Rigorously tested checkout"
    },
    {
      id: "redesign",
      badge: isSr ? "Optimizacija" : "Speed & SEO",
      icon: <Gauge className="w-6 h-6 text-amber-500" />,
      gradient: "from-amber-600 to-orange-500",
      bgGlow: "bg-amber-500/10",
      title: isSr ? "Redizajn, Ubrzavanje & SEO Optimizacija" : "Website Redesign, 100/100 Speed & SEO",
      shortDesc: isSr
        ? "Pretvorite vaš trenutni spor, zastareo i neefikasan sajt u modernu, bezbednu i ultrabrzu mašinu koja dominira Google pretragama."
        : "Transform your outdated, slow, underperforming website into an ultra-fast, high-converting revenue driver.",
      idealFor: isSr
        ? "Idealno za: Vlasnike postojećih sajtova koji ne donose dovoljno upita, sporo se otvaraju ili izgledaju zastarelo."
        : "Ideal for: Businesses with existing sites that suffer from slow load times, poor mobile UX, or low Google search rankings.",
      benefits: isSr ? [
        "Ubrzanje učitavanja na ispod 1 sekunde (100/100 Google PageSpeed)",
        "Moderan vizuelni redizajn koji podiže autoritet vašeg brenda",
        "Ispravljanje tehničkih SEO grešaka i bolja pozicija na Google-u",
        "Zadržavanje postojećih linkova i pozicija bez gubitka poseta",
        "Uklanjanje viška šablona i koda koji usporavaju rad"
      ] : [
        "Sub-second load speeds hitting 100/100 on Google PageSpeed",
        "Contemporary visual redesign elevating brand prestige",
        "Complete technical SEO overhaul for top search rankings",
        "Zero-downtime migration preserving established Google authority",
        "Purging heavy legacy plugins and bloated templates"
      ],
      deliverables: isSr ? "Rok izrade: 4–10 radnih dana • Izveštaj o brzini pre/posle" : "Timeline: 4–10 business days • Before/After benchmark audit"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-50/50 dark:bg-black/40">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          title={isSr ? "Šta Radimo za Vaš Biznis" : "Solutions Engineered to Win Clients"} 
          subtitle={isSr 
            ? "Ne prodajemo vam samo linije koda — kreiramo gotova digitalna rešenja koja vam donose nove kupce, štede vreme i uvećavaju zaradu." 
            : "We don't just write code — we build turnkey digital engines engineered to acquire clients, automate operations, and grow your bottom line."}
        />

        {/* Quick Value Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-white/10 shadow-xs"
        >
          <div className="flex items-center gap-3 p-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">&lt; 0.6s</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{isSr ? "Munjevito učitavanje" : "Sub-second load"}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">+250%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{isSr ? "Više upita kupaca" : "Higher conversions"}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <Smartphone size={20} />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">100%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{isSr ? "Mobilno optimizovano" : "Mobile-first UX"}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">100%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{isSr ? "Sigurno & Bezbedno" : "Guaranteed uptime"}</div>
            </div>
          </div>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-xl transition-all duration-300 group overflow-hidden ${
                activeService === idx ? "ring-2 ring-blue-500/30 dark:ring-blue-500/40" : ""
              }`}
              onClick={() => setActiveService(idx)}
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={`p-3.5 rounded-2xl ${service.bgGlow} border border-slate-200/50 dark:border-white/10 shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Ideal for pill */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 font-medium mb-6">
                  {service.idealFor}
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-3">
                    <Sparkles size={13} className="text-blue-500" />
                    <span>{isSr ? "Ključne prednosti za vaš posao:" : "Key business benefits:"}</span>
                  </div>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with CTA & timeline */}
              <div className="pt-5 border-t border-slate-100 dark:border-white/5 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {service.deliverables}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white font-semibold text-xs transition-all cursor-pointer group/btn shadow-xs"
                >
                  <span>{isSr ? "Zatražite ponudu" : "Get a Quote"}</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct consultation prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-display font-bold">
              {isSr ? "Niste sigurni šta je najbolje za vaš biznis?" : "Not sure which solution fits your business?"}
            </h4>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl">
              {isSr 
                ? "Zakažite 15 minuta besplatnih konsultacija. Analiziraćemo vaše trenutno stanje i predložiti najisplativije rešenje bez ikakvih obaveza." 
                : "Book a free 15-minute consultation. We'll audit your current digital presence and propose the most ROI-effective solution with zero obligation."}
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {isSr ? "Zakaži Besplatnu Procenu" : "Claim Free Consultation"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
