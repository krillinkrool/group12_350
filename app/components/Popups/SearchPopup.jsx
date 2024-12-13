"use client"
import {useState} from "react";

function SearchPopup(props) {
    const [search, setSearch] = useState(""); 
    const handleButtonClear = () => {
      setSearch("");
    };
  return (props.trigger) ? (
      <div className={"z-10 text-cod_gray absolute left-2/3 top-36 px-3 py-4 border-cod_gray bg-[#D9D9D9] drop-shadow-lg bg-opacity-90 border-[2px] mt-[10px] overflow-visible flex-col rounded-2xl"}>
        <div>
          <svg className="absolute mt-2.5 ml-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#1D1B20"/></svg>
          <input
            value={search}
            onChange={ e => setSearch(e.target.value)}
            className="pr-10 pl-10 py-2 mb-3 w-80 !justify-start border-2 rounded border-black" placeholder='Search "Kimmie"'/>
          <button onClick={handleButtonClear} className="cursor-pointer absolute right-5 top-6"><svg className="" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9998 7.66663L17.6665 12M17.6665 12L12.9998 16.3333M17.6665 12H8.33317M1.33317 12C1.33317 17.983 6.55652 22.8333 12.9998 22.8333C19.4432 22.8333 24.6665 17.983 24.6665 12C24.6665 6.01687 19.4432 1.16663 12.9998 1.16663C6.55652 1.16663 1.33317 6.01687 1.33317 12Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <p className="py-2 px-3 mb-2 hover:bg-gray-900 hover:bg-opacity-35 cursor-pointer">Hoodies</p>
          <p className="py-2 px-3 hover:bg-gray-900 hover:bg-opacity-35 cursor-pointer">Kimmie Fairy T-Shirt</p>
        </div>
      </div>
  ) : "";
}

export default SearchPopup