import { motion } from 'framer-motion';
import { MessageSquare, BarChart, Pencil, PlayCircle, Activity, RefreshCw } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';

const steps = [
  { num: '01', Icon: MessageSquare, title: 'Understand', desc: 'Your business needs and objectives.' },
  { num: '02', Icon: BarChart,      title: 'Assess',     desc: 'Skill gaps and current capabilities.' },
  { num: '03', Icon: Pencil,        title: 'Design',     desc: 'Customized solution and learning plan.' },
  { num: '04', Icon: PlayCircle,    title: 'Deliver',    desc: 'Engaging and focused implementation.' },
  { num: '05', Icon: Activity,      title: 'Measure',    desc: 'Track progress and outcomes.' },
  { num: '06', Icon: RefreshCw,     title: 'Improve',    desc: 'Continuous feedback and future-focused refinement.' },
];

export default function HowWeWork() {
  return (
    <section id="how" style={{ background: 'white', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'radial-gradient(#15171A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <CornerDeco position="tl" size={44} color="#E31B23" opacity={0.18} />
      <CornerDeco position="br" size={44} color="#E31B23" opacity={0.12} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }} className="how-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <SectionLabel number="07" label="How We Work" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', color: '#15171A', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
              How We <span style={{ color: '#E31B23' }}>Work</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 360, textAlign: 'right' }} className="how-desc">
              A simple and proven approach from understanding your needs to long-term impact.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Animated red connecting line */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
            style={{ position: 'absolute', top: 30, left: '8.33%', right: '8.33%', height: 2, background: 'linear-gradient(90deg, #E31B23, #B5121B)', transformOrigin: 'left' }}
            className="timeline-line"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, position: 'relative' }} className="timeline-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                {/* Circle with icon */}
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'white', border: '2px solid #E31B23', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1, marginBottom: 20, flexShrink: 0, boxShadow: '0 4px 16px rgba(227,27,35,0.15)' }}>
                  <step.Icon size={22} color="#E31B23" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 10, fontWeight: 700, color: '#E31B23', letterSpacing: '0.1em', marginBottom: 4 }}>{step.num}</div>
                <h4 style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700, color: '#15171A', marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#888', lineHeight: 1.6, padding: '0 8px' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
          style={{ marginTop: 64, position: 'relative', overflow: 'hidden', height: 280 }}
        >
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=80"
            alt="Business journey"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
            loading="lazy"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,6,7,0.75) 0%, rgba(5,6,7,0.2) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', left: 48, top: '50%', transform: 'translateY(-50%)' }}>
            <div style={{ width: 24, height: 3, background: '#E31B23', marginBottom: 12 }} />
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: 'white', lineHeight: 1.3, fontWeight: 400 }}>
              A Proven Path<br />to <span style={{ color: '#E31B23' }}>Real Results.</span>
            </p>
          </div>
          <CornerDeco position="tr" size={32} color="white" opacity={0.3} />
          <CornerDeco position="bl" size={32} color="#E31B23" opacity={0.6} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .how-inner { padding: 0 40px !important; }
          .timeline-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
          .timeline-line { display: none !important; }
        }
        @media (max-width: 768px) {
          .how-inner { padding: 0 24px !important; }
          .timeline-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .how-desc { text-align: left !important; }
        }
        @media (max-width: 480px) {
          .timeline-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
