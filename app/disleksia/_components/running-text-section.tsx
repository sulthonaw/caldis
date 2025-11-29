import ScrollVelocity from "@/components/scroll-velocity";
import Image from "next/image";

export default function RunningTextSection() {
  const contentRow1 = (
    <div className="me-[34px] mb-10 flex items-center gap-x-[34px] font-bold *:text-[96px] md:text-7xl">
      <span className="text-theme-green-300">Membaca</span>
      <Image src={"/shapes/gear-full.svg"} width={106} height={106} alt="" />
      <span className="text-theme-green-400">Menulis</span>
      <Image
        src={"/shapes/gear-center-hole.svg"}
        width={106}
        height={106}
        alt=""
      />
      <span className="text-theme-green-300">Menghitung</span>
      <Image src={"/shapes/gear.svg"} width={106} height={106} alt="" />
    </div>
  );

  const contentRow2 = (
    <div className="me-[34px] flex items-center gap-x-[34px] font-bold *:text-[96px] md:text-7xl">
      <span className="text-theme-green-400">Membaca</span>
      <Image src={"/shapes/gear-full.svg"} width={106} height={106} alt="" />
      <span className="text-theme-green-300">Menulis</span>
      <Image
        src={"/shapes/gear-center-hole.svg"}
        width={106}
        height={106}
        alt=""
      />
      <span className="text-theme-green-400">Menghitung</span>
      <Image src={"/shapes/gear.svg"} width={106} height={106} alt="" />
    </div>
  );

  return (
    <div className="py-12 md:py-20">
      <ScrollVelocity
        items={[contentRow1, contentRow2]}
        velocity={106}
        className="py-2"
      />
    </div>
  );
}
