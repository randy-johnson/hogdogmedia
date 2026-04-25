// Reusable Logo for system showcase + homepage
function HDLogo({ size = 'md' }) {
  const cfg = {
    sm: { word: 32, mascot: 38, gap: 6,  rule: 18, label: 9 },
    md: { word: 64, mascot: 74, gap: 10, rule: 32, label: 12 },
    lg: { word: 110, mascot: 130, gap: 16, rule: 60, label: 14 },
  }[size];
  return (
    <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'center', gap: cfg.gap }}>
      <div style={{ display:'flex', alignItems:'center', gap: cfg.gap }}>
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: cfg.word, color:'var(--hd-ink)', lineHeight: 0.86, letterSpacing:'-0.01em' }}>HOG</div>
        <img src="assets/mascot-circle.png" alt="" style={{ width: cfg.mascot, height: cfg.mascot, objectFit:'contain' }} />
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: cfg.word, color:'var(--hd-ink)', lineHeight: 0.86, letterSpacing:'-0.01em' }}>DOG</div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap: cfg.gap * 0.7 }}>
        <div style={{ width: cfg.rule, height: 2, background:'var(--hd-coral)' }}/>
        <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize: cfg.label, letterSpacing:'0.62em', color:'var(--hd-coral)', textTransform:'uppercase' }}>Media</div>
        <div style={{ width: cfg.rule, height: 2, background:'var(--hd-coral)' }}/>
      </div>
    </div>
  );
}
window.HDLogo = HDLogo;
