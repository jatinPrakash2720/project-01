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
        background: 'var(--white)',
        padding: '80px 40px',
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
          width: '640px',
          height: '360px',
          background: 'radial-gradient(ellipse, rgba(252, 163, 17, 0.07) 0%, transparent 70%)',
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
          <p className="section-eyebrow">Anonymous Feedback</p>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              marginBottom: '16px',
            }}
          >
            Got something to say?{' '}
            <span className="gradient-text">We&apos;re listening.</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(20, 33, 61, 0.55)',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            Leave us a message anonymously — your feedback, ideas, or thoughts about
            what MurliMadhav should be. No sign-in required.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255, 253, 249, 0.75)',
            border: '1px solid rgba(20, 33, 61, 0.08)',
            borderRadius: 'var(--radius-surface)',
            padding: '40px',
            boxShadow: '0 2px 16px rgba(20, 33, 61, 0.04)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
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
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>

          {error ? (
            <p style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--black)' }}>{error}</p>
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
            <p style={{ fontSize: '12px', color: 'rgba(20, 33, 61, 0.4)', maxWidth: '320px' }}>
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
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
