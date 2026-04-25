// C04 — Monogram HD, interlocked
// H and D locked together like a wordmark shield. Negative space
// between them reads as the duality — no animal illustration.
function Concept04() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative', width: 260, height: 180 }}>
          <svg width="260" height="180" viewBox="0 0 260 180">
            {/* H (hog-coral) */}
            <g>
              <rect x="14" y="14" width="36" height="152" fill="#C98F76"/>
              <rect x="14" y="74" width="120" height="32" fill="#C98F76"/>
              <rect x="98" y="14" width="36" height="152" fill="#C98F76"/>
            </g>
            {/* D (dog-charcoal) overlapping */}
            <g>
              <path d="M120 14 L186 14 Q246 14 246 90 Q246 166 186 166 L120 166 Z" fill="#0E0E10"/>
              <path d="M156 44 L186 44 Q214 44 214 90 Q214 136 186 136 L156 136 Z" fill="#F5E8D5"/>
            </g>
            {/* overlap mix area — a thin coral band where they meet */}
            <rect x="118" y="14" width="4" height="152" fill="#D88B6E"/>
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 28, letterSpacing: '0.02em',
            color: '#0E0E10'
          }}>HOG DOG MEDIA</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11, letterSpacing: '0.42em',
            color: '#8C5B46', marginTop: 4,
            textTransform: 'uppercase'
          }}>Est. 2026</div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>04 · HD monogram, interlocked</div>
    </div>
  );
}
window.Concept04 = Concept04;
