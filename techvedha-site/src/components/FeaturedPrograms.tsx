import { motion } from 'framer-motion';
import { Clock, Monitor, Signal } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';
import { programs } from '../data/programs';

export default function FeaturedPrograms() {
  return (
    <section id="programs" style={{ background: '#0B0D0F', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Top red bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#E31B23' }} />

      {/* Background grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', left: `${i * 11}%`, top: 0, bottom: 0, width: 1, background: '#E31B23' }} />
        ))}
      </div>

      <CornerDeco position="tr" size={52} color="#E31B23" opacity={0.4} />
      <CornerDeco position="bl" size={52} color="#E31B23" opacity={0.25} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }} className="programs-inner">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel number="06" label="Featured Programs" light />
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
              Featured<br /><span style={{ color: '#E31B23' }}>Training Programs</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
              <div style={{ width: 40, height: 3, background: '#E31B23' }} />
              <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 20, textAlign: 'right' }} className="programs-desc">
              Build the capabilities<br />your business needs next.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary">View All Programs <span className="arrow">→</span></button>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="programs-grid">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              style={{ background: '#111417', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer', transition: 'all 0.35s', display: 'flex', flexDirection: 'column', position: 'relative' }}
            >
              {/* Image */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(5,6,7,0.85) 0%, transparent 55%)` }} />
                <div style={{ position: 'absolute', top: 12, left: 12 }}>
                  <span style={{ background: p.color, color: 'white', fontFamily: 'Inter', fontSize: 10, fontWeight: 700, padding: '4px 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {p.category}
                  </span>
                </div>
                <CornerDeco position="tr" size={22} color="white" opacity={0.25} />
              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 20, color: 'white', lineHeight: 1.25, fontWeight: 400, whiteSpace: 'pre-line', marginBottom: 16 }}>
                  {p.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Signal size={12} color={p.color} />
                    <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{p.level}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Clock size={12} color={p.color} />
                    <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{p.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Monitor size={12} color={p.color} />
                    <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{p.mode}</span>
                  </div>
                </div>
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                  <button
                    onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#E31B23', padding: 0, display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    Know More →
                  </button>
                </div>
              </div>

              {/* Bottom color bar */}
              <div style={{ height: 3, background: p.color, opacity: 0.8 }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .programs-inner { padding: 0 40px !important; }
          .programs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .programs-desc { text-align: left !important; }
        }
        @media (max-width: 600px) {
          .programs-inner { padding: 0 24px !important; }
          .programs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
