"use client";

import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    // --------------------
    // Cursor effect
    // --------------------
    const dot = document.querySelector(".cursor-dot");
    const circle = document.querySelector(".cursor-circle");

    const moveCursor = (e) => {
      if (!dot || !circle) return;
      dot.style.left = circle.style.left = `${e.clientX}px`;
      dot.style.top = circle.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    // --------------------
    // WOW.js (browser-only)
    // --------------------
    if (typeof window !== "undefined") {
      import("wowjs").then((module) => {
        const WOW = module.WOW;
        new WOW().init();
      });
    }

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return null;
}
