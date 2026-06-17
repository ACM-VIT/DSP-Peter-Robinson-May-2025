"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-7 gap-5 md:gap-0">
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
        <Link
          href="/#home"
          className="text-white text-[1.05rem] md:text-[1.22rem] font-semibold no-underline tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          Home
        </Link>
        <Link
          href="/#event"
          className="text-white text-[1.05rem] md:text-[1.22rem] font-semibold no-underline tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          Event
        </Link>
        <Link
          href="/#speaker"
          className="text-white text-[1.05rem] md:text-[1.22rem] font-semibold no-underline tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          Speaker
        </Link>
        <Link
          href="/#event-details"
          className="text-white text-[1.05rem] md:text-[1.22rem] font-semibold no-underline tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          Event Details
        </Link>
      </div>
    </nav>
  );
}
