import { Search, ShoppingBag, User } from "lucide-react";
import { JSX } from "react";

const navItems: string[] = [
  "About Us",
  "Products",
  "Designers",
  "Showroom",
];

export default function Navbar(): JSX.Element {
  return (
    <div className="mx-10 my-2 border-b border-white/70">
      <div className="flex justify-between items-center py-6 text-white">
        
        {/* LEFT: LOGO */}
        <h1 className="text-2xl font-semibold cursor-pointer">
          Nordform
        </h1>

        {/* RIGHT: NAV + ICONS */}
        <div className="flex items-center gap-10">
          
          {/* NAVIGATION */}
          <div className="flex gap-8">
            {navItems.map((item: string, index: number) => (
              <p
                key={index}
                className="relative cursor-pointer group"
              >
                {item}

                {/* UNDERLINE ANIMATION */}
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
      </div>
    </div>
  );
}