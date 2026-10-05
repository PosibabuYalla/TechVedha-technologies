import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';
import { stats } from '../data/stats';

const RED = '#E31B23';
const NAVY = '#0F1B2D';

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Industries() {
  return (
    <section id="industries" style={{ background: 'linear-gradient(135deg, #F8FAFD 0%, #F1F5FA 55%, #F6F8FC 100%)', minHeight: '80vh', position: 'relative', overflow: 'hidden', padding: '100px 0', display: 'flex', alignItems: 'center' }}>

      {/* Dotted map texture — top centre */}
      <div style={{ position: 'absolute', top: 0, left: '45%', width: '40%', height: 180, backgroundImage: 'radial-gradient(rgba(15,27,45,0.16) 1.3px, transparent 1.3px)', backgroundSize: '9px 9px', WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, #000 0%, rgba(0,0,0,0.4) 45%, transparent 70%)', maskImage: 'radial-gradient(ellipse at 50% 20%, #000 0%, rgba(0,0,0,0.4) 45%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Soft sweeps */}
      <svg aria-hidden="true" viewBox="0 0 1600 900" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path d="M0 80 C 140 220, 260 420, 300 900 H 0 Z" fill="rgba(186,208,234,0.28)" />
        <path d="M0 600 C 120 700, 260 800, 420 900 H 0 Z" fill="rgba(227,27,35,0.07)" />
        <path d="M1600 300 C 1520 420, 1480 600, 1500 900 H 1600 Z" fill="rgba(227,27,35,0.05)" />
      </svg>

      <div style={{ maxWidth: 1560, width: '100%', margin: '0 auto', padding: '0 48px', position: 'relative', display: 'grid', gridTemplateColumns: 'clamp(300px, 25vw, 430px) minmax(0, 1fr)', gap: 36, alignItems: 'center' }} className="ind-inner">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="ind-head"
        >
          <div className="ind-head-text">
          <div style={{ position: 'relative', paddingTop: 12 }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 2, height: 16, background: RED }} />
              <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: NAVY }}>Industries / Who We Serve</span>
            </div>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, min(3.4vw, 6.8vh), 60px)', color: NAVY, lineHeight: 1.05, fontWeight: 400, margin: '18px 0 0' }}>
            Supporting<br />Organizations<br /><span style={{ color: RED }}>and Teams.</span>
          </h2>

          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.15vw, 18px)', lineHeight: 1.5, color: '#2A3442', margin: '20px 0 0', maxWidth: 400 }}>
            Supporting a wide range of organizations and teams with technology consulting, corporate training and capability-building programs.
          </p>
          </div>

          {/* Stats card */}
          <div className="ind-head-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 'clamp(18px, 3vh, 28px)', background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(15,27,45,0.06)', borderRadius: 12, boxShadow: '0 10px 28px rgba(15,27,45,0.06)', maxWidth: 420 }}>
            {stats.map(({ Icon, value, label }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 'clamp(12px, 2vh, 18px) 18px', borderLeft: i % 2 === 1 ? '1px solid #E6EBF1' : 'none', borderTop: i >= 2 ? '1px solid #E6EBF1' : 'none' }}>
                <Icon size={30} color={RED} strokeWidth={1.6} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: 'clamp(22px, 1.8vw, 28px)', fontWeight: 700, lineHeight: 1.1, color: NAVY }}>{value}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 12.5, color: '#4D5868', marginTop: 2 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scrollTo('#contact')} className="btn-primary ind-head-btn" style={{ justifySelf: 'start', marginTop: 'clamp(18px, 3vh, 28px)', borderRadius: 6, padding: '16px 30px', fontSize: 16, boxShadow: '0 10px 24px rgba(227,27,35,0.25)' }}>
            Explore Industry Solutions <ArrowRight size={18} className="arrow" />
          </button>
        </motion.div>

        {/* Industry cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'clamp(12px, 1.2vw, 22px)' }} className="ind-grid">
          {industries.map((ind, i) => (
            <motion.button
              key={ind.title}
              type="button"
              onClick={() => scrollTo('#contact')}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="ind-card"
            >
              <div className="ind-media" style={{ position: 'relative' }}>
                <div className="ind-img-box" style={{ height: 'clamp(110px, 18vh, 190px)', overflow: 'hidden' }}>
                  <img src={ind.image} alt="" className="ind-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <span className="ind-badge" style={{ position: 'absolute', left: 18, bottom: -30, width: 'clamp(52px, 7vh, 66px)', height: 'clamp(52px, 7vh, 66px)', borderRadius: '50%', background: '#fff', boxShadow: '0 6px 18px rgba(15,27,45,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: `${ind.color}16` }} />
                  <ind.Icon size={28} color={ind.color} strokeWidth={1.9} style={{ position: 'relative' }} />
                </span>
              </div>
              <div className="ind-body" style={{ padding: 'clamp(38px, 5.4vh, 46px) 18px clamp(14px, 2vh, 18px)', display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <span className="ind-title" style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(18px, 1.35vw, 22px)', lineHeight: 1.18, color: NAVY }}>{ind.title}</span>
                <span className="ind-desc" style={{ fontFamily: 'Inter', fontSize: 13.5, lineHeight: 1.45, color: '#4D5868', marginTop: 8, paddingRight: 36 }}>{ind.desc}</span>
                <span className="ind-arrow"><ArrowRight size={15} /></span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        .ind-card {
          position: relative; display: flex; flex-direction: column; text-align: left; overflow: hidden;
          background: rgba(255,255,255,0.96); border: 1px solid rgba(15,27,45,0.06); border-radius: 14px;
          box-shadow: 0 10px 28px rgba(15,27,45,0.07);
          cursor: pointer; font: inherit; padding: 0;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .ind-card:hover { transform: translateY(-5px); box-shadow: 0 18px 36px rgba(15,27,45,0.14); border-color: rgba(227,27,35,0.35); }
        .ind-card-img { transition: transform 0.6s ease; }
        .ind-card:hover .ind-card-img { transform: scale(1.05); }
        .ind-arrow {
          position: absolute; right: 14px; bottom: 14px; width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #EEF2F7; color: ${NAVY}; transition: background 0.25s, color 0.25s;
        }
        .ind-card:hover .ind-arrow { background: ${RED}; color: #fff; }

        .ind-head { display: grid; grid-template-columns: minmax(0, 1fr); grid-template-areas: 'text' 'stats' 'btn'; }
        .ind-head-text { grid-area: text; }
        .ind-head-stats { grid-area: stats; }
        .ind-head-btn { grid-area: btn; }

        /* Small laptops & tablets: header becomes a two-column row above a 4-up card grid */
        @media (max-width: 1280px) {
          .ind-inner { grid-template-columns: minmax(0, 1fr) !important; gap: clamp(20px, 3.4vh, 36px) !important; padding: 0 36px !important; }
          .ind-head { grid-template-columns: minmax(0, 1fr) minmax(300px, 420px); grid-template-areas: 'text stats' 'btn stats'; column-gap: 48px; align-items: end; }
          .ind-head-stats { margin-top: 0 !important; width: 100%; }
          .ind-head h2 { font-size: clamp(32px, 3.4vw, 42px) !important; margin-top: 12px !important; }
          .ind-head p { margin-top: 14px !important; }
          .ind-img-box { height: clamp(90px, 13vh, 150px) !important; }
          .ind-badge { width: 50px !important; height: 50px !important; bottom: -25px !important; }
          .ind-body { padding-top: 34px !important; }
          .ind-title { font-size: 18px !important; }
          .ind-desc { font-size: 13px !important; }
        }
        @media (max-width: 900px) {
          .ind-inner { padding: 0 24px !important; }
          .ind-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .ind-img-box { height: 150px !important; }
        }
        @media (max-width: 700px) {
          .ind-head { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'text' 'stats' 'btn'; }
          .ind-head-stats { margin-top: 20px !important; max-width: none !important; }
        }
        /* Phones: one card per row, image on the left */
        @media (max-width: 560px) {
          .ind-inner { padding: 0 18px !important; }
          .ind-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 12px !important; }
          .ind-card { flex-direction: row; min-height: 124px; }
          .ind-media { width: 36%; flex-shrink: 0; }
          .ind-img-box { height: 100% !important; }
          .ind-badge { width: 40px !important; height: 40px !important; left: 8px !important; bottom: 8px !important; }
          .ind-badge svg { width: 20px; height: 20px; }
          .ind-body { padding: 14px 14px 14px 14px !important; justify-content: center; }
          .ind-title { font-size: 17px !important; }
          .ind-desc { padding-right: 34px !important; }
          .ind-arrow { width: 28px; height: 28px; right: 10px; bottom: 10px; }
          .ind-head-stats > div { padding: 12px !important; gap: 10px !important; }
        }
      `}</style>
    </section>
  );
}
