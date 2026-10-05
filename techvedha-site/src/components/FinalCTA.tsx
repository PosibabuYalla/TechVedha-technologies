import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import CornerDeco from './CornerDeco';

export default function FinalCTA() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          alt="Mountain landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,6,7,0.96) 0%, rgba(5,6,7,0.87) 50%, rgba(179,18,27,0.28) 100%)' }} />
      </div>

      {/* Red diagonal shapes */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 420, height: 420, background: '#E31B23', opacity: 0.11, clipPath: 'polygon(100% 0, 100% 100%, 0 0)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 320, height: 320, background: '#E31B23', opacity: 0.07, clipPath: 'polygon(0 0, 0 100%, 100% 100%)', pointerEvents: 'none' }} />

      <CornerDeco position="tl" size={56} color="#E31B23" opacity={0.55} />
      <CornerDeco position="br" size={56} color="#E31B23" opacity={0.4} />
      <CornerDeco position="tr" size={32} color="white" opacity={0.15} />
      <CornerDeco position="bl" size={32} color="white" opacity={0.1} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px', position: 'relative', zIndex: 1, display: 'flex', gap: 80, alignItems: 'flex-start' }} className="cta-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: '0 0 420px' }}
          className="cta-left"
        >
          <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#E31B23', textTransform: 'uppercase' }}>
            12 · Final CTA
          </span>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 4vw, 56px)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: '20px 0 24px' }}>
            Let's Build Your<br />
            <span style={{ color: '#E31B23' }}>Technology &amp; Talent<br />Advantage</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
          <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: 40 }}>
            Tell us what your organization needs to achieve. We'll help you identify the right consulting or learning approach.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ fontSize: 14 }}>
              Request a Proposal <span className="arrow">→</span>
            </button>
            <button className="btn-outline-white">Talk to an Expert</button>
          </div>

          <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, border: '1px solid rgba(227,27,35,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={14} color="#E31B23" />
              </div>
              <a href="mailto:info@tech-vedha.co.in" style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                info@tech-vedha.co.in
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{ width: 32, height: 32, border: '1px solid rgba(227,27,35,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={14} color="#E31B23" />
              </div>
              <span style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                Marathahalli, Bengaluru,<br />Karnataka, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1 }}
          id="contact"
        >
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden' }}>
            <CornerDeco position="tl" size={24} color="#E31B23" opacity={0.4} />
            <CornerDeco position="br" size={24} color="#E31B23" opacity={0.3} />
            <h3 style={{ fontFamily: 'Inter', fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 28 }}>
              Request a Consultation
            </h3>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 56, height: 56, border: '2px solid #E31B23', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <span style={{ color: '#E31B23', fontSize: 24 }}>✓</span>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'white' }}>Thank you! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { key: 'name',    label: 'Full Name *',     type: 'text',  required: true },
                  { key: 'company', label: 'Company',         type: 'text',  required: false },
                  { key: 'email',   label: 'Email Address *', type: 'email', required: true },
                  { key: 'phone',   label: 'Phone Number',    type: 'tel',   required: false },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type} required={field.required}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'white', fontFamily: 'Inter', fontSize: 14, padding: '12px 14px', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.target.style.borderColor = '#E31B23')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
                    />
                  </div>
                ))}

                <div style={{ gridColumn: '1 / -1', position: 'relative' }}>
                  <label style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                    Service Required
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: form.service ? 'white' : 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontSize: 14, padding: '12px 40px 12px 14px', outline: 'none', appearance: 'none' }}
                    >
                      <option value="" style={{ background: '#111' }}>Select a service</option>
                      <option value="consulting" style={{ background: '#111' }}>Technology Consulting</option>
                      <option value="training" style={{ background: '#111' }}>Corporate Training</option>
                      <option value="capability" style={{ background: '#111' }}>Capability Building</option>
                      <option value="other" style={{ background: '#111' }}>Other</option>
                    </select>
                    <ChevronDown size={14} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                    Message
                  </label>
                  <textarea
                    rows={4} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'white', fontFamily: 'Inter', fontSize: 14, padding: '12px 14px', outline: 'none', resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = '#E31B23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    Request a Consultation <span className="arrow">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .cta-inner { flex-direction: column !important; padding: 0 40px !important; gap: 48px !important; }
          .cta-left { flex: none !important; }
        }
        @media (max-width: 600px) {
          .cta-inner { padding: 0 24px !important; }
          form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
