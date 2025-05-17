import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  containerClassName?: string;
}

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  as: Component = "section",
  ...props
}: SectionWrapperProps) {
  return (
    <Component className={cn("py-12 md:py-16", className)} {...props}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </Component>
  );
}
