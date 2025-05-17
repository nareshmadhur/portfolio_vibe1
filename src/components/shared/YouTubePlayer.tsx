
/**
 * Props for the YouTubePlayer component.
 */
interface YouTubePlayerProps {
  /** The ID of the YouTube video to embed. */
  videoId: string;
  /** The title for the iframe, used for accessibility. */
  title: string;
}

/**
 * A component to embed a YouTube video player.
 * Uses an iframe to display the video.
 * @param {YouTubePlayerProps} props - The props for the component.
 * @returns {JSX.Element} The YouTubePlayer component.
 */
export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="border-0" // Remove default iframe border
      ></iframe>
    </div>
  );
}

    