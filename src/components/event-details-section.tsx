import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Navbar from "./navbar";
import ShaderGradient from "./shader-gradient";

const scheduleItems = [
  {
    time: "4:00 PM - 4:15 PM",
    desc: "Introduction to quantum computing, core fundamentals (qubits, superposition, entanglement, quantum gates), and an overview of hardware architectures like superconducting systems.",
  },
  {
    time: "4:15 PM - 4:30 PM",
    desc: "Exploration of hybrid classical-quantum computing, cloud platforms, and how quantum connects with software engineering, AI/ML, cybersecurity, and scientific computing.",
  },
  {
    time: "4:30 PM - 4:40 PM",
    desc: "Insights into Post-Quantum Cryptography, building quantum-safe infrastructure, and real-world applications across pharma, finance, logistics, and materials discovery.",
  },
  {
    time: "4:40 PM - 4:50 PM",
    desc: "Career roadmap outlining the specific skills and technologies students should start learning today.",
  },
  {
    time: "4:50 PM - 5:00 PM",
    desc: "Open Q&A session with students.",
  },
];

export default function EventDetailsSection() {
  return (
    <section className="relative isolate flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden bg-black font-[family-name:var(--font-trap)] text-white no-scrollbar">
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

        <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl flex-col justify-center px-6 pb-20 pt-4 md:px-12 lg:px-20">
          <div className="w-full">
            <h1 className="mb-10 text-center text-[1.9rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-12 md:text-[2.25rem]">
              Event Details
            </h1>

            <div className="mx-auto mb-10 grid w-full max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
              <div className="glass-card flex flex-col items-start justify-center rounded-2xl px-6 py-5">
                <div className="mb-1.5 flex items-center gap-3">
                  <Calendar
                    className="h-6 w-6 text-[var(--color-gold)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[1rem] font-semibold tracking-[0.01em] text-[var(--color-gold)] md:text-[1.05rem]">
                    Date
                  </span>
                </div>
                <p className="ml-9 text-[1rem] font-medium leading-[1.5] text-white md:text-[1.05rem]">
                  19 June, 2026
                </p>
              </div>

              <div className="glass-card flex flex-col items-start justify-center rounded-2xl px-6 py-5">
                <div className="mb-1.5 flex items-center gap-3">
                  <Clock
                    className="h-6 w-6 text-[var(--color-gold)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[1rem] font-semibold tracking-[0.01em] text-[var(--color-gold)] md:text-[1.05rem]">
                    Time
                  </span>
                </div>
                <p className="ml-9 text-[1rem] font-medium leading-[1.5] text-white md:text-[1.05rem]">
                  4:00 PM - 5:00 PM
                </p>
              </div>

              <div className="glass-card flex flex-col items-start justify-center rounded-2xl px-6 py-5">
                <div className="mb-1.5 flex items-center gap-3">
                  <Image
                    src="/images/venue.svg"
                    alt="Venue Icon"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-[1rem] font-semibold tracking-[0.01em] text-[var(--color-gold)] md:text-[1.05rem]">
                    Venue
                  </span>
                </div>
                <p className="ml-9 text-[1rem] font-medium leading-[1.5] text-white md:text-[1.05rem]">
                  Online Conference
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[900px]">
              <h2 className="mb-5 text-[1.35rem] font-semibold leading-tight text-[var(--color-gold)] md:text-[1.55rem]">
                Event Schedule:
              </h2>

              <div className="flex flex-col">
                {scheduleItems.map((item) => (
                  <div className="flex flex-col md:flex-row" key={item.time}>
                    <div className="shrink-0 py-3 pr-6 text-[1rem] font-medium leading-[1.6] tracking-[0.01em] text-white/85 md:w-[220px] md:text-[1.05rem]">
                      {item.time}
                    </div>
                    <div className="flex-1 py-3 text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:border-l md:border-white/20 md:pl-10 md:text-[1.05rem]">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
