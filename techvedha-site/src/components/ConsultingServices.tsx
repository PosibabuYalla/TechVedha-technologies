import { motion } from 'framer-motion';
import {
  Lightbulb, Zap, BarChart2, PieChart, Layout, Shield,
  Cloud, Settings, Map, Search, Code, Briefcase, ArrowRight
} from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb size={18} />, Zap: <Zap size={18} />, BarChart2: <BarChart2 size={18} />,
  PieChart: <PieChart size={18} />, Layout: <Layout size={18} />, Shield: <Shield size={18} />,
  Cloud: <Cloud size={18} />, Settings: <Settings size={18} />, Map: <Map size={18} />,
  Search: <Search size={18} />, Code: <Code size={18} />, Briefcase: <Briefcase size={18} />,
};

export default function ConsultingServices() {
  return (
    <section id="consulting" style={{ background: 'white', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle diagonal stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #E31B23 0%, transparent 60%)', opacity: 0.8 }} />

      {/* Corner brackets */}
      <CornerDeco position="tl" size={44} color="#E31B23" opacity={0.2} />
      <CornerDeco position="br" size={44} color="#E31B23" opacity={0.12} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }} className="consulting-inner">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 24 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel number="05" label="Consulting Services" />
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: '#15171A', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
              Our<br /><span style={{ color: '#E31B23' }}>Consulting Services</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
              <div style={{ width: 40, height: 3, background: '#E31B23' }} />
              <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#666', lineHeight: 1.7, marginBottom: 20, maxWidth: 280, textAlign: 'right' }} className="consulting-desc">
              From technology decisions<br />to measurable business outcomes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary">Explore All Services <span className="arrow">→</span></button>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }} className="consulting-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: '#E31B23', boxShadow: '0 10px 28px rgba(227,27,35,0.1)' }}
              style={{ background: 'white', border: '1px solid #E9ECEF', padding: '20px 16px', cursor: 'pointer', transition: 'all 0.25s', position: 'relative', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#E31B23', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }} className="card-top-line" />
              <div style={{ width: 36, height: 36, background: '#FCE7E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#E31B23' }}>{iconMap[s.icon]}</span>
              </div>
              <h4 style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: '#15171A', lineHeight: 1.35, whiteSpace: 'pre-line', flex: 1 }}>
                {s.title}
              </h4>
              <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#888', lineHeight: 1.5 }}>{s.desc}</p>
              <ArrowRight size={14} color="#E31B23" style={{ marginTop: 4 }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .consulting-grid > div:hover .card-top-line { transform: scaleX(1) !important; }
        @media (max-width: 1200px) {
          .consulting-inner { padding: 0 40px !important; }
          .consulting-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .consulting-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .consulting-desc { text-align: left !important; }
        }
        @media (max-width: 600px) {
          .consulting-inner { padding: 0 24px !important; }
          .consulting-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
