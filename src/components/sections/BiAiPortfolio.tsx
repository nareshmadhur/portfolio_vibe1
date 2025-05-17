
import { biAiProjects } from '@/lib/constants';
import ProjectCard from '@/components/shared/ProjectCard';

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
 * Component to display a portfolio of BI & AI projects.
 * Can show all projects or a limited preview.
 * @param {BiAiPortfolioProps} props - The props for the component.
 * @returns {JSX.Element} The BiAiPortfolio component.
 */
export default function BiAiPortfolio({ isPreview = false }: BiAiPortfolioProps) {
  const projectsToShow = isPreview ? biAiProjects.slice(0, 3) : biAiProjects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsToShow.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

    