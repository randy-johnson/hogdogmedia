// V1 — Ampersand mark using REAL mascot as the &
// Wordmark "HOG ___ DOG" with the circular yin-yang mascot in the middle.
function V1Ampersand() {
  return (
    <div className="artboard" style={{ background: '#1A1613' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 14 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 18 }}>
          <div style={{ fontFamily:"'Abril Fatface',serif", fontSize: 110, color:'#F5E8D5', lineHeight: 0.9, letterSpacing:'-0.02em' }}>HOG</div>
          <img src="assets/mascot-circle.png" alt="" style={{ width: 140, height: 140, objectFit:'contain' }} />
          <div style={{ fontFamily:"'Abril Fatface',serif", fontSize: 110, color:'#F5E8D5', lineHeight: 0.9, letterSpacing:'-0.02em' }}>DOG</div>
        </div>
        <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 14, letterSpacing:'0.62em', color:'#D88B6E', textTransform:'uppercase' }}>— Media —</div>
      </div>
      <div className="ab-caption" style={{ color:'#F5E8D5' }}>V1 · Ampersand w/ yin-yang mascot</div>
    </div>
  );
}
window.V1Ampersand = V1Ampersand;
