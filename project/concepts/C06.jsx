// C06 — Duotone silhouette heads, nose-to-nose
// Two flat silhouettes facing each other, coral + charcoal.
// Reads like a film-studio/podcast-network mark.
function Concept06() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <svg width="300" height="140" viewBox="0 0 300 140">
          {/* HOG silhouette (coral, left, facing right) */}
          <g fill="#D88B6E">
            <path d="M20 110 Q20 50 70 42 Q106 36 130 56 Q148 70 148 90 L148 110 Q148 128 128 128 L40 128 Q22 128 20 110 Z"/>
            {/* ear */}
            <path d="M36 58 Q26 36 50 34 Q62 44 58 62 Z"/>
            {/* snout bump */}
            <ellipse cx="148" cy="88" rx="10" ry="10"/>
          </g>
          {/* DOG silhouette (charcoal, right, facing left) */}
          <g fill="#0E0E10">
            <path d="M280 110 Q280 50 230 42 Q194 36 170 56 Q152 70 152 90 L152 110 Q152 128 172 128 L260 128 Q278 128 280 110 Z"/>
            <path d="M264 58 Q274 24 250 28 Q238 42 242 62 Z"/>
            <path d="M224 50 Q232 28 244 34 Q240 54 232 62 Z"/>
            <ellipse cx="152" cy="88" rx="10" ry="10"/>
          </g>
          {/* tiny cream gap between snouts */}
          <rect x="149" y="76" width="2" height="24" fill="#F5E8D5"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <div style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: 'italic',
            fontSize: 52, lineHeight: 1,
            color: '#0E0E10'
          }}>Hog&nbsp;Dog</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 12, letterSpacing: '0.62em',
            color: '#0E0E10',
            textTransform: 'uppercase',
            marginTop: 2
          }}>M E D I A</div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>06 · Duotone silhouettes</div>
    </div>
  );
}
window.Concept06 = Concept06;
