'use client';

import { Container, Title, Text, Grid, Card, Stack, Group } from '@mantine/core';
import {
  IconTruck,
  IconShieldCheck,
  IconClock,
  IconDots,
} from '@tabler/icons-react';

export function FeaturesSection() {
  const features = [
    {
      icon: IconShieldCheck,
      title: 'Fresh & Trusted',
      description: 'Direct from our dairy with guaranteed freshness and quality you can trust',
    },
    {
      icon: IconTruck,
      title: 'Convenient Delivery',
      description: 'Choose your delivery slot and we deliver right to your doorstep',
    },
    {
      icon: IconClock,
      title: 'Scheduled Planning',
      description: 'Order today for tomorrow. Perfect for predictable daily deliveries',
    },
    {
      icon: IconDots,
      title: 'Multiple Products',
      description: 'Milk, Paneer, Butter, Ghee, Curd, and more premium dairy products',
    },
  ];

  return (
    <section style={{ padding: '80px 20px', background: 'white' }}>
      <Container size="lg">
        <Stack gap="xl">
          <div style={{ textAlign: 'center' }}>
            <Title
              order={2}
              size="2.5rem"
              style={{ color: '#1a1a1a', fontWeight: 700, marginBottom: '16px' }}
            >
              Why Choose MurliMadhav?
            </Title>
            <Text size="lg" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We&apos;re revolutionizing how you access fresh dairy by combining traditional quality
              with modern convenience.
            </Text>
          </div>

          <Grid gutter="lg" mt="xl">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <Card
                    padding="lg"
                    radius="12px"
                    style={{
                      border: '1px solid #f0f0f0',
                      background: '#fafafa',
                      height: '100%',
                    }}
                  >
                    <Stack gap="md">
                      <div
                        style={{
                          background: '#FFE8DC',
                          width: '60px',
                          height: '60px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={32} color="#E8621B" />
                      </div>
                      <div>
                        <Text size="lg" fw={600} style={{ color: '#1a1a1a' }}>
                          {feature.title}
                        </Text>
                        <Text size="sm" style={{ color: '#666', marginTop: '8px' }}>
                          {feature.description}
                        </Text>
                      </div>
                    </Stack>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
