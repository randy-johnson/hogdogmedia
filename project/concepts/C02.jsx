// C02 — Flat editorial mascot
// Hog + dog drawn in a flat, vector style — still nose-to-nose but
// feels like a New Yorker illustration, not esports.
function Concept02() {
  const hog = '#C98F76';
  const hogDark = '#8C5B46';
  const dog = '#6B6F74';
  const dogDark = '#3C3F43';
  return (
    <div className="artboard" style={{ background: '#EFE6D3' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <svg width="240" height="160" viewBox="0 0 240 160" style={{ display: 'block' }}>
          {/* HOG (left) — profile facing right */}
          <g>
            {/* head */}
            <path d="M8 92 Q8 44 58 38 Q86 34 108 52 Q120 62 118 80 L118 100 Q118 122 98 130 L44 130 Q12 128 8 96 Z" fill={hog}/>
            {/* ear */}
            <path d="M18 56 Q8 38 26 30 Q42 30 42 50 Z" fill={hogDark}/>
            {/* snout */}
            <ellipse cx="114" cy="82" rx="14" ry="12" fill={hogDark}/>
            <circle cx="110" cy="80" r="2.2" fill="#0E0E10"/>
            <circle cx="118" cy="80" r="2.2" fill="#0E0E10"/>
            {/* eye */}
            <circle cx="78" cy="66" r="4" fill="#0E0E10"/>
            {/* tusk */}
            <path d="M104 92 L110 102 L100 100 Z" fill="#F5E8D5"/>
          </g>
          {/* DOG (right) — profile facing left */}
          <g>
            <path d="M232 92 Q232 44 182 38 Q154 34 132 52 Q120 62 122 80 L122 100 Q122 122 142 130 L196 130 Q228 128 232 96 Z" fill={dog}/>
            {/* ear */}
            <path d="M222 56 Q232 30 214 24 Q196 28 200 50 Z" fill={dogDark}/>
            <path d="M188 54 Q196 34 204 38 Q202 52 196 60 Z" fill={dogDark}/>
            <ellipse cx="126" cy="82" rx="10" ry="9" fill={dogDark}/>
            <circle cx="122" cy="82" r="1.8" fill="#0E0E10"/>
            <circle cx="162" cy="66" r="4" fill="#0E0E10"/>
            {/* fang */}
            <path d="M136 92 L130 102 L140 100 Z" fill="#F5E8D5"/>
          </g>
          {/* center gap */}
          <rect x="119" y="38" width="2" height="92" fill="#EFE6D3"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic',
            fontWeight: 900,
            fontSize: 54, lineHeight: 0.9,
            color: '#0E0E10',
            letterSpacing: '-0.02em'
          }}>Hog&nbsp;Dog</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 12, letterSpacing: '0.52em',
            color: '#8C5B46',
            textTransform: 'uppercase',
            marginTop: 4
          }}>— Media —</div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>02 · Flat editorial mascot</div>
    </div>
  );
}
window.Concept02 = Concept02;
