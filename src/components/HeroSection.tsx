'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection({ onContactClick }: { onContactClick: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveal = () => {
      section.querySelectorAll('.animate-when-visible').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 120);
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

    const failsafe = window.setTimeout(reveal, 2000);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section scroll-section hero-section"
      style={{
        background: 'linear-gradient(160deg, #FEF3DD 0%, #FDEAC4 50%, #FEF3DD 100%)',
        paddingTop: '120px',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 130, 31, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="hero-grid">
        <div>
          <h1
            className="animate-when-visible delay-100 hero-heading"
            style={{
              fontFamily: 'Sora, Inter, sans-serif',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#1C0F00',
              marginBottom: '12px',
            }}
          >
            Fresh Dairy,
            <br />
            <span className="gradient-text">Delivered Daily</span>
            <span className="coming-soon-badge">
              <span className="coming-soon-dot" />
              Coming Soon
            </span>
          </h1>

          <h2
            className="animate-when-visible delay-200"
            style={{
              fontFamily: 'Sora, Inter, sans-serif',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              fontWeight: 400,
              color: 'rgba(90, 40, 0, 0.6)',
              marginBottom: '28px',
              lineHeight: 1.4,
            }}
          >
            From our dairy to your doorstep.
          </h2>

          <p
            className="animate-when-visible delay-300"
            style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'rgba(45, 18, 0, 0.55)',
              maxWidth: '500px',
              marginBottom: '40px',
            }}
          >
            MurliMadhav is a dairy-first commerce platform modernizing how households
            get their daily milk, paneer, ghee, butter and more — fresh from our own
            dairy, delivered on your schedule.
          </p>

          <div
            className="animate-when-visible delay-400 hero-cta-row"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <button
              className="pill-btn pill-primary"
              style={{ fontSize: '15px', padding: '14px 32px' }}
              onClick={onContactClick}
              id="hero-contact-btn"
            >
              Contact Us
            </button>
            <button
              className="pill-btn pill-outline"
              style={{ fontSize: '15px', padding: '14px 32px' }}
              onClick={() => {
                const section = document.getElementById('message');
                section?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => document.getElementById('anon-message')?.focus(), 600);
              }}
              id="hero-feedback-btn"
            >
              Share Feedback
            </button>
          </div>

          <div
            className="animate-when-visible delay-500 hero-stats"
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '60px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(90, 40, 0, 0.1)',
            }}
          >
            {[
              { num: '100%', label: 'Farm Fresh' },
              { num: '0', label: 'Middlemen' },
              { num: '∞', label: 'Freshness' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    fontFamily: 'Sora, sans-serif',
                    color: '#F5821F',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(90, 40, 0, 0.5)',
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
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '480px',
          }}
        >
          <div className="hero-phone">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <div style={{ width: '80px', height: '6px', borderRadius: '3px', background: 'rgba(245,130,31,0.25)' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px 10px', borderBottom: '1px solid rgba(245,130,31,0.1)' }}>
              <span style={{ fontSize: '10px', color: 'rgba(255,200,130,0.5)', fontWeight: 600 }}>9:41 AM</span>
              <div style={{ width: '14px', height: '8px', border: '1.5px solid rgba(255,200,130,0.4)', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '1px', background: 'rgba(46,204,113,0.7)', borderRadius: '1px', width: '70%' }} />
              </div>
            </div>

            <div style={{ padding: '12px 8px 8px' }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,200,130,0.45)', marginBottom: '2px' }}>Good Morning</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FEF3DD', fontFamily: 'Sora, sans-serif' }}>Your Order</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 4px' }}>
              {[
                { name: 'Farm Milk', qty: '1L', price: '₹52', color: '#F5821F' },
                { name: 'Soft Paneer', qty: '250g', price: '₹89', color: '#E08C00' },
                { name: 'Pure Ghee', qty: '500ml', price: '₹320', color: '#C97B10' },
                { name: 'Set Curd', qty: '400g', price: '₹44', color: '#BA6E0E' },
              ].map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: i === 0 ? 'rgba(245,130,31,0.12)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${i === 0 ? 'rgba(245,130,31,0.3)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '12px',
                    padding: '10px 12px',
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#FEF3DD' }}>{item.name}</div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,200,130,0.5)' }}>{item.qty}</div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: item.color }}>{item.price}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                margin: '10px 4px 0',
                padding: '10px 14px',
                background: 'rgba(245,130,31,0.08)',
                border: '1px solid rgba(245,130,31,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '9px', color: 'rgba(255,200,130,0.45)', marginBottom: '2px' }}>Next Delivery</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#F5821F' }}>Tomorrow 6–7 AM</div>
              </div>
              <div
                style={{
                  padding: '6px 12px',
                  background: 'linear-gradient(135deg, #F5821F, #FF6B2C)',
                  borderRadius: '50px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                Pre-Order
              </div>
            </div>

            <div
              style={{
                margin: '10px 4px 4px',
                padding: '12px 14px',
                background: 'linear-gradient(135deg, rgba(245,130,31,0.15), rgba(255,107,44,0.1))',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: '12px', color: 'rgba(255,200,130,0.7)' }}>Total</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#FEF3DD', fontFamily: 'Sora, sans-serif' }}>₹505</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll-hint"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(90, 40, 0, 0.3)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          animation: 'fadeSlideUp 1s ease 1.5s both',
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, rgba(245, 130, 31, 0.4), transparent)',
            animation: 'scaleIn 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
