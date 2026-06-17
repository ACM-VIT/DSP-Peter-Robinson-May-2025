import Image from "next/image";

const logos = [
  {
    src: "/images/acm-vit-chapter-logo.png",
    alt: "ACM VIT Student Chapter",
    width: 710,
    height: 241,
  },
  {
    src: "/images/qangles-academy-logo.png",
    alt: "Qangles Academy",
    width: 1024,
    height: 219,
  },
];

export default function LogosSection() {
  return (
    <div className="relative z-10 flex w-full flex-col pb-8">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 pt-24 pb-12 md:px-12 lg:px-20">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:gap-12">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto w-full max-w-[360px] object-contain md:max-w-[420px]"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
