import {} from "react";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-t from-transparent to-green-100">
        {/* <div className="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50">
        <span className="sm:hidden">DEFAULT</span>
        <span className="hidden sm:inline-block md:hidden">SM</span>
        <span className="hidden md:inline-block lg:hidden">MD</span>
        <span className="hidden lg:inline-block xl:hidden">LG</span>
        <span className="hidden xl:inline-block">XL</span>
      </div> */}

        <Header />
        <Hero />
      </div>
      <Testimonial />
      <Menu />
      <Team />
      <About />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
