import ScrollVelocity from "@/components/scroll-velocity";
import Image from "next/image";

export default function RunningTextSection() {
  const contentRow1 = (
    <div className="me-6 mb-6 flex items-center gap-x-6 font-bold *:text-5xl sm:*:text-6xl md:me-[34px] md:mb-10 md:gap-x-[34px] md:*:text-7xl lg:*:text-[96px]">
      <span className="text-theme-green-300">Membaca</span>
      <Image
        src={"/shapes/gear-full.svg"}
        width={70}
        height={70}
        alt=""
        className="animate-spin-slow h-12 w-12 sm:h-16 sm:w-16 md:h-[106px] md:w-[106px]"
      />
      <span className="text-theme-green-400">Menulis</span>
      <Image
        src={"/shapes/gear-center-hole.svg"}
        width={70}
        height={70}
        alt=""
        className="animate-spin-slow h-12 w-12 sm:h-16 sm:w-16 md:h-[106px] md:w-[106px]"
      />
      <span className="text-theme-green-300">Menghitung</span>
      <Image
        src={"/shapes/gear.svg"}
        width={70}
        height={70}
        alt=""
        className="animate-spin-slow h-12 w-12 sm:h-16 sm:w-16 md:h-[106px] md:w-[106px]"
      />
    </div>
  );

  const contentRow2 = (
    <div className="me-6 flex items-center gap-x-6 font-bold *:text-5xl sm:*:text-6xl md:me-[34px] md:gap-x-[34px] md:*:text-7xl lg:*:text-[96px]">
      <span className="text-theme-green-400">Membaca</span>
      <Image
        src={"/shapes/gear-full.svg"}
        width={70}
        height={70}
        alt=""
        className="animate-spin-slow h-12 w-12 sm:h-16 sm:w-16 md:h-[106px] md:w-[106px]"
      />
      <span className="text-theme-green-300">Menulis</span>
      <Image
        src={"/shapes/gear-center-hole.svg"}
        width={70}
        height={70}
        alt=""
        className="animate-spin-slow h-12 w-12 sm:h-16 sm:w-16 md:h-[106px] md:w-[106px]"
      />
      <span className="text-theme-green-400">Menghitung</span>
      <Image
        src={"/shapes/gear.svg"}
        width={70}
        height={70}
        alt=""
        className="animate-spin-slow h-12 w-12 sm:h-16 sm:w-16 md:h-[106px] md:w-[106px]"
      />
    </div>
  );

  return (
    <div className="py-8 sm:py-10 md:py-20">
      <ScrollVelocity
        items={[contentRow1, contentRow2]}
        velocity={70}
        className="py-2"
      />
    </div>
  );
}
