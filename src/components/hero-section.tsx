"use client";

import { useState } from "react";
import CountdownTimer from "./countdown-timer";

export default function HeroSection({
  targetDate,
  meetUrl,
}: {
  targetDate: Date | string | null | undefined;
  meetUrl: string;
}) {
  const [isLive, setIsLive] = useState(false);

  return (
    <main className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-8 pb-16">
      <h1 className="font-[family-name:var(--font-trap)] font-extrabold text-[clamp(2.8rem,5.5vw,4.5rem)] text-[var(--color-gold)] leading-[1.15] mb-10 transition-opacity duration-[1500ms]">
        Quantum Workshop
        <br />
        {isLive ? "is now live at" : "starts in"}
      </h1>
      <CountdownTimer
        targetDate={targetDate}
        meetUrl={meetUrl}
        onExpire={() => setTimeout(() => setIsLive(true), 4000)}
      />
      <p className="text-[1.05rem] font-light text-white/60 max-w-[750px] leading-[1.7] mt-14 tracking-[0.01em]">
        Dive into the fundamentals of quantum computing with hands-on
        sessions, expert talks, and collaborative problem solving - brought
        to you by ACM VIT Student Chapter.
      </p>
    </main>
  );
}
