import Image from "next/image";
import Navbar from "./navbar";
import ShaderGradient from "./shader-gradient";

export default function SpeakerSection() {
  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden no-scrollbar bg-black font-[family-name:var(--font-trap)]">
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
        <main className="flex flex-1 flex-col items-center justify-center px-8 pb-20 pt-4 md:pb-24">
          <h1 className="mb-10 text-center font-[family-name:var(--font-trap)] text-[clamp(2.2rem,5vw,3rem)] font-bold text-[var(--color-gold)]">
            About the Speaker
          </h1>

          <div className="flex w-full max-w-3xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
            <div className="h-[110px] w-[110px] flex-shrink-0 md:h-[100px] md:w-[100px] relative">
              <Image
                src="/images/speaker-logo-removebg-preview.png"
                alt="Qangles Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col text-left">
              <h2 className="mb-5 font-[family-name:var(--font-trap)] text-2xl font-bold text-white md:text-3xl">
                Qangles
              </h2>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-white/70">
                Joining us for this session is an industry expert from Qangles,
                a pioneering company dedicated to bringing quantum computing 
                out of the lab and into real-world enterprise applications. 
              </p>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-white/70">
                Qangles specializes in harmonizing classical and quantum computation, 
                providing a unified platform where developers, scientists, and enterprises 
                can build, test, and deploy hybrid quantum solutions.
              </p>
              <p className="text-[0.95rem] leading-relaxed text-white/70">
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
