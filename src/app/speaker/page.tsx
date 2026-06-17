import ShaderGradient from "@/components/shader-gradient";
import SpeakerSection from "@/components/speaker-section";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Speaker() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-[family-name:var(--font-trap)]">
      
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

      {/* Page content */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-8 pb-28 md:pb-36 -mt-8 md:-mt-12">
          <h1 className="font-[family-name:var(--font-trap)] font-bold text-[clamp(2.2rem,5vw,3rem)] text-[var(--color-gold)] mb-10 text-center relative -top-4 md:-top-6">
            About the Speaker
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 max-w-3xl w-full">
            {/* Speaker photo */}
            <div className="flex-shrink-0 w-[110px] h-[110px] md:w-[100px] md:h-[100px] relative -top-4 md:-top-6">
              <Image
                src="/images/speaker-logo-removebg-preview.png"
                alt="Dr. Something something"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Speaker info */}
            <div className="flex flex-col text-left">
              <h2 className="font-[family-name:var(--font-trap)] font-bold text-white text-2xl md:text-3xl mb-5">
                Qangles
              </h2>
              <p className="text-white/70 text-[0.95rem] leading-relaxed mb-4">
                Joining us for this session is an industry expert from Qangles,
                a pioneering company dedicated to bringing quantum computing 
                out of the lab and into real-world enterprise applications. 
              </p>
              <p className="text-white/70 text-[0.95rem] leading-relaxed mb-4">
                Qangles specializes in harmonizing classical and quantum computation, 
                providing a unified platform where developers, scientists, and enterprises 
                can build, test, and deploy hybrid quantum solutions.
              </p>
              <p className="text-white/70 text-[0.95rem] leading-relaxed">
                Qangles integrates simulation, execution, and optimization workflows to solve bottlenecks, 
               bridging traditional and quantum infrastructure turns
               complex barriers into actionable breakthroughs.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
