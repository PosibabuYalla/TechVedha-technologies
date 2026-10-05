import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, ChevronLeft, ChevronRight, Monitor, Clock,
  GraduationCap, Users, BadgeCheck, ChartNoAxesCombined,
} from 'lucide-react';
import { programs, programCategories, type ProgramCategory } from '../data/programs';

const RED = '#E31B23';
const RED_TEXT = '#FF3B42';

const highlights = [
  { Icon: GraduationCap, label: ['Industry-Relevant', 'Curriculum'] },
  { Icon: Users, label: ['Hands-on', 'Learning'] },
  { Icon: BadgeCheck, label: ['Certification', 'Support'] },
  { Icon: ChartNoAxesCombined, label: ['Career', 'Advancement'] },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function FeaturedPrograms() {
  const [category, setCategory] = useState<ProgramCategory>('All Programs');
  const trackRef = useRef<HTMLDivElement>(null);

  const visible = category === 'All Programs' ? programs : programs.filter(p => p.categories.includes(category));

  const selectCategory = (c: ProgramCategory) => {
    setCategory(c);
    trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const slide = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.fp-card');
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="programs" style={{ background: 'radial-gradient(ellipse at 70% 0%, #16233A 0%, #0C1525 50%, #070C16 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* Dot textures + glowing accent line */}
      <div style={{ position: 'absolute', left: 0, top: '30%', width: 80, height: 120, backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1.4px, transparent 1.4px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, width: 160, height: 120, backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1.4px, transparent 1.4px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 120, bottom: 0, width: 260, height: 260, backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1.2px, transparent 1.2px)', backgroundSize: '12px 12px', WebkitMaskImage: 'radial-gradient(circle at 0% 100%, #000 0%, transparent 70%)', maskImage: 'radial-gradient(circle at 0% 100%, #000 0%, transparent 70%)', pointerEvents: 'none' }} />
      <svg aria-hidden="true" viewBox="0 0 600 300" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: 0, width: '32%', height: '34%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="fpLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={RED} stopOpacity="0" />
            <stop offset="0.45" stopColor={RED_TEXT} stopOpacity="1" />
            <stop offset="1" stopColor={RED} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M120 120 L 600 300" stroke="url(#fpLine)" strokeWidth="2" />
        <circle cx="340" cy="202" r="4" fill={RED_TEXT} style={{ filter: 'drop-shadow(0 0 8px #FF3B42)' }} />
      </svg>

      {/* Handwritten note — top right */}
      <div className="fp-note" style={{ position: 'absolute', bottom: 'clamp(24px, 5vh, 56px)', right: 40, transform: 'rotate(-8deg)', pointerEvents: 'none', textAlign: 'left' }}>
        <p style={{ fontFamily: 'Caveat, cursive', fontSize: 24, lineHeight: 1.05, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
          Learning<br />&nbsp;Today for a<br />&nbsp;&nbsp;Stronger Tomorrow
        </p>
        <svg aria-hidden="true" viewBox="0 0 60 50" width="46" height="38" style={{ position: 'absolute', left: 30, top: -40 }}>
          <path d="M8 46 C 14 26, 30 12, 52 8" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 2 L 53 8 L 44 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div style={{ maxWidth: 1680, width: '100%', margin: '0 auto', padding: '0 48px', position: 'relative' }} className="fp-inner">
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(300px, 25vw, 440px) minmax(0, 1fr)', gap: 32, alignItems: 'start' }} className="fp-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: 'relative', paddingTop: 12 }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, background: RED }} />
              <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>
                Featured Training Programs
              </span>
            </div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(34px, min(3vw, 6.4vh), 58px)', color: '#fff', lineHeight: 1.05, fontWeight: 400, margin: '16px 0 0' }}>
              Build the Skills<br />
              <span style={{ color: RED_TEXT }}>for What&apos;s Next.</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.2vw, 19px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)', margin: '22px 0 0', maxWidth: 400 }}>
              Industry-relevant training programs designed to build future-ready skills and advance your career or organization.
            </p>
          </motion.div>

          {/* Filters + carousel */}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(12px, 2vh, 24px)' }} className="fp-toolbar">
              <div role="tablist" aria-label="Program categories" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flex: 1 }}>
                {programCategories.map(c => (
                  <button key={c} role="tab" aria-selected={category === c} onClick={() => selectCategory(c)} className={`fp-tab${category === c ? ' active' : ''}`}>
                    {c}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
                <button aria-label="Previous programs" onClick={() => slide(-1)} className="fp-nav"><ChevronLeft size={22} /></button>
                <button aria-label="Next programs" onClick={() => slide(1)} className="fp-nav fp-nav-primary"><ChevronRight size={22} /></button>
              </div>
            </div>

            <div ref={trackRef} className="fp-track">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((p, i) => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="fp-card"
                  >
                    <div style={{ position: 'relative', height: 'clamp(120px, 18vh, 210px)', margin: 4, borderRadius: 10, overflow: 'hidden' }}>
                      <img src={p.image} alt="" className="fp-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,12,22,0.35) 0%, transparent 40%, rgba(7,12,22,0.25) 100%)' }} />
                      <span className="fp-pill" style={{ left: 10 }}><Monitor size={13} /> {p.mode}</span>
                      <span className="fp-pill" style={{ right: 10, top: 'auto', bottom: 10 }}><Clock size={13} /> {p.duration}</span>
                    </div>
                    <div style={{ position: 'relative', padding: '0 20px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ position: 'absolute', top: -40, left: 20, width: 'clamp(54px, 7.4vh, 66px)', height: 'clamp(54px, 7.4vh, 66px)', borderRadius: 12, background: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ position: 'absolute', inset: 4, borderRadius: 9, background: `${p.color}18` }} />
                        <p.Icon size={30} color={p.color} strokeWidth={2} style={{ position: 'relative' }} />
                      </span>
                      <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(19px, 1.45vw, 24px)', color: '#0F1B2D', lineHeight: 1.15, fontWeight: 400, margin: 'clamp(32px, 4.6vh, 42px) 0 6px' }}>{p.title}</h3>
                      <p style={{ fontFamily: 'Inter', fontSize: 13.5, lineHeight: 1.42, color: '#4D5868', margin: 0 }}>{p.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #EDF0F4' }}>
                        {p.features.map(({ Icon, label }) => (
                          <span key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, fontFamily: 'Inter', fontSize: 11, fontWeight: 600, lineHeight: 1.25, color: '#0F1B2D' }}>
                            <Icon size={17} strokeWidth={1.8} color={RED} style={{ flexShrink: 0 }} />
                            {label}
                          </span>
                        ))}
                      </div>
                      <button onClick={() => scrollTo('#contact')} className="btn-primary fp-enroll">
                        Enroll Now <ArrowRight size={17} className="arrow" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px 120px 0px' }} transition={{ duration: 0.6, delay: 0.25 }}
          className="fp-strip"
        >
          {highlights.map(({ Icon, label }, i) => (
            <div key={label[0]} className="fp-strip-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}>
              <Icon size={36} color={RED_TEXT} strokeWidth={1.5} style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, lineHeight: 1.35, color: '#fff', whiteSpace: 'nowrap' }}>{label[0]}<br />{label[1]}</span>
            </div>
          ))}
          <div className="fp-strip-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.14)' }}>
            <button onClick={() => selectCategory('All Programs')} className="btn-outline-white" style={{ borderRadius: 6, borderColor: RED, padding: '13px 26px' }}>
              View All Programs <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .fp-tab {
          font-family: 'Inter', sans-serif; font-size: 13.5px; font-weight: 500; color: #fff;
          padding: 9px 18px; border-radius: 999px; cursor: pointer; white-space: nowrap;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.18);
          transition: background 0.2s, border-color 0.2s;
        }
        .fp-tab:hover { border-color: rgba(255,255,255,0.4); }
        .fp-tab.active { background: ${RED}; border-color: ${RED}; font-weight: 600; box-shadow: 0 6px 18px rgba(227,27,35,0.3); }
        .fp-nav {
          width: 48px; height: 48px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.06); color: #fff; border: 1px solid rgba(255,255,255,0.18);
          transition: background 0.2s, transform 0.2s;
        }
        .fp-nav:hover { background: rgba(255,255,255,0.14); }
        .fp-nav-primary { background: ${RED}; border-color: ${RED}; box-shadow: 0 6px 18px rgba(227,27,35,0.35); }
        .fp-nav-primary:hover { background: #B5121B; }

        .fp-track {
          display: grid; grid-auto-flow: column;
          grid-auto-columns: calc((100% - 60px) / 4);
          gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; padding: 4px 2px 8px;
        }
        .fp-track::-webkit-scrollbar { display: none; }
        .fp-card {
          scroll-snap-align: start; display: flex; flex-direction: column;
          background: #fff; border-radius: 14px; overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.35);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .fp-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.45); }
        .fp-card-img { transition: transform 0.6s ease; }
        .fp-card:hover .fp-card-img { transform: scale(1.05); }
        .fp-pill {
          position: absolute; top: 10px; display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: #fff; white-space: nowrap;
          padding: 5px 9px; border-radius: 999px;
          background: rgba(10,16,28,0.6); border: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(6px);
        }
        .fp-enroll {
          justify-content: center; width: 100%; margin-top: 12px; border-radius: 6px;
          padding: clamp(11px, 1.6vh, 14px) 20px !important; font-size: 16px !important;
        }
        .fp-strip {
          display: grid; grid-template-columns: repeat(4, 1fr) auto;
          margin: clamp(14px, 2.4vh, 30px) 240px 0 200px;
          background: rgba(15,23,36,0.85); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px;
          padding: clamp(14px, 2.4vh, 24px) 12px; backdrop-filter: blur(6px);
        }
        .fp-strip-item { padding: 0 18px; }

        @media (max-width: 1400px) {
          .fp-track { grid-auto-columns: calc((100% - 40px) / 3); }
          .fp-strip { margin-left: 0; margin-right: 0; }
          .fp-note { display: none; }
        }
        @media (max-width: 1100px) {
          .fp-inner { padding: 0 32px !important; }
          .fp-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .fp-track { grid-auto-columns: calc((100% - 20px) / 2); }
          .fp-strip { grid-template-columns: repeat(2, 1fr); row-gap: 20px; }
          .fp-strip-item { border-left: none !important; justify-content: flex-start !important; }
          .fp-strip-item:last-child { grid-column: 1 / -1; justify-content: center !important; }
        }
        @media (max-width: 640px) {
          .fp-inner { padding: 0 20px !important; }
          .fp-track { grid-auto-columns: 86%; }
          .fp-toolbar { flex-direction: column; align-items: flex-start !important; }
          .fp-strip { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
