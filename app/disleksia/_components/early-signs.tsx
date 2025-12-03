import { Baby, Backpack, CheckCircle2 } from "lucide-react";

export default function EarlySign() {
  const signs = [
    {
      title: "Usia prasekolah",
      icon: <Baby className="h-7 w-7 md:h-8 md:w-8" />,
      items: [
        "Terlambat bicara dibandingkan anak seusianya.",
        "Kesulitan mempelajari lagu anak-anak atau rima sederhana.",
        "Sering tertukar kata yang bunyinya mirip.",
      ],
      className:
        "bg-theme-green-300/20 shadow-[8px_8px_0_0_var(--color-theme-green-300)]",
      titleColor: "text-theme-green-400",
    },
    {
      title: "Usia sekolah",
      icon: <Backpack className="h-7 w-7 md:h-8 md:w-8" />,
      items: [
        "Membaca sangat lambat dan sering menebak kata.",
        "Tulisan tangan berantakan dan sulit dibaca.",
        "Kesulitan memahami soal cerita matematika (meski bisa berhitung).",
      ],
      className:
        "bg-theme-purple-300/20 shadow-[8px_8px_0_0_var(--color-theme-purple-300)]",
      titleColor: "text-theme-purple-400",
    },
  ];

  return (
    <section className="bg-theme-bg-100">
      <div className="container mx-auto px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="bg-theme-bg-300 relative mb-2 rounded-full px-6 py-3 md:px-8">
            <h1 className="text-theme-coral text-2xl font-bold md:text-3xl">
              Tanda-tanda Awal
            </h1>

            <div className="border-t-theme-bg-300 absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-t-14 border-r-10 border-l-10 border-r-transparent border-l-transparent"></div>
          </div>

          <p className="text-theme-black-300 mt-3 max-w-xl text-base font-medium md:text-lg">
            Deteksi dini sangat membantu perkembangan anak.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {signs.map((sign, index) => (
            <article
              key={index}
              className={`flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${sign.className}`}
            >
              <div className="border-theme-black-300/10 mb-6 flex items-center gap-4 border-b pb-4">
                <div className={sign.titleColor}>{sign.icon}</div>
                <h2
                  className={`text-xl font-bold md:text-2xl ${sign.titleColor}`}
                >
                  {sign.title}
                </h2>
              </div>

              <ul className="flex flex-col gap-4">
                {sign.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`mt-1 h-5 w-5 shrink-0 ${sign.titleColor}`}
                    />
                    <span className="text-theme-black-300 text-sm leading-relaxed font-medium md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
