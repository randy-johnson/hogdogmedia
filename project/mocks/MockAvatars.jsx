// Mock B — Avatar set (circle crops at multiple sizes, on different bg colors)
function MockAvatars() {
  const cells = [
    { bg: '#F5E8D5', size: 160, label: 'Profile · 160px' },
    { bg: '#0E0E10', size: 96,  label: 'Comment · 96px'  },
    { bg: '#D88B6E', size: 64,  label: 'List · 64px'      },
    { bg: '#F5E8D5', size: 32,  label: 'Inline · 32px'    },
  ];
  return (
    <div className="artboard" style={{ background:'#EFE6D3', flexDirection:'column', gap: 18 }}>
      <div style={{ display:'flex', gap: 28, alignItems:'flex-end' }}>
        {cells.map((c,i)=>(
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 8 }}>
            <div style={{ width: c.size, height: c.size, borderRadius:'50%', background: c.bg, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', boxShadow:'0 6px 16px rgba(0,0,0,0.12)' }}>
              <img src="assets/mascot-circle.png" alt="" style={{ width: c.size * 0.92, height: c.size * 0.92, objectFit:'contain' }}/>
            </div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 10, letterSpacing:'0.18em', color:'#5C4536', textTransform:'uppercase' }}>{c.label}</div>
          </div>
        ))}
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>Social avatars</div>
    </div>
  );
}
window.MockAvatars = MockAvatars;
