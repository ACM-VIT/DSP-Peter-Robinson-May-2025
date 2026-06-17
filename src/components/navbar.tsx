"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Event", id: "event" },
  /* { label: "Event Details", id: "event-details" }, */
  { label: "Qangles", id: "speaker" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex flex-row items-center justify-between px-3 sm:px-6 md:px-12 py-3 md:py-6 gap-2 md:gap-0 pointer-events-auto">
      <div className="flex-shrink-0">
        <Image
          src="/images/acmvit.svg"
          alt="ACM VIT Student Chapter"
          width={160}
          height={57}
          priority
          className="w-[80px] sm:w-[110px] md:w-[190px] h-auto"
        />
      </div>
      <div className="flex items-center gap-4 sm:gap-5 md:gap-10 rounded-full border border-white/12 bg-black/28 px-3 sm:px-5 md:px-7 py-2 md:py-3 shadow-[0_8px_28px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`whitespace-nowrap text-[0.9rem] sm:text-[1.05rem] md:text-[1.22rem] font-semibold no-underline tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] transition-all duration-200 ${
                isActive
                  ? "text-[var(--color-gold)] opacity-100"
                  : "text-white hover:text-[var(--color-gold)] hover:opacity-100"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
