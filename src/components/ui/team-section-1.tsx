import * as React from "react"
import { cn } from "@/lib/utils"

interface SocialLink {
  icon: React.ElementType
  href: string
}

interface TeamMember {
  name: string
  designation: string
  imageSrc: string
  /** Crop zoom inside the circle (1 = default cover) */
  imageZoom?: number
  /** object-position for face framing, e.g. "50% 20%" */
  imagePosition?: string
  /** Pan after zoom (%). Negative X = subject moves right; negative Y = subject moves up */
  imageShiftX?: number
  imageShiftY?: number
  socialLinks?: SocialLink[]
}

interface TeamSectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode
  description: string
  members: TeamMember[]
  registerLink?: string
  logo?: React.ReactNode
  socialLinksMain?: SocialLink[]
}

function MemberCard({
  member,
  index,
}: {
  member: TeamMember
  index: number
}) {
  return (
    <div className="group relative flex w-full max-w-[280px] flex-col items-center bg-transparent px-6 pb-8 pt-4 text-center transition-all duration-300 ease-in-out hover:scale-[1.03]">
      {/* Hover wave — sits behind avatar + copy */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] origin-bottom scale-y-0 rounded-t-full bg-gradient-to-t from-[var(--orange)]/20 via-[var(--orange)]/8 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
        style={{ transitionDelay: `${index * 50}ms` }}
      />

      {/* Avatar + socials anchored to the circle */}
      <div
        className="relative z-10 mb-6"
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-transparent bg-transparent transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-[var(--orange)] sm:h-52 sm:w-52">
          <img
            src={member.imageSrc}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:[transform:scale(calc(var(--img-zoom)*1.08))_translate(var(--img-shift-x),var(--img-shift-y))]"
            style={
              {
                "--img-zoom": member.imageZoom ?? 1,
                "--img-shift-x": `${member.imageShiftX ?? 0}%`,
                "--img-shift-y": `${member.imageShiftY ?? 0}%`,
                objectPosition: member.imagePosition ?? "50% 30%",
                transform:
                  "scale(var(--img-zoom)) translate(var(--img-shift-x), var(--img-shift-y))",
              } as React.CSSProperties
            }
          />
        </div>

        {/* Social icons sit on the avatar rim — not crushed under the wave tip */}
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
            {member.socialLinks.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} social link`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--white)] text-[var(--prussian-blue)] shadow-[0_4px_14px_rgba(20,33,61,0.16)] ring-1 ring-[var(--alabaster-grey)] transition-colors hover:bg-[var(--orange)] hover:text-[var(--black)] hover:ring-[var(--orange)]"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </div>

      <h3
        className="relative z-10 mt-2 text-2xl font-semibold tracking-tight text-[var(--prussian-blue)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {member.name}
      </h3>
      <p className="relative z-10 mt-1.5 text-base text-[var(--prussian-blue)]/55">
        {member.designation}
      </p>
    </div>
  )
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref,
  ) => {
    const [top, ...rest] = members

    return (
      <section
        ref={ref}
        id="team"
        className={cn(
          "section-pad relative w-full overflow-hidden bg-[var(--white)]",
          className,
        )}
        style={{ padding: "80px 40px" }}
        {...props}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="h-full w-full" fill="none" aria-hidden="true">
            <defs>
              <pattern
                id="team-grid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20 0L0 0 0 20"
                  fill="none"
                  stroke="var(--prussian-blue)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1200px] items-center justify-center gap-16 text-center md:gap-20">
          {/* Header — matches landing section eyebrow + heading pattern */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-end md:text-left lg:gap-10">
            <div className="grid gap-3 text-center md:text-left">
              <p className="section-eyebrow">Our Team</p>
              <h2 className="section-heading text-[clamp(36px,5vw,56px)]">
                {title}
              </h2>
              <p className="max-w-[560px] text-[16px] leading-relaxed text-[var(--prussian-blue)]/60 md:text-[17px]">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && (
                <div
                  className="text-2xl font-bold text-[var(--prussian-blue)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {logo}
                </div>
              )}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--orange)] px-8 text-sm font-medium text-[var(--black)] shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--orange)] disabled:pointer-events-none disabled:opacity-50"
                >
                  REGISTER NOW
                </a>
              )}
            </div>
          </div>

          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-2">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--prussian-blue)]/55 transition-colors hover:text-[var(--orange)]"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}

          {/* Pyramid: 1 on top, 2 below — more breathing room */}
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:gap-16 lg:gap-20">
            {top && (
              <div className="flex w-full justify-center">
                <MemberCard member={top} index={0} />
              </div>
            )}
            {rest.length > 0 && (
              <div className="flex w-full flex-wrap items-start justify-center gap-10 md:gap-20 lg:gap-28">
                {rest.map((member, index) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={index + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  },
)

TeamSection.displayName = "TeamSection"
