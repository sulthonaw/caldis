import { Gamepad, Type, Volume2 } from "lucide-react";

export default function WhyCaldis() {
  const menus = [
    {
      icon: <Type color="#FFD002" size={28} />,
      title: "Font Lexend",
      description:
        "Menggunakan font yang terbukti secara ilmiah meningkatkan kelancaran membaca bagi penderita disleksia.",
      color: "#FFD002",
    },
    {
      icon: <Volume2 color="#AFEE01" size={28} />,
      title: "Bantuan Suara",
      description:
        "Setiap instruksi dan materi dilengkapi dengan audio (Text-to-Speech) untuk membantu pemahaman.",
      color: "#AFEE01",
    },
    {
      icon: <Gamepad color="#FB7768" size={28} />,
      title: "Gamifikasi",
      description:
        "Belajar tidak membosankan dengan sistem reward, konfeti, dan animasi yang ceria.",
      color: "#FB7768",
    },
  ];

  return (
    <section className="font-lexend container mx-auto px-6 py-16 md:px-16 md:py-24">
      <div className="mb-12 flex justify-center md:mb-20">
        <h1 className="bg-theme-bg-300 text-theme-coral rounded-full px-8 py-3 text-center text-2xl font-bold shadow-sm md:px-12 md:py-2 md:text-4xl">
          Kenapa Caldis
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
        {menus.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center space-y-4 rounded-4xl px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-2 md:px-[47px]"
            style={{ backgroundColor: item.color + "33" }}
          >
            <div className="aspect-square h-max w-max rounded-2xl bg-white p-4 shadow-sm">
              {item.icon}
            </div>
            <h2 className="text-xl font-bold text-slate-800">{item.title}</h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
