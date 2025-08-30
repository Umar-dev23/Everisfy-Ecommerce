// src/components/Hero.tsx
import React from "react";
import { Carousel } from "flowbite-react";
import image1 from "@/assets/1-CN55GTT1.png";
import image2 from "@/assets/2-VJ4r_PO0.png";
import image3 from "@/assets/3-BvzhYT3C.png";
import image4 from "@/assets/4-BOjBM7re.png";

const Hero = () => {
  return (
    <div className="relative w-full mb-4 md:mb-8">
      <div className="w-full sm:w-[90%] aspect-[16/9] sm:aspect-[21/9] mx-auto overflow-hidden rounded-lg">
        <Carousel
          slide={true}
          slideInterval={3000}
          indicators={true}
          leftControl={
            <div className="flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-800/70 hover:bg-green-900/80 text-white p-1 sm:p-2 rounded-full transition-colors z-10">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
            <div className="flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-800/70 hover:bg-green-900/80 text-white p-1 sm:p-2 rounded-full transition-colors z-10">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
              alt="Summer Collection 2025"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center p-4">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                  Summer Collection 2025
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  Up to 50% off on selected items
                </p>
                <a
                  href="#productsSection"
                  className="inline-block bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base md:text-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={image2}
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center p-4">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                  New Arrivals
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  Discover the latest trends
                </p>
                <button className="bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base md:text-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={image3}
              alt="Free Shipping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center p-4">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                  Free Shipping
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  On all orders over $50
                </p>
                <button className="bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={image4}
              alt="Limited Time Offer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center p-4">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                  Limited Time Offer
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  Don't miss out on our exclusive deals
                </p>
                <button className="bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base md:text-lg">
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
