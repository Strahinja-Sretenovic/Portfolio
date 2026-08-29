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

  const checkpoints = [
    {
      number: "1",
      title: isSr ? "Vidljivost" : "Visibility & Discovery",
      question: isSr ? "Da li se salon pojavljuje kada potencijalni klijent traži uslugu?" : "Does the salon appear when prospects search for this service?",
      focus: isSr ? "Google Business profil, lokalna pretraga i relevantnost naziva usluga." : "Google Business profile, local search signals, and service relevance.",
      status: "warning",
      statusLabel: isSr ? "Čest problem" : "Common friction"
    },
    {
      number: "2",
      title: isSr ? "Prvi utisak" : "First Impression",
      question: isSr ? "Da li za nekoliko sekundi razumem kome je salon namenjen i šta ga izdvaja?" : "Does a visitor understand within seconds who this salon is for and what sets it apart?",
      focus: isSr ? "Brzina učitavanja, mobilni prikaz, vizuelna urednost i profesionalnost." : "Load speed, mobile layout, visual polish, and professionalism.",
      status: "ok",
      statusLabel: "OK"
    },
    {
      number: "3",
      title: isSr ? "Poverenje" : "Trust & Proof",
      question: isSr ? "Da li koristi recenzije, fotografije i rezultate rada kao dokaz?" : "Does it use reviews, photos, and real work as proof?",
      focus: isSr ? "Autentične recenzije i fotografije stvarnih radova umesto generičkih slika." : "Authentic reviews and photos of real work instead of stock images.",
      status: "warning",
      statusLabel: isSr ? "Propuštena prilika" : "Missed opportunity"
    },
    {
      number: "4",
      title: isSr ? "Ponuda" : "Offer Structure",
      question: isSr ? "Da li jasno razumem koje usluge postoje?" : "Do I clearly understand which services exist?",
      focus: isSr ? "Jasno razdvojene usluge, tretmani i šta svaki paket obuhvata." : "Clearly structured services, treatments, and package scopes.",
      status: "warning",
      statusLabel: isSr ? "Čest problem" : "Common friction"
    },
    {
      number: "5",
      title: isSr ? "Cena" : "Price Expectation",
      question: isSr ? "Da li imam dovoljno informacija da odlučim da napravim sledeći korak?" : "Do I have enough information to decide to take the next step?",
      focus: isSr ? "Okvirni cenovnik ili raspon koji uklanja strah od nepoznate cene." : "Pricing guide or ranges removing fear of unknown costs.",
      status: "danger",
      statusLabel: isSr ? "Glavno usko grlo" : "Main bottleneck"
    },
    {
      number: "6",
      title: isSr ? "Booking" : "Booking & Scheduling",
      question: isSr ? "Koliko koraka mi treba da zakažem termin?" : "How many steps do I need to book an appointment?",
      focus: isSr ? "Mogućnost zakazivanja termina bez čekanja na telefonski poziv ili poruku." : "Ability to book without waiting for calls or direct messages.",
      status: "danger",
      statusLabel: isSr ? "Gubitak klijenata" : "Customer leak"
    },
    {
      number: "7",
      title: isSr ? "Merenje" : "Measurement & Analytics",
      question: isSr ? "Da li vlasnik zna koliko klijenata dolazi preko Google-a, Instagrama ili sajta?" : "Does the owner know how many clients come via Google, Instagram, or the website?",
      focus: isSr ? "Praćenje izvora novih klijenata radi pametnijeg ulaganja." : "Tracking client acquisition sources for smarter investments.",
      status: "warning",
      statusLabel: isSr ? "Nepoznato" : "Blind spot"
    }
  ];

  return (
    <section id="audit-example" className="py-20 px-4 sm:px-6 relative bg-white dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Edukativni Primer Analize" : "Educational Walkthrough"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Kako izgleda kada analiziram jedan biznis?" : "What does it look like when I analyze a business?"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Pogledajte primer puta kupca i gde najčešće nastaju prepreke. Rešenje nije automatski „novi sajt“ — rešenje zavisi od tačne dijagnoze."
              : "See an example of the customer journey and where friction occurs. The solution isn't automatically a 'new website' — it depends on exact diagnosis."}
          </p>
        </div>

        {/* Diagnostic Case Card */}
        <div className="p-6 sm:p-9 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-8">
          
          {/* Scenario Context Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                <Scissors size={14} />
                <span>{isSr ? "Primer — lokalni frizerski salon (Edukativna analiza)" : "Example — Local Hair Salon (Educational Analysis)"}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {isSr ? "Put kupca: od pretrage do zakazanog termina" : "Customer Journey: Search query to booked appointment"}
              </h3>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              {isSr ? "Pretraga kupca: " : "Customer search: "}<span className="text-blue-400 font-semibold">{isSr ? "„frizerski salon Čačak“" : "“hair salon near me”"}</span>
            </div>
          </div>

          {/* 7 Diagnostic Checkpoints */}
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                {isSr ? "7 dijagnostičkih tačaka analize:" : "7 Diagnostic Checkpoints:"}
              </h4>
              <span className="text-[11px] text-slate-400 font-mono">
                {isSr ? "Gde kupac nastavlja, a gde odustaje?" : "Where does the prospect drop off?"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
              {checkpoints.map((cp) => (
                <div 
                  key={cp.number}
                  className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 ${
                    cp.status === "danger"
                      ? "bg-rose-950/30 border-rose-500/40"
                      : cp.status === "warning"
                      ? "bg-amber-950/25 border-amber-500/40"
                      : "bg-slate-900 border-slate-800"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-blue-400 font-bold">Tačka 0{cp.number}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        cp.status === "danger" 
                          ? "bg-rose-500/20 text-rose-300"
                          : cp.status === "warning"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}>
                        {cp.statusLabel}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">{cp.title}</div>
                    <p className="text-xs text-slate-300 font-medium leading-snug">{cp.question}</p>
                  </div>
                  <p className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 leading-relaxed">
                    {cp.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Conclusion */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/50 border border-blue-500/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>{isSr ? "Zaključak analize: Rešenje nije automatski „novi sajt“" : "Diagnostic takeaway: The solution isn't automatically a new website"}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {isSr
                ? "Možda treba srediti Google profil. Možda booking. Možda prezentaciju usluga. Možda landing page. A možda zaista treba novi sajt."
                : "Maybe the Google profile needs optimizing. Maybe booking. Maybe service presentation. Maybe a landing page. And maybe a new website is genuinely needed."}
            </p>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-800 font-semibold italic">
              {isSr 
                ? "Sajt je alat. Poslovni problem određuje koji alat ima smisla koristiti." 
                : "A website is a tool. The business problem dictates which tool makes sense to deploy."}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
