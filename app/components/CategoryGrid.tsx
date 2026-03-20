import { JSX } from "react";

type Category = {
  id: number;
  title: string;
  image: string;
};

const categories: Category[] = [
  { id: 1, title: "Sofas", image: "/categories/sofa.png" },
  { id: 2, title: "Seatings", image: "/categories/seating.png" },
  { id: 3, title: "Tables", image: "/categories/table.png" },
  { id: 4, title: "Rugs", image: "/categories/rug.png" },
  { id: 5, title: "Bedroom", image: "/categories/bed.png" },
  { id: 6, title: "Storage", image: "/categories/storage.png" },
];

export default function CategoryGrid(): JSX.Element {
  return (
    <section className="px-0 md:px-0 lg:px-0 py-16 md:py-24 bg-white">
      
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 border border-gray-300">
        
        {categories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-300 flex flex-col items-center justify-center p-8 cursor-pointer group"
          >
            
            {/* IMAGE */}
            <img
              src={category.image}
              alt={category.title}
              className="h-48
               object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
            />

            {/* TITLE */}
            <h3 className="text-lg font-medium text-gray-800 group-hover:underline">
              {category.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}