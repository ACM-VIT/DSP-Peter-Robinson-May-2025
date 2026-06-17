"use client";

import ShaderGradient from "@/components/shader-gradient";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutEventSection from "@/components/about-event-section";
import EventDetailsSection from "@/components/event-details-section";
import HorizontalScrollController, {
  type HorizontalPage,
} from "@/components/horizontal-scroll-controller";
import SpeakerSection from "@/components/speaker-section";
import Image from "next/image";

// Read from environment variables (set in .env)
const WORKSHOP_DATE = new Date(process.env.NEXT_PUBLIC_WORKSHOP_DATE!);
const MEET_URL = process.env.NEXT_PUBLIC_MEET_URL!;

export default function Home() {
  const pages: HorizontalPage[] = [
    {
      id: "home",
      label: "Home",
      content: (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
          {/* Shader Gradient Canvas Background */}
          <ShaderGradient />

          {/* Atom decorations — using atomfull.svg (534x534, not clipped) */}
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

          {/* Page content */}
          <div className="relative z-10 flex h-full w-full flex-col">
            <Navbar />
            <HeroSection targetDate={WORKSHOP_DATE} meetUrl={MEET_URL} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent via-black/55 to-black" />
        </div>
      ),
    },
    {
      id: "event",
      label: "About the Event",
      content: <AboutEventSection />,
    },
    {
      id: "speaker",
      label: "Speaker",
      content: <SpeakerSection />,
    },
    {
      id: "event-details",
      label: "Event Details",
      content: <EventDetailsSection />,
    },
  ];

  return <HorizontalScrollController pages={pages} />;
}
