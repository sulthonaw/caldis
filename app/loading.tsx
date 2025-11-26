"use client";

import Lottie from "lottie-react";
import calistung from "@/components/lotties/calistung.json";
import { motion } from "motion/react";

export default function Loading() {
  const dots = "...";

  return (
    <div className="flex h-screen items-center justify-center bg-violet-950 text-white">
      <div className="text-center">
        <div className="flex h-40 w-40 flex-col items-center">
          <Lottie animationData={calistung} loop width={100} height={100} />

          <div className="mt-4 flex items-center justify-center gap-1">
            <span>memuat</span>
            <div className="flex gap-1">
              {dots.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
