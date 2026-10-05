import { motion } from 'framer-motion';
import {
  ChartColumnIncreasing, Presentation, Users, Target, Clock, Handshake,
  ArrowRight,
} from 'lucide-react';
import { stats } from '../data/stats';

const RED = '#E31B23';
const RED_TEXT = '#FF3B42';

const values = [
  { Icon: ChartColumnIncreasing, title: 'Customized Programs',   desc: 'Tailored training and consulting solutions designed around your goals, industry and team requirements.' },
  { Icon: Presentation,          title: 'Practical Learning',    desc: 'Hands-on, real-world use cases and projects to build job-ready skills and confidence.' },
  { Icon: Users,                 title: 'Experienced Trainers',  desc: 'Learn from industry experts with deep domain knowledge and real project experience.' },
  { Icon: Target,                title: 'Business-Aligned',      desc: 'Training and consulting mapped to business objectives for measurable results.' },
  { Icon: Clock,                 title: 'Flexible Delivery',     desc: 'Online, onsite and hybrid programs to fit your schedule and needs.' },
  { Icon: Handshake,             title: 'Long-Term Partnership', desc: 'Continuous learning, post-training support and ongoing guidance for sustained growth.' },
];

const pillars = ['Skills', 'People', 'Technology', 'Growth', 'Opportunities'];

