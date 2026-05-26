import React, {useEffect, useRef} from "react";
import anime from "animejs";
import "./HeroPipeline.scss";

const SOURCES = [
  {id: "s1", label: "MASTER DATA",  sub: "PART MATCHING", y: 32},
  {id: "s2", label: "MDFO",         sub: "THIS MONTH", y: 70},
  {id: "s3", label: "DN SAP",       sub: "REALTIME SYNC", y: 108},
  {id: "s4", label: "STOK IFPD",    sub: "DELIVERY BUFFER", y: 146},
  {id: "s5", label: "HISTORY",      sub: "ACHIEVEMENT", y: 184},
  {id: "s6", label: "CALENDAR",     sub: "WORKING DAYS", y: 222},
];

const NX = 8;   // node x start
const NW = 98;  // node width
const NH = 32;  // node height

// Pipeline processor box
const PX = 170, PY = 100, PW = 148, PH = 80;
// Output nodes
const OX = 365, OW = 105, OH = 32;

const OUTPUTS = [
  {id: "o1", label: "MDFO",           sub: "FORECAST", y: 32},
  {id: "o2", label: "DN",             sub: "FIX ORDER", y: 70},
  {id: "o3", label: "FINAL PLAN",     sub: "OPTIMIZED SCHEDULE", y: 108},
  {id: "o4", label: "ACHIEVEMENT",    sub: "HASIL PRODUKSI", y: 146},
  {id: "o5", label: "STOK AKTUAL",    sub: "REALTIME", y: 184},
  {id: "o6", label: "SAFETY STOK",    sub: "STRENGTH STOK", y: 222},
];

const VW = 480, VH = 280;

