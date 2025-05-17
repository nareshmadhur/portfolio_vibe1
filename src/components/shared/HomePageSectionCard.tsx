
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
      "relative block group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[16/9]", // Full width aspect ratio
      className
    )}>
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
        data-ai-hint={imageAiHint}
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary-foreground group-hover:text-primary-foreground/90 transition-colors">{title}</h2>
        <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 group-hover:text-primary-foreground/90 transition-colors line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
