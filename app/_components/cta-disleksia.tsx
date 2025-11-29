import LilisAndTutung from "@/components/lilis-and-tutung";
import { Button } from "@/components/ui/button";
import { Eye, Ear } from "lucide-react";

export default function CTADisleksia() {
  return (
    <section className="bg-theme-bg-100 overflow-hidden px-16 py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="order-2 flex flex-1 flex-col gap-8 lg:order-1">
          <h1 className="text-theme-coral text-3xl leading-tight font-bold lg:text-5xl">
            Mengenal{" "}
            <span className="relative z-10 inline-block">
              Disleksia
              <span className="bg-theme-yellow-300 absolute bottom-1 left-0 -z-10 h-3 w-full rounded-full opacity-90"></span>
            </span>{" "}
            lebih dekat
          </h1>

          <p className="text-theme-black-300 text-lg leading-relaxed font-medium">
            Disleksia bukanlah penyakit, melainkan perbedaan cara otak memproses
            bahasa. Anak dengan disleksia seringkali memiliki kecerdasan normal
            atau di atas rata-rata, namun kesulitan dalam menghubungkan huruf
            dengan bunyi.
          </p>

          <div className="my-2 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="bg-theme-coral flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-theme-black-300 text-lg font-bold">
                  Visual Processing
                </h3>
                <p className="text-theme-black-300/80 mt-1 text-sm leading-snug">
                  Huruf sering terlihat terbalik atau bergerak (misal:
                  &apos;b&apos; dan &apos;d&apos;).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-theme-coral flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm">
                <Ear className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-theme-black-300 text-lg font-bold">
                  Phonological Awareness
                </h3>
                <p className="text-theme-black-300/80 mt-1 text-sm leading-snug">
                  Kesulitan memecah kata menjadi bunyi suku kata.
                </p>
              </div>
            </div>
          </div>

          {/* Tombol CTA */}
          <div className="pt-2">
            <Button className="bg-theme-coral hover:bg-theme-coral/90 shadow-theme-coral/20 rounded-full px-8 py-6 text-lg font-bold text-white shadow-lg transition-all">
              Pelajari lebih lanjut
            </Button>
          </div>
        </div>

        {/* Kolom Kanan: Komponen Gambar Lilis & Tutung */}
        <div className="order-1 flex w-full flex-1 justify-center lg:order-2 lg:justify-end">
          {/* Membiarkan komponen ini utuh sesuai permintaan */}
          <LilisAndTutung />
        </div>
      </div>
    </section>
  );
}
