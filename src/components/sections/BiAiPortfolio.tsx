import { biAiProjects } from '@/lib/constants';
import ProjectCard from '@/components/shared/ProjectCard';

interface BiAiPortfolioProps {
  isPreview?: boolean;
}

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
