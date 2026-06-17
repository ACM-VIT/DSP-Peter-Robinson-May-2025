import Image from "next/image";

export default function SpeakerSection() {
  return (
    <div className="relative z-10 flex w-full flex-col pb-8">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pt-24 pb-12 md:px-12 lg:px-20">
        <h1 className="mb-10 text-center text-[1.9rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-12 md:text-[2.25rem]">
          About the Speaker
        </h1>

        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="relative h-[112px] w-[112px] flex-shrink-0 md:h-[120px] md:w-[120px]">
            <Image
              src="/images/speaker-logo-removebg-preview.png"
              alt="Qangles"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col text-left">
            <h2 className="mb-5 text-[1.35rem] font-semibold leading-tight text-white md:text-[1.55rem]">
              Qangles
            </h2>
            <p className="mb-4 text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
              Joining us for this session is an industry expert from Qangles,
              a pioneering company dedicated to bringing quantum computing
              out of the lab and into real-world enterprise applications.
            </p>
            <p className="mb-4 text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
              Qangles specializes in harmonizing classical and quantum computation,
              providing a unified platform where developers, scientists, and enterprises
              can build, test, and deploy hybrid quantum solutions.
            </p>
            <p className="text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
              Qangles integrates simulation, execution, and optimization workflows to solve bottlenecks,
              bridging traditional and quantum infrastructure turns
              complex barriers into actionable breakthroughs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
