// C08 — Enamel pin / chunky sticker
// Soft rounded sticker with heavy cream outline — reads great as
// merch, favicon, and Discord/YouTube avatar.
function Concept08() {
  return (
    <div className="artboard" style={{ background: '#1A1613' }}>
      <div style={{ position: 'relative', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}>
        <svg width="280" height="220" viewBox="0 0 280 220">
          {/* cream sticker outline */}
          <path d="M20 70 Q20 20 80 20 L200 20 Q260 20 260 70 L260 150 Q260 200 200 200 L80 200 Q20 200 20 150 Z"
                fill="#F5E8D5"/>
          {/* inner coral fill */}
          <path d="M34 72 Q34 34 86 34 L194 34 Q246 34 246 72 L246 148 Q246 186 194 186 L86 186 Q34 186 34 148 Z"
                fill="#D88B6E"/>
          {/* hog head */}
          <g transform="translate(90,108)">
            <path d="M-36 -6 Q-36 -38 -8 -40 Q22 -38 26 -10 L26 22 Q22 36 0 36 L-24 36 Q-38 32 -36 16 Z" fill="#C98F76" stroke="#0E0E10" strokeWidth="3"/>
            <path d="M-26 -26 Q-36 -44 -18 -44 Q-10 -32 -14 -20 Z" fill="#8C5B46" stroke="#0E0E10" strokeWidth="3"/>
            <circle cx="-2" cy="-8" r="3" fill="#0E0E10"/>
            <ellipse cx="24" cy="10" rx="8" ry="6" fill="#8C5B46" stroke="#0E0E10" strokeWidth="2.5"/>
            <circle cx="21" cy="8" r="1.5" fill="#0E0E10"/>
            <circle cx="27" cy="8" r="1.5" fill="#0E0E10"/>
          </g>
          {/* dog head */}
          <g transform="translate(190,108)">
            <path d="M36 -6 Q36 -38 8 -40 Q-22 -38 -26 -10 L-26 22 Q-22 36 0 36 L24 36 Q38 32 36 16 Z" fill="#B8BCC0" stroke="#0E0E10" strokeWidth="3"/>
            <path d="M26 -26 Q40 -50 22 -44 Q14 -32 18 -20 Z" fill="#5C6166" stroke="#0E0E10" strokeWidth="3"/>
            <circle cx="2" cy="-8" r="3" fill="#0E0E10"/>
            <ellipse cx="-24" cy="10" rx="7" ry="6" fill="#5C6166" stroke="#0E0E10" strokeWidth="2.5"/>
          </g>
          {/* wordmark */}
          <text x="140" y="172" textAnchor="middle" fill="#0E0E10"
                fontFamily="Bowlby One SC, sans-serif" fontSize="22" letterSpacing="2">HOG DOG MEDIA</text>
        </svg>
      </div>
      <div className="ab-caption" style={{ color: '#F5E8D5' }}>08 · Enamel pin / sticker</div>
    </div>
  );
}
window.Concept08 = Concept08;
