import React from "react"
import { TeamSection } from "@/components/ui/team-section-1"

/** Lucide removed brand icons — same stroke API as lucide-react icons */
function Instagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function TeamSectionDemo() {
  const teamMembers = [
    {
      name: "Sarthak",
      designation: "Founder of MurliMadhav",
      imageSrc: "/sarthak.jpeg",
      imageZoom: 2.85,
      imagePosition: "50% 30%",
      imageShiftY: -4,
      imageShiftX: 1,
      socialLinks: [
        { icon: Instagram, href: "https://www.instagram.com/johnn274/" },
      ],
    },
    {
      name: "Himanshu Kumar",
      designation: "Developer",
      imageSrc: "/himanshu.jpeg",
      imageZoom: 1.5,
      imagePosition: "50% 25%",
      imageShiftX: 2,
      socialLinks: [
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/himanshukumard/",
        },
        {
          icon: Instagram,
          href: "https://www.instagram.com/him_anshu1104/",
        },
      ],
    },
    {
      name: "Shivam Daksh",
      designation: "Developer",
      imageSrc: "/shivam.png",
      imageZoom: 1.16,
      imagePosition: "50% 28%",
      socialLinks: [
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/shivamdaksh01/",
        },
        {
          icon: Instagram,
          href: "https://www.instagram.com/s.k.daksh01/",
        },
      ],
    },
  ]

  return (
    <TeamSection
      title={
        <>
          The people building <span className="gradient-text">fresh dairy</span>{" "}
          for every home.
        </>
      }
      description="Founder-led and builder-driven — Sarthak, Himanshu, and Shivam are digitizing the traditional dairy ecosystem, one household at a time."
      members={teamMembers}
    />
  )
}
