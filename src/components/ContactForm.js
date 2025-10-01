import React from "react"
import Oval3 from "../images/Oval Copy 3.png"

const ContactForm = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FDFF] relative overflow-hidden">
      {/* Decorative oval in top-right corner */}
      <img
        src={Oval3}
        className="absolute top-[-50px] md:top-[-70px] right-[-10px] z-0 hidden sm:block"
        alt="Decorative oval"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center bg-[#007FF4] rounded-[20px] px-4 sm:px-6 md:px-16 py-12 sm:py-16 w-full md:w-[90%] lg:w-[1198px] h-auto md:h-[478px]">
        {/* Heading */}
        <h2 className="text-[#FFFFFF] font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[60px] md:leading-[78px] mb-4 font-sans">
          Subscribe to Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] font-normal mb-8 sm:mb-12 font-sans leading-[26px] sm:leading-[32px] md:leading-[39px]">
          We have a wide experience in experience design and strategy,
        </p>

        {/* Input + Button */}
        <div className="bg-[#FFFFFF] rounded-[10px] shadow-md p-2 flex flex-col sm:flex-row items-center justify-between w-full max-w-[90%] sm:max-w-[846px] h-auto sm:h-[120px] mx-auto gap-4 sm:gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-4 text-[#9B9B9B] font-sans rounded-md font-normal border-none focus:outline-none focus:ring-0 text-base sm:text-lg w-full"
          />
          <button className="w-full sm:w-[176px] h-[60px] sm:h-[74px] px-6 sm:px-8 py-3 rounded-full bg-[#007FF4] text-[#FFFFFF] font-bold text-base sm:text-lg font-sans leading-[28px] sm:leading-[39px]">
            Send Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
