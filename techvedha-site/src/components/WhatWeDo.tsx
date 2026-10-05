import { motion } from 'framer-motion';
import { MonitorCheck, GraduationCap, Settings, ArrowRight, ShieldCheck, Users, Rocket, BarChart3 } from 'lucide-react';

const RED = '#E31B23';
const RED_TEXT = '#FF3B42';

const cards = [
  {
    num: '01', Icon: MonitorCheck,
    title: 'Technology\nConsulting',
    desc: 'Practical technology advisory and consulting solutions aligned with business goals, operational priorities and long-term growth.',
    image: '/images/hero.png',
    imagePos: '68% center',
    href: '#consulting',
  },
  {
    num: '02', Icon: GraduationCap,
    title: 'Corporate\nTraining',
    desc: 'Customized, instructor-led and hands-on technology training programs designed for teams, departments and enterprise organizations.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    imagePos: 'center',
    href: '#training',
  },
  {
    num: '03', Icon: Settings,
    title: 'Customized\nCapability Programs',
    desc: 'Role-based learning and capability building programs designed around real-world business use cases and expected outcomes.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    imagePos: 'center',
    href: '#programs',
  },
];

const highlights = [
  { Icon: ShieldCheck, label: ['Practical', 'Expertise'] },
  { Icon: Users, label: ['Customized', 'Solutions'] },
  { Icon: Rocket, label: ['Experience-Based', 'Outcomes'] },
  { Icon: BarChart3, label: ['Business-Focused', 'Results'] },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function WhatWeDo() {
  return (
    <section id="what" style={{ background: 'radial-gradient(ellipse at 70% 0%, #172234 0%, #0D1522 45%, #080D16 100%)', minHeight: '100vh', padding: '110px 0 90px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Dotted map texture — top right */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '42%', height: 300, backgroundImage: 'radial-gradient(rgba(255,255,255,0.22) 1.2px, transparent 1.2px)', backgroundSize: '10px 10px', WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, #000 0%, rgba(0,0,0,0.5) 40%, transparent 70%)', maskImage: 'radial-gradient(ellipse at 70% 30%, #000 0%, rgba(0,0,0,0.5) 40%, transparent 70%)', opacity: 0.5, pointerEvents: 'none' }} />
      {/* Dot grids — left and bottom right */}
      <div style={{ position: 'absolute', left: 0, top: '24%', width: 90, height: 120, backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1.4px, transparent 1.4px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, bottom: 40, width: 140, height: 140, backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1.4px, transparent 1.4px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />

      {/* Glowing accent curves */}
      <svg aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: 0, width: 420, height: 300, pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="wwdCurveL" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={RED} stopOpacity="0.9" />
            <stop offset="1" stopColor={RED} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 20 C 60 140, 160 240, 400 290" fill="none" stroke="url(#wwdCurveL)" strokeWidth="1.5" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 300 200" preserveAspectRatio="none" style={{ position: 'absolute', right: 0, bottom: 140, width: 300, height: 200, pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="wwdCurveR" x1="1" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={RED} stopOpacity="0.8" />
            <stop offset="1" stopColor={RED} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M300 0 C 220 40, 140 120, 40 200" fill="none" stroke="url(#wwdCurveR)" strokeWidth="1.5" />
      </svg>

      <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 48px', width: '100%', position: 'relative' }} className="wwd-inner">

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 36 }} className="wwd-grid">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
            className="wwd-left"
          >
            {/* Large faded section number */}
            <span aria-hidden="true" style={{ position: 'absolute', top: -60, left: 250, fontFamily: 'DM Serif Display, serif', fontSize: 200, lineHeight: 1, color: 'rgba(255,255,255,0.035)', pointerEvents: 'none', userSelect: 'none' }} className="wwd-bignum">02</span>

            <div style={{ position: 'relative', paddingTop: 12 }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 2, height: 16, background: RED }} />
                <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                  <span style={{ color: RED_TEXT }}>Our</span> Services
                </span>
              </div>
            </div>

            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(44px, min(5vw, 8.5vh), 80px)', color: '#fff', lineHeight: 1.0, fontWeight: 400, margin: '18px 0 0' }}>
              What<br /><span style={{ color: RED_TEXT }}>We Do</span>
            </h2>
            <span style={{ width: 56, height: 3, background: RED, margin: '20px 0 18px' }} />

            <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', maxWidth: 300, margin: 0 }}>
              Helping organizations solve real business challenges through technology consulting, corporate training and capability-building programs.
            </p>

            <button onClick={() => scrollTo('#consulting')} className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 26, borderRadius: 4, padding: '16px 32px', fontSize: 16, boxShadow: '0 10px 24px rgba(227,27,35,0.25)' }}>
              Explore All Services <ArrowRight size={18} className="arrow" />
            </button>

            {/* Tagline with vertical accent */}
            <div style={{ position: 'relative', marginTop: 'auto', paddingTop: 32, paddingLeft: 40 }} className="wwd-tagline">
              <span style={{ position: 'absolute', left: 0, top: 40, bottom: -70, width: 2, background: `linear-gradient(180deg, transparent 0%, ${RED} 30%, ${RED} 70%, transparent 100%)` }} />
              <span style={{ display: 'block', width: 36, height: 2, background: RED, marginBottom: 14 }} />
              <p style={{ fontFamily: 'Inter', fontSize: 19, lineHeight: 1.3, color: 'rgba(255,255,255,0.88)', margin: 0 }}>
                From Strategy<br />to Real-World<br />Impact.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, alignSelf: 'start' }} className="wwd-cards">
            {cards.map((card, i) => (
              <motion.article
                key={card.num}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="wwd-card"
                onClick={() => scrollTo(card.href)}
              >
                <div className="wwd-media" style={{ position: 'relative' }}>
                  <div className="wwd-img-box" style={{ height: 'clamp(150px, 22vh, 210px)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
                    <img src={card.image} alt="" className="wwd-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: card.imagePos }} loading="lazy" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,13,22,0) 55%, rgba(8,13,22,0.55) 100%)' }} />
                  </div>
                  {/* Icon badge overlapping the photo */}
                  <div className="wwd-badge" style={{ position: 'absolute', left: 18, bottom: -44, width: 90, height: 90, borderRadius: '50%', background: '#0D1522', border: `2px solid ${RED}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(227,27,35,0.25)' }}>
                    <card.Icon size={40} color={RED_TEXT} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="wwd-body" style={{ display: 'grid', gridTemplateColumns: '76px 1fr', padding: '58px 20px 26px 0', flex: 1 }}>
                  <div style={{ paddingTop: 26, paddingLeft: 20 }}>
                    <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 38, lineHeight: 1, color: 'rgba(255,255,255,0.55)' }}>{card.num}</span>
                    <span style={{ display: 'block', width: 36, height: 2, background: RED, marginTop: 14 }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(22px, 1.7vw, 28px)', color: '#fff', lineHeight: 1.12, margin: 0, fontWeight: 400, whiteSpace: 'pre-line' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter', fontSize: 14.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', margin: '14px 0 22px' }}>
                      {card.desc}
                    </p>
                    <span className="wwd-learn" style={{ marginTop: 'auto', fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: RED_TEXT, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      Learn More <ArrowRight size={16} className="arrow" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="wwd-strip"
          style={{ margin: 'clamp(18px, 3vh, 34px) 0 0 240px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'rgba(17,26,40,0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: 'clamp(16px, 2.6vh, 28px) 12px', backdropFilter: 'blur(6px)' }}
        >
          {highlights.map(({ Icon, label }, i) => (
            <div key={label[0]} className="wwd-strip-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}>
              <Icon size={46} color={RED_TEXT} strokeWidth={1.5} />
              <span style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: 500, lineHeight: 1.35, color: '#fff' }}>
                {label[0]}<br />{label[1]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .wwd-card {
          display: flex; flex-direction: column; cursor: pointer;
          background: linear-gradient(180deg, rgba(23,34,52,0.9) 0%, rgba(12,19,31,0.95) 100%);
          border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; padding: 6px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .wwd-card:hover { transform: translateY(-6px); border-color: rgba(227,27,35,0.55); box-shadow: 0 24px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(227,27,35,0.15); }
        .wwd-card-img { transition: transform 0.6s ease; }
        .wwd-card:hover .wwd-card-img { transform: scale(1.05); }
        .wwd-card:hover .wwd-learn .arrow { transform: translateX(4px); }

        @media (max-width: 1280px) {
          .wwd-grid { grid-template-columns: 1fr !important; }
          .wwd-left { max-width: 640px; }
          .wwd-bignum { left: auto !important; right: 0; }
          .wwd-tagline { display: none; }
          .wwd-strip { margin-left: 0 !important; max-width: none !important; }
        }
        @media (max-width: 1000px) {
          .wwd-inner { padding: 0 24px !important; }
          .wwd-cards { grid-template-columns: 1fr !important; }
          .wwd-card { flex-direction: row; }
          .wwd-media { width: 40%; flex-shrink: 0; }
          .wwd-img-box { height: 100% !important; min-height: 220px; }
          .wwd-badge { width: 64px !important; height: 64px !important; bottom: 14px !important; }
          .wwd-badge svg { width: 30px; height: 30px; }
          .wwd-body { padding: 26px 20px 24px 0 !important; align-content: center; }
          .wwd-strip { grid-template-columns: repeat(2, 1fr) !important; row-gap: 24px; }
          .wwd-strip-item:nth-child(3) { border-left: none !important; }
        }
        @media (max-width: 600px) {
          .wwd-card { flex-direction: column; }
          .wwd-media { width: auto; }
          .wwd-img-box { height: 190px !important; min-height: 0; }
          .wwd-badge { bottom: -32px !important; }
          .wwd-body { padding-top: 46px !important; }
        }
        @media (max-width: 560px) {
          .wwd-strip { grid-template-columns: 1fr !important; }
          .wwd-strip-item { border-left: none !important; justify-content: flex-start !important; padding-left: 16px; }
        }
      `}</style>
    </section>
  );
}
