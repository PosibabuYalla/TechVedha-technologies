import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronDown, User, Building2, Mail, Phone, Settings, MessageSquareText,
  MessagesSquare, Lightbulb, Users, CalendarDays, ChartColumnIncreasing, GraduationCap, ChartNoAxesCombined,
} from 'lucide-react';
import { learnerStats } from '../data/testimonials';

const RED = '#E31B23';
const NAVY = '#0F1B2D';
const RED_TEXT = '#FF3B42';
const BLUE = '#1E6FD9';
const GREEN = '#0FB58C';

const highlights = [
  { Icon: MessagesSquare, label: ['Expert', 'Guidance'], color: BLUE },
  { Icon: Lightbulb, label: ['Customized', 'Solutions'], color: RED },
  { Icon: Users, label: ['Growth', 'Focused'], color: GREEN },
];

const stats = [
  { Icon: GraduationCap, value: learnerStats[0].value, label: 'Learners Trained' },
  { Icon: ChartNoAxesCombined, value: learnerStats[1].value, label: 'Career Advancement' },
];

const benefits = [
  { Icon: CalendarDays, label: 'Expert Consultation', color: BLUE },
  { Icon: Settings, label: 'Tailored Solutions', color: RED },
  { Icon: ChartColumnIncreasing, label: 'Long-Term Support', color: GREEN },
];

const fields = [
  { key: 'name',    label: 'Full Name',     type: 'text',  required: true,  placeholder: 'Enter your full name',     Icon: User },
  { key: 'company', label: 'Company',       type: 'text',  required: false, placeholder: 'Enter your company name',  Icon: Building2 },
  { key: 'email',   label: 'Email Address', type: 'email', required: true,  placeholder: 'Enter your email address', Icon: Mail },
  { key: 'phone',   label: 'Phone Number',  type: 'tel',   required: false, placeholder: 'Enter your phone number',  Icon: Phone },
] as const;

const CONTACT_EMAIL = 'sunil.b@tech-vedha.co.in';
const SERVICE_LABELS: Record<string, string> = {
  consulting: 'Technology Consulting',
  training: 'Corporate Training',
  capability: 'Capability Building',
  other: 'Other',
};

