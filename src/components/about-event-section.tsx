const paragraphs = [
  "Join us for an interactive, engaging session on the emerging topic of Quantum Computing. This event caters to absolute beginners as well as those familiar with basic terminology.",
  "Quantum Computing is an evolving branch of computer science that uses quantum mechanics to process highly complex problems exponentially faster than normal supercomputers. Unlike standard computers solving problems sequentially, quantum computers evaluate massive amounts of possibilities simultaneously, solving in seconds what traditional supercomputers take thousands of years.",
  "Moving beyond hardware, we will explore the modern quantum ecosystem, including hybrid computing and cloud platforms. You will learn how quantum connects with software engineering, AI/ML, cybersecurity, and scientific computing. We will also dive into Post-Quantum Cryptography and building quantum-safe infrastructure.",
  "To ground these concepts, we will highlight real-world industry applications and provide a clear career roadmap outlining the skills students should learn today.",
];

export default function AboutEventSection() {
  return (
    <div className="relative z-10 flex w-full flex-col pb-8">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pt-24 pb-12 md:px-12 lg:px-20">
        <h2 className="mb-6 text-center text-[1.6rem] md:text-[2.25rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-10">
          About the Event
        </h2>

        <div className="mx-auto max-w-[900px] space-y-4 text-[1.05rem] leading-[1.5] tracking-[0.01em] text-white/85 md:text-[1.15rem] md:leading-[1.6]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
