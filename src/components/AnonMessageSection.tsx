'use client';

import { useState } from 'react';
import { submitWebsiteForm } from '@/lib/submit-form';

interface AnonMessageSectionProps {
  onSuccess: () => void;
}

export default function AnonMessageSection({ onSuccess }: AnonMessageSectionProps) {
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = message.trim().length > 0 && !submitting;

  const handleSubmit = async () => {
    if (!message.trim() || submitting) return;
    setSubmitting(true);
    setError('');
    try {
      await submitWebsiteForm({
        type: 'anonymous',
        message: message.trim(),
      });
      setMessage('');
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="message"
      className="scroll-section section-pad"
      style={{
        background: '#FEF3DD',
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
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(245, 130, 31, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              background: 'rgba(245, 130, 31, 0.1)',
              border: '1px solid rgba(245, 130, 31, 0.25)',
              marginBottom: '24px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#F5821F', fontWeight: 600 }}>Anonymous Feedback</span>
          </div>
          <h2
            style={{
              fontFamily: 'Sora, Inter, sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 800,
              color: '#1C0F00',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Got something to say?{' '}
            <span className="gradient-text">We&apos;re listening.</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(90, 40, 0, 0.55)',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Leave us a message anonymously — your feedback, ideas, or thoughts about
            what MurliMadhav should be. No sign-in required.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            borderTop: '2px solid rgba(245, 130, 31, 0.3)',
            borderRadius: '28px',
            padding: '40px',
            boxShadow: '0 8px 40px rgba(180, 100, 20, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label className="form-label" htmlFor="anon-message">
              Your Message
            </label>
            <textarea
              id="anon-message"
              className="mm-input"
              placeholder="Share your thoughts, ideas, or feedback about MurliMadhav..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                resize: 'vertical',
                minHeight: '120px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>

          {error ? (
            <p style={{ marginBottom: '12px', fontSize: '13px', color: '#C62828' }}>{error}</p>
          ) : null}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p style={{ fontSize: '12px', color: 'rgba(90, 40, 0, 0.4)', maxWidth: '320px' }}>
              Completely anonymous. We never collect your identity.
            </p>
            <button
              className="pill-btn pill-primary"
              id="anon-send-btn"
              style={{
                fontSize: '15px',
                padding: '14px 32px',
                opacity: canSubmit ? 1 : 0.55,
                cursor: canSubmit ? 'pointer' : 'not-allowed',
              }}
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              {submitting ? 'Sending…' : 'Send Message ✦'}
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: i === 2 ? '#F5821F' : 'rgba(245, 130, 31, 0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
