import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, X, Calendar, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { trackConsultationCtaClick, trackDirectContact, trackEvent } from "../utils/analytics";

export function FloatingContact() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      trackEvent("floating_contact_open", { location: "Floating Action Button" });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="mb-3 flex flex-col gap-2.5 items-end"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ssolutionsrs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackDirectContact({ channel: "gmail", target: "ssolutionsrs@gmail.com", location: "Floating Quick Menu" });
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-blue-600 text-white font-medium text-xs sm:text-sm shadow-lg hover:bg-blue-500 transition-colors cursor-pointer"
            >
              <span>{isSr ? "Pošaljite Gmail" : "Open Gmail"}</span>
              <Mail size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={() => {
                trackConsultationCtaClick({
                  location: "Floating_Menu",
                  ctaText: isSr ? "Zakaži Konsultaciju" : "Book Meeting",
                  target: "#contact",
                  serviceContext: "Floating Quick Menu Consultation CTA"
                });
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-xs sm:text-sm shadow-lg hover:bg-slate-800 transition-colors border border-white/10 cursor-pointer"
            >
              <span>{isSr ? "Zakaži Konsultaciju" : "Book Meeting"}</span>
              <Calendar size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Toggle */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors cursor-pointer border border-white/20"
        aria-label={isSr ? "Otvori kontakt meni" : "Open contact menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        </motion.div>
      </motion.button>
    </div>
  );
}


