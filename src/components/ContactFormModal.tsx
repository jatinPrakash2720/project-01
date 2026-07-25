'use client';

import { useState } from 'react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function ContactFormModal({ isOpen, onClose, onSuccess }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      setIsLoading(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', profession: '' });
        setIsLoading(false);
        onClose();
        onSuccess();
      }, 300);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 bg-white rounded-xl shadow-xl p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Get In Touch</h2>
          <p className="text-[#8b7d70] mt-1">We'd love to hear from you</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.currentTarget.value)}
              className="w-full px-4 py-2 border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#E8621B] text-[#1a1a1a] placeholder-[#8b7d70]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.currentTarget.value)}
              className="w-full px-4 py-2 border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#E8621B] text-[#1a1a1a] placeholder-[#8b7d70]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.currentTarget.value)}
              className="w-full px-4 py-2 border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#E8621B] text-[#1a1a1a] placeholder-[#8b7d70]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Profession</label>
            <select
              value={formData.profession}
              onChange={(e) => handleChange('profession', e.currentTarget.value)}
              className="w-full px-4 py-2 border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#E8621B] text-[#1a1a1a]"
            >
              <option value="">Select your profession</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="business">Business Owner</option>
              <option value="healthcare">Healthcare</option>
              <option value="agriculture">Agriculture</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-[#e5dcd3] rounded-lg text-[#1a1a1a] font-medium hover:bg-[#f5f1eb] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading}
              className="px-6 py-2 bg-[#E8621B] text-white font-medium rounded-lg hover:bg-[#d14513] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
