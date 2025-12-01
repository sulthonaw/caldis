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
    <section className="bg-theme-bg-100 font-lexend w-full px-16 py-24">
      <div className="container mx-auto">
        <div className="mb-16 flex justify-center">
          <div className="bg-theme-bg-300 text-theme-coral relative rounded-full px-10 py-3 shadow-sm">
            <h1 className="text-center text-2xl font-bold md:text-3xl">
              Pengenalan Maskot
            </h1>
            <div className="border-t-theme-bg-300 absolute top-full right-8 h-0 w-0 border-t-15 border-r-10 border-l-10 border-r-transparent border-l-transparent md:right-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {mascots.map((mascot, index) => (
            <div
              key={index}
              className="flex h-full flex-col items-center overflow-hidden rounded-4xl bg-[url('/bg-maskots.svg')] bg-cover bg-top p-8 text-center"
            >
              <div className="relative mb-6 flex h-48 w-full items-center justify-center">
                <div
                  className={`absolute h-40 w-40 rounded-full blur-2xl ${mascot.blobColor}`}
                ></div>

                <div className="relative z-10 drop-shadow-lg transition-transform duration-300 hover:scale-110">
                  <Image
                    src={mascot.image}
                    alt={`Maskot ${mascot.name}`}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>

              <h2 className={`mb-4 text-2xl font-bold ${mascot.textColor}`}>
                {mascot.name}
              </h2>
              <p className="text-theme-black-300 text-sm leading-relaxed md:text-base">
                {mascot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
