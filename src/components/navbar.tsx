"use client";

import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Event", id: "event" },
  { label: "Speaker", id: "speaker" },
  { label: "Event Details", id: "event-details" },
];

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-5 md:py-6 gap-4 md:gap-0 pointer-events-auto">
      {/* No background for navbar so it doesn't block content */}

      <div className="flex-shrink-0">
        <Image
          src="/images/acmvit.svg"
          alt="ACM VIT Student Chapter"
          width={160}
          height={57}
          priority
          className="w-[145px] md:w-[190px] h-auto"
        />
      </div>
      <div className="flex items-center gap-5 rounded-full border border-white/12 bg-black/28 px-5 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md md:gap-10 md:px-7 md:py-3">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className="text-white text-[1.05rem] md:text-[1.22rem] font-semibold no-underline tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
