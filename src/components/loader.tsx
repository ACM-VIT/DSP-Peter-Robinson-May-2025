"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFade = () => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 700);
    };

    if (document.readyState === "complete") {
      const t = setTimeout(startFade, 500);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", startFade);
    return () => window.removeEventListener("load", startFade);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 backdrop-blur-xl bg-black/75" />
      <div className="relative z-10 animate-spin-slow">
        <Image
          src="/images/atomfull.svg"
          alt="Loading…"
          width={180}
          height={180}
          priority
        />
      </div>
    </div>
  );
}
