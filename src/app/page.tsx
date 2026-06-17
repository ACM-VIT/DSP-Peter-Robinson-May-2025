"use client";

import ShaderGradient from "@/components/shader-gradient";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutEventSection from "@/components/about-event-section";
import EventDetailsSection from "@/components/event-details-section";
import SpeakerSection from "@/components/speaker-section";
import Loader from "@/components/loader";
import Image from "next/image";

const WORKSHOP_DATE = new Date(process.env.NEXT_PUBLIC_WORKSHOP_DATE!);
const MEET_URL = process.env.NEXT_PUBLIC_MEET_URL!;

export default function Home() {
  return (
    <>
      <Loader />

      {/* Home / Hero */}
      <section
        id="home"
        className="relative h-screen w-screen overflow-hidden bg-black"
      >
        <ShaderGradient />

        <Image
          src="/images/atomfull.svg"
          alt=""
          width={534}
          height={534}
          className="absolute z-[5] pointer-events-none opacity-70 bottom-[10%] left-[-7%] w-[400px] h-auto -rotate-12"
          aria-hidden="true"
        />
        <Image
          src="/images/atomfull.svg"
          alt=""
          width={534}
          height={534}
          className="absolute z-[5] pointer-events-none opacity-70 top-[6%] right-[3%] w-[170px] h-auto -scale-x-100 rotate-6"
          aria-hidden="true"
        />
        <Image
          src="/images/atomfull.svg"
          alt=""
          width={534}
          height={534}
          className="absolute z-[5] pointer-events-none opacity-70 bottom-[3%] right-[0%] w-[280px] h-auto -scale-x-100 -rotate-3"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full w-full flex-col">
          <Navbar />
          <HeroSection targetDate={WORKSHOP_DATE} meetUrl={MEET_URL} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent via-black/55 to-black" />
      </section>

      {/* About the Event */}
      <section id="event">
        <AboutEventSection />
      </section>

      {/* Speaker */}
      <section id="speaker">
        <SpeakerSection />
      </section>

      {/* Event Details */}
      <section id="event-details">
        <EventDetailsSection />
      </section>
    </>
  );
}
