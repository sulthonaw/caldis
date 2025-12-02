import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import DialogContentLearn from "@/components/dialog-content-lean";

export default function HowWeHelp() {
  return (
    <section className="bg-theme-purple-300 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-12 px-16 py-16 lg:flex-row lg:py-24">
        <div className="relative mx-auto h-[386px] w-full max-w-[500px] shrink-0 lg:mx-0">
          <div className="absolute top-0 left-8 z-0">
            <Image
              src={"/shapes/gear-full.svg"}
              alt="Gear Background"
              width={386}
              height={386}
              className="animate-spin-slow opacity-90"
            />
          </div>

          <div className="absolute top-[100px] left-0 z-10">
            <Image
              src={"/maskots/tutung.svg"}
              alt="Tutung Maskot"
              width={299}
              height={148}
              className="drop-shadow-lg"
            />
          </div>

          <div className="absolute top-20 right-4 z-20 lg:right-0">
            <Image
              src={"/maskots/caca.svg"}
              alt="Caca Maskot"
              width={320}
              height={336}
              className="drop-shadow-xl"
            />
          </div>
        </div>

        <div className="z-30 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-theme-pink-300 text-3xl font-bold lg:text-5xl">
            Bagaimana Caldis Membantu?
          </h1>

          <p className="text-lg leading-relaxed text-white">
            Kami menggunakan metode Multisensory Learning (VAKT). Anak melihat
            huruf (Visual), mendengar bunyinya (Auditory), dan menyentuh/
            menggerakkan objek (Kinesthetic/Tactile) melalui game interaktif.
          </p>

          <div className="flex justify-center pt-4 lg:justify-start">
            <DialogContentLearn
              buttonTrigger={
                <Button className="bg-theme-pink-300 hover:bg-theme-pink-300/90 gap-3 rounded-full px-8! py-6 text-lg font-bold text-white shadow-lg">
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
