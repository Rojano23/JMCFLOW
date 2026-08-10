import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';

export interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="projects-grid" role="list" aria-label="Lista de proyectos">
      {projects.map((project) => (
        <div key={project.id} role="listitem">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