export default function WhyTechVedha() {
  return (
    <section id="why" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '100px 0', background: 'radial-gradient(ellipse at 30% 0%, #141E2C 0%, #0B121D 50%, #070B12 100%)' }}>

      {/* City photo — right side */}
      <div className="why-photo" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '38%', pointerEvents: 'none' }}>
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '40% center', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 25%, #000 50%)', maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 25%, #000 50%)' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,18,29,0.55) 0%, rgba(11,18,29,0.35) 50%, rgba(11,18,29,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,11,18,0.35) 0%, transparent 30%, transparent 70%, rgba(7,11,18,0.85) 100%)' }} />

        {/* Pillar words */}
        <div style={{ position: 'absolute', top: '9%', right: 0, width: 210, padding: '18px 0 18px 26px', background: 'linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))', borderLeft: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(3px)' }}>
          {pillars.map((p, i) => (
            <div key={p} style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', padding: '9px 0', borderBottom: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>{p}</div>
          ))}
        </div>

        {/* Growth arrow */}
        <svg aria-hidden="true" viewBox="0 0 300 300" style={{ position: 'absolute', right: 30, top: '30%', width: '55%', height: '40%' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="whyArrow" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0" stopColor={RED} stopOpacity="0" />
              <stop offset="1" stopColor={RED_TEXT} stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0 290 C 120 250, 220 160, 285 20" fill="none" stroke="url(#whyArrow)" strokeWidth="3" />
          <path d="M268 30 L 287 12 L 292 38" fill="none" stroke={RED_TEXT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Tagline card */}
        <div style={{ position: 'absolute', right: 24, bottom: '26%', width: 150, padding: '18px 18px 16px', background: 'rgba(11,18,29,0.72)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, backdropFilter: 'blur(6px)' }}>
          <p style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, lineHeight: 1.5, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
            Learning today for a stronger tomorrow
          </p>
          <span style={{ display: 'block', width: 32, height: 2, background: RED, marginTop: 12 }} />
        </div>
      </div>

      {/* Dot grids + accent curve */}
      <div style={{ position: 'absolute', left: 0, top: '30%', width: 80, height: 130, backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1.4px, transparent 1.4px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, bottom: 0, width: 160, height: 140, backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1.4px, transparent 1.4px)', backgroundSize: '14px 14px', pointerEvents: 'none' }} />
      <svg aria-hidden="true" viewBox="0 0 300 400" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, top: '58%', width: 240, height: '34%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="whyCurve" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={RED} stopOpacity="0.1" />
            <stop offset="0.7" stopColor={RED} stopOpacity="0.9" />
            <stop offset="1" stopColor={RED} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 0 C 30 160, 130 300, 300 380" fill="none" stroke="url(#whyCurve)" strokeWidth="2" />
      </svg>

      <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1, width: '100%' }} className="why-inner">
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(300px, 22vw, 380px) minmax(0, 1fr)', gap: 36, alignItems: 'start' }} className="why-grid-wrap">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: 'relative', paddingTop: 12 }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 2, height: 16, background: RED }} />
                <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                  <span style={{ color: RED_TEXT }}>Why</span> Tech Vedha
                </span>
              </div>
            </div>

            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(40px, min(4.2vw, 7.6vh), 68px)', color: '#fff', lineHeight: 1.04, fontWeight: 400, margin: '18px 0 0' }}>
              More Than<br />
              <span style={{ color: RED_TEXT }}>Training.</span><br />
              A Stronger<br />
              <span style={{ color: RED_TEXT }}>Tomorrow.</span>
            </h2>

            <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.5, color: 'rgba(255,255,255,0.82)', margin: '22px 0 0', maxWidth: 360 }}>
              We combine industry expertise, practical learning and customized solutions to help individuals and organizations grow with confidence.
            </p>

            <button
              onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
              style={{ marginTop: 30, borderRadius: 6, padding: '16px 34px', fontSize: 17, boxShadow: '0 10px 24px rgba(227,27,35,0.28)' }}
            >
              Know More About Us <ArrowRight size={18} className="arrow" />
            </button>
          </motion.div>

          {/* Value cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'clamp(12px, 2vh, 20px)' }} className="why-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="why-card"
              >
                <div style={{ width: 'clamp(64px, 9vh, 88px)', height: 'clamp(64px, 9vh, 88px)', borderRadius: '50%', border: `1.5px solid ${RED}`, background: 'rgba(227,27,35,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 22px rgba(227,27,35,0.18)' }}>
                  <v.Icon size={36} color={RED_TEXT} strokeWidth={1.7} />
                </div>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(20px, 1.6vw, 25px)', color: '#fff', fontWeight: 400, lineHeight: 1.15, margin: 'clamp(12px, 2vh, 20px) 0 10px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: 14.5, lineHeight: 1.45, color: 'rgba(255,255,255,0.72)', margin: 0 }}>{v.desc}</p>
                <span style={{ display: 'block', width: 36, height: 2, background: RED, marginTop: 'auto' }} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="why-stats"
          style={{ margin: 'clamp(18px, 3vh, 30px) 0 0 140px', maxWidth: 760, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', background: 'rgba(15,23,36,0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: 'clamp(16px, 2.6vh, 26px) 12px', backdropFilter: 'blur(6px)' }}
        >
          {stats.map(({ Icon, value, label }, i) => (
            <div key={label} className="why-stat" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}>
              <Icon size={40} color={RED_TEXT} strokeWidth={1.5} />
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 'clamp(26px, 2.2vw, 34px)', fontWeight: 700, lineHeight: 1.1, color: RED_TEXT }}>{value}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: '#fff', marginTop: 4 }}>{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .why-card {
          display: flex; flex-direction: column;
          min-height: clamp(220px, 31vh, 280px);
          padding: clamp(16px, 2.4vh, 24px) 20px clamp(16px, 2.4vh, 22px);
          background: linear-gradient(180deg, rgba(25,35,52,0.78) 0%, rgba(13,20,32,0.88) 100%);
          border: 1px solid rgba(255,255,255,0.13); border-radius: 12px;
          box-shadow: 0 18px 36px rgba(0,0,0,0.3);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .why-card > span { margin-top: auto; }
        .why-card p { margin-bottom: 16px !important; }
        @media (min-width: 1281px) {
          .why-inner { padding-right: 21vw !important; }
          .why-stats { margin-right: -14vw !important; }
        }
        .why-card:hover { transform: translateY(-5px); border-color: rgba(227,27,35,0.55); box-shadow: 0 22px 44px rgba(0,0,0,0.4), 0 0 0 1px rgba(227,27,35,0.15); }

        @media (max-width: 1280px) {
          .why-photo { display: none; }
          .why-stats { margin-left: 0 !important; }
        }
        @media (max-width: 1100px) {
          .why-inner { padding: 0 32px !important; }
          .why-grid-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 600px) {
          .why-inner { padding: 0 20px !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .why-stats { grid-template-columns: 1fr !important; }
          .why-stat { border-left: none !important; justify-content: flex-start !important; padding-left: 12px; }
        }
      `}</style>
    </section>
  );
}
