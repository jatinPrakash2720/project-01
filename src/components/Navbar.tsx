"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/ui/navbar"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onContactClick: () => void
}

const navigationLinks = [
  {
    name: "Menu",
    items: [
      { href: "#about", label: "About" },
      { href: "#products", label: "Products" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#vision", label: "Vision" },
      { href: "#team", label: "Team" },
    ],
  },
]

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const update = () => {
      const y = Math.max(window.scrollY, 0)

      // At the top, always use the large-gap resting state (image 2)
      if (y <= 8) {
        setScrolled(false)
        setHidden(false)
        lastY.current = y
        ticking.current = false
        return
      }

      setScrolled(y > 40)

      // Hide once user scrolls down; only reveal again at the very top
      const delta = y - lastY.current
      if (delta > 6) {
        setHidden(true)
      }

      lastY.current = y
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.startsWith("#") ? href.slice(1) : href
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Keeps hero gap stable — fixed nav no longer steals layout space */}
      <div className="navbar-spacer" aria-hidden="true" />

      <nav
        className={cn(
          "navbar",
          scrolled && "navbar-scrolled",
          hidden && "navbar-hidden",
        )}
        aria-label="Primary"
      >
        <div className="navbar-inner">
          <div className="navbar-left">
            <MobileNav nav={navigationLinks} onNavigate={scrollTo} />

            <a
              href="#about"
              className="navbar-logo"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("#about")
              }}
              aria-label="MurliMadhav home"
            >
              {/* Full logo hangs below the flute line into the hero */}
              <img
                src="/logo.svg"
                alt="MurliMadhav"
                width={175}
                height={96}
                className="navbar-logo-img"
              />
            </a>
          </div>

          <div className="navbar-links">
            {navigationLinks[0].items.map((link) => (
              <button
                key={link.href}
                type="button"
                className="navbar-link"
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="navbar-right">
            <Button
              id="navbar-contact-btn"
              type="button"
              className="pill-btn pill-primary navbar-cta"
              onClick={onContactClick}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
