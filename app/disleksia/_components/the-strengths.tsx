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
    <section className="bg-theme-green-400 px-16 py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h1 className="text-theme-yellow-300 mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Kekuatan Tersembunyi (The Strengths)
          </h1>
          <p className="text-lg leading-relaxed font-medium text-white">
            Banyak tokoh dunia seperti Albert Einstein, Steve Jobs, dan Leonardo
            da Vinci dipercaya memiliki disleksia. Kesulitan dalam membaca
            seringkali dikompensasi dengan bakat luar biasa di bidang lain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <article
              key={index}
              className="bg-theme-bg-100 flex flex-col items-center rounded-3xl p-8 text-center shadow-lg transition-transform duration-300"
            >
              <div className="text-theme-coral mb-6 rounded-2xl bg-white p-4 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-theme-black-300 mb-3 text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-theme-black-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
