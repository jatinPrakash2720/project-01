'use client';

import { Container, Stack, Text, Divider, Group } from '@mantine/core';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#1a1a1a', color: 'white', padding: '60px 20px 20px' }}>
      <Container size="lg">
        <Stack gap="lg">
          <div>
            <Text size="lg" fw={700} style={{ marginBottom: '12px' }}>
              MurliMadhav
            </Text>
            <Text size="sm" style={{ color: '#bbb', lineHeight: 1.6 }}>
              Fresh dairy products delivered directly from our dairy to your doorstep.
              Experience authentic quality with convenient digital ordering.
            </Text>
          </div>

          <Divider style={{ borderColor: '#333' }} />

          <Group justify="space-between" align="center">
            <Text size="sm" style={{ color: '#999' }}>
              © {currentYear} MurliMadhav. All rights reserved.
            </Text>
            <Group gap="md">
              <Text size="sm" style={{ color: '#bbb', cursor: 'pointer' }}>
                Privacy Policy
              </Text>
              <Text size="sm" style={{ color: '#bbb', cursor: 'pointer' }}>
                Terms of Service
              </Text>
            </Group>
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}
