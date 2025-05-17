import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold text-primary mb-6 md:mb-8", // Removed text-center
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
