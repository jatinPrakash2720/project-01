"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProductsSection from "@/components/ProductsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import VisionSection from "@/components/VisionSection"
import AnonMessageSection from "@/components/AnonMessageSection"
import ContactModal from "@/components/ContactModal"
import SuccessModal from "@/components/SuccessModal"
import Footer from "@/components/Footer"

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  const handleSuccess = () => {
    setContactOpen(false)
    setSuccessOpen(true)
  }

  return (
    <>
      <Navbar onContactClick={openContact} />

      <main>
        <HeroSection onContactClick={openContact} />
        <ProductsSection />
        <HowItWorksSection />
        <VisionSection />
        <AnonMessageSection onSuccess={handleSuccess} />
      </main>

      <Footer onContactClick={openContact} />

      <ContactModal
        isOpen={contactOpen}
        onClose={closeContact}
        onSuccess={handleSuccess}
      />

      <SuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </>
  )
}
