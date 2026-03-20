import { JSX } from "react";
import Image from "next/image";

export default function MorePerspectives(): JSX.Element {
  return (
    
    // <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-[#f5f3ef]">

    //   {/* TITLE */}
    //   <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12">
    //     More perspectives
    //   </h2>

    //   {/* GRID */}
    //   <div className="grid md:grid-cols-3 gap-6">

    //     {/* LEFT CARD */}
    //     <div className="relative bg-[#cfd8cc] flex flex-col justify-between h-full min-h-[520]">

    //       {/* TEXT */}
    //       <div className="p-6">
    //         <h3 className="text-xl font-semibold mb-4">
    //           Our Sustainable Vision
    //         </h3>
    //         <p className="text-gray-700 text-sm leading-relaxed">
    //           At Nordform, we are committed to making thoughtful decisions that
    //           prioritize the wellbeing of people and the planet. From sourcing
    //           eco-conscious materials to ensuring responsible craftsmanship,
    //           sustainability is at the heart of everything we do.
    //         </p>
    //       </div>

    //       {/* IMAGE (BOTTOM RIGHT STICKED) */}
    //       <div>
    //         <img
    //           src="/perspectives/sofa.png"
    //           alt="Sofa"
    //           className="absolute bottom-0 right-0 w-3/4 object-contain"
    //         />

    //       </div>
    //     </div>

    //     {/* MIDDLE CARD */}
    //     <div className=" bg-[#efe3b5] flex flex-col justify-start h-full min-h-[520] md:mt-0 md:mb-0">

    //       {/* IMAGE (TOP STICKED) */}
    //       <div className="top-0 left-0 w-full h-auto">
    //         <img
    //           src="/perspectives/elegance.png"
    //           alt="Elegance"
    //           className="w-full h-auto object-contain"
    //         />
    //       </div>

    //       {/* TEXT (BOTTOM) */}
    //       <div className="relative z-10 p-6 mt-auto">
    //         <h3 className="text-lg font-semibold mb-2">
    //           Looking for Timeless Elegance?
    //         </h3>
    //         <p className="text-gray-700 text-sm leading-relaxed">
    //           Explore our full range of furniture, crafted to bring beauty and
    //           functionality to any space.
    //         </p>
    //       </div>
    //     </div>

    //     {/* RIGHT CARD */}
    //     <div className=" bg-[#e7a193] flex flex-col justify-between h-full min-h-[520]">

    //       {/* TEXT */}
    //       <div className="p-6">
    //         <h3 className="text-xl font-semibold mb-4">
    //           Spare Parts
    //         </h3>
    //         <p className="text-gray-800 text-sm leading-relaxed">
    //           At Nordform, we believe in the longevity of design. That's why we
    //           offer spare parts for selected items to ensure your furniture
    //           remains functional and timeless. For assistance or purchases,
    //           reach out to us at customercare@nordform.com. Please note: Buyer
    //           assembly limits warranty to components only.
    //         </p>
    //       </div>

    //       {/* IMAGE (BOTTOM RIGHT STICKED) */}
    //       <div className="relative">
    //         <img
    //           src="/perspectives/parts.png"
    //           alt="Spare Parts"
    //           className="absolute bottom-0 right-0 h-2/5 object-contain"
    //         />

    //       </div>
    //     </div>

    //   </div>
    // </section>
    <section className="h-screen mx-10">
      <div className="h-2/12">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-0 text-[#583016]">More perspectives</h2>
      </div>
      <div className="w-full flex flex-wrap justify-start space-x-8 h-4/5">
        {/* Card 1 */}
        <div className="w-[512] h-screen bg-[#afba9b] min-h-[512] flex flex-col justify-between space-y-10 my-10 lg:my-0">
          {/* Title and paragraph */}
          <div className="mt-4 p-6">
            <h3 className="md:text-3xl text-2xl text-[#583016] font-semibold mb-6 w-2/4">Our Sustainable Vision</h3>
            <p className="text-[#583016] md:text-lg text-base leading-relaxed">At Nordform, we are committed to making thoughtful decisions that
              prioritize the wellbeing of people and the planet. From sourcing
              eco-conscious materials to ensuring responsible craftsmanship,
              sustainability is at the heart of everything we do.</p>
          </div>
          {/* image */}
          <div className="flex justify-end overflow-hidden">
            <Image
              src={"/perspectives/sofa.png"}
              width={100}
              height={100}
              alt={"alt"}
              className="w-11/12"
            />
          </div>
        </div>
        {/* Card 1 ends */}

        {/* Card 2 */}
        <div className="w-[512] h-screen relative lg:-top-16 bg-[#ffeebb] space-y-5 my-10 lg:my-0 ">

          {/* image */}
          <div>
            <Image
              src={"/perspectives/elegance.png"}
              width={100}
              height={100}
              alt={"alt"}
              className="w-full"
            />
          </div>
          {/* Title and paragraph */}
          <div className="px-6">
            <h3 className="md:text-3xl text-2xl text-[#583016] font-semibold mb-2 w-3/4">
              Looking for Timeless Elegance?
            </h3>
            <p className="text-[#583016] md:text-lg text-base leading-relaxed">
              Explore our full range of furniture, crafted to bring beauty and
              functionality to any space.
            </p>
          </div>

        </div>
        {/* Card 2 ends */}

        {/* Card 3 */}
        <div className="w-[512] bg-[#f1a292] h-screen min-h-[512] flex flex-col justify-between space-y-10 my-10 2xl:my-0">
          {/* Title and paragraph */}
          <div className="mt-4 p-6">
            <h3 className="md:text-3xl text-2xl text-[#583016] font-semibold mb-4">Spare Parts</h3>
            <p className="text-[#583016] md:text-lg text-base leading-relaxed">At Nordform, we are committed to making thoughtful decisions that
              At Nordform, we believe in the longevity of design. That's why we
              offer spare parts for selected items to ensure your furniture
              remains functional and timeless. For assistance or purchases,
              reach out to us at customercare@nordform.com. Please note: Buyer
              assembly limits warranty to components only.</p>
          </div>
          {/* image */}
          <div className="flex justify-end overflow-hidden">
            <Image
              src={"/perspectives/parts.png"}
              width={100}
              height={100}
              alt={"alt"}
              className="w-11/12"
            />
          </div>
        </div>
        {/* Card 3 ends */}



      </div>
    </section>
  );
}