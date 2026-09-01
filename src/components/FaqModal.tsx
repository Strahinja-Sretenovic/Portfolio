import React, { useState } from "react";
import { X, ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToForm: () => void;
}

export function FaqModal({ isOpen, onClose, onJumpToForm }: FaqModalProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqData = t.faq;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 dark:text-white">
                  {faqData.title}
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                  {faqData.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {faqData.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={t.common.close}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* FAQs List */}
        <div className="space-y-2.5">
          {faqData.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-slate-50 dark:bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-blue-500" />
            SSolutions
          </span>

          <button
            onClick={() => {
              onClose();
              onJumpToForm();
            }}
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono transition-all cursor-pointer shadow-sm"
          >
            {faqData.ctaText} →
          </button>
        </div>

      </div>
    </div>
  );
}
