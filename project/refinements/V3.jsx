// V3 — R1 reworked: hog + dog separated with clear gap
// Two stylized vector heads, NOT touching, with a thin coral divider line.
function V3SeparatedLockup() {
  const hogTan = '#C98F76';
  const hogShade = '#8C5B46';
  const dogGray = '#9DA3A8';
  const dogShade = '#5C6166';
  return (
    <div className="artboard" style={{ background: '#F5E8D5' }}>
      <div style={{ display:'flex', alignItems:'center', gap: 36, padding:'40px 56px' }}>
        <svg width="240" height="180" viewBox="0 0 240 180">
          {/* HOG (left, facing right) */}
          <g>
            {/* outline */}
            <path d="M10 100 Q10 46 56 38 Q86 34 102 56 Q112 70 110 86 L110 110 Q108 132 88 138 L40 138 Q14 134 10 104 Z" fill="#0E0E10"/>
            <path d="M14 100 Q14 50 58 42 Q86 38 100 58 Q108 72 106 86 L106 108 Q104 128 88 134 L42 134 Q18 130 14 102 Z" fill={hogTan}/>
            {/* ear */}
            <path d="M22 60 Q12 38 32 32 Q46 36 44 56 Z" fill={hogShade}/>
            {/* snout */}
            <ellipse cx="106" cy="92" rx="14" ry="11" fill={hogShade}/>
            <circle cx="102" cy="90" r="2.4" fill="#0E0E10"/>
            <circle cx="110" cy="90" r="2.4" fill="#0E0E10"/>
            {/* eye */}
            <path d="M64 70 L80 66 L76 80 Z" fill="#fff"/>
            <circle cx="74" cy="72" r="2.5" fill="#0E0E10"/>
            {/* tusk */}
            <path d="M96 102 L104 110 L92 108 Z" fill="#F5E8D5"/>
          </g>
          {/* DIVIDER — coral comma curve, clearly separating */}
          <path d="M120 28 Q132 90 120 152" stroke="#D88B6E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* DOG (right, facing left) */}
          <g>
            <path d="M230 100 Q230 46 184 38 Q154 34 138 56 Q128 70 130 86 L130 110 Q132 132 152 138 L200 138 Q226 134 230 104 Z" fill="#0E0E10"/>
            <path d="M226 100 Q226 50 182 42 Q154 38 140 58 Q132 72 134 86 L134 108 Q136 128 152 134 L198 134 Q222 130 226 102 Z" fill={dogGray}/>
            {/* ears (pointy) */}
            <path d="M218 60 Q230 22 206 24 Q194 38 198 58 Z" fill={dogShade}/>
            <path d="M186 50 Q198 24 210 30 Q204 50 196 58 Z" fill={dogShade}/>
            {/* snout */}
            <ellipse cx="134" cy="92" rx="11" ry="9" fill={dogShade}/>
            <circle cx="130" cy="92" r="2.2" fill="#0E0E10"/>
            {/* eye */}
            <path d="M176 70 L160 66 L164 80 Z" fill="#fff"/>
            <circle cx="166" cy="72" r="2.5" fill="#0E0E10"/>
            {/* fang */}
            <path d="M144 102 L136 110 L148 108 Z" fill="#F5E8D5"/>
          </g>
        </svg>
        <div style={{ display:'flex', flexDirection:'column' }}>
          <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 88, lineHeight: 0.86, color:'#0E0E10', letterSpacing:'-0.01em' }}>HOG DOG</div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop: 8 }}>
            <div style={{ height: 2, flex: 1, background:'#D88B6E' }}/>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:15, letterSpacing:'0.48em', color:'#D88B6E', textTransform:'uppercase' }}>Media</div>
            <div style={{ height: 2, flex: 1, background:'#D88B6E' }}/>
          </div>
        </div>
      </div>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>V3 · Horizontal · separated heads</div>
    </div>
  );
}
window.V3SeparatedLockup = V3SeparatedLockup;
