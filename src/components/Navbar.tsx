"use client"

import { useState, useEffect } from "react"

interface NavbarProps {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = ["About", "Products", "How It Works", "Vision"]

  // Navbar bottom border aligns with the flute; pot hangs below
  const LOGO_HEIGHT = 96
  const FLUTE_RATIO = 0.59
  const TOP_PAD = 10
  const logoLayoutHeight = Math.round(LOGO_HEIGHT * FLUTE_RATIO-2)

  return (
    <>
      <style>{`
        .nav-links-desktop { display: flex; }
        .nav-cta-desktop { display: flex; }
        .nav-logo-link { margin: 0; }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .navbar-mobile-center {
            justify-content: center !important;
          }
          .nav-logo-link {
            margin: 0 auto !important;
          }
        }
      `}</style>

      <nav
        className="navbar navbar-mobile-center"
        style={{
          background: scrolled
            ? "rgba(255, 253, 249, 0.98)"
            : "rgba(255, 253, 249, 0.85)",
          padding: `${TOP_PAD}px 24px 0`,
          flexWrap: "nowrap",
          alignItems: "stretch",
          boxShadow: scrolled ? "0 2px 20px rgba(45, 18, 0, 0.1)" : "none",
          overflow: "visible",
        }}
      >
        <a
          href="#about"
          className="nav-logo-link"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("about")
          }}
          style={{
            position: "relative",
            display: "block",
            flexShrink: 0,
            width: Math.round(LOGO_HEIGHT * (102 / 56)),
            height: logoLayoutHeight,
            textDecoration: "none",
            overflow: "visible",
            zIndex: 2,
          }}
          aria-label="MurliMadhav home"
        >
          <img
            src="/logo.svg"
            alt="MurliMadhav"
            width={102}
            height={56}
            style={{
              height: LOGO_HEIGHT,
              width: "auto",
              display: "block",
              position: "absolute",
              left: 0,
              top: 0,
              pointerEvents: "none",
            }}
          />
        </a>

        <div
          className="nav-links-desktop"
          style={{
            alignItems: "center",
            alignSelf: "stretch",
            height: logoLayoutHeight,
            gap: "28px",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(/\s+/g, "-"))}
              style={{
                background: "none",
                border: "none",
                color: "#5A2800",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "color 0.2s ease",
                padding: "4px 0",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLButtonElement).style.color = "#F5821F"
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLButtonElement).style.color = "#5A2800"
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          className="nav-cta-desktop"
          style={{
            alignItems: "center",
            alignSelf: "stretch",
            height: logoLayoutHeight,
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <button
            className="pill-btn pill-primary"
            onClick={onContactClick}
            id="navbar-contact-btn"
            style={{ whiteSpace: "nowrap" }}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </>
  )
}
