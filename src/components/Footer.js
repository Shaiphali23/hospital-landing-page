import React from "react"
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import twitter from "../images/twitter.png"

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7FBFF]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-10">
          {/* Logo - Left Side */}
          <div className="text-[28px] sm:text-[34px] font-bold font-sans mb-4 md:mb-0">
            <span className="text-[#0073FF]">Medi</span>
            <span className="text-orange-400">Care+</span>
          </div>

          {/* Navigation Menu */}
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-[#0073FF] text-[14px] sm:text-[16px] font-normal font-sans">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">News</li>
          </ul>
        </div>
      </div>

      {/* Bottom Full-Width Section */}
      <div className="bg-[#ECF4FF] w-full h-[241px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
          {/* Social Icons */}
          <div className="flex gap-3 mb-4 sm:mb-0">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F7FBFF] rounded-full flex items-center justify-center shadow-sm"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="#"
              aria-label="Google"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F7FBFF] rounded-full flex items-center justify-center shadow-sm"
            >
              <img src={google} alt="Google" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F7FBFF] rounded-full flex items-center justify-center shadow-sm"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#667C94] font-light text-sm sm:text-base leading-[28px] sm:leading-[34px] text-center sm:text-left">
            ©2023 - 011BQ
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
