import { Lightbulb, Target, CheckCircle2 } from "lucide-react";

export default function VisionAndMission() {
  return (
    <section className="bg-theme-bg-100 font-lexend w-full px-16 py-24">
      <div className="container mx-auto">
        <div className="mb-16 flex justify-center">
          <div className="bg-theme-bg-300 text-theme-coral relative rounded-full px-10 py-3 shadow-sm">
            <h1 className="text-center text-2xl font-bold md:text-3xl">
              Visi dan Misi
            </h1>
            <div className="border-t-theme-bg-300 absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-[10px] border-r-10 border-l-10 border-r-transparent border-l-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="bg-theme-green-300/20 border-theme-green-300/20 rounded-4xl border p-8 shadow-[8px_8px_0px_0px_var(--color-theme-green-300)] lg:p-10">
            <div className="border-theme-black-300/10 mb-6 flex items-center gap-3 border-b pb-4">
              <Lightbulb
                className="text-theme-green-400 h-8 w-8"
                strokeWidth={2.5}
              />
              <h2 className="text-theme-green-400 text-2xl font-bold">Visi</h2>
            </div>
            <p className="text-theme-black-300 text-base leading-relaxed lg:text-lg">
              Menciptakan platform calistung yang inklusif dan ramah anak,
              khususnya bagi anak dengan disleksia. Kami ingin menghadirkan
              pengalaman belajar yang menyenangkan, bebas tekanan, serta dapat
              membantu setiap anak berkembang dengan ritme mereka sendiri.
            </p>
          </div>

          <div className="bg-theme-yellow-300/20 border-theme-yellow-300/20 rounded-4xl border p-8 shadow-[8px_8px_0px_0px_var(--color-theme-yellow-300)] lg:p-10">
            <div className="border-theme-black-300/10 mb-6 flex items-center gap-3 border-b pb-4">
              <Target className="h-8 w-8 text-orange-400" strokeWidth={2.5} />
              <h2 className="text-2xl font-bold text-orange-400">Misi</h2>
            </div>
            <ul className="space-y-4">
              <MissionItem text="Menyediakan pembelajaran calistung yang mudah diakses, ramah disleksia, dan mendukung berbagai cara belajar anak." />
              <MissionItem text="Menggunakan teknologi digital dengan metode visual, audio, dan permainan interaktif agar belajar terasa menyenangkan." />
              <MissionItem text="Menciptakan lingkungan yang membantu meningkatkan kepercayaan diri." />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-orange-400" />
      <span className="text-theme-black-300 text-base leading-relaxed lg:text-lg">
        {text}
      </span>
    </li>
  );
}
