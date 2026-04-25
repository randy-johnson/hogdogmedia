// C05 — Pure yin-yang mark
// A circle divided into two comma shapes: half is a hog silhouette,
// half is a dog silhouette. The duality IS the mark.
function Concept05() {
  return (
    <div className="artboard" style={{ background: '#EFE6D3' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* outer circle */}
          <circle cx="100" cy="100" r="94" fill="#0E0E10"/>
          {/* the S-curve yin-yang */}
          <path d="M100 6
                   A 94 94 0 0 1 100 194
                   A 47 47 0 0 1 100 100
                   A 47 47 0 0 0 100 6 Z"
                fill="#D88B6E"/>
          {/* HOG side (dark) — little hog silhouette inside the coral comma's dot */}
          <g transform="translate(100,53)">
            {/* dot bg */}
            <circle r="22" fill="#0E0E10"/>
            {/* hog silhouette: round head, snout, ear */}
            <path d="M-14 2 Q-14 -10 -4 -12 Q8 -14 14 -4 Q18 8 10 14 Q-2 16 -12 10 Z" fill="#F5E8D5"/>
            <circle cx="12" cy="0" r="3" fill="#0E0E10"/>
            <path d="M-10 -8 L-14 -16 L-6 -12 Z" fill="#F5E8D5"/>
          </g>
          {/* DOG side (light) — dog silhouette in dark dot */}
          <g transform="translate(100,147)">
            <circle r="22" fill="#D88B6E"/>
            {/* dog silhouette: pointy ears, snout */}
            <path d="M-14 2 Q-14 -8 -6 -10 Q6 -12 14 -4 Q18 8 10 14 Q-2 16 -12 10 Z" fill="#0E0E10"/>
            <path d="M-12 -8 L-16 -18 L-8 -10 Z" fill="#0E0E10"/>
            <path d="M6 -10 L10 -20 L14 -8 Z" fill="#0E0E10"/>
            <circle cx="12" cy="0" r="3" fill="#F5E8D5"/>
          </g>
        </svg>
        <div style={{
          fontFamily: "'Staatliches', sans-serif",
          fontSize: 36, letterSpacing: '0.14em',
          color: '#0E0E10'
        }}>HOG · DOG · MEDIA</div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>05 · Yin-yang mark</div>
    </div>
  );
}
window.Concept05 = Concept05;
