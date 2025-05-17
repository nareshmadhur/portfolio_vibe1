import { musicVideos } from '@/lib/constants';
import YouTubePlayer from '@/components/shared/YouTubePlayer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface MusicShowcaseProps {
  isPreview?: boolean;
}

export default function MusicShowcase({ isPreview = false }: MusicShowcaseProps) {
  const videosToShow = isPreview ? musicVideos.slice(0, 2) : musicVideos; // Show 2 in preview for better layout

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videosToShow.map((video) => (
        <Card key={video.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl">{video.title}</CardTitle>
            {video.description && <CardDescription>{video.description}</CardDescription>}
          </CardHeader>
          <CardContent>
            <YouTubePlayer videoId={video.youtubeVideoId} title={video.title} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
