"use client";

import { useEffect, useState } from "react";
import starfield from "../../public/starfield.png";

export default function StarfieldBackground() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [driftOffset, setDriftOffset] = useState(0);

  useEffect(() => {
    let frameId = null;

    const animate = (time) => {
      setScrollOffset(window.scrollY * 0.18);
      setDriftOffset(((time * 0.015) % 320) - 160);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-[-10%] opacity-80"
        style={{
          backgroundImage: `url(${starfield.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "320px 320px",
          transform: `translate(${driftOffset}px, ${scrollOffset}px) scale(1.08)`,
          willChange: "transform",
        }}
      />
      <div className="darken-pulse absolute inset-0 bg-radial from-[#000000aa] to-black" />
    </div>
  );
}
