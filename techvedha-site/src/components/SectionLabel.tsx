interface SectionLabelProps {
  number: string;
  label: string;
  light?: boolean;
}

export default function SectionLabel({ number, label, light }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span style={{ color: '#E31B23', fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em' }}>
        {number}
      </span>
      <span style={{
        width: 24, height: 1,
        background: light ? 'rgba(255,255,255,0.3)' : '#E9ECEF',
        display: 'inline-block'
      }} />
      <span style={{
        fontFamily: 'Inter', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: light ? 'rgba(255,255,255,0.5)' : '#666666'
      }}>
        {label}
      </span>
    </div>
  );
}
