import Image from "next/image";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
import {useRef} from "react";


function Navbar({aboutRef, searchPopup, accountPopup, likedPopup, cartPopup, handleAboutScroll}) {
  function handleClick() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (

    <div>
      <br></br>
      <br></br>
    <nav className="overflow-hidden absolute left-0.5 right-0.5 border-solid border-black border rounded-2xl mx-9 py-4">
        <div className="inline-flex space-x-36">
          {/* LOGO */}
          <Link className="hover:text-gray-600 text-cod_gray hover:fill-current cursor-pointer font-bold text-lg" href="/"><h1 className="font-extrabold ml-6 text-2xl items-center">KIMMIE<br/>CO.</h1></Link >
          <Link className="hover:text-gray-600 text-cod_gray hover:fill-current cursor-pointer font-medium text-xl content-center" href="/screens/collection_page">COLLECTION</Link>
          <Link href="/#about" className="hover:text-gray-600 text-cod_gray hover:fill-current cursor-pointer font-medium text-xl content-center"><h1 onClick={handleClick}>ABOUT</h1></Link>
          <Link className="hover:text-gray-600 text-cod_gray hover:fill-current cursor-pointer font-medium text-xl content-center" href="/screens/newsLetter_page">CONTACT</Link>

          <div className="inline-flex space-x-4">
            <p className="invisible">space</p>
          <div className="inline-flex content-center mt-5">
            <div className="ml-44 absolute left-2/3 top-7">
            {/* NAV_ICONS */}
              <div className='inline-flex space-x-5 items-center absolute left-36'>
                {/* Search */}
                <button onClick={() => searchPopup(!searchPopup)}><svg className="navbar_icons w-8 h-8 hover:stroke-gray-600" width="24px" height="24px" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M32.875 30.375L25.4437 23.6687M29.4583 14.9583C29.4583 21.7698 23.3396 27.2917 15.7917 27.2917C8.24377 27.2917 2.125 21.7698 2.125 14.9583C2.125 8.14682 8.24377 2.625 15.7917 2.625C23.3396 2.625 29.4583 8.14682 29.4583 14.9583Z"/></svg></button>
                {/* Account */}
                <button onClick={() => accountPopup(!accountPopup)}><svg className="cursor-pointer w-8 h-8 hover:fill-gray-600" width="24px" height="24px" viewBox="0 0 34 33" fill="#1D1B20" xmlns="http://www.w3.org/2000/svg"><path d="M16.9999 16.5C14.7083 16.5 12.7464 15.733 11.1145 14.199C9.48256 12.665 8.66659 10.8209 8.66659 8.66671C8.66659 6.51254 9.48256 4.66844 11.1145 3.13442C12.7464 1.60039 14.7083 0.833374 16.9999 0.833374C19.2916 0.833374 21.2534 1.60039 22.8853 3.13442C24.5173 4.66844 25.3333 6.51254 25.3333 8.66671C25.3333 10.8209 24.5173 12.665 22.8853 14.199C21.2534 15.733 19.2916 16.5 16.9999 16.5ZM0.333252 32.1667V26.6834C0.333252 25.5737 0.637071 24.5537 1.24471 23.6235C1.85235 22.6933 2.65964 21.9834 3.66659 21.4938C5.81936 20.482 8.00686 19.7231 10.2291 19.2172C12.4513 18.7113 14.7083 18.4584 16.9999 18.4584C19.2916 18.4584 21.5485 18.7113 23.7708 19.2172C25.993 19.7231 28.1805 20.482 30.3333 21.4938C31.3402 21.9834 32.1475 22.6933 32.7551 23.6235C33.3628 24.5537 33.6666 25.5737 33.6666 26.6834V32.1667H0.333252ZM4.49992 28.25H29.4999V26.6834C29.4999 26.3243 29.4044 25.998 29.2135 25.7042C29.0225 25.4105 28.7708 25.182 28.4583 25.0188C26.5833 24.1375 24.6909 23.4766 22.7812 23.036C20.8714 22.5954 18.9444 22.375 16.9999 22.375C15.0555 22.375 13.1284 22.5954 11.2187 23.036C9.30895 23.4766 7.41659 24.1375 5.54159 25.0188C5.22909 25.182 4.97735 25.4105 4.78638 25.7042C4.59541 25.998 4.49992 26.3243 4.49992 26.6834V28.25ZM16.9999 12.5834C18.1458 12.5834 19.1267 12.1999 19.9426 11.4329C20.7586 10.6658 21.1666 9.74379 21.1666 8.66671C21.1666 7.58962 20.7586 6.66758 19.9426 5.90056C19.1267 5.13355 18.1458 4.75004 16.9999 4.75004C15.8541 4.75004 14.8732 5.13355 14.0572 5.90056C13.2412 6.66758 12.8333 7.58962 12.8333 8.66671C12.8333 9.74379 13.2412 10.6658 14.0572 11.4329C14.8732 12.1999 15.8541 12.5834 16.9999 12.5834Z"/></svg></button>
                {/* Favorites */}
                <button onClick={() => likedPopup(!likedPopup)}><svg className="cursor-pointer w-9 h-9 hover:stroke-gray-600" width="25px" height="25px" viewBox="0 0 41 33" fill="none" stroke="#1E1E1E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M35.6017 5.10709C34.7292 4.31931 33.6932 3.69438 32.5529 3.26801C31.4127 2.84164 30.1905 2.62219 28.9563 2.62219C27.722 2.62219 26.4999 2.84164 25.3596 3.26801C24.2194 3.69438 23.1834 4.31931 22.3109 5.10709L20.5 6.74126L18.6892 5.10709C16.9267 3.51656 14.5363 2.62302 12.0438 2.62302C9.55128 2.62302 7.16085 3.51656 5.39837 5.10709C3.6359 6.69762 2.64575 8.85483 2.64575 11.1042C2.64575 13.3535 3.6359 15.5107 5.39837 17.1013L20.5 30.7296L35.6017 17.1013C36.4747 16.3138 37.1671 15.3789 37.6396 14.3499C38.1121 13.3209 38.3552 12.218 38.3552 11.1042C38.3552 9.99034 38.1121 8.88742 37.6396 7.85842C37.1671 6.82942 36.4747 5.89451 35.6017 5.10709Z"/></svg></button>
                {/* Cart */}
                <button onClick={() => cartPopup(!cartPopup)}><svg className="cursor-pointer w-9 h-9 hover:stroke-gray-600" width="25px" height="25px" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M1.70825 1.54163H8.54159L13.1199 22.1845C13.2761 22.8943 13.704 23.5319 14.3286 23.9857C14.9533 24.4394 15.7349 24.6805 16.5366 24.6666H33.1416C33.9433 24.6805 34.7249 24.4394 35.3495 23.9857C35.9742 23.5319 36.402 22.8943 36.5583 22.1845L39.2916 9.24996H10.2499M17.0833 32.375C17.0833 33.2264 16.3184 33.9166 15.3749 33.9166C14.4314 33.9166 13.6666 33.2264 13.6666 32.375C13.6666 31.5235 14.4314 30.8333 15.3749 30.8333C16.3184 30.8333 17.0833 31.5235 17.0833 32.375ZM35.8749 32.375C35.8749 33.2264 35.1101 33.9166 34.1666 33.9166C33.2231 33.9166 32.4583 33.2264 32.4583 32.375C32.4583 31.5235 33.2231 30.8333 34.1666 30.8333C35.1101 30.8333 35.8749 31.5235 35.8749 32.375Z"/></svg></button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar