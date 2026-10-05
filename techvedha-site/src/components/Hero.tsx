import { motion } from 'framer-motion';
import { ShieldCheck, Users, Rocket, ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } } };

const NAVY = '#0F1B2D';

const highlights = [
  { icon: ShieldCheck, label: ['Practical', 'Expertise'] },
  { icon: Users, label: ['Customized', 'Solutions'] },
  { icon: Rocket, label: ['Experience-Based', 'Outcomes'] },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', paddingTop: 72, display: 'flex', alignItems: 'center', background: 'linear-gradient(180deg, #EEF4FB 0%, #F8FAFD 55%, #FFFFFF 100%)' }}>

      {/* Background photo */}
      <motion.img
        src="/images/hero.png"
        alt="Consultant presenting a data dashboard to a team in a modern office"
        initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
        className="hero-bg"
        style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: '66%', objectFit: 'cover', objectPosition: '75% center' }}
        loading="eager"
      />

      {/* Soft airy fade from the left so the copy stays readable */}
      <div className="hero-fade" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F8FC 0%, #F6F9FD 36%, rgba(246,249,253,0.92) 44%, rgba(246,249,253,0.6) 52%, rgba(246,249,253,0.15) 62%, rgba(246,249,253,0) 70%)', pointerEvents: 'none' }} />
      {/* Light haze along the top and bottom */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(238,244,251,0.55) 0%, rgba(238,244,251,0) 22%, rgba(255,255,255,0) 78%, rgba(255,255,255,0.6) 100%)', pointerEvents: 'none' }} />

      {/* Soft wave — bottom-left */}
      <svg className="hero-wave" viewBox="0 0 900 260" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: 0, width: '55%', height: 220, pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <linearGradient id="heroWaveBlue" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="rgb(186,208,234)" stopOpacity="0.4" />
            <stop offset="0.7" stopColor="rgb(186,208,234)" stopOpacity="0.25" />
            <stop offset="1" stopColor="rgb(186,208,234)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroWaveWhite" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="0.75" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 120 C 180 40, 360 60, 520 140 S 800 240, 900 220 L 900 260 L 0 260 Z" fill="url(#heroWaveBlue)" />
        <path d="M0 180 C 200 110, 420 130, 600 190 S 820 250, 900 250 L 900 260 L 0 260 Z" fill="url(#heroWaveWhite)" />
      </svg>

      {/* Dot grid — left */}
      <div className="hero-dots" style={{ position: 'absolute', left: 52, top: '28%', width: 72, height: 150, backgroundImage: 'radial-gradient(rgba(15,27,45,0.18) 1.6px, transparent 1.6px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />

      {/* Content */}
      <motion.div
        initial="hidden" animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        className="hero-content"
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1400, margin: '0 auto', padding: '56px 64px 72px 128px' }}
      >
        <div style={{ maxWidth: 720 }}>
          <motion.div variants={fadeUp} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ position: 'absolute', left: 0, top: -12, width: 40, height: 2, background: '#E31B23' }} />
            <span style={{ width: 2, height: 18, background: '#E31B23' }} />
            <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', color: NAVY, textTransform: 'uppercase' }}>
              Technology Consulting <span style={{ margin: '0 4px' }}>•</span> Corporate Training
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(38px, 4.1vw, 66px)', lineHeight: 1.06, margin: '18px 0 0', color: NAVY, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Build Technology<br />
            Capability.<br />
            <span style={{ color: '#E31B23', whiteSpace: 'nowrap' }} className="hero-accent">Drive Business Advantage.</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: 'clamp(16px, 1.2vw, 19px)', lineHeight: 1.45, color: '#2A3442', marginTop: 22, maxWidth: 560 }}>
            Tech Vedha Technologies helps organizations strengthen technology capabilities, modernize workflows and build future-ready teams through expert consulting and customized corporate training.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 22, marginTop: 30, flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('#contact')} className="btn-primary hero-btn" style={{ borderRadius: 4, padding: '16px 46px', fontSize: 16 }}>
              Book a Consultation <ArrowRight size={18} className="arrow" />
            </button>
            <button onClick={() => scrollTo('#programs')} className="hero-btn-outline">
              Explore Training Programs
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-highlights" style={{ display: 'flex', alignItems: 'center', marginTop: 40, flexWrap: 'wrap', rowGap: 16 }}>
            {highlights.map(({ icon: Icon, label }, i) => (
              <div key={label[0]} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: i === 0 ? '0 36px 0 0' : '0 36px', borderLeft: i === 0 ? 'none' : '1px solid #D5DCE5' }}>
                <span style={{ width: 62, height: 62, borderRadius: '50%', background: '#FCE7E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={28} color={NAVY} strokeWidth={1.7} />
                </span>
                <span style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, lineHeight: 1.45, color: NAVY }}>
                  {label[0]}<br />{label[1]}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .hero .btn-primary { box-shadow: 0 8px 20px rgba(227,27,35,0.2); }
        .hero-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.85); color: ${NAVY};
          padding: 15px 46px; font-size: 16px; font-weight: 600; font-family: 'Inter', sans-serif;
          border: 1.5px solid ${NAVY}; border-radius: 4px; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .hero-btn-outline:hover { background: ${NAVY}; color: #fff; }

        @media (max-width: 1100px) {
          .hero-content { padding: 56px 40px 72px 72px !important; }
          .hero-bg { width: 100% !important; }
          .hero-fade { background: linear-gradient(90deg, #F4F8FC 0%, rgba(246,249,253,0.95) 45%, rgba(246,249,253,0.65) 70%, rgba(246,249,253,0.2) 100%) !important; }
          .hero-dots { left: 24px !important; }
        }
        @media (max-width: 700px) {
          .hero { align-items: flex-start !important; }
          .hero-content { padding: 48px 20px 64px !important; }
          .hero-fade { background: linear-gradient(180deg, rgba(246,249,253,0.97) 0%, rgba(246,249,253,0.92) 65%, rgba(246,249,253,0.65) 100%) !important; }
          .hero-accent { white-space: normal !important; }
          .hero-dots, .hero-wave { display: none; }
          .hero-highlights > div { border-left: none !important; padding: 0 20px 0 0 !important; }
          .hero .btn-primary, .hero-btn-outline { padding: 14px 28px !important; font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}
