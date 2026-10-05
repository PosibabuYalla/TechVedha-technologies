import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <section id="industries" style={{ minHeight: '80vh', position: 'relative', overflow: 'hidden', padding: '100px 0', display: 'flex', alignItems: 'center' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
          alt="Corporate team"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,6,7,0.88)' }} />
      </div>

      {/* Red diagonal shapes */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 280, height: 280, background: '#E31B23', opacity: 0.07, clipPath: 'polygon(100% 0, 100% 100%, 0 0)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 200, height: 200, background: '#E31B23', opacity: 0.05, clipPath: 'polygon(0 0, 0 100%, 100% 100%)', pointerEvents: 'none' }} />

      <CornerDeco position="tl" size={48} color="#E31B23" opacity={0.5} />
      <CornerDeco position="br" size={48} color="#E31B23" opacity={0.35} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px', position: 'relative', zIndex: 1, width: '100%' }} className="industries-inner">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <SectionLabel number="08" label="Industries" light />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
              Industries /<br /><span style={{ color: '#E31B23' }}>Who We Serve</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 300, textAlign: 'right' }} className="ind-desc">
              Supporting a wide range of organizations and teams.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="industries-grid">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: '#E31B23', background: 'rgba(227,27,35,0.09)' }}
              style={{ border: '1px solid rgba(255,255,255,0.12)', padding: '28px 24px', background: 'rgba(255,255,255,0.04)', cursor: 'pointer', transition: 'all 0.25s', display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', overflow: 'hidden' }}
            >
              {/* Icon in bordered box */}
              <div style={{ width: 44, height: 44, border: '1px solid rgba(227,27,35,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ind.Icon size={20} color="#E31B23" />
              </div>
              <h4 style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                {ind.title}
              </h4>
              <CornerDeco position="br" size={16} color="#E31B23" opacity={0.3} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .industries-inner { padding: 0 40px !important; }
          .industries-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .industries-inner { padding: 0 24px !important; }
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ind-desc { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
