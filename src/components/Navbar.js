import React, { useState } from "react"
import Oval from "../images/Oval Copy.png"
import Oval1 from "../images/Oval (1).png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#F8FDFF] relative">
      {/* Decorative oval in top-left corner (hidden on small screens) */}
      <img
        src={Oval}
        className="hidden md:block absolute top-0 left-0 z-0"
        alt="Decorative oval"
      />

      {/* Decorative oval in top-right corner (hidden on small screens) */}
      <img
        src={Oval1}
        className="hidden md:block absolute top-0 right-0 z-0"
        alt="Decorative oval"
      />

      <div className="max-w-7xl z-10 relative mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Logo - Left Side */}
        <div className="text-[22px] sm:text-[28px] md:text-[34px] font-bold font-sans">
          <span className="text-[#0073FF]">Medi</span>
          <span className="text-orange-400">Care+</span>
        </div>

        {/* Menu and Button - Right Side */}
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 font-sans">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-[#0073FF] text-[14px] sm:text-[15px] md:text-[16px] font-normal">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">News</li>
          </ul>

          {/* Contact Button (Desktop) */}
          <button className="hidden md:block bg-[#007FF4] text-white px-4 sm:px-6 py-2 rounded-[25px] transition duration-200 text-[14px] sm:text-[15px] md:text-[16px] font-bold w-[170px] h-[50px]">
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-500 focus:outline-none"
          >
            {isOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F8FDFF] shadow-lg px-6 py-4 space-y-4 text-[#0073FF] font-medium">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Services
          </a>
          <a href="#" className="block">
            News
          </a>
          <button className="w-full bg-[#007FF4] text-white px-4 py-2 rounded-[25px] transition duration-200 font-bold">
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
