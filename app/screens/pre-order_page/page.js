import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-navbar_white bg-preorder_page bg-span bg-center bg-no-repeat min-h-screen flex flex-col">
      
      <div className="bg-transparent py-10">
        <p className="invisible">Space</p>
      </div>

   
      <div className="relative flex flex-1 items-start px-6">
        {/* Left Image */}
        <div className="absolute left-[-10vw] top-[-5vh] lg:left-[-6vw] lg:top-[-10vh]">
          <Image 
            src="/images/KIMMIE/logo variations/kimmie logo.png"
            width={915}
            height={915}
            alt="Placeholder"
          />
          <h1 className="text-left font-medium mt-4"></h1>
        </div>

        {/* Right Content */}

        
        <div className="absolute right-[200vw] top-[10vh] lg:right-[36vw] lg:top-[10vh] flex flex-col items-end space-y-6">
          
        <ul className="absolute top-[-15vw]">
        <Image 
            src="/images/KIMMIE/logo variations/kimmie logomark.png"
            width={500}
            height={500}
            alt="PLACEHOLDER"
          />
          
      </ul>
          <button className="pre-order-button">PRE-ORDER</button>
          <button className="pre-order-button">TERMS OF SERVICES</button>
          <button className="pre-order-button">NEWSLETTER</button>
          <button className="pre-order-button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}