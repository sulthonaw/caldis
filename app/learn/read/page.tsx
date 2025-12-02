import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReadingLevelPage() {
  const levels = [
    {
      title: "Mudah",
      description:
        "Belajar huruf dan suku kata lewat permainan ringan interaktif.",
      image: "/maskots/caca.svg",
      colorClass: "text-theme-green-400",
      blobClass: "bg-theme-green-300/30",
      rotation: "-rotate-6",
    },
    {
      title: "Sedang",
      description:
        "Melatih membaca kata sederhana dengan bantuan visual yang mendukung fokus.",
      image: "/maskots/caca.svg",
      colorClass: "text-orange-400",
      blobClass: "bg-orange-300/30",
      rotation: "rotate-6",
    },
    {
      title: "Sulit",
      description:
        "Membaca kalimat pendek sambil memahami arti dengan tantangan ramah disleksia.",
      image: "/maskots/caca.svg",
      colorClass: "text-theme-coral",
      blobClass: "bg-theme-coral/30",
      rotation: "-rotate-3",
    },
  ];

  return (
    <section className="bg-theme-purple-300 font-lexend relative min-h-screen w-full overflow-hidden px-16 py-24">
      <div className="relative z-10 container mx-auto">
        <header className="relative mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center gap-2 text-lg font-medium text-white transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-6 w-6" />
            <span>Kembali</span>
          </Link>

          <h1 className="text-theme-pink-300 mx-auto text-3xl font-bold md:text-4xl">
            Membaca
          </h1>
        </header>

        <div className="mx-auto grid max-w-[977px] grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center rounded-4xl bg-[url('/bg-maskots.svg')] bg-cover bg-top p-8 text-center transition-transform duration-300"
            >
              <div className="relative mb-6 flex h-48 w-full items-center justify-center">
                <div
                  className={`absolute h-32 w-40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${level.blobClass} blur-xl`}
                ></div>

                <div className={`relative h-40 w-40 ${level.rotation}`}>
                  <Image
                    src={level.image}
                    alt={`Level ${level.title}`}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <h2 className={`mb-4 text-2xl font-bold ${level.colorClass}`}>
                {level.title}
              </h2>
              <p className="text-theme-black-300 text-sm leading-relaxed md:text-base">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
