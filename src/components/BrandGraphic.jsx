import React from "react";

/**
 * BrandGraphic — lightweight, on-brand coded motion graphics.
 * Follows VISUAL-DIRECTION.md: white-space first, near-black ink + single lime
 * accent, geometric, slow purposeful motion. One motif per section's story.
 * Renders an animated SVG that fills its container (used in place of stock video/photo).
 */

const INK = "#111111";
const SUB = "#c9c9c9";
const LIME = "#dbff00";

const wrap = { position: "absolute", inset: 0, overflow: "hidden" };
const svgProps = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 320 220",
  preserveAspectRatio: "xMidYMid slice",
  style: { display: "block" },
};
const S = { vectorEffect: "non-scaling-stroke" };

// ---- motif renderers -------------------------------------------------------

// Gaandiva OS — nodes + pipelines + data flowing into a unified record
const Nodes = () => (
  <>
    {[[60,70],[120,50],[100,120],[170,95],[150,160],[225,70],[245,140],[210,180]].map(([x,y],i)=>(
      <line key={i} x1={x} y1={y} x2={260} y2={110} stroke={INK} strokeWidth="0.6" opacity="0.18" {...S}/>
    ))}
    <line className="bgp-dash" x1="60" y1="70" x2="260" y2="110" stroke={LIME} strokeWidth="1.2" {...S}/>
    <line className="bgp-dash" x1="150" y1="160" x2="260" y2="110" stroke={INK} strokeWidth="1" {...S} style={{animationDelay:"-2s",...S.style}}/>
    {[[60,70],[120,50],[100,120],[170,95],[150,160],[225,70],[245,140],[210,180]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="3.2" fill={i%4===0?LIME:"#fff"} stroke={INK} strokeWidth="1" {...S} className={i%4===0?"bgp-pulse":""}/>
    ))}
    <rect x="244" y="94" width="32" height="32" rx="7" fill="#fff" stroke={INK} strokeWidth="1.4" {...S}/>
    <circle cx="260" cy="110" r="4" fill={LIME}/>
  </>
);

// GTM Publications — editorial column grid + signal distributing to verticals
const Publishing = () => (
  <>
    {[46,96,146].map((x,i)=>(
      <g key={i}>
        <rect x={x} y="44" width="34" height="132" rx="3" fill="#fff" stroke={INK} strokeWidth="1" {...S}/>
        {[0,1,2,3,4].map(r=>(
          <rect key={r} x={x+6} y={56+r*22} width={r===0?22:18} height={r===0?5:2.5} rx="1.2" fill={r===0?INK:SUB}/>
        ))}
      </g>
    ))}
    <circle className="bgp-travel" cx="0" cy="0" r="3.2" fill={LIME}/>
    {[60,110,160].map((y,i)=>(
      <line key={i} x1="196" y1={y} x2="250" y2={70+i*40} stroke={INK} strokeWidth="0.7" opacity="0.3" {...S}/>
    ))}
    {[70,110,150].map((y,i)=>(
      <g key={i}>
        <rect x="250" y={y-7} width="30" height="14" rx="7" fill={i===1?LIME:"#fff"} stroke={INK} strokeWidth="1" {...S}/>
      </g>
    ))}
  </>
);

// Simplified Management — modules clicking into place, task routing through a flow
const Modules = () => (
  <>
    {[[64,64],[148,64],[232,64],[64,148],[148,148],[232,148]].map(([x,y],i)=>(
      <rect key={i} x={x-24} y={y-20} width="48" height="40" rx="7" fill="#fff" stroke={INK} strokeWidth="1.3" {...S}
        className="bgp-blink" style={{animationDelay:`${-i*0.6}s`}}/>
    ))}
    <path d="M64 64 H148 V148 H232" fill="none" stroke={INK} strokeWidth="1" opacity="0.5" {...S}/>
    <path d="M148 64 H232 V148" fill="none" stroke={INK} strokeWidth="1" opacity="0.5" {...S}/>
    <path id="bgp-route" d="M64 64 H148 V148 H232" fill="none" stroke="none"/>
    <circle r="4" fill={LIME}>
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
        <mpath href="#bgp-route"/>
      </animateMotion>
    </circle>
    {[[64,64],[148,148]].map(([x,y],i)=>(<circle key={i} cx={x} cy={y} r="3" fill={LIME}/>))}
  </>
);

