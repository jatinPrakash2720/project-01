'use client';

function LinkedinIcon({ className }: { className?: string }) {
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

export default function Footer({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer
      className="site-footer"
      style={{
        background: "var(--prussian-blue)",
        borderTop: "1px solid rgba(252, 163, 17, 0.1)",
        padding: "60px 40px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(252, 163, 17, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Three corner circles — bottom-left */}
      <div className="footer-orbs" aria-hidden="true">
        <span className="footer-orb" />
        <span className="footer-orb" />
        <span className="footer-orb" />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                padding: "10px 16px",
                borderRadius: "var(--radius-surface)",
                background: "var(--white)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                border: "1px solid rgba(252, 163, 17, 0.12)",
              }}
            >
              <img
                src="/logo.svg"
                alt="MurliMadhav"
                width={102}
                height={56}
                style={{ height: 64, width: "auto", display: "block" }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(229, 229, 229,0.45)",
                lineHeight: 1.75,
                maxWidth: "300px",
                marginBottom: "24px",
              }}
            >
              A dairy-first commerce platform bringing farm-fresh milk, paneer,
              ghee, and more directly to your doorstep. Digitizing the
              traditional dairy ecosystem — one household at a time.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div
                className="status-badge status-coming"
                style={{ fontSize: "11px" }}
              >
                <div
                  className="glow-dot"
                  style={{ width: 5, height: 5, background: "var(--orange)" }}
                />
                App launching soon
              </div>
              <a
                href="https://www.linkedin.com/company/murlimadhav/home"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MurliMadhav on LinkedIn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(252, 163, 17, 0.35)",
                  color: "var(--orange)",
                  textDecoration: "none",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--orange)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--black)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent"
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--orange)"
                }}
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(229, 229, 229,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Platform
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {[
                "Customer App",
                "Delivery Partner App",
                "Admin Dashboard",
                "Subscriptions (Soon)",
                "Referral Program (Soon)",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,248,238,0.5)",
                    cursor: "default",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLSpanElement).style.color = "var(--orange)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLSpanElement).style.color =
                      "rgba(255,248,238,0.5)"
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(229, 229, 229,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {[
                "About Us",
                "Our Vision",
                "Products",
                "How It Works",
                "Contact Us",
              ].map((item) => (
                <button
                  key={item}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "14px",
                    color: "rgba(255,248,238,0.5)",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s ease",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={() => {
                    if (item === "Contact Us") onContactClick()
                    else {
                      const id = item.toLowerCase().replace(/\s+/g, "-")
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLButtonElement).style.color =
                      "var(--orange)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLButtonElement).style.color =
                      "rgba(255,248,238,0.5)"
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — left padding clears the corner orbs */}
        <div
          style={{
            paddingTop: "28px",
            paddingLeft: "96px",
            borderTop: "1px solid rgba(252, 163, 17, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(229, 229, 229,0.3)" }}>
            © 2025 MurliMadhav. All rights reserved.
          </p>
          <span style={{ fontSize: "12px", color: "rgba(229, 229, 229,0.3)" }}>
            Freshness Guaranteed
          </span>
        </div>
      </div>
    </footer>
  )
}


