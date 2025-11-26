import Link from "next/link";
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
      route: "",
    },
    {
      label: "Permainan",
      route: "",
      children: [
        { label: "Membaca", route: "" },
        { label: "Menulis", route: "" },
        { label: "Menghitung", route: "" },
      ],
    },
    {
      label: "Apa itu Disleksia?",
      route: "",
    },
  ];

  return (
    <header className="mx-auto mb-10 flex max-w-[660px] items-center justify-between rounded-2xl bg-purple-500 px-10 py-3 shadow shadow-white">
      <h1 className="text-lg font-semibold text-yellow-400">Caldis</h1>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">
          {menus.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger className="flex items-center gap-1 bg-transparent text-base font-normal shadow-none hover:bg-transparent focus:bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3">
                      {item.children.map((child, idx) => (
                        <li key={idx}>
                          <NavigationMenuLink asChild>
                            <Link href={child.route} className="text-sm">
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link href={item.route} className="text-base">
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
