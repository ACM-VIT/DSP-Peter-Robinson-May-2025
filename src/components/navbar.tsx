"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-5 md:py-6 gap-4 md:gap-0">
      <div className="flex-shrink-0">
        <Image
          src="/images/acmvit.svg"
          alt="ACM VIT Student Chapter"
          width={160}
          height={57}
          priority
          className="w-[120px] md:w-[160px] h-auto"
        />
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <Link
          href="/"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          home
        </Link>
        <Link
          href="/#event"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          event
        </Link>
        <Link
          href="/#speaker"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          speaker
        </Link>
        <Link
          href="/event-details"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          event details
        </Link>
      </div>
    </nav>
  );
}
