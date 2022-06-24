import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-800">
      <div className="container flex flex-col-reverse justify-between px-8 py-10 space-y-8 md:flex-row">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div className="p-2">
            <h1 className="text-4xl font-bold text-white">Resto</h1>
          </div>
          <div className="flex justify-center space-x-4">
            <img src="img/icon-facebook.svg" alt="fb" className="h-8" />
            <img src="img/icon-youtube.svg" alt="fb" className="h-8" />
            <img src="img/icon-twitter.svg" alt="fb" className="h-8" />
            <img src="img/icon-pinterest.svg" alt="fb" className="h-8" />
            <img src="img/icon-instagram.svg" alt="fb" className="h-8" />
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col text-white space-y-2">
            <a href="#" className="hover:text-green-400">
              Home
            </a>
            <a href="#" className="hover:text-green-400">
              Testimonial
            </a>
            <a href="#" className="hover:text-green-400">
              Menu
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-green-400">
              Team
            </a>
            <a href="#" className="hover:text-green-400">
              About Us
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="update on your box"
                className="flex-1 rounded-full px-4 focus:outline-none"
              />
              <button className="py-2 px-6 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-300 cursor-pointer focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="">
            <p className="hidden text-white md:block">
              Copyright &copy; 2022 All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
