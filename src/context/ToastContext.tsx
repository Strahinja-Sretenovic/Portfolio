import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X, Sparkles } from "lucide-react";

export type ToastType = "success" | "info" | "warning" | "error";

export interface ToastOptions {
  duration?: number;
  title?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  createdAt: number;
}

interface ToastContextType {
  toasts: ToastItem[];
  showToast: (type: ToastType, message: string, options?: ToastOptions) => string;
  success: (message: string, title?: string, options?: Omit<ToastOptions, "title">) => string;
  info: (message: string, title?: string, options?: Omit<ToastOptions, "title">) => string;
  warning: (message: string, title?: string, options?: Omit<ToastOptions, "title">) => string;
  error: (message: string, title?: string, options?: Omit<ToastOptions, "title">) => string;
  dismissToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const dismissToast = useCallback((id: string) => {
    // Clear timeout if exists
    const timeout = timeoutsRef.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current.clear();
    setToasts([]);
  }, []);

  const showToast = useCallback(
    (type: ToastType, message: string, options?: ToastOptions): string => {
      const id = "toast_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now();
      const duration = options?.duration ?? 4500;

      const newToast: ToastItem = {
        id,
        type,
        title: options?.title,
        message,
        duration,
        action: options?.action,
        createdAt: Date.now(),
      };

      setToasts((prev) => {
        // Keep maximum 4 concurrent toasts
        const trimmed = prev.length >= 4 ? prev.slice(prev.length - 3) : prev;
        return [...trimmed, newToast];
      });

      if (duration > 0) {
        const timeout = setTimeout(() => {
          dismissToast(id);
        }, duration);
        timeoutsRef.current.set(id, timeout);
      }

      return id;
    },
    [dismissToast]
  );

  const success = useCallback(
    (message: string, title?: string, options?: Omit<ToastOptions, "title">) => {
      return showToast("success", message, { ...options, title });
    },
    [showToast]
  );

  const info = useCallback(
    (message: string, title?: string, options?: Omit<ToastOptions, "title">) => {
      return showToast("info", message, { ...options, title });
    },
    [showToast]
  );

  const warning = useCallback(
    (message: string, title?: string, options?: Omit<ToastOptions, "title">) => {
      return showToast("warning", message, { ...options, title });
    },
    [showToast]
  );

  const error = useCallback(
    (message: string, title?: string, options?: Omit<ToastOptions, "title">) => {
      return showToast("error", message, { ...options, title });
    },
    [showToast]
  );

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
        success,
        info,
        warning,
        error,
        dismissToast,
        clearAll,
      }}
    >
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

/**
 * Toast Container & Item Components
 */
interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed top-20 sm:top-24 right-4 sm:right-6 z-[9999] flex flex-col gap-3 pointer-events-none max-w-[calc(100vw-2rem)] sm:max-w-md w-full"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onDismiss={() => onDismiss(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface ToastCardProps {
  toast: ToastItem;
  onDismiss: () => void;
}

const ToastCard: React.FC<ToastCardProps> = ({ toast, onDismiss }) => {
  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />;
      case "info":
      default:
        return <Sparkles className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />;
    }
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case "success":
        return "border-emerald-500/30 dark:border-emerald-500/40 shadow-emerald-500/10";
      case "error":
        return "border-rose-500/30 dark:border-rose-500/40 shadow-rose-500/10";
      case "warning":
        return "border-amber-500/30 dark:border-amber-500/40 shadow-amber-500/10";
      case "info":
      default:
        return "border-blue-500/30 dark:border-blue-500/40 shadow-blue-500/10";
    }
  };

  const getBadgeColor = () => {
    switch (toast.type) {
      case "success":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "error":
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
      case "warning":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "info":
      default:
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -16, x: 20, scale: 0.95, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -12, scale: 0.9, filter: "blur(4px)", transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`pointer-events-auto relative overflow-hidden rounded-2xl bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl border ${getBorderColor()} shadow-2xl p-4 sm:p-4.5 text-slate-800 dark:text-slate-100 flex items-start gap-3.5 group`}
      role="alert"
    >
      {/* Toast Icon */}
      {getIcon()}

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        {toast.title && (
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-bold font-display text-slate-900 dark:text-white leading-tight">
              {toast.title}
            </h4>
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${getBadgeColor()}`}>
              {toast.type}
            </span>
          </div>
        )}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {toast.message}
        </p>

        {toast.action && (
          <button
            onClick={() => {
              toast.action?.onClick();
              onDismiss();
            }}
            className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            {toast.action.label}
          </button>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={onDismiss}
        aria-label="Zatvori obaveštenje"
        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0 -mr-1 -mt-1"
      >
        <X size={16} />
      </button>

      {/* Animated timer progress line at the bottom */}
      {toast.duration > 0 && (
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: toast.duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={`absolute bottom-0 left-0 right-0 h-1 ${
            toast.type === "success"
              ? "bg-emerald-500/60"
              : toast.type === "error"
              ? "bg-rose-500/60"
              : toast.type === "warning"
              ? "bg-amber-500/60"
              : "bg-blue-500/60"
          }`}
        />
      )}
    </motion.div>
  );
};
