// R2 — Stacked lockup (square-friendly)
function R2Stacked() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 10, padding: '20px 0' }}>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 200, height: 200, objectFit:'contain' }} />
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 64, lineHeight: 0.88, color:'#0E0E10', letterSpacing:'-0.01em' }}>HOG DOG</div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width: 30, height: 2, background: '#D88B6E' }}/>
          <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize: 13, letterSpacing:'0.52em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
          <div style={{ width: 30, height: 2, background: '#D88B6E' }}/>
        </div>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>R2 · Stacked lockup</div>
    </div>
  );
}
window.R2Stacked = R2Stacked;
