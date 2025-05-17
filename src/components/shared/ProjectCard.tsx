
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/constants';
import { siteContent } from '@/lib/constants';
import { Github, ExternalLink } from 'lucide-react';

/**
 * Props for the ProjectCard component.
 */
interface ProjectCardProps {
  /** The project object containing details like title, description, technologies, etc. */
  project: Project;
}

/**
 * Component to display a single project in a card format.
 * Shows project image, title, description, technologies used, and links to GitHub/live demo.
 * @param {ProjectCardProps} props - The props for the component.
 * @returns {JSX.Element} The ProjectCard component.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {project.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl}
            alt={project.title} // Use project title for alt text
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.dataAiHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">{siteContent.projectCard.technologiesUsedLabel}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex space-x-2 w-full">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> {siteContent.projectCard.githubButton}
              </Link>
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> {siteContent.projectCard.liveDemoButton}
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

    