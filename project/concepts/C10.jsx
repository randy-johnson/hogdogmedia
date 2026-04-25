// C10 — Broadcast eye
// CBS-eye inspired mark: a single eye whose iris is split —
// half hog-coral, half dog-gray. Screams "media network".
function Concept10() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <svg width="260" height="160" viewBox="0 0 260 160">
          {/* eye almond */}
          <path d="M10 80 Q130 -10 250 80 Q130 170 10 80 Z" fill="#0E0E10"/>
          {/* iris */}
          <circle cx="130" cy="80" r="46" fill="#F5E8D5"/>
          {/* split iris: hog half */}
          <path d="M130 34 A 46 46 0 0 0 130 126 Z" fill="#D88B6E"/>
          {/* dog half */}
          <path d="M130 34 A 46 46 0 0 1 130 126 Z" fill="#5C6166"/>
          {/* hog ear cue (tiny triangle inside coral) */}
          <path d="M106 56 L98 44 L112 48 Z" fill="#F5E8D5"/>
          {/* dog ear cue */}
          <path d="M154 56 L162 40 L158 60 Z" fill="#F5E8D5"/>
          {/* pupil */}
          <circle cx="130" cy="80" r="14" fill="#0E0E10"/>
          <circle cx="126" cy="76" r="4" fill="#F5E8D5"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 48, letterSpacing: '0.06em',
            color: '#0E0E10', lineHeight: 1
          }}>HOG DOG MEDIA</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 10, letterSpacing: '0.5em',
            color: '#8C5B46', marginTop: 2, textTransform:'uppercase'
          }}>A broadcasting network</div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>10 · Broadcast eye</div>
    </div>
  );
}
window.Concept10 = Concept10;
