import React, { useEffect, useState } from "react"
import axios from "axios"
import comma from "../images/Comma.png"
import user1 from "../images/user-1.png"
import user2 from "../images/user-2.png"

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then(response => {
        setReviews(response.data.data || [])
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching reviews:", err)
        setError("Failed to load reviews")
        setLoading(false)
      })
  }, [])

  return (
    <section className="bg-[#F8FDFF] pt-16 md:pt-20 pb-16 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        {/* Section Header */}
        <h2 className="mb-8 sm:mb-12 font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-snug sm:leading-tight md:leading-[78px] text-[#003B79] text-center md:text-left">
          What Our Customers Say
        </h2>

        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-8">{error}</div>}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          {loading ? (
            <p className="text-gray-500 col-span-2 text-center">
              Loading reviews...
            </p>
          ) : reviews.length > 0 ? (
            reviews.slice(0, 2).map((review, index) => (
              <div
                key={index}
                className="w-full max-w-[577px] md:w-[90%] lg:w-[577px] h-auto md:h-[294px] relative bg-[#FFFFFF] rounded-[20px] p-6 sm:p-8 md:p-10 shadow-[0px_10px_50px_25px_#003B7913] flex flex-col justify-between"
              >
                {/* Quote Circle */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-[83px] sm:h-[83px] rounded-full bg-[#007FF4] flex items-center justify-center">
                  <img
                    src={comma}
                    alt="quote"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>

                {/* Review Text */}
                <p className="text-[#002348] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[32px] md:leading-[39px] mb-4 sm:mb-6">
                  {review.Reviews ||
                    review.review_text ||
                    "No review text available"}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <img
                    src={review.Image || review.image || user1}
                    alt={review.Name || "Reviewer"}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#002348] text-[16px] sm:text-[18px] md:text-2xl">
                      {review.Name || review.name || "Anonymous"}
                    </div>
                    <div className="text-[#002348] font-normal text-[14px] sm:text-[16px] md:text-[18px]">
                      {review.Position || review.title || "Patient"}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-2 text-center">
              No reviews available
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
