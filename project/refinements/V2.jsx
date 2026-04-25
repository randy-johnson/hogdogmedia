// V2 — Ampersand mark on cream
function V2AmpersandLight() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 14 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 18 }}>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 120, color:'#0E0E10', lineHeight: 0.86, letterSpacing:'-0.01em' }}>HOG</div>
          <img src="assets/mascot-circle.png" alt="" style={{ width: 140, height: 140, objectFit:'contain' }} />
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 120, color:'#0E0E10', lineHeight: 0.86, letterSpacing:'-0.01em' }}>DOG</div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width: 60, height: 2, background:'#D88B6E' }}/>
          <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 14, letterSpacing:'0.62em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
          <div style={{ width: 60, height: 2, background:'#D88B6E' }}/>
        </div>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>V2 · Ampersand on cream (Anton)</div>
    </div>
  );
}
window.V2AmpersandLight = V2AmpersandLight;
