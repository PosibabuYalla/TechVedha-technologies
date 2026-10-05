import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#why' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Corporate Training', href: '#training' },
  { label: 'Programs', href: '#programs' },
  { label: 'Industries', href: '#industries' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'white',
        borderBottom: scrolled ? '1px solid #E9ECEF' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s',
        height: 72,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <div style={{
            width: 36, height: 36, background: '#E31B23',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontWeight: 800, fontSize: 14, fontFamily: 'Inter' }}>TV</span>
          </div>
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 15, color: '#15171A', lineHeight: 1.1 }}>Tech Vedha</div>
            <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 10, color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Technologies</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Inter', fontSize: 13, fontWeight: 500,
                color: active === link.href ? '#E31B23' : '#15171A',
                padding: '8px 12px',
                position: 'relative',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
              {active === link.href && (
                <span style={{
                  position: 'absolute', bottom: 2, left: 12, right: 12,
                  height: 2, background: '#E31B23', borderRadius: 1,
                }} />
              )}
            </button>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary hidden-mobile"
            style={{ padding: '10px 20px', fontSize: 13 }}
          >
            Book a Consultation <span className="arrow">→</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: 4 }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: 72, left: 0, right: 0,
              background: 'white', borderBottom: '1px solid #E9ECEF',
              padding: '16px 24px 24px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            }}
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter', fontSize: 15, fontWeight: 500,
                  color: '#15171A', padding: '12px 0',
                  borderBottom: '1px solid #F5F6F7',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary"
              style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
            >
              Book a Consultation <span className="arrow">→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
