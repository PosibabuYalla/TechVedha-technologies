import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, ChartColumn } from 'lucide-react';
import { services } from '../data/services';

const RED = '#E31B23';
const NAVY = '#0F1B2D';

const highlights = [
  { Icon: Target, label: ['Strategic', 'Approach'] },
  { Icon: Users, label: ['Experienced', 'Experts'] },
  { Icon: ChartColumn, label: ['Real', 'Business Impact'] },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function ConsultingServices() {
  return (
    <section id="consulting" style={{ background: 'linear-gradient(135deg, #F8FAFD 0%, #EFF4FA 60%, #F5F8FC 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Soft background sweeps */}
      <svg aria-hidden="true" viewBox="0 0 1600 900" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path d="M0 200 C 120 300, 260 420, 380 900 H 0 Z" fill="rgba(227,27,35,0.05)" />
        <path d="M0 420 C 140 520, 260 680, 320 900 H 0 Z" fill="rgba(186,208,234,0.35)" />
      </svg>

      {/* Consultant photo — right side, fading into the background */}
      <div className="cs-photo" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '34%', pointerEvents: 'none' }}>
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 22%, #000 45%)', maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 22%, #000 45%)' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(248,250,253,0.25) 0%, transparent 30%)' }} />
      </div>

      <div style={{ maxWidth: 1480, width: '100%', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'clamp(320px, 24vw, 400px) minmax(0, 1fr)', gap: 40, alignItems: 'center', position: 'relative' }} className="cs-inner">

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
                Our Consulting Services
              </span>
            </div>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, min(3.3vw, 6.6vh), 58px)', color: NAVY, lineHeight: 1.04, fontWeight: 400, margin: '18px 0 0' }}>
            From Strategy<br />
            <span style={{ color: RED }}>to Measurable</span><br />
            Business<br />
            Outcomes.
          </h2>

          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.5, color: '#2A3442', margin: '20px 0 0', maxWidth: 390 }}>
            We help organizations solve complex challenges, optimize operations and accelerate growth through expert consulting and technology advisory.
          </p>

          <button onClick={() => scrollTo('#contact')} className="btn-primary" style={{ marginTop: 28, borderRadius: 6, padding: '16px 32px', fontSize: 17, boxShadow: '0 10px 24px rgba(227,27,35,0.25)' }}>
            Explore All Services <ArrowRight size={18} className="arrow" />
          </button>

          <div className="cs-highlights" style={{ display: 'flex', alignItems: 'center', marginTop: 34 }}>
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

        {/* Service tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'clamp(10px, 1.6vh, 18px)' }} className="cs-grid">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              onClick={() => scrollTo('#contact')}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="cs-tile"
            >
              <span style={{ width: 'clamp(42px, 6vh, 58px)', height: 'clamp(42px, 6vh, 58px)', borderRadius: '50%', background: `${s.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <s.Icon size={30} color={s.color} strokeWidth={1.9} />
              </span>
              <span style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.15vw, 18px)', fontWeight: 700, lineHeight: 1.22, color: NAVY, marginTop: 'clamp(10px, 1.6vh, 16px)' }}>
                {s.title}
              </span>
              <span style={{ fontFamily: 'Inter', fontSize: 13.5, lineHeight: 1.4, color: '#5B6675', marginTop: 8, paddingRight: 34 }}>{s.desc}</span>
              <span className="cs-arrow">
                <ArrowRight size={15} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        .cs-tile {
          position: relative; display: flex; flex-direction: column; align-items: flex-start; text-align: left;
          min-height: clamp(150px, 20vh, 210px);
          background: rgba(255,255,255,0.94); border: 1px solid rgba(15,27,45,0.06); border-radius: 14px;
          padding: clamp(12px, 1.8vh, 20px) 20px clamp(12px, 1.8vh, 18px);
          box-shadow: 0 8px 24px rgba(15,27,45,0.06);
          cursor: pointer; font: inherit; backdrop-filter: blur(4px);
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .cs-tile:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(15,27,45,0.12); border-color: rgba(227,27,35,0.35); }
        .cs-arrow {
          position: absolute; right: 14px; bottom: 14px; width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #EEF2F7; color: ${NAVY};
          transition: background 0.25s, color 0.25s;
        }
        .cs-tile:hover .cs-arrow { background: ${RED}; color: #fff; }

        @media (min-width: 1281px) {
          .cs-inner { padding-right: 22vw !important; }
        }
        @media (max-width: 1280px) {
          .cs-photo { display: none; }
        }
        @media (max-width: 1100px) {
          .cs-inner { grid-template-columns: minmax(0, 1fr) !important; padding: 0 32px !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .cs-inner { padding: 0 20px !important; }
        }
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 12px !important; }
          .cs-tile { display: grid; grid-template-columns: 52px 1fr; column-gap: 14px; align-items: start; min-height: 0; padding: 16px 18px; }
          .cs-tile > span:first-child { grid-row: span 2; width: 52px !important; height: 52px !important; }
          .cs-tile > span:nth-child(2) { margin-top: 2px !important; }
          .cs-tile > span:nth-child(3) { margin-top: 4px !important; }
        }

        @media (max-width: 480px) {
          .cs-highlights { flex-wrap: wrap; row-gap: 14px; }
          .cs-highlights > div { padding: 0 16px 0 0 !important; border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
