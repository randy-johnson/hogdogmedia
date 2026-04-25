// Reusable V2 logo as a self-contained component in a few sizes/layouts.
// Used across all the usage mocks.
function LogoV2({ size = 'lg', dark = false }) {
  const palette = dark
    ? { bg: '#0E0E10', fg: '#F5E8D5', accent: '#D88B6E' }
    : { bg: '#F5E8D5', fg: '#0E0E10', accent: '#D88B6E' };

  // size presets
  const cfg = {
    xs: { word: 28,  mascot: 32,  gap: 6,  rule: 14, label: 7 },
    sm: { word: 44,  mascot: 50,  gap: 8,  rule: 24, label: 9 },
    md: { word: 72,  mascot: 80,  gap: 12, rule: 40, label: 11 },
    lg: { word: 110, mascot: 130, gap: 16, rule: 60, label: 14 },
    xl: { word: 168, mascot: 200, gap: 24, rule: 90, label: 18 },
  }[size];

  return (
    <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'center', gap: cfg.gap }}>
      <div style={{ display:'flex', alignItems:'center', gap: cfg.gap }}>
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: cfg.word, color: palette.fg, lineHeight: 0.86, letterSpacing:'-0.01em' }}>HOG</div>
        <img src="assets/mascot-circle.png" alt="" style={{ width: cfg.mascot, height: cfg.mascot, objectFit:'contain' }} />
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: cfg.word, color: palette.fg, lineHeight: 0.86, letterSpacing:'-0.01em' }}>DOG</div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap: cfg.gap * 0.7 }}>
        <div style={{ width: cfg.rule, height: 2, background: palette.accent }}/>
        <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize: cfg.label, letterSpacing:'0.62em', color: palette.accent, textTransform:'uppercase' }}>Media</div>
        <div style={{ width: cfg.rule, height: 2, background: palette.accent }}/>
      </div>
    </div>
  );
}
window.LogoV2 = LogoV2;
