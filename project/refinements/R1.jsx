// R1 — Horizontal lockup, baseline refined
// Same as original winner, but proportions tightened and wordmark sits
// on a clean baseline with a thin coral rule separating tagline.
function R1Horizontal() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '40px 56px' }}>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 220, height: 220, objectFit:'contain' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 96, lineHeight: 0.86, color: '#0E0E10', letterSpacing: '-0.01em' }}>HOG DOG</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
            <div style={{ height: 2, flex: 1, background: '#D88B6E' }} />
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:15, letterSpacing:'0.48em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
            <div style={{ height: 2, flex: 1, background: '#D88B6E' }} />
          </div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>R1 · Horizontal lockup</div>
    </div>
  );
}
window.R1Horizontal = R1Horizontal;
