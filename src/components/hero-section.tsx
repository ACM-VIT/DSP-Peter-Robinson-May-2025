"use client";

import CountdownTimer from "./countdown-timer";

export default function HeroSection({
  targetDate,
  meetUrl,
}: {
  targetDate: Date;
  meetUrl: string;
}) {
  return (
    <main className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-8 pt-28 pb-16">
      <h1 className="mx-auto mb-10 max-w-[1100px] font-[family-name:var(--font-trap)] text-[clamp(1.75rem,3.8vw,3.25rem)] font-extrabold leading-[1.2] text-[var(--color-gold)] transition-opacity duration-[1500ms]">
        Quantum Computing: Shaping the Future of Technology and Engineering by
        2030 <br/>
           starts in
      </h1>
      <CountdownTimer targetDate={targetDate} meetUrl={meetUrl} />
      <p className="text-[1.05rem] font-light text-white/60 max-w-[750px] leading-[1.7] mt-14 tracking-[0.01em]">
        Dive into the fundamentals of quantum computing with hands-on
        sessions, expert talks, and collaborative problem solving - brought
        to you by ACM VIT Student Chapter.
      </p>
    </main>
  );
}
