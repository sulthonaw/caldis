import Image from "next/image";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    games: [
      { label: "Membaca", href: "#" },
      { label: "Menulis", href: "#" },
      { label: "Menghitung", href: "#" },
    ],
    info: [
      { label: "Apa itu disleksia?", href: "#" },
      { label: "Tentang Kami", href: "#" },
    ],
  };

  return (
    <footer className="bg-theme-pink-300 pt-16 pb-8 font-sans text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="bg-theme-purple-400 flex h-16 w-16 items-center justify-center rounded-2xl p-2 shadow-sm">
                <Image
                  src={"/maskots/caca.svg"}
                  width={40}
                  height={40}
                  alt="Logo Caldis"
                  className="object-contain"
                />
              </div>
              <span className="text-4xl font-bold tracking-wide">Caldis</span>
            </div>
            <p className="max-w-sm text-lg leading-relaxed font-medium">
              Media pembelajaran interaktif untuk masa depan yang lebih cerah.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-theme-purple-400 mb-6 text-xl font-bold">
              Permainan
            </h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.games.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-lg transition-colors hover:text-white/80 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-theme-purple-400 mb-6 text-xl font-bold">
              Informasi
            </h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.info.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-lg transition-colors hover:text-white/80 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-theme-purple-400 mb-6 text-xl font-bold">
              Hubungi Kami
            </h3>
            <div className="flex gap-4">
              {/* Instagram Button */}
              <Link
                href="#"
                className="text-theme-pink-300 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform hover:scale-105"
              >
                <Instagram className="h-7 w-7" />
              </Link>

              {/* Email Button */}
              <Link
                href="#"
                className="text-theme-pink-300 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform hover:scale-105"
              >
                <Mail className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/40 pt-8 text-center">
          <p className="text-sm font-medium text-white/90 md:text-base">
            © 2025 Caldis. Dibuat oleh Sulthon n Daffa
          </p>
        </div>
      </div>
    </footer>
  );
}
