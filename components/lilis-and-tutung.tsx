import Image from "next/image";

export default function LilisAndTutung() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center lg:h-[500px]">
      <div className="absolute z-0 w-[280px] lg:w-[386px]">
        <Image
          src={"/shapes/gear-full.svg"}
          alt="Background Gear"
          width={386}
          height={386}
          className="animate-spin-slow h-auto w-full opacity-80"
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-60 lg:top-10 lg:left-20 lg:w-[341.87px]">
        <Image
          src={"/maskots/lilis.svg"}
          alt="Lilis Maskot"
          width={341.87}
          height={259.74}
          className="h-auto w-full -rotate-[11.64deg] drop-shadow-lg"
        />
      </div>

      <div className="absolute right-0 bottom-0 z-20 w-[230px] lg:right-24 lg:bottom-24 lg:w-[337.4px]">
        <Image
          src={"/maskots/tutung.svg"}
          alt="Tutung Maskot"
          width={337.4}
          height={206.79}
          className="h-auto w-full drop-shadow-xl"
        />
      </div>
    </div>
  );
}
