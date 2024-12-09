import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../public/images/Apple-Watch.jpg"; 
import imagtwo from "../../public/images/Apple-Watch.jpg";

function Header() {
  return (
    <div className="w-full ">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        showArrows={false}
        className="w-full"
      >
        <div className="relative mt-5">
          <img
            className="w-full h-[500px] object-cover rounded-3xl"
            src={image1}
            alt="Hot Air Balloon"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-start lg:text-center">Welcome to Our Mobile Accessories Store</h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-start">Find the best covers, chargers, and accessories for your mobile devices. We offer a wide range of high-quality products to meet all your needs.</p>
            <div className="mt-4 space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Shop Now</button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">Learn More</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover rounded-3xl"
            src={imagtwo}
            alt="Second Image"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-start lg:text-center">High-Quality Mobile Products</h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-start">Explore our wide range of mobile accessories, including cases, screen protectors, and more. Quality and durability are our top priorities.</p>
            <div className="mt-4 space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Shop Now</button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">Learn More</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover rounded-3xl"
            src={imagtwo}
            alt="Third Image"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-start lg:text-center">Affordable Prices for Everyone</h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-start">Get the best deals on mobile accessories without compromising on quality. Our prices are competitive and affordable for everyone.</p>
            <div className="mt-4 space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Shop Now</button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">Learn More</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover rounded-3xl"
            src={imagtwo}
            alt="Fourth Image"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-start lg:text-center">Fast and Reliable Shipping</h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-start">Receive your orders quickly and reliably with our fast shipping options. We ensure that your products arrive on time and in perfect condition.</p>
            <div className="mt-4 space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Shop Now</button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">Learn More</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Header;