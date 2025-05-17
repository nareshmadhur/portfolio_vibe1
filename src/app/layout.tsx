
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { siteContent, userProfile } from '@/lib/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * Default metadata for the application.
 * Titles and descriptions are sourced from `siteContent.metadata`.
 */
export const metadata: Metadata = {
  title: siteContent.metadata.defaultTitle,
  description: siteContent.metadata.defaultDescription,
};

/**
 * Root layout for the entire application.
 * Sets up HTML structure, global styles, fonts, navigation, and footer.
 * @param {Readonly<{ children: React.ReactNode }>} props - The children to render within the layout.
 * @returns {JSX.Element} The root HTML structure for the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

    