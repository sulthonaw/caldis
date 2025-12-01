import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative bg-violet-900 pt-10 text-center text-white">
      <motion.div
        className="container mx-auto px-16"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mb-5 text-[64px] font-semibold text-violet-200"
        >
          Belajar Tanpa Batas
        </motion.h1>

        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl"
        >
          Platform interaktif yang dirancang khusus untuk mendukung anak dengan
          disleksia melalui latihan baca, tulis, dan hitung yang ramah
          aksesibilitas.
        </motion.p>

        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          <Button>Mulai Belajar</Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
        className="h-[394px] w-full bg-[url('/maskots.webp')] bg-bottom"
      />
    </section>
  );
}
