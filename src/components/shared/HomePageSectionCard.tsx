
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HomePageSectionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  linkUrl: string;
  className?: string;
}

export default function HomePageSectionCard({ title, description, imageUrl, imageAiHint, linkUrl, className }: HomePageSectionCardProps) {
  return (
    <Link href={linkUrl} className={cn(
      "relative block group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]", // Adjusted aspect ratios
      className
    )}>
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
        data-ai-hint={imageAiHint}
        priority={false} // Set to true if these images are LCP candidates on homepage
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent group-hover:from-black/90 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-primary-foreground group-hover:text-primary-foreground/90 transition-colors">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-primary-foreground/80 group-hover:text-primary-foreground/90 transition-colors line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
