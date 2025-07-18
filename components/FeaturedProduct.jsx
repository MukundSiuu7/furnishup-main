import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: assets.elegant,
    title: "Elegant",
    description: "A modern, luxurious living room.",
  },
  {
    id: 2,
    image: assets.living_room,
    title: "Stylish",
    description: "A beautifully curated living room that exudes warmth, charm, and timeless design.",
  },
  {
    id: 3,
    image: assets.hall,
    title: "Modern",
    description: "A chic and contemporary living space that blends modern elegance with cozy comfort.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 bg-orange-50 p-4 text-black space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <Link href="/all-products" passHref> 
                <button className="flex items-center gap-1.5 bg-orange-600 text-black px-4 py-2 rounded">
                  Buy now 
                  <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
                </button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
