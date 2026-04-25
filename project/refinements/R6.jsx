// R6 — Chunky broadcast wordmark (Alfa Slab One)
function R6Chunky() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '40px 56px' }}>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 200, height: 200, objectFit:'contain' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Alfa Slab One', serif", fontSize: 72, lineHeight: 0.9, color: '#0E0E10', letterSpacing:'-0.01em' }}>HOG DOG</div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop: 10 }}>
            <div style={{ height: 3, flex: 1, background: '#0E0E10' }} />
            <div style={{ fontFamily:"'Alfa Slab One',serif", fontSize: 18, letterSpacing:'0.32em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
            <div style={{ height: 3, flex: 1, background: '#0E0E10' }} />
          </div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>R6 · Chunky broadcast</div>
    </div>
  );
}
window.R6Chunky = R6Chunky;
