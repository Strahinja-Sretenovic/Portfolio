import React, { useEffect, useRef } from "react";
import { X, Shield, FileText, Cookie, RotateCcw, Building2, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { legalContentSr, legalContentEn, LegalDocument } from "../../data/legalContent";

export type LegalDocType = "privacy" | "terms" | "cookies" | "refund" | "business";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoc?: LegalDocType;
  onOpenCookieSettings?: () => void;
}

export function LegalModal({
  isOpen,
  onClose,
  initialDoc = "privacy",
  onOpenCookieSettings,
}: LegalModalProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const contentMap = isSr ? legalContentSr : legalContentEn;

  const [activeTab, setActiveTab] = React.useState<LegalDocType>(initialDoc);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Sync initialDoc when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialDoc);
    }
  }, [isOpen, initialDoc]);

  // Handle ESC key to close modal & focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Focus close button on open for keyboard accessibility
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const tabs: { id: LegalDocType; label: string; icon: React.ReactNode }[] = [
    {
      id: "privacy",
      label: isSr ? "Privatnost" : "Privacy Policy",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "terms",
      label: isSr ? "Uslovi korišćenja" : "Terms & Conditions",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "cookies",
      label: isSr ? "Kolačići" : "Cookie Policy",
      icon: <Cookie className="w-4 h-4" />,
    },
    {
      id: "refund",
      label: isSr ? "Povraćaj & Garancija" : "Refund Policy",
      icon: <RotateCcw className="w-4 h-4" />,
    },
    {
      id: "business",
      label: isSr ? "Podaci o poslovanju" : "Business Details",
      icon: <Building2 className="w-4 h-4" />,
    },
  ];

  const currentDoc: LegalDocument = contentMap[activeTab] || contentMap.privacy;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          {/* Backdrop Click */}
          <div 
            className="absolute inset-0" 
            onClick={onClose} 
            aria-hidden="true" 
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 text-slate-900 dark:text-slate-100"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                    {isSr ? "Pravna dokumenta & Zaštita korisnika" : "Legal & User Protection"}
                  </span>
                  <h2 id="legal-modal-title" className="text-base sm:text-lg font-display font-black text-slate-950 dark:text-white">
                    {currentDoc.title}
                  </h2>
                </div>
              </div>

              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label={isSr ? "Zatvori pravna dokumenta" : "Close legal documents"}
                className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 px-3 sm:px-6 py-2 border-b border-slate-200 dark:border-white/10 overflow-x-auto no-scrollbar bg-slate-100/50 dark:bg-black/20">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 space-y-6 text-xs sm:text-sm leading-relaxed overscroll-contain">
              {/* Document Subheader / Meta */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/20 text-blue-950 dark:text-blue-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-blue-700 dark:text-blue-300 font-semibold">
                  <span>{isSr ? "Ažurirano:" : "Last Updated:"} {currentDoc.lastUpdated}</span>
                  <span>{isSr ? "Nadležnost: Republika Srbija & GDPR" : "Jurisdiction: RS Law & EU GDPR"}</span>
                </div>
                <p className="leading-relaxed">
                  {currentDoc.intro}
                </p>
              </div>

              {/* Document Sections */}
              <div className="space-y-6">
                {currentDoc.sections.map((section) => (
                  <div key={section.id} className="space-y-2.5">
                    <h3 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-1">
                      {section.title}
                    </h3>

                    <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {section.subsections && (
                      <div className="space-y-3 mt-2 pl-2 sm:pl-3 border-l-2 border-blue-500/40">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-1.5">
                            <h4 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">
                              {sub.title}
                            </h4>
                            {sub.paragraphs?.map((p, spIdx) => (
                              <p key={spIdx} className="text-slate-600 dark:text-slate-400">
                                {p}
                              </p>
                            ))}
                            {sub.items && (
                              <ul className="space-y-1 list-none pl-0">
                                {sub.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Banner for Cookies */}
              {activeTab === "cookies" && onOpenCookieSettings && (
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      {isSr ? "Želite da promenite izbor kolačića?" : "Want to change cookie preferences?"}
                    </strong>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {isSr ? "Možete u svakom trenutku aktivirati ili isključiti analitičko praćenje." : "You can toggle analytics tracking anytime."}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCookieSettings();
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <span>{isSr ? "Otvori podešavanja" : "Open Settings"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] text-[11px] text-slate-500">
              <span>
                © {new Date().getFullYear()} SSolutions. {isSr ? "Zvanična pravna obaveštenja." : "Official legal disclosures."}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:ssolutionsrs@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-mono"
                >
                  ssolutionsrs@gmail.com
                </a>
                <button
                  onClick={onClose}
                  className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-slate-300 dark:hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {isSr ? "Zatvori" : "Close"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
