// src/components/AutoScrollingSlider.js
import React, { useState, useEffect } from "react";

const AutoScrollingSlider = () => {
  const images = [
    "https://via.placeholder.com/1600x900/FF5733",
    "https://via.placeholder.com/1600x900/33FF57",
    "https://via.placeholder.com/1600x900/3357FF",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-4/5 h-96 overflow-hidden rounded-lg mb-4">
      {/* Background Slider */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Sticky Text */}
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
          Welcome to CampusConnect 
          </h1>
          <p className="mt-4 text-lg text-white md:text-xl">
          Bridging the gap between students and alumni for networking and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollingSlider;
