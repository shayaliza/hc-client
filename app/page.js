"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const items = [
  {
    imageUrl: "/b1.jpg",
  },
  {
    imageUrl: "/b2.jpg",
  },
  {
    imageUrl: "/b3.jpg",
  },
  {
    imageUrl: "/b4.jpg",
  },
  {
    imageUrl: "/b5.jpg",
  },
  {
    imageUrl: "/b6.jpg",
  },
  {
    imageUrl: "/b7.jpg",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextItem = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextItem, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative ">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transform transition-transform duration-500 ${
            index === activeIndex ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-c2 h-64 m-4 p-4 rounded-lg shadow-md">
            <Image
              src={item.imageUrl}
              width={1000}
              height={600}
              alt="Picture of the author"
              className="mb-2 rounded-full"
            />
          </div>
        </div>
      ))}

      <button
        className="absolute top-60 left-10  text-gray-600 hover:text-gray-900  text-6xl"
        onClick={prevItem}
      >
        &#8249;
      </button>
      <button
        className="absolute top-60 right-10 text-6xl  text-gray-600 hover:text-gray-900"
        onClick={nextItem}
      >
        &#8250;
      </button>
      {/* <button
        className="absolute top-60 right-10 text-6xl transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
        onClick={nextItem}
      >
        &#8250;
      </button> */}
    </div>
  );
}
