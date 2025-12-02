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

export default function DialogContentLearn({
  buttonTrigger,
}: {
  buttonTrigger: ReactNode;
}) {
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
    <Dialog>
      <DialogTrigger asChild>{buttonTrigger}</DialogTrigger>
      <DialogContent className="max-w-4xl!">
        <DialogHeader>
          <DialogTitle>Permainan</DialogTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {learningModules.map((item, index) => (
              <article
                key={index}
                className="bg-theme-bg-100 flex flex-col items-center rounded-3xl p-6 text-center shadow-sm transition-transform duration-300"
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
