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
        <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl flex-col justify-center px-6 pb-20 pt-4 md:px-12 lg:px-20">
          <h1 className="mb-10 text-center text-[1.9rem] font-semibold leading-tight text-[var(--color-gold)] md:mb-12 md:text-[2.25rem]">
            About the Speaker
          </h1>

          <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="relative h-[112px] w-[112px] flex-shrink-0 md:h-[120px] md:w-[120px]">
              <Image
                src="/images/speaker-logo-removebg-preview.png"
                alt="Dr. Something something"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col text-left">
              <h2 className="mb-5 text-[1.35rem] font-semibold leading-tight text-white md:text-[1.55rem]">
                Dr. Something something
              </h2>
              <p className="mb-4 text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <p className="mb-4 text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <p className="text-[1rem] leading-[1.6] tracking-[0.01em] text-white/85 md:text-[1.05rem]">
                Curabitur tempus urna at turpis condimentum lobortis. Ut
                commodo efficitur neque. Ut diam quam, semper iaculis
                condimentum ac, vestibulum eu nisl
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
