import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { BottomNav } from '@/components/layout/BottomNav';
import { Footer } from '@/components/layout/Footer';
import { PWAProvider } from '@/components/pwa/PWAProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'VRent - Fluid Campus Mobility',
  description: 'Experience mobility in harmony with design. Book instantly, move fluidly.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'VRent',
  },
};

export const viewport: Viewport = {
  themeColor: '#007AFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${jakarta.variable} ${outfit.variable} h-full bg-[#F2F2F7] text-[#1C1C1E] antialiased selection:bg-vrent-primary/10 selection:text-vrent-primary`}>
        <PWAProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </PWAProvider>
      </body>
    </html>
  );
}
