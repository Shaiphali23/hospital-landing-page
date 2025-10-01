import React from "react"
import QualifiedDoctor from "../images/doctor-woman.png"
import EmergencyCare from "../images/doctor-woman copy.png"
import ServiceImg from "../images/doctor-woman copy 2.png"

const DoctorsSection = () => {
  return (
    <section className="bg-[#FFFFFF] pt-30 pb-20 lg:pt-60 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-34 lg:gap-12 items-center justify-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-semibold text-[54px] leading-[78px] text-[#003B79] font-sans">
              Clinic With Innovative
            </h1>

            <p className="font-sans font-normal text-[20px] leading-[39px] text-[#002348]">
              We provide the most full medical services, so every person could
              have the opportunity to receive qualitative medical help.
            </p>

            <button className="font-sans font-bold text-[16px] text-[#FFFFFF] w-[186px] h-[60px] rounded-[30px] bg-[#007FF4] transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Content - Features Grid with exact positioning */}
          <div className="relative">
            {/* Grid container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Qualified Doctors - Top Left */}
              <div className="relative p-6 shadow-[0px_10px_50px_25px_rgba(0,59,121,0.08)] w-full md:w-full lg:w-[282px] h-[236px] rounded-[20px] bg-[#FFFFFF] flex flex-col justify-center">
                <div className="mb-6 absolute top-[-80px] left-10">
                  <img src={QualifiedDoctor} className="w-46 h-46" />
                </div>
                <h3 className="absolute bottom-16 font-sans font-semibold text-[24px] text-[#002348]">
                  Qualified Doctors
                </h3>
              </div>

              {/* Emergency Care - Top Right */}
              <div className="relative mt-40 p-6 shadow-[0px_10px_50px_25px_rgba(0,59,121,0.08)] w-full md:w-full lg:[282px] h-[242px] rounded-[20px] bg-[#FFFFFF] flex flex-col justify-center">
                <div className="absolute mb-6 top-[-80px] left-10">
                  <img src={EmergencyCare} className="w-46 h-46" />
                </div>
                <h3 className="absolute bottom-16 font-sans font-semibold text-[24px] text-[#002348]">
                  Emergency Care
                </h3>
              </div>

              {/* 24 Hours Service - Bottom Left */}
              <div className="relative mt-2 p-6 shadow-[0px_10px_50px_25px_rgba(0,59,121,0.08)] w-full md:w-full lg:[282px] h-[242px] rounded-[20px] bg-[#FFFFFF] flex flex-col justify-center">
                <div className="absolute mb-6 top-[-80px] left-10">
                  <img src={ServiceImg} className="w-46 h-46" />
                </div>
                <h3 className="absolute bottom-16 font-sans font-semibold text-[24px] text-[#002348]">
                  24 Hours Service
                </h3>
              </div>

              {/* Empty slot - Bottom Right (intentionally left empty) */}
              <div className="w-full hidden lg:w-[282px] h-[242px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection
