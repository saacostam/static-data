import { ProjectRepository } from '../repository/index.js';
import { LeanProject, Project } from '../types/index.js';

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  /**
   * Returns a list of lean projects. Used mainly for identifying and filtering projects in an efficient way.
   * Not intended for fetching project contents.
   *
   * @public
   * @returns {LeanProject[]}
   */
  public getAllLeanProjects(): LeanProject[] {
    return this.projectRepository.getAllLeanProjects();
  }

  /**
   * * Project by id. If the projects is not found, an error is thrown.
   *
   * @public
   * @param {GetProjectByIdOptions} param0
   * @param {string} param0.id
   * @returns {Project}
   */
  public getProjectById({ id }: GetProjectByIdOptions): Project {
    return this.projectRepository.getProjectById({
      id: id,
    });
  }

  /**
   * Returns a list with the top n lean projects, based on rating.
   * Sorted in descending order. That is, most popular is first.
   *
   * @public
   * @param {getTopNRatedLeanProjectsOptions} param0
   * @param {number} param0.numberOfProjects: _numberOfProjects
   * @returns {LeanProject[]}
   */
  public getTopNRatedLeanProjects({
    numberOfProjects: _numberOfProjects,
  }: GetTopNRatedLeanProjectsOptions): LeanProject[] {
    let leanProjects = this.getAllLeanProjects();

    const numberOfProjects = Math.max(
      0,
      Math.min(_numberOfProjects, leanProjects.length),
    );

    const descendingOrder = (a: LeanProject, b: LeanProject): number =>
      b.rating - a.rating;
    leanProjects = leanProjects.sort(descendingOrder);

    return leanProjects.slice(0, numberOfProjects);
  }
}

interface GetProjectByIdOptions {
  id: string;
}

interface GetTopNRatedLeanProjectsOptions {
  numberOfProjects: number;
}
