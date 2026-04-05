import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { BottomNav } from '@/components/layout/BottomNav';
import { Footer } from '@/components/layout/Footer';
import { PWAProvider } from '@/components/pwa/PWAProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VRent - Smart Campus Vehicle Rentals',
  description: 'Find your trusty companion for campus adventures. Book instantly, no paperwork.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'VRent',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFD600',
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
      <body className={`${inter.className} h-full bg-[#FFFCEB] text-black antialiased`}>
        <PWAProvider>
          <Navbar />
          <main className="min-h-screen pt-16 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </PWAProvider>
      </body>
    </html>
  );
}
