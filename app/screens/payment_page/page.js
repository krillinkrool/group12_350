"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchPopup from "./../../components/Popups/SearchPopup";
import AccountPopup from "./../../components/Popups/AccountPopup";
import LikedPopup from "./../../components/Popups/LikedPopup";
import CartPopup from "./../../components/Popups/CartPopup";

export default function Home() {
  const [searchPopup, setSearchPopup] = useState(false);
  const [accountPopup, setAccountPopup] = useState(false);
  const [likedPopup, setLikedPopup] = useState(false);
  const [cartPopup, setCartPopup] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState("Credit Card");

  const handlerPopup = () => {
    setSearchPopup(!searchPopup);
  };
  const handlerAccount = () => {
    setAccountPopup(!accountPopup);
  };
  const handlerLiked = () => {
    setLikedPopup(!likedPopup);
  };
  const handlerCart = () => {
    setCartPopup(!cartPopup);
  };

  return (
    <div className="bg-spring_wood bg-home_page bg-cover bg-fixed bg-center bg-no-repeat min-h-screen text-black">
      <Navbar
        searchPopup={handlerPopup}
        accountPopup={handlerAccount}
        likedPopup={handlerLiked}
        cartPopup={handlerCart}
      />
      {/* Popups */}
      <SearchPopup trigger={searchPopup} setTrigger={setSearchPopup}></SearchPopup>
      <AccountPopup trigger={accountPopup} setTrigger={setAccountPopup}></AccountPopup>
      <LikedPopup trigger={likedPopup} setTrigger={setLikedPopup}></LikedPopup>
      <CartPopup trigger={cartPopup} setTrigger={setCartPopup}></CartPopup>

      <div className="spacer h-[100px]"></div>

      <div className="border border-black mx-4 lg:mx-10 rounded-lg shadow-md flex flex-col lg:flex-row mt-6 p-[70px]">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 p-4">
          <h6 className="font-bold text-[38px] uppercase mb-6">My Account</h6>
          <div className="space-y-4">
            <Link href="/screens/account_page" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-[30px]">My Profile</span>
            </Link>
            <Link href="/screens/address_page" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="text-[30px]">My Address</span>
            </Link>
            <Link href="/screens/payment_page" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <span className="text-[30px]">Payment Method</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[2px] bg-black opacity-60 mx-4 "></div>

        
        <div className="w-full lg:w-2/3 p-2">
          <h3 className="text-2xl font-bold uppercase mb-6">Payment Method</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-6">
  <div className="flex items-center space-x-2">
    <div
      className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => setSelectedPayment("Credit Card")}
    >
      {selectedPayment === "Credit Card" && (
        <div className="w-3 h-3 bg-black rounded-full"></div>
      )}
    </div>
    <span className="text-black font-bold">Credit Card</span>
  </div>
  {selectedPayment === "Credit Card" && (
    <>
      <div>
        <p className="text-gray-700 font-semibold">Card Number</p>
        <div className="border border-black rounded-lg shadow-md h-[40px]  flex items-center px-4">
          <span className="text-black opacity-60">******************</span>
        </div>
      </div>
      <div>
        <p className="text-gray-700 font-semibold">Cardholder</p>
        <div className="border border-black rounded-lg shadow-md h-[40px]  flex items-center px-4">
          <span className="text-black opacity-60">*********</span>
        </div>
      </div>
    </>
  )}
               <div className="flex items-center space-x-2">
    <div
      className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => setSelectedPayment("Google Pay")}
    >
      {selectedPayment === "Google Pay" && (
        <div className="w-3 h-3 bg-black rounded-full"></div>
      )}
    </div>
    <span className="text-black font-bold">Google Pay</span>
  </div>
  <div className="flex items-center space-x-2">
    <div
      className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => setSelectedPayment("Apple Pay")}
    >
      {selectedPayment === "Apple Pay" && (
        <div className="w-3 h-3 bg-black rounded-full"></div>
      )}
    </div>
    <span className="text-black font-bold">Apple Pay</span>
  </div>
</div>



            {/* Right Column */}
            {selectedPayment === "Credit Card" && (
              <div className="space-y-6 mt-[50px]">
                <div>
                  <p className="text-gray-700 font-semibold">Expiration Date</p>
                  <div className="border border-black rounded-lg shadow-md h-[40px] flex items-center px-4">
                    <span className="text-black opacity-60">MM/YY</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">CVV</p>
                  <div className="border border-black rounded-lg shadow-md h-[40px] flex items-center px-4">
                    <span className="text-black opacity-60">***</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='spacer h-[80px]'> </div>
       {/* footer */}
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
            <svg class="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg class="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a  aria-label="Find us on Twitter" target="_blank" rel="noopener">
            <svg class="h-10 w-10 text-white" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
