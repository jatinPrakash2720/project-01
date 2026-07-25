'use client';

import { useState } from 'react';
import { Container, Title, Text, Textarea, Button, Stack, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

interface AnonymousMessageSectionProps {
  onSuccess: () => void;
}

export function AnonymousMessageSection({ onSuccess }: AnonymousMessageSectionProps) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setIsLoading(true);
      // Simulate a small delay
      setTimeout(() => {
        setMessage('');
        setIsLoading(false);
        onSuccess();
      }, 300);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSend();
    }
  };

  return (
    <section style={{ padding: '80px 20px', background: '#FFF5F1' }}>
      <Container size="md">
        <Stack gap="lg">
          <div style={{ textAlign: 'center' }}>
            <Title order={2} size="2.5rem" style={{ color: '#1a1a1a', fontWeight: 700 }}>
              Share Your Feedback
            </Title>
            <Text
              size="lg"
              style={{ color: '#666', marginTop: '12px' }}
            >
              Have suggestions or feedback? Share your thoughts anonymously. We&apos;d love to hear from you.
            </Text>
          </div>

          <div
            style={{
              background: 'white',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
            }}
          >
            <Stack gap="md">
              <Textarea
                placeholder="Share your message here... (We read every message)"
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                onKeyPress={handleKeyPress}
                minRows={5}
                style={{
                  borderRadius: '8px',
                }}
                styles={{
                  input: {
                    borderColor: '#ddd',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                  },
                }}
              />

              <Group justify="space-between">
                <Text size="sm" style={{ color: '#999' }}>
                  Your message will be sent anonymously
                </Text>
                <Button
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  loading={isLoading}
                  style={{
                    background: '#E8621B',
                    borderRadius: '8px',
                  }}
                  rightSection={<IconSend size={18} />}
                >
                  Send Message
                </Button>
              </Group>
            </Stack>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
