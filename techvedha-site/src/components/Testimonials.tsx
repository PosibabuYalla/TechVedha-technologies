import { motion } from 'framer-motion';
import { Star, Users, GraduationCap, ChartNoAxesCombined, ExternalLink } from 'lucide-react';
import { testimonials, learnerStats, GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '../data/testimonials';

const RED = '#E31B23';
const RED_TEXT = '#FF3B42';
const STAT_ICONS = [GraduationCap, ChartNoAxesCombined, Star];

const people: { src: string; pos: React.CSSProperties; mask: string }[] = [
  { src: 'photo-1507003211169-0a1dd7228f2d', pos: { left: 0, bottom: 0, width: '15%', height: '55%' }, mask: 'radial-gradient(ellipse 70% 60% at 30% 60%, #000 35%, transparent 100%)' },
  { src: 'photo-1494790108377-be9c29b29330', pos: { right: 0, bottom: 0, width: '15%', height: '55%' }, mask: 'radial-gradient(ellipse 70% 60% at 70% 60%, #000 35%, transparent 100%)' },
];

// Two marquee rows, alternating reviews so neighbours differ.
const rows = [testimonials.filter((_, i) => i % 2 === 0), testimonials.filter((_, i) => i % 2 === 1)];

const initials = (name: string) =>
  name.replace(/[^A-Za-z\s-]/g, '').split(/[\s-]+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();

// Google "G" mark
function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" style={{ flexShrink: 0, display: 'block' }}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

// Five stars filled to `value` (supports fractions, e.g. 4.8)
function Stars({ value, size = 15 }: { value: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }} role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, s) => {
        const fill = Math.max(0, Math.min(1, value - s));
        return (
          <span key={s} style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
            <Star size={size} color="#FBBC04" fill="none" strokeWidth={1.5} style={{ position: 'absolute', inset: 0 }} />
            <span style={{ position: 'absolute', top: 0, left: 0, height: size, width: `${fill * 100}%`, overflow: 'hidden' }}>
              <Star size={size} color="#FBBC04" fill="#FBBC04" strokeWidth={1.5} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

const AVATAR_COLORS = ['#1A73E8', '#E37400', '#188038', '#D93025', '#9334E6', '#12B5CB', '#C5221F', '#1E8E3E'];
const avatarColor = (name: string) => AVATAR_COLORS[[...name].reduce((h, c) => h + c.charCodeAt(0), 0) % AVATAR_COLORS.length];

function ReviewCard({ t, hidden }: { t: (typeof testimonials)[number]; hidden?: boolean }) {
  return (
    <figure className="tm-card" aria-hidden={hidden || undefined}>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="tm-avatar" style={{ background: avatarColor(t.name) }}>{initials(t.name)}</span>
        <span style={{ minWidth: 0, flex: 1 }}>
          <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 14.5, fontWeight: 600, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</span>
          <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 12.5, color: 'rgba(255,255,255,0.55)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.meta}</span>
        </span>
        <span title="Posted on Google"><GoogleLogo size={22} /></span>
      </figcaption>
      {t.rating !== undefined && <div style={{ marginTop: 12, lineHeight: 0 }}><Stars value={t.rating} /></div>}
      <blockquote className="tm-text" title={t.quote}>{t.quote}</blockquote>
      <span style={{ marginTop: 'auto', paddingTop: 10, fontFamily: 'Inter', fontSize: 11.5, color: 'rgba(255,255,255,0.45)' }}>
        Posted on <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Google</span>
      </span>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#060A13', padding: '100px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* ---------- Background ---------- */}
      {/* Base gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 50% 0%, #15233B 0%, #0A1222 45%, #060A13 100%)', pointerEvents: 'none' }} />

      {/* Learners, rendered as soft monochrome portraits so they sit behind the content */}
      {people.map(p => (
        <img
          key={p.src}
          src={`https://images.unsplash.com/${p.src}?w=600&q=80`} alt=""
          className="tm-person"
          style={{ position: 'absolute', ...p.pos, objectFit: 'cover', objectPosition: '50% 20%', WebkitMaskImage: p.mask, maskImage: p.mask, filter: 'grayscale(1) contrast(1.05) brightness(0.9)', opacity: 0.26, pointerEvents: 'none' }}
          loading="lazy"
        />
      ))}

      {/* Drifting glow orbs */}
      <div className="tm-orb tm-orb-red" />
      <div className="tm-orb tm-orb-blue" />
      <div className="tm-orb tm-orb-red2" />

      {/* Fine grid that fades out towards the edges */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '56px 56px', WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 45%, #000 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 60% 55% at 50% 45%, #000 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Spotlight behind the heading */}
      <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '55%', background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Floating notes (wide screens) */}
      <div className="tm-float tm-badge" style={{ position: 'absolute', top: 'calc(72px + 5vh)', left: '7%', transform: 'rotate(-6deg)' }}>
        <Users size={28} color={RED_TEXT} strokeWidth={1.6} />
        <span>
          <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 24, fontWeight: 700, color: RED_TEXT, lineHeight: 1 }}>{learnerStats[0].value}</span>
          <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 13, color: '#fff', marginTop: 4 }}>{learnerStats[0].label}</span>
        </span>
      </div>
      <div className="tm-float" style={{ position: 'absolute', top: 'calc(72px + 4vh)', right: '8%', transform: 'rotate(-10deg)' }}>
        <span style={{ fontFamily: 'Caveat, cursive', fontSize: 26, lineHeight: 1.05, color: 'rgba(255,255,255,0.88)', display: 'block' }}>Real Learners<br />&nbsp;Real Growth<br />&nbsp;&nbsp;Real Impact</span>
        <svg aria-hidden="true" viewBox="0 0 120 20" width="110" height="18" style={{ display: 'block', marginLeft: 30 }}>
          <path d="M2 16 C 40 6, 80 4, 118 8" fill="none" stroke={RED_TEXT} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* ---------- Content ---------- */}
      <div style={{ width: '100%', position: 'relative' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', padding: '0 24px' }}
        >
          <span className="tm-eyebrow">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: RED_TEXT, boxShadow: `0 0 10px ${RED_TEXT}` }} />
            Testimonials
          </span>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, min(4.2vw, 7.6vh), 68px)', color: '#fff', lineHeight: 1.06, fontWeight: 400, margin: '14px 0 0' }}>
            What Our <span className="tm-gradient-text">Learners Say</span>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)', margin: '12px auto 0', maxWidth: 720 }}>
            Real stories from our students who have built skills, confidence and successful careers with Tech Vedha Technologies.
          </p>

          <div className="tm-google">
            <GoogleLogo size={34} />
            <span style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#5F6368', letterSpacing: '0.02em' }}>Google Reviews</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                <span style={{ fontFamily: 'Inter', fontSize: 26, fontWeight: 700, color: '#202124', lineHeight: 1 }}>{GOOGLE_RATING.toFixed(1)}</span>
                <Stars value={GOOGLE_RATING} size={18} />
              </span>
            </span>
            {GOOGLE_REVIEWS_URL && (
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="tm-google-link">
                See all reviews <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Marquee rows */}
        <div className="tm-marquee" style={{ marginTop: 'clamp(20px, 3.6vh, 40px)' }}>
          {rows.map((row, r) => (
            <div key={r} className="tm-row">
              <div className={`tm-row-track ${r === 0 ? 'tm-left' : 'tm-right'}`} style={{ animationDuration: `${row.length * 6}s` }}>
                {row.map((t, i) => <ReviewCard key={`a-${i}`} t={t} />)}
                {row.map((t, i) => <ReviewCard key={`b-${i}`} t={t} hidden />)}
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px 120px 0px' }} transition={{ duration: 0.6, delay: 0.2 }}
          className="tm-strip"
        >
          {learnerStats.map(({ value, label }, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={label} className="tm-strip-item" style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                <span className="tm-strip-icon" style={Icon === Star ? { background: '#fff', borderColor: '#fff' } : undefined}>
                  {Icon === Star ? <GoogleLogo size={24} /> : <Icon size={24} color={RED_TEXT} strokeWidth={1.7} />}
                </span>
                <span>
                  <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 'clamp(22px, 1.9vw, 30px)', fontWeight: 700, lineHeight: 1.1, color: '#fff' }}>{value}</span>
                  <span style={{ display: 'block', fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.65)', marginTop: 2, whiteSpace: 'nowrap' }}>{label}</span>
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        /* Background glows */
        .tm-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; will-change: transform; }
        .tm-orb-red  { width: 46vw; height: 46vw; max-width: 760px; max-height: 760px; left: -12%; top: -22%; background: radial-gradient(circle, rgba(227,27,35,0.30) 0%, transparent 70%); animation: tmDrift1 22s ease-in-out infinite alternate; }
        .tm-orb-blue { width: 50vw; height: 50vw; max-width: 820px; max-height: 820px; right: -14%; bottom: -30%; background: radial-gradient(circle, rgba(30,111,217,0.32) 0%, transparent 70%); animation: tmDrift2 26s ease-in-out infinite alternate; }
        .tm-orb-red2 { width: 26vw; height: 26vw; max-width: 420px; max-height: 420px; right: 18%; top: 8%; background: radial-gradient(circle, rgba(255,59,66,0.16) 0%, transparent 70%); animation: tmDrift1 30s ease-in-out infinite alternate-reverse; }
        @keyframes tmDrift1 { from { transform: translate(0, 0); } to { transform: translate(8vw, 6vh); } }
        @keyframes tmDrift2 { from { transform: translate(0, 0); } to { transform: translate(-7vw, -8vh); } }

        .tm-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #fff;
          padding: 8px 18px; border-radius: 999px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
        }
        .tm-gradient-text {
          background: linear-gradient(90deg, #FF5A5F 0%, ${RED} 50%, #FF8A65 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .tm-badge {
          display: flex; align-items: center; gap: 12px; padding: 12px 20px;
          background: rgba(15,23,36,0.7); border: 1px solid rgba(255,255,255,0.14); border-radius: 14px;
          box-shadow: 0 14px 30px rgba(0,0,0,0.35); backdrop-filter: blur(8px);
        }

        .tm-google {
          display: inline-flex; align-items: center; gap: 14px; margin-top: clamp(16px, 2.6vh, 24px);
          padding: 12px 22px 12px 16px; border-radius: 14px; background: #fff;
          box-shadow: 0 14px 34px rgba(0,0,0,0.35);
        }
        .tm-google-link {
          display: inline-flex; align-items: center; gap: 6px; margin-left: 6px; padding-left: 16px;
          border-left: 1px solid #E3E6EA; font-family: 'Inter', sans-serif; font-size: 13.5px; font-weight: 600;
          color: #1A73E8; text-decoration: none;
        }
        .tm-google-link:hover { text-decoration: underline; }

        /* Marquee */
        .tm-marquee {
          display: flex; flex-direction: column; gap: clamp(14px, 2vh, 20px);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
        .tm-row { overflow: hidden; }
        .tm-row-track { display: flex; gap: 20px; width: max-content; padding: 4px 0; animation: tmScroll linear infinite; }
        .tm-row-track.tm-right { animation-direction: reverse; }
        .tm-marquee:hover .tm-row-track { animation-play-state: paused; }
        @keyframes tmScroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 10px)); } }

        .tm-card {
          flex: 0 0 auto; width: clamp(300px, 24vw, 380px); margin: 0;
          display: flex; flex-direction: column;
          height: clamp(196px, 26vh, 240px);
          padding: clamp(14px, 2vh, 20px) 20px;
          background: linear-gradient(160deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 100%);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .tm-card:hover { border-color: rgba(255,59,66,0.55); background: linear-gradient(160deg, rgba(255,255,255,0.1) 0%, rgba(227,27,35,0.06) 100%); transform: translateY(-4px); }
        .tm-text {
          font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.86);
          margin: 12px 0 0; white-space: pre-line;
          display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
        }
        .tm-avatar {
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: #fff;
          background: linear-gradient(135deg, ${RED} 0%, #7A0E14 100%); border: 2px solid rgba(255,255,255,0.18);
        }

        /* Stats */
        .tm-strip {
          display: grid; grid-template-columns: repeat(3, 1fr);
          margin: clamp(20px, 3.4vh, 36px) auto 0; width: calc(100% - 96px); max-width: 960px;
          background: linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
          padding: clamp(14px, 2.4vh, 22px) 12px; backdrop-filter: blur(10px);
        }
        .tm-strip-item { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 0 16px; }
        .tm-strip-icon {
          width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(227,27,35,0.12); border: 1px solid rgba(255,59,66,0.35);
        }

        @media (max-width: 1700px) { .tm-float { display: none; } }
        @media (max-width: 1100px) { .tm-person { display: none; } }
        @media (max-width: 1000px) {
          .tm-strip { width: calc(100% - 56px); }
          .tm-strip-item { border-left: none !important; justify-content: flex-start; }
        }
        @media (max-width: 640px) {
          .tm-card { width: 82vw; }
          .tm-strip { grid-template-columns: 1fr; width: calc(100% - 40px); }
        }
        /* Respect reduced-motion: stop the marquee and let people scroll it instead */
        @media (prefers-reduced-motion: reduce) {
          .tm-orb { animation: none; }
          .tm-row { overflow-x: auto; scrollbar-width: none; }
          .tm-row-track { animation: none; }
          .tm-row-track > [aria-hidden] { display: none; }
        }
      `}</style>
    </section>
  );
}
