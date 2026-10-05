import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, ChartColumn } from 'lucide-react';
import { trainingTopics } from '../data/services';

const RED = '#E31B23';
const NAVY = '#0F1B2D';

const highlights = [
  { Icon: GraduationCap, label: ['Industry', 'Focused'] },
  { Icon: Users, label: ['Hands-on', 'Learning'] },
  { Icon: ChartColumn, label: ['Career', 'Growth'] },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function TrainingExpertise() {
  return (
    <section id="training" style={{ background: 'linear-gradient(135deg, #F7FAFD 0%, #EEF3F9 55%, #F4F7FB 100%)', minHeight: '100vh', padding: '100px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Soft background curves */}
      <svg aria-hidden="true" viewBox="0 0 1600 900" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="teCurve" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={RED} stopOpacity="0.85" />
            <stop offset="1" stopColor={RED} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 0 H 900 C 760 220, 620 520, 420 900 H 0 Z" fill="rgba(255,255,255,0.65)" />
        <path d="M1150 0 C 1250 120, 1420 160, 1600 140 V 0 Z" fill="rgba(227,27,35,0.05)" />
        <path d="M0 620 C 40 740, 120 840, 260 900" fill="none" stroke="url(#teCurve)" strokeWidth="2" />
      </svg>

      {/* Dot textures */}
      <div style={{ position: 'absolute', left: 0, top: '22%', width: 80, height: 160, backgroundImage: 'radial-gradient(rgba(15,27,45,0.14) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, width: 220, height: 200, backgroundImage: 'radial-gradient(rgba(15,27,45,0.16) 1.3px, transparent 1.3px)', backgroundSize: '9px 9px', WebkitMaskImage: 'linear-gradient(225deg, #000 0%, transparent 75%)', maskImage: 'linear-gradient(225deg, #000 0%, transparent 75%)', pointerEvents: 'none' }} />

      {/* Trainer photo — bottom right, fading into the background */}
      <motion.img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
        alt="Instructor leading a corporate training session"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="te-photo"
        style={{ position: 'absolute', right: 0, bottom: 0, width: '40%', height: '46%', objectFit: 'cover', objectPosition: 'center 30%', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 30%), linear-gradient(180deg, transparent 0%, #000 25%)', WebkitMaskComposite: 'source-in', maskImage: 'linear-gradient(90deg, transparent 0%, #000 30%), linear-gradient(180deg, transparent 0%, #000 25%)', maskComposite: 'intersect', pointerEvents: 'none' }}
        loading="lazy"
      />

      <div style={{ maxWidth: 1480, width: '100%', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '370px 1fr', gap: 40, alignItems: 'center', position: 'relative' }} className="te-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ position: 'relative', paddingTop: 12 }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 2, height: 16, background: RED }} />
              <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: NAVY }}>
                Our Core Training Expertise
              </span>
            </div>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(42px, min(4.6vw, 8.5vh), 76px)', color: NAVY, lineHeight: 1.02, fontWeight: 400, margin: '18px 0 0' }}>
            Our Core<br />
            <span style={{ color: RED }}>Training</span><br />
            Expertise
          </h2>

          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(16px, 1.3vw, 20px)', lineHeight: 1.45, color: '#2A3442', margin: '22px 0 0', maxWidth: 330 }}>
            In-demand technologies and skills for today&apos;s business needs.
          </p>

          <button onClick={() => scrollTo('#programs')} className="btn-primary" style={{ marginTop: 28, borderRadius: 6, padding: '16px 32px', fontSize: 17, boxShadow: '0 10px 24px rgba(227,27,35,0.25)' }}>
            Explore All Programs <ArrowRight size={18} className="arrow" />
          </button>

          <div className="te-highlights" style={{ display: 'flex', alignItems: 'center', marginTop: 34 }}>
            {highlights.map(({ Icon, label }, i) => (
              <div key={label[0]} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: i === 0 ? '0 14px 0 0' : '0 14px', borderLeft: i === 0 ? 'none' : '1px solid #D5DCE5' }}>
                <Icon size={28} color={RED} strokeWidth={1.7} style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter', fontSize: 13.5, fontWeight: 500, lineHeight: 1.3, color: NAVY, whiteSpace: 'nowrap' }}>
                  {label[0]}<br />{label[1]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Topic tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 'clamp(10px, 1.6vh, 18px)' }} className="te-grid">
          {trainingTopics.map((topic, i) => (
            <motion.button
              key={topic.title}
              type="button"
              onClick={() => scrollTo('#programs')}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="te-tile"
            >
              <span style={{ width: 'clamp(40px, 6vh, 54px)', height: 'clamp(40px, 6vh, 54px)', borderRadius: '50%', background: `${topic.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <topic.Icon size={28} color={topic.color} strokeWidth={2} />
              </span>
              <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 700, lineHeight: 1.22, color: NAVY, marginTop: 'clamp(10px, 1.6vh, 18px)' }}>
                {topic.title}
              </span>
              <span style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: 1.4, color: '#5B6675', marginTop: 8, paddingRight: 28 }}>{topic.desc}</span>
              <span className="te-arrow">
                <ArrowRight size={15} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        .te-tile {
          display: flex; flex-direction: column; align-items: flex-start; text-align: left;
          min-height: clamp(150px, 22vh, 200px);
          background: rgba(255,255,255,0.94); border: 1px solid rgba(15,27,45,0.06); border-radius: 14px;
          padding: clamp(14px, 2vh, 20px) 16px clamp(12px, 1.6vh, 16px);
          box-shadow: 0 8px 24px rgba(15,27,45,0.06);
          cursor: pointer; font: inherit; position: relative;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .te-tile:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(15,27,45,0.12); border-color: rgba(227,27,35,0.35); }
        .te-arrow {
          position: absolute; right: 12px; bottom: 12px; width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #EEF2F7; color: ${NAVY};
          transition: background 0.25s, color 0.25s;
        }
        .te-tile:hover .te-arrow { background: ${RED}; color: #fff; }

        @media (max-width: 1280px) {
          .te-grid { grid-template-columns: repeat(5, minmax(0, 1fr)) !important; }
          .te-inner { grid-template-columns: 340px 1fr !important; }
        }
        @media (max-width: 1100px) {
          .te-inner { grid-template-columns: minmax(0, 1fr) !important; padding: 0 32px !important; gap: 40px !important; }
          .te-photo { display: none; }
        }
        @media (max-width: 900px) {
          .te-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 768px) {
          .te-inner { padding: 0 20px !important; }
        }
        @media (max-width: 600px) {
          .te-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }

        @media (max-width: 480px) {
          .te-highlights { flex-wrap: wrap; row-gap: 14px; }
          .te-highlights > div { padding: 0 16px 0 0 !important; border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
