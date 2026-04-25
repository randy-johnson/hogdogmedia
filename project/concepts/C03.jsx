// C03 — Single-line contour (yin-yang in one continuous line)
// Both heads rendered as one unbroken stroke, meeting in the middle.
function Concept03() {
  return (
    <div className="artboard" style={{ background: '#0E0E10' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none" stroke="#F5E8D5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* One-line hog (left) */}
          <path d="M110 90
                   C 110 60, 80 40, 56 44
                   C 28 50, 18 76, 22 98
                   C 26 120, 46 138, 74 138
                   C 96 138, 110 120, 110 90 Z" />
          {/* hog ear */}
          <path d="M44 52 Q36 40 52 40 Q58 48 54 58"/>
          {/* hog snout */}
          <circle cx="24" cy="92" r="5" fill="#F5E8D5"/>
          <circle cx="24" cy="88" r="1.5" fill="#0E0E10"/>
          {/* hog eye */}
          <circle cx="70" cy="78" r="3" fill="#F5E8D5"/>

          {/* One-line dog (right) — mirrored */}
          <path d="M110 90
                   C 110 120, 140 140, 164 136
                   C 192 130, 202 104, 198 82
                   C 194 60, 174 42, 146 42
                   C 124 42, 110 60, 110 90 Z" stroke="#D88B6E"/>
          {/* dog ear (pointy) */}
          <path d="M176 46 L188 22 L190 52" stroke="#D88B6E"/>
          {/* dog snout */}
          <circle cx="196" cy="88" r="5" fill="#D88B6E"/>
          <circle cx="196" cy="84" r="1.5" fill="#0E0E10"/>
          {/* dog eye */}
          <circle cx="150" cy="78" r="3" fill="#D88B6E"/>
        </svg>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 28, letterSpacing: '0.22em',
            color: '#F5E8D5',
            textTransform: 'uppercase'
          }}>hog</div>
          <div style={{ color:'#D88B6E', fontSize: 20}}>/</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 28, letterSpacing: '0.22em',
            color: '#D88B6E',
            textTransform: 'uppercase'
          }}>dog</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: 12, letterSpacing: '0.3em',
            color: '#F5E8D5',
            textTransform: 'uppercase',
            marginLeft: 6, opacity: 0.55
          }}>media</div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#F5E8D5' }}>03 · Single-line contour</div>
    </div>
  );
}
window.Concept03 = Concept03;
