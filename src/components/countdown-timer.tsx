"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.min(Math.floor(totalSeconds / 86400), 99);
  const hours = Math.min(Math.floor((totalSeconds % 86400) / 3600), 99);
  const minutes = Math.min(Math.floor((totalSeconds % 3600) / 60), 99);
  const seconds = Math.min(totalSeconds % 60, 99);

  return { days, hours, minutes, seconds };
}

function pad(num: number): string {
  return Math.min(num, 99).toString().padStart(2, "0");
}

function isExpired(t: TimeLeft): boolean {
  return t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0;
}

function TimerDigitCard({ value }: { value: string }) {
  return (
    <div className="timer-digit-card">
      <span className="font-[family-name:var(--font-aldrich)] tabular-nums text-[2.25rem] sm:text-[3.5rem] text-white leading-none tracking-wider">
        {value.slice(0, 2)}
      </span>
    </div>
  );
}

function TimerSeparator() {
  return (
    <span className="font-[family-name:var(--font-aldrich)] text-[1.75rem] sm:text-[3rem] text-white/40 leading-none pb-[0.1em]">
      :
    </span>
  );
}

function getPlatform(url: string): "meet" | "conclave" | "other" {
  if (url.includes("meet.google.com")) return "meet";
  if (url.includes("conclave")) return "conclave";
  return "other";
}

function GoogleMeetIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 87.5 72"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z" fill="#00832d" />
      <path d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-10.54-9.95-3z" fill="#0066da" />
      <path d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-10.68z" fill="#e94235" />
      <path d="M20.5 20.5H0v31h20.5z" fill="#2684fc" />
      <path d="M82.6 8.68L69.5 19.42v33.16l13.16 10.79c1.97 1.54 4.84.18 4.84-2.29V10.95c0-2.49-2.92-3.82-4.9-2.27z" fill="#00ac47" />
      <path d="M49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z" fill="#00832d" />
      <path d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6z" fill="#ffba00" />
    </svg>
  );
}

function ConclaveIcon() {
  return (
    <Image
      src="/images/conclave.png"
      alt="Conclave"
      width={44}
      height={44}
      className="flex-shrink-0 rounded-md"
    />
  );
}

const platformLabels = {
  meet: "Join Google Meet →",
  conclave: "Join on Conclave →",
  other: "Join Workshop →",
};

function MeetLink({ meetUrl, skipAnimation = false }: { meetUrl: string; skipAnimation?: boolean }) {
  const platform = getPlatform(meetUrl);

  return (
    <div
      className={skipAnimation ? "" : "animate-[fadeIn_2s_ease_forwards] opacity-0"}
      style={skipAnimation ? undefined : { animationFillMode: 'forwards' }}
    >
      <div className="timer-container">
        <a
          href={meetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 px-8 py-4 no-underline group"
        >
          {platform === "meet" && <GoogleMeetIcon />}
          {platform === "conclave" && <ConclaveIcon />}
          <div className="flex flex-col items-start">
            <span className="font-[family-name:var(--font-trap)] text-white/50 text-xs tracking-[0.2em] uppercase mb-1.5">
              Workshop is live
            </span>
            <span className="font-[family-name:var(--font-trap)] text-white text-2xl font-semibold group-hover:text-[var(--color-gold)] transition-colors duration-300">
              {platformLabels[platform]}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function CountdownTimer({
  targetDate,
  meetUrl,
  onExpire,
}: {
  targetDate: Date;
  meetUrl: string;
  onExpire?: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [expired, setExpired] = useState(false);
  const [alreadyExpired, setAlreadyExpired] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const isNowExpired = targetDate.getTime() <= Date.now();
    if (isNowExpired) {
      setAlreadyExpired(true);
      setExpired(true);
      onExpire?.();
      return;
    }

    setTimeLeft(getTimeLeft(targetDate));

    const interval = setInterval(() => {
      const t = getTimeLeft(targetDate);
      setTimeLeft(t);

      if (isExpired(t)) {
        setExpired(true);
        onExpire?.();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="grid" style={{ gridTemplate: '1fr / 1fr' }}>
        <div className="col-start-1 row-start-1 flex items-center justify-center opacity-100">
          <div className="timer-container">
            <div className="flex items-center gap-1 sm:gap-3">
              <TimerDigitCard value="--" />
              <TimerSeparator />
              <TimerDigitCard value="--" />
              <TimerSeparator />
              <TimerDigitCard value="--" />
              <TimerSeparator />
              <TimerDigitCard value="--" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (alreadyExpired) {
    return (
      <div className="flex items-center justify-center">
        <MeetLink meetUrl={meetUrl} skipAnimation />
      </div>
    );
  }

  return (
    <div className="grid" style={{ gridTemplate: '1fr / 1fr' }}>
      <div
        className={`col-start-1 row-start-1 flex items-center justify-center ${
          expired ? "animate-fade-out-up pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="timer-container">
          <div className="flex items-center gap-1 sm:gap-3">
            <TimerDigitCard value={pad(timeLeft.days)} />
            <TimerSeparator />
            <TimerDigitCard value={pad(timeLeft.hours)} />
            <TimerSeparator />
            <TimerDigitCard value={pad(timeLeft.minutes)} />
            <TimerSeparator />
            <TimerDigitCard value={pad(timeLeft.seconds)} />
          </div>
        </div>
      </div>

      <div
        className={`col-start-1 row-start-1 flex items-center justify-center ${
          expired ? "animate-fade-in-up" : "opacity-0 pointer-events-none"
        }`}
      >
        <MeetLink meetUrl={meetUrl} skipAnimation={false} />
      </div>
    </div>
  );
}
