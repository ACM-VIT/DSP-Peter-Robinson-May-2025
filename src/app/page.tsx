"use client";

import ShaderGradient from "@/components/shader-gradient";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutEventSection from "@/components/about-event-section";
import EventDetailsSection from "@/components/event-details-section";
import SpeakerSection from "@/components/speaker-section";
import LogosSection from "@/components/logos-section";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Image from "next/image";


const WORKSHOP_DATE = new Date(process.env.NEXT_PUBLIC_WORKSHOP_DATE!);
const MEET_URL = process.env.NEXT_PUBLIC_MEET_URL!;

export default function Home() {
  return (
    <>
      <Loader />

      <div className="fixed inset-0 z-0">
        <ShaderGradient />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(115deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_34%,rgba(24,24,24,0.68)_58%,rgba(112,112,112,0.34)_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.16] bg-[repeating-linear-gradient(50deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_2px,transparent_2px,transparent_14px)]" />

      <div className="hidden md:block pointer-events-none fixed z-[2] h-auto w-[340px] -translate-x-1/2 opacity-80 blur-[0.2px] bottom-[10%] left-[-1%] md:w-[470px] -rotate-12">
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
      <div className="hidden md:block pointer-events-none fixed z-[2] h-auto w-[270px] -scale-x-100 -rotate-3 opacity-75 bottom-[3%] right-[0%] md:w-[330px]">
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

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[2] h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_62%)] opacity-50" />

      <Navbar />

      <div className="relative z-10 font-[family-name:var(--font-trap)] text-white h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory no-scrollbar">
        <section
          id="home"
          className="relative min-h-screen flex flex-col snap-start scroll-mt-0"
        >
          <HeroSection targetDate={WORKSHOP_DATE} meetUrl={MEET_URL} />
        </section>

        <section id="event" className="relative min-h-screen snap-start scroll-mt-0">
          <AboutEventSection />
        </section>

        {/* Event Details - Temporarily Hidden
        <section id="event-details" className="relative min-h-screen scroll-mt-0">
          <EventDetailsSection />
        </section>
        */}

        <section id="speaker" className="relative min-h-screen snap-start scroll-mt-0">
          <SpeakerSection />
        </section>

        <section id="logos" className="relative snap-start scroll-mt-0">
          <LogosSection />
        </section>

        <section className="relative snap-end">
          <Footer />
        </section>
      </div>
    </>
  );
}
