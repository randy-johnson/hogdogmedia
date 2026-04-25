// Mock A — YouTube channel page (header + avatar + cards)
function MockYouTube() {
  return (
    <div className="artboard" style={{ background:'#0F0F0F', padding: 0, alignItems:'flex-start' }}>
      {/* header bar */}
      <div style={{ position:'absolute', top: 0, left: 0, right: 0, height: 56, background:'#0F0F0F', borderBottom:'1px solid #272727', display:'flex', alignItems:'center', padding:'0 24px', gap: 24, color:'#fff', fontFamily:'Roboto, system-ui, sans-serif' }}>
        <div style={{ display:'flex', gap:18, alignItems:'center' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
            <div style={{ width: 18, height: 2, background:'#fff' }}/><div style={{ width: 18, height: 2, background:'#fff' }}/><div style={{ width: 18, height: 2, background:'#fff' }}/>
          </div>
          <div style={{ fontWeight:700, fontSize: 18, letterSpacing:'-0.02em' }}>YouTube</div>
        </div>
        <div style={{ flex: 1, display:'flex', justifyContent:'center' }}>
          <div style={{ width: 460, height: 36, background:'#121212', border:'1px solid #303030', borderRadius:'18px 0 0 18px', padding:'0 14px', display:'flex', alignItems:'center', color:'#7a7a7a', fontSize: 13 }}>Search</div>
          <div style={{ width: 56, height: 36, background:'#222', border:'1px solid #303030', borderLeft:'none', borderRadius:'0 18px 18px 0', display:'flex', alignItems:'center', justifyContent:'center', color:'#aaa' }}>🔍</div>
        </div>
        <div style={{ width: 28, height: 28, borderRadius:'50%', background:'#D88B6E', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#0E0E10' }}>R</div>
      </div>

      {/* banner */}
      <div style={{ position:'absolute', top: 56, left: 0, right: 0, height: 220, background:'#F5E8D5', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
        {/* faint repeating mascot pattern */}
        <div style={{ position:'absolute', inset: 0, opacity: 0.06, backgroundImage:'url(assets/mascot-circle.png)', backgroundSize:'120px 120px', backgroundRepeat:'repeat' }}/>
        <div style={{ position:'relative', zIndex: 1 }}>
          <LogoV2 size="lg"/>
        </div>
      </div>

      {/* channel header row */}
      <div style={{ position:'absolute', top: 296, left: 24, right: 24, display:'flex', alignItems:'center', gap: 20, color:'#fff', fontFamily:'Roboto, system-ui, sans-serif' }}>
        <div style={{ width: 96, height: 96, borderRadius:'50%', background:'#F5E8D5', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', border:'2px solid #0E0E10' }}>
          <img src="assets/mascot-circle.png" alt="" style={{ width: 88, height: 88, objectFit:'contain' }}/>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing:'-0.01em' }}>Hog Dog Media</div>
          <div style={{ fontSize: 12, color:'#aaa', display:'flex', gap: 10 }}>
            <span>@hogdogmedia</span><span>·</span><span>184K subscribers</span><span>·</span><span>72 videos</span>
          </div>
          <div style={{ fontSize: 12, color:'#aaa', maxWidth: 480 }}>Two hosts. One mic. The yin and yang of the internet — videos, podcasts, & SaaS for makers.</div>
        </div>
        <div style={{ marginLeft: 'auto', display:'flex', gap: 8 }}>
          <div style={{ background:'#fff', color:'#0E0E10', padding:'8px 16px', borderRadius: 18, fontSize: 13, fontWeight: 600 }}>Subscribe</div>
          <div style={{ background:'#272727', color:'#fff', padding:'8px 14px', borderRadius: 18, fontSize: 13, fontWeight: 500 }}>Join</div>
        </div>
      </div>

      <div className="ab-caption" style={{ color:'#aaa' }}>YouTube channel page</div>
    </div>
  );
}
window.MockYouTube = MockYouTube;
