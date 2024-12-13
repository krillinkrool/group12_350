"use client";

import React, { useRef, useEffect, useCallback } from "react";

export default function AboutPage() {
  const ref = useRef(null);

  const totalFrames = 393; // Total number of video frames
  const autoplaySpeed = 30; // Speed of autoplay in milliseconds

  // Render the current frame
  const renderFrame = useCallback((frameNumber) => {
    const img = new Image();
    img.src = `/images/KIMMIE/promo video/${frameNumber}.webp`;
    img.onload = () => {
      const canvas = ref.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image
      }
    };
  }, []);

  // Autoplay frames
  useEffect(() => {
    let frameNumber = 1;
    const playFrames = () => {
      renderFrame(frameNumber);
      frameNumber = (frameNumber % totalFrames) + 1; // Loop the frames
      setTimeout(playFrames, autoplaySpeed);
    };
    playFrames(); // Start autoplay
  }, [renderFrame]);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Half: Video Section */}
      <div className="flex-grow flex items-center py-5 justify-center relative bg-black">
        {/* Video Canvas */}
        <canvas
          className="h-[1080] w-[1960px] border-none outline-none" // Removed border and outline
          width={1920} // Original canvas resolution
          height={1080} // Original canvas resolution
          ref={ref}
          style={{ border: "none", margin: 0, padding: 0, outline: "none" }} // Ensure no border, margin, padding, or outline
        />
      </div>

      {/* Bottom Half: Background Image Section */}
      <div
        className="h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/KIMMIE/background/BG.png)",
        }}
      />
    </div>
  );
}


