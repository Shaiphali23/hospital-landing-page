import React from "react"
import Oval2 from "../images/oval copy 2.png"

const doctors = [
  { name: "Dr. Awaatif Al", specialization: "Dental Care" },
  { name: "Dr. Filipa Gaspar", specialization: "Cardiology" },
  { name: "Dr. Sukhmeet Gorae", specialization: "Neurological" },
  { name: "Dr. Siri Jakobsson", specialization: "Pediatrics" },
]

const DoctorsNameSection = () => {
  return (
    <section className="bg-[#F8FDFF] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative oval in top-right corner */}
      <img
        src={Oval2}
        className="absolute top-0 right-0 z-0 hidden sm:block"
        alt="Decorative oval"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <h2 className="font-sans text-center font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-snug md:leading-tight text-[#003B79] mb-4 sm:mb-6">
          We Have The Best Specialist
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto text-center font-normal text-[#002348] mb-8 sm:mb-12 text-[14px] sm:text-[16px] md:text-[18px]">
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="shadow-[0px_10px_50px_25px_#003B7913] w-full lg:w-[274px] md:w-full h-[448px] rounded-[20px] bg-white overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-[220px] sm:h-[260px] md:h-[300px] bg-[#AED3E2]"></div>

              {/* Text content */}
              <div className="p-4 sm:p-6 text-left">
                <h3 className="text-[#002348] font-sans font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-1 sm:mb-2">
                  {doctor.name}
                </h3>
                <p className="text-[#002348] font-sans text-[14px] sm:text-[15px] md:text-[16px]">
                  {doctor.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsNameSection
