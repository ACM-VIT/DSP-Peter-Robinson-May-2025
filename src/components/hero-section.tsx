"use client";

import { useState } from "react";
import CountdownTimer from "./countdown-timer";

export default function HeroSection({
  targetDate,
  meetUrl,
}: {
  targetDate: Date;
  meetUrl: string;
}) {
  const alreadyExpired = targetDate.getTime() <= Date.now();
  const [isLive, setIsLive] = useState(alreadyExpired);

  return (
    <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-28 pb-16 text-center">
      <h1 className="mx-auto mb-6 max-w-[1100px] font-[family-name:var(--font-trap)] text-[clamp(1.5rem,3.8vw,3.25rem)] font-extrabold leading-[1.2] text-[var(--color-gold)] transition-opacity duration-[1500ms]">
        
      </h1>

      <h2 className="mb-10 font-[family-name:var(--font-trap)] text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.15] text-[var(--color-gold)]">
        Quantum Computing: Shaping the Future of Technology and Engineering by
        2030
        <br />
        {alreadyExpired ? (
          <span>is now live at</span>
        ) : (
          <span className="relative inline-grid grid-cols-1 grid-rows-1 justify-items-center overflow-hidden py-1">
            <span
              className={
                isLive
                  ? "pointer-events-none col-start-1 row-start-1 animate-fade-out-up"
                  : "col-start-1 row-start-1 opacity-100"
              }
            >
              starts in
            </span>
            <span
              className={
                isLive
                  ? "col-start-1 row-start-1 animate-fade-in-up"
                  : "pointer-events-none col-start-1 row-start-1 opacity-0"
              }
            >
              is now live at
            </span>
          </span>
        )}
      </h2>

      <CountdownTimer
        targetDate={targetDate}
        meetUrl={meetUrl}
        onExpire={() => setIsLive(true)}
      />

      <p className="mt-14 max-w-[750px] text-[1.05rem] font-light leading-[1.7] tracking-[0.01em] text-white/60">
        Dive into the fundamentals of quantum computing with hands-on sessions,
        expert talks, and collaborative problem solving — brought to you by ACM
        VIT Student Chapter.
      </p>
    </main>
  );
}