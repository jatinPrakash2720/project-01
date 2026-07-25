'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Place Your Order',
    desc: 'Open the app, browse our fresh dairy catalog, choose your products and preferred delivery slot.',
    color: '#F5821F',
  },
  {
    num: '02',
    title: 'Pay Digitally',
    desc: 'Secure prepaid payment via UPI, card, or wallet. No cash, no hassle — instant confirmation.',
    color: '#E08C00',
  },
  {
    num: '03',
    title: 'We Prepare Fresh',
    desc: 'Your order enters our production cycle. Milk is sourced, packaged, and assigned to your delivery route.',
    color: '#C97B10',
  },
  {
    num: '04',
    title: 'Delivered to You',
    desc: 'Your delivery partner drops off fresh dairy right at your door during your selected time slot.',
    color: '#BA6E0E',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setRevealed(true);

          let step = 0;
          const interval = setInterval(() => {
            step++;
            if (step >= steps.length) {
              clearInterval(interval);
              setActiveStep(steps.length - 1);
              return;
            }
            setActiveStep(step);
          }, 700);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    const failsafe = window.setTimeout(() => setRevealed(true), 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="scroll-section how-section section-pad"
      style={{
        background: 'linear-gradient(160deg, #FEF3DD 0%, #FDEAC4 100%)',
        padding: '100px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(245, 130, 31, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div
            className={`animate-when-visible ${revealed ? 'is-visible' : ''}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              background: 'rgba(245, 130, 31, 0.1)',
              border: '1px solid rgba(245, 130, 31, 0.25)',
              marginBottom: '20px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#F5821F', fontWeight: 600 }}>
              How It Works
            </span>
          </div>
          <h2
            className={`animate-when-visible ${revealed ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'Sora, Inter, sans-serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              color: '#1C0F00',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
              animationDelay: '0.1s',
            }}
          >
            Fresh Dairy in{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p
            className={`animate-when-visible ${revealed ? 'is-visible' : ''}`}
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              fontSize: '16px',
              color: 'rgba(90, 40, 0, 0.55)',
              lineHeight: 1.7,
              animationDelay: '0.2s',
            }}
          >
            Our planned fulfillment model ensures you always get the freshest dairy —
            ordered today, delivered tomorrow morning.
          </p>
        </div>

        <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`highlight-row animate-when-visible ${revealed ? 'is-visible' : ''} ${activeStep === i ? 'active' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.12}s` }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: activeStep === i ? '10px' : '8px',
                      height: activeStep === i ? '10px' : '8px',
                      borderRadius: '50%',
                      background:
                        i <= activeStep
                          ? '#F5821F'
                          : 'rgba(245, 130, 31, 0.3)',
                      boxShadow:
                        activeStep === i
                          ? '0 0 0 4px rgba(245, 130, 31, 0.2)'
                          : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', color: step.color, fontWeight: 700, letterSpacing: '0.1em' }}>
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#1C0F00',
                        fontFamily: 'Sora, sans-serif',
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(90, 40, 0, 0.55)', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div
              className={`delivery-journey animate-when-visible ${revealed ? 'is-visible' : ''}`}
              style={{
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderTop: '2px solid rgba(245, 130, 31, 0.25)',
                borderRadius: '24px',
                padding: '32px',
                marginBottom: '20px',
                boxShadow: '0 4px 20px rgba(180, 100, 20, 0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
                animationDelay: '0.3s',
              }}
            >
              <div style={{ fontSize: '13px', color: 'rgba(90, 40, 0, 0.45)', fontWeight: 600, marginBottom: '28px', letterSpacing: '0.05em' }}>
                DELIVERY JOURNEY
              </div>

              <div className="journey-track">
                {steps.map((step, i) => {
                  const isDone = i <= activeStep;
                  const isCurrent = i === activeStep;
                  return (
                    <div key={step.num} className="journey-step">
                      {i < steps.length - 1 && (
                        <div
                          className="journey-connector"
                          style={{
                            background: i < activeStep
                              ? 'linear-gradient(90deg, #F5821F, #E08C00)'
                              : 'rgba(90, 40, 0, 0.12)',
                          }}
                        />
                      )}
                      <div
                        className="journey-node"
                        style={{
                          background: isDone
                            ? 'linear-gradient(135deg, #F5821F, #FF6B2C)'
                            : 'rgba(255,255,255,0.9)',
                          border: isDone
                            ? '2px solid transparent'
                            : '2px solid rgba(245, 130, 31, 0.25)',
                          color: isDone ? '#fff' : 'rgba(90, 40, 0, 0.35)',
                          boxShadow: isCurrent
                            ? '0 0 0 5px rgba(245, 130, 31, 0.18)'
                            : 'none',
                          transform: isCurrent ? 'scale(1.08)' : 'scale(1)',
                        }}
                      >
                        {step.num}
                      </div>
                      <div
                        className="journey-label"
                        style={{
                          color: isDone ? '#1C0F00' : 'rgba(90, 40, 0, 0.4)',
                          fontWeight: isCurrent ? 700 : 600,
                        }}
                      >
                        {step.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`animate-when-visible ${revealed ? 'is-visible' : ''}`}
              style={{
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderTop: '2px solid rgba(245, 130, 31, 0.25)',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(180, 100, 20, 0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
                animationDelay: '0.5s',
              }}
            >
              <div style={{ fontSize: '13px', color: 'rgba(90, 40, 0, 0.45)', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>
                AVAILABLE SLOTS TOMORROW
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                {[
                  { time: '5–6 AM', status: 'open' },
                  { time: '6–7 AM', status: 'open' },
                  { time: '7–8 AM', status: 'full' },
                  { time: '8–9 AM', status: 'open' },
                  { time: '9–10 AM', status: 'open' },
                  { time: '10–11 AM', status: 'open' },
                ].map((slot) => (
                  <div
                    key={slot.time}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '10px',
                      background: slot.status === 'full'
                        ? 'rgba(220, 50, 50, 0.08)'
                        : 'rgba(46, 204, 113, 0.08)',
                      border: `1px solid ${slot.status === 'full' ? 'rgba(200,50,50,0.2)' : 'rgba(46,204,113,0.2)'}`,
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: 700, color: slot.status === 'full' ? 'rgba(200,50,50,0.8)' : '#1C0F00', marginBottom: '3px' }}>
                      {slot.time}
                    </div>
                    <div style={{ fontSize: '10px', color: slot.status === 'full' ? 'rgba(255,100,100,0.5)' : '#2ECC71', fontWeight: 600 }}>
                      {slot.status === 'full' ? 'Full' : 'Available'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
