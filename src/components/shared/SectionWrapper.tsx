import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  containerClassName?: string;
  backgroundImageUrl?: string;
  minHeightClass?: string; // e.g., "min-h-[400px]" or "min-h-screen/2"
  contentBgClass?: string; // Allows overriding the tinted background
}

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
        "py-6 md:py-10 relative overflow-hidden", // Reduced padding, added relative, overflow-hidden
        hasBackgroundImage && minHeightClass,
        className
      )}
      {...props}
    >
      {hasBackgroundImage && (
        <Image
          src={backgroundImageUrl}
          alt="Section background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="abstract background texture" // Generic hint
          priority={false} // Consider setting true for LCP elements if applicable
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
