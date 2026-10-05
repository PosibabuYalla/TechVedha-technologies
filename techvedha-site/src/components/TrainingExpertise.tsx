import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';
import { trainingTopics } from '../data/services';

export default function TrainingExpertise() {
  return (
    <section id="training" style={{ background: '#F5F6F7', minHeight: '100vh', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.035, pointerEvents: 'none', backgroundImage: 'radial-gradient(#E31B23 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Red diagonal bar top-right */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 6, height: '40%', background: '#E31B23', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: 6, background: '#E31B23', opacity: 0.7 }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px', display: 'flex', gap: 80, alignItems: 'flex-start' }} className="training-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: '0 0 300px' }}
          className="training-left"
        >
          <SectionLabel number="03" label="Training Expertise" />
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: '#15171A', lineHeight: 1.1, fontWeight: 400, margin: '0 0 8px' }}>
            Our Core<br /><span style={{ color: '#E31B23' }}>Training Expertise</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0 24px' }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
          <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.75, color: '#666', marginBottom: 32 }}>
            In-demand technologies and skills for today's business needs.
          </p>
          <button
            onClick={() => { const el = document.querySelector('#programs'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
          >
            Explore All Programs <span className="arrow">→</span>
          </button>

          {/* Editorial visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.6 }}
            style={{ marginTop: 48, position: 'relative', overflow: 'hidden' }}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
              alt="Technology skills"
              style={{ width: '100%', height: 200, objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,6,7,0.88) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
              <div style={{ width: 24, height: 3, background: '#E31B23', marginBottom: 8 }} />
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 20, color: 'white', lineHeight: 1.3, fontWeight: 400 }}>
                From Skills<br />to Real-World<br /><span style={{ color: '#E31B23' }}>Impact.</span>
              </p>
            </div>
            <CornerDeco position="tr" size={28} color="#E31B23" opacity={0.9} />
            <CornerDeco position="bl" size={20} color="white" opacity={0.3} />
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="training-grid">
            {trainingTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(0,0,0,0.1)', borderColor: topic.color }}
                style={{
                  background: 'white', border: '1px solid #E9ECEF',
                  padding: '18px 16px',
                  display: 'flex', alignItems: 'center', gap: 12,
                  cursor: 'pointer', transition: 'all 0.25s',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Colored left accent bar */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: topic.color, opacity: 0.7 }} />
                <div style={{ width: 36, height: 36, borderRadius: 4, background: `${topic.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <topic.Icon size={18} color={topic.color} />
                </div>
                <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#15171A', lineHeight: 1.3 }}>
                  {topic.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .training-inner { flex-direction: column !important; padding: 0 40px !important; gap: 48px !important; }
          .training-left { flex: none !important; }
        }
        @media (max-width: 768px) {
          .training-inner { padding: 0 24px !important; }
          .training-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
