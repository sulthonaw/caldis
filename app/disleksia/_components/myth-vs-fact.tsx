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
    <section className="bg-theme-bg-100 px-6 py-20">
      <div className="container mx-auto px-16 py-24">
        <div className="mb-16 flex justify-center">
          <div className="bg-theme-bg-300 relative rounded-full px-10 py-4">
            <h1 className="text-theme-coral text-center text-2xl font-bold md:text-3xl">
              Mitos vs Fakta
            </h1>
            <div className="border-t-theme-bg-300 absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-t-16 border-r-12 border-l-12 border-r-transparent border-l-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {info.map((data, index) => (
            <article
              key={index}
              className="bg-theme-bg-300 border-theme-coral flex overflow-hidden rounded-3xl border-l-4 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex w-full flex-col gap-4 p-6 md:p-8">
                <div>
                  <h3 className="text-theme-coral mb-2 text-xl font-bold">
                    Mitos:
                  </h3>
                  <p className="text-theme-black-300 text-lg leading-snug font-semibold italic">
                    &quot;{data.myth}&quot;
                  </p>
                </div>

                <div className="bg-theme-black-300/10 my-1 h-px w-full"></div>

                <div>
                  <h3 className="text-theme-green-400 mb-2 text-xl font-bold">
                    Fakta
                  </h3>
                  <p className="text-theme-black-300 text-sm leading-relaxed md:text-base">
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
