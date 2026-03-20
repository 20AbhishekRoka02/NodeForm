import { JSX } from "react";
import Navbar from "./Navbar";

export default function PreFooter(): JSX.Element {
  return (
    <div className="relative w-auto h-screen overflow-hidden mx-10">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/PreFooter.jpg"
        alt="Header"
        className="absolute inset-0 w-full h-full object-center object-cover"
      />

      {/* DARK OVERLAY (optional but recommended) */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-black/50"></div>

      {/* NAVBAR (NOW INSIDE HEADER) */}
      {/* <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div> */}

      {/* HERO TEXT */}
      <div className="absolute inset-0 flex items-center justify-end px-20 z-10">
        <div className="max-w-xl text-right">
          <h1 className="text-[#fbf5e6] font-semibold leading-[1.1] tracking-tight 
               text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-right ">
            The Perfect Balance of Comfort
            <br />
            and Style
          </h1>
        </div>
      </div>

    </div>
  );
}