"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface iNavItem {
  heading: string
  href: string
  subheading?: string
  imgSrc?: string
}

interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void
  index: number
  onNavigate?: (href: string) => void
}

interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void
  navItems: iNavItem[]
  footer?: React.ReactNode
  onNavigate?: (href: string) => void
}

interface iHeaderProps {
  navItems?: iNavItem[]
  footer?: React.ReactNode
  onNavigate?: (href: string) => void
  /** Controlled open state — when provided, parent owns the toggle */
  isActive?: boolean
  setIsActive?: (isActive: boolean) => void
  /** Hide the built-in floating hamburger (use site navbar icon instead) */
  hideTrigger?: boolean
}

export const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
}

export const defaultNavItems: iNavItem[] = [
  {
    heading: "About",
    href: "#about",
    subheading: "Our story",
  },
  {
    heading: "Products",
    href: "#products",
    subheading: "Fresh dairy lineup",
  },
  {
    heading: "How It Works",
    href: "#how-it-works",
    subheading: "Four simple steps",
  },
  {
    heading: "Vision",
    href: "#vision",
    subheading: "Where we're headed",
  },
  {
    heading: "Team",
    href: "#team",
    subheading: "People behind MurliMadhav",
  },
]

const NavLink: React.FC<iNavLinkProps> = ({
  heading,
  href,
  setIsActive,
  onNavigate,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      onNavigate?.(href)
    }
    setIsActive(false)
  }

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between py-3 transition-colors duration-500 md:py-5"
    >
      <Link
        href={href}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        ref={ref}
        className="w-full"
      >
        <div className="relative flex items-baseline">
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-[1.75rem] font-bold tracking-tight text-[var(--prussian-blue)] transition-colors duration-500 group-hover:text-[var(--orange)] md:text-[2.15rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {heading.split("").map((letter, i) => {
              return (
                <motion.span
                  key={i}
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              )
            })}
          </motion.span>
        </div>
      </Link>
    </motion.div>
  )
}

const Curve: React.FC = () => {
  const [height, setHeight] = useState(800)

  useEffect(() => {
    const update = () => setHeight(window.innerHeight)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  }

  return (
    <svg
      className="absolute top-0 -left-[99px] h-full w-[100px] stroke-none"
      style={{ fill: "var(--white)" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  )
}

export const CurvedNavbar: React.FC<iCurvedNavbarProps> = ({
  setIsActive,
  navItems,
  footer,
  onNavigate,
}) => {
  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 z-[200] h-[100dvh] w-[min(82vw,24rem)] bg-[var(--white)] shadow-[-12px_0_40px_rgba(20,33,61,0.12)]"
    >
      {/* Close control lives in the sidebar — navbar is hidden while open */}
      <button
        type="button"
        onClick={() => setIsActive(false)}
        aria-label="Close menu"
        className="absolute top-5 right-5 z-[210] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--prussian-blue)]/15 bg-[var(--white)] text-[var(--prussian-blue)] transition-colors hover:border-[var(--orange)] hover:bg-[var(--orange)] hover:text-[var(--black)]"
      >
        <MenuToggleIcon open />
      </button>

      <div className="flex h-full flex-col justify-between pt-20">
        <div className="mt-0 flex flex-col gap-1 px-6 sm:px-10 md:px-16">
          <section className="mt-0 bg-transparent">
            <div className="mx-auto max-w-7xl">
              {navItems.map((item, index) => {
                return (
                  <NavLink
                    key={item.href}
                    index={index + 1}
                    setIsActive={setIsActive}
                    onNavigate={onNavigate}
                    {...item}
                  />
                )
              })}
            </div>
          </section>
        </div>
        {footer}
      </div>
      <Curve />
    </motion.div>
  )
}

/** Existing site hamburger lines — preserved visual, theme colors */
export function MenuToggleIcon({
  open,
  className,
}: {
  open: boolean
  className?: string
}) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative size-4">
        <span
          className={cn(
            "absolute left-0 block h-0.5 w-4 bg-[var(--prussian-blue)] transition-all duration-100",
            open ? "top-[0.4rem] -rotate-45" : "top-1",
          )}
        />
        <span
          className={cn(
            "absolute left-0 block h-0.5 w-4 bg-[var(--prussian-blue)] transition-all duration-100",
            open ? "top-[0.4rem] rotate-45" : "top-2.5",
          )}
        />
      </div>
      <span className="sr-only">Toggle Menu</span>
    </div>
  )
}

const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  footer,
  onNavigate,
  isActive: controlledActive,
  setIsActive: controlledSet,
  hideTrigger = false,
}) => {
  const [internalActive, setInternalActive] = useState(false)
  const isActive = controlledActive ?? internalActive
  const setIsActive = controlledSet ?? setInternalActive

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      {!hideTrigger && (
        <div className="relative">
          <button
            type="button"
            onClick={handleClick}
            aria-expanded={isActive}
            aria-label="Toggle navigation menu"
            className="fixed top-0 right-0 z-50 m-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-none bg-[var(--white)] md:right-0"
          >
            <MenuToggleIcon open={isActive} />
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            footer={footer}
            navItems={navItems}
            setIsActive={setIsActive}
            onNavigate={onNavigate}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
