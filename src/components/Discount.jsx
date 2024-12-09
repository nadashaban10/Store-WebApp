import React from 'react';
import image1 from "../../public/images/discount-headphones.jpg";
import image2 from "../../public/images/freepik__expand__60239.png";
import image3 from "../../public/images/freepik__expand__8571.png";

function Discount() {
  return (
    <div className="my-[100px] flex flex-col lg:flex-row h-auto lg:h-[330px] w-[90%] mx-auto justify-center items-center">
      <div className='left w-full lg:w-2/3 h-[300px] lg:h-full relative mb-4 lg:mb-0'>
        <img src={image1} alt="Discount Headphones" className="w-full h-full object-fill" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity">
          <button className="bg-red-600 text-white px-4 py-2 rounded-full">Shop Now</button>
        </div>
      </div>
      <div className='right w-full lg:w-1/3 h-auto lg:h-full flex flex-col justify-center lg:ml-1'>
        <div className="relative w-full h-[300px] lg:h-1/2 mb-4 lg:mb-1">
          <img src={image2} alt="VR Glasses" className="w-full h-full object-fill" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full">Shop Now</button>
          </div>
        </div>
        <div className="relative w-full h-[300px] lg:h-1/2">
          <img src={image3} alt="Smartphone Cart" className="w-full h-full object-fill" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;