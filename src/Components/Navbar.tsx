import React, { useState } from "react";
import images from "../Assets/Images";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  // Toggle menu function
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <section className="hidden md:flex flex-row justify-around items-center bg-[#2B2C41] text-white text-center p-2">
        <Link to={"/"} className="md:w-[10%] w-[20%]">
          <img src={images.logo} alt="Description" />
        </Link>

        <div>
          <ul className="list-none flex flex-row justify-around gap-7 font-bold">
            <li>AI Solutions</li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around items-center gap-7">
          <div className="border-2 p-3 border-sky-500 rounded-full w-40">
            Projects
          </div>
          <div className="text-white border-2 p-3 border-sky-500 rounded-full w-40 bg-[#273577]">
            Contact
          </div>
        </div>
      </section>
      <section className="flex md:hidden">
        <div className="md:hidden flex flex-row justify-between just items-center mx-2">
          <img
            src={images.logo}
            alt="Description"
            className="md:w-[20%] w-[40%]"
          />
          <button onClick={handleToggle} className="text-3xl text-sky-500">
            {/* Menu Icon */}☰
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center space-y-8">
            <ul className="list-none text-2xl font-bold">
              <li className="py-2">Home</li>
              <li className="py-2">About Us</li>
              <li className="py-2">How it Works</li>
              <li className="py-2">Projects</li>
              <li className="py-2">Contact Us</li>
            </ul>
            <div className="flex flex-col items-center space-y-4">
              <div className="border-2 p-4 border-sky-500 rounded-full w-40">
                Log In
              </div>
              <div className="text-white border-2 p-4 border-sky-500 rounded-full w-40 bg-sky-500">
                Get Started
              </div>
            </div>
            <button onClick={handleToggle} className="text-3xl mt-10">
              {/* Close Icon */}✖
            </button>
          </div>
        )}
      </section>
    </section>
  );
};

export default Navbar;
