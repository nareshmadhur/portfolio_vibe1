import { photographyItems } from '@/lib/constants';
import PhotoItem from '@/components/shared/PhotoItem';

interface PhotographyGalleryProps {
  isPreview?: boolean;
}

export default function PhotographyGallery({ isPreview = false }: PhotographyGalleryProps) {
  const photosToShow = isPreview ? photographyItems.slice(0, 3) : photographyItems;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photosToShow.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
