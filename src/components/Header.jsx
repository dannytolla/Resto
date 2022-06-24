import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
      <a href="#" className="text-3xl md:text-4xl font-bold tracking-wide">
        Rest<span className="text-green">o</span>
      </a>
      <div className="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14" />
      {/* :className="sidebarOpen ? 'fixed flex' : 'hidden'"
> */}
      <ul className="hidden md:flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
        <li className="text-lg md:text-base lg:text-lg font-medium group">
          <a href="#">Home </a>

          <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
        </li>
        <li className="text-lg md:text-base lg:text-lg font-medium group">
          <a href="#testimonial">Testimonial</a>
          <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
        </li>
        <li className="text-lg md:text-base lg:text-lg font-medium group">
          <a href="#menu">Menu</a>
          <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
        </li>
        <li className="text-lg md:text-base lg:text-lg font-medium group">
          <a href="#team">Team</a>
          <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
        </li>
        <li className="text-lg md:text-base lg:text-lg font-medium group">
          <a href="#about">About Us</a>
          <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
        </li>
      </ul>
      <button className="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap">
        Get started
      </button>
      {/* </div> */}
      <button>
        {/* @click="sidebarOpen = !sidebarOpen" className="block md:hidden relative z-30"> */}
        {/* <HamburgerIcon className="w-8 h-8 fill-current text-gray-900" /> */}
      </button>
    </nav>
  );
};

export default Header;
