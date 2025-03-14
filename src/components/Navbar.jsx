import React from "react";
import logo from "/Logo.png";

const Navbar = () => {
  return (
    <>
      <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-8" alt="Flowbite Logo" />
          </a>

          <span class="sr-only">Open main menu</span>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 text-gray-500 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-500 md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-500 md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-500 md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-500 md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="px-[18px] py-[5px] rounded-3xl text-blue-50 bg-blue-600">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
