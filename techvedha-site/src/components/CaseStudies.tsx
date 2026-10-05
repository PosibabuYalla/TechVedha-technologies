import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';

export default function CaseStudies() {
  return (
    <section id="cases" style={{ background: 'white', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle diagonal stripe bottom-right */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 300, height: 300, background: '#E31B23', opacity: 0.03, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', pointerEvents: 'none' }} />

      <CornerDeco position="tl" size={44} color="#E31B23" opacity={0.18} />
      <CornerDeco position="br" size={44} color="#E31B23" opacity={0.12} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }} className="cases-inner">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 48 }}>
          <SectionLabel number="09" label="Case Studies" />
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: '#15171A', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
            Case Studies /<br /><span style={{ color: '#E31B23' }}>Success Stories</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', border: '1px solid #E9ECEF', overflow: 'hidden' }}
          className="cases-card"
        >
          {/* Left */}
          <div style={{ flex: 1, padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: 52, height: 52, background: '#FCE7E8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <Quote size={24} color="#E31B23" />
            </div>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 22, color: '#15171A', lineHeight: 1.5, marginBottom: 16, fontWeight: 400 }}>
              Case studies coming soon.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#888', lineHeight: 1.75, marginBottom: 36 }}>
              We will be sharing real client stories and case studies once available.
            </p>
            <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Get Notified <span className="arrow">→</span>
            </button>
            <CornerDeco position="tl" size={24} color="#E31B23" opacity={0.2} />
          </div>

          {/* Right */}
          <div style={{ flex: '0 0 45%', position: 'relative', overflow: 'hidden', minHeight: 360 }} className="cases-img">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
              alt="Corporate consulting"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,6,7,0.65) 0%, rgba(5,6,7,0.2) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 40, left: 40 }}>
              <div style={{ width: 24, height: 3, background: '#E31B23', marginBottom: 12 }} />
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 26, color: 'white', lineHeight: 1.3, fontWeight: 400 }}>
                From<br />Challenges<br />to <span style={{ color: '#E31B23' }}>Capabilities.</span>
              </p>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, background: '#E31B23', clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
            <CornerDeco position="bl" size={28} color="white" opacity={0.25} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-inner { padding: 0 24px !important; }
          .cases-card { flex-direction: column !important; }
          .cases-img { flex: none !important; min-height: 240px !important; }
        }
      `}</style>
    </section>
  );
}
