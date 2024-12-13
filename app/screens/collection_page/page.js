"use client"

// export default function collectionPage() {
//     return(
//         <div className="flex-auto">
//             <div className="h-screen w-screen bg-[url('')]"></div>
//         </div>
//     );
// }



import Navbar from "../../components/Navbar"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useState} from "react";
import SearchPopup from "./../../components/Popups/SearchPopup";
import AccountPopup from "./../../components/Popups/AccountPopup";
import LikedPopup from "./../../components/Popups/LikedPopup";
import CartPopup from "./../../components/Popups/CartPopup";




export default function Home() {
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
      <div className="flex-col">
        <div className="border border-black mx-12 mt-32 pt-6 pb-3 rounded-xl">
          <h1 className="ml-12 font-extrabold text-4xl">KIMMIE SHOP</h1>
          {/* Item 1 */}
          <div className="flex-row">
          <div className="inline-flex ml-8">
            <div className="ml-4"><Image src="/images/KIMMIE/products/fairy kimmie.png" width={266} height={290} alt=""/></div>
            <div className="mt-14 ml-4">
              <h1 className="font-extrabold text-4xl">fairy<br></br>kimmie</h1>
              <h1 className="font-semibold text-3xl leading-4">1500Php</h1>
              <h1 className="text-xl leading-6">oversize tee</h1>
              <div className="flex-auto inline-flex space-x-5 mt-3">
                <button className="add_to_cart border border-black px-3 py-2 -py-4 text-black font-semibold">add to cart</button>
                <svg className="mt-2 favorite_button duration-300 delay-75 transition ease-in cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="inline-flex ml-8">
            <div className="ml-80"><Image src="/images/KIMMIE/products/Live Laugh Love Kimmie.png" width={266} height={290} alt=""/></div>
            <div className="mt-14 ml-4">
              <h1 className="font-extrabold text-4xl">live, <br></br>laugh, love<br></br>kimmie</h1>
              <h1 className="font-semibold text-3xl leading-4">1500Php</h1>
              <h1 className="text-xl leading-6">oversize tee</h1>
              <div className="flex-auto inline-flex space-x-5 mt-3">
                <button className="add_to_cart border border-black px-3 py-2 -py-4 text-black font-semibold">add to cart</button>
                <svg className="mt-2 favorite_button duration-300 translate-y-1 delay-150 transition ease-in cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          </div>
          <div className="flex-row">
          <div className="inline-flex ml-8">
            <div className="ml-4"><Image src="/images/KIMMIE/products/virgin kimmie 1.png" width={266} height={290} alt=""/></div>
            <div className="mt-14 ml-4">
              <h1 className="font-extrabold text-4xl">virgin<br></br>kimmie</h1>
              <h1 className="font-semibold text-3xl leading-4">1500Php</h1>
              <h1 className="text-xl leading-6">oversize tee</h1>
              <div className="flex-auto inline-flex space-x-5 mt-3">
                <button className="add_to_cart border border-black px-3 py-2 -py-4 text-black font-semibold">add to cart</button>
                <svg className="mt-2 favorite_button duration-300 delay-75 transition ease-in cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          
          <div className="inline-flex ml-8">
            <div className="ml-80"><Image src="/images/KIMMIE/products/gahodhoodie.png" width={266} height={290} alt=""/></div>
            <div className="mt-14 ml-4">
              <h1 className="font-extrabold text-4xl">gahod<br></br>kimmie</h1>
              <h1 className="font-semibold text-3xl leading-4">2500Php</h1>
              <h1 className="text-xl leading-6">pullover hoodie</h1>
              <div className="flex-auto inline-flex space-x-5 mt-3">
              <button className="add_to_cart border border-black px-3 py-2 -py-4 text-black font-semibold">add to cart</button>
              <svg className="mt-2 favorite_button duration-300 delay-75 transition ease-in cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="py-25"></div>
      </div>



      <div className="spacer h-[120px]"></div>
      
      
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






//     <div className="bg-navbar_white bg-home_page bg-cover bg-center bg-no-repeat min-h-screen text-black">
//       <Navbar/>
//       {/* ///////////////////////////////////// */}

//       <br>
      
//       </br>
//       <div className="border border-black mx-14 rounded-lg shadow-md w-[1490px] h-[610px] flex">
//   {/* Left Section */}
//   <div class="w-[455px] p-6">

//   <div className="absolute left-[190px] top-[180px] text-[30px] ">

//     <h1 className="font-bold text-[38px] ml-[-50px]" >KIMMIE SHOP</h1>

//     <div className="relative ml-[-10px] mt-[-50px]">
//   <ul className="absolute">
//     <Image 
//       src="/public/images/KIMMIE/products/fairy kimmie.png"
//       width={200}
//       height={200}
//       alt="#"
//     />
//   </ul>
//   <h1 className="font-bold ml-[210px] mt-[50px]">fairy</h1>
//   <h1 className="font-bold ml-[210px] mt-[-10px]">kimmie</h1>
//   <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
//   <h1 className="font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
//   <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
//     Add to cart
//   </button>
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
//        className="absolute top-[171px] left-[340px] w-8 h-8">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//   </svg>
// </div>


// <div className="relative ml-[-10px] mt-[50px]">
//   <ul className="absolute">
//     <Image 
//       src="/public/images/KIMMIE/products/virgin kimmie.png"
//       width={200}
//       height={200}
//       alt="#"
//     />
//   </ul>
//   <h1 className="font-bold ml-[210px] mt-[50px]">virgin</h1>
//   <h1 className="font-bold ml-[210px] mt-[-10px]">kimmie</h1>
//   <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
//   <h1 className="font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
//   <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
//     Add to cart
//   </button>
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
//        className="absolute top-[171px] left-[340px] w-8 h-8">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//   </svg>
// </div>

//     </div>
      
    

//   </div>

// {/* Right Section */}
//   <div className="w-1/2 p-6 flex flex-col gap-6">
    
//     <div className="flex justify-between">
//       <div className="w1/2 pr-4">
     

//       <div className="relative ml-[340px] mt-[50px]">
//   <ul className="absolute">
//     <Image 
//       src="/public/images/KIMMIE/products/fairy kimmie.png"
//       width={200}
//       height={200}
//       alt="#"
//     />
//   </ul>
//   <h1 className=" text-[32px] font-bold ml-[210px] mt-[50px]">fairy</h1>
//   <h1 className=" text-[32px] font-bold ml-[210px] mt-[-10px]">kimmie</h1>
//   <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
//   <h1 className="text-[32px] text-nowrap font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
//   <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
//     Add to cart
//   </button>
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
//        className="absolute top-[165px] left-[340px] w-8 h-8">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//   </svg>
// </div>        
// <div className="relative ml-[360px] mt-[80px]">
//   <ul className="absolute">
//     <Image 
//       src="/public/images/KIMMIE/products/virgin kimmie.png"
//       width={200}
//       height={200}
//       alt="#"
//     />
//   </ul>
//   <h1 className="text-[32px] font-bold ml-[210px] mt-[50px]">virgin</h1>
//   <h1 className="text-[32px] font-bold ml-[210px] mt-[-10px]">kimmie</h1>
//   <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
//   <h1 className="text-[32px] text-nowrap font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
//   <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
//     Add to cart
//   </button>
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
//        className="absolute top-[164px] left-[340px] w-8 h-8">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//   </svg>
// </div>


//       </div>

    
    
    
    
 


//     </div>
//   </div>
// </div>

      
//     </div>
  );
}






{/* // import Slider from "react-slick" 
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import style from "../components/trialPage.css";


// export default function collectionPage() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className= "w-3/4 m-auto">
//         <div className="mt-20">
//         <Slider {...settings}>
//             {data.map((d) => (
//                <div className="bg-white h-[450px] text-black rounded-xl">
//                  <div className="rounded-txl bg-indigo-500 flex-center items-center">

//                  <div>
//                     <img src={d.img} alt="" clasName="h-44 w-44 rounded-full"/>
//                  </div>
                                 
//                  <div className="flex flex-col justify-center items-center gap-4 p-4">
//                     <p className="bg-indigio-500 text-white text-lg px-6 py-1 rounded-xl" >{d.name}</p>
//                     <p>{d.review}</p>
//                     <button>Read More</button>
//                  </div>

//                  </div>
//                </div> 
//             ))}
//         </Slider>   
//         </div>
//     </div>
// );
// }

// const data = [
//     {
//         img: 'public/image/KIMMIE/photoshoot/img1'
//     },

//     {
//         img: 'public/image/KIMMIE/photoshoot/img2'
//     },

//     {
//         img: 'public/image/KIMMIE/photoshoot/img3'
//     }
// ] */}