export default function FinalCTA() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  // Submissions are emailed to the inbox below via FormSubmit (formsubmit.co).
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Company: form.company || '-',
          Email: form.email,
          Phone: form.phone || '-',
          'Service Required': SERVICE_LABELS[form.service] ?? '-',
          Message: form.message || '-',
          _replyto: form.email,
          _subject: `New consultation request from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') {
        throw new Error(data.message || `Server responded with status ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      console.error('Contact form submission failed:', reason);
      // Until the inbox owner clicks FormSubmit's one-time activation link, every submission is held.
      if (/activat/i.test(reason)) {
        setError(`This form is awaiting activation. Please check ${CONTACT_EMAIL} (including spam) for the FormSubmit "Activate Form" email and click the link, then submit again.`);
      } else {
        setError(`Sorry, your request couldn't be sent (${reason}). Please try again or email us at ${CONTACT_EMAIL}.`);
      }
    } finally {
      setSending(false);
    }
  };

  const label = (text: string, required = false) => (
    <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: NAVY, marginBottom: 7 }}>
      {text}{required && <span style={{ color: RED }}> *</span>}
    </span>
  );

  return (
    <section id="cta" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0', background: 'radial-gradient(ellipse at 30% 0%, #16233A 0%, #0C1525 50%, #070C16 100%)', display: 'flex', alignItems: 'center' }}>

      {/* Soft sweeps */}
      <svg aria-hidden="true" viewBox="0 0 1600 900" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="ctaCurve" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#E31B23" stopOpacity="0.9" />
            <stop offset="1" stopColor="#E31B23" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 120 C 160 260, 300 380, 420 900 H 0 Z" fill="rgba(255,255,255,0.025)" />
        <path d="M0 700 C 60 790, 160 860, 340 900" fill="none" stroke="url(#ctaCurve)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Consultant photo — right side */}
      <div className="cta-photo" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '27%', pointerEvents: 'none' }}>
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=80" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.7) 20%, #000 40%)', maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.7) 20%, #000 40%)' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,12,22,0.25) 0%, rgba(7,12,22,0.1) 40%, rgba(7,12,22,0.6) 100%)' }} />
      </div>

      {/* Dot texture — left */}
      <div style={{ position: 'absolute', left: 0, top: '26%', width: 80, height: 130, backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1.4px, transparent 1.4px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1800, width: '100%', margin: '0 auto', padding: '0 48px', position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 'clamp(24px, 2.4vw, 44px)', alignItems: 'center' }} className="cta-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ position: 'relative', paddingTop: 12 }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 2, height: 16, background: RED }} />
              <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>Get Started</span>
            </div>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(38px, min(4vw, 7.6vh), 68px)', color: '#fff', lineHeight: 1.04, fontWeight: 400, margin: '18px 0 0' }}>
            Let&apos;s Build<br /><span style={{ color: RED_TEXT }}>Your Success</span><br />Together.
          </h2>

          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)', margin: '20px 0 0', maxWidth: 520 }}>
            Have a question, need expert advice, or want to explore training and consulting opportunities? We&apos;re here to help. Request a consultation and our team will get back to you shortly.
          </p>

          <div style={{ display: 'flex', gap: 'clamp(16px, 2vw, 32px)', marginTop: 'clamp(18px, 3vh, 28px)', flexWrap: 'wrap' }}>
            {highlights.map(({ Icon, label: l, color }) => (
              <div key={l[0]} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 52, height: 52, borderRadius: '50%', background: `${color}26`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={26} color={color} strokeWidth={1.8} />
                </span>
                <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, lineHeight: 1.3, color: '#fff', whiteSpace: 'nowrap' }}>{l[0]}<br />{l[1]}</span>
              </div>
            ))}
          </div>

          <div className="cta-stats">
            {stats.map(({ Icon, value, label: l }, i) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}>
                <Icon size={30} color={RED_TEXT} strokeWidth={1.6} style={{ flexShrink: 0 }} />
                <span>
                  <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 'clamp(20px, 1.7vw, 26px)', fontWeight: 700, lineHeight: 1.1, color: RED_TEXT }}>{value}</span>
                  <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 12.5, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{l}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          id="contact"
          className="cta-card"
        >
          <div style={{ position: 'relative', paddingTop: 12 }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
            <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: NAVY }}>Request a Consultation</span>
          </div>
          <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, min(2.6vw, 5vh), 42px)', color: NAVY, fontWeight: 400, lineHeight: 1.1, margin: '8px 0 clamp(14px, 2.4vh, 24px)' }}>
            Tell Us About Your Needs
          </h3>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ width: 60, height: 60, border: `2px solid ${RED}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <span style={{ color: RED, fontSize: 26 }}>✓</span>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 17, color: NAVY }}>Thank you! We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta-form">
              {fields.map(({ key, label: l, type, required, placeholder, Icon }) => (
                <label key={key}>
                  {label(l, required)}
                  <span className="cta-field">
                    <Icon size={18} />
                    <input
                      type={type} required={required} placeholder={placeholder}
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                    />
                  </span>
                </label>
              ))}

              <label style={{ gridColumn: '1 / -1' }}>
                {label('Service Required')}
                <span className="cta-field">
                  <Settings size={18} />
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ color: form.service ? NAVY : '#8A94A3' }}>
                    <option value="">Select a service</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="training">Corporate Training</option>
                    <option value="capability">Capability Building</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown size={16} style={{ position: 'absolute', right: 14, pointerEvents: 'none' }} />
                </span>
              </label>

              <label style={{ gridColumn: '1 / -1' }}>
                {label('Message')}
                <span className="cta-field cta-field-area">
                  <MessageSquareText size={18} />
                  <textarea rows={3} placeholder="Tell us about your requirements…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </span>
              </label>

              {error && (
                <p role="alert" style={{ gridColumn: '1 / -1', margin: 0, fontFamily: 'Inter', fontSize: 14, color: RED, background: '#FCE7E8', borderRadius: 8, padding: '10px 14px' }}>{error}</p>
              )}
              <button type="submit" disabled={sending} className="btn-primary" style={{ gridColumn: '1 / -1', justifyContent: 'center', borderRadius: 8, padding: 'clamp(14px, 2vh, 18px)', fontSize: 18, marginTop: 4, boxShadow: '0 12px 26px rgba(227,27,35,0.28)', opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}>
                {sending ? 'Sending…' : <>Request a Consultation <ArrowRight size={19} className="arrow" /></>}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Right-side overlays on the photo */}
      <div className="cta-photo" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '27%', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 'calc(72px + 2vh)', left: '6%', transform: 'rotate(-12deg)' }}>
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: 26, lineHeight: 1, color: '#fff', display: 'block', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>Discuss<br />&nbsp;Plan<br />&nbsp;&nbsp;Grow<br />&nbsp;&nbsp;&nbsp;Succeed</span>
        </div>
        <div style={{ position: 'absolute', top: 'calc(72px + 8vh)', right: '6%', transform: 'rotate(-10deg)', background: '#FCE7E8', borderRadius: 10, padding: '12px 18px', boxShadow: '0 12px 26px rgba(15,27,45,0.18)' }}>
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: 24, fontWeight: 600, lineHeight: 1.05, color: NAVY, display: 'block' }}>No Obligation.<br />Just a Conversation.</span>
        </div>
        <div style={{ position: 'absolute', right: '6%', bottom: 'clamp(24px, 6vh, 60px)', background: 'rgba(255,255,255,0.96)', borderRadius: 14, padding: '10px 22px', boxShadow: '0 16px 36px rgba(15,27,45,0.18)', minWidth: 250 }}>
          {benefits.map(({ Icon, label: l, color }, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #EDF0F4' }}>
              <span style={{ width: 44, height: 44, borderRadius: '50%', background: `${color}16`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={22} color={color} strokeWidth={1.8} />
              </span>
              <span style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: NAVY }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cta-stats {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: clamp(18px, 3.4vh, 36px); max-width: 400px;
          background: rgba(15,23,36,0.85); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px;
          padding: clamp(12px, 2vh, 18px) 4px; box-shadow: 0 14px 30px rgba(0,0,0,0.3);
        }
        .cta-card {
          background: #fff; border: 1px solid rgba(15,27,45,0.06); border-radius: 18px;
          padding: clamp(22px, 3.4vh, 36px) clamp(22px, 2.4vw, 38px);
          box-shadow: 0 28px 70px rgba(0,0,0,0.45);
        }
        .cta-form { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(10px, 1.8vh, 18px) 22px; }
        .cta-form label { display: block; min-width: 0; }
        .cta-field {
          position: relative; display: flex; align-items: center; gap: 10px;
          border: 1px solid #DCE2EA; border-radius: 8px; padding: 0 14px; color: #6B7686;
          background: #fff; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .cta-field:focus-within { border-color: ${RED}; box-shadow: 0 0 0 3px rgba(227,27,35,0.12); }
        .cta-field input, .cta-field select, .cta-field textarea {
          flex: 1; min-width: 0; border: none; outline: none; background: transparent;
          font-family: 'Inter', sans-serif; font-size: 15px; color: ${NAVY};
          padding: clamp(10px, 1.6vh, 14px) 0;
        }
        .cta-field select { appearance: none; padding-right: 26px; cursor: pointer; }
        .cta-field input::placeholder, .cta-field textarea::placeholder { color: #8A94A3; }
        .cta-field-area { align-items: flex-start; }
        .cta-field-area svg { margin-top: clamp(11px, 1.7vh, 15px); }
        .cta-field-area textarea { resize: vertical; min-height: clamp(60px, 9vh, 96px); }

        @media (min-width: 1281px) {
          .cta-inner { padding-right: calc(27vw - 20px) !important; margin: 0 !important; max-width: none !important; }
        }
        @media (max-width: 1280px) {
          .cta-photo { display: none; }
        }
        @media (max-width: 1100px) {
          .cta-inner { grid-template-columns: 1fr !important; padding: 0 32px !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .cta-inner { padding: 0 20px !important; }
          .cta-form { grid-template-columns: 1fr; }
          .cta-stats { grid-template-columns: 1fr; row-gap: 12px; }
          .cta-stats > div { border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
