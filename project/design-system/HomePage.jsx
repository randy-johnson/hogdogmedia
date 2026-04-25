// Hog Dog Media — Sample homepage built with the system
function HomePage() {
  return (
    <div className="hd-app">
      {/* NAV */}
      <nav style={{ padding:'24px 56px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid var(--hd-line)' }}>
        <div className="hd-mini-lockup">
          <div className="w">HOG</div>
          <img src="assets/mascot-circle.png" alt=""/>
          <div className="w">DOG</div>
        </div>
        <div style={{ display:'flex', gap: 32, fontSize: 14, fontWeight: 500 }}>
          <a style={{ color:'var(--hd-ink)', textDecoration:'none' }}>Shows</a>
          <a style={{ color:'var(--hd-ink)', textDecoration:'none' }}>Articles</a>
          <a style={{ color:'var(--hd-ink)', textDecoration:'none' }}>Tools</a>
          <a style={{ color:'var(--hd-ink)', textDecoration:'none' }}>About</a>
        </div>
        <button className="hd-btn hd-btn--coral">Subscribe →</button>
      </nav>

      {/* HERO */}
      <section style={{ padding:'96px 56px 80px', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 64, alignItems:'center' }}>
        <div>
          <div className="hd-eyebrow" style={{ marginBottom: 16 }}>Independent media · since 2026</div>
          <h1 className="hd-display" style={{ margin: 0, fontSize: 112 }}>
            TWO HOSTS.<br/>ONE MIC.<br/><span style={{ color:'var(--hd-coral)' }}>NO BS.</span>
          </h1>
          <p className="hd-lead" style={{ marginTop: 28, maxWidth: 480, fontSize: 19 }}>
            A weekly show, a sharp newsletter, and the SaaS we build between recordings —
            from the hog and dog of the indie internet.
          </p>
          <div style={{ display:'flex', gap: 12, marginTop: 36 }}>
            <button className="hd-btn hd-btn--coral">Listen to Ep. 042</button>
            <button className="hd-btn hd-btn--ghost">Read the latest</button>
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'center', position:'relative' }}>
          <div style={{ position:'absolute', width: 380, height: 380, borderRadius:'50%', background:'var(--hd-coral)', opacity:.18, filter:'blur(40px)' }}/>
          <img src="assets/mascot-circle.png" alt="" style={{ width: 420, height: 420, objectFit:'contain', position:'relative' }}/>
        </div>
      </section>

      {/* STATS strip */}
      <section style={{ background:'var(--hd-ink)', color:'var(--hd-cream)', padding:'40px 56px', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32 }}>
        {[
          { n:'184K', l:'Subscribers' },
          { n:'72',   l:'Episodes' },
          { n:'4.9★', l:'Apple Podcasts' },
          { n:'3',    l:'SaaS in flight' },
        ].map(s=>(
          <div key={s.l}>
            <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 56, color:'var(--hd-coral)', lineHeight: 0.9 }}>{s.n}</div>
            <div style={{ fontSize: 11, letterSpacing:'0.42em', textTransform:'uppercase', opacity:.7, marginTop: 6 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* LATEST EPISODES */}
      <section style={{ padding:'80px 56px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 40 }}>
          <div>
            <div className="hd-eyebrow">Latest</div>
            <h2 className="hd-h2" style={{ marginTop: 8 }}>From the studio</h2>
          </div>
          <a className="hd-eyebrow" style={{ color:'var(--hd-ink)', textDecoration:'underline' }}>All episodes →</a>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24 }}>
          {[
            { ep:'042', title:'Why we built our own podcast stack', dur:'52 min', d:'Apr 18', tag:'New' },
            { ep:'041', title:'The build-vs-buy myth, busted',       dur:'48 min', d:'Apr 11', tag:null  },
            { ep:'040', title:'Designing for two voices',             dur:'36 min', d:'Apr 04', tag:null  },
          ].map(e=>(
            <div key={e.ep} className="hd-card" style={{ display:'flex', flexDirection:'column', gap: 12 }}>
              <div style={{ aspectRatio:'16/9', background:'var(--hd-paper)', borderRadius: 8, position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', inset: 0, opacity: 0.08, backgroundImage:'url(assets/mascot-circle.png)', backgroundSize:'80px', backgroundRepeat:'repeat' }}/>
                <div style={{ position:'absolute', bottom: 12, left: 12, fontFamily:"'Anton',sans-serif", fontSize: 64, color:'var(--hd-coral)', lineHeight: 0.86 }}>{e.ep}</div>
                {e.tag && <span className="hd-tag hd-tag--coral" style={{ position:'absolute', top: 12, right: 12 }}>{e.tag}</span>}
              </div>
              <div className="hd-h3" style={{ fontSize: 20 }}>{e.title}</div>
              <div style={{ display:'flex', gap: 10, fontSize: 12, color:'var(--hd-mute)' }}>
                <span>{e.dur}</span><span>·</span><span>{e.d}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background:'var(--hd-paper)', padding:'80px 56px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'center' }}>
        <div>
          <div className="hd-eyebrow">The newsletter</div>
          <h2 className="hd-h2" style={{ marginTop: 8, fontSize: 56 }}>Friday's <span style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontWeight: 800 }}>good word.</span></h2>
          <p className="hd-lead" style={{ marginTop: 16, maxWidth: 480 }}>
            One show recap, three things we're building, and one good link. Every Friday at 9am.
          </p>
        </div>
        <div style={{ display:'flex', gap: 8 }}>
          <input className="hd-input" placeholder="you@yours.com" style={{ flex: 1 }}/>
          <button className="hd-btn hd-btn--coral">Join 12k readers</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'var(--hd-ink)', color:'var(--hd-cream)', padding:'56px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap: 48, marginBottom: 40 }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap: 6, color:'var(--hd-cream)' }}>
              <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 32, lineHeight: 0.86 }}>HOG</div>
              <img src="assets/mascot-circle.png" alt="" style={{ width: 36, height: 36, objectFit:'contain' }}/>
              <div style={{ fontFamily:"'Anton',sans-serif", fontSize: 32, lineHeight: 0.86 }}>DOG</div>
            </div>
            <p style={{ marginTop: 16, fontSize: 14, opacity:.7, maxWidth: 320 }}>The yin and yang of indie media. Made by makers, for makers.</p>
          </div>
          {[
            ['Shows', ['Hog Dog Show', 'Build Notes', 'Friday Recap']],
            ['Articles', ['Latest', 'Archive', 'RSS']],
            ['Company', ['About', 'Sponsor', 'Contact']],
          ].map(([h, items])=>(
            <div key={h}>
              <div className="hd-eyebrow" style={{ color:'var(--hd-coral)' }}>{h}</div>
              <div style={{ display:'flex', flexDirection:'column', gap: 8, marginTop: 14, fontSize: 14, opacity:.8 }}>
                {items.map(i=><a key={i}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop:'1px solid rgba(245,232,213,0.12)', paddingTop: 24, display:'flex', justifyContent:'space-between', fontSize: 12, opacity:.5 }}>
          <span>© 2026 Hog Dog Media. All rights reserved.</span>
          <span>Made in cream, ink, and one drop of coral.</span>
        </div>
      </footer>
    </div>
  );
}
window.HomePage = HomePage;
