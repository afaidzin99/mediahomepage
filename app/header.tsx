"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [navbarColor, setNavbarColor] = useState("bg-green-primary");

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setNavbarColor("bg-greenBrand");
      } else {
        setNavbarColor(
          "bg-green-primary sm:h-16 lg:h-20 lg:bg-black lg:bg-opacity-10 lg:backdrop-filter lg:backdrop-blur-lg lg:hover:bg-green-primary"
        );
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <header
      className={`flex items-center w-screen h-12 fixed top-0 z-50 ease-in-out transition-all duration-200 ${navbarColor}`}
    >
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <nav className="flex items-center">
          <Link href={"/"} className="font-bold text-white">
            Media Sawocangkring
          </Link>
        </nav>
      </div>
    </header>
  );
}
