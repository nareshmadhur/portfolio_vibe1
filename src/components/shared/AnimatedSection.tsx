// src/components/shared/AnimatedSection.tsx
'use client';

import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

/**
 * @fileoverview Defines the AnimatedSection component.
 * This component wraps its children and applies an animation
 * (e.g., fade in, slide up) when it scrolls into view.
 */

/**
 * Props for the AnimatedSection component.
 */
interface AnimatedSectionProps {
  /** The content to be rendered within the animated section. */
  children: ReactNode;
  /** Optional additional CSS classes for the wrapper div. */
  className?: string;
  /** Tailwind CSS delay class (e.g., 'delay-100', 'delay-200'). Defaults to 'delay-0'. */
  delay?: `delay-${number}`;
  /** The type of animation to apply. Defaults to 'fadeInUp'. */
  animationType?: 'fadeInUp' | 'fadeIn';
  /** Threshold for Intersection Observer (0 to 1). Defaults to 0.1. */
  threshold?: number;
  /** Whether the animation should trigger only once. Defaults to true. */
  triggerOnce?: boolean;
}

/**
 * A reusable component that animates its children when they scroll into view.
 * Uses `react-intersection-observer` to detect visibility.
 * @param {AnimatedSectionProps} props - The props for the component.
 * @returns {JSX.Element} The AnimatedSection component.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 'delay-0',
  animationType = 'fadeInUp',
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: threshold,
  });

  const animationClasses = {
    fadeInUp: {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    fadeIn: {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
  };

  const currentAnimation = animationClasses[animationType];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out', // Base transition
        delay, // Apply delay class
        inView ? currentAnimation.animate : currentAnimation.initial,
        className
      )}
    >
      {children}
    </div>
  );
}
