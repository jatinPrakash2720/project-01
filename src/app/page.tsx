"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProductsSection from "@/components/ProductsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import VisionSection from "@/components/VisionSection"
import TeamSectionDemo from "@/components/ui/demo"
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
      <div className="page-frame">
        <div className="page-shell">
          <Navbar onContactClick={openContact} />

          <div className="page-main-wrap">
            <div className="design-orbs" aria-hidden="true">
              <span className="design-orb" />
              <span className="design-orb" />
              <span className="design-orb" />
            </div>

            <main className="page-main">
              <HeroSection onContactClick={openContact} />
              <ProductsSection />
              <HowItWorksSection />
              <VisionSection />
              <TeamSectionDemo />
              <AnonMessageSection onSuccess={handleSuccess} />
              <Footer onContactClick={openContact} />
            </main>
          </div>
        </div>
      </div>

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
