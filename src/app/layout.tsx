import Footer from '@/components/ui/Footer';
import { Navigation } from '@/components/ui/Navbar';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from './siteConfig';
import type { ReactNode } from 'react';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kitusp.com.br/'),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ['USP', 'Kitnet', 'Butantã'],
  authors: [
    {
      name: 'Iago Soriano',
      url: '',
    },
    {
      name: 'Victor Kenzo Toma',
      url: '',
    },
  ],
  creator: 'Iago Soriano',
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  icons: {
    icon: '/casa.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} mt-12 min-h-screen scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
