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
        background: 'var(--white)',
        padding: '80px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(252, 163, 17, 0.35), transparent)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="animate-when-visible"
          style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <p className="section-eyebrow">Our Vision</p>
          <h2
            className="animate-when-visible delay-100 section-heading"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              maxWidth: '760px',
              margin: '0 auto 24px',
            }}
          >
            The digital equivalent of your{' '}
            <span className="gradient-text">trusted neighborhood dairy</span>
          </h2>
          <p
            className="animate-when-visible delay-200"
            style={{
              fontSize: '16px',
              color: 'var(--prussian-blue)',
              lineHeight: 1.75,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            MurliMadhav combines traditional freshness with modern technology —
            building the most trusted digital dairy brand, one household at a time.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className="animate-card-rise dark-card"
              style={{
                animationDelay: `${i * 0.08}s`,
                padding: '28px 24px',
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: 'var(--orange)',
                  marginBottom: '20px',
                  borderRadius: 1,
                  opacity: 0.7,
                }}
              />
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--prussian-blue)',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.02em',
                }}
              >
                {usp.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(20, 33, 61, 0.58)', lineHeight: 1.7 }}>
                {usp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
