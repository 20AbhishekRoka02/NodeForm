"use client";

import { JSX, useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const navItems: string[] = [
  "About Us",
  "Products",
  "Designers",
  "Showroom",
];

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mx-6 md:mx-10 my-4 md:my-6 border-b border-white/70">
      <div className="flex justify-between items-center py-6 md:py-10 text-white">
        
        {/* LOGO */}
        <h1 className="text-xl md:text-3xl font-semibold cursor-pointer">
          Nordform
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          
          {/* NAV LINKS */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <p key={item} className="relative cursor-pointer group">
                {item}
                <span className="absolute left-0 -bottom-1 h-[1] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
            ))}
          </div>

          {/* ICONS */}
          <div className="flex gap-6">
            <Search className="cursor-pointer" />
            <ShoppingBag className="cursor-pointer" />
            <User className="cursor-pointer" />
          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-4">
          <ShoppingBag className="cursor-pointer" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN WITH SMOOTH ANIMATION */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 pb-6 text-white">
          
          {navItems.map((item) => (
            <p key={item} className="cursor-pointer">
              {item}
            </p>
          ))}

          <div className="flex gap-6">
            <Search className="cursor-pointer" />
            <User className="cursor-pointer" />
          </div>

        </div>
      </div>
    </div>
  );
}