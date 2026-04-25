// R5 — Dark / inverse mode
function R5Dark() {
  return (
    <div className="artboard" style={{ background: '#0E0E10' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '40px 56px' }}>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 220, height: 220, objectFit:'contain' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 96, lineHeight: 0.86, color: '#F5E8D5', letterSpacing: '-0.01em' }}>HOG DOG</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
            <div style={{ height: 2, flex: 1, background: '#D88B6E' }} />
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:15, letterSpacing:'0.48em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
            <div style={{ height: 2, flex: 1, background: '#D88B6E' }} />
          </div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#F5E8D5' }}>R5 · Dark / inverse</div>
    </div>
  );
}
window.R5Dark = R5Dark;
