// R7 — Editorial serif wordmark (Fraunces italic)
function R7Editorial() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '40px 56px' }}>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 210, height: 210, objectFit:'contain' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontStyle:'italic', fontWeight: 900, fontSize: 82, lineHeight: 0.88, color: '#0E0E10', letterSpacing:'-0.02em' }}>Hog&nbsp;Dog</div>
          <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize: 14, letterSpacing:'0.62em', color:'#8C5B46', textTransform:'uppercase', marginTop: 6 }}>— Media Co. —</div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>R7 · Editorial serif</div>
    </div>
  );
}
window.R7Editorial = R7Editorial;
