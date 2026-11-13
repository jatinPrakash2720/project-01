'use client';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ zIndex: 300 }}
    >
      <div
        className="modal-box"
        style={{
          maxWidth: '420px',
          textAlign: 'center',
          padding: '56px 40px',
        }}
      >
        {/* Success icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(252, 163, 17, 0.2), rgba(252, 163, 17, 0.1))',
            border: '2px solid rgba(252, 163, 17, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            color: 'var(--orange)',
            fontWeight: 700,
            margin: '0 auto 24px',
            animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
          }}
        >
          ✓
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '26px',
            fontWeight: 800,
            color: 'var(--white)',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          Message Sent!
        </h3>
        <p
          style={{
            fontSize: '15px',
            color: 'rgba(229, 229, 229, 0.6)',
            lineHeight: 1.7,
            marginBottom: '32px',
          }}
        >
          Thank you for reaching out! The MurliMadhav team will get back to
          you soon. We&apos;re excited to connect with you.
        </p>

        {/* Decorative stat */}
        <div
          style={{
            padding: '16px 24px',
            background: 'rgba(252, 163, 17, 0.08)',
            border: '1px solid rgba(252, 163, 17, 0.2)',
            borderRadius: 'var(--radius-surface)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '14px', color: 'rgba(229, 229, 229,0.7)', fontWeight: 500 }}>
            Fresh dairy experiences coming your way soon!
          </span>
        </div>

        <button
          className="pill-btn pill-primary"
          id="success-close-btn"
          style={{ fontSize: '15px', padding: '14px 40px', width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

