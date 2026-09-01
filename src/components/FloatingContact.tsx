import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, X, MessageSquare, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { trackDirectContact, trackEvent } from "../utils/analytics";

export function FloatingContact() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const contact = t.contact;

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      trackEvent("floating_contact_open", { location: "Floating Action Button" });
    }
  };

  return (
    <div className="fixed bottom-12 sm:bottom-4 right-2.5 sm:right-5 z-40">
      {/* Expanded Quick Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="mb-2 flex flex-col gap-1.5 items-end"
          >
            <motion.a
              href="mailto:ssolutionsrs@gmail.com"
              onClick={() => {
                trackDirectContact({ channel: "email", target: "ssolutionsrs@gmail.com", location: "Floating Quick Menu" });
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.04, x: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-blue-600 text-white font-display font-bold text-xs shadow-lg hover:bg-blue-500 transition-colors cursor-pointer"
            >
              <span>{contact.emailUs}</span>
              <Mail size={13} />
            </motion.a>

            <motion.a
              href="tel:+381659911997"
              onClick={() => {
                trackDirectContact({ channel: "phone", target: "+381659911997", location: "Floating Quick Menu" });
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.04, x: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-display font-bold text-xs shadow-lg transition-colors cursor-pointer border border-white/10"
            >
              <span>+381 65 991 1997</span>
              <Phone size={13} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Floating Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? t.common.close : contact.title}
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-xl transition-all cursor-pointer ${
          isOpen
            ? "bg-slate-800 text-white"
            : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={16} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
