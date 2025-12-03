import { Box, Heart, Puzzle, Zap } from "lucide-react";

export default function TheStrengths() {
  const strengths = [
    {
      icon: <Box className="h-8 w-8" />,
      title: "Visualisasi 3D",
      description: "Kemampuan membayangkan objek dengan sangat baik.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Berpikir Cepat",
      description: "Menemukan koneksi ide yang tidak terpikirkan orang lain.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empati Tinggi",
      description: "Sangat peka terhadap perasaan dan cerita orang lain.",
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: "Kreativitas",
      description: "Solusi out-of-the-box dan imajinasi yang hidup.",
    },
  ];

  return (
    <section className="bg-theme-green-400 px-6 py-16 sm:px-10 md:px-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <h1 className="text-theme-yellow-300 mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Kekuatan Tersembunyi
          </h1>
          <p className="px-2 text-base leading-relaxed font-medium text-white sm:text-lg">
            Banyak tokoh dunia seperti Albert Einstein, Steve Jobs, dan Leonardo
            da Vinci dipercaya memiliki disleksia. Kesulitan dalam membaca
            seringkali dikompensasi dengan bakat luar biasa di bidang lain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <article
              key={index}
              className="bg-theme-bg-100 flex flex-col items-center rounded-3xl p-6 text-center shadow-lg transition-transform duration-300 sm:p-8"
            >
              <div className="text-theme-coral mb-5 rounded-2xl bg-white p-3 shadow-sm sm:mb-6 sm:p-4">
                {item.icon}
              </div>

              <h3 className="text-theme-black-300 mb-2 text-lg font-bold sm:mb-3 sm:text-xl">
                {item.title}
              </h3>
              <p className="text-theme-black-300 text-sm leading-relaxed sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
