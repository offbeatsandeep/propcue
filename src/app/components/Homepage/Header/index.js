"use client";

import React, { useState } from "react";

const Header = () => {
  const [isOpen, isSetOpen] = useState(false);
  return (
    <div className="font-montserrat">
      <nav className="py-3 px-2 items-center justify-between text-gray-800  flex w-full">
        <div className="py-2 px-2">
          <h1 className="text-2xl font-bold">Propcue</h1>
        </div>
        <div>
          <div className="md:hidden  flex gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="bg-gray-800"
              className="bi bi-search  px-0.5"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>

            {/* hamburger icon */}

            <div onClick={() => isSetOpen(!isOpen)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer px-1  hover:fill-gray-600 transition-colors duration-200"
              >
                <rect y="6" width="30" height="4" className="bg-primary" />
                <rect y="18" width="20" height="4" className="bg-primary" />
                <rect y="30" width="30" height="4" className="bg-primary" />
              </svg>
            </div>
          </div>
          <ul className="md:flex gap-3 font-medium hidden">
            <li className="py-2 px-2">
              <a className="hover:text-gray-500 hover:border-b-2" href="#home">
                Home
              </a>
            </li>
            <li className="py-2 px-2">
              <a className="hover:text-gray-500  hover:border-b-2 " href="#for_rent">For Rent</a>
            </li>
            <li className="py-2 px-2">
              <a className="hover:text-gray-500  hover:border-b-2 " href="#contact">Contact us</a>
            </li>
            <li className="py-2 px-2">
              <a className="hover:text-gray-500  hover:border-b-2 " href="#about_us">About us</a>
            </li>
            <li className="py-2 px-2">
              <a className="hover:text-gray-500  hover:border-b-2 " href="#properties">Properties</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Model */}
      {isOpen && (
        <div className="md:hidden lg:hidden absolute z-10 w-full h-full text-white bg-primary">
          <div className="flex p-5">
            <ul className="flex-col text-md space-y-10 w-full h-full">
              <li>
                <a className="hover:text-gray-500" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#for_rent">For Rent</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#contact">Contact us</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#about_us">About us</a>
              </li>
              <li>
                <a  className="hover:text-gray-500" href="#properties">Properties</a>
              </li>
            </ul>
            <div className="cursor-pointer" onClick={() => isSetOpen(!open)}>
              <svg
                className="hover:fill-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