// Podcast Studio — waveform / levels (darkest unit, still in the family)
const Waveform = () => {
  const bars = Array.from({length: 27});
  return (
    <>
      <line x1="20" y1="110" x2="300" y2="110" stroke={SUB} strokeWidth="0.8" {...S}/>
      {bars.map((_,i)=>{
        const x = 24 + i*10.6;
        const lime = i % 7 === 3;
        return <rect key={i} x={x} y="90" width="4.4" height="40" rx="2.2"
          fill={lime?LIME:INK} className="bgp-bar" style={{animationDelay:`${-(i%9)*0.22}s`}}/>;
      })}
      <circle cx="278" cy="44" r="5" fill={LIME}/>
      <circle cx="278" cy="44" r="9" fill="none" stroke={LIME} strokeWidth="1" {...S} className="bgp-ring"/>
    </>
  );
};

// 3D Motion Art — orbiting rings
const Orbit = () => (
  <g transform="translate(160 110)">
    <ellipse rx="78" ry="30" fill="none" stroke={INK} strokeWidth="1" opacity="0.5" {...S} className="bgp-spin"/>
    <ellipse rx="30" ry="78" fill="none" stroke={INK} strokeWidth="1" opacity="0.5" {...S} className="bgp-spin" style={{animationDirection:"reverse"}}/>
    <ellipse rx="60" ry="60" fill="none" stroke={SUB} strokeWidth="0.8" {...S}/>
    <circle r="8" fill={LIME}/>
    <circle cx="78" cy="0" r="3.5" fill={INK} className="bgp-orbit"/>
  </g>
);

// Digital Strategy — converging funnel + node
const Funnel = () => (
  <>
    {[44,74,104].map((y,i)=>(
      <line key={i} x1="40" y1={y} x2="180" y2="110" stroke={INK} strokeWidth="1" opacity="0.45" {...S}/>
    ))}
    {[176,146,116].map((y,i)=>(
      <line key={i} x1="40" y1={y} x2="180" y2="110" stroke={INK} strokeWidth="1" opacity="0.45" {...S}/>
    ))}
    <line className="bgp-dash" x1="180" y1="110" x2="288" y2="110" stroke={LIME} strokeWidth="2" {...S}/>
    <circle cx="180" cy="110" r="6" fill="#fff" stroke={INK} strokeWidth="1.4" {...S}/>
    <circle cx="288" cy="110" r="7" fill={LIME}/>
  </>
);

// UI/UX Design — nested wireframe frames + grid
const Wireframe = () => (
  <>
    <rect x="40" y="40" width="240" height="140" rx="8" fill="#fff" stroke={INK} strokeWidth="1.3" {...S}/>
    <line x1="40" y1="64" x2="280" y2="64" stroke={INK} strokeWidth="1" {...S}/>
    <circle cx="52" cy="52" r="2.5" fill={LIME}/>
    <rect x="54" y="78" width="92" height="86" rx="5" fill="none" stroke={SUB} strokeWidth="1" {...S}/>
    <rect className="bgp-blink" x="160" y="78" width="100" height="22" rx="4" fill="none" stroke={INK} strokeWidth="1" {...S}/>
    <rect x="160" y="110" width="70" height="8" rx="2" fill={SUB}/>
    <rect x="160" y="126" width="100" height="8" rx="2" fill={SUB}/>
    <rect x="160" y="146" width="48" height="14" rx="7" fill={LIME}/>
  </>
);

// Interactive Experiences — ripple + cursor
const Ripple = () => (
  <g transform="translate(160 110)">
    {[0,1,2].map(i=>(
      <circle key={i} r="20" fill="none" stroke={INK} strokeWidth="1" {...S} className="bgp-ripple" style={{animationDelay:`${-i*1.3}s`}}/>
    ))}
    <circle r="6" fill={LIME}/>
    <path d="M2 2 L26 12 L14 16 L10 30 Z" transform="translate(36 30)" fill={INK}/>
  </g>
);

