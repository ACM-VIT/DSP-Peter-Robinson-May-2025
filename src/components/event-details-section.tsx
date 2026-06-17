import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

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
    <div className="relative z-10 flex w-full flex-col pb-8">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pt-20 pb-6 md:px-12 md:pt-24 md:pb-12 lg:px-20">
        <div className="w-full">
          <h1 className="mb-3 text-center text-[1.6rem] md:text-[2.25rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-8">
            Event Details
          </h1>

          <div className="mx-auto mb-4 grid w-full max-w-[900px] grid-cols-1 gap-2 md:mb-8 md:grid-cols-3 md:gap-6">
            <div className="glass-card flex flex-row items-center justify-between rounded-2xl px-5 py-2.5 md:flex-col md:items-start md:justify-center md:px-6 md:py-5">
              <div className="flex items-center gap-3 md:mb-1">
                <Calendar
                  className="h-5 w-5 md:h-6 md:w-6 text-[var(--color-gold)]"
                  strokeWidth={2.5}
                />
                <span className="text-[1.05rem] font-semibold tracking-[0.01em] text-[var(--color-gold)]">
                  Date
                </span>
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-white md:ml-9 md:text-[1.05rem]">
                19 June, 2026
              </p>
            </div>

            <div className="glass-card flex flex-row items-center justify-between rounded-2xl px-5 py-2.5 md:flex-col md:items-start md:justify-center md:px-6 md:py-5">
              <div className="flex items-center gap-3 md:mb-1">
                <Clock
                  className="h-5 w-5 md:h-6 md:w-6 text-[var(--color-gold)]"
                  strokeWidth={2.5}
                />
                <span className="text-[1.05rem] font-semibold tracking-[0.01em] text-[var(--color-gold)]">
                  Time
                </span>
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-white md:ml-9 md:text-[1.05rem]">
                4:00 PM - 5:00 PM
              </p>
            </div>

            <div className="glass-card flex flex-row items-center justify-between rounded-2xl px-5 py-2.5 md:flex-col md:items-start md:justify-center md:px-6 md:py-5">
              <div className="flex items-center gap-3 md:mb-1">
                <Image
                  src="/images/venue.svg"
                  alt="Venue Icon"
                  width={24}
                  height={24}
                  className="h-5 w-5 md:h-6 md:w-6"
                />
                <span className="text-[1.05rem] font-semibold tracking-[0.01em] text-[var(--color-gold)]">
                  Venue
                </span>
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-white md:ml-9 md:text-[1.05rem]">
                Online Conference
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[900px]">
            <h2 className="mb-2 text-[1.1rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-5 md:text-[1.55rem]">
              Event Schedule:
            </h2>

            <div className="flex flex-col">
              {scheduleItems.map((item) => (
                <div className="flex flex-col md:flex-row" key={item.time}>
                  <div className="shrink-0 py-1 pr-4 text-[0.8rem] font-medium leading-[1.4] tracking-[0.01em] text-white/85 md:w-[220px] md:py-2 md:pr-6 md:text-[1.05rem]">
                    {item.time}
                  </div>
                  <div className="flex-1 py-1 text-[0.8rem] leading-[1.4] tracking-[0.01em] text-white/85 md:border-l md:border-white/20 md:py-2 md:pl-10 md:text-[1.05rem]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
