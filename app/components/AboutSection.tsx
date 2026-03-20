import { JSX } from "react";

export default function AboutSection(): JSX.Element {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24 text-black">
      
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        
        {/* LEFT: TITLE */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#583016]">
            A Brand Born from Passion for Design
          </h2>
        </div>

        {/* RIGHT: DESCRIPTION */}
        <div className="md:w-1/2 text-[#583016] md:text-xl text-lg leading-relaxed space-y-4">
          
          <p>
            At Nordform, we believe in the power of simplicity and functionality,
            inspired by the timeless elegance of Scandinavian design. Our furniture
            is crafted with the finest materials, offering a blend of minimalism
            and comfort to elevate every space.
          </p>

          <p>
            With a focus on clean lines, natural textures, and practical design,
            we create pieces that not only look beautiful but also stand the test
            of time.
          </p>

          <p>
            Rooted in the values of quality, sustainability, and innovation,
            Nordform brings the essence of Nordic living to your home.
          </p>

          <p>
            Whether you're furnishing a cozy apartment or a spacious living room,
            our carefully curated collection will transform your space into a
            sanctuary of style and serenity.
          </p>

        </div>
      </div>

    </section>
  );
}