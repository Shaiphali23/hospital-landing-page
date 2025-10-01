import React from "react"

const Hero = () => {
  return (
    <section className="w-full bg-[#F8FDFF] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-between relative">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col gap-4 sm:gap-6 font-sans text-center md:text-left">
          <p className="text-[18px] sm:text-[20px] md:text-[21px] font-bold text-[#002348]">
            Welcome to MediCare+ Clinic
          </p>

          <h1 className="leading-tight sm:leading-[64px] md:leading-[78px] text-[32px] sm:text-[48px] md:text-[64px] font-bold text-[#003B79]">
            Best Specialists
          </h1>

          <p className="text-[#002348] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] md:leading-[39px] font-normal max-w-xl mx-auto md:mx-0">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 font-bold font-sans text-[14px] sm:text-[15px] md:text-[16px] justify-center md:justify-start">
            <button className="bg-[#007FF4] text-white px-6 py-3 rounded-full w-full sm:w-[200px] md:w-[259px] h-[50px] sm:h-[55px] md:h-[60px]">
              Make an Appointment
            </button>
            <button className="bg-white border border-gray-400 text-[#007DF2] px-6 py-3 rounded-[30px] w-full sm:w-[200px] md:w-[259px] h-[50px] sm:h-[55px] md:h-[60px]">
              Departments
            </button>
          </div>
        </div>

        {/* Right Content Placeholder (Image or Illustration) */}
        <div className="bg-[#EBEEFF] w-full sm:w-[400px] md:w-[500px] lg:w-[574px] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[672px] rounded-[20px] sm:rounded-[28px] md:rounded-[32px] mb-8 md:mb-0"></div>
      </div>
    </section>
  )
}

export default Hero
