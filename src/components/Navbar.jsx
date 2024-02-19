import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar(id) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex ">
        <a href="#hero">
          <li className="p-4">Home</li>
        </a>
        <a href="#plans">
          <li className="p-4">Plans</li>
        </a>
        <a href="#about">
          <li className="p-4">About</li>
        </a>
        <a href="#news-letter">
          <li className="p-4">Subscribe</li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React </h1>
        <ul className="uppercase p-4 ">
          <a href="#hero">
            <li className="p-4 border-b border-gray-600">Home</li>
          </a>
          <a href="#plans">
            <li className="p-4 border-b border-gray-600">Plans</li>
          </a>
          <a href="#about">
            <li className="p-4 border-b border-gray-600">About</li>
          </a>
          <a href="#news-letter">
            <li className="p-4 border-b border-gray-600">Subscribe</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
