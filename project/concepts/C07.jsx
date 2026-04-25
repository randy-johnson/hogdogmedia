// C07 — Retro varsity badge
// Circular athletic/Americana crest with the animals head-to-head.
// Leans into "broadcast network" heritage vibes.
function Concept07() {
  return (
    <div className="artboard" style={{ background: '#EFE6D3' }}>
      <svg width="260" height="260" viewBox="0 0 260 260">
        <defs>
          <path id="c07top" d="M 30 130 A 100 100 0 0 1 230 130" />
          <path id="c07bot" d="M 40 130 A 90 90 0 0 0 220 130" />
        </defs>
        {/* outer ring */}
        <circle cx="130" cy="130" r="120" fill="#0E0E10"/>
        <circle cx="130" cy="130" r="110" fill="#D88B6E"/>
        <circle cx="130" cy="130" r="100" fill="#0E0E10"/>
        {/* top ribbon text */}
        <text fill="#F5E8D5" fontFamily="Staatliches, sans-serif" fontSize="18" letterSpacing="4">
          <textPath href="#c07top" startOffset="50%" textAnchor="middle">HOG DOG MEDIA CO.</textPath>
        </text>
        <text fill="#D88B6E" fontFamily="Staatliches, sans-serif" fontSize="14" letterSpacing="6">
          <textPath href="#c07bot" startOffset="50%" textAnchor="middle" side="right">EST · MMXXVI</textPath>
        </text>
        {/* center shield with hog + dog heads simplified */}
        <g transform="translate(130,130)">
          {/* hog left */}
          <g fill="#C98F76">
            <path d="M-50 -10 Q-50 -40 -20 -42 Q6 -40 10 -14 L10 20 Q6 34 -16 34 L-38 34 Q-52 30 -50 14 Z"/>
            <path d="M-40 -28 Q-48 -44 -32 -44 Q-24 -34 -26 -22 Z" fill="#8C5B46"/>
            <circle cx="-16" cy="-14" r="2.5" fill="#0E0E10"/>
            <ellipse cx="10" cy="6" rx="6" ry="5" fill="#8C5B46"/>
          </g>
          {/* dog right */}
          <g fill="#B8BCC0">
            <path d="M50 -10 Q50 -40 20 -42 Q-6 -40 -10 -14 L-10 20 Q-6 34 16 34 L38 34 Q52 30 50 14 Z"/>
            <path d="M40 -28 Q48 -50 32 -46 Q24 -34 30 -22 Z" fill="#5C6166"/>
            <circle cx="16" cy="-14" r="2.5" fill="#0E0E10"/>
            <ellipse cx="-10" cy="6" rx="5" ry="5" fill="#5C6166"/>
          </g>
        </g>
        {/* tiny stars flanking */}
        <text x="42" y="138" fill="#D88B6E" fontSize="18">★</text>
        <text x="210" y="138" fill="#D88B6E" fontSize="18">★</text>
      </svg>
      <div className="ab-caption" style={{ color: '#0E0E10' }}>07 · Retro varsity badge</div>
    </div>
  );
}
window.Concept07 = Concept07;
