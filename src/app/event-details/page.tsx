import Navbar from "@/components/navbar";
import ShaderGradient from "@/components/shader-gradient";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

export default function EventDetails() {
  return (
    <div className="relative w-full max-w-[100vw] min-h-screen overflow-x-hidden no-scrollbar bg-black flex flex-col font-[family-name:var(--font-trap)]">
      {/* Shader Gradient Canvas Background */}
      <ShaderGradient />

      {/* Atom decorations */}
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

      <div className="relative z-10 flex flex-col w-full h-full pb-20">
        <Navbar />
        
        <main className="flex-1 flex flex-col items-center px-6 lg:px-20 mt-10">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl md:text-[2.5rem] font-[family-name:var(--font-trap)] font-semibold text-[var(--color-gold)] mb-12 text-center">
              Event Details
            </h1>

            {/* Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full mb-16 md:w-[85%] mx-auto">
              <div className="flex flex-col justify-center items-start px-6 py-5 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <Calendar className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={2.5} />
                  <span className="text-[var(--color-gold)] text-lg font-medium tracking-wide">Date</span>
                </div>
                <p className="text-white font-medium ml-9 text-xl">19 June, 2026</p>
              </div>
              
              <div className="flex flex-col justify-center items-start px-6 py-5 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <Clock className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={2.5} />
                  <span className="text-[var(--color-gold)] text-lg font-medium tracking-wide">Time</span>
                </div>
                <p className="text-white font-medium ml-9 text-xl">4:00 PM - 5:00 PM</p>
              </div>

              <div className="flex flex-col justify-center items-start px-6 py-5 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <Image
                    src="/images/venue.svg"
                    alt="Venue Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-[var(--color-gold)] text-lg font-medium tracking-wide">Venue</span>
                </div>
                <p className="text-white font-medium ml-9 text-xl">Online Conference</p>
              </div>
            </div>

            {/* Schedule section */}
            <div className="w-full md:w-[95%] mx-auto">
              <h2 className="text-[1.35rem] text-[var(--color-gold)] font-medium mb-8">Event Schedule:</h2>
              
              <div className="flex flex-col">
                {[
                  { time: "4:00 PM – 4:15 PM", desc: "Introduction to quantum computing, core fundamentals (qubits, superposition, entanglement, quantum gates), and an overview of hardware architectures like superconducting systems." },
                  { time: "4:15 PM – 4:30 PM", desc: "Exploration of hybrid classical-quantum computing, cloud platforms, and how quantum connects with software engineering, AI/ML, cybersecurity, and scientific computing." },
                  { time: "4:30 PM – 4:40 PM", desc: "Insights into Post-Quantum Cryptography, building quantum-safe infrastructure, and real-world applications across pharma, finance, logistics, and materials discovery." },
                  { time: "4:40 PM – 4:50 PM", desc: "Career roadmap outlining the specific skills and technologies students should start learning today." },
                  { time: "4:50 PM – 5:00 PM", desc: "Open Q&A session with students." },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row">
                    <div className="md:w-[220px] shrink-0 py-6 pr-6 text-[0.95rem] text-[#e0e0e0]">
                      {item.time}
                    </div>
                    <div className="flex-1 py-4 md:py-6 md:pl-10 text-[0.95rem] text-[#e0e0e0] leading-relaxed md:border-l md:border-white/20">
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
