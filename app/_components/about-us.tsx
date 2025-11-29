import LilisAndTutung from "@/components/lilis-and-tutung";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  const stats = [
    { value: "3+", label: "Modul Belajar" },
    { value: "100%", label: "Gratis Akses" },
    { value: "A+", label: "Ramah Anak" },
    { value: "24/7", label: "Dapat Diakses" },
  ];

  return (
    <section className="bg-theme-purple-300 relative overflow-hidden px-16 py-24">
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="flex w-full justify-center lg:justify-start">
          <LilisAndTutung />
        </div>

        <div className="flex flex-col gap-8 text-center lg:text-left">
          <h1 className="text-theme-pink-300 text-3xl font-bold lg:text-5xl">
            Tentang Kami
          </h1>

          <p className="text-lg leading-relaxed text-white">
            Caldis lahir dari kepedulian kami terhadap akses pendidikan
            inklusif. Kami percaya setiap anak berhak mendapatkan metode belajar
            yang sesuai dengan keunikan mereka. Misi kami adalah menghapus
            hambatan belajar melalui teknologi yang ramah dan menyenangkan.
          </p>

          <div className="grid grid-cols-2 gap-6 py-2 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/20">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center first:pl-0 md:px-6 lg:items-start"
              >
                <span className="text-theme-yellow-300 mb-1 text-3xl font-bold md:text-4xl">
                  {item.value}
                </span>
                <span className="text-sm font-medium text-white/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Button className="bg-theme-pink-300 hover:bg-theme-pink-300/90 w-full rounded-full px-10 py-6 text-lg font-bold text-white shadow-lg transition-all md:w-auto">
              Kenali kami lebih dekat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
