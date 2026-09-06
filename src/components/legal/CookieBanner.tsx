import React, { useState, useEffect, useRef } from "react";
import { Cookie, Shield, Check, X, Settings2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import {
  hasUserDecidedConsent,
  getCookieConsent,
  saveCookieConsent,
} from "../../utils/cookieConsent";

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
  forceOpenSettings?: boolean;
  onCloseSettings?: () => void;
}

export function CookieBanner({
  onOpenCookiePolicy,
  forceOpenSettings = false,
  onCloseSettings,
}: CookieBannerProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState<boolean>(false);

  const bannerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Check consent state on mount
  useEffect(() => {
    const decided = hasUserDecidedConsent();
    if (!decided) {
      setShowBanner(true);
    } else {
      const current = getCookieConsent();
      setAnalyticsAllowed(Boolean(current?.analytics));
    }
  }, []);

  // Listen for forced settings open from footer or menu
  useEffect(() => {
    if (forceOpenSettings) {
      const current = getCookieConsent();
      setAnalyticsAllowed(Boolean(current?.analytics));
      setShowSettingsModal(true);
    }
  }, [forceOpenSettings]);

  const handleAcceptAll = () => {
    saveCookieConsent(true);
    setAnalyticsAllowed(true);
    setShowBanner(false);
    setShowSettingsModal(false);
    onCloseSettings?.();
  };

  const handleRejectNonEssential = () => {
    saveCookieConsent(false);
    setAnalyticsAllowed(false);
    setShowBanner(false);
    setShowSettingsModal(false);
    onCloseSettings?.();
  };

  const handleSaveCustom = () => {
    saveCookieConsent(analyticsAllowed);
    setShowBanner(false);
    setShowSettingsModal(false);
    onCloseSettings?.();
  };

  const handleCloseModal = () => {
    setShowSettingsModal(false);
    onCloseSettings?.();
  };

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettingsModal && (
          <motion.div
            ref={bannerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 max-w-4xl mx-auto z-50 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/95 dark:bg-[#07090e]/95 text-white border border-slate-700 dark:border-white/10 shadow-2xl backdrop-blur-md"
            role="region"
            aria-label={isSr ? "Obaveštenje o kolačićima" : "Cookie notice"}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-sm text-white">
                      {isSr ? "Privatnost & Kolačići (GDPR / ZZPL)" : "Privacy & Cookie Preferences"}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                    {isSr ? (
                      <>
                        Koristimo neophodne tehničke kolačiće za funkcionisanje sajta (tema, jezik). Uz vašu saglasnost, koristimo anonimne analitičke kolačiće (Google Analytics 4) za razumevanje posećenosti. Ne prodajemo podatke i ne koristimo marketinško praćenje.{" "}
                        <button
                          type="button"
                          onClick={onOpenCookiePolicy}
                          className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer inline-flex items-center gap-0.5"
                        >
                          <span>Saznajte više</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </>
                    ) : (
                      <>
                        We use essential technical cookies to remember preferences (theme, language). With your consent, we use anonymous analytics cookies (GA4) to understand aggregate traffic. We never sell data or track across the web.{" "}
                        <button
                          type="button"
                          onClick={onOpenCookiePolicy}
                          className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer inline-flex items-center gap-0.5"
                        >
                          <span>Read Cookie Policy</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0 justify-end pt-1 md:pt-0">
                <button
                  type="button"
                  onClick={() => setShowSettingsModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>{isSr ? "Prilagodi" : "Customize"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono font-medium transition-colors cursor-pointer border border-slate-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <span>{isSr ? "Samo neophodni" : "Essential Only"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                >
                  <span>{isSr ? "Prihvati sve" : "Accept All"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Granular Cookie Settings Modal */}
      <AnimatePresence>
        {showSettingsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <div className="absolute inset-0" onClick={handleCloseModal} aria-hidden="true" />

            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0a0d16] border border-slate-200 dark:border-white/10 shadow-2xl p-5 sm:p-6 space-y-5 text-slate-900 dark:text-white z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Settings2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="cookie-settings-title" className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {isSr ? "Podešavanje privatnosti i kolačića" : "Cookie & Privacy Preferences"}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {isSr ? "Transparentna kontrola nad vašim podacima" : "Full control over tracking preferences"}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label={isSr ? "Zatvori podešavanja" : "Close settings"}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preferences List */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* 1. Necessary (Always Active) */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span className="font-display font-bold text-slate-900 dark:text-white">
                        {isSr ? "Neophodni (tehnički) kolačići" : "Essential (Technical) Cookies"}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {isSr ? "Uvek aktivno" : "Always Active"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isSr
                      ? "Ovi kolačići i lokalno skladište omogućavaju osnovne funkcije sajta (čuvanje izabrane teme, jezika i navigaciju). Ne prikupljaju lične podatke i bez njih sajt ne može ispravno raditi."
                      : "These items store core UX settings (theme preference, chosen language, navigation state). They cannot be switched off."}
                  </p>
                </div>

                {/* 2. Analytics (Toggleable) */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cookie className="w-4 h-4 text-blue-500" />
                      <span className="font-display font-bold text-slate-900 dark:text-white">
                        {isSr ? "Analitički kolačići (Google Analytics 4)" : "Analytics Cookies (Google Analytics 4)"}
                      </span>
                    </div>
                    
                    {/* Toggle Switch */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analyticsAllowed}
                        onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isSr
                      ? "Omogućavaju nam anonimno merenje poseta i ponašanja korisnika radi unapređenja sadržaja i brzine sajta. Sve IP adrese su anonimizirane i podaci se ne povezuju sa vašim identitetom."
                      : "Allows aggregated anonymous visitor measurement to optimize site performance and design. IP addresses are anonymized."}
                  </p>
                </div>

              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={onOpenCookiePolicy}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
                >
                  {isSr ? "Detaljna Politika Kolačića →" : "Read Full Cookie Policy →"}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRejectNonEssential}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium transition-colors cursor-pointer"
                  >
                    {isSr ? "Odbij neobavezne" : "Decline Optional"}
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    {isSr ? "Sačuvaj izbor" : "Save Preferences"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
