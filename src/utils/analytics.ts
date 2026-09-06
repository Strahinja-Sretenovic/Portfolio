/**
 * Google Analytics 4 (GA4) Analytics & Conversion Tracking Service
 */

import { hasAnalyticsConsent, removeAnalyticsCookies } from "./cookieConsent";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const DEFAULT_MEASUREMENT_ID = "G-JBLF6ZPTQ2";
export const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || DEFAULT_MEASUREMENT_ID;

let isInitialized = false;

// Setup runtime listener for consent changes
if (typeof window !== "undefined") {
  window.addEventListener("cookieConsentUpdated", (e: any) => {
    const consent = e.detail;
    if (consent?.analytics) {
      initGA4();
    } else {
      isInitialized = false;
      removeAnalyticsCookies();
    }
  });
}

export function initGA4(measurementId: string = GA_MEASUREMENT_ID): void {
  if (typeof window === "undefined" || isInitialized) return;

  // Strict GDPR / ZZPL check: do not inject script or track unless consent is granted
  if (!hasAnalyticsConsent()) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("js", new Date());

  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });

  window.gtag("config", measurementId, {
    send_page_view: true,
    page_path: window.location.pathname + window.location.hash,
    page_title: document.title,
    cookie_flags: "SameSite=None;Secure",
  });

  isInitialized = true;
}

export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === "undefined") return;

  // Do not track any personal/behavioral events if analytics consent is not granted
  if (!hasAnalyticsConsent()) {
    return;
  }

  const eventPayload = {
    ...params,
    timestamp: new Date().toISOString(),
  };

  if (window.gtag) {
    window.gtag("event", eventName, eventPayload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", eventName, eventPayload]);
  }
}

export function trackPageView(pagePath: string, pageTitle?: string): void {
  const title = pageTitle || document.title;
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: title,
    page_location: window.location.href,
  });
}

export interface LeadFormPayload {
  name?: string;
  email: string;
  phone?: string;
  service: string;
  messageLength: number;
}

export function trackLeadFormSubmission(data: LeadFormPayload): void {
  trackEvent("generate_lead", {
    event_category: "Lead Acquisition",
    event_label: data.service,
    service_requested: data.service,
    has_phone: Boolean(data.phone && data.phone.trim().length > 0),
    message_length: data.messageLength,
    lead_source: "Contact Section Form",
    value: 150,
    currency: "EUR",
  });
}

export interface AuditRequestPayload {
  auditType: string;
  websiteProvided: boolean;
  contactMethod: string;
}

export function trackAuditRequestSubmit(payload: AuditRequestPayload): void {
  trackEvent("audit_request_submit", {
    event_category: "Audit Lead",
    audit_type: payload.auditType,
    has_website_link: payload.websiteProvided,
    contact_method: payload.contactMethod,
    value: 200,
    currency: "EUR"
  });
}

export interface ConsultationCtaPayload {
  location: string;
  ctaText: string;
  target?: string;
  serviceContext?: string;
}

export function trackConsultationCtaClick(payload: ConsultationCtaPayload): void {
  trackEvent("select_content", {
    content_type: "CTA_Button",
    item_id: `cta_${payload.location.toLowerCase()}`,
    item_name: payload.ctaText,
  });

  trackEvent("free_consultation_click", {
    event_category: "Conversion CTA",
    cta_name: "Besplatne Konsultacije",
    cta_location: payload.location,
    cta_text: payload.ctaText,
    target_destination: payload.target || "#contact",
    service_context: payload.serviceContext || "general",
  });
}

export interface ServiceInteractionPayload {
  action: "tab_select" | "request_quote_click" | "feature_view";
  serviceId: string;
  serviceTitle: string;
  serviceIndex?: number;
}

export function trackServiceInteraction(payload: ServiceInteractionPayload): void {
  trackEvent("service_interaction", {
    event_category: "Service Discovery",
    action_type: payload.action,
    service_id: payload.serviceId,
    service_title: payload.serviceTitle,
    service_index: payload.serviceIndex,
  });
}

export interface DirectContactPayload {
  channel: "gmail" | "email" | "phone" | "whatsapp" | "resume_download" | "map_location";
  target?: string;
  location: string;
}

export function trackDirectContact(payload: DirectContactPayload): void {
  trackEvent("direct_contact_click", {
    event_category: "Direct Contact",
    contact_channel: payload.channel,
    target_value: payload.target,
    source_location: payload.location,
  });
}

export interface ProjectClickPayload {
  projectName: string;
  projectType: string;
  projectUrl?: string;
  action: "view_case_study" | "open_external_demo" | "view_all_portfolio";
}

export function trackProjectClick(payload: ProjectClickPayload): void {
  trackEvent("project_interaction", {
    event_category: "Portfolio",
    project_name: payload.projectName,
    project_type: payload.projectType,
    project_url: payload.projectUrl,
    portfolio_action: payload.action,
  });
}

export function trackFaqInteraction(questionId: number | string, questionText: string, action: "open" | "close"): void {
  trackEvent("faq_interaction", {
    event_category: "FAQ Support",
    question_id: questionId,
    question_text: questionText,
    interaction_action: action,
  });
}
