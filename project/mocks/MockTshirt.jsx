// Mock D — T-shirt mock (front + back)
function MockTshirt() {
  const Tee = ({ color, fg, label, children }) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 10 }}>
      <svg width="240" height="280" viewBox="0 0 240 280">
        {/* tee body */}
        <path d="M30 60 L80 30 Q90 24 100 26 Q120 38 140 26 Q150 24 160 30 L210 60 L195 110 L170 100 L170 260 Q170 270 160 270 L80 270 Q70 270 70 260 L70 100 L45 110 Z"
              fill={color} stroke="#0E0E10" strokeWidth="2"/>
        {/* collar */}
        <path d="M100 26 Q120 50 140 26" fill="none" stroke="#0E0E10" strokeWidth="2"/>
        <foreignObject x="40" y="100" width="160" height="140">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color: fg }}>
            {children}
          </div>
        </foreignObject>
      </svg>
      <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 10, letterSpacing:'0.2em', color:'#5C4536', textTransform:'uppercase' }}>{label}</div>
    </div>
  );

  const SmallLogo = () => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 4 }}>
      <div style={{ display:'flex', alignItems:'center', gap: 4 }}>
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 18, lineHeight: 0.86, color:'inherit', letterSpacing:'-0.01em' }}>HOG</div>
        <img src="assets/mascot-circle.png" alt="" style={{ width: 22, height: 22, objectFit:'contain' }}/>
        <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 18, lineHeight: 0.86, color:'inherit', letterSpacing:'-0.01em' }}>DOG</div>
      </div>
      <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 6, letterSpacing:'0.42em', color:'#D88B6E', textTransform:'uppercase' }}>— Media —</div>
    </div>
  );

  return (
    <div className="artboard" style={{ background:'#EFE6D3', gap: 32 }}>
      <Tee color="#F5E8D5" fg="#0E0E10" label="Cream / chest print">
        <SmallLogo/>
      </Tee>
      <Tee color="#0E0E10" fg="#F5E8D5" label="Black / chest print">
        <SmallLogo/>
      </Tee>
      <Tee color="#D88B6E" fg="#0E0E10" label="Coral / mascot only">
        <img src="assets/mascot-circle.png" alt="" style={{ width: 80, height: 80, objectFit:'contain' }}/>
      </Tee>
      <div className="ab-caption" style={{ color:'#0E0E10' }}>T-shirt / merch</div>
    </div>
  );
}
window.MockTshirt = MockTshirt;
