import { useState } from "react";
import { MessageSquare, Phone, Mail, X, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FloatingContact() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="mb-3 flex flex-col gap-2.5 items-end animate-in fade-in slide-in-from-bottom-3 duration-200">
          <a
            href="https://wa.me/381613660260"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-medium text-xs sm:text-sm shadow-lg hover:bg-emerald-500 transition-all hover:scale-105"
          >
            <span>WhatsApp Chat</span>
            <MessageSquare size={16} />
          </a>

          <a
            href="tel:+381613660260"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-xs sm:text-sm shadow-lg hover:bg-slate-800 transition-all hover:scale-105 border border-white/10"
          >
            <span>{isSr ? "Pozovite" : "Call Us"}</span>
            <Phone size={16} />
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-blue-600 text-white font-medium text-xs sm:text-sm shadow-lg hover:bg-blue-500 transition-all hover:scale-105"
          >
            <span>{isSr ? "Zakaži Konsultaciju" : "Book Meeting"}</span>
            <Calendar size={16} />
          </a>
        </div>
      )}

      {/* Primary Floating Action Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/20"
        aria-label={isSr ? "Otvori kontakt meni" : "Open contact menu"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
