
import { photographyItems } from '@/lib/constants';
import PhotoItem from '@/components/shared/PhotoItem';

/**
 * Props for the PhotographyGallery component.
 */
interface PhotographyGalleryProps {
  /**
   * If true, displays a limited number of photos (e.g., for a homepage preview).
   * Defaults to false.
   */
  isPreview?: boolean;
}

/**
 * Component to display a gallery of photography items.
 * Can show all photos or a limited preview.
 * @param {PhotographyGalleryProps} props - The props for the component.
 * @returns {JSX.Element} The PhotographyGallery component.
 */
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

    