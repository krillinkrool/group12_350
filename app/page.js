"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { Archivo_Narrow } from "next/font/google";
import {useState} from 'react';
import SearchPopup from "./components/Popups/SearchPopup";
import AccountPopup from "./components/Popups/AccountPopup";
import LikedPopup from "./components/Popups/LikedPopup";
import CartPopup from "./components/Popups/CartPopup";
import Link from "next/link";
import AboutPage from "./components/AboutPage"
import Footer from "./components/Footer";

const archivo_narrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
})


function Home() {
  const [searchPopup, setSearchPopup] = useState(false);
  const [accountPopup, setAccountPopup] = useState(false);
  const [likedPopup, setLikedPopup] = useState(false);
  const [cartPopup, setCartPopup] = useState(false);
  const handlerPopup = () => {
    setSearchPopup(!searchPopup);
  }
  const handlerAccount = () => {
    setAccountPopup(!accountPopup);
  }
  const handlerLiked = () => {
    setLikedPopup(!likedPopup);
  }
  const handlerCart = () => {
    setCartPopup(!cartPopup);
  }

  return (
    <div className="bg-[#191919]">
    <div className="bg-home_page bg-cover h-screen flex-col w-full">
      <div>
      <Navbar searchPopup={handlerPopup} accountPopup={handlerAccount} likedPopup={handlerLiked} cartPopup={handlerCart}/>
      {/* Search Popup */}
      <SearchPopup trigger={searchPopup} setTrigger={setSearchPopup} ></SearchPopup>
      {/* Account Popup */}
      <AccountPopup trigger={accountPopup} setTrigger={setAccountPopup}></AccountPopup>
       {/* Liked Popup */}
      <LikedPopup trigger={likedPopup} setTrigger={setLikedPopup}></LikedPopup>
       {/* Cart Popup */}
      <CartPopup trigger={cartPopup} setTrigger={setCartPopup}></CartPopup>

      
      </div>
      <div className="spacer h-[50px]"></div>
      <div className="mt-28 flex-col pb-36 justify-self-center items-center">
        <Image className="mx-auto"
          src="/images/home_page/home_logo.png"
          width={440}
          height={440}
          alt="An image of a skull" 
        />
        <div><h1 className={`${archivo_narrow.variable} text-black text-lg bolder font-medium text-center`}>FOR THE REBELLIOUS SOUL</h1></div>
        {/* <Link href="/screens/test"><h1 className="text-center text-white py-3 px-5 bg-black rounded-2xl">TEST BUTTON</h1></Link> */}

        </div>
       
    </div>
    <div id="about" className="bg-cod_gray">

      {/* Left Side Content Section */}
      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="w-[40%] bg-cover" style={{ backgroundImage: "url('/images/KIMMIE/photoshoot/img2.jpg')" }}>
          {/* Empty for the background image */}
        </div>

        {/* Right Side Content Section */}
        <div className="w-[60%] bg-cod_gray flex">
          {/* Right Side - Left Section */}
          <div className="w-[40%] flex flex-col justify-start p-10 pl-40">
            <Link className="cursor-pointer hover:fill-current hover:text-blue-600 content-center text-lg" href="/">
              <h1 className="text-8xl font-bold items-start text-white mb-4">KIM MIE CO.</h1>
            </Link>
          </div>

          {/* Right Side - Right Section */}
          <div className="w-[40%] flex flex-col items-start justify-start p-10">
            <h3 className="text-4xl items-left text-start leading-snug text-white mt-6">
              KIMMIE provides high-quality clothing to innovative individuals in a bold and creative environment while helping them feel empowered and giving them a sense of belonging to a community that celebrates individuality and creativity.
            </h3>
          </div>
        </div>
      </div>

      {/* About Page Content Section */}
      <div className="justify-self-center">
        <AboutPage />
      </div>

      <div className="spacer h-[350px]"></div>
  
        <Footer/>
      </div>
    </div>
  );
}

export default Home;