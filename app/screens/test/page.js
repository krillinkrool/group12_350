

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




export default function Home() {
  return (
    <div className="bg-navbar_white bg-home_page bg-cover bg-center bg-no-repeat min-h-screen text-black">
      <div className="bg-transparent py-100"><p className="invisible">Space</p></div>
      <Navbar/>
      {/* ///////////////////////////////////// */}

      <br>
      
      </br>
      <div className="border border-black mx-14 rounded-lg shadow-md w-[1490px] h-[610px] flex">
  {/* Left Section */}
  <div class="w-[455px] p-6">

  <div className="absolute left-[190px] top-[180px] text-[30px] ">

    <h1 className="font-bold text-[38px] ml-[-50px]" >KIMMIE SHOP</h1>

    <div className="relative ml-[-10px] mt-[-50px]">
  <ul className="absolute">
    <Image 
      src="/images/KIMMIE/products/fairy kimmie.png"
      width={200}
      height={200}
      alt="#"
    />
  </ul>
  <h1 className="font-bold ml-[210px] mt-[50px]">fairy</h1>
  <h1 className="font-bold ml-[210px] mt-[-10px]">kimmie</h1>
  <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
  <h1 className="font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
  <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
    Add to cart
  </button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
       className="absolute top-[171px] left-[340px] w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
</div>


<div className="relative ml-[-10px] mt-[50px]">
  <ul className="absolute">
    <Image 
      src="/images/KIMMIE/products/virgin kimmie.png"
      width={200}
      height={200}
      alt="#"
    />
  </ul>
  <h1 className="font-bold ml-[210px] mt-[50px]">virgin</h1>
  <h1 className="font-bold ml-[210px] mt-[-10px]">kimmie</h1>
  <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
  <h1 className="font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
  <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
    Add to cart
  </button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
       className="absolute top-[171px] left-[340px] w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
</div>

    </div>
      
    

  </div>

{/* Right Section */}
  <div className="w-1/2 p-6 flex flex-col gap-6">
    
    <div className="flex justify-between">
      <div className="w1/2 pr-4">
     

      <div className="relative ml-[340px] mt-[50px]">
  <ul className="absolute">
    <Image 
      src="/images/KIMMIE/products/fairy kimmie.png"
      width={200}
      height={200}
      alt="#"
    />
  </ul>
  <h1 className=" text-[32px] font-bold ml-[210px] mt-[50px]">fairy</h1>
  <h1 className=" text-[32px] font-bold ml-[210px] mt-[-10px]">kimmie</h1>
  <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
  <h1 className="text-[32px] text-nowrap font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
  <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
    Add to cart
  </button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
       className="absolute top-[165px] left-[340px] w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
</div>        
<div className="relative ml-[360px] mt-[80px]">
  <ul className="absolute">
    <Image 
      src="/images/KIMMIE/products/virgin kimmie.png"
      width={200}
      height={200}
      alt="#"
    />
  </ul>
  <h1 className="text-[32px] font-bold ml-[210px] mt-[50px]">virgin</h1>
  <h1 className="text-[32px] font-bold ml-[210px] mt-[-10px]">kimmie</h1>
  <h1 className="font-semibold text-[35px] ml-[210px] mt-[-10px]">1500Php</h1>
  <h1 className="text-[32px] text-nowrap font-bold ml-[210px] mt-[-10px]">Oversize tee</h1>
  <button className="ml-[210px] border mt-[-100px] border-black px-4 py-1 text-black font-semibold uppercase text-xs tracking-wide">
    Add to cart
  </button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" 
       className="absolute top-[164px] left-[340px] w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
</div>


      </div>

    
    
    
    
 


    </div>
  </div>
</div>

      
    </div>
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