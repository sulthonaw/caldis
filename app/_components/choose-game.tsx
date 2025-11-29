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
    <section className="bg-theme-green-400 relative overflow-hidden bg-[url('/bg-gear-green.webp')] bg-cover bg-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-8 py-16 lg:flex-row lg:px-16 lg:py-24">
        <div className="relative z-10 shrink-0 select-none" draggable={false}>
          <Image
            src={"/duo-maskots.webp"}
            width={408}
            height={438}
            alt="Maskot Caldis"
            className="h-auto w-[300px] drop-shadow-xl select-none lg:w-[400px]"
            draggable={false}
            priority
          />
        </div>

        <div className="flex w-full max-w-5xl flex-col gap-8">
          <h2 className="text-theme-yellow-300 text-center text-3xl font-bold drop-shadow-sm lg:text-left lg:text-5xl">
            Pilih Permainan Belajar
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
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
                    className="h-32 w-32 object-contain"
                    alt={item.title}
                  />
                </div>

                <h3 className="text-theme-black-300 mb-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-theme-black-300 mb-6 grow text-sm leading-relaxed">
                  {item.description}
                </p>

                <Button
                  className={cn(
                    item.buttonColor,
                    `w-full rounded-full border-none py-6 font-bold text-white shadow-md`,
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
