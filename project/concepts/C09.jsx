// C09 — Cassette / VHS
// Media-tape form factor: two spools become the hog & dog eyes.
// Very on-brand for a YouTube/video studio.
function Concept09() {
  return (
    <div className="artboard" style={{ background: '#0E0E10' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <svg width="300" height="200" viewBox="0 0 300 200">
          {/* cassette body */}
          <rect x="20" y="30" width="260" height="150" rx="10" fill="#F5E8D5"/>
          <rect x="20" y="30" width="260" height="30" fill="#D88B6E"/>
          {/* label strip */}
          <rect x="40" y="70" width="220" height="90" rx="4" fill="#1A1613"/>
          {/* spools as eyes (hog-coral, dog-gray) */}
          <g transform="translate(100,115)">
            <circle r="30" fill="#C98F76"/>
            <circle r="10" fill="#0E0E10"/>
            {[0,60,120,180,240,300].map(a=>(
              <rect key={a} x="-2" y="-28" width="4" height="12" fill="#8C5B46" transform={`rotate(${a})`}/>
            ))}
            {/* hog ear peek on top */}
            <path d="M-22 -28 Q-30 -40 -16 -40 Q-10 -30 -14 -22 Z" fill="#8C5B46"/>
          </g>
          <g transform="translate(200,115)">
            <circle r="30" fill="#B8BCC0"/>
            <circle r="10" fill="#0E0E10"/>
            {[0,60,120,180,240,300].map(a=>(
              <rect key={a} x="-2" y="-28" width="4" height="12" fill="#5C6166" transform={`rotate(${a})`}/>
            ))}
            {/* dog ear peek */}
            <path d="M14 -30 Q24 -46 8 -42 Q4 -34 8 -24 Z" fill="#5C6166"/>
          </g>
          {/* brand along top */}
          <text x="150" y="50" textAnchor="middle" fill="#0E0E10"
                fontFamily="Rubik Mono One, sans-serif" fontSize="16" letterSpacing="4">HOG DOG · MEDIA</text>
          {/* tape window */}
          <rect x="124" y="142" width="52" height="12" rx="2" fill="#0E0E10"/>
        </svg>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11, letterSpacing: '0.42em',
          color: '#F5E8D5', textTransform: 'uppercase', opacity: 0.7
        }}>Pressing play on new media</div>
      </div>
      <div className="ab-caption" style={{ color: '#F5E8D5' }}>09 · Cassette / media-tape</div>
    </div>
  );
}
window.Concept09 = Concept09;
