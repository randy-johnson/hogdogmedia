// R4 — Wordless mark (favicon / app icon)
function R4Mark() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display:'flex', gap: 40, alignItems:'center' }}>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 220, height: 220, objectFit:'contain' }} />
        <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
          {[96, 64, 40, 24].map(size=>(
            <div key={size} style={{ display:'flex', alignItems:'center', gap:12 }}>
              <img src="assets/mascot-circle.png" alt="" style={{ width: size, height: size, objectFit:'contain' }} />
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 10, letterSpacing:'0.24em', color:'#8C5B46', textTransform:'uppercase' }}>{size}px</div>
            </div>
          ))}
        </div>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>R4 · Wordless mark · favicon scales</div>
    </div>
  );
}
window.R4Mark = R4Mark;
