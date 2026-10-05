const sections = [
  { num: '01', label: 'Hero', href: '#hero' },
  { num: '02', label: 'What', href: '#what' },
  { num: '03', label: 'Learn', href: '#training' },
  { num: '04', label: 'Why', href: '#why' },
  { num: '05', label: 'Services', href: '#consulting' },
  { num: '06', label: 'Programs', href: '#programs' },
  { num: '07', label: 'Process', href: '#how' },
  { num: '08', label: 'Industries', href: '#industries' },
  { num: '09', label: 'Testimonials', href: '#testimonials' },
  { num: '10', label: 'CTA', href: '#cta' },
];

interface SectionNavProps { active: string; }

export default function SectionNav({ active }: SectionNavProps) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'fixed', left: 20, top: '50%', transform: 'translateY(-50%)',
      zIndex: 500, display: 'flex', flexDirection: 'column', gap: 6,
    }} className="section-nav-desktop">
      {sections.map(s => (
        <button
          key={s.href}
          onClick={() => scrollTo(s.href)}
          title={s.label}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
            padding: '2px 4px',
            opacity: active === s.href ? 1 : 0.35,
            transition: 'opacity 0.3s',
          }}
        >
          <span style={{
            fontFamily: 'Inter', fontSize: 9, fontWeight: 700,
            color: active === s.href ? '#E31B23' : '#666',
            letterSpacing: '0.05em',
          }}>
            {s.num}
          </span>
          {s.href !== '#cta' && (
            <span style={{ width: 1, height: 12, background: active === s.href ? '#E31B23' : '#ccc' }} />
          )}
        </button>
      ))}
      <style>{`
        @media (max-width: 1100px) { .section-nav-desktop { display: none !important; } }
      `}</style>
    </div>
  );
}
