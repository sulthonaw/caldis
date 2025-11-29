import { Gamepad, Type, Volume2 } from "lucide-react";

export default function WhyCaldis() {
  const menus = [
    {
      icon: <Type color="#FFD002" />,
      title: "Font Lexend",
      description:
        "Menggunakan font yang terbukti secara ilmiah meningkatkan kelancaran membaca bagi penderita disleksia.",
      color: "#FFD002",
    },
    {
      icon: <Volume2 color="#AFEE01" />,
      title: "Bantuan Suara",
      description:
        "Setiap instruksi dan materi dilengkapi dengan audio (Text-to-Speech) untuk membantu pemahaman.",
      color: "#AFEE01",
    },
    {
      icon: <Gamepad color="#FB7768" />,
      title: "Gamifikasi",
      description:
        "Belajar tidak membosankan dengan sistem reward, konfeti, dan animasi yang ceria.",
      color: "#FB7768",
    },
  ];

  return (
    <section className="container mx-auto px-16 py-24">
      <h1 className="bg-theme-bg-300 text-theme-coral mx-auto mb-20 w-max rounded-full px-12 py-2 text-center text-4xl font-bold">
        Kenapa Caldis
      </h1>
      <div className="grid grid-cols-3 gap-7">
        {menus.map((item, index) => (
          <article
            key={index}
            className="space-y-4 rounded-2xl px-[47px] py-8 text-center"
            style={{ backgroundColor: item.color + 33 }}
          >
            <div className="mx-auto aspect-square h-max w-max rounded-xl bg-white p-2.5">
              {item.icon}
            </div>
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p className="text-slate-500">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
