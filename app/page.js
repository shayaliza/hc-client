"use client";
import React, { useState, useEffect } from "react";

// const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
const items = [
  {
    text: "Item 1",
    imageUrl: "https://dummyimage.com/1000x600/000/fff",
  },
  {
    text: "Item 2",
    imageUrl: "https://dummyimage.com/1000x600/000/fff",
  },
  {
    text: "Item 3",
    imageUrl: "https://dummyimage.com/1000x600/000/fff",
  },
  {
    text: "Item 4",
    imageUrl: "https://dummyimage.com/1000x600/000/fff",
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
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transform transition-transform duration-500 ${
            index === activeIndex ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-c2 h-64 m-4 p-4 rounded-lg shadow-md">
            <img
              src={item.imageUrl}
              alt={item.text}
              className="mb-2 rounded-full"
            />
            {item.text}
          </div>
        </div>
      ))}

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
        onClick={prevItem}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
        onClick={nextItem}
      >
        &#8250;
      </button>
    </div>
  );
}
