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
    <div className="relative flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden no-scrollbar bg-black font-[family-name:var(--font-trap)]">
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

      <div className="relative z-10 flex h-full w-full flex-col pb-8">
        <Navbar />

        <main className="mt-4 flex flex-1 flex-col items-center px-6 lg:px-20">
          <div className="w-full max-w-4xl">
            <h1 className="mb-8 text-center font-[family-name:var(--font-trap)] text-3xl font-semibold text-[var(--color-gold)] md:text-[2.5rem]">
              Event Details
            </h1>

            <div className="mx-auto mb-10 grid w-full grid-cols-1 gap-x-8 gap-y-6 md:w-[85%] md:grid-cols-2">
              <div className="glass-card flex flex-col items-start justify-center rounded-2xl px-6 py-5">
                <div className="mb-1.5 flex items-center gap-3">
                  <Calendar
                    className="h-6 w-6 text-[var(--color-gold)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-lg font-medium tracking-wide text-[var(--color-gold)]">
                    Date
                  </span>
                </div>
                <p className="ml-9 text-xl font-medium text-white">
                  19 June, 2026
                </p>
              </div>

              <div className="glass-card flex flex-col items-start justify-center rounded-2xl px-6 py-5">
                <div className="mb-1.5 flex items-center gap-3">
                  <Clock
                    className="h-6 w-6 text-[var(--color-gold)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-lg font-medium tracking-wide text-[var(--color-gold)]">
                    Time
                  </span>
                </div>
                <p className="ml-9 text-xl font-medium text-white">
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
                  <span className="text-lg font-medium tracking-wide text-[var(--color-gold)]">
                    Venue
                  </span>
                </div>
                <p className="ml-9 text-xl font-medium text-white">
                  Online Conference
                </p>
              </div>
            </div>

            <div className="mx-auto w-full md:w-[95%]">
              <h2 className="mb-5 text-[1.35rem] font-medium text-[var(--color-gold)]">
                Event Schedule:
              </h2>

              <div className="flex flex-col">
                {scheduleItems.map((item) => (
                  <div className="flex flex-col md:flex-row" key={item.time}>
                    <div className="shrink-0 py-3 pr-6 text-[0.95rem] text-[#e0e0e0] md:w-[220px]">
                      {item.time}
                    </div>
                    <div className="flex-1 py-3 text-[0.95rem] leading-relaxed text-[#e0e0e0] md:border-l md:border-white/20 md:pl-10">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
