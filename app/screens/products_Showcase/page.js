"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// // Define ImageSlider component
// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Previous Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-5 bg-white rounded-full p-2 shadow-lg z-10"
//         aria-label="Previous Slide"
//       >
//         <Image
//           src="/icons/prev-arrow.svg"
//           alt="Previous"
//           width={20}
//           height={20}
//         />
//       </button>

//       {/* Current Image */}
//       <Image
//         src={slides[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         width={450}
//         height={450}
//         className="rounded-lg shadow-md"
//         priority
//       />

//       {/* Next Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-5 bg-white rounded-full p-2 shadow-lg z-10"
//         aria-label="Next Slide"
//       >
//         <Image src="/icons/next-arrow.svg" alt="Next" width={20} height={20} />
//       </button>
//     </div>
//   );
// };


export default function collectionPage() {
  const slides = [
    "/images/KIMME/photoshoot/img1.jpg",
    "/images/KIMME/photoshoot/img2.jpg",
    "/images/KIMME/photoshoot/img3.jpg",
  ];

  return (
    <div className="bg-navbar_white bg-home_page bg-cover bg-center bg-no-repeat min-h-screen text-black">
      {/* Navigation Bar */}
      <nav className="border border-black mx-14 p-navbar bg-navbar_white content-center rounded-2xl flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-extrabold ml-6 text-2xl">KIMMIE CO.</h1>

        {/* Links */}
        <div className="inline-flex space-x-12">
          <Link href="/screens/pre-order_page" className="cursor-pointer text-lg">
            SHIRTS
          </Link>
          <Link href="/screens/pre-order_page" className="cursor-pointer text-lg">
            HOODIES
          </Link>
          <Link href="/screens/pre-order_page" className="cursor-pointer text-lg">
            POPULAR
          </Link>
          <Link href="/screens/about_page" className="cursor-pointer text-lg">
            ABOUT
          </Link>
        </div>

        {/* Icons */}
        <div className="inline-flex space-x-4">
          <button className="cursor-pointer hover:text-blue-">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="cursor-pointer hover:text-blue-600">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="cursor-pointer hover:text-blue-600">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="cursor-pointer hover:text-blue-600">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </nav>

      {/* Image Slider */}
      <div className="mt-12 flex justify-center">
        <Carousel>
          {slides.map((s) => (
            <img src={s}/>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
