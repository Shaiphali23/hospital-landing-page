import React from "react"
import teethImg from "../images/Shape.png"
import path from "../images/path.png"
import rectangle from "../images/Rectangle.png"
import path1 from "../images/Path (1).png"
import shape1 from "../images/Shape (1).png"
import path2 from "../images/Path (2).png"
import shape2 from "../images/Shape (2).png"
import shape3 from "../images/Shape (3).png"
import path3 from "../images/Path (3).png"
import path4 from "../images/Path (4).png"
import path5 from "../images/Path (5).png"
import path6 from "../images/Path (6).png"
import path7 from "../images/Path (7).png"
import path8 from "../images/Path (8).png"
import path9 from "../images/Path (9).png"
import path10 from "../images/Path (10).png"
import shape4 from "../images/Shape (4).png"
import shape5 from "../images/Shape (5).png"
import arrowImg from "../images/Path Copy.png"

const Services = () => {
  return (
    <section className="bg-[#F8FDFF] pt-10 pb-20 sm:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="py-8 sm:py-12 px-4 sm:px-8 text-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-[54px] mx-auto text-[#003B79] leading-tight sm:leading-[64px] md:leading-[78px] mb-4 font-sans font-semibold max-w-[90%]">
            Our Services
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] md:leading-[39px] text-[#002348] font-sans font-normal max-w-xl md:max-w-2xl mx-auto opacity-90">
            We provide the most full medical services, so every person could
            heave the opportunity to receive qualitative medical help.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 justify-items-center">
          {/* Dental Care */}
          <div className="bg-[#FFFFFF] rounded-[20px] shadow-[0px_10px_50px_25px_#003B7913] overflow-hidden w-full sm:w-[273px] h-auto sm:h-[323px]">
            <div className="flex flex-col items-center mb-4 p-6">
              {/* Image on top */}
              <div className="relative w-[114px] h-[128px] mb-6 flex items-center justify-center">
                <img
                  src={teethImg}
                  alt="Dental Care Icon"
                  className="w-[114px] h-[128px] object-contain"
                />
                <img src={path} alt="Dental Care Icon" className="absolute left-3 top-4" />
                <img src={rectangle} alt="Dental Care Icon" className="absolute left-8 top-4" />
              </div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#002348] font-sans">
                Dental Care
              </h3>
            </div>
          </div>

          {/* Pulmonary */}
          <div className="p-6 bg-[#007EF3] rounded-[20px] w-full sm:w-[273px] h-auto sm:h-[373px] shadow-[0px_10px_50px_25px_#007EF342]">
            <div className="flex flex-col items-center justify-between h-full">
              {/* Image wrapper */}
              <div className="relative w-[128px] h-[115px] mb-6 flex items-center justify-center">
                <img src={shape1} alt="Pulmonary Shape" className="w-full h-full object-contain" />
                <img src={path1} alt="Pulmonary Icon" className="absolute top-19 left-17" />
              </div>

              <h3 className="mb-8 sm:mb-12 md:mb-16 text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#FFFFFF] font-sans text-center">
                Pulmonary
              </h3>

              <div className="flex justify-between items-center w-full px-4 sm:px-6">
                <button className="text-[#FFFFFF] font-sans font-semibold text-[14px] sm:text-[16px] hover:text-green-800 transition-colors duration-300 flex items-center">
                  LEARN MORE
                </button>
                <div className="text-[#FFFFFF]">
                  <img src={arrowImg} alt="Arrow" />
                </div>
              </div>
            </div>
          </div>

          {/* Neurological */}
          <div className="shadow-[0px_10px_50px_25px_#003B7913] p-6 w-full sm:w-[273px] h-auto sm:h-[323px] rounded-[20px] bg-[#FFFFFF]">
            <div className="h-full flex flex-col items-center mb-4 p-6">
              <div className="relative w-[128px] h-[122px] mb-6 flex flex-col items-center justify-center">
                <img src={path2} alt="Neuro Icon" className="absolute top-12 left-12" />
                <img src={shape2} alt="Neuro Icon" className="absolute top-18 left-19" />
                <img src={shape3} alt="Neuro Icon" className="absolute" />
                <img src={path3} alt="Neuro Icon" className="absolute top-5 left-8" />
                <img src={path4} alt="Neuro Icon" className="absolute top-5 left-16" />
                <img src={path5} alt="Neuro Icon" className="absolute top-16 left-8" />
                <img src={path6} alt="Neuro Icon" className="absolute top-9 left-20" />
                <img src={path7} alt="Neuro Icon" className="absolute top-10 left-3" />
              </div>
              <h3 className="font-sans font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#002348]">
                Neurological
              </h3>
            </div>
          </div>

          {/* Pediatrics */}
          <div className="shadow-[0px_10px_50px_25px_#003B7913] p-6 w-full sm:w-[273px] h-auto sm:h-[323px] rounded-[20px] bg-[#FFFFFF]">
            <div className="h-full flex flex-col items-center mb-4 p-6">
              <div className="relative w-[96px] h-[128px] mb-6 flex flex-col items-center justify-center">
                <img src={path8} alt="Pediatrics Icon" className="absolute left-6 bottom-5" />
                <img src={path9} alt="Pediatrics Icon" className="absolute left-6 bottom-7" />
                <img src={path10} alt="Pediatrics Icon" className="absolute left-20 bottom-13" />
                <img src={shape4} alt="Pediatrics Icon" className="absolute" />
                <img src={shape5} alt="Pediatrics Icon" className="absolute" />
              </div>
              <h3 className="font-sans font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#002348]">
                Pediatrics
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
