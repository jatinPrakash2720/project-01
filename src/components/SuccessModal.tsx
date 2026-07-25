'use client';

import { Modal, Stack, Text, Button, Group } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function SuccessModal({ isOpen, onClose, message = 'Thank you!' }: SuccessModalProps) {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      centered
      size="sm"
      withCloseButton={false}
      styles={{
        content: {
          background: 'white',
        },
      }}
    >
      <Stack align="center" gap="lg" py="xl">
        <div
          style={{
            width: '80px',
            height: '80px',
            background: '#D4EDDA',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'scale-in 0.5s ease-out',
          }}
        >
          <IconCheck size={48} color="#28A745" strokeWidth={2} />
        </div>

        <Stack gap="sm" align="center">
          <Text
            size="xl"
            fw={700}
            style={{ color: '#1a1a1a', textAlign: 'center' }}
          >
            Message Received!
          </Text>
          <Text
            size="md"
            style={{
              color: '#666',
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            {message}
          </Text>
        </Stack>

        <Button
          onClick={onClose}
          style={{
            background: '#E8621B',
            borderRadius: '8px',
          }}
          fullWidth
        >
          Close
        </Button>
      </Stack>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </Modal>
  );
}
