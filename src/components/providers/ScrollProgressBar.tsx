"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / height) * 100;
      setWidth(scrolled);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">
      <div
        className="h-full bg-orange-500"
        style={{
          width: `${width}%`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}