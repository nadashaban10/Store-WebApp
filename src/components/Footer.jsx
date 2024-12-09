import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
          <h1 className="text-start text-3xl text-red-600 font-poppins font-bold mb-3">Phone Shop</h1>
         
          <div className="flex space-x-4 text-white justify-start items-center ">
            <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600" />
            <FaTwitter className="text-3xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500" />
            <FaWhatsapp className="text-3xl cursor-pointer hover:text-green-500" />
          </div>
        </div>
        <div>
        
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>FAQ</li>
            <li>Returns & Refunds</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Fabrikam Store */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Shop Phone</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Store Locations</li>
            <li>Store Hours</li>
            <li>Store Events</li>
            <li>Fabrikam Store Support</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Our Story</li>
            <li>Careers with Fabrikam</li>
            <li>News</li>
          </ul>
        </div>

        {/* Follow Us */}
       
      </div>

      {/* Scroll to Top Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-1 w-[40px] bg-gray-500 text-white font-bold rounded-full hover:bg-gray-300"
        >
          &#8679;
        </button>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-5 text-[12px] text-gray-400">
        <p>&copy;2024 Developed by Nada Shaban with Media Plus</p>
      </div>
    </footer>
  );
};

export default Footer;
