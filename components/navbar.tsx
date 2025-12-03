"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  const menus = [
    { label: "Beranda", route: "/" },
    {
      label: "Permainan",
      route: "#",
      children: [
        { label: "Membaca", route: "/games/read" },
        { label: "Menulis", route: "/games/write" },
        { label: "Menghitung", route: "/games/count" },
      ],
    },
    { label: "Tentang kami", route: "/about-us" },
    { label: "Apa itu Disleksia?", route: "/disleksia" },
  ];

  return (
    <>
      <header className="bg-theme-purple-300 sticky top-4 z-50 mx-auto mb-10 flex w-[90%] max-w-5xl items-center justify-between gap-10 rounded-full px-5 py-3 shadow-xl transition-all md:top-6 md:w-max lg:px-8">
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
          <h1 className="text-theme-yellow-300 text-xl font-bold tracking-wide md:text-2xl">
            Caldis
          </h1>
        </Link>

        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menus.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="hover:text-theme-yellow-300 h-auto bg-transparent text-sm font-medium text-white hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-3">
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
        </div>

        <button
          className="hover:text-theme-yellow-300 text-white lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-8 w-8" />
        </button>
      </header>

      <div
        className={cn(
          "bg-theme-purple-400 fixed inset-0 z-[60] flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-theme-purple-300 flex h-10 w-10 items-center justify-center rounded-xl shadow-inner">
              <Image
                src="/maskots/caca.svg"
                alt="Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <h1 className="text-theme-yellow-300 text-xl font-bold tracking-wide">
              Caldis
            </h1>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-theme-yellow-300 text-white"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-6 px-8 text-lg font-medium text-white">
          {menus.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsGameOpen(!isGameOpen)}
                    className="hover:text-theme-yellow-300 flex w-full items-center justify-between text-left"
                  >
                    {item.label}
                    {isGameOpen ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  <div
                    className={cn(
                      "border-theme-yellow-300/30 mt-2 flex flex-col gap-4 overflow-hidden border-l-2 pl-4 transition-all duration-300",
                      isGameOpen
                        ? "mt-4 max-h-40 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.route}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-theme-yellow-300 text-base text-white/80"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.route}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-theme-yellow-300 block"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
