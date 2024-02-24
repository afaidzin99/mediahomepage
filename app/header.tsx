"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center w-screen h-12 fixed top-0 z-50 bg-green-primary sm:h-16 lg:h-20 transition-colors ease-brand duration-250 lg:bg-black lg:bg-opacity-10 lg:backdrop-filter lg:backdrop-blur-lg lg:hover:bg-green-primary bg-greenBrand">
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
