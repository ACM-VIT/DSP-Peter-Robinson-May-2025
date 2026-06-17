import Image from "next/image";
import ShaderGradient from "./shader-gradient";

const paragraphs = [
  "Join us for an interactive, engaging session on the emerging topic of Quantum Computing. This event caters to absolute beginners as well as those familiar with basic terminology.",
  "Quantum Computing is an evolving branch of computer science that uses quantum mechanics to process highly complex problems exponentially faster than normal supercomputers. Unlike standard computers solving problems sequentially, quantum computers evaluate massive amounts of possibilities simultaneously, solving in seconds what traditional supercomputers take thousands of years.",
  "Moving beyond hardware, we will explore the modern quantum ecosystem, including hybrid computing and cloud platforms. You will learn how quantum connects with software engineering, AI/ML, cybersecurity, and scientific computing. We will also dive into Post-Quantum Cryptography and building quantum-safe infrastructure.",
  "To ground these concepts, we will highlight real-world industry applications and provide a clear career roadmap outlining the skills students should learn today.",
];

const tiles = ["Quantum basics", "Modern ecosystem", "Career roadmap"];

export default function AboutEventSection() {
  return (
    <section
      id="event"
      className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-20 font-[family-name:var(--font-trap)] text-white md:px-12 lg:px-20"
    >
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-5xl flex-col justify-center">
        <h2 className="mb-10 text-center text-[1.9rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-12 md:text-[2.25rem]">
          About the Event
        </h2>

        <div className="mx-auto max-w-[900px] space-y-5 text-[1rem] leading-[1.25] tracking-[0.02em] text-white/90 md:text-[1.08rem]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
          {tiles.map((tile) => (
            <div
              key={tile}
              className="glass-card relative h-[210px] overflow-hidden rounded-[2rem] md:h-[250px]"
              aria-label={tile}
            >
              <span className="sr-only">{tile}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
