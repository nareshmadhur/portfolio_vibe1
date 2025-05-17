
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

/**
 * Props for the SectionWrapper component.
 */
interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  /** The content to be rendered within the section. */
  children: React.ReactNode;
  /** The HTML tag to use for the section wrapper (e.g., "section", "div"). Defaults to "section". */
  as?: keyof JSX.IntrinsicElements;
  /** Optional CSS classes for the inner container div. */
  containerClassName?: string;
  /** Optional URL for a background image for the section. */
  backgroundImageUrl?: string;
  /** Minimum height class for the section, e.g., "min-h-[400px]". Useful with background images. */
  minHeightClass?: string;
  /** Allows overriding the default tinted background class for content when a background image is present. */
  contentBgClass?: string;
}

/**
 * A reusable wrapper component for content sections.
 * Provides consistent padding, containerization, and optional background image support
 * with a tinted content overlay.
 * @param {SectionWrapperProps} props - The props for the component.
 * @returns {JSX.Element} The SectionWrapper component.
 */
export default function SectionWrapper({
  children,
  className,
  containerClassName,
  as: Component = "section",
  backgroundImageUrl,
  minHeightClass = "min-h-[400px]", // Default min height for sections with bg images
  contentBgClass,
  ...props
}: SectionWrapperProps) {
  const hasBackgroundImage = !!backgroundImageUrl;

  return (
    <Component
      className={cn(
        "py-6 md:py-10 relative overflow-hidden",
        hasBackgroundImage && minHeightClass,
        className
      )}
      {...props}
    >
      {hasBackgroundImage && (
        <Image
          src={backgroundImageUrl}
          alt="Section background" // Generic alt, consider making this a prop if more specificity is needed
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="abstract background texture"
          priority={false}
        />
      )}
      <div
        className={cn(
          "container mx-auto px-4 relative z-10 flex flex-col h-full",
          hasBackgroundImage && "justify-end", // Push content to bottom if bg image
          containerClassName
        )}
      >
        <div
          className={cn(
            "w-full",
            hasBackgroundImage && (contentBgClass || "bg-card/80 dark:bg-card/70 p-6 md:p-8 rounded-lg shadow-xl mb-4 backdrop-blur-sm")
          )}
        >
          {children}
        </div>
      </div>
    </Component>
  );
}

    