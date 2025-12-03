import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import DialogContentLearn from "@/components/dialog-content-lean";

export default function HowWeHelp() {
  return (
    <section className="bg-theme-purple-300 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 py-16 md:px-12 lg:flex-row lg:px-16 lg:py-24">
        <div className="relative mx-auto h-80 w-full max-w-[400px] shrink-0 sm:h-[360px] sm:max-w-[450px] md:h-[386px] md:max-w-[500px] lg:mx-0">
          <div className="absolute top-0 left-4 z-0 sm:left-6 md:left-8">
            <Image
              src={"/shapes/gear-full.svg"}
              alt="Gear Background"
              width={350}
              height={350}
              className="animate-spin-slow opacity-90"
            />
          </div>

          <div className="absolute top-20 left-0 z-10 sm:top-[90px] md:top-[100px]">
            <Image
              src={"/maskots/tutung.svg"}
              alt="Tutung Maskot"
              width={240}
              height={130}
              className="drop-shadow-lg"
            />
          </div>

          <div className="absolute top-16 right-0 z-20 sm:top-20 sm:right-2 md:top-20 md:right-4 lg:right-0">
            <Image
              src={"/maskots/caca.svg"}
              alt="Caca Maskot"
              width={260}
              height={300}
              className="drop-shadow-xl"
            />
          </div>
        </div>

        <div className="z-30 flex max-w-xl flex-col gap-6 text-center lg:text-left">
          <h1 className="text-theme-pink-300 text-3xl font-bold md:text-4xl lg:text-5xl">
            Bagaimana Caldis Membantu?
          </h1>

          <p className="text-base leading-relaxed text-white md:text-lg">
            Kami menggunakan metode Multisensory Learning (VAKT). Anak melihat
            huruf (Visual), mendengar bunyinya (Auditory), dan menyentuh/
            menggerakkan objek (Kinesthetic/Tactile) melalui game interaktif.
          </p>

          <div className="flex justify-center pt-4 lg:justify-start">
            <DialogContentLearn
              buttonTrigger={
                <Button className="bg-theme-pink-300 hover:bg-theme-pink-300/90 gap-3 rounded-full px-8 py-6 text-lg font-bold text-white shadow-lg">
                  Mulai Belajar
                  <Play className="h-5 w-5 fill-transparent stroke-white" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
