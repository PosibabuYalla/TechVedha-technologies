/** Decorative corner bracket — placed absolutely inside a relative container */
interface CornerProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
  size?: number;
  color?: string;
  opacity?: number;
}

export default function CornerDeco({ position, size = 32, color = '#E31B23', opacity = 0.6 }: CornerProps) {
  const isTop = position === 'tl' || position === 'tr';
  const isLeft = position === 'tl' || position === 'bl';

  const style: React.CSSProperties = {
    position: 'absolute',
    [isTop ? 'top' : 'bottom']: 0,
    [isLeft ? 'left' : 'right']: 0,
    width: size,
    height: size,
    opacity,
    pointerEvents: 'none',
  };

  // Two lines forming an L-bracket
  const h: React.CSSProperties = {
    position: 'absolute',
    [isTop ? 'top' : 'bottom']: 0,
    [isLeft ? 'left' : 'right']: 0,
    width: size,
    height: 2,
    background: color,
  };
  const v: React.CSSProperties = {
    position: 'absolute',
    [isTop ? 'top' : 'bottom']: 0,
    [isLeft ? 'left' : 'right']: 0,
    width: 2,
    height: size,
    background: color,
  };

  return (
    <div style={style}>
      <div style={h} />
      <div style={v} />
    </div>
  );
}
