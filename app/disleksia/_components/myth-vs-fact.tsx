export default function MythVsFact() {
  const info = [
    {
      myth: "Anak disleksia itu malas atau kurang pintar.",
      fact: "Mereka sering memiliki IQ rata-rata atau di atas rata-rata. Mereka justru bekerja jauh lebih keras daripada teman sebayanya untuk memproses teks yang sama.",
    },
    {
      myth: "Disleksia hanya soal melihat huruf terbalik.",
      fact: "Terbalik huruf (b/d) wajar hingga usia tertentu. Inti masalah disleksia adalah Kesadaran Fonologis: kesulitan memecah kata menjadi bunyi-bunyi penyusunnya.",
    },
  ];

  return (
    <section className="bg-theme-bg-100 px-6 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex justify-center sm:mb-16">
          <div className="bg-theme-bg-300 relative rounded-full px-6 py-3 sm:px-10 sm:py-4">
            <h1 className="text-theme-coral text-center text-xl font-bold sm:text-2xl md:text-3xl">
              Mitos vs Fakta
            </h1>
            <div className="border-t-theme-bg-300 absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-t-[12px] border-r-8 border-l-8 border-r-transparent border-l-transparent sm:-bottom-3 sm:border-t-[16px] sm:border-r-12 sm:border-l-12"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12">
          {info.map((data, index) => (
            <article
              key={index}
              className="bg-theme-bg-300 border-theme-coral flex overflow-hidden rounded-3xl border-l-4 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex w-full flex-col gap-4 p-5 sm:p-6 md:p-8">
                <div>
                  <h3 className="text-theme-coral mb-1 text-lg font-bold sm:mb-2 sm:text-xl">
                    Mitos:
                  </h3>
                  <p className="text-theme-black-300 text-base leading-snug font-semibold italic sm:text-lg">
                    &quot;{data.myth}&quot;
                  </p>
                </div>

                <div className="bg-theme-black-300/10 my-1 h-px w-full"></div>

                <div>
                  <h3 className="text-theme-green-400 mb-1 text-lg font-bold sm:mb-2 sm:text-xl">
                    Fakta
                  </h3>
                  <p className="text-theme-black-300 text-sm leading-relaxed sm:text-base md:text-lg">
                    {data.fact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
