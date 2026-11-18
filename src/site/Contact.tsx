import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Copy, Check, Linkedin, Github, FileText } from "lucide-react";
import { gsap } from "./motion";
import { Content, CONTACT } from "../content";
import { Magnetic } from "./Magnetic";
import { useToast } from "../context/ToastContext";
import { trackDirectContact, trackLeadFormSubmission } from "../utils/analytics";

export function Contact({ t, onPrivacy }: { t: Content; onPrivacy: () => void }) {
  const root = useRef<HTMLElement>(null);
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(t.contact.types[0]);
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-c", {
        yPercent: 110,
        duration: 1,
        ease: "power4.out",
        stagger: 0.025,
        scrollTrigger: { trigger: ".ct-title", start: "top 85%" },
      });
      gsap.from(".ct-fade", {
        y: 30, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.08,
        scrollTrigger: { trigger: ".ct-body", start: "top 85%" },
      });
    }, root);
    setType(t.contact.types[0]);
    return () => ctx.revert();
  }, [t]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showToast("error", t.contact.required);
      return;
    }
    const subject = `${type} — ${name}`;
    const body = `${msg}\n\n— ${name}\n${email}`;
    trackLeadFormSubmission({ email, service: type, messageLength: msg.length });
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      showToast("success", t.contact.copied);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const chars = (line: string) =>
    Array.from(line).map((ch, i) => (
      <span key={i} className="mask">
        <span className="ct-c">{ch === " " ? " " : ch}</span>
      </span>
    ));

  return (
    <section ref={root} id="contact" className="relative py-28 sm:py-40 overflow-hidden">
      <div
        className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[90vw] h-[60vw] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "var(--glow)" }}
      />
      <div className="container-x relative">
        <span className="label">{t.contact.label}</span>
        <p className="serif text-3xl sm:text-5xl mt-8" style={{ color: "var(--accent)" }}>{t.contact.kicker}</p>
        <h2 className="ct-title display font-semibold text-[clamp(3.2rem,11vw,11rem)] mt-2" aria-label={t.contact.title.join(" ")}>
          {t.contact.title.map((line, i) => (
            <span key={i} className="block" aria-hidden="true">{chars(line)}</span>
          ))}
        </h2>

        <div className="ct-body grid lg:grid-cols-12 gap-16 mt-16 sm:mt-24">
          <form onSubmit={submit} className="lg:col-span-7 space-y-8">
            <div className="ct-fade grid sm:grid-cols-2 gap-8">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] muted font-display">{t.contact.name}</span>
                <input className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] muted font-display">{t.contact.email}</span>
                <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
              </label>
            </div>
            <div className="ct-fade">
              <span className="text-xs uppercase tracking-[0.18em] muted font-display">{t.contact.type}</span>
              <div className="flex flex-wrap gap-2 mt-4">
                {t.contact.types.map((ty) => (
                  <button type="button" key={ty} className="chip" aria-pressed={type === ty} onClick={() => setType(ty)}>
                    {ty}
                  </button>
                ))}
              </div>
            </div>
            <label className="ct-fade block">
              <span className="text-xs uppercase tracking-[0.18em] muted font-display">{t.contact.message}</span>
              <textarea className="field resize-none" rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} />
            </label>
            <div className="ct-fade flex flex-wrap items-center gap-5">
              <Magnetic>
                <button type="submit" className="btn btn-primary !h-14 !px-8 !text-base" data-cursor="link">
                  {t.contact.send} <ArrowUpRight size={18} className="arrow" />
                </button>
              </Magnetic>
              <span className="text-sm muted max-w-xs">{t.contact.note}</span>
            </div>
            <p className="ct-fade text-xs muted max-w-lg">
              {t.contact.privacyPre}{" "}
              <button type="button" onClick={onPrivacy} className="underline underline-offset-4 hover:text-[var(--fg)]">
                {t.contact.privacyLink}
              </button>
              .
            </p>
          </form>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l flex flex-col justify-between gap-10" style={{ borderColor: "var(--line)" }}>
            <div className="ct-fade">
              <span className="text-xs uppercase tracking-[0.18em] muted font-display">{t.contact.or}</span>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  onClick={() => trackDirectContact({ channel: "email", target: CONTACT.email, location: "contact_section" })}
                  className="display text-[clamp(1.25rem,2.2vw,2rem)] font-medium break-all underline decoration-1 underline-offset-8 hover:decoration-[var(--accent)]"
                >
                  {CONTACT.email}
                </a>
                <button onClick={copy} className="shrink-0 w-10 h-10 rounded-full border grid place-items-center" style={{ borderColor: "var(--line)" }} aria-label="Copy email">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div className="ct-fade flex flex-col">
              {[
                { href: CONTACT.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: CONTACT.github, label: "GitHub", icon: Github },
                { href: CONTACT.resume, label: "CV / Resume", icon: FileText },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => label.startsWith("CV") && trackDirectContact({ channel: "resume_download", location: "contact_section" })}
                  className="group flex items-center justify-between py-5 border-t text-lg font-display"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="flex items-center gap-3"><Icon size={18} /> {label}</span>
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
