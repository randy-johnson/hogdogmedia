// Mock F — Animated intro/outro bumper (loops on hover/play)
// 0–0.6s: mascot drops in + spins | 0.6–1.4s: HOG ___ DOG slides in | 1.4–2.2s: Media reveal
function MockBumper() {
  const [phase, setPhase] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);

  React.useEffect(()=>{
    if (!playing) return;
    let raf, start;
    const dur = 3000; // 3s loop
    const tick = (t)=>{
      if (!start) start = t;
      const e = ((t - start) % dur) / dur;
      setPhase(e);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(raf);
  }, [playing]);

  // Eases
  const ease = (t)=> t<.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2;

  // Phase keyframes (0..1)
  const mascotIn   = ease(Math.min(1, phase / 0.25));            // 0–25%
  const wordIn     = ease(Math.max(0, Math.min(1, (phase - 0.25)/0.20))); // 25–45%
  const mediaIn    = ease(Math.max(0, Math.min(1, (phase - 0.50)/0.20))); // 50–70%
  const holdAndOut = phase < 0.85 ? 1 : 1 - ease((phase - 0.85)/0.15);

  return (
    <div className="artboard" style={{ background:'#0E0E10', flexDirection:'column' }}>
      {/* 16:9 stage */}
      <div style={{ width: 560, height: 315, background:'#F5E8D5', position:'relative', overflow:'hidden', boxShadow:'0 14px 30px rgba(0,0,0,0.5)' }}>
        {/* faint repeating mascot */}
        <div style={{ position:'absolute', inset: 0, opacity: 0.05, backgroundImage:'url(assets/mascot-circle.png)', backgroundSize:'80px 80px' }}/>

        <div style={{ position:'absolute', inset: 0, display:'flex', alignItems:'center', justifyContent:'center', opacity: holdAndOut }}>
          {/* HOG slides in from left */}
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 88, color:'#0E0E10', lineHeight: 0.86, letterSpacing:'-0.01em',
            transform: `translateX(${-200 * (1 - wordIn)}px)`, opacity: wordIn }}>HOG</div>
          {/* mascot drops + spins */}
          <div style={{ width: 100, height: 100, margin: '0 12px',
            transform: `translateY(${-200 * (1 - mascotIn)}px) rotate(${720 * (1 - mascotIn)}deg) scale(${0.6 + 0.4 * mascotIn})`,
            opacity: mascotIn }}>
            <img src="assets/mascot-circle.png" alt="" style={{ width: '100%', height: '100%', objectFit:'contain' }}/>
          </div>
          {/* DOG slides in from right */}
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 88, color:'#0E0E10', lineHeight: 0.86, letterSpacing:'-0.01em',
            transform: `translateX(${200 * (1 - wordIn)}px)`, opacity: wordIn }}>DOG</div>
        </div>

        {/* MEDIA tagline ribbon — slides up from bottom */}
        <div style={{ position:'absolute', left: 0, right: 0, bottom: 60, display:'flex', alignItems:'center', justifyContent:'center', gap: 12,
          transform: `translateY(${30 * (1 - mediaIn)}px)`, opacity: mediaIn * holdAndOut }}>
          <div style={{ width: 80, height: 2, background:'#D88B6E' }}/>
          <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize: 14, letterSpacing:'0.62em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
          <div style={{ width: 80, height: 2, background:'#D88B6E' }}/>
        </div>

        {/* coral wipe transition at the very end */}
        <div style={{ position:'absolute', inset: 0, background:'#D88B6E',
          transform: `translateY(${100 * (1 - (phase > 0.9 ? (phase-0.9)/0.1 : 0))}%)` }}/>
      </div>

      {/* controls */}
      <div style={{ marginTop: 14, display:'flex', alignItems:'center', gap: 12, color:'#F5E8D5', fontFamily:"'Space Grotesk',sans-serif", fontSize: 11, letterSpacing:'0.18em', textTransform:'uppercase' }}>
        <button onClick={()=>setPlaying(p=>!p)} style={{ background:'#D88B6E', color:'#0E0E10', border:'none', padding:'6px 14px', borderRadius: 4, fontWeight: 700, fontFamily:'inherit', fontSize: 11, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer' }}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <div style={{ flex:1, height: 4, background:'#272727', borderRadius: 2, overflow:'hidden' }}>
          <div style={{ width: `${phase * 100}%`, height: '100%', background:'#D88B6E' }}/>
        </div>
        <div style={{ opacity: 0.6 }}>{(phase * 3).toFixed(1)}s / 3.0s</div>
      </div>

      <div className="ab-caption" style={{ color:'#F5E8D5' }}>Animated intro bumper</div>
    </div>
  );
}
window.MockBumper = MockBumper;
