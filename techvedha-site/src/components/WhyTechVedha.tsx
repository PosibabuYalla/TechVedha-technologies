import { motion } from 'framer-motion';
import { Sliders, BookOpen, Award, Target, Wifi, Handshake } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';

const values = [
  { num: '01', Icon: Sliders,   title: 'Customized Programs',   desc: 'Designed around your business needs.' },
  { num: '02', Icon: BookOpen,  title: 'Practical Learning',    desc: 'Hands-on and real-world use cases.' },
  { num: '03', Icon: Award,     title: 'Experienced Trainers',  desc: 'Industry experience and domain knowledge.' },
  { num: '04', Icon: Target,    title: 'Business-Aligned',      desc: 'Mapped to business objectives.' },
  { num: '05', Icon: Wifi,      title: 'Flexible Delivery',     desc: 'Online, onsite and hybrid programs.' },
  { num: '06', Icon: Handshake, title: 'Long-Term Partnership', desc: 'Continuous learning and support.' },
];

export default function WhyTechVedha() {
  return (
    <section id="why" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '100px 0' }}>
      {/* BG Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Mountain landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,6,7,0.93) 0%, rgba(5,6,7,0.78) 60%, rgba(5,6,7,0.62) 100%)' }} />
      </div>

      {/* Red diagonal shapes */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 220, height: 220, background: '#E31B23', opacity: 0.09, clipPath: 'polygon(0 0, 100% 0, 0 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 320, height: 320, background: '#E31B23', opacity: 0.07, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', pointerEvents: 'none' }} />

      {/* Corner brackets on section edges */}
      <CornerDeco position="tl" size={48} color="#E31B23" opacity={0.5} />
      <CornerDeco position="br" size={48} color="#E31B23" opacity={0.35} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px', position: 'relative', zIndex: 1, width: '100%' }} className="why-inner">
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }} className="why-flex">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 320px' }}
            className="why-left"
          >
            <SectionLabel number="04" label="Why Tech Vedha" light />
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(40px, 4vw, 58px)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: '0 0 8px' }}>
              Why<br /><span style={{ color: '#E31B23' }}>Tech Vedha</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0 24px' }}>
              <div style={{ width: 40, height: 3, background: '#E31B23' }} />
              <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
              Technology knowledge is valuable.<br />
              <strong style={{ color: 'white' }}>Technology capability is transformative.</strong>
            </p>

            <div style={{ marginTop: 40 }}>
              <div style={{ width: 24, height: 3, background: '#E31B23', marginBottom: 12 }} />
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 28, color: 'white', lineHeight: 1.3, fontWeight: 400 }}>
                Learning<br />Today<br />for a Stronger<br /><span style={{ color: '#E31B23' }}>Tomorrow.</span>
              </p>
            </div>
          </motion.div>

          {/* Values grid */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="why-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ borderColor: 'rgba(227,27,35,0.55)', background: 'rgba(227,27,35,0.07)' }}
                style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '28px 24px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(4px)', transition: 'all 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
              >
                {/* Icon in red circle */}
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid #E31B23', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <v.Icon size={18} color="#E31B23" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 10, fontWeight: 700, color: 'rgba(227,27,35,0.6)', letterSpacing: '0.1em', marginBottom: 6 }}>{v.num}</div>
                <h4 style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 8 }}>{v.title}</h4>
                <p style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.48)' }}>{v.desc}</p>
                <CornerDeco position="br" size={16} color="#E31B23" opacity={0.3} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .why-inner { padding: 0 40px !important; }
          .why-flex { flex-direction: column !important; gap: 48px !important; }
          .why-left { flex: none !important; }
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-inner { padding: 0 24px !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