// Brand Identity — type specimen + grid
const Glyph = () => (
  <>
    <line x1="40" y1="176" x2="280" y2="176" stroke={SUB} strokeWidth="0.8" {...S}/>
    <text x="58" y="150" fontFamily="'Archivo','Helvetica Neue',sans-serif" fontWeight="900" fontSize="120" fill={INK} letterSpacing="-6">Aa</text>
    <rect className="bgp-blink" x="214" y="56" width="50" height="50" rx="10" fill={LIME}/>
    <circle cx="239" cy="150" r="10" fill="none" stroke={INK} strokeWidth="1.4" {...S}/>
  </>
);

// Mobile App — phone frame + content
const Phone = () => (
  <g transform="translate(135 36)">
    <rect x="0" y="0" width="84" height="150" rx="14" fill="#fff" stroke={INK} strokeWidth="1.4" {...S}/>
    <rect x="30" y="7" width="24" height="4" rx="2" fill={SUB}/>
    <rect className="bgp-blink" x="12" y="22" width="60" height="34" rx="6" fill={LIME} opacity="0.9"/>
    <rect x="12" y="66" width="44" height="6" rx="3" fill={INK}/>
    <rect x="12" y="80" width="60" height="5" rx="2.5" fill={SUB}/>
    <rect x="12" y="92" width="52" height="5" rx="2.5" fill={SUB}/>
    <circle cx="42" cy="128" r="9" fill="none" stroke={INK} strokeWidth="1.4" {...S}/>
  </g>
);

// E-commerce — product grid tiles
const Grid = () => (
  <>
    {[[58,52],[133,52],[208,52],[58,122],[133,122],[208,122]].map(([x,y],i)=>(
      <g key={i}>
        <rect x={x} y={y} width="54" height="46" rx="6" fill="#fff" stroke={INK} strokeWidth="1.1" {...S}/>
        <rect x={x+8} y={y+8} width="38" height="18" rx="3" fill={i===2?LIME:SUB} opacity={i===2?1:0.6}/>
        <rect x={x+8} y={y+32} width="24" height="5" rx="2.5" fill={INK}/>
      </g>
    ))}
    <circle className="bgp-pulse" cx="246" cy="48" r="9" fill={LIME}/>
  </>
);

// AI & ML — layered neural network
const Neural = () => {
  const layers = [[58,[64,110,156]],[140,[54,92,128,166]],[222,[80,134]]];
  const pts = [];
  layers.forEach(([x,ys])=>ys.forEach(y=>pts.push([x,y])));
  return (
    <>
      {layers[0][1].map((y0,a)=>layers[1][1].map((y1,b)=>(
        <line key={`l1${a}${b}`} x1={layers[0][0]} y1={y0} x2={layers[1][0]} y2={y1} stroke={INK} strokeWidth="0.5" opacity="0.16" {...S}/>
      )))}
      {layers[1][1].map((y1,a)=>layers[2][1].map((y2,b)=>(
        <line key={`l2${a}${b}`} x1={layers[1][0]} y1={y1} x2={layers[2][0]} y2={y2} stroke={INK} strokeWidth="0.5" opacity="0.16" {...S}/>
      )))}
      {pts.map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4.2" fill={i%5===0?LIME:"#fff"} stroke={INK} strokeWidth="1.1" {...S}
          className={i%5===0?"bgp-pulse":""} style={{animationDelay:`${-i*0.3}s`}}/>
      ))}
    </>
  );
};

// Cloud — node cluster + arc
const Cloud = () => (
  <>
    <path d="M104 132 a30 30 0 0 1 6 -59 a34 34 0 0 1 64 -8 a28 28 0 0 1 38 30 a26 26 0 0 1 -8 37 Z"
      fill="#fff" stroke={INK} strokeWidth="1.4" {...S}/>
    {[[120,150],[160,162],[200,150]].map(([x,y],i)=>(
      <line key={i} x1={x} y1={y-20} x2={x} y2={y} stroke={INK} strokeWidth="1" opacity="0.4" {...S} className="bgp-dash"/>
    ))}
    {[[120,156],[160,168],[200,156]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="3.4" fill={i===1?LIME:"#fff"} stroke={INK} strokeWidth="1.1" {...S}/>
    ))}
    <circle cx="150" cy="92" r="5" fill={LIME}/>
  </>
);

