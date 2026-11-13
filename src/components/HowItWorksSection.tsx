'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Place Your Order',
    desc: 'Open the app, browse our fresh dairy catalog, choose your products and preferred delivery slot.',
    color: 'var(--orange)',
  },
  {
    num: '02',
    title: 'Pay Digitally',
    desc: 'Secure prepaid payment via UPI, card, or wallet. No cash, no hassle — instant confirmation.',
    color: 'var(--orange)',
  },
  {
    num: '03',
    title: 'We Prepare Fresh',
    desc: 'Your order enters our production cycle. Milk is sourced, packaged, and assigned to your delivery route.',
    color: 'var(--prussian-blue)',
  },
  {
    num: '04',
    title: 'Delivered to You',
    desc: 'Your delivery partner drops off fresh dairy right at your door during your selected time slot.',
    color: 'var(--prussian-blue)',
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
        background: 'linear-gradient(165deg, var(--white) 0%, var(--alabaster-grey) 100%)',
        padding: '80px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(252, 163, 17, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '64px', maxWidth: '640px' }}>
          <p className={`animate-when-visible section-eyebrow ${revealed ? 'is-visible' : ''}`}>
            How It Works
          </p>
          <h2
            className={`animate-when-visible section-heading ${revealed ? 'is-visible' : ''}`}
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              marginBottom: '16px',
              animationDelay: '0.1s',
            }}
          >
            Fresh Dairy in{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p
            className={`animate-when-visible ${revealed ? 'is-visible' : ''}`}
            style={{
              fontSize: '16px',
              color: 'rgba(20, 33, 61, 0.55)',
              lineHeight: 1.7,
              animationDelay: '0.2s',
            }}
          >
            Our planned fulfillment model ensures you always get the freshest dairy —
            ordered today, delivered tomorrow morning.
          </p>
        </div>

        <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '64px', alignItems: 'start' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderLeft: '1px solid rgba(252, 163, 17, 0.18)',
              marginLeft: '11px',
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`highlight-row animate-when-visible ${revealed ? 'is-visible' : ''} ${activeStep === i ? 'active' : ''}`}
                style={{
                  animationDelay: `${0.3 + i * 0.12}s`,
                  opacity: i <= activeStep ? 1 : 0.55,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-8px',
                    top: '28px',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    background: i <= activeStep ? 'var(--orange)' : 'var(--white)',
                    border: i <= activeStep
                      ? '2px solid var(--orange)'
                      : '2px solid rgba(252, 163, 17, 0.35)',
                    boxShadow: activeStep === i
                      ? '0 0 0 4px rgba(252, 163, 17, 0.14)'
                      : 'none',
                    transition: 'background 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
                    zIndex: 2,
                    transform: 'translateX(-50%)',
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        color: step.color,
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--prussian-blue)',
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '15px', color: 'rgba(20, 33, 61, 0.55)', lineHeight: 1.7, maxWidth: '440px' }}>
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
                background: 'rgba(255, 253, 249, 0.7)',
                border: '1px solid rgba(20, 33, 61, 0.08)',
                borderRadius: 'var(--radius-surface)',
                padding: '32px',
                marginBottom: '16px',
                boxShadow: '0 2px 16px rgba(20, 33, 61, 0.04)',
                animationDelay: '0.3s',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: 'rgba(20, 33, 61, 0.45)',
                  fontWeight: 600,
                  marginBottom: '28px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Delivery Journey
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
                              ? 'linear-gradient(90deg, var(--orange), var(--orange))'
                              : 'rgba(20, 33, 61, 0.1)',
                          }}
                        />
                      )}
                      <div
                        className="journey-node"
                        style={{
                          background: isDone
                            ? 'linear-gradient(135deg, var(--orange), var(--orange))'
                            : 'rgba(255,253,249,0.95)',
                          border: isDone
                            ? '1px solid transparent'
                            : '1px solid rgba(252, 163, 17, 0.22)',
                          color: isDone ? 'var(--white)' : 'rgba(20, 33, 61, 0.35)',
                          boxShadow: isCurrent
                            ? '0 0 0 4px rgba(252, 163, 17, 0.12)'
                            : 'none',
                          transform: isCurrent ? 'translateY(-1px)' : 'translateY(0)',
                        }}
                      >
                        {step.num}
                      </div>
                      <div
                        className="journey-label"
                        style={{
                          color: isDone ? 'var(--prussian-blue)' : 'rgba(20, 33, 61, 0.4)',
                          fontWeight: isCurrent ? 600 : 500,
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
                background: 'rgba(255, 253, 249, 0.7)',
                border: '1px solid rgba(20, 33, 61, 0.08)',
                borderRadius: 'var(--radius-surface)',
                padding: '24px',
                boxShadow: '0 2px 16px rgba(20, 33, 61, 0.04)',
                animationDelay: '0.5s',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: 'rgba(20, 33, 61, 0.45)',
                  fontWeight: 600,
                  marginBottom: '16px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Available Slots Tomorrow
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
                      padding: '12px 8px',
                      borderRadius: 'var(--radius-surface)',
                      background: slot.status === 'full'
                        ? 'rgba(220, 50, 50, 0.05)'
                        : 'rgba(252, 163, 17, 0.06)',
                      border: `1px solid ${slot.status === 'full' ? 'rgba(0, 0, 0,0.15)' : 'rgba(252, 163, 17,0.16)'}`,
                      textAlign: 'center',
                      transition: 'opacity 200ms ease, transform 200ms ease',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: slot.status === 'full' ? 'rgba(0, 0, 0, 0.75)' : 'var(--prussian-blue)',
                        marginBottom: '4px',
                      }}
                    >
                      {slot.time}
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: slot.status === 'full' ? 'rgba(20, 33, 61, 0.55)' : 'var(--orange)',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                      }}
                    >
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
