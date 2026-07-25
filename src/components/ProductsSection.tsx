'use client';

import { useEffect, useRef } from 'react';

const products = [
  { name: 'Farm Fresh Milk', desc: 'Daily fresh, straight from our own dairy farm. No additives, no preservatives.', tag: 'Best Seller', color: '#F5821F' },
  { name: 'Soft Paneer', desc: 'Handcrafted fresh paneer made every morning. Soft, nutritious, and authentic.', tag: 'Popular', color: '#E08C00' },
  { name: 'Pure Ghee', desc: 'A2 cow ghee, slow-churned and pure. The gold standard of dairy nutrition.', tag: 'Premium', color: '#C97B10' },
  { name: 'White Butter', desc: 'Freshly churned from cream every day. Rich taste, zero artificial flavor.', tag: 'Classic', color: '#D4820A' },
  { name: 'Set Curd', desc: 'Thick, probiotic-rich curd set fresh daily. Your gut will thank you.', tag: 'Daily', color: '#C4780F' },
  { name: 'Lassi & Cream', desc: 'Chilled, refreshing lassi and fresh cream — seasonal specials you\'ll love.', tag: 'Seasonal', color: '#BA6E0E' },
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
        background: '#FEF3DD',
        padding: '100px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 130, 31, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '60px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div
              className="animate-when-visible"
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
                Our Products
              </span>
            </div>
            <h2
              className="animate-when-visible delay-100"
              style={{
                fontFamily: 'Sora, Inter, sans-serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 800,
                color: '#1C0F00',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Pure. Fresh.{' '}
              <span className="gradient-text">Everyday.</span>
            </h2>
          </div>
          <p
            className="animate-when-visible delay-200"
            style={{
              maxWidth: '380px',
              fontSize: '16px',
              color: '#6B3D1A',
              lineHeight: 1.7,
            }}
          >
            Everything on our platform is sourced from our own dairy and trusted
            production units — quality you can taste and trust.
          </p>
        </div>

        {/* Product grid */}
        <div
          className="products-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((product, i) => (
            <div
              key={product.name}
              className="animate-card-rise dark-card"
              style={{
                animationDelay: `${i * 0.1}s`,
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: 40,
                    height: 4,
                    borderRadius: 2,
                    background: product.color,
                    marginTop: 8,
                  }}
                />
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '50px',
                    background: `${product.color}22`,
                    border: `1px solid ${product.color}44`,
                    fontSize: '11px',
                    fontWeight: 700,
                    color: product.color,
                    letterSpacing: '0.05em',
                  }}
                >
                  {product.tag}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#1C0F00',
                  marginBottom: '10px',
                  fontFamily: 'Sora, sans-serif',
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(90, 40, 0, 0.6)',
                  lineHeight: 1.65,
                }}
              >
                {product.desc}
              </p>

              {/* Bottom indicator */}
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(245, 130, 31, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div className="glow-dot" />
                <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>
                  Fresh Daily
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div
          style={{
            marginTop: '60px',
            overflow: 'hidden',
            padding: '20px 0',
            borderTop: '1px solid rgba(245, 130, 31, 0.15)',
            borderBottom: '1px solid rgba(245, 130, 31, 0.15)',
          }}
        >
          <div className="marquee-track">
            {[...Array(2)].map((_, batch) =>
              ['Farm Fresh Milk', 'Pure Ghee', 'Fresh Paneer', 'Set Curd', 'White Butter', 'Creamy Lassi', 'No Middlemen', '100% Prepaid', 'Zero Cash', 'Daily Delivery'].map((item) => (
                <span
                  key={`${batch}-${item}`}
                  style={{
                    padding: '0 32px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(90, 40, 0, 0.45)',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  {item}
                  <span style={{ color: '#F5821F', fontSize: '16px' }}>✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

