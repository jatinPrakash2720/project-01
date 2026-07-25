'use client';

import { useEffect, useRef } from 'react';

const usps = [
  { title: 'Own Supply Chain', desc: 'Direct from our dairy — no middlemen, no quality compromise.' },
  { title: 'Planned Freshness', desc: 'Scheduled delivery cycles ensure zero overproduction and maximum freshness.' },
  { title: '100% Prepaid', desc: 'Fully digital payments for predictable production and seamless accounting.' },
  { title: 'Your Schedule', desc: 'Customer-selected delivery windows — on your time, every time.' },
  { title: 'Data-Driven Ops', desc: 'Inventory, delivery, analytics all in one intelligent ecosystem.' },
  { title: 'Built to Scale', desc: 'From one city to nationwide — AI-powered growth from day one.' },
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveal = () => {
      section.querySelectorAll('.animate-when-visible').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 120);
      });
      section.querySelectorAll('.animate-card-rise').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 100);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal();
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);

    const failsafe = window.setTimeout(reveal, 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="scroll-section section-pad"
      style={{
        background: '#FEF3DD',
        padding: '100px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top decorative */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #F5821F, #FF6B2C, transparent)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Vision quote */}
        <div
          className="animate-when-visible"
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              background: 'rgba(245, 130, 31, 0.1)',
              border: '1px solid rgba(245, 130, 31, 0.25)',
              marginBottom: '28px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#F5821F', fontWeight: 600 }}>Our Vision</span>
          </div>
          <h2
            className="animate-when-visible delay-100"
            style={{
              fontFamily: 'Sora, Inter, sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 800,
              color: '#1C0F00',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: '800px',
              margin: '0 auto 24px',
            }}
          >
            The digital equivalent of your{' '}
            <span className="gradient-text">trusted neighborhood dairy</span>
          </h2>
          <p
            className="animate-when-visible delay-200"
            style={{
              fontSize: '17px',
              color: '#6B3D1A',
              lineHeight: 1.75,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            MurliMadhav combines traditional freshness with modern technology —
            building the most trusted digital dairy brand, one household at a time.
          </p>
        </div>

        {/* USP Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '80px',
          }}
        >
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className="animate-card-rise dark-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1C0F00',
                  marginBottom: '8px',
                  fontFamily: 'Sora, sans-serif',
                }}
              >
                {usp.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(90, 40, 0, 0.6)', lineHeight: 1.65 }}>
                {usp.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}


