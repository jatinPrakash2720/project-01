"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Header, {
  MenuToggleIcon,
  defaultNavItems,
} from "@/components/ui/curved-menu"
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [appeared, setAppeared] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setAppeared(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    lastY.current = window.scrollY

    const update = () => {
      const y = Math.max(window.scrollY, 0)

      // At the top, always use the large-gap resting state
      if (y <= 8) {
        setScrolled(false)
        setHidden(false)
        lastY.current = y
        ticking.current = false
        return
      }

      setScrolled(y > 40)

      // Hide once user scrolls down; only reveal again at the very top
      // Keep navbar visible while the curved menu is open
      const delta = y - lastY.current
      if (!menuOpen && delta > 6) {
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
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      setHidden(false)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

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
          appeared && "navbar-appear",
          scrolled && "navbar-scrolled",
          (hidden || menuOpen) && "navbar-hidden",
        )}
        aria-label="Primary"
        aria-hidden={menuOpen}
      >
        <div className="navbar-inner">
          <div className="navbar-left navbar-anim-item">
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

          <div className="navbar-links navbar-anim-item delay-100">
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

          <div className="navbar-right navbar-anim-item delay-200">
            <Button
              id="navbar-contact-btn"
              type="button"
              className="pill-btn pill-primary navbar-cta"
              onClick={onContactClick}
            >
              Contact Us
            </Button>

            {/* Existing hamburger visual — moved to the right, opens curved menu */}
            <button
              type="button"
              className="navbar-menu-toggle"
              aria-expanded={menuOpen}
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {/* Keep burger icon — close lives inside the curved panel */}
              <MenuToggleIcon open={false} />
            </button>
          </div>
        </div>
      </nav>

      <Header
        hideTrigger
        isActive={menuOpen}
        setIsActive={setMenuOpen}
        navItems={defaultNavItems}
        onNavigate={scrollTo}
      />
    </>
  )
}
