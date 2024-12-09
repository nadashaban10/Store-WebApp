import React from 'react';
import { FaRegHeart, FaShoppingBasket, FaStar } from "react-icons/fa";
import image1 from "../../public/images/covers.jpg";
import image2 from "../../public/images/Z_MWW53AM-A.avif";
import image3 from "../../public/images/wach.jpg";
import image4 from "../../public/images/screenProtector.jpg";
import image5 from "../../public/images/charger.jpeg";
import image6 from "../../public/images/iphone.png";

const products = [
  { id: 1, title: 'Phone Covers', img: image1, priceBefore: 100, priceAfter: 80, discount: 20, description: 'Durable and stylish phone covers.' },
  { id: 2, title: 'HeadPhones', img: image2, priceBefore: 150, priceAfter: 120, discount: 30, description: 'Latest smartwatches with advanced features.' },
  { id: 3, title: 'Watch', img: image3, priceBefore: 200, priceAfter: 160, discount: 40, description: 'Elegant and functional watches.' },
  { id: 4, title: 'Screen Protector', img: image4, priceBefore: 250, priceAfter: 200, discount: 50, description: 'Protect your screen from scratches and damage.' },
  { id: 5, title: 'Charger', img: image5, priceBefore: 300, priceAfter: 240, discount: 60, description: 'Fast and reliable phone chargers.' },
  { id: 6, title: 'iPhone', img: image6, priceBefore: 350, priceAfter: 280, discount: 70, description: 'Latest iPhone models with advanced features.' },
];

function Products() {
  return (
    <div className="container mx-auto my-[100px]">
      <h2 className="text-3xl font-bold mb-6">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="relative bg-gray-50 rounded-lg shadow-md p-4 flex flex-col items-center font-poppins">
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 flex items-center rounded-r-md">
              <span className="mr-1">4.5</span>
              <FaStar className="text-yellow-500" />
            </div>
            <img src={product.img} alt={product.title} className="w-full h-40 object-contain mb-3" />
            <div className="flex flex-col items-center w-full">
              <h3 className="text-xl font-semibold text-center mb-2">{product.title}</h3>
              <p className="text-center text-gray-600 mb-1">{product.description}</p>
              <div className="flex items-center mb-2 ">
                <span className="text-black mr-2 font-semibold text-xl">${product.priceAfter}</span>
                <span className="text-red-500 line-through mr-2 text-md font-semibold">${product.priceBefore}</span>
                <span className="text-green-500 font-semibold text-md">({product.discount}% off)</span>
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="flex space-x-4 mt-4">
              <FaShoppingBasket className="text-gray-600 cursor-pointer" />
              <FaRegHeart className="text-gray-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;