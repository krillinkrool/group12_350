"use client"
import Image from "next/image";
import Link from "next/link";

function LikedPopup(props) {
  return (props.trigger) ? (
      <div className={"z-10 text-cod_gray absolute left-[72%] top-28 pr-24 pl-5 pt-10 pb-28 border-cod_gray bg-[#D9D9D9] bg-opacity-90 border-[2px] drop-shadow mt-[10px] overflow-visible flex-col rounded-2xl"}>
        {/*COLUMN*/}
        <div className="flex-col">
          <h1 style={{fontWeight: 900}} className="text-black py-5 font-archivo text-[24px]">KIMMIES YOU LIKED</h1>
          {/* ROW */}
          <div className="flex-row inline-flex">
            <Image className="ml-3" src="/images/KIMMIE/products/fairy kimmie.png" alt="" width={135} height={135} />
            {/* Product Name */}
            {/* COLUMN */}
            <div className="flex-col">
              <div className="content-center ml-4">
                <h1 style={{fontWeight: 1000}} className="text-[17px]">fairy<br></br>kimmie</h1>
                <h1 className="font-extrabold text-[16px] leading-4">1500Php</h1>
                <h1 className="text-[14px] font-bold leading-6">oversize tee</h1>
              </div>
              <div className="flex-auto inline-flex space-x-5 mt-3">
                <button className="add_to_cart border border-black px-3 py-2 -py-4 text-black font-semibold">add to cart</button>
                <svg className="duration-300 translate-y-1 delay-150 transition ease-in cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="#C00F0C" xmlns="http://www.w3.org/2000/svg"><path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#C00F0C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  ) : "";
}

export default LikedPopup