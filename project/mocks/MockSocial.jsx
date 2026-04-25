// Mock E — Square social post (Instagram / X card)
function MockSocialPost() {
  return (
    <div className="artboard" style={{ background:'#0E0E10' }}>
      <div style={{ width: 480, height: 480, background:'#F5E8D5', position:'relative', overflow:'hidden', boxShadow:'0 16px 40px rgba(0,0,0,0.4)' }}>
        {/* corner badge */}
        <div style={{ position:'absolute', top: 24, left: 24, fontFamily:"'Space Grotesk',sans-serif", fontSize: 11, letterSpacing:'0.4em', color:'#8C5B46', textTransform:'uppercase' }}>Episode 042 · Drop</div>
        <div style={{ position:'absolute', top: 24, right: 24, fontFamily:"'Space Grotesk',sans-serif", fontSize: 11, letterSpacing:'0.4em', color:'#8C5B46', textTransform:'uppercase' }}>04 · 25 · 26</div>

        {/* main lockup */}
        <div style={{ position:'absolute', inset: 0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <LogoV2 size="md"/>
          <div style={{ marginTop: 28, fontFamily:"'Anton',sans-serif", fontSize: 30, color:'#0E0E10', textAlign:'center', lineHeight: 1.1, maxWidth: 360 }}>
            WHY WE BUILT OUR<br/>OWN PODCAST STACK
          </div>
          <div style={{ marginTop: 10, fontFamily:"'Space Grotesk',sans-serif", fontSize: 13, color:'#8C5B46', letterSpacing:'0.18em', textTransform:'uppercase' }}>New on YouTube · Spotify · Apple</div>
        </div>

        {/* bottom border accent */}
        <div style={{ position:'absolute', left: 0, right: 0, bottom: 0, height: 8, background:'#D88B6E' }}/>
        <div style={{ position:'absolute', left: 0, right: 0, bottom: 8, height: 2, background:'#0E0E10' }}/>
      </div>
      <div className="ab-caption" style={{ color:'#F5E8D5' }}>Social post · 1:1</div>
    </div>
  );
}
window.MockSocialPost = MockSocialPost;
