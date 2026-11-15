"use client"

import { useEffect, useRef } from "react"

export default function HeroSection({
  onContactClick,
}: {
  onContactClick: () => void
}) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reveal = () => {
      section.querySelectorAll(".animate-when-visible").forEach((el, i) => {
        setTimeout(() => el.classList.add("is-visible"), i * 120)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal()
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(section)

    const failsafe = window.setTimeout(reveal, 2000)
    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section scroll-section hero-section"
      style={{
        background:
          "linear-gradient(165deg, var(--white) 0%, var(--alabaster-grey) 48%, var(--white) 100%)",
        paddingTop: "64px",
        minHeight: "min(100vh, 900px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "6%",
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(252, 163, 17, 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "4%",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(252, 163, 17, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-grid">
        <div>
          <p
            className="animate-when-visible section-eyebrow"
            style={{ marginBottom: "24px" }}
          >
            Farm to doorstep
          </p>

          <h1
            className="animate-when-visible delay-100 hero-heading"
            style={{
              color: "var(--prussian-blue)",
              marginBottom: "16px",
            }}
          >
            Fresh Dairy,
            <br />
            <span className="gradient-text">Delivered Daily</span>
            <a
              href="https://www.linkedin.com/company/murlimadhav/home"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-linkedin-icon"
              id="hero-linkedin-icon"
              aria-label="Visit MurliMadhav on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <span className="coming-soon-badge">
              <span className="coming-soon-dot" />
              Coming Soon
            </span>
          </h1>

          <p
            className="animate-when-visible delay-200"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 500,
              color: "var(--prussian-blue)",
              marginBottom: "12px",
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
            }}
          >
            Fresh mornings start with pure choices
          </p>

          <h2
            className="animate-when-visible delay-200"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 400,
              color: "rgba(20, 33, 61, 0.6)",
              marginBottom: "28px",
              lineHeight: 1.4,
            }}
          >
            From our dairy to your doorstep.
          </h2>

          <p
            className="animate-when-visible delay-300"
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(20, 33, 61, 0.55)",
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            MurliMadhav is a dairy-first commerce platform modernizing how
            households get their daily milk, paneer, ghee, butter and more —
            fresh from our own dairy, delivered on your schedule.
          </p>

          <div
            className="animate-when-visible delay-400 hero-cta-row"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button
              className="pill-btn pill-primary"
              style={{ fontSize: "15px", padding: "14px 32px" }}
              onClick={onContactClick}
              id="hero-contact-btn"
            >
              Contact Us
            </button>
            <button
              className="pill-btn pill-outline"
              style={{ fontSize: "15px", padding: "14px 32px" }}
              onClick={() => {
                const section = document.getElementById("message")
                section?.scrollIntoView({ behavior: "smooth" })
                setTimeout(
                  () => document.getElementById("anon-message")?.focus(),
                  600,
                )
              }}
              id="hero-feedback-btn"
            >
              Share Feedback
            </button>
          </div>

          <div
            className="animate-when-visible delay-500 hero-stats"
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "64px",
              paddingTop: "56px",
              borderTop: "1px solid rgba(20, 33, 61, 0.08)",
            }}
          >
            {[
              { num: "100%", label: "Farm Fresh" },
              { num: "0", label: "Middlemen" },
              { num: "∞", label: "Freshness" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    fontFamily: "var(--font-display)",
                    color: "var(--orange)",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(20, 33, 61, 0.5)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-when-visible delay-200 hero-phone-wrap"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "480px",
          }}
        >
          <div className="hero-phone">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "5px",
                  borderRadius: "3px",
                  background: "rgba(252, 163, 17,0.2)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 8px 12px",
                borderBottom: "1px solid rgba(252, 163, 17,0.1)",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "rgba(229, 229, 229,0.45)",
                  fontWeight: 500,
                }}
              >
                9:41 AM
              </span>
              <div
                style={{
                  width: "14px",
                  height: "8px",
                  border: "1.5px solid rgba(229, 229, 229,0.35)",
                  borderRadius: "2px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "1px",
                    background: "rgba(252, 163, 17,0.65)",
                    borderRadius: "1px",
                    width: "70%",
                  }}
                />
              </div>
            </div>

            <div style={{ padding: "16px 8px 8px" }}>
              <div
                style={{
                  fontSize: "10px",
                  color: "rgba(229, 229, 229,0.4)",
                  marginBottom: "4px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Good Morning
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--white)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Your Order
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "0 4px",
              }}
            >
              {[
                {
                  name: "Farm Milk",
                  qty: "1L",
                  price: "₹52",
                  color: "var(--orange)",
                },
                {
                  name: "Soft Paneer",
                  qty: "250g",
                  price: "₹89",
                  color: "var(--orange)",
                },
                {
                  name: "Pure Ghee",
                  qty: "500ml",
                  price: "₹320",
                  color: "var(--prussian-blue)",
                },
                {
                  name: "Set Curd",
                  qty: "400g",
                  price: "₹44",
                  color: "var(--prussian-blue)",
                },
              ].map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background:
                      i === 0
                        ? "rgba(252, 163, 17,0.1)"
                        : "rgba(255,255,255,0.03)",
                    border: `1px solid ${i === 0 ? "rgba(252, 163, 17,0.22)" : "rgba(255,255,255,0.05)"}`,
                    borderRadius: "var(--radius-surface)",
                    padding: "10px 12px",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--white)",
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "rgba(229, 229, 229,0.45)",
                      }}
                    >
                      {item.qty}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: item.color,
                    }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                margin: "12px 4px 0",
                padding: "12px 14px",
                background: "rgba(252, 163, 17,0.06)",
                border: "1px solid rgba(252, 163, 17,0.16)",
                borderRadius: "var(--radius-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "rgba(229, 229, 229,0.4)",
                    marginBottom: "2px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Next Delivery
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--orange)",
                  }}
                >
                  Tomorrow 6–7 AM
                </div>
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  background:
                    "linear-gradient(135deg, var(--orange), var(--orange))",
                  borderRadius: "var(--radius-surface)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Pre-Order
              </div>
            </div>

            <div
              style={{
                margin: "10px 4px 4px",
                padding: "12px 14px",
                background: "rgba(252, 163, 17,0.08)",
                borderRadius: "var(--radius-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ fontSize: "12px", color: "rgba(229, 229, 229,0.55)" }}
              >
                Total
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "var(--white)",
                  fontFamily: "var(--font-display)",
                }}
              >
                ₹505
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll-hint"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(20, 33, 61, 0.28)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.16em",
          animation: "fadeSlideUp 1s ease 1.5s both",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(180deg, rgba(252, 163, 17, 0.35), transparent)",
            animation: "scaleIn 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  )
}
