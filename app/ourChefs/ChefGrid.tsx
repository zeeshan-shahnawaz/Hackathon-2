import React from "react";
import Image from "next/image";
import img1 from "@/public/chef1.png";
import img2 from "@/public/chef1.png";
import img3 from "@/public/chef1.png";
import img4 from "@/public/chef1.png";
import img5 from "@/public/chef1.png";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: img1 },
  { name: "Jorina Begum", role: "Chef", image: img2 },
  { name: "M. Mohammad", role: "Chef", image: img3 },
  { name: "Munna Kathy", role: "Chef", image: img4 },
  { name: "Tahmina Rumi", role: "Cook", image: img4 },
  { name: "Bisnu Devgon", role: "Chef", image: img5 },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      {" "}
      {/* Adding mt-20 for margin top */}
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
