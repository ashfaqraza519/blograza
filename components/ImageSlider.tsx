"use client";

import Image from "next/image";
import { useState } from "react";

const sliderImages = [
  { src: "/slide1.jpg", alt: "Slide Cover" },
  { src: "/slide2.jpg", alt: "Slide Cover" },
  { src: "/slide3.jpg", alt: "Slide Cover" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="relative w-full max-w-8xl mx-auto mb-12">
      <div className="overflow-hidden rounded-2xl shadow-xl max-h-[600px]">
        <Image
          src={sliderImages[current].src}
          alt={sliderImages[current].alt}
          width={1200}
          height={600}
          className="w-full object-cover transition-all duration-700"
          priority
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-2 shadow hover:bg-white dark:hover:bg-black z-10"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-2 shadow hover:bg-white dark:hover:bg-black z-10"
        aria-label="Next slide"
      >
        &#8594;
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 rounded-full ${idx === current ? "bg-black dark:bg-white" : "bg-zinc-300 dark:bg-zinc-700"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
