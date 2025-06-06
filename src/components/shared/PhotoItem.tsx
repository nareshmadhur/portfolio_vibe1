/**
 * @fileoverview Defines the PhotoItem component.
 * Displays a single photography item in a card format.
 */
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Photo } from '@/lib/constants';
import { siteContent } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * Props for the PhotoItem component.
 */
interface PhotoItemProps {
  /** The photo object containing details like title, image URL, Flickr URL, etc. */
  photo: Photo;
}

/**
 * Component to display a single photography item in a card format.
 * Shows the photo, title, description, and a link to view it on Flickr.
 * Includes a hover effect to lift the card.
 * @param {PhotoItemProps} props - The props for the component.
 * @returns {JSX.Element} The PhotoItem component.
 */
export default function PhotoItem({ photo }: PhotoItemProps) {
  return (
    <Card className="overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <CardContent className="p-0">
        <Link href={photo.flickrUrl} target="_blank" rel="noopener noreferrer" className="block relative aspect-video">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={photo.dataAiHint}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ExternalLink className="h-8 w-8 text-white" />
          </div>
        </Link>
      </CardContent>
      <CardHeader className="py-4">
        <CardTitle className="text-lg">{photo.title}</CardTitle>
        {photo.description && <CardDescription className="text-sm h-10 overflow-y-auto">{photo.description}</CardDescription>}
      </CardHeader>
       <CardFooter>
         <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent/80">
           <Link href={photo.flickrUrl} target="_blank" rel="noopener noreferrer">
             {siteContent.photoItem.viewOnFlickrLink} <ExternalLink className="ml-1 h-3 w-3" />
           </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
