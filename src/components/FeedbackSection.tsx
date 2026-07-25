'use client';

import { useState } from 'react';

interface FeedbackSectionProps {
  onSuccess: () => void;
}

export function FeedbackSection({ onSuccess }: FeedbackSectionProps) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim()) {
      setFeedback('');
      onSuccess();
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-[#faf7f3]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Share Your Feedback
          </h2>
          <p className="text-lg text-[#8b7d70]">
            We value your thoughts and suggestions to improve our service.
          </p>
        </div>

        <div className="space-y-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us what you think about our dairy products and service..."
            className="w-full min-h-32 p-4 bg-white border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#E8621B] text-[#1a1a1a] placeholder-[#8b7d70]"
          />
          <button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="w-full py-3 bg-[#E8621B] text-white font-medium rounded-lg hover:bg-[#d14513] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Feedback
          </button>
        </div>
      </div>
    </section>
  );
}
