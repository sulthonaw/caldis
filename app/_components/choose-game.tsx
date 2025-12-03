import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ChooseGame() {
  const learningModules = [
    {
      image: "/icons/math.webp",
      title: "Berhitung Ceria",
      description:
        "Latihan penjumlahan sederhana dengan metode Drag & Drop yang interaktif",
      buttonColor: "bg-theme-purple-300 hover:bg-theme-purple-400",
    },
    {
      image: "/icons/read.webp",
      title: "Mari Membaca",
      description:
        "Latihan membaca dengan font khusus, pemenggalan suku kata, dan ilustrasi.",
      buttonColor: "bg-theme-green-400 hover:bg-theme-green-400/90",
    },
    {
      image: "/icons/write.webp",
      title: "Ayo Menulis",
      description:
        "Latihan penjumlahan sederhana dengan metode Drag & Drop yang interaktif",
      buttonColor: "bg-theme-pink-300 hover:bg-theme-pink-300/90",
    },
  ];

  return (
    <section className="bg-theme-green-400 relative overflow-hidden">
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 px-4 py-12 md:px-8 lg:flex-row lg:gap-10 lg:py-24">
        <div className="relative z-10 mb-6 aspect-square h-[220px] w-[220px] shrink-0 select-none sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]">
          <Image
            src="/maskots/lilis.svg"
            width={400}
            height={400}
            alt=""
            className="absolute top-0 h-auto w-[200px] -rotate-12 sm:w-[240px] md:w-[260px] lg:w-[300px]"
          />
          <Image
            src="/maskots/caca.svg"
            width={400}
            height={400}
            alt=""
            className="absolute top-28 right-0 h-auto w-[180px] sm:w-[220px] md:top-32 md:w-[240px] lg:top-40 lg:w-[300px]"
          />
        </div>

        <div className="flex w-full max-w-5xl flex-col gap-6 md:gap-8">
          <h2 className="text-theme-yellow-300 text-center text-2xl font-bold drop-shadow-sm sm:text-3xl md:text-4xl lg:text-left lg:text-5xl">
            Pilih Permainan Belajar
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8">
            {learningModules.map((item, index) => (
              <article
                key={index}
                className="bg-theme-bg-100 flex flex-col items-center rounded-3xl p-6 text-center shadow-lg transition-transform duration-300"
              >
                <div className="mb-4">
                  <Image
                    src={item.image}
                    width={160}
                    height={160}
                    className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                    alt={item.title}
                  />
                </div>

                <h3 className="text-theme-black-300 mb-2 text-lg font-bold sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-theme-black-300 mb-6 grow text-sm leading-relaxed sm:text-base">
                  {item.description}
                </p>

                <Button
                  className={cn(
                    item.buttonColor,
                    "w-full rounded-full border-none py-4 font-bold text-white shadow-md sm:py-5",
                  )}
                >
                  Mainkan sekarang!
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
