import React from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="font-lexend min-h-screen w-full">
      <section className="bg-theme-bg-100 px-6 py-16 sm:px-10 md:px-14 lg:px-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 flex justify-center">
            <div className="bg-theme-bg-300 text-theme-coral relative rounded-full px-6 py-2 shadow-sm sm:px-10 sm:py-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl md:text-3xl">
                Mari Mengobrol
              </h2>
              <div className="border-t-theme-bg-300 absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-10 border-r-10 border-l-10 border-r-transparent border-l-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <ContactCard
                icon={<Mail className="text-theme-pink-300 h-6 w-6" />}
                title="Email"
                description="Kirimkan pertanyaan Anda kapan saja."
                detail="admin@caldis.id"
                bgColor="bg-theme-pink-300/10"
                shadowColor="var(--color-theme-pink-300)"
              />
              <ContactCard
                icon={
                  <MessageCircle className="text-theme-green-400 h-6 w-6" />
                }
                title="WhatsApp"
                description="Chat kami untuk respon yang lebih cepat."
                detail="+62 812 3456 7890"
                bgColor="bg-theme-green-300/20"
                shadowColor="var(--color-theme-green-300)"
              />
              <ContactCard
                icon={<MapPin className="h-6 w-6 text-orange-400" />}
                title="Lokasi"
                description="Kunjungi kantor operasional kami."
                detail="Malang, Jawa Timur, Indonesia"
                bgColor="bg-theme-yellow-300/20"
                shadowColor="var(--color-theme-yellow-300)"
              />
            </div>

            <div className="bg-theme-bg-100 border-theme-coral rounded-4xl border p-6 shadow-[8px_8px_0px_0px_var(--color-theme-coral)] sm:p-10">
              <form className="space-y-5">
                <div>
                  <label className="text-theme-black-300 mb-2 block text-sm font-bold">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="focus:border-theme-coral w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-4 py-3 outline-hidden transition-all focus:bg-white"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="text-theme-black-300 mb-2 block text-sm font-bold">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="focus:border-theme-coral w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-4 py-3 outline-hidden transition-all focus:bg-white"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="text-theme-black-300 mb-2 block text-sm font-bold">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="focus:border-theme-coral w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-4 py-3 outline-hidden transition-all focus:bg-white"
                    placeholder="Apa yang bisa kami bantu?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-theme-coral flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-4 font-bold text-white shadow-lg transition-transform active:scale-95"
                >
                  <Send className="h-5 w-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  description,
  detail,
  bgColor,
  shadowColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  bgColor: string;
  shadowColor: string;
}) {
  return (
    <div
      className={`${bgColor} flex items-start gap-5 rounded-3xl border border-black/5 p-6 transition-transform hover:-translate-y-1`}
      style={{ boxShadow: `6px 6px 0px 0px ${shadowColor}` }}
    >
      <div className="bg-theme-bg-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-theme-black-300 text-lg font-bold">{title}</h3>
        <p className="text-theme-black-300/70 mb-1 text-sm">{description}</p>
        <p className="text-theme-black-300 font-bold">{detail}</p>
      </div>
    </div>
  );
}
