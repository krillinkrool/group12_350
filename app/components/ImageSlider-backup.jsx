// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import image1 from "@/public/images/KIMMIE/photoshoot/img1.JPG";
// import image2 from "@/public/images/KIMMIE/photoshoot/img2.JPG";
// import image3 from "@/public/images/KIMMIE/photoshoot/img3.JPG";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Image data array
// const images = [
//   {
//     src: image1,
//   },
//   {
//     src: image2,
//   },
//   {
//     src: image3,
//   },
// ];

// export default function ImageSlider() {
//   // State to keep track of the current image index
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // State to determine if the image is being hovered over
//   const [isHovered, setIsHovered] = useState(false);

//   // Function to show the previous slide
//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   // Function to show the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // useEffect hook to handle automatic slide transition
//   useEffect(() => {
//     // Start interval for automatic slide change if not hovered
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 3000);

//       // Cleanup the interval on component unmount
//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [isHovered]);

//   // Handle mouse over event
//   const handleMouseOver = () => {
//     setIsHovered(true);
//   };

//   // Handle mouse leave event
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="relative mx-auto mt-4">
//       <div
//         className="relative h-[460px] mx-12 group hover:-translate-y-2"
//         onMouseOver={handleMouseOver}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Image
//           src={images[currentIndex].src}
//           alt={`Slider Image ${currentIndex + 1}`}
//           layout="fill"
//           objectFit="contain"
//           className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
//         />
//       </div>
//       <button
//         className="absolute left-96 top-1/2 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-navbar_white text-white p-2 group"
//         onClick={prevSlide}
//       >
//         <ChevronLeft className="text-cod_gray group-hover:text-white" />
//       </button>
//       <button
//         className="absolute right-96 top-1/2 rounded-x1 hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-navbar_white text-white p-2 group"
//         onClick={nextSlide}
//       >
//         <ChevronRight className="text-gray-400 group-hover:text-white" />
//       </button>
//       <div className="flex justify-center mt-4">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`h-1 w-10 mx-1 ${
//               index === currentIndex
//                 ? "bg-[#000] rounded-xl"
//                 : "bg-gray-300 rounded-xl"
//             } transition-all duration-500 ease-in-out`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
