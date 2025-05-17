import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the SectionTitle component.
 */
interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** The content to be displayed as the title. */
  children: React.ReactNode;
}

/**
 * A reusable component for displaying section titles.
 * Ensures responsive text sizing.
 * @param {SectionTitleProps} props - The props for the component.
 * @returns {JSX.Element} The SectionTitle component.
 */
export default function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl font-bold text-primary mb-6 md:mb-8", // Adjusted for better mobile scaling
        className // Allow overriding or extending classes
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
