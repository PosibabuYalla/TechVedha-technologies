import { motion } from 'framer-motion';
import { Search, ClipboardList, Lightbulb, Settings, ChartColumn, RefreshCw, ArrowRight, Target, Users, ChartNoAxesColumnIncreasing } from 'lucide-react';

const RED = '#E31B23';
const BLUE = '#1E6FD9';
const NAVY = '#0F1B2D';

const steps = [
  { num: '01', Icon: Search,        title: 'Understand', desc: 'We listen to your goals, challenges and current capabilities.',                  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80' },
  { num: '02', Icon: ClipboardList, title: 'Assess',     desc: 'We analyze requirements, identify opportunities and define the right approach.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { num: '03', Icon: Lightbulb,     title: 'Design',     desc: 'We create a customized solution and detailed learning or consulting plan.',      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
  { num: '04', Icon: Settings,      title: 'Deliver',    desc: 'We execute the plan through practical implementation, training or consulting.',  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
  { num: '05', Icon: ChartColumn,   title: 'Measure',    desc: 'We track progress and evaluate outcomes to ensure success.',                     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { num: '06', Icon: RefreshCw,     title: 'Improve',    desc: 'We refine and continuously enhance solutions for long-term growth.',             image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
];

const highlights = [
  { Icon: Target, label: ['Goal-Aligned', 'Approach'] },
  { Icon: Users, label: ['Collaborative', 'Process'] },
  { Icon: Settings, label: ['Transparent', 'Communication'] },
  { Icon: ChartNoAxesColumnIncreasing, label: ['Measurable', 'Results'] },
];

// Odd-numbered steps (01, 03, 05) sit lower; even steps sit higher.
const STAGGER = 36;
const ICON = 72;
const DOT_Y = ICON + 6 + 5; // dot centre, measured from the top of a raised column
const colour = (i: number) => (i % 2 === 0 ? BLUE : RED);

// Dashed path through each step's dot: x in 0..600 (stretched), y in px.
const pathPoints = steps.map((_, i) => ({ x: 50 + i * 100, y: DOT_Y + (i % 2 === 0 ? STAGGER : 0) }));
const segments = pathPoints.slice(1).map((p, i) => {
  const a = pathPoints[i];
  return { d: `M${a.x} ${a.y} C ${a.x + 50} ${a.y}, ${p.x - 50} ${p.y}, ${p.x} ${p.y}`, color: colour(i + 1) };
});

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function HowWeWork() {
  return (
    <section id="how" style={{ background: 'linear-gradient(180deg, #F6F9FD 0%, #EEF3FA 60%, #E8EFF8 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Skyline silhouette — bottom left */}
      <svg aria-hidden="true" viewBox="0 0 480 260" preserveAspectRatio="xMinYMax meet" style={{ position: 'absolute', left: 0, bottom: 0, width: '28%', height: '34%', pointerEvents: 'none', opacity: 0.35 }}>
        <defs>
          <linearGradient id="hwwSky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#9DB3CF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#9DB3CF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g fill="url(#hwwSky)">
          <rect x="0" y="120" width="40" height="140" /><rect x="46" y="70" width="34" height="190" /><polygon points="80,60 98,30 116,60 116,260 80,260" />
          <rect x="124" y="140" width="30" height="120" /><rect x="160" y="100" width="38" height="160" /><rect x="204" y="160" width="26" height="100" />
          <rect x="236" y="125" width="34" height="135" /><rect x="276" y="175" width="40" height="85" /><rect x="322" y="150" width="28" height="110" />
          <rect x="356" y="190" width="44" height="70" /><rect x="406" y="210" width="40" height="50" />
        </g>
      </svg>

      {/* Mountain with flag — bottom right */}
      <svg aria-hidden="true" viewBox="0 0 400 260" preserveAspectRatio="xMaxYMax meet" style={{ position: 'absolute', right: 0, bottom: 0, width: '24%', height: '36%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="hwwMtn" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7E95B3" stopOpacity="0.75" />
            <stop offset="1" stopColor="#C9D6E6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <polygon points="0,260 120,170 170,190 270,70 300,90 400,40 400,260" fill="url(#hwwMtn)" />
        <polygon points="270,70 250,110 285,96 300,90" fill="#fff" opacity="0.7" />
        <line x1="296" y1="88" x2="296" y2="40" stroke={NAVY} strokeWidth="2" />
        <polygon points="296,40 320,47 296,54" fill={RED} />
        <circle cx="290" cy="80" r="3" fill={NAVY} /><rect x="288" y="82" width="4" height="9" fill={NAVY} />
      </svg>

      {/* Large faded section number */}
      <span aria-hidden="true" style={{ position: 'absolute', top: '6%', left: '20%', fontFamily: 'DM Serif Display, serif', fontSize: 220, lineHeight: 1, color: 'rgba(15,27,45,0.035)', pointerEvents: 'none', userSelect: 'none' }}>07</span>

      <div style={{ maxWidth: 1560, width: '100%', margin: '0 auto', padding: '0 48px', position: 'relative' }} className="hww-inner">
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(300px, 23vw, 400px) minmax(0, 1fr)', gap: 32, alignItems: 'center' }} className="hww-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: 'relative', paddingTop: 12 }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 2, height: 16, background: RED }} />
                <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: NAVY }}>How We Work</span>
              </div>
            </div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(38px, min(3.8vw, 7.4vh), 64px)', color: NAVY, lineHeight: 1.05, fontWeight: 400, margin: '18px 0 0' }}>
              A Simple<br />Process for<br /><span style={{ color: RED }}>Real Impact.</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.5, color: '#2A3442', margin: '22px 0 0', maxWidth: 360 }}>
              From understanding your goals to delivering measurable results, we follow a structured and collaborative approach.
            </p>
            <button onClick={() => scrollTo('#contact')} className="btn-primary" style={{ marginTop: 28, borderRadius: 6, padding: '16px 32px', fontSize: 17, boxShadow: '0 10px 24px rgba(227,27,35,0.25)' }}>
              Our Approach <ArrowRight size={18} className="arrow" />
            </button>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: 'relative', minWidth: 0 }}>
            <svg aria-hidden="true" className="hww-path" viewBox={`0 0 600 ${DOT_Y + STAGGER + 10}`} preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: DOT_Y + STAGGER + 10, overflow: 'visible', pointerEvents: 'none' }}>
              {segments.map((s, i) => (
                <path key={i} d={s.d} fill="none" stroke={s.color} strokeOpacity="0.7" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
              ))}
              <path d={`M${pathPoints[0].x} ${pathPoints[0].y} L ${pathPoints[0].x - 40} ${pathPoints[0].y + 4}`} fill="none" stroke={BLUE} strokeOpacity="0.7" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
              <path d={`M${pathPoints[5].x} ${pathPoints[5].y} C ${pathPoints[5].x + 20} ${pathPoints[5].y}, ${pathPoints[5].x + 35} ${pathPoints[5].y + 8}, ${pathPoints[5].x + 45} ${pathPoints[5].y + 16}`} fill="none" stroke={BLUE} strokeOpacity="0.8" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
            </svg>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 'clamp(10px, 1.1vw, 20px)', position: 'relative' }} className="hww-steps">
              {steps.map((s, i) => {
                const c = colour(i);
                return (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="hww-step"
                    style={{ paddingTop: i % 2 === 0 ? STAGGER : 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <span style={{ width: ICON, height: ICON, borderRadius: '50%', background: `${c}1A`, boxShadow: `0 0 0 6px ${c}0D`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <s.Icon size={32} color={c} strokeWidth={1.9} />
                    </span>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', border: `2px solid ${c}`, background: '#F6F9FD', marginTop: 6, position: 'relative', zIndex: 1 }} />
                    <span style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 700, color: i % 2 === 0 ? BLUE : NAVY, marginTop: 4 }}>{s.num}</span>

                    <article className="hww-card" style={{ marginTop: 10 }}>
                      <div style={{ height: 'clamp(100px, 15vh, 160px)', overflow: 'hidden' }}>
                        <img src={s.image} alt="" className="hww-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      </div>
                      <div style={{ padding: 'clamp(12px, 1.8vh, 18px) 16px clamp(12px, 1.8vh, 16px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(20px, 1.5vw, 24px)', color: NAVY, fontWeight: 400, margin: 0 }}>{s.title}</h3>
                        <span style={{ width: 34, height: 2, background: c, margin: '10px 0' }} />
                        <p style={{ fontFamily: 'Inter', fontSize: 13.5, lineHeight: 1.5, color: '#3D4857', margin: 0 }}>{s.desc}</p>
                        <span style={{ width: 34, height: 2, background: c, opacity: 0.5, marginTop: 'auto', paddingTop: 0 }} className="hww-card-rule" />
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px 120px 0px' }} transition={{ duration: 0.6, delay: 0.3 }}
          className="hww-strip"
        >
          {highlights.map(({ Icon, label }, i) => {
            const c = colour(i);
            return (
              <div key={label[0]} className="hww-strip-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, borderLeft: i === 0 ? 'none' : '1px solid #DCE3EC' }}>
                <span style={{ width: 58, height: 58, borderRadius: '50%', background: `${c}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={28} color={c} strokeWidth={1.8} />
                </span>
                <span style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, lineHeight: 1.35, color: NAVY, whiteSpace: 'nowrap' }}>{label[0]}<br />{label[1]}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .hww-card {
          width: 100%; flex: 1; display: flex; flex-direction: column; overflow: hidden;
          background: rgba(255,255,255,0.96); border-radius: 12px; border: 1px solid rgba(15,27,45,0.06);
          box-shadow: 0 10px 28px rgba(15,27,45,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hww-card-rule { margin-top: auto !important; }
        .hww-card p { margin-bottom: 14px !important; }
        .hww-step:hover .hww-card { transform: translateY(-5px); box-shadow: 0 18px 36px rgba(15,27,45,0.14); }
        .hww-card-img { transition: transform 0.6s ease; }
        .hww-step:hover .hww-card-img { transform: scale(1.05); }
        .hww-strip {
          display: grid; grid-template-columns: repeat(4, 1fr);
          margin: clamp(18px, 3.4vh, 40px) 12% 0 calc(clamp(300px, 23vw, 400px) + 32px);
          background: rgba(255,255,255,0.92); border: 1px solid rgba(15,27,45,0.06); border-radius: 14px;
          padding: clamp(14px, 2.4vh, 24px) 12px; box-shadow: 0 10px 28px rgba(15,27,45,0.06);
        }
        .hww-strip-item { padding: 0 16px; }

        @media (max-width: 1280px) {
          .hww-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hww-strip { margin-left: 0; margin-right: 0; }
        }
        @media (max-width: 1000px) {
          .hww-inner { padding: 0 28px !important; }
          .hww-path { display: none; }
          .hww-steps { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; row-gap: 28px !important; }
          .hww-step { padding-top: 0 !important; }
          .hww-strip { grid-template-columns: repeat(2, 1fr); row-gap: 20px; }
          .hww-strip-item { border-left: none !important; justify-content: flex-start !important; }
        }
        @media (max-width: 640px) {
          .hww-inner { padding: 0 20px !important; }
          .hww-steps { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .hww-strip { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
