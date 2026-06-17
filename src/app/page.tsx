"use client";

import ShaderGradient from "@/components/shader-gradient";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutEventSection from "@/components/about-event-section";
import EventDetailsSection from "@/components/event-details-section";
import SpeakerSection from "@/components/speaker-section";
import Loader from "@/components/loader";
import Image from "next/image";

// Read from environment variables (set in .env)
const WORKSHOP_DATE = new Date(process.env.NEXT_PUBLIC_WORKSHOP_DATE!);
const MEET_URL = process.env.NEXT_PUBLIC_MEET_URL!;

export default function Home() {
  return (
    <>
      <Loader />

      {/* ─── FIXED BACKGROUND LAYER ─── */}
      {/* Animated shader gradient background — stays fixed behind everything */}
      <div className="fixed inset-0 z-0">
        <ShaderGradient />
      </div>

      {/* Dark overlay layers — fixed behind content */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(115deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_34%,rgba(24,24,24,0.68)_58%,rgba(112,112,112,0.34)_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.16] bg-[repeating-linear-gradient(50deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_2px,transparent_2px,transparent_14px)]" />

      {/* Decorative atom images — fixed in the background, with premium float/rotate animations */}
      <div className="pointer-events-none fixed z-[2] h-auto w-[340px] -translate-x-1/2 opacity-80 blur-[0.2px] bottom-[10%] left-[-1%] md:w-[470px] -rotate-12">
        <div className="animate-float-slow">
          <Image
            src="/images/atomfull.svg"
            alt=""
            width={534}
            height={534}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="pointer-events-none fixed z-[2] h-auto w-[190px] -scale-x-100 rotate-6 opacity-70 top-[6%] right-[3%] md:w-[230px]">
        <div className="animate-float-medium">
          <Image
            src="/images/atomfull.svg"
            alt=""
            width={534}
            height={534}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="pointer-events-none fixed z-[2] h-auto w-[270px] -scale-x-100 -rotate-3 opacity-75 bottom-[3%] right-[0%] md:w-[330px]">
        <div className="animate-float-fast">
          <Image
            src="/images/atomfull.svg"
            alt=""
            width={534}
            height={534}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Subtle radial glow — fixed */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[2] h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_62%)] opacity-50" />

      {/* ─── FIXED NAVBAR ─── */}
      <Navbar />

      {/* ─── SCROLLABLE CONTENT ─── */}
      <div className="relative z-10 font-[family-name:var(--font-trap)] text-white h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory no-scrollbar">
        {/* Home / Hero */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col snap-start scroll-mt-0"
        >
          {/* Top gradient fade for the hero */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-black via-black/85 to-transparent" />
          <HeroSection targetDate={WORKSHOP_DATE} meetUrl={MEET_URL} />
        </section>

        {/* About the Event */}
        <section id="event" className="relative min-h-screen snap-start scroll-mt-0">
          <AboutEventSection />
        </section>

        {/* Speaker */}
        <section id="speaker" className="relative min-h-screen snap-start scroll-mt-0">
          <SpeakerSection />
        </section>

        {/* Event Details */}
        <section id="event-details" className="relative min-h-screen snap-start scroll-mt-0">
          <EventDetailsSection />
        </section>
      </div>
    </>
  );
}
