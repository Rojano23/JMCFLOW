import type { CSSProperties } from 'react';

import type { Project } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BaseCard } from '../../components/cards';
import { Badge } from '../../components/ui';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: designTokens.spacing.sm,
    marginBottom: designTokens.spacing.sm,
  };

  const titleStyle: CSSProperties = {
    margin: 0,
    fontFamily: theme.fontFamilyHeading,
    fontWeight: 700,
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: theme.textOnDarkColor,
  };

  const sectorStyle: CSSProperties = {
    display: 'inline-block',
    marginBottom: designTokens.spacing.xs,
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: theme.accentColor,
  };

  const descriptionStyle: CSSProperties = {
    margin: 0,
    color: theme.textOnDarkColor,
    fontSize: '0.95rem',
    lineHeight: 1.65,
  };

  return (
    <BaseCard ariaLabel={project.title}>
      <span style={sectorStyle}>{project.sector}</span>
      <div style={headerStyle}>
        <h3 style={titleStyle}>{project.title}</h3>
        {project.featured && <Badge label="Destacado" tone="accent" />}
      </div>
      <p style={descriptionStyle}>{project.shortDescription}</p>
    </BaseCard>
  );
}
