import { NotFoundException } from '../../core/index.js';
import { LeanProject, Project } from '../types/index.js';

export class ProjectRepository {
  constructor(private readonly PROJECTS: Project[]) {}

  public static mapProjectToLeanProject({
    id,
    name,
    rating,
    description,
    category,
    smImage,
  }: Project): LeanProject {
    return {
      id,
      name,
      rating,
      description,
      category,
      smImage,
    };
  }

  /**
   * Returns a list of lean projects. Used mainly for identifying and filtering projects in an efficient way.
   * Not intended for fetching project contents.
   *
   * @public
   * @returns {LeanProject[]}
   */
  public getAllLeanProjects(): LeanProject[] {
    return this.PROJECTS.map(ProjectRepository.mapProjectToLeanProject);
  }

  /**
   * Returns a list of projects.
   *
   * @public
   * @returns {LeanProject[]}
   */
  public getAllProjects(): Project[] {
    return this.PROJECTS.map((project) => ({ ...project }));
  }

  /**
   * Project by id. If the projects is not found, an error is thrown.
   *
   * @public
   * @param {GetProjectByIdOptions} param0
   * @param {string} param0.id
   * @returns {Project}
   */
  public getProjectById({ id }: GetProjectByIdOptions): Project {
    const project = this.PROJECTS.find((project) => project.id === id);

    if (!project) {
      throw new NotFoundException('Project');
    }

    return {
      ...project,
    };
  }
}

interface GetProjectByIdOptions {
  id: string;
}
