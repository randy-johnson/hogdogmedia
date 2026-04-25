// V6 — Circle badge, wordmark wraps full circle
function V6BadgeFullWrap() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ position:'relative', width: 280, height: 280 }}>
        <svg width="280" height="280" viewBox="0 0 280 280" style={{ position:'absolute', inset: 0 }}>
          <defs>
            <path id="v6top" d="M 40 140 A 100 100 0 0 1 240 140" />
            <path id="v6bot" d="M 50 140 A 90 90 0 0 0 230 140" />
          </defs>
          <circle cx="140" cy="140" r="134" fill="none" stroke="#0E0E10" strokeWidth="3"/>
          <circle cx="140" cy="140" r="126" fill="none" stroke="#D88B6E" strokeWidth="1"/>
          <text fill="#0E0E10" fontFamily="Anton, sans-serif" fontSize="20" letterSpacing="5">
            <textPath href="#v6top" startOffset="50%" textAnchor="middle">HOG DOG</textPath>
          </text>
          <text fill="#0E0E10" fontFamily="Anton, sans-serif" fontSize="20" letterSpacing="8">
            <textPath href="#v6bot" startOffset="50%" textAnchor="middle" side="right">MEDIA</textPath>
          </text>
          {/* coral stars at sides */}
          <text x="22" y="148" fill="#D88B6E" fontSize="18">★</text>
          <text x="244" y="148" fill="#D88B6E" fontSize="18">★</text>
        </svg>
        <img src="assets/mascot-circle.png" alt="" style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width: 180, height: 180, objectFit:'contain' }}/>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>V6 · Badge · HOG DOG / MEDIA wrap</div>
    </div>
  );
}
window.V6BadgeFullWrap = V6BadgeFullWrap;
