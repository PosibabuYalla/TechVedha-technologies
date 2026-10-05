import { motion } from 'framer-motion';
import { MonitorCheck, GraduationCap, Layers, ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerDeco from './CornerDeco';

const cards = [
  {
    num: '01', Icon: MonitorCheck,
    title: 'Technology\nConsulting',
    desc: 'Practical technology advisory and consulting solutions aligned with business goals, operational priorities and long-term growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    num: '02', Icon: GraduationCap,
    title: 'Corporate\nTraining',
    desc: 'Customized, instructor-led and hands-on technology programs designed for teams, departments and enterprise organizations.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  },
  {
    num: '03', Icon: Layers,
    title: 'Customized\nCapability Programs',
    desc: 'Role-based learning and capability-building programs designed around skill gaps, technology stacks, business use cases and expected outcomes.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" style={{ background: '#050607', minHeight: '100vh', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background grid pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, pointerEvents: 'none' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', left: `${i * 9}%`, top: 0, bottom: 0, width: 1, background: '#E31B23' }} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', top: `${i * 14}%`, left: 0, right: 0, height: 1, background: '#E31B23' }} />
        ))}
      </div>

      {/* Large red diamond accent */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, background: '#E31B23', opacity: 0.05, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px', display: 'flex', gap: 80, alignItems: 'flex-start' }} className="whatwedo-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: '0 0 280px' }}
          className="whatwedo-left"
        >
          <SectionLabel number="02" label="What We Do" light />
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(40px, 4vw, 58px)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: '0 0 8px' }}>
            What<br /><span style={{ color: '#E31B23' }}>We Do</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0 24px' }}>
            <div style={{ width: 40, height: 3, background: '#E31B23' }} />
            <div style={{ width: 6, height: 6, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </div>
          <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', maxWidth: 260 }}>
            Helping organizations solve real business challenges through technology consulting, corporate training and capability-building programs.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }} className="whatwedo-cards">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, borderColor: 'rgba(227,27,35,0.4)' }}
              style={{ background: '#111417', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', overflow: 'hidden', position: 'relative', cursor: 'pointer', transition: 'border-color 0.3s, transform 0.3s' }}
              className="what-card"
            >
              {/* Image */}
              <div style={{ width: 180, flexShrink: 0, position: 'relative', overflow: 'hidden' }} className="what-card-img">
                <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,6,7,0.45)' }} />
                {/* Icon overlay on image */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 48, height: 48, border: '1.5px solid rgba(227,27,35,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <card.Icon size={22} color="#E31B23" />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 32px', flex: 1, position: 'relative' }}>
                <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, color: '#E31B23', letterSpacing: '0.12em' }}>{card.num}</span>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 26, color: 'white', lineHeight: 1.2, margin: '8px 0 12px', fontWeight: 400, whiteSpace: 'pre-line' }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.48)', marginBottom: 20 }}>
                  {card.desc}
                </p>
                <button
                  onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#E31B23', display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}
                >
                  Know More <ArrowRight size={14} />
                </button>

                {/* Corner brackets inside card */}
                <CornerDeco position="tr" size={20} color="#E31B23" opacity={0.3} />
              </div>

              {/* Red corner triangle */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 52, height: 52, background: '#E31B23', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', opacity: 0.75 }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .whatwedo-inner { flex-direction: column !important; padding: 0 24px !important; gap: 40px !important; }
          .whatwedo-left { flex: none !important; }
          .what-card-img { width: 120px !important; }
        }
        @media (max-width: 600px) {
          .what-card { flex-direction: column !important; }
          .what-card-img { width: 100% !important; height: 160px !important; }
        }
      `}</style>
    </section>
  );
}
