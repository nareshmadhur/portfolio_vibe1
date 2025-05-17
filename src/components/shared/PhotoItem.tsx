import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Photo } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

interface PhotoItemProps {
  photo: Photo;
}

export default function PhotoItem({ photo }: PhotoItemProps) {
  return (
    <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                View on Flickr <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
