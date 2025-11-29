import LilisAndTutung from "@/components/lilis-and-tutung";
import Image from "next/image";

export default function UnderstandingDisleksia() {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-8 py-16 lg:grid lg:grid-cols-2 lg:px-16 lg:py-24">
        <div className="z-10 flex flex-col gap-6">
          <h1 className="text-theme-coral text-3xl leading-tight font-bold lg:text-5xl">
            Lebih dari Sekadar{" "}
            <span className="relative inline-block">
              &quot;Susah Membaca&quot;
              <span className="bg-theme-yellow-300 absolute -bottom-2 left-0 -z-10 h-3 w-full rounded-full opacity-80"></span>
            </span>
          </h1>

          <p className="text-theme-black-300 text-lg leading-relaxed">
            Secara neurologis, otak individu dengan disleksia bekerja dengan
            cara yang unik. Area otak yang mengatur pemrosesan fonologis (bunyi
            bahasa) bekerja kurang efisien, namun area yang mengatur{" "}
            <span className="font-bold">visualisasi ruang dan kreativitas</span>{" "}
            seringkali bekerja lebih aktif.
          </p>

          <p className="text-theme-black-300 text-lg leading-relaxed">
            Ini adalah bentuk <span className="font-bold">Neurodiversitas</span>
            . Sama seperti kita memiliki tinggi badan yang berbeda, struktur
            otak manusia pun memiliki variasi yang alami.
          </p>
        </div>

        <LilisAndTutung />
      </div>
    </section>
  );
}
