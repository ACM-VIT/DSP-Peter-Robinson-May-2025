"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-10 py-5">
      <div className="flex-shrink-0">
        <Image
          src="/images/acmvit.svg"
          alt="ACM VIT Student Chapter"
          width={160}
          height={57}
          priority
        />
      </div>
      <div className="flex items-center gap-10">
        <Link
          href="#event"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          event
        </Link>
        <Link
          href="#speaker"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          speaker
        </Link>
        <Link
          href="#event-details"
          className="text-white/85 text-[0.95rem] no-underline tracking-wide transition-all duration-200 hover:text-[var(--color-gold)] hover:opacity-100"
        >
          event details
        </Link>
      </div>
    </nav>
  );
}
