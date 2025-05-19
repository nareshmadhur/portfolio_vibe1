
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { siteContent } from '@/lib/constants';

/**
 * Array of navigation links to be displayed in the Navbar.
 * Sourced from `siteContent.nav`.
 */
const navLinks = [
  { href: '/', label: siteContent.nav.home },
  { href: '/music', label: siteContent.nav.music }, // Ensured this is second
  { href: '/bi-ai', label: siteContent.nav.biAiProjects },
  { href: '/photography', label: siteContent.nav.photography },
  { href: '/contact', label: siteContent.nav.contact },
];

/**
 * Navigation bar component for the application.
 * Provides links to different sections of the site and a mobile-responsive menu.
 * Uses `useEffect` to manage mounted state for mobile menu to prevent hydration issues.
 * @returns {JSX.Element | null} The Navbar component, or null if not mounted.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  /**
   * Toggles the visibility of the mobile menu.
   */
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Avoid hydration mismatch by not rendering on the server initially for mobile menu state.
  if (!isMounted) {
    return null;
  }

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium",
                pathname === link.href ? "bg-primary/10 text-foreground font-semibold" : "hover:bg-accent/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card absolute w-full shadow-lg z-40">
          <nav className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className={cn(
                  "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href ? "bg-primary/10 text-foreground font-semibold" : "hover:bg-accent/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
