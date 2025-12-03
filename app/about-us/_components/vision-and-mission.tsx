import { Lightbulb, Target, CheckCircle2 } from "lucide-react";

export default function VisionAndMission() {
  return (
    <section className="bg-theme-bg-100 font-lexend w-full px-6 py-16 sm:px-10 md:px-14 lg:px-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex justify-center sm:mb-16">
          <div className="bg-theme-bg-300 text-theme-coral relative rounded-full px-6 py-2 shadow-sm sm:px-10 sm:py-3">
            <h1 className="text-center text-xl font-bold sm:text-2xl md:text-3xl">
              Visi dan Misi
            </h1>
            <div className="border-t-theme-bg-300 absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-[10px] border-r-10 border-l-10 border-r-transparent border-l-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="bg-theme-green-300/20 border-theme-green-300/20 rounded-4xl border p-6 shadow-[6px_6px_0px_0px_var(--color-theme-green-300)] sm:p-8 sm:shadow-[8px_8px_0px_0px_var(--color-theme-green-300)] lg:p-10">
            <div className="border-theme-black-300/10 mb-4 flex items-center gap-3 border-b pb-3 sm:mb-6 sm:pb-4">
              <Lightbulb
                className="text-theme-green-400 h-7 w-7 sm:h-8 sm:w-8"
                strokeWidth={2.5}
              />
              <h2 className="text-theme-green-400 text-xl font-bold sm:text-2xl">
                Visi
              </h2>
            </div>
            <p className="text-theme-black-300 text-sm leading-relaxed sm:text-base lg:text-lg">
              Menciptakan platform calistung yang inklusif dan ramah anak,
              khususnya bagi anak dengan disleksia. Kami ingin menghadirkan
              pengalaman belajar yang menyenangkan, bebas tekanan, serta dapat
              membantu setiap anak berkembang dengan ritme mereka sendiri.
            </p>
          </div>

          <div className="bg-theme-yellow-300/20 border-theme-yellow-300/20 rounded-4xl border p-6 shadow-[6px_6px_0px_0px_var(--color-theme-yellow-300)] sm:p-8 sm:shadow-[8px_8px_0px_0px_var(--color-theme-yellow-300)] lg:p-10">
            <div className="border-theme-black-300/10 mb-4 flex items-center gap-3 border-b pb-3 sm:mb-6 sm:pb-4">
              <Target
                className="h-7 w-7 text-orange-400 sm:h-8 sm:w-8"
                strokeWidth={2.5}
              />
              <h2 className="text-xl font-bold text-orange-400 sm:text-2xl">
                Misi
              </h2>
            </div>
            <ul className="space-y-3 sm:space-y-4">
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
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-400 sm:h-6 sm:w-6" />
      <span className="text-theme-black-300 text-sm leading-relaxed sm:text-base lg:text-lg">
        {text}
      </span>
    </li>
  );
}
