'use client';

import { useState } from 'react';
import {
  Modal,
  TextInput,
  Textarea,
  Button,
  Stack,
  Group,
  Select,
} from '@mantine/core';
import { IconPhone, IconMail, IconUser, IconBriefcase } from '@tabler/icons-react';

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
      // Simulate form submission
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', profession: '' });
        setIsLoading(false);
        onClose();
        onSuccess();
      }, 300);
    }
  };

  const professions = [
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Professional' },
    { value: 'business_owner', label: 'Business Owner' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'other', label: 'Other' },
  ];

  const isFormValid = formData.name && formData.email && formData.phone;

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Get In Touch"
      centered
      size="md"
      styles={{
        title: {
          fontSize: '24px',
          fontWeight: 700,
          color: '#1a1a1a',
        },
      }}
    >
      <Stack gap="md">
        <TextInput
          label="Full Name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.currentTarget.value)}
          icon={<IconUser size={18} />}
          required
          styles={{
            label: { fontWeight: 600, color: '#333' },
            input: { borderRadius: '8px' },
          }}
        />

        <TextInput
          label="Email Address"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => handleChange('email', e.currentTarget.value)}
          icon={<IconMail size={18} />}
          required
          type="email"
          styles={{
            label: { fontWeight: 600, color: '#333' },
            input: { borderRadius: '8px' },
          }}
        />

        <TextInput
          label="Phone Number"
          placeholder="+91 (555) 000-0000"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.currentTarget.value)}
          icon={<IconPhone size={18} />}
          required
          styles={{
            label: { fontWeight: 600, color: '#333' },
            input: { borderRadius: '8px' },
          }}
        />

        <Select
          label="Profession"
          placeholder="Select your profession"
          value={formData.profession}
          onChange={(value) => handleChange('profession', value || '')}
          data={professions}
          icon={<IconBriefcase size={18} />}
          styles={{
            label: { fontWeight: 600, color: '#333' },
            input: { borderRadius: '8px' },
          }}
        />

        <Textarea
          label="Message (Optional)"
          placeholder="Tell us more about what you'd like to discuss"
          minRows={3}
          styles={{
            label: { fontWeight: 600, color: '#333' },
            input: { borderRadius: '8px' },
          }}
        />

        <Group justify="flex-end" mt="lg">
          <Button
            variant="default"
            onClick={onClose}
            style={{ borderRadius: '8px' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isLoading}
            loading={isLoading}
            style={{
              background: '#E8621B',
              borderRadius: '8px',
            }}
          >
            Send Message
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
