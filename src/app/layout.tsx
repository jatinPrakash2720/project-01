import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MurliMadhav — Fresh Dairy Delivered Daily',
  description:
    'MurliMadhav is a dairy-first commerce platform delivering farm-fresh milk, paneer, ghee, butter, curd, and more directly from our dairy to your doorstep. Scheduled delivery, 100% prepaid, zero middlemen.',
  keywords: 'fresh dairy delivery, milk delivery, paneer, ghee, butter, farm fresh, MurliMadhav, dairy platform',
  openGraph: {
    title: 'MurliMadhav — Fresh Dairy Delivered Daily',
    description: 'Farm-fresh dairy delivered directly from our own dairy to your doorstep.',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MurliMadhav',
  },
};

/** Browser chrome / mobile address bar — matches navbar warm cream */
export const viewport: Viewport = {
  themeColor: '#FFFDF9',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#FFFDF9' }}>{children}</body>
    </html>
  );
}
