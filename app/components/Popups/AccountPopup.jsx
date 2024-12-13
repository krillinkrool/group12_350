"use client"

import Image from "next/image";
import Link from "next/link";

function AccountPopup(props) {
  return (props.trigger) ? (
    <div className={"-mt-4 text-cod_gray absolute left-2/3 top-36 pl-5 pr-5 py-5 border-cod_gray drop-shadow-lg bg-[#D9D9D9] bg-opacity-90 border-[2px] overflow-visible rounded-2xl"}>
      <div className="flex-col">
        <div className="inline-flex mb-9 pr-16">
          <Image src="/images/home_page/pfp.png" width={104} height={103} alt="" />
          <div className="flex-col content-center"><h1 className="font-extrabold text-xl ml-3">Juan De Kimmie</h1><h3 className="font-semibold ml-2 leading-3">Classic Member</h3></div>
        </div>
        <div className="flex-col leading-8 font-semibold">
          <div className="hover:bg-[#8C8A87]"><Link href="../../screens/account_page"><h3 className="ml-5">My Account</h3></Link></div>
          <Link href="/../../screens/collection_page"><div className="hover:bg-[#8C8A87]"><h3 className="ml-5 cursor-pointer">Kimmie Shop</h3></div></Link>
          <div className="hover:bg-[#8C8A87]"><h3 className="ml-5 cursor-pointer">Shopping Cart</h3></div>
          <div className="hover:bg-[#8C8A87]"><h3 className="ml-5 cursor-pointer">Log Out</h3></div>
        </div>
      </div>
    </div>
  ) : "";
}

export default AccountPopup