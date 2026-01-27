"use client";

import { useEffect } from "react";

export default function StickyHeader() {
  useEffect(() => {
    const header = document.querySelector(
      ".hero-section-wrapper-5 .header"
    );

    if (!header) return;

    const stickyOffset = header.offsetTop;

    const onScroll = () => {
      if (window.pageYOffset > stickyOffset) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
