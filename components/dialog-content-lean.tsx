"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Link from "next/link";

export default function DialogContentLearn({
  buttonTrigger,
}: {
  buttonTrigger: ReactNode;
}) {
  const learningModules = [
    {
      link: "/games/count",
      image: "/icons/math.webp",
      title: "Berhitung Ceria",
      description:
        "Latihan penjumlahan sederhana dengan metode Drag & Drop yang interaktif",
      buttonColor: "bg-theme-purple-300 hover:bg-theme-purple-400",
    },
    {
      link: "/games/read",
      image: "/icons/read.webp",
      title: "Mari Membaca",
      description:
        "Latihan membaca dengan font khusus, pemenggalan suku kata, dan ilustrasi.",
      buttonColor: "bg-theme-green-400 hover:bg-theme-green-400/90",
    },
    {
      link: "/games/write",
      image: "/icons/write.webp",
      title: "Ayo Menulis",
      description:
        "Latihan penjumlahan sederhana dengan metode Drag & Drop yang interaktif",
      buttonColor: "bg-theme-pink-300 hover:bg-theme-pink-300/90",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{buttonTrigger}</DialogTrigger>
      <DialogContent className="max-w-full px-4 sm:max-w-xl sm:px-6 md:max-w-3xl lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl md:text-2xl">
            Permainan
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 max-h-[75vh] overflow-y-auto pb-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {learningModules.map((item, index) => (
              <article
                key={index}
                className="bg-theme-bg-100 flex flex-col items-center rounded-3xl p-5 text-center shadow-sm transition-transform duration-300 sm:p-6"
              >
                <div className="mb-4 flex justify-center">
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

                <Link href={item.link}>
                  <Button
                    className={cn(
                      item.buttonColor,
                      `w-full rounded-full border-none py-4 text-sm font-bold text-white shadow-md sm:py-5 sm:text-base md:py-6`,
                    )}
                  >
                    Mainkan sekarang!
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
