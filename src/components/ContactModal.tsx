'use client';

import { useEffect, useRef, useState } from 'react';
import { submitWebsiteForm } from '@/lib/submit-form';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ROLE_OPTIONS = [
  { value: 'consumer', label: 'Potential Customer' },
  { value: 'investor', label: 'Investor / Angel' },
  { value: 'partner', label: 'Business Partner' },
  { value: 'delivery', label: 'Delivery Partner' },
  { value: 'media', label: 'Media / Press' },
  { value: 'other', label: 'Other' },
];

export default function ContactModal({ isOpen, onClose, onSuccess }: ContactModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    message: '',
  });
  const [roleOpen, setRoleOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const roleRef = useRef<HTMLDivElement>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canSubmit = Boolean(form.name.trim() && form.email.trim() && !submitting);
  const selectedRole = ROLE_OPTIONS.find((o) => o.value === form.profession);

  useEffect(() => {
    if (!isOpen) {
      setRoleOpen(false);
      setError('');
      setSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!roleOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setRoleOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [roleOpen]);

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || submitting) return;
    setSubmitting(true);
    setError('');
    try {
      await submitWebsiteForm({
        type: 'contact',
        name: form.name,
        email: form.email,
        phone: form.phone,
        role: selectedRole?.label || form.profession,
        message: form.message,
      });
      setForm({ name: '', email: '', phone: '', profession: '', message: '' });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box contact-modal">
        <button
          onClick={onClose}
          id="modal-close-btn"
          aria-label="Close"
          className="contact-close-btn"
        >
          ✕
        </button>

        <div style={{ marginBottom: '22px', paddingRight: '28px' }}>
          <div className="contact-badge">
            <span>Get in Touch</span>
          </div>
          <h2 className="contact-title">Talk to the MurliMadhav Team</h2>
          <p className="contact-subtitle">
            Partner, press, or curious about the launch — leave a note and we&apos;ll reply.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="contact-field-row">
            <div>
              <label className="form-label-light" htmlFor="contact-name">Full Name *</label>
              <input
                id="contact-name"
                type="text"
                className="mm-input contact-input"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label-light" htmlFor="contact-email">Email *</label>
              <input
                id="contact-email"
                type="email"
                className="mm-input contact-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
          </div>

          <div className="contact-field-row">
            <div>
              <label className="form-label-light" htmlFor="contact-phone">Phone</label>
              <input
                id="contact-phone"
                type="tel"
                className="mm-input contact-input"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            <div ref={roleRef} style={{ position: 'relative' }}>
              <label className="form-label-light" id="contact-profession-label">Role</label>
              <button
                type="button"
                id="contact-profession"
                className="mm-input contact-input contact-select-trigger"
                aria-haspopup="listbox"
                aria-expanded={roleOpen}
                aria-labelledby="contact-profession-label"
                onClick={() => setRoleOpen((open) => !open)}
              >
                <span className={selectedRole ? 'contact-select-value' : 'contact-select-placeholder'}>
                  {selectedRole ? selectedRole.label : 'Select role...'}
                </span>
                <span className={`contact-select-chevron ${roleOpen ? 'open' : ''}`}>▾</span>
              </button>
              {roleOpen && (
                <ul className="contact-select-menu" role="listbox">
                  {ROLE_OPTIONS.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={form.profession === option.value}
                        className={`contact-select-option ${form.profession === option.value ? 'selected' : ''}`}
                        onClick={() => {
                          handleChange('profession', option.value);
                          setRoleOpen(false);
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <label className="form-label-light" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="mm-input contact-input"
              placeholder="What's on your mind?"
              rows={3}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              style={{ resize: 'none', minHeight: '72px', fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {error ? (
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#C62828' }}>{error}</p>
        ) : null}

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button
            className="pill-btn pill-primary"
            id="contact-submit-btn"
            style={{
              flex: 1,
              fontSize: '15px',
              padding: '14px 24px',
              justifyContent: 'center',
              opacity: canSubmit ? 1 : 0.55,
              cursor: canSubmit ? 'pointer' : 'not-allowed',
            }}
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
          <button
            className="pill-btn contact-cancel-btn"
            id="contact-cancel-btn"
            style={{ fontSize: '14px', padding: '14px 18px' }}
            onClick={onClose}
            disabled={submitting}
          >
            Cancel
          </button>
        </div>

        <p className="contact-footnote">
          Your information stays confidential.
        </p>
      </div>
    </div>
  );
}
