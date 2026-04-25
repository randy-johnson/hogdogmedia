// C11 — Punk stencil / zine
// High-contrast, xerox-texture wordmark with a spray-stencil hog/dog.
// Great for DIY creator/podcast energy.
function Concept11() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ position: 'absolute', inset: 0, background: "repeating-linear-gradient(0deg, rgba(14,14,16,0.04) 0 1px, transparent 1px 3px)", pointerEvents:'none' }}/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, transform: 'rotate(-2deg)' }}>
        <svg width="300" height="110" viewBox="0 0 300 110">
          {/* stencil hog */}
          <g fill="#0E0E10">
            <rect x="20" y="30" width="110" height="60"/>
            <rect x="30" y="20" width="90" height="14"/>
            <rect x="10" y="40" width="14" height="30"/>
            {/* ear cutout */}
            <rect x="36" y="20" width="10" height="10" fill="#F5E8D5"/>
            {/* eye */}
            <rect x="90" y="46" width="12" height="8" fill="#F5E8D5"/>
            {/* snout dots */}
            <rect x="4" y="52" width="6" height="6" fill="#F5E8D5"/>
          </g>
          {/* stencil dog (red) */}
          <g fill="#8B2E1F">
            <rect x="170" y="30" width="110" height="60"/>
            <rect x="180" y="20" width="90" height="14"/>
            <rect x="276" y="40" width="14" height="30"/>
            <rect x="254" y="20" width="10" height="10" fill="#F5E8D5"/>
            <rect x="242" y="12" width="10" height="14"/>
            <rect x="198" y="46" width="12" height="8" fill="#F5E8D5"/>
            <rect x="290" y="52" width="6" height="6" fill="#F5E8D5"/>
          </g>
        </svg>
        <div style={{
          fontFamily: "'Special Elite', monospace",
          fontSize: 42, lineHeight: 0.95,
          color: '#0E0E10', textTransform: 'uppercase',
          padding: '2px 14px', background: '#0E0E10', color: '#F5E8D5'
        }}>Hog Dog Media</div>
        <div style={{
          fontFamily: "'Special Elite', monospace",
          fontSize: 12, letterSpacing: '0.2em',
          color: '#8B2E1F', textTransform: 'uppercase'
        }}>*** pirate broadcasts from the barnyard ***</div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>11 · Punk stencil / zine</div>
    </div>
  );
}
window.Concept11 = Concept11;
