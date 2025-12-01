import LilisAndTutung from "@/components/lilis-and-tutung";

export default function Definition() {
  return (
    <section className="bg-theme-bg-100 font-lexend w-full">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:px-16 lg:py-24">
        {/* Kolom Teks */}
        <div className="w-full max-w-[642px] text-left">
          <h1 className="text-theme-coral mb-6 text-3xl font-bold lg:text-[40px]">
            Caldis adalah
          </h1>

          <p className="text-theme-black-300 text-base leading-loose lg:text-lg">
            Caldis lahir dari kepedulian kami terhadap akses pendidikan
            inklusif. Kami percaya setiap anak berhak mendapatkan metode belajar
            yang sesuai dengan keunikan mereka. Misi kami adalah menghapus
            hambatan belajar melalui teknologi yang ramah dan menyenangkan.
          </p>
        </div>

        <LilisAndTutung />
      </div>
    </section>
  );
}
