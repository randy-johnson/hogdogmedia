// Mock C — Browser tab + favicon row
function MockFavicon() {
  const Tab = ({ active, title, fav }) => (
    <div style={{
      height: 30, padding: '0 14px 0 10px',
      background: active ? '#fdfaf3' : '#d8d3c5',
      color: active ? '#0E0E10' : '#5C4536',
      display:'flex', alignItems:'center', gap: 8, fontSize: 11,
      borderTopLeftRadius: 8, borderTopRightRadius: 8,
      borderTop: active ? '1px solid #c0baa9' : 'none',
      borderLeft: active ? '1px solid #c0baa9' : 'none',
      borderRight: active ? '1px solid #c0baa9' : 'none',
      maxWidth: 200, fontFamily:'system-ui, sans-serif',
    }}>
      {fav}
      <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{title}</span>
      <span style={{ marginLeft:'auto', opacity:.5, fontSize: 12 }}>×</span>
    </div>
  );
  const Fav = () => (
    <div style={{ width: 16, height: 16, borderRadius:'50%', background:'#F5E8D5', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flexShrink:0 }}>
      <img src="assets/mascot-circle.png" alt="" style={{ width: 14, height: 14, objectFit:'contain' }}/>
    </div>
  );
  return (
    <div className="artboard" style={{ background:'#EFE6D3', flexDirection:'column', gap: 24, padding: 30, alignItems:'stretch', justifyContent:'flex-start' }}>
      {/* browser chrome */}
      <div style={{ background:'#e9e3d2', borderRadius: 10, padding: '8px 10px 0', boxShadow:'0 6px 16px rgba(0,0,0,0.10)' }}>
        <div style={{ display:'flex', gap: 6, paddingBottom: 8 }}>
          <span style={{ width:10, height:10, borderRadius:'50%', background:'#ed6a5e' }}/>
          <span style={{ width:10, height:10, borderRadius:'50%', background:'#f5be4f' }}/>
          <span style={{ width:10, height:10, borderRadius:'50%', background:'#62c554' }}/>
        </div>
        <div style={{ display:'flex', gap: 4, alignItems:'flex-end' }}>
          <Tab active title="Hog Dog Media" fav={<Fav/>}/>
          <Tab title="GitHub · hogdog" fav={<div style={{width:16,height:16,borderRadius:3,background:'#1f1f1f'}}/>}/>
          <Tab title="Stripe Dashboard" fav={<div style={{width:16,height:16,borderRadius:3,background:'#635BFF'}}/>}/>
        </div>
        <div style={{ background:'#fdfaf3', height: 36, borderRadius: '0 8px 0 0', borderTop:'1px solid #c0baa9', display:'flex', alignItems:'center', padding:'0 10px', gap: 8 }}>
          <span style={{ color:'#888' }}>‹ ›</span>
          <div style={{ flex: 1, height: 22, background:'#efeae0', borderRadius: 4, padding: '0 8px', display:'flex', alignItems:'center', gap: 6, fontSize: 11, color:'#0E0E10', fontFamily:'system-ui' }}>
            <span style={{ color:'#888' }}>🔒</span> hogdogmedia.com
          </div>
        </div>
      </div>

      {/* favicon scale row */}
      <div style={{ display:'flex', gap: 24, alignItems:'flex-end', justifyContent:'center', padding:'10px 0' }}>
        {[16, 24, 32, 48, 64].map(s=>(
          <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 6 }}>
            <div style={{ width: s, height: s, borderRadius:'50%', background:'#F5E8D5', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
              <img src="assets/mascot-circle.png" alt="" style={{ width: s * 0.92, height: s * 0.92, objectFit:'contain' }}/>
            </div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 9, letterSpacing:'0.16em', color:'#5C4536', textTransform:'uppercase' }}>{s}px</div>
          </div>
        ))}
      </div>

      <div className="ab-caption" style={{ color:'#0E0E10' }}>Browser tab + favicon scale</div>
    </div>
  );
}
window.MockFavicon = MockFavicon;
