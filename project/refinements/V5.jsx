// V5 — Circle badge, no Est. tagline; replaced with three coral dots/diamonds
function V5BadgeMinimal() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ position:'relative', width: 280, height: 280 }}>
        <svg width="280" height="280" viewBox="0 0 280 280" style={{ position:'absolute', inset: 0 }}>
          <defs>
            <path id="v5top" d="M 40 140 A 100 100 0 0 1 240 140" />
          </defs>
          <circle cx="140" cy="140" r="134" fill="none" stroke="#0E0E10" strokeWidth="3"/>
          <circle cx="140" cy="140" r="126" fill="none" stroke="#D88B6E" strokeWidth="1"/>
          <text fill="#0E0E10" fontFamily="Anton, sans-serif" fontSize="22" letterSpacing="6">
            <textPath href="#v5top" startOffset="50%" textAnchor="middle">HOG DOG MEDIA</textPath>
          </text>
          {/* three coral diamonds along bottom arc instead of est. */}
          <g fill="#D88B6E" transform="translate(140 230)">
            <rect x="-30" y="-4" width="8" height="8" transform="rotate(45 -26 0)"/>
            <rect x="-4" y="-4" width="8" height="8" transform="rotate(45 0 0)"/>
            <rect x="22" y="-4" width="8" height="8" transform="rotate(45 26 0)"/>
          </g>
        </svg>
        <img src="assets/mascot-circle.png" alt="" style={{ position:'absolute', left:'50%', top:'48%', transform:'translate(-50%,-52%)', width: 180, height: 180, objectFit:'contain' }}/>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>V5 · Badge w/ diamonds (no Est.)</div>
    </div>
  );
}
window.V5BadgeMinimal = V5BadgeMinimal;
