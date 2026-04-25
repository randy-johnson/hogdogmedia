// R3 — Circle badge lockup
// Mascot sits inside a ringed badge with wordmark arcing around the border.
function R3Badge() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ position:'relative', width: 280, height: 280 }}>
        <svg width="280" height="280" viewBox="0 0 280 280" style={{ position:'absolute', inset: 0 }}>
          <defs>
            <path id="r3top" d="M 40 140 A 100 100 0 0 1 240 140" />
            <path id="r3bot" d="M 50 140 A 90 90 0 0 0 230 140" />
          </defs>
          <circle cx="140" cy="140" r="134" fill="none" stroke="#0E0E10" strokeWidth="3"/>
          <circle cx="140" cy="140" r="126" fill="none" stroke="#D88B6E" strokeWidth="1"/>
          <text fill="#0E0E10" fontFamily="Anton, sans-serif" fontSize="22" letterSpacing="6">
            <textPath href="#r3top" startOffset="50%" textAnchor="middle">HOG DOG MEDIA</textPath>
          </text>
          <text fill="#D88B6E" fontFamily="Space Grotesk, sans-serif" fontWeight="500" fontSize="11" letterSpacing="8">
            <textPath href="#r3bot" startOffset="50%" textAnchor="middle" side="right">EST · MMXXVI</textPath>
          </text>
          {/* little coral stars flanking */}
          <text x="18" y="148" fill="#D88B6E" fontSize="16">★</text>
          <text x="250" y="148" fill="#D88B6E" fontSize="16">★</text>
        </svg>
        <img src="assets/mascot-circle.png" alt="" style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-52%)', width: 180, height: 180, objectFit:'contain' }} />
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>R3 · Circle badge</div>
    </div>
  );
}
window.R3Badge = R3Badge;
