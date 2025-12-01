import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const menus = [
    {
      label: "Beranda",
      route: "/",
    },
    {
      label: "Permainan",
      route: "#",
      children: [
        { label: "Membaca", route: "/games/reading" },
        { label: "Menulis", route: "/games/writing" },
        { label: "Menghitung", route: "/games/counting" },
      ],
    },
    {
      label: "Tentang kami",
      route: "/about-us",
    },
    {
      label: "Apa itu Disleksia",
      route: "/disleksia",
    },
  ];

  return (
    <header className="bg-theme-purple-300 sticky top-6 z-50 mx-auto mb-10 flex w-max items-center justify-between gap-10 rounded-full px-6 py-3 shadow-xl lg:px-8">
      <Link href="/" className="group flex items-center gap-3">
        <div className="bg-theme-purple-400 flex h-10 w-10 items-center justify-center rounded-xl shadow-inner transition-transform group-hover:scale-105">
          <Image
            src="/maskots/caca.svg"
            alt="Logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <h1 className="text-theme-yellow-300 text-2xl font-bold tracking-wide">
          Caldis
        </h1>
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-2 lg:gap-6">
          {menus.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger className="hover:text-theme-yellow-300 h-auto bg-transparent text-sm font-medium text-white hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[150px] gap-2 p-3 md:w-[200px]">
                      {item.children.map((child, idx) => (
                        <li key={idx}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.route}
                              className="hover:bg-theme-bg-100 hover:text-theme-purple-400 focus:bg-accent focus:text-accent-foreground block rounded-md p-3 text-sm leading-none font-medium text-slate-700 no-underline transition-colors outline-none select-none"
                            >
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                // Menu Link Biasa
                <NavigationMenuLink asChild>
                  <Link
                    href={item.route}
                    className="hover:text-theme-yellow-300 text-base font-medium text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
