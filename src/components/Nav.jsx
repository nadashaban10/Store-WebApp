import React, { useState } from 'react';
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 mx- bg-white text-black font-poppins">
      <div className="flex items-center justify-between w-full sm:w-auto mt-4 mb-1 sm:mb-0">
        <h1 className='font-poppins text-black font-bold tracking-widest text-xl hover:text-red-500'>Shop Phone</h1>
        <div className="flex items-center sm:hidden">
          <FaShoppingBasket className="ml-4 text-black text-2xl hover:text-red-500" />
          <button className="ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoIosCloseCircleOutline className="text-black text-2xl" />
            ) : (
              <IoMdMenu className="text-black text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full mr-5 sm:w-auto sm:space-x-8 mt-5 ">
        <ul className={`flex flex-col sm:flex-row font-semiboldspace-y-2 sm:space-y-0 sm:space-x-8 text-xl ${isMenuOpen ? 'bg-red-600 w-full text-center space-y-4 py-4 rounded-md text-2xl text-white' : 'hidden'} sm:flex`}>
          <li><a href="/shop" className="hover:text-red-500 ">Shop</a></li>
          <li><a href="/categories" className="hover:text-red-500">Categories</a></li>
          <li><a href="/about" className="hover:text-red-500">About</a></li>
          <li><a href="/help" className="hover:text-red-500">Help</a></li>
        </ul>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mt-4 sm:mt-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto mb-1 sm:mb-0">
            <input type="text" placeholder="Search..." className="p-2 border rounded-lg bg-gray-300 bg-transparent text-black focus:outline-none h-[40px] w-full sm:w-auto shadow-md" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
              <IoSearchOutline className="text-black text-xl m-1" />
            </button>
          </div>
          <div className="relative hidden sm:block">
            <FaRegHeart className="hover:text-red-500 text-black text-2xl" />
          </div>
          <div className="relative hidden sm:block">
            <FaShoppingBasket className="hover:text-red-500 text-black text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;