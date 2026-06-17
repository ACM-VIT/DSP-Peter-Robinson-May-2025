import Image from "next/image";
import Navbar from "./navbar";
import ShaderGradient from "./shader-gradient";

export default function SpeakerSection() {
  return (
    <section className="relative isolate min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-black font-[family-name:var(--font-trap)] text-white no-scrollbar">
      <ShaderGradient />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(115deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_34%,rgba(24,24,24,0.68)_58%,rgba(112,112,112,0.34)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.16] bg-[repeating-linear-gradient(50deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_2px,transparent_2px,transparent_14px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-black via-black/85 to-transparent" />

      <Image
        src="/images/atomfull.svg"
        alt=""
        width={534}
        height={534}
        className="pointer-events-none absolute z-[1] h-auto w-[340px] -translate-x-1/2 opacity-80 blur-[0.2px] md:bottom-[8%] md:left-[-1%] md:w-[470px] md:-rotate-12"
        aria-hidden="true"
      />
      <Image
        src="/images/atomfull.svg"
        alt=""
        width={534}
        height={534}
        className="pointer-events-none absolute right-[-8%] top-[5%] z-[1] h-auto w-[190px] -scale-x-100 rotate-6 opacity-70 md:right-[-2%] md:w-[230px]"
        aria-hidden="true"
      />
      <Image
        src="/images/atomfull.svg"
        alt=""
        width={534}
        height={534}
        className="pointer-events-none absolute bottom-[2%] right-[-16%] z-[1] h-auto w-[270px] -scale-x-100 -rotate-3 opacity-75 md:right-[-2%] md:w-[330px]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_62%)] opacity-50" />

      <div className="relative z-10 flex h-full w-full flex-col pb-8">
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
    </section>
  );
}
