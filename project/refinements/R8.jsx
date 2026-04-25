// R8 — Single-color coral treatment (merch / screen-print)
// Uses CSS filter to knock the full-color mascot into a coral silhouette.
function R8OneColor() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '40px 56px' }}>
        <div style={{
          width: 220, height: 220, display:'flex', alignItems:'center', justifyContent:'center',
          maskImage: 'url(assets/mascot-circle.png)',
          WebkitMaskImage: 'url(assets/mascot-circle.png)',
          maskSize: 'contain', WebkitMaskSize: 'contain',
          maskRepeat:'no-repeat', WebkitMaskRepeat:'no-repeat',
          maskPosition:'center', WebkitMaskPosition:'center',
          background: '#8B2E1F'
        }}/>
        <div style={{ display:'flex', flexDirection:'column' }}>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 96, lineHeight: 0.86, color:'#8B2E1F', letterSpacing:'-0.01em' }}>HOG DOG</div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop: 8 }}>
            <div style={{ height: 2, flex: 1, background:'#8B2E1F' }}/>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:15, letterSpacing:'0.48em', color:'#8B2E1F', textTransform:'uppercase' }}>Media</div>
            <div style={{ height: 2, flex: 1, background:'#8B2E1F' }}/>
          </div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#8B2E1F' }}>R8 · One-color for print/merch</div>
    </div>
  );
}
window.R8OneColor = R8OneColor;
