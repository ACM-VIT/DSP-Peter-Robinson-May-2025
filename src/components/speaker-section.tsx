import Image from "next/image";

export default function SpeakerSection() {
  return (
    <div className="relative z-10 flex w-full flex-col pb-8">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pt-24 pb-12 md:px-12 lg:px-20">
        <h1 className="mb-10 text-center text-[1.6rem] md:text-[2.25rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-12">
          About Qangles Academy
        </h1>

        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
          <div className="relative h-[100px] w-[80px] flex-shrink-0 md:h-[160px] md:w-[128px]">
            <Image
              src="/images/qangles-icon.png"
              alt="Qangles Academy"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col text-left">
            
            <p className="mb-3 text-[0.95rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
              Joining us for this session is an industry expert from Qangles,
              a pioneering company dedicated to bringing quantum computing
              out of the lab and into real-world enterprise applications.
            </p>
            <p className="mb-3 text-[0.95rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
              Qangles specializes in harmonizing classical and quantum computation,
              providing a unified platform where developers, scientists, and enterprises
              can build, test, and deploy hybrid quantum solutions.
            </p>
            <p className="text-[0.95rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
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
