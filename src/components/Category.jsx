import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../public/images/covers.jpg";
import image2 from "../../public/images/Z_MWW53AM-A.avif";
import image3 from "../../public/images/wach.jpg";
import image4 from "../../public/images/screenProtector.jpg";
import image5 from "../../public/images/s-l400.jpg";
import image6 from "../../public/images/Z_MWW53AM-A.avif";

const Category = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = [
    { id: 1, title: 'AirPods',  img: image1 },
    { id: 2, title: 'Smartwatch', img: image2 },
    { id: 3, title: 'Covers', description: 'Durable and stylish phone covers', img: image3 },
    { id: 4, title: 'Lanyard', img: image4 },
    { id: 5, title: 'Chargers',img: image5 },
    { id: 6, title: 'Screen Protectors', img: image6 },
  ];

  return (
    <div className="container mx-auto my-[100px] w-[89%] ">
      <h2 className="text-3xl font-bold mb-6">Trending Categories</h2>
      <Slider {...settings}>
        {categories.map(category => (
          <div key={category.id} className="p-4 h-full w-full">
            <div className="bg-white rounded-full  shadow-md flex flex-col items-center " style={{ width: '100%', height: '100%' }}>
              <img src={category.img} alt={category.title} className="w-full h-50 object-contain rounded-md mb-4" />
            </div>
            <h3 className="text-lg font-bold text-center mt-4 font-poppins">{category.title}</h3>
         
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-prev, .slick-next {
          top: 50%;
          transform: translateY(-50%);
        }
        .slick-prev:before, .slick-next:before {
          color: black; /* Change this to your desired color */
        }
      `}</style>
    </div>
  );
};

export default Category;