import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartPopup(props) {
  return (props.trigger) ? (
    <div className={"-mt-4 text-black absolute left-[71%] top-36 pl-5 pr-5 pt-5 pb-5 border-cod_gray drop-shadow-lg z-10 bg-[#D9D9D9] bg-opacity-90 border-[2px] overflow-visible rounded-2xl"}>
      <div className="flex-col justify-start">
        <h1 style={{fontWeight: 900}} className="text-black py-5 font-archivo text-[24px]">YOUR KIMMIE CART</h1>
        {/* ITEM 1 */}
        <div className="px-1 bg-[#8C8A87] rounded-2xl py-1 border-2 border-black">
          <div className="flex-row inline-flex">
            <Image className="ml-3" src="/images/KIMMIE/products/gahodhoodie.png" alt="" width={135} height={135} />
            <div className="content-center ml-4">
              <h1 style={{fontWeight: 1000}} className="text-[17px]">gahod<br></br>kimmie</h1>
              <h1 className="font-extrabold text-[16px] leading-4">2500Php</h1>
              <h1 className="text-[14px] font-bold leading-6">pullover hoodie</h1>
            </div>
          </div>
        </div>
        {/* ITEM2 */}
        <div className="px-1 bg-[#8C8A87] rounded-2xl py-1 border-2 border-black mt-4">
          <div className="flex-row inline-flex">
            <Image className="ml-3" src="/images/KIMMIE/products/fairy kimmie.png" alt="" width={135} height={135} />
            <div className="content-center ml-4">
              <h1 style={{fontWeight: 1000}} className="text-[17px]">fairy<br></br>kimmie</h1>
              <h1 className="font-extrabold text-[16px] leading-4">1500Php</h1>
              <h1 className="text-[14px] font-bold leading-6">oversize tee</h1>
            </div>
          </div>
        </div>
        {/* ITEMS END */}

        <button className="mt-4 w-[100%] justify-self-center bg-[#191919] rounded-xl px-[15vh] py-2 hover:bg-spring_wood text-white font-bold hover:text-cod_gray hover:-translate-y-1 ease-in-out delay-150 duration-300 after:bg-gray-500"><Link href="/../../screens/add_to_cart"><h1>CHECKOUT</h1></Link></button>
        {/* TOTAL */}
        <div className="flex-row inline-flex space-x-72 justify-end">
          <h3 className ="ml-1 font-archivo_narrow  text-2xl font-bold">Total</h3>
          <h3 className ="ml-8 text-2xl font-extrabold">7620 Php</h3>
        </div>
      </div>
    </div>
  ) : "";
}

{/* <h1 className="font-extrabold text-4xl">fairy<br></br>kimmie</h1>
              <h1 className="font-semibold text-3xl leading-4">1500Php</h1>
              <h1 className="text-xl leading-6">oversize tee</h1> */}