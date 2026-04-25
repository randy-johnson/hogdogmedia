// V4 — Horizontal lockup, hog left + dog right of wordmark
// Mascot pieces flank the wordmark instead of being a single circle.
// (Uses the existing mascot art but mirrors a copy so each animal sits apart.)
function V4FlankingLockup() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display:'flex', alignItems:'center', gap: 24, padding:'30px 40px' }}>
        {/* Hog half — left-half crop of mascot */}
        <div style={{ width: 130, height: 200, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'flex-start' }}>
          <img src="assets/mascot-circle.png" alt="" style={{ width: 240, height: 220, objectFit:'contain', objectPosition: 'left center', marginLeft: -8 }}/>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 84, lineHeight: 0.86, color:'#0E0E10', letterSpacing:'-0.01em' }}>HOG DOG</div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop: 6 }}>
            <div style={{ width: 60, height: 2, background:'#D88B6E' }}/>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:14, letterSpacing:'0.48em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
            <div style={{ width: 60, height: 2, background:'#D88B6E' }}/>
          </div>
        </div>
        {/* Dog half — right-half crop */}
        <div style={{ width: 130, height: 200, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'flex-end' }}>
          <img src="assets/mascot-circle.png" alt="" style={{ width: 240, height: 220, objectFit:'contain', objectPosition:'right center', marginRight: -8 }}/>
        </div>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>V4 · Hog + Dog flanking wordmark</div>
    </div>
  );
}
window.V4FlankingLockup = V4FlankingLockup;
