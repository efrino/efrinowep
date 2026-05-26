import React, {useEffect, useRef} from "react";
import "./CustomCursor.scss";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const coordsRef = useRef(null);
  const rafRef = useRef(null);
  const pos = useRef({x: -200, y: -200});

  useEffect(() => {
    const cursor = cursorRef.current;
    const coordsEl = coordsRef.current;
    if (!cursor) return;

    // Track mouse position
    const onMove = e => {
      pos.current = {x: e.clientX, y: e.clientY};
    };

    let tick = 0;
    // Animate with rAF for smooth 60fps movement
    const render = () => {
      cursor.style.transform = `translate3d(${pos.current.x}px,${pos.current.y}px,0)`;
      
      // Update coordinates text periodically to avoid text rendering jitter
      if (coordsEl && tick % 4 === 0) {
        coordsEl.innerText = `POS [ ${pos.current.x}, ${pos.current.y} ]`;
      }
      tick++;

      rafRef.current = requestAnimationFrame(render);
    };

    // Expand ring on interactive elements
    const onEnter = () => cursor.classList.add("expanded");
    const onLeave = () => cursor.classList.remove("expanded");

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], label, input, select, textarea, .card")
        .forEach(el => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(render);

    // Wait a tick for the DOM to be ready
    const timer = setTimeout(attachHover, 500);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
      document
        .querySelectorAll("a, button, [role='button'], label, input, select, textarea, .card")
        .forEach(el => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
    };
  }, []);

  return (
    <div ref={cursorRef} className="bp-cursor" aria-hidden="true">
      <div className="bp-cursor__guides">
        <span className="bp-cursor__guide-x" />
        <span className="bp-cursor__guide-y" />
      </div>
      <span className="bp-cursor__h" />
      <span className="bp-cursor__v" />
      <span className="bp-cursor__dot" />
      <div className="bp-cursor__rings">
        <span className="bp-cursor__ring bp-cursor__ring--inner" />
        <span className="bp-cursor__ring bp-cursor__ring--outer" />
        <span className="bp-cursor__ring bp-cursor__ring--scanner" />
      </div>
      <span className="bp-cursor__coords" ref={coordsRef}>
        POS [ 0, 0 ]
      </span>
    </div>
  );
}
