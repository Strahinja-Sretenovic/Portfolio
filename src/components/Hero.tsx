import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  Star, 
  MousePointerClick,
  Users,
  Gauge,
  PhoneCall
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [activeTab, setActiveTab] = useState<"speed" | "leads" | "mobile">("leads");

  const easeOutCustom = [0.21, 0.47, 0.32, 0.98];

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden px-4 sm:px-6">
      {/* Background Decorative Glowing Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] blur-[140px] opacity-30 pointer-events-none rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 animate-ambient-glow" />
      
      {/* Dot Pattern Grid in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.12] dark:opacity-[0.18] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: easeOutCustom }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
              {isSr ? "Primamo nove projekte • Besplatna procena u roku od 24h" : "Available for new projects • Free 24h quote audit"}
            </span>
          </motion.div>
          
          {/* Main Magnetic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutCustom }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.12]"
          >
            {isSr ? (
              <>
                Izrađujemo sajtove koji{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                  privlače kupce
                </span>{" "}
                i donose vam profit.
              </>
            ) : (
              <>
                We build digital platforms that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                  acquire high-paying clients
                </span>{" "}
                and scale your revenue.
              </>
            )}
          </motion.h1>

          {/* Subheading in Plain Business Language */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutCustom }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
          >
            {isSr
              ? "Zaboravite na spore i neefikasne sajtove sa kojih posetioci odlaze. Kreiramo moderna, munjevito brza i vizuelno impresivna rešenja skrojena da vaš biznis izdvoje od konkurencije."
              : "Forget slow, generic websites that bleed customers. We craft high-converting, lightning-fast web solutions engineered to turn traffic into consistent business revenue."}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOutCustom }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 cursor-pointer group"
            >
              <span>{isSr ? "Zakažite Besplatne Konsultacije" : "Book Free Consultation"}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>{isSr ? "Pogledajte Naše Radove" : "View Client Results"}</span>
            </motion.a>
          </motion.div>

          {/* Value Micro-Trust Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium pb-8 border-b border-slate-200/60 dark:border-white/10"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              {isSr ? "Bez skrivenih troškova" : "No hidden charges"}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              {isSr ? "Google PageSpeed 100/100" : "100/100 Google PageSpeed"}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              {isSr ? "Garancija na rokove završetka" : "Strict deadline guarantee"}
            </span>
          </motion.div>
        </div>

        {/* Live Interactive Hero Showcase / Visual Agency Proof */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: easeOutCustom }}
          className="mt-12 relative max-w-4xl mx-auto"
        >
          {/* Interactive Mockup Container */}
          <div className="rounded-3xl bg-slate-900 text-white p-4 sm:p-7 shadow-2xl border border-slate-700/60 ring-1 ring-white/10 overflow-hidden relative">
            {/* Window Top Controls */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                  https://vas-novi-sajt.rs • SSolutions Engine
                </span>
              </div>

              {/* Interactive Tabs inside Mockup */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab("leads")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === "leads" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSr ? "Konverzije (+280%)" : "Leads & ROI"}
                </button>
                <button
                  onClick={() => setActiveTab("speed")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === "speed" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSr ? "Brzina (<0.6s)" : "Speed Audit"}
                </button>
                <button
                  onClick={() => setActiveTab("mobile")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === "mobile" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSr ? "Mobilni UX" : "Mobile View"}
                </button>
              </div>
            </div>

            {/* Mockup Dynamic Content based on activeTab */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column in Mockup */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {isSr ? "Sistem u realnom vremenu aktivan" : "Live Real-Time Engine Active"}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold leading-snug">
                  {activeTab === "leads" && (isSr ? "Vaš sajt automatski prikuplja upite i generiše nove kupce 24/7." : "Your website generates leads & client bookings around the clock.")}
                  {activeTab === "speed" && (isSr ? "100/100 na Google PageSpeed testu za momentalno otvaranje." : "Scoring 100/100 PageSpeed for zero bounce and instant engagement.")}
                  {activeTab === "mobile" && (isSr ? "Besprekorno korisničko iskustvo na telefonima sa 1-klik pozivom." : "Flawless mobile phone checkout and one-tap direct calling.")}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {activeTab === "leads" && (isSr ? "Kupac dolazi na sajt, odmah vidi vašu ponudu, cenovnik i jednim dodirom zakazuje termin ili šalje upit." : "Visitors land on high-impact value props and convert into qualified business leads with zero friction.")}
                  {activeTab === "speed" && (isSr ? "Bez teških šablona i zagušenja. Svaka stranica se učitava za manje od 600 milisekundi." : "Zero bloatware or heavy code. Every page is optimized for sub-second delivery on any network.")}
                  {activeTab === "mobile" && (isSr ? "Preko 80% posetilaca dolazi preko telefona. Vaš sajt izgleda kao nativna premijum aplikacija." : "Over 80% of buyers browse from mobile devices. Your website feels as fluid as a native app.")}
                </p>

                {/* Micro Action in Mockup */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="#estimator"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <span>{isSr ? "Isprobajte kalkulator rešenja" : "Calculate project scope"}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Interactive Card Widgets */}
              <div className="md:col-span-5 space-y-3">
                {/* Metric Box 1 */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{isSr ? "Povećanje novih upita" : "Inbound Lead Surge"}</div>
                      <div className="font-bold text-white text-base sm:text-lg">+280% rast</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
                    {isSr ? "Zabeleženo" : "Verified"}
                  </span>
                </div>

                {/* Metric Box 2 */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <Gauge size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{isSr ? "Google Brzina" : "Google PageSpeed"}</div>
                      <div className="font-bold text-white text-base sm:text-lg">100 / 100</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                    &lt; 0.5s
                  </span>
                </div>

                {/* Floating Notification Simulator */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 flex items-center gap-3 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <PhoneCall size={14} className="text-white" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold text-white block">{isSr ? "Novi klijent zakazao termin!" : "New Client Booking Received!"}</span>
                    <span className="text-blue-200">{isSr ? "Pre 2 minuta preko web sajta" : "2 minutes ago via website"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
