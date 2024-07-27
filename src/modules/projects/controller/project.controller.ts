import { ProjectService } from '../services/index.js';
import { LeanProject, Project } from '../types/index.js';

export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  public getAllLeanProjects(): LeanProject[] {
    return this.projectService.getAllLeanProjects();
  }

  public getProjectById({ id }: GetProjectByIdOptions): Project {
    return this.projectService.getProjectById({
      id: id,
    });
  }

  public getTopNRatedLeanProjects({
    numberOfProjects,
  }: GetTopNRatedLeanProjectsOptions): LeanProject[] {
    return this.projectService.getTopNRatedLeanProjects({
      numberOfProjects: numberOfProjects || 3,
    });
  }
}

export interface GetProjectByIdOptions {
  id: string;
}

export interface GetTopNRatedLeanProjectsOptions {
  numberOfProjects?: number;
}
