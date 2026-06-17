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
        <main className="flex flex-1 flex-col items-center justify-center px-8 pb-28 -mt-8 md:pb-36 md:-mt-12">
          <h1 className="relative -top-4 mb-10 text-center font-[family-name:var(--font-trap)] text-[clamp(2.2rem,5vw,3rem)] font-bold text-[var(--color-gold)] md:-top-6">
            About the Speaker
          </h1>

          <div className="flex w-full max-w-3xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
            <div className="relative -top-4 h-[110px] w-[110px] flex-shrink-0 md:-top-6 md:h-[100px] md:w-[100px]">
              <Image
                src="/images/speaker-logo-removebg-preview.png"
                alt="Dr. Something something"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col text-left">
              <h2 className="mb-5 font-[family-name:var(--font-trap)] text-2xl font-bold text-white md:text-3xl">
                Dr. Something something
              </h2>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-white/70">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-white/70">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <p className="text-[0.95rem] leading-relaxed text-white/70">
                Curabitur tempus urna at turpis condimentum lobortis. Ut
                commodo efficitur neque. Ut diam quam, semper iaculis
                condimentum ac, vestibulum eu nisl
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
