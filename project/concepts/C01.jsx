// C01 — Original mascot, refreshed lockup
// Keeps the existing esports mascot art but pairs it with a cleaner,
// more editorial wordmark so it reads as media, not gaming.
function Concept01() {
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 28,
        padding: '40px 56px'
      }}>
        <img
          src="assets/mascot-circle.png"
          alt="Hog + Dog mascot"
          style={{ width: 200, height: 200, objectFit: 'contain', filter: 'drop-shadow(0 6px 0 rgba(14,14,16,0.08))' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 88, lineHeight: 0.88,
            color: '#0E0E10',
            letterSpacing: '-0.01em'
          }}>HOG DOG</div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginTop: 6
          }}>
            <div style={{ height: 2, flex: 1, background: '#D88B6E' }} />
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 15, letterSpacing: '0.42em',
              color: '#D88B6E',
              textTransform: 'uppercase'
            }}>Media Co.</div>
            <div style={{ height: 2, flex: 1, background: '#D88B6E' }} />
          </div>
        </div>
      </div>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>01 · Mascot, refreshed lockup</div>
    </div>
  );
}
window.Concept01 = Concept01;
