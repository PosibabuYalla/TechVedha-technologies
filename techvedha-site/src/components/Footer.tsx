import { Mail, MapPin } from 'lucide-react';
import CornerDeco from './CornerDeco';

// Inline SVG social icons since lucide-react v0.x may not have them
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'white', borderTop: '1px solid #E9ECEF', position: 'relative', overflow: 'hidden' }}>
      <CornerDeco position="tl" size={40} color="#E31B23" opacity={0.12} />
      <CornerDeco position="br" size={40} color="#E31B23" opacity={0.08} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '64px 80px 40px' }} className="footer-inner">
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48, marginBottom: 56 }} className="footer-grid">

          {/* Col 1 */}
          <div>
            <img src="/logo.png" alt="Tech Vedha Technologies" style={{ height: 76, width: 'auto', display: 'block', marginBottom: 16, marginLeft: -6 }} />
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#666', lineHeight: 1.8, maxWidth: 280 }}>
              Technology Consulting.<br />Corporate Training.<br />Business Transformation.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
              <div style={{ width: 24, height: 3, background: '#E31B23' }} />
              <div style={{ width: 4, height: 4, background: '#E31B23', transform: 'rotate(45deg)' }} />
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, color: '#15171A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</h4>
            {[['Home', '#hero'], ['About', '#why'], ['Consulting', '#consulting'], ['Corporate Training', '#training'], ['Training Programs', '#programs']].map(([label, href]) => (
              <button key={href} onClick={() => scrollTo(href)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 14, color: '#666', padding: '5px 0', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E31B23')}
                onMouseLeave={e => (e.currentTarget.style.color = '#666')}
              >
                <span style={{ width: 4, height: 4, background: 'currentColor', borderRadius: '50%', flexShrink: 0 }} />
                {label}
              </button>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, color: '#15171A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Resources</h4>
            {[['Industries', '#industries'], ['Testimonials', '#testimonials'], ['Contact', '#contact'], ['Privacy Policy', '#'], ['Terms & Conditions', '#']].map(([label, href]) => (
              <button key={label} onClick={() => scrollTo(href)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: 14, color: '#666', padding: '5px 0', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E31B23')}
                onMouseLeave={e => (e.currentTarget.style.color = '#666')}
              >
                <span style={{ width: 4, height: 4, background: 'currentColor', borderRadius: '50%', flexShrink: 0 }} />
                {label}
              </button>
            ))}
          </div>

          {/* Col 4 */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, color: '#15171A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Contact Us</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, background: '#FCE7E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={13} color="#E31B23" />
              </div>
              <a href="mailto:sunil.b@tech-vedha.co.in" style={{ fontFamily: 'Inter', fontSize: 13, color: '#666', textDecoration: 'none' }}>
                sunil.b@tech-vedha.co.in
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 28 }}>
              <div style={{ width: 28, height: 28, background: '#FCE7E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <MapPin size={13} color="#E31B23" />
              </div>
              <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#666', lineHeight: 1.65 }}>
                Marathahalli, Bengaluru,<br />Karnataka, India
              </span>
            </div>
            <h5 style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, color: '#15171A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Connect With Us</h5>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { Icon: LinkedinIcon, label: 'LinkedIn' },
                { Icon: YoutubeIcon,  label: 'YouTube' },
                { Icon: InstagramIcon,label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ width: 36, height: 36, border: '1px solid #E9ECEF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#E31B23'; el.style.borderColor = '#E31B23'; el.style.color = 'white'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.borderColor = '#E9ECEF'; el.style.color = '#666'; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid #E9ECEF', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#999' }}>
            © 2026 Tech Vedha Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms and Conditions'].map(link => (
              <a key={link} href="#" style={{ fontFamily: 'Inter', fontSize: 13, color: '#999', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E31B23')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Credit */}
        <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#999', textAlign: 'center', marginTop: 18 }}>
          Designed &amp; Developed by{' '}
          <a href="https://www.sabariyatech.in" target="_blank" rel="noopener noreferrer" style={{ color: '#E31B23', fontWeight: 600, textDecoration: 'none' }}>
            SabariyaTech
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-inner { padding: 48px 40px 32px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-inner { padding: 40px 24px 24px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
