// C12 — Custom ampersand mark
// "HOG & DOG" where the ampersand IS a tiny hog+dog nose-to-nose.
// Very wordmark-forward, works great as favicon (just the &).
function Concept12() {
  return (
    <div className="artboard" style={{ background: '#1A1613' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            fontFamily: "'Abril Fatface', serif",
            fontSize: 96, color: '#F5E8D5', lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }}>HOG</div>
          {/* custom ampersand: circle with hog+dog */}
          <div style={{ position: 'relative', width: 110, height: 110 }}>
            <svg width="110" height="110" viewBox="0 0 110 110">
              <circle cx="55" cy="55" r="52" fill="#D88B6E"/>
              {/* hog half */}
              <g transform="translate(36,55)">
                <path d="M-16 -4 Q-16 -20 -4 -22 Q10 -22 12 -8 L12 10 Q10 20 -4 20 L-12 20 Q-18 18 -16 6 Z" fill="#C98F76"/>
                <path d="M-12 -16 Q-18 -28 -6 -28 Q-2 -20 -6 -12 Z" fill="#8C5B46"/>
                <circle cx="2" cy="-6" r="1.6" fill="#0E0E10"/>
                <ellipse cx="12" cy="4" rx="4" ry="3" fill="#8C5B46"/>
              </g>
              {/* dog half */}
              <g transform="translate(74,55)">
                <path d="M16 -4 Q16 -20 4 -22 Q-10 -22 -12 -8 L-12 10 Q-10 20 4 20 L12 20 Q18 18 16 6 Z" fill="#B8BCC0"/>
                <path d="M12 -16 Q20 -30 6 -28 Q2 -20 6 -12 Z" fill="#5C6166"/>
                <circle cx="-2" cy="-6" r="1.6" fill="#0E0E10"/>
                <ellipse cx="-12" cy="4" rx="4" ry="3" fill="#5C6166"/>
              </g>
            </svg>
          </div>
          <div style={{
            fontFamily: "'Abril Fatface', serif",
            fontSize: 96, color: '#F5E8D5', lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }}>DOG</div>
        </div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13, letterSpacing: '0.62em',
          color: '#D88B6E', textTransform: 'uppercase'
        }}>— Media —</div>
      </div>
      <div className="ab-caption" style={{ color: '#F5E8D5' }}>12 · Ampersand mark</div>
    </div>
  );
}
window.Concept12 = Concept12;
