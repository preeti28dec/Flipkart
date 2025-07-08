import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroBanner() {
  const sliderImages = [
    {
      url: "https://placehold.co/1200x350/8B5CF6/FFFFFF?text=Roundtrip+Booking+Offers!",
      alt: "Offer 1",
    },
    {
      url: "https://placehold.co/1200x350/3B82F6/FFFFFF?text=15%25+Off+on+Flights",
      alt: "Offer 2",
    },
    {
      url: "https://placehold.co/1200x350/F59E0B/FFFFFF?text=Sale+is+Live!",
      alt: "Offer 3",
    },
    {
      url: "https://placehold.co/1200x350/10B981/FFFFFF?text=New+Arrivals",
      alt: "Offer 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!sliderImages || sliderImages.length === 0) {
    return null;
  }

  return (
    <main className=" mx-6 my-4">
      <div className="h-56 md:h-[350px] w-full relative group">
        <div
          style={{ backgroundImage: `url(${sliderImages[currentIndex].url})` }}
          className="w-full h-full rounded-lg bg-center bg-cover duration-500"
        >
          {" "}
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FiChevronLeft onClick={goToPrevious} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FiChevronRight onClick={goToNext} size={30} />
        </div>
        {/* Dots */}
        <div className="flex justify-center py-2 absolute left-1/2 -translate-x-1/2">
          {sliderImages.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer p-1 ${
                currentIndex === slideIndex ? "text-white" : "text-gray-400"
              }`}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
