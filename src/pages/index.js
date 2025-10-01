import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import DoctorsSection from "../components/DoctorsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import DoctorNameSection from "../components/DoctorNameSection"

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <DoctorsSection />
      <DoctorNameSection/>
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default index
