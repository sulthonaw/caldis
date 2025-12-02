import Image from "next/image";

export default function HeroDisleksia() {
  return (
    <section className="bg-theme-coral overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/pattern-gears.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <Image
        className="absolute -top-[200px] -left-[100px] opacity-20 grayscale-100"
        src={"/shapes/gear-full.svg"}
        alt=""
        width={400}
        height={400}
      />
      <Image
        className="absolute -top-[200px] right-[100px] opacity-20 grayscale-100"
        src={"/shapes/gear.svg"}
        alt=""
        width={400}
        height={400}
      />
      <div className="to-theme-yellow-300/30 absolute inset-0 bg-linear-to-b from-transparent"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center px-6 py-24 text-center md:px-16 lg:py-32">
        <h1 className="text-theme-yellow-300 mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Memahami Dunia Seleksi
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-white">
          Disleksia bukan tanda kurangnya kecerdasan, melainkan perbedaan cara
          otak memproses informasi. Mari kita luruskan pemahaman kita.
        </p>
      </div>
    </section>
  );
}
