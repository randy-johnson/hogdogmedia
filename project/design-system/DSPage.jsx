// Hog Dog Media — Design System Showcase
// Sections: Logo, Color, Type, Components, Voice
function DSPage() {
  return (
    <div className="hd-app" style={{ minHeight:'100vh' }}>
      {/* HEADER */}
      <header style={{ padding:'32px 64px', borderBottom:'1px solid var(--hd-line)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div className="hd-mini-lockup">
          <div className="w">HOG</div>
          <img src="assets/mascot-circle.png" alt=""/>
          <div className="w">DOG</div>
        </div>
        <div className="hd-eyebrow">Design System · v0.1 · Apr 2026</div>
      </header>

      {/* HERO */}
      <section style={{ padding:'80px 64px 64px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'center' }}>
        <div style={{ minWidth: 0 }}>
          <div className="hd-eyebrow" style={{ marginBottom: 16 }}>The brand book</div>
          <h1 className="hd-display" style={{ margin: 0 }}>TWO VOICES.<br/>ONE NETWORK.</h1>
          <p className="hd-lead" style={{ marginTop: 24, maxWidth: 480 }}>
            Hog Dog Media is built on a single idea — the yin and yang of hog and dog.
            Every choice in this system, from type to spacing to the single drop of coral,
            holds that duality together.
          </p>
        </div>
        <div style={{ display:'flex', justifyContent:'center', minWidth: 0 }}>
          <HDLogo size="md"/>
        </div>
      </section>

      <hr className="hd-divider"/>

      {/* COLOR */}
      <section style={{ padding:'64px' }}>
        <div className="hd-eyebrow">01 · Color</div>
        <h2 className="hd-h2" style={{ marginTop: 8 }}>The palette</h2>
        <p className="hd-lead" style={{ maxWidth: 600, marginTop: 12 }}>Cream + ink carry the weight. Coral is a single drop of warmth — used once per composition.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 16, marginTop: 32 }}>
          {[
            { name:'Cream',     hex:'#F5E8D5', token:'--hd-cream',       fg:'#0E0E10', role:'Primary surface' },
            { name:'Paper',     hex:'#EFE6D3', token:'--hd-paper',       fg:'#0E0E10', role:'Secondary surface' },
            { name:'Ink',       hex:'#0E0E10', token:'--hd-ink',         fg:'#F5E8D5', role:'Primary text' },
            { name:'Ink Warm',  hex:'#1A1613', token:'--hd-ink-warm',    fg:'#F5E8D5', role:'Dark surface' },
            { name:'Coral',     hex:'#D88B6E', token:'--hd-coral',       fg:'#0E0E10', role:'Primary accent' },
            { name:'Coral Deep',hex:'#B86A4D', token:'--hd-coral-deep',  fg:'#F5E8D5', role:'Hover / pressed' },
            { name:'Hog Tan',   hex:'#C98F76', token:'--hd-hog-tan',     fg:'#0E0E10', role:'Brand neutral' },
            { name:'Dog Gray',  hex:'#5C6166', token:'--hd-dog-shadow',  fg:'#F5E8D5', role:'Brand neutral' },
          ].map(s => (
            <div key={s.name} style={{ borderRadius:14, overflow:'hidden', border:'1px solid var(--hd-line)' }}>
              <div style={{ background: s.hex, color: s.fg, height: 130, padding: 16, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 28, lineHeight: 0.9 }}>{s.name}</div>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 11, letterSpacing:'0.16em', textTransform:'uppercase', opacity:.85 }}>{s.hex}</div>
              </div>
              <div style={{ padding:'10px 14px', background:'#FFFCF4', display:'flex', flexDirection:'column', gap: 2 }}>
                <code style={{ fontSize: 11, color:'var(--hd-mute)' }}>{s.token}</code>
                <div style={{ fontSize: 12 }}>{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="hd-divider"/>

      {/* TYPE */}
      <section style={{ padding:'64px' }}>
        <div className="hd-eyebrow">02 · Typography</div>
        <h2 className="hd-h2" style={{ marginTop: 8 }}>Three voices</h2>
        <p className="hd-lead" style={{ maxWidth: 600, marginTop: 12 }}>Anton shouts. Fraunces sings. Space Grotesk explains.</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24, marginTop: 32 }}>
          <div className="hd-card">
            <div className="hd-eyebrow">Display · Anton</div>
            <div className="hd-display" style={{ marginTop: 12 }}>HOG DOG MEDIA</div>
            <div style={{ display:'flex', gap: 12, marginTop: 16, fontSize: 12, color:'var(--hd-mute)' }}>
              <span>96 / 0.9</span><span>·</span><span>Letter-spacing −1%</span><span>·</span><span>UPPERCASE only</span>
            </div>
          </div>
          <div className="hd-card">
            <div className="hd-eyebrow">Editorial · Fraunces</div>
            <div style={{ fontFamily:"'Fraunces',serif", fontSize: 48, fontWeight: 800, lineHeight: 1.05, marginTop: 12 }}>Two hosts, one mic.</div>
            <div style={{ display:'flex', gap: 12, marginTop: 16, fontSize: 12, color:'var(--hd-mute)' }}>
              <span>Pull-quotes</span><span>·</span><span>Subheads</span><span>·</span><span>Italic for emphasis</span>
            </div>
          </div>
          <div className="hd-card" style={{ gridColumn:'1 / -1' }}>
            <div className="hd-eyebrow">Body · Space Grotesk</div>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 12, maxWidth: 720 }}>
              Space Grotesk handles the running text — from product copy to YouTube descriptions to
              show notes. It's neutral enough to never compete with Anton, but warm enough to feel
              like part of the same family.
            </p>
            <div style={{ display:'flex', gap: 24, marginTop: 16, fontSize: 12, color:'var(--hd-mute)' }}>
              <span>Body 16/1.55</span><span>Small 13</span><span>Eyebrow 11 · 0.42em</span>
            </div>
          </div>
        </div>

        {/* type scale */}
        <div style={{ marginTop: 32, display:'grid', gridTemplateColumns:'120px 1fr', gap: 16, alignItems:'baseline' }}>
          <div className="hd-eyebrow">Hero · 96</div>      <div className="hd-display">HOG DOG</div>
          <div className="hd-eyebrow">H1 · 64</div>        <div className="hd-h1">Build in public</div>
          <div className="hd-eyebrow">H2 · 40</div>        <div className="hd-h2">New episode</div>
          <div className="hd-eyebrow">H3 · 24</div>        <div className="hd-h3">Why we ship every Friday</div>
          <div className="hd-eyebrow">Body · 16</div>      <div>Two hosts, one mic, and the unreasonable belief that media should be made by makers.</div>
          <div className="hd-eyebrow">Small · 13</div>     <div style={{ fontSize: 13, color:'var(--hd-mute)' }}>Captions, metadata, footnotes</div>
        </div>
      </section>

      <hr className="hd-divider"/>

      {/* COMPONENTS */}
      <section style={{ padding:'64px' }}>
        <div className="hd-eyebrow">03 · Components</div>
        <h2 className="hd-h2" style={{ marginTop: 8 }}>The kit</h2>

        {/* Buttons */}
        <div style={{ marginTop: 32, display:'grid', gridTemplateColumns:'180px 1fr', gap: 24, alignItems:'flex-start' }}>
          <div className="hd-eyebrow">Buttons</div>
          <div style={{ display:'flex', gap: 12, flexWrap:'wrap' }}>
            <button className="hd-btn">Subscribe</button>
            <button className="hd-btn hd-btn--coral">Listen now →</button>
            <button className="hd-btn hd-btn--ghost">Read transcript</button>
          </div>

          <div className="hd-eyebrow">Tags</div>
          <div style={{ display:'flex', gap: 8, flexWrap:'wrap' }}>
            <span className="hd-tag hd-tag--coral">New</span>
            <span className="hd-tag">Episode 042</span>
            <span className="hd-tag">12 min read</span>
            <span className="hd-tag">Indie SaaS</span>
          </div>

          <div className="hd-eyebrow">Inputs</div>
          <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
            <input className="hd-input" placeholder="you@yours.com" style={{ width: 280 }}/>
            <button className="hd-btn hd-btn--coral">Join the list</button>
          </div>

          <div className="hd-eyebrow">Card</div>
          <div className="hd-card" style={{ maxWidth: 360 }}>
            <span className="hd-tag hd-tag--coral" style={{ marginBottom: 12 }}>Episode 042</span>
            <div className="hd-h3" style={{ marginTop: 8 }}>Why we built our own podcast stack</div>
            <p style={{ fontSize: 14, color:'var(--hd-mute)', marginTop: 8 }}>The yin and yang of build vs. buy, and why we picked the harder road.</p>
            <div style={{ display:'flex', gap: 10, marginTop: 16, fontSize: 12, color:'var(--hd-mute)' }}>
              <span>52 min</span><span>·</span><span>April 18</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="hd-divider"/>

      {/* VOICE */}
      <section style={{ padding:'64px 64px 96px' }}>
        <div className="hd-eyebrow">04 · Voice</div>
        <h2 className="hd-h2" style={{ marginTop: 8 }}>How we sound</h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24, marginTop: 32 }}>
          <div className="hd-card">
            <div className="hd-eyebrow" style={{ color:'#1f7a3d' }}>Yes</div>
            <div style={{ fontFamily:"'Fraunces',serif", fontSize: 22, fontWeight: 600, marginTop: 8, lineHeight: 1.3 }}>
              "Two hosts. One mic. The yin and yang of the internet."
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color:'var(--hd-mute)' }}>Short. Concrete. Mirrors the duality.</div>
          </div>
          <div className="hd-card">
            <div className="hd-eyebrow" style={{ color:'#8B2E1F' }}>No</div>
            <div style={{ fontFamily:"'Fraunces',serif", fontSize: 22, fontWeight: 600, marginTop: 8, lineHeight: 1.3, color:'var(--hd-mute)' }}>
              "We are a leading multi-platform media company empowering creators worldwide."
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color:'var(--hd-mute)' }}>Generic. Bloated. Could be any brand.</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'var(--hd-ink)', color:'var(--hd-cream)', padding:'48px 64px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div className="hd-mini-lockup" style={{ filter:'invert(1) hue-rotate(180deg)' }}>
          <div className="w" style={{ color:'var(--hd-cream)', filter:'invert(1) hue-rotate(180deg)' }}>HOG</div>
          <img src="assets/mascot-circle.png" alt=""/>
          <div className="w" style={{ color:'var(--hd-cream)', filter:'invert(1) hue-rotate(180deg)' }}>DOG</div>
        </div>
        <div style={{ fontSize: 12, letterSpacing:'0.18em', textTransform:'uppercase', opacity:.6 }}>© 2026 Hog Dog Media</div>
      </footer>
    </div>
  );
}
window.DSPage = DSPage;
