import { JSX } from "react";
import Image from "next/image";

export default function MorePerspectives(): JSX.Element {
  return (
    <section className="py-16 mx-10">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-0 text-[#583016]">More perspectives</h2>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 h-4/5 py-16">
        {/* Card 1 */}
        <div className="w-full md:w-[512] pt-6 bg-[#afba9b] min-h-[512] flex flex-col justify-between space-y-10 my-10 lg:my-0">
          {/* Title and paragraph */}
          <div className="mt-4 p-6">
            <h3 className="md:text-3xl text-2xl text-[#583016] font-semibold mb-6 w-3/4">Our Sustainable Vision</h3>
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
        <div className="w-full md:w-[512] pb-16 relative lg:-top-16 bg-[#ffeebb] space-y-5 my-10 lg:my-0 ">

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
        <div className="w-full md:w-[512] bg-[#f1a292] pt-6 min-h-[512] flex flex-col justify-between space-y-10  2xl:my-0">
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