import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-white text-black p-4 fixed w-full top-0 z-10 tracking-wide">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="GeekFood Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="font-semibold text-3xl">GeekFoods</span>
          </div>

          <div className="flex justify-center">
            <Link to="/">
            <a
              href="#"
              className="px-4 font-bold text-xl transition duration-200 hover:text-blue-500"
            >
              Home
            </a>
            </Link>
            <Link to="quotes">
            <a
              href="Quotes.js"
              className="px-4 font-bold text-xl transition duration-300 hover:text-blue-500"
            >
              Quote
            </a>
            </Link>
            <Link to="resturants">
            <a
              href="#"
              className="px-4 font-bold text-xl transition duration-300 hover:text-blue-500"
            >
              Restaurants
            </a>
            </Link>
            <Link to="foods">
            <a
              href="#"
              className="px-4 font-bold text-xl transition duration-300 hover:text-blue-500"
            >
              Foods
            </a>
            </Link>
            <Link to="contact">
            <a
              href="#"
              className="px-4 font-bold text-xl transition duration-300 hover:text-blue-500"
            >
              Contact
            </a>
            </Link>
            
            
            
            
            
          </div>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
