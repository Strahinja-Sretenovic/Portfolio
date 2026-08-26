/**
 * Google Analytics 4 (GA4) Analytics & Conversion Tracking Service
 * 
 * Provides unified event tracking for:
 * - Contact & Lead form submissions (generate_lead)
 * - "Besplatne konsultacije" & Key CTA clicks
 * - Service tab selection & quote requests
 * - Project Estimator / Solution Configurator interactions
 * - Direct contact channel clicks (Gmail, Email, Phone, CV download)
 * - Page views and virtual route transitions
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Measurement ID from Vite environment or default fallback
const DEFAULT_MEASUREMENT_ID = "G-SSOLUTIONS01";
export const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || DEFAULT_MEASUREMENT_ID;

let isInitialized = false;

/**
 * Initialize Google Analytics 4 Script & Tag Manager
 */
export function initGA4(measurementId: string = GA_MEASUREMENT_ID): void {
  if (typeof window === "undefined" || isInitialized) return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("js", new Date());

  // Check if GA4 script is already injected
  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  // Configure GA4 with enhanced measurement options
  window.gtag("config", measurementId, {
    send_page_view: true,
    page_path: window.location.pathname + window.location.hash,
    page_title: document.title,
    cookie_flags: "SameSite=None;Secure",
  });

  isInitialized = true;

  if (import.meta.env.DEV) {
    console.log(`[GA4] Initialized tracking with ID: ${measurementId}`);
  }
}

/**
 * Generic GA4 Event Sender
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === "undefined") return;

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

  if (import.meta.env.DEV) {
    console.log(`[GA4 Event] ${eventName}:`, eventPayload);
  }
}

/**
 * Track Page Views (Virtual Pages & Hash Navigation)
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  const title = pageTitle || document.title;
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: title,
    page_location: window.location.href,
  });
}

/**
 * 1. Primary Conversion: Contact Form Submission / Lead Generation
 */
export interface LeadFormPayload {
  name?: string;
  email: string;
  phone?: string;
  service: string;
  messageLength: number;
}

export function trackLeadFormSubmission(data: LeadFormPayload): void {
  // Standard GA4 Lead Event
  trackEvent("generate_lead", {
    event_category: "Lead Acquisition",
    event_label: data.service,
    service_requested: data.service,
    has_phone: Boolean(data.phone && data.phone.trim().length > 0),
    message_length: data.messageLength,
    lead_source: "Contact Section Form",
    value: 150, // Assigned expected lead value in EUR
    currency: "EUR",
  });

  // Custom Granular Form Submit Event
  trackEvent("contact_form_submit", {
    service_type: data.service,
    has_phone_number: Boolean(data.phone && data.phone.trim().length > 0),
    submission_status: "success",
  });
}

/**
 * 2. Primary CTA: "Besplatne Konsultacije" / Free Consultation CTA Clicks
 */
export interface ConsultationCtaPayload {
  location: "Hero" | "Services_Banner" | "Header_Nav" | "Floating_Menu" | "Value_Comparison" | "Estimator" | "Faq" | "Footer";
  ctaText: string;
  target?: string;
  serviceContext?: string;
}

export function trackConsultationCtaClick(payload: ConsultationCtaPayload): void {
  // Recommended GA4 Select Content Event
  trackEvent("select_content", {
    content_type: "CTA_Button",
    item_id: `cta_${payload.location.toLowerCase()}`,
    item_name: payload.ctaText,
  });

  // Dedicated High-Intent Consultation Click Event
  trackEvent("free_consultation_click", {
    event_category: "Conversion CTA",
    cta_name: "Besplatne Konsultacije",
    cta_location: payload.location,
    cta_text: payload.ctaText,
    target_destination: payload.target || "#contact",
    service_context: payload.serviceContext || "general",
  });
}

/**
 * 3. Key Service Interactions & Service Quote Inquiries
 */
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

  // If user clicks "Zatražite ponudu" on a specific service card
  if (payload.action === "request_quote_click") {
    trackEvent("service_quote_intent", {
      service_id: payload.serviceId,
      service_title: payload.serviceTitle,
      lead_intent: "high",
    });
  }
}

/**
 * 4. Interactive Project Estimator / Blueprint Customizer Events
 */
export interface EstimatorInteractionPayload {
  action: "select_type" | "toggle_feature" | "category_filter" | "request_blueprint_quote";
  projectType?: string;
  projectTitle?: string;
  featureId?: string;
  featureLabel?: string;
  selectedCount?: number;
  featuresList?: string[];
}

export function trackEstimatorInteraction(payload: EstimatorInteractionPayload): void {
  trackEvent("estimator_interaction", {
    event_category: "Project Estimator",
    estimator_action: payload.action,
    project_type: payload.projectType,
    project_title: payload.projectTitle,
    feature_id: payload.featureId,
    selected_features_count: payload.selectedCount,
  });

  // Conversion Event: User completes the blueprint and clicks "Zatraži Besplatnu Ponudu za Ovu Konfiguraciju"
  if (payload.action === "request_blueprint_quote") {
    trackEvent("estimator_quote_request", {
      event_category: "High Intent Estimator Lead",
      selected_model: payload.projectTitle || payload.projectType,
      total_features_chosen: payload.selectedCount || 0,
      features_summary: (payload.featuresList || []).join(", "),
      value: 200,
      currency: "EUR",
    });
  }
}

/**
 * 5. Direct Contact Channels (Gmail, Email, Phone, CV)
 */
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

/**
 * 6. Case Study & Portfolio Project Clicks
 */
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

/**
 * 7. FAQ Accordion & Search Interactions
 */
export function trackFaqInteraction(questionId: number | string, questionText: string, action: "open" | "close"): void {
  trackEvent("faq_interaction", {
    event_category: "FAQ Support",
    question_id: questionId,
    question_text: questionText,
    interaction_action: action,
  });
}
