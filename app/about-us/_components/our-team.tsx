import LilisAndTutung from "@/components/lilis-and-tutung";
import Image from "next/image";
import React from "react";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Daffa",
      role: "UI/UX Designer",
      image: "/teams/daffa.webp",
    },
    {
      name: "Sulthon",
      role: "Front-end Developer",
      image: "/teams/sulthon.webp",
    },
  ];

  return (
    <section className="bg-theme-purple-300 font-lexend w-full overflow-hidden px-16 py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="relative flex w-full justify-center lg:w-1/3 lg:justify-end">
          <LilisAndTutung />
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="text-theme-pink-300 mb-8 text-center text-3xl font-bold md:text-[40px] lg:text-left">
            Belakang Layar
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-theme-bg-100 flex flex-col items-center rounded-2xl p-4 pb-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl bg-gray-200">
                  <Image
                    src={member.image}
                    alt={`Foto ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <h3 className="text-theme-black-300 mb-1 text-xl font-bold">
                  {member.name}
                </h3>
                <p className="text-theme-purple-300 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
