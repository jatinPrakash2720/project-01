'use client';

import { useState } from 'react';
import { ModernHero } from '@/components/ModernHero';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { FeedbackSection } from '@/components/FeedbackSection';
import { ContactFormModal } from '@/components/ContactFormModal';
import { SuccessModal } from '@/components/SuccessModal';
import { ModernNavigation } from '@/components/ModernNavigation';

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('Thank you for reaching out!');

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const handleContactSuccess = () => {
    setSuccessMessage('Thank you for reaching out! We\'ll get back to you soon.');
    setSuccessModalOpen(true);
  };

  const handleFeedbackSuccess = () => {
    setSuccessMessage('Thank you for your feedback!');
    setSuccessModalOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <ModernNavigation onContactClick={handleContactClick} />
      <ModernHero onContactClick={handleContactClick} />
      <FeaturesGrid />
      <FeedbackSection onSuccess={handleFeedbackSuccess} />
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSuccess={handleContactSuccess}
      />
      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        message={successMessage}
      />
    </main>
  );
}
