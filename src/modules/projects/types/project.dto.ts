import { LeanProject, Project } from './project.type.js';

export interface ProjectDto extends Project {
  similarProjects: LeanProject[];
}
