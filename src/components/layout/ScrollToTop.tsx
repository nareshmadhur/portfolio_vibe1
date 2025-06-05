
'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollToTopProps {
  children: ReactNode;
}

/**
 * A client component that listens for pathname changes and scrolls
 * the window to the top (0,0) on each navigation.
 * This ensures that new pages are always viewed from the beginning.
 */
export default function ScrollToTop({ children }: ScrollToTopProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if window is defined (runs only on client-side)
    // and then scroll to the top of the page.
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]); // Dependency array: effect runs when pathname changes

  return <>{children}</>;
}
