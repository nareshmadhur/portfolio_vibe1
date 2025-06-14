
import { biAiProjects, siteContent } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

/**
 * Props for the BiAiPortfolio component.
 */
interface BiAiPortfolioProps {
  /**
   * If true, displays a limited number of projects (e.g., for a homepage preview).
   * Defaults to false.
   */
  isPreview?: boolean;
}

/**
 * Component to display a portfolio of BI & AI projects using an accordion.
 * Each project is a collapsible item showing title, description, technologies, and links.
 * @param {BiAiPortfolioProps} props - The props for the component.
 * @returns {JSX.Element} The BiAiPortfolio component.
 */
export default function BiAiPortfolio({ isPreview = false }: BiAiPortfolioProps) {
  const projectsToShow = isPreview ? biAiProjects.slice(0, 2) : biAiProjects; // Show 2 in preview for accordion

  if (!projectsToShow.length) {
    return <p className="text-muted-foreground">No projects to display at the moment.</p>;
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {projectsToShow.map((project, index) => (
        <AccordionItem value={`item-${index}`} key={project.id} className="bg-card/50 dark:bg-card/70 rounded-lg px-4 shadow-md">
          <AccordionTrigger className="text-lg hover:no-underline">
            {project.title}
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <p className="text-foreground/80 text-base">
              {project.description}
            </p>
            
            <div>
              <h4 className="text-sm font-semibold mb-2 text-muted-foreground">{siteContent.projectCard.technologiesUsedLabel}</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> {siteContent.projectCard.githubButton}
                  </Link>
                </Button>
              )}
              {project.liveDemoUrl && (
                <Button variant="default" size="sm" asChild>
                  <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {siteContent.projectCard.liveDemoButton}
                  </Link>
                </Button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
