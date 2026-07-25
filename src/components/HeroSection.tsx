'use client';

import { Container, Title, Text, Button, Group, Stack } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #FFF5F1 0%, #FFE8DC 100%)',
        padding: '80px 20px',
      }}
    >
      <Container size="lg">
        <Stack gap="xl" align="center" ta="center">
          <div>
            <Title
              order={1}
              size="4rem"
              style={{
                color: '#1a1a1a',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Fresh Dairy, Delivered Daily
            </Title>
            <Text
              size="xl"
              mt="md"
              style={{
                color: '#555',
                maxWidth: '600px',
                margin: '16px auto',
              }}
            >
              Direct from our dairy to your doorstep. Experience authentic, fresh dairy products
              with trusted quality and convenient digital ordering.
            </Text>
          </div>

          <Group justify="center" mt="lg">
            <Button
              size="lg"
              style={{
                background: '#E8621B',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 600,
              }}
              onClick={onContactClick}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              style={{
                borderColor: '#E8621B',
                color: '#E8621B',
                borderRadius: '8px',
                fontWeight: 600,
              }}
            >
              Learn More
            </Button>
          </Group>
        </Stack>
      </Container>
    </section>
  );
}
