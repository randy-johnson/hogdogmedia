// V7 — Circle badge, simple — wordmark on top arc only, clean below
function V7BadgeClean() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ position:'relative', width: 280, height: 280 }}>
        <svg width="280" height="280" viewBox="0 0 280 280" style={{ position:'absolute', inset: 0 }}>
          <defs>
            <path id="v7top" d="M 30 140 A 110 110 0 0 1 250 140" />
          </defs>
          <circle cx="140" cy="140" r="134" fill="none" stroke="#0E0E10" strokeWidth="3"/>
          <text fill="#0E0E10" fontFamily="Anton, sans-serif" fontSize="26" letterSpacing="8">
            <textPath href="#v7top" startOffset="50%" textAnchor="middle">HOG · DOG · MEDIA</textPath>
          </text>
        </svg>
        <img src="assets/mascot-circle.png" alt="" style={{ position:'absolute', left:'50%', top:'52%', transform:'translate(-50%,-50%)', width: 195, height: 195, objectFit:'contain' }}/>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>V7 · Badge · single top arc</div>
    </div>
  );
}
window.V7BadgeClean = V7BadgeClean;
