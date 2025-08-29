// src/components/Hero.tsx
import React from "react";
import { Carousel } from "flowbite-react";
import image1 from "@/assets/1-CN55GTT1.png";
import image2 from "@/assets/2-VJ4r_PO0.png";
import image3 from "@/assets/3-BvzhYT3C.png";
import image4 from "@/assets/4-BOjBM7re.png";

const Hero = () => {
  return (
    <div className="relative w-[100%] mb-8">
      <div className="h-90 w-full overflow-hidden  sm:h-104 xl:h-110 2xl:h-116">
        <Carousel
          slide={true}
          slideInterval={3000}
          indicators={true}
          leftControl={
            <div className="hidden sm:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-800/70 hover:bg-green-900/80 text-white p-2 rounded-full transition-colors z-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          }
          rightControl={
            <div className="hidden sm:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-800/70 hover:bg-green-900/80 text-white p-2 rounded-full transition-colors z-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          }
        >
          <div className="relative h-full">
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            {/* Green overlay with gradient */}
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-6xl sm:text-3xl font-bold mb-2">
                  Summer Collection 2025
                </h2>
                <p className="text-md sm:text-base mb-4">
                  Up to 50% off on selected items
                </p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors text-md sm:text-base">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            {/* Green overlay with gradient */}
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-6xl sm:text-3xl font-bold mb-2">
                  New Arrivals
                </h2>
                <p className="text-md sm:text-base mb-4">
                  Discover the latest trends
                </p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors text-md sm:text-base">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={image3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            {/* Green overlay with gradient */}
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-6xl sm:text-3xl font-bold mb-2">
                  Free Shipping
                </h2>
                <p className="text-md sm:text-base mb-4">
                  On all orders over $50
                </p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors text-md sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={image4}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            {/* Green overlay with gradient */}
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-6xl sm:text-3xl font-bold mb-2">
                  Limited Time Offer
                </h2>
                <p className="text-md sm:text-base mb-4">
                  Don't miss out on our exclusive deals
                </p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors text-md sm:text-base">
                  Get Offer
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
