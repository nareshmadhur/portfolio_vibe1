import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { siteContent, userProfile } from '@/lib/constants';

// Setup new font: Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Load light, regular, and bold weights
});

/**
 * Default metadata for the application.
 * Titles and descriptions are sourced from `siteContent.metadata`.
 */
export const metadata: Metadata = {
  title: siteContent.metadata.defaultTitle,
  description: siteContent.metadata.defaultDescription,
  icons: {
    icon: '/icon.png'
  }
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
      <body className={`${robotoCondensed.variable} antialiased flex flex-col min-h-screen`}>
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