import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CornerDeco from './CornerDeco';

const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } } };
const fadeLeft = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } };

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'stretch', paddingTop: 72, background: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* Top-left tech grid lines */}
      <div style={{ position: 'absolute', top: 80, left: 0, width: 200, height: 200, opacity: 0.04, pointerEvents: 'none' }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ position: 'absolute', top: i * 40, left: 0, right: 0, height: 1, background: '#E31B23' }} />
        ))}
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ position: 'absolute', left: i * 40, top: 0, bottom: 0, width: 1, background: '#E31B23' }} />
        ))}
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'stretch' }} className="hero-inner">

        {/* LEFT */}
        <motion.div
          initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } } }}
          style={{ flex: '0 0 48%', padding: '80px 60px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}
          className="hero-left"
        >
          {/* Corner brackets on left panel */}
          <CornerDeco position="tl" size={40} opacity={0.25} />
          <CornerDeco position="bl" size={40} opacity={0.15} />

          <motion.div variants={fadeUp}>
            <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#E31B23', textTransform: 'uppercase' }}>
              Technology Consulting · Corporate Training
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(42px, 5vw, 68px)', lineHeight: 1.08, margin: '24px 0 0', color: '#15171A', fontWeight: 400 }}>
            Build Technology<br />
            Capability.<br />
            <span style={{ color: '#E31B23' }}>Build Business<br />Advantage.</span>
          </motion.h1>

          {/* Red accent line under headline */}
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
            <div style={{ width: 48, height: 3, background: '#E31B23' }} />
            <div style={{ width: 8, height: 8, background: '#E31B23', transform: 'rotate(45deg)' }} />
          </motion.div>

          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.75, color: '#555', marginTop: 24, maxWidth: 460 }}>
            Tech Vedha Technologies helps organizations strengthen technology capabilities, modernize workflows and build future-ready teams through practical consulting and customized corporate training.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('#contact')} className="btn-primary">
              Book a Consultation <span className="arrow">→</span>
            </button>
            <button onClick={() => scrollTo('#programs')} className="btn-outline">
              Explore Training Programs
            </button>
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 28, marginTop: 40, flexWrap: 'wrap' }}>
            {['Practical expertise', 'Customized solutions', 'Business-focused outcomes'].map(v => (
              <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <CheckCircle2 size={14} color="#E31B23" />
                <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: '#444' }}>{v}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeLeft} initial="hidden" animate="show"
          style={{ flex: '0 0 52%', position: 'relative', overflow: 'hidden', minHeight: 600 }}
          className="hero-right"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
            alt="Technology consulting modern office"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            loading="eager"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,6,7,0.55) 0%, rgba(5,6,7,0.2) 60%, transparent 100%)' }} />

          {/* Large red triangle bottom-right */}
          <div style={{ position: 'absolute', bottom: -40, right: -40, width: 240, height: 240, background: '#E31B23', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', opacity: 0.88 }} />

          {/* Thin red vertical bar */}
          <div style={{ position: 'absolute', top: 60, right: 0, width: 4, height: 200, background: '#E31B23' }} />

          {/* Corner brackets on image */}
          <CornerDeco position="tr" size={36} color="white" opacity={0.4} />
          <CornerDeco position="bl" size={36} color="white" opacity={0.25} />

          {/* Vertical text */}
          <div style={{ position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%) rotate(90deg)', display: 'flex', gap: 22 }}>
            {['CONSULT', 'TRAIN', 'EMPOWER', 'TRANSFORM'].map((w, i) => (
              <span key={w} style={{ fontFamily: 'Inter', fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', color: i === 0 ? '#E31B23' : 'rgba(255,255,255,0.65)', textTransform: 'uppercase' }}>{w}</span>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
            style={{ position: 'absolute', bottom: 52, left: 44 }}
          >
            <div style={{ width: 32, height: 3, background: '#E31B23', marginBottom: 12 }} />
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 22, color: 'white', lineHeight: 1.35, fontWeight: 400 }}>
              People.<br />Technology.<br />
              <span style={{ color: '#E31B23' }}>Real Business Impact.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { flex-direction: column !important; }
          .hero-left { flex: none !important; padding: 48px 24px 40px !important; }
          .hero-right { flex: none !important; min-height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