// WebGL — wireframe mesh sphere
const Mesh = () => (
  <g transform="translate(160 110)">
    {[-60,-30,0,30,60].map((y,i)=>(<ellipse key={i} rx={Math.sqrt(Math.max(1,70*70-y*y))} ry="10" cy={y} fill="none" stroke={INK} strokeWidth="0.7" opacity="0.5" {...S}/>))}
    {[-60,-30,0,30,60].map((x,i)=>(<ellipse key={i} ry={Math.sqrt(Math.max(1,70*70-x*x))} rx="10" cx={x} fill="none" stroke={INK} strokeWidth="0.7" opacity="0.5" {...S}/>))}
    <circle r="70" fill="none" stroke={INK} strokeWidth="1.2" {...S} className="bgp-spin"/>
    <circle r="5" fill={LIME}/>
    <circle cx="49" cy="-49" r="3.5" fill={INK} className="bgp-pulse"/>
  </g>
);

const MOTIFS = {
  nodes: Nodes, publishing: Publishing, modules: Modules, waveform: Waveform,
  orbit: Orbit, funnel: Funnel, wireframe: Wireframe, ripple: Ripple,
  glyph: Glyph, phone: Phone, grid: Grid, neural: Neural, cloud: Cloud, mesh: Mesh,
};

export default function BrandGraphic({ motif = "nodes", bg = "#ffffff" }) {
  const M = MOTIFS[motif] || Nodes;
  return (
    <div className="bg-graphic" style={{ ...wrap, background: bg }}>
      <svg {...svgProps}><M /></svg>
      <style>{`
        .bg-graphic svg { will-change: transform; }
        @keyframes bgpDash { to { stroke-dashoffset: -28; } }
        .bgp-dash { stroke-dasharray: 5 9; animation: bgpDash 1.6s linear infinite; }
        @keyframes bgpPulse { 0%,100%{ transform: scale(1); opacity:1 } 50%{ transform: scale(1.5); opacity:.65 } }
        .bgp-pulse { transform-box: fill-box; transform-origin: center; animation: bgpPulse 2.6s ease-in-out infinite; }
        @keyframes bgpBlink { 0%,100%{ opacity:.35 } 50%{ opacity:1 } }
        .bgp-blink { animation: bgpBlink 3.2s ease-in-out infinite; }
        @keyframes bgpBar { 0%,100%{ transform: scaleY(.35) } 50%{ transform: scaleY(1) } }
        .bgp-bar { transform-box: fill-box; transform-origin: center; animation: bgpBar 1.3s ease-in-out infinite; }
        @keyframes bgpRing { 0%{ transform: scale(.6); opacity:1 } 100%{ transform: scale(2.2); opacity:0 } }
        .bgp-ring { transform-box: fill-box; transform-origin: center; animation: bgpRing 2.4s ease-out infinite; }
        @keyframes bgpSpin { to { transform: rotate(360deg) } }
        .bgp-spin { transform-box: fill-box; transform-origin: center; animation: bgpSpin 24s linear infinite; }
        @keyframes bgpOrbit { from{ transform: rotate(0) translateX(78px) } to{ transform: rotate(360deg) translateX(78px) } }
        .bgp-orbit { transform-box: fill-box; transform-origin: center; animation: bgpOrbit 9s linear infinite; }
        @keyframes bgpRipple { 0%{ transform: scale(.4); opacity:.9 } 100%{ transform: scale(2.6); opacity:0 } }
        .bgp-ripple { transform-box: fill-box; transform-origin: center; animation: bgpRipple 3.4s ease-out infinite; }
        .bgp-travel { offset-path: path('M 80 60 L 250 70'); animation: bgpTravel 3s ease-in-out infinite; }
        @keyframes bgpTravel { 0%{ offset-distance:0%; opacity:0 } 15%{opacity:1} 85%{opacity:1} 100%{ offset-distance:100%; opacity:0 } }
      `}</style>
    </div>
  );
}