function bez(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2;
  return `M ${x1},${y1} C ${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

const pipeCenter = {x: PX + PW / 2, y: PY + PH / 2};

export default function HeroPipeline() {
  const stepRef   = useRef(null);
  const subRef    = useRef(null);
  const ledRef    = useRef(null);
  const svgRef    = useRef(null);
  const timerRef  = useRef(null);

  // Step counter 01 → 16 → loop
  useEffect(() => {
    let s = 2;
    timerRef.current = setInterval(() => {
      if (stepRef.current) {
        stepRef.current.textContent = `STEP ${String(s).padStart(2, "0")} / 16`;
        
        let subText = "AUTO-SCHEDULER";
        let isAnomaly = false;

        if (s >= 1 && s <= 4) {
          subText = "SYNCING SAP & MASTER...";
          if (s === 4) isAnomaly = true; // Deteksi Anomali DN
        } else if (s >= 5 && s <= 10) {
          subText = "RESOURCE & CALCULATION...";
        } else if (s === 11) {
          subText = "SMART PLANNING (CLAMP)";
        } else if (s >= 12 && s <= 14) {
          subText = "ACHIEVEMENT ANALYSIS...";
        } else if (s >= 15) {
          subText = "GENERATING ALERTS...";
          if (s === 15) isAnomaly = true; // Deteksi Miss Kronis
        }

        if (subRef.current) subRef.current.textContent = subText;
        
        if (ledRef.current) {
          if (isAnomaly) {
            ledRef.current.classList.add("hp-led-alert");
          } else {
            ledRef.current.classList.remove("hp-led-alert");
          }
        }

        s = s >= 16 ? 1 : s + 1;
      }
    }, 600);
    return () => clearInterval(timerRef.current);
  }, []);

  // anime.js entrance
  useEffect(() => {
    if (!svgRef.current) return;

    // Set initial states
    anime.set(".hp-source", {opacity: 0, translateX: -12});
    anime.set(".hp-conn",   {strokeDashoffset: anime.setDashoffset});
    anime.set(".hp-proc",   {opacity: 0, scale: 0.9});
    anime.set(".hp-out",    {opacity: 0, translateX: 12});
    anime.set(".hp-out-conn", {strokeDashoffset: anime.setDashoffset});
    anime.set(".hp-mutasi-box", {opacity: 0});

    anime
      .timeline({easing: "easeOutCubic"})
      // 1. Source nodes stagger in
      .add({
        targets: ".hp-source",
        opacity: [0, 1],
        translateX: [-12, 0],
        delay: anime.stagger(120),
        duration: 500,
      })
      // 2. Draw connecting lines
      .add({
        targets: ".hp-conn",
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(80),
        duration: 600,
        easing: "easeInOutSine",
      }, "-=300")
      // 3. Pipeline box
      .add({
        targets: ".hp-proc",
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 400,
      }, "-=200")
      // 4. Output line + Mutasi box
      .add({
        targets: ".hp-out-conn",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 400,
        easing: "easeInOutSine",
      }, "-=100")
      .add({
        targets: ".hp-mutasi-box",
        opacity: [0, 1],
        duration: 300,
      }, "-=200")
      .add({
        targets: ".hp-out",
        opacity: [0, 1],
        translateX: [12, 0],
        delay: anime.stagger(60),
        duration: 350,
      }, "-=100");

    // Particles loop timeline (Left & Right side)
    const pTl = anime.timeline({
      loop: true,
      autoplay: true
    });

    // 1. Left particles (Spanning 12 steps, 1200ms interval)
    SOURCES.forEach((src, i) => {
      const pathEl = svgRef.current.querySelector(`#hp-path-${i}`);
      if (pathEl) {
        const path = anime.path(pathEl);
        pTl.add({
          targets: `#hp-particle-${i}`,
          translateX: path('x'),
          translateY: path('y'),
          opacity: [
            { value: 1, duration: 50 },
            { value: 1, duration: 900 },
            { value: 0, duration: 50 }
          ],
          easing: 'linear',
          duration: 1000
        }, i * 1200); // starts at 0, 1.2s, 2.4s, 3.6s, 4.8s, 6.0s
      }
    });

    // 2. Right particle (Fires exactly at Step 16 -> 15 * 600ms = 9000ms)
    const pathOutEl = svgRef.current.querySelector('#hp-path-out');
    if (pathOutEl) {
      const pathOut = anime.path(pathOutEl);
      pTl.add({
        targets: '#hp-particle-out',
        translateX: pathOut('x'),
        translateY: pathOut('y'),
        opacity: [
          { value: 1, duration: 50 },
          { value: 1, duration: 500 },
          { value: 0, duration: 50 }
        ],
        easing: 'linear',
        duration: 600
      }, 9000);
    }

  }, []);

  return (
    <div className="hero-pipeline-wrap">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VW} ${VH}`}
        className="hero-pipeline-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(30, 144, 255, 0.05)" strokeWidth="0.5" />
          </pattern>
          <marker id="hp-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0,0.5 L0,6.5 L6,3.5 z" className="hp-arrowhead" />
          </marker>
          <filter id="hp-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hp-glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─── Blueprint Grid ─── */}
        <rect x="0" y="0" width={VW} height={VH} fill="url(#hp-grid)" />

        {/* ─── Source nodes ─── */}
        {SOURCES.map((src, i) => {
          const fromX = NX + NW;
          const fromY = src.y + NH / 2;
          const toY   = pipeCenter.y;
          const path  = bez(fromX, fromY, PX, toY);
          return (
            <g key={src.id}>
              {/* Node box */}
              <g className="hp-source">
                <rect
                  x={NX} y={src.y}
                  width={NW} height={NH}
                  rx="2"
                  className="hp-node-rect"
                />
                <text x={NX + NW / 2} y={src.y + 13} className="hp-node-label">
                  {src.label}
                </text>
                <text x={NX + NW / 2} y={src.y + 25} className="hp-node-sub">
                  {src.sub}
                </text>
                {/* Status dot */}
                <circle cx={NX + NW - 8} cy={src.y + 8} r="2.5" className="hp-status-dot" />
              </g>

              {/* Bezier connector */}
              <path
                id={`hp-path-${i}`}
                d={path}
                className="hp-conn"
                markerEnd="url(#hp-arrow)"
              />

              {/* Flowing data particle */}
              <circle
                id={`hp-particle-${i}`}
                r="3"
                className="hp-particle"
                filter="url(#hp-glow)"
                opacity="0"
              />
            </g>
          );
        })}

        {/* ─── Pipeline processor ─── */}
        <g className="hp-proc">
          {/* Outer glow rect */}
          <rect
            x={PX - 1} y={PY - 1}
            width={PW + 2} height={PH + 2}
            rx="3"
            className="hp-proc-glow"
            filter="url(#hp-glow-strong)"
          />
          {/* Main box */}
          <rect
            x={PX} y={PY}
            width={PW} height={PH}
            rx="2"
            className="hp-proc-rect"
          />
          {/* Corner marks — blueprint style */}
          <line x1={PX} y1={PY + 8} x2={PX + 8} y2={PY} className="hp-corner" />
          <line x1={PX + PW - 8} y1={PY} x2={PX + PW} y2={PY + 8} className="hp-corner" />
          <line x1={PX} y1={PY + PH - 8} x2={PX + 8} y2={PY + PH} className="hp-corner" />
          <line x1={PX + PW - 8} y1={PY + PH} x2={PX + PW} y2={PY + PH - 8} className="hp-corner" />

          <text x={PX + PW / 2} y={PY + 20} className="hp-proc-label">PIPELINE</text>
          <text ref={stepRef} x={PX + PW / 2} y={PY + 42} className="hp-proc-step">
            STEP 01 / 16
          </text>
          <text ref={subRef} x={PX + PW / 2} y={PY + 60} className="hp-proc-sub">SYNCING SAP & MASTER...</text>

          {/* Anomaly Indicator */}
          <circle ref={ledRef} cx={PX + PW - 12} cy={PY + 12} r="2.5" className="hp-led-normal" />

          {/* Progress track */}
          <rect x={PX + 12} y={PY + PH - 10} width={PW - 24} height="2" rx="1" className="hp-track" />
          <rect x={PX + 12} y={PY + PH - 10} width={PW - 24} height="2" rx="1" className="hp-fill" />
        </g>

        {/* ─── Mutasi Bulanan Box & Connector ─── */}
        <path
          id="hp-path-out"
          d={`M ${PX + PW},${pipeCenter.y} L 357,${pipeCenter.y}`}
          className="hp-out-conn"
          markerEnd="url(#hp-arrow)"
        />
        <circle
          id="hp-particle-out"
          r="3"
          className="hp-particle hp-particle--bright"
          filter="url(#hp-glow)"
          opacity="0"
        />

        <g className="hp-mutasi-box">
          <rect
            x="357" y="10"
            width="118" height="254"
            rx="4"
            fill="transparent"
            stroke="rgba(30, 144, 255, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <text x={357 + 118 / 2} y={22} className="hp-output-title">MUTASI BULANAN</text>
        </g>

        {/* ─── Outputs ─── */}
        {OUTPUTS.map((out, i) => (
          <g key={out.id} className="hp-out">
            <rect
              x={OX} y={out.y}
              width={OW} height={OH}
              rx="2"
              className="hp-output-rect"
              filter="url(#hp-glow)"
            />
            <text x={OX + OW / 2} y={out.y + 13} className="hp-output-label">{out.label}</text>
            <text x={OX + OW / 2} y={out.y + 25} className="hp-output-sub">{out.sub}</text>
          </g>
        ))}

        {/* ─── Decorative blueprint frame ─── */}
        <line x1="0"  y1="1"      x2={VW} y2="1"      className="hp-frame-line" />
        <line x1="0"  y1={VH - 1} x2={VW} y2={VH - 1} className="hp-frame-line" />
        <text x="4" y="10" className="hp-frame-label">PPIC SMART PLANNER v1.0</text>
        <text x="4" y="18" className="hp-frame-label">PT. MEKAR ARMADA JAYA</text>
      </svg>
    </div>
  );
}
