'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AnonymousMessageSection } from '@/components/AnonymousMessageSection';
import { ContactFormModal } from '@/components/ContactFormModal';
import { SuccessModal } from '@/components/SuccessModal';
import { Footer } from '@/components/Footer';

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

  const handleMessageSuccess = () => {
    setSuccessMessage('Thank you for your feedback! We appreciate your input.');
    setSuccessModalOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeroSection onContactClick={handleContactClick} />
      <FeaturesSection />
      <AnonymousMessageSection onSuccess={handleMessageSuccess} />
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
      <Footer />
    </main>
  );
}
