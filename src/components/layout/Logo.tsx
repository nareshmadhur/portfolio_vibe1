/**
 * @fileoverview Defines the Logo component for the application.
 * Displays the application name and links to the homepage.
 */
import Link from 'next/link';
import { siteContent } from '@/lib/constants';

/**
 * Logo component for the application.
 * Displays the application name and links to the homepage.
 * Uses `text-primary-foreground` for high visibility in dark mode on a dark navbar.
 * @returns {JSX.Element} The Logo component.
 */
export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors">
      {siteContent.global.appName}
    </Link>
  );
}
