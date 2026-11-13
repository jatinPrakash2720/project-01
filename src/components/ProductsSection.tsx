'use client';

import { useEffect, useRef } from 'react';

const products = [
  { name: 'Farm Fresh Milk', desc: 'Daily fresh, straight from our own dairy farm. No additives, no preservatives.', tag: 'Best Seller', color: 'var(--orange)' },
  { name: 'Soft Paneer', desc: 'Handcrafted fresh paneer made every morning. Soft, nutritious, and authentic.', tag: 'Popular', color: 'var(--orange)' },
  { name: 'Pure Ghee', desc: 'A2 cow ghee, slow-churned and pure. The gold standard of dairy nutrition.', tag: 'Premium', color: 'var(--prussian-blue)' },
  { name: 'White Butter', desc: 'Freshly churned from cream every day. Rich taste, zero artificial flavor.', tag: 'Classic', color: 'var(--black)' },
  { name: 'Set Curd', desc: 'Thick, probiotic-rich curd set fresh daily. Your gut will thank you.', tag: 'Daily', color: 'var(--orange)' },
  { name: 'Lassi & Cream', desc: 'Chilled, refreshing lassi and fresh cream — seasonal specials you\'ll love.', tag: 'Seasonal', color: 'var(--prussian-blue)' },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveal = () => {
      section.querySelectorAll('.animate-card-rise').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 100);
      });
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

    const failsafe = window.setTimeout(reveal, 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
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
          top: '-80px',
          right: '-80px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(252, 163, 17, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <p className="animate-when-visible section-eyebrow">Our Products</p>
            <h2
              className="animate-when-visible delay-100 section-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
              }}
            >
              Pure. Fresh.{' '}
              <span className="gradient-text">Everyday.</span>
            </h2>
          </div>
          <p
            className="animate-when-visible delay-200"
            style={{
              maxWidth: '360px',
              fontSize: '15px',
              color: 'var(--prussian-blue)',
              lineHeight: 1.7,
            }}
          >
            Everything on our platform is sourced from our own dairy and trusted
            production units — quality you can taste and trust.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => {
            const featured = i === 0;
            return (
              <div
                key={product.name}
                className={`animate-card-rise dark-card product-card${featured ? ' product-card-featured' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  cursor: 'default',
                  padding: featured ? '32px' : '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: featured ? '220px' : undefined,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: featured ? '32px' : '24px',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: featured ? 48 : 32,
                      height: 3,
                      borderRadius: 2,
                      background: product.color,
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-surface)',
                      background: `${product.color}14`,
                      border: `1px solid ${product.color}33`,
                      fontSize: '11px',
                      fontWeight: 600,
                      color: product.color,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {product.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: featured ? '28px' : '20px',
                    fontWeight: 700,
                    color: 'var(--prussian-blue)',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: featured ? '15px' : '14px',
                    color: 'rgba(20, 33, 61, 0.58)',
                    lineHeight: 1.7,
                    maxWidth: featured ? '420px' : undefined,
                    flex: 1,
                  }}
                >
                  {product.desc}
                </p>

                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(252, 163, 17, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div className="glow-dot" />
                  <span style={{ fontSize: '12px', color: 'var(--orange)', fontWeight: 600 }}>
                    Fresh Daily
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: '64px',
            overflow: 'hidden',
            padding: '20px 0',
            borderTop: '1px solid rgba(252, 163, 17, 0.12)',
            borderBottom: '1px solid rgba(252, 163, 17, 0.12)',
          }}
        >
          <div className="marquee-track">
            {[...Array(2)].map((_, batch) =>
              ['Farm Fresh Milk', 'Pure Ghee', 'Fresh Paneer', 'Set Curd', 'White Butter', 'Creamy Lassi', 'No Middlemen', '100% Prepaid', 'Zero Cash', 'Daily Delivery'].map((item) => (
                <span
                  key={`${batch}-${item}`}
                  style={{
                    padding: '0 32px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(20, 33, 61, 0.4)',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '16px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item}
                  <span style={{ color: 'var(--orange)', fontSize: '10px', opacity: 0.7 }}>◆</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
