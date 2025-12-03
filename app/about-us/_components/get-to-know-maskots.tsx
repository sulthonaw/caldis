import Image from "next/image";
import React from "react";

export default function GetToKnowMaskots() {
  const mascots = [
    {
      name: "Caca",
      description:
        "Caca membantu anak belajar membaca melalui permainan huruf, suku kata, dan cerita sederhana yang menyenangkan.",
      image: "/maskots/caca.svg",
      textColor: "text-theme-pink-300",
      blobColor: "bg-theme-pink-300/20",
    },
    {
      name: "Lilis",
      description:
        "Lilis mendampingi anak belajar menulis huruf dan kata dengan panduan visual jelas serta latihan interaktif.",
      image: "/maskots/lilis.svg",
      textColor: "text-theme-green-400",
      blobColor: "bg-theme-green-300/20",
    },
    {
      name: "Tutung",
      description:
        "Tutung membantu anak memahami dasar berhitung melalui permainan angka sederhana, interaktif, dan ramah disleksia ceria.",
      image: "/maskots/tutung.svg",
      textColor: "text-theme-coral",
      blobColor: "bg-theme-coral/20",
    },
  ];

  return (
    <section className="bg-theme-bg-100 font-lexend w-full px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex justify-center sm:mb-16">
          <div className="bg-theme-bg-300 text-theme-coral relative rounded-full px-6 py-2 shadow-sm sm:px-10 sm:py-3">
            <h1 className="text-center text-xl font-bold sm:text-2xl md:text-3xl">
              Pengenalan Maskot
            </h1>
            <div className="border-t-theme-bg-300 absolute top-full right-6 h-0 w-0 border-t-[12px] border-r-10 border-l-10 border-r-transparent border-l-transparent sm:right-10 md:right-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-3">
          {mascots.map((mascot, index) => (
            <div
              key={index}
              className="flex h-full flex-col items-center overflow-hidden rounded-4xl bg-[url('/bg-maskots.svg')] bg-cover bg-top p-6 text-center sm:p-8"
            >
              <div className="relative mb-6 flex h-40 w-full items-center justify-center sm:h-48">
                <div
                  className={`absolute h-32 w-32 rounded-full blur-2xl sm:h-40 sm:w-40 ${mascot.blobColor}`}
                ></div>

                <div className="relative z-10 drop-shadow-lg transition-transform duration-300 hover:scale-110">
                  <Image
                    src={mascot.image}
                    alt={`Maskot ${mascot.name}`}
                    width={130}
                    height={130}
                    className="object-contain sm:h-[150px] sm:w-[150px]"
                  />
                </div>
              </div>

              <h2
                className={`mb-3 text-xl font-bold sm:text-2xl ${mascot.textColor}`}
              >
                {mascot.name}
              </h2>

              <p className="text-theme-black-300 text-sm leading-relaxed sm:text-base">
                {mascot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
