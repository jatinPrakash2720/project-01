'use client';

export default function Footer({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer
      className="site-footer"
      style={{
        background: '#2A0E00',
        borderTop: '1px solid rgba(245, 130, 31, 0.1)',
        padding: '60px 40px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(245, 130, 31, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '60px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                padding: '10px 16px',
                borderRadius: '16px',
                background: '#FEF3DD',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}
            >
              <img
                src="/logo.svg"
                alt="MurliMadhav"
                width={102}
                height={56}
                style={{ height: 64, width: 'auto', display: 'block' }}
              />
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,200,130,0.45)',
                lineHeight: 1.75,
                maxWidth: '300px',
                marginBottom: '24px',
              }}
            >
              A dairy-first commerce platform bringing farm-fresh milk,
              paneer, ghee, and more directly to your doorstep. Digitizing
              the traditional dairy ecosystem — one household at a time.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="status-badge status-coming" style={{ fontSize: '11px' }}>
                <div className="glow-dot" style={{ width: 5, height: 5, background: '#F5821F' }} />
                App launching soon
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,200,130,0.5)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Customer App', 'Delivery Partner App', 'Admin Dashboard', 'Subscriptions (Soon)', 'Referral Program (Soon)'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,248,238,0.5)',
                    cursor: 'default',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLSpanElement).style.color = '#F5821F';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLSpanElement).style.color = 'rgba(255,248,238,0.5)';
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
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,200,130,0.5)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About Us', 'Our Vision', 'Products', 'How It Works', 'Contact Us'].map((item) => (
                <button
                  key={item}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    color: 'rgba(255,248,238,0.5)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onClick={() => {
                    if (item === 'Contact Us') onContactClick();
                    else {
                      const id = item.toLowerCase().replace(/\s+/g, '-');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = '#F5821F';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = 'rgba(255,248,238,0.5)';
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(245, 130, 31, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '12px', color: 'rgba(255,200,130,0.3)' }}>
            © 2025 MurliMadhav. All rights reserved.
          </p>
          <span style={{ fontSize: '12px', color: 'rgba(255,200,130,0.3)' }}>
            Freshness Guaranteed
          </span>
        </div>
      </div>
    </footer>
  );
}


