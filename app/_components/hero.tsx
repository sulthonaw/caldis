import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";
import DialogContentLearn from "@/components/dialog-content-lean";

export default function Hero() {
  return (
    <section className="bg-theme-purple-400 font-lexend relative flex min-h-dvh flex-col justify-between pt-28 pb-0 text-center md:pt-32">
      <div className="pointer-events-none select-none">
        <Image
          src={"/shapes/gear-full.svg"}
          width={400}
          height={400}
          className="animate-spin-slow absolute -top-[100px] -left-[100px] aspect-square w-[250px] opacity-20 mix-blend-overlay md:-top-[150px] md:-left-[150px] md:w-[400px]"
          alt=""
        />
        <Image
          src={"/shapes/gear-full.svg"}
          width={400}
          height={400}
          className="animate-spin-slow absolute -top-[100px] -right-[100px] aspect-square w-[250px] opacity-20 mix-blend-overlay md:-top-[150px] md:-right-[150px] md:w-[400px]"
          alt=""
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto flex grow flex-col items-center justify-center px-6"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-theme-pink-300 mb-4 text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:mb-6 md:text-[64px]"
        >
          Belajar Tanpa Batas
        </motion.h1>

        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-white/90 sm:text-lg md:mb-10 md:text-xl"
        >
          Platform interaktif yang dirancang khusus untuk mendukung anak dengan
          disleksia melalui latihan baca, tulis, dan hitung yang ramah
          aksesibilitas.
        </motion.p>
        <DialogContentLearn
          buttonTrigger={
            <motion.div
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            >
              <Button
                size="lg"
                className="bg-theme-pink-300 hover:bg-theme-pink-400 flex items-center gap-3 rounded-full px-6! py-6! text-base font-semibold text-white shadow-[0_0_20px_rgba(254,147,241,0.5)] transition-all md:px-8! md:py-7! md:text-lg"
              >
                Mulai Belajar
                <Play
                  className="h-4 w-4 fill-transparent stroke-white md:h-5 md:w-5"
                  strokeWidth={3}
                />
              </Button>
            </motion.div>
          }
        />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
        className="relative mt-8 w-full md:mt-0"
      >
        <div className="relative h-[200px] w-full sm:h-[300px] md:h-[400px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-0 w-full"
          >
            <Image
              src={"/waves.svg"}
              width={1489}
              height={372}
              alt=""
              className="top-0 w-full bg-cover"
            />
          </motion.div>
          <Image
            src="/maskots.webp"
            alt="Maskots Caldis"
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </motion.div>
    </section>
  );
}
