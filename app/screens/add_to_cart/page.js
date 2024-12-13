"use client"


import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useState} from "react";
import SearchPopup from "./../../components/Popups/SearchPopup";
import AccountPopup from "./../../components/Popups/AccountPopup";
import LikedPopup from "./../../components/Popups/LikedPopup";
import CartPopup from "./../../components/Popups/CartPopup";




export default function Add_To_Cart() {
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
    <div className="bg-spring_wood bg-home_page bg-cover bg-fixed bg-center bg-no-repeat min-h-screen text-black">
      <Navbar searchPopup={handlerPopup} accountPopup={handlerAccount} likedPopup={handlerLiked} cartPopup={handlerCart}/>
      {/* Search Popup */}
      <SearchPopup trigger={searchPopup} setTrigger={setSearchPopup}></SearchPopup>
      {/* Account Popup */}
      <AccountPopup trigger={accountPopup} setTrigger={setAccountPopup}></AccountPopup>
       {/* Liked Popup */}
      <LikedPopup trigger={likedPopup} setTrigger={setLikedPopup}></LikedPopup>
       {/* Cart Popup */}
      <CartPopup trigger={cartPopup} setTrigger={setCartPopup}></CartPopup>
      {/* NAVBAR END */}

      <div className="flex-col">
        <div className="border border-black mx-12 mt-32 pt-6 pb-3 rounded-xl">
          <h1 className="mt-8 mb-5 ml-12 font-extrabold text-4xl">KIMMIE CHECKOUT</h1>
          <div className="flex-col justify-center">
          {/* ROW */}
          <div className="flex-row inline-flex">
          {/* LEFT SIDE */}
          <div className="flex-col ml-12">
          {/* ITEM 1 */}
          <div className="px-1 bg-[#8C8A87] rounded-2xl py-1 border-2 border-black">
            <div className="flex-row inline-flex">
              <Image className="ml-3" src="/images/KIMMIE/products/gahodhoodie.png" alt="" width={235} height={235} />
              <div className="content-center ml-4">
                <h1 style={{fontWeight: 1000}} className="text-[27px]">gahod<br></br>kimmie</h1>
                <h1 className="font-extrabold text-[26px] leading-4">2500Php</h1>
                <h1 className="text-[24px] font-bold leading-6">pullover hoodie</h1>
              </div>
            </div>
          </div>
          {/* ITEM2 */}
          <div className="px-1 bg-[#8C8A87] rounded-2xl py-1 border-2 border-black mt-4">
            <div className="flex-row inline-flex">
              <Image className="ml-3" src="/images/KIMMIE/products/fairy kimmie.png" alt="" width={235} height={235} />
              <div className="content-center ml-4">
                <h1 style={{fontWeight: 1000}} className="text-[27px]">fairy<br></br>kimmie</h1>
                <h1 className="font-extrabold text-[27px] leading-4">1500Php</h1>
                <h1 className="text-[24px] font-bold leading-6">oversize tee</h1>
              </div>
            </div>
          </div>
          {/* ITEMS END */}



          </div>
          {/* RIGHT SIDE */}
        <div className="flex-col ml-48 border-2 border-black rounded-lg px-5 py-10">
          <h1 className="text-3xl font-bold font-archivo mb-11">Order Summary</h1>
          <div className="space-y-3">
              <div className="flex-row inline-flex space-x-72 justify-end">
                <h3 className =" font-archivo_narrow  text-2xl font-semibold">Subtotal</h3>
                <h3 className ="text-2xl font-extrabold">7500 Php</h3>
              </div><br></br>
              <div className="flex-row inline-flex space-x-72 justify-end">
                <h3 className =" font-archivo_narrow  text-2xl font-bold">Shipping</h3>
                <h3 className =" text-2xl font-extrabold">120 Php</h3>
              </div><br></br>
              <div className="flex-row inline-flex space-x-80 justify-end">
                <h3 className =" font-archivo_narrow  text-2xl font-bold">Total</h3>
                <h3 className =" text-3xl font-extrabold">7620 Php</h3>
              </div><br></br>
            </div>
            <button className="px-1 bg-cod_gray text-spring_wood w-full rounded-lg py-4 font-bold font-archivo text-2xl mt-48">PROCEED TO CHECKOUT</button>
          </div>

          </div>
          <div className="spacer h-[60px]"></div>
        </div>
        </div>
      </div>
    



      {/* FOOTER */}
      <div className="spacer h-[120px]"></div>
      <footer className="bg-black bg-opacity-90 py-24 px-16">
          <div className="grid grid-cols-3 gap-96">
            {/* Left Column */}
            <div>
  <h2 className="font-bold text-5xl mb-4 text-white">KIMMIE CO.</h2>
  <ul className="text-sm text-white space-y-2">
    <li>Privacy Policy</li>
    <li>Kimmie™ Clothing</li>
    <li>All rights reserved, 2024</li>
  </ul>
  <div className="flex space-x-4 mt-4">
  <a href="https://www.instagram.com/kimmie.clothing__/" aria-label="Find us on Instagram" target="_blank"
            rel="noopener">
            <svg className="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                    fill="currentColor"></path>
                <path
                    d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a aria-label="Find us on Facebook" target="_blank"
            rel="noopener">
            <svg className="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a  aria-label="Find us on Twitter" target="_blank" rel="noopener">
            <svg className="h-10 w-10 text-white" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1 39.5c18.1 0 28.02-15 28.02-28.02 0-.42-.01-.85-.03-1.27A20 20 0 0 0 48 5.1c-1.8.8-3.7 1.32-5.65 1.55a9.9 9.9 0 0 0 4.33-5.45 19.8 19.8 0 0 1-6.25 2.4 9.86 9.86 0 0 0-16.8 8.97A27.97 27.97 0 0 1 3.36 2.3a9.86 9.86 0 0 0 3.04 13.14 9.86 9.86 0 0 1-4.46-1.23v.12A9.84 9.84 0 0 0 9.83 24c-1.45.4-2.97.45-4.44.17a9.87 9.87 0 0 0 9.2 6.84A19.75 19.75 0 0 1 0 35.08c4.5 2.89 9.75 4.42 15.1 4.42Z"
                    fill="currentColor"></path>
            </svg>

        </a>
  </div>
</div>

  
            {/* Help Column */}
            <div>
              <h3 className="font-bold text-white text-lg mb-4">HELP</h3>
              <ul className="text-sm text-white space-y-2">
                <li>Support</li>
                <li>FAQs</li>
                <li>Terms of Services</li>
              </ul>
            </div>
  
            {/* Contacts Column */}
            <div>
              <h3 className="font-bold text-lg text-white w-[400px] mb-4">CONTACTS</h3>
              <ul className="text-sm text-white space-y-2">
                <li>+63 987 654 3210</li>
                <li>+63 998 765 4921</li>
                <li>kimmie.clothing001@gmail.com</li>
                <li>123 Jaro, Iloilo City, Philippines</li>
              </ul>
            </div>
          </div>
        </footer>


    </div>
  );
}





