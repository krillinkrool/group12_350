"use client"
import { useState } from "react";
import Link from "next/link"
import Footer from "../../components/Footer";

export default function Home() {

  const [email, setEmail] = useState(""); 

  const handleButtonClick = () => {
    setEmail("");
  };

    return (
      <div className="text-white min-h-screen flex flex-col justify-between">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center py-80 bg-newsletter_page text-black">
          <p className="uppercase font-bold text-sm tracking-widest w-[750px] text-start">
            Be updated to new Kimmie release
          </p> {/* Match width of input field */}
          <h1 className="text-4xl font-bold mb-4 w-[750px]  text-start">NEWSLETTER</h1> {/* Match width of input field */}
          <div className="flex">
            <input
              value={email}
              onChange={ e => setEmail(e.target.value)}
              type="email"
              placeholder="input e-mail address"
              className="px-4 py-4 border border-gray-400 rounded-l-md w-[700px] focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
           <button onClick={handleButtonClick}
  type="email" className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-600 transition-opacity duration-300 hover:opacity-80">
  →  
</button>
          </div>
        </div>
  
        <Footer/>
      </div>
    );
  }
  
  