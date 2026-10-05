import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';

export default function ClientPerspectives() {
  return (
    <section id="clients" style={{ minHeight: '70vh', position: 'relative', overflow: 'hidden', padding: '100px 0', display: 'flex', alignItems: 'center', background: '#0B0D0F' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
          alt="Business professionals"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
          loading="lazy"
        />
      </div>

      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', left: `${i * 11}%`, top: 0, bottom: 0, width: 1, background: '#E31B23' }} />
        ))}
      </div>

      <CornerDeco position="tl" size={52} color="#E31B23" opacity={0.45} />
      <CornerDeco position="br" size={52} color="#E31B23" opacity={0.3} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px', position: 'relative', zIndex: 1, width: '100%', display: 'flex', gap: 80, alignItems: 'center' }} className="clients-inner">
        {/* Left */}
        <div style={{ flex: 1 }}>
          <SectionLabel number="10" label="Client Perspectives" light />
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: '0 0 8px' }}>
            Client<br /><span style={{ color: '#E31B23' }}>Perspectives</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0 32px' }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '40px', background: 'rgba(255,255,255,0.04)', maxWidth: 560, position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ width: 48, height: 48, background: 'rgba(227,27,35,0.15)', border: '1px solid rgba(227,27,35,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 32, color: '#E31B23', lineHeight: 1 }}>"</span>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 12 }}>
              Client perspectives coming soon.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7 }}>
              We will be sharing real client testimonials once available.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 32 }}>
              {[ChevronLeft, ChevronRight].map((Icon, idx) => (
                <button key={idx} style={{ width: 40, height: 40, border: '1px solid rgba(255,255,255,0.2)', background: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget.style.background = '#E31B23'); (e.currentTarget.style.borderColor = '#E31B23'); }}
                  onMouseLeave={e => { (e.currentTarget.style.background = 'none'); (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'); }}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
            <CornerDeco position="tr" size={20} color="#E31B23" opacity={0.35} />
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: '0 0 380px', position: 'relative' }}
          className="clients-right"
        >
          <div style={{ position: 'relative', overflow: 'hidden', height: 400 }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Business partnership"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,6,7,0.85) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32 }}>
              <div style={{ width: 24, height: 3, background: '#E31B23', marginBottom: 10 }} />
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 20, color: 'white', lineHeight: 1.4, fontWeight: 400 }}>
                Trusted Partnership<br />for Long-Term <span style={{ color: '#E31B23' }}>Impact.</span>
              </p>
            </div>
            <CornerDeco position="tr" size={28} color="#E31B23" opacity={0.7} />
            <CornerDeco position="bl" size={20} color="white" opacity={0.25} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .clients-inner { flex-direction: column !important; padding: 0 40px !important; gap: 48px !important; }
          .clients-right { flex: none !important; width: 100% !important; }
        }
        @media (max-width: 600px) {
          .clients-inner { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
