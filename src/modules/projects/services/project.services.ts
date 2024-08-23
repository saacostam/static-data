import { NotFoundException, ValueException } from '../../core/index.js';
import { euclideanDistance } from '../../vector-distance/index.js';
import { ProjectRepository } from '../repository/index.js';
import { LeanProject, Project, ProjectCategory } from '../types/index.js';
import { ProjectDto } from '../types/project.dto.js';

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
  public getProjectById({ id }: GetProjectByIdOptions): ProjectDto {
    const allProjects = this.projectRepository.getAllProjects();
    const project = allProjects.find((project) => project.id === id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id}`);
    }

    return {
      ...project,
      similarProjects: this.findClosestNProjects(project, allProjects),
    };
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

  /**
   * Receives a project and returns a vector representation of the project.
   *
   * @private
   * @param {Project} project
   * @returns {number[]}
   */
  private mapProjectToPropertiesNumberVector(project: Project): number[] {
    const projectCategoryValue = project.category.reduce((value, category) => {
      const categoryValue = _mapCategoryToNumberedProperty.get(category);

      if (!categoryValue) {
        throw new ValueException(
          `Category value is falsy. Unable to create similarity-search vector, for project with id ${project.id}`,
        );
      }

      return value + categoryValue;
    }, 0);

    return [projectCategoryValue];
  }

  /**
   * Returns the n closest projects based on eucledian vector distances.
   *
   * @private
   * @param {Project} currProject
   * @param {Project[]} allProjects
   * @returns {Project[]}
   */
  private findClosestNProjects(
    currProject: Project,
    allProjects: Project[],
    n: number = 3,
  ): LeanProject[] {
    const differentProjects = allProjects.filter(
      (project) => project.id !== currProject.id,
    );

    const projectWithDistances: ProjectWithDistance[] = differentProjects.map(
      (project): ProjectWithDistance => ({
        project: project,
        distance: euclideanDistance(
          this.mapProjectToPropertiesNumberVector(currProject),
          this.mapProjectToPropertiesNumberVector(project),
        ),
      }),
    );

    const ascendingOrderBasedOnDistance = (
      a: ProjectWithDistance,
      b: ProjectWithDistance,
    ): number =>
      0.5 * (a.distance - b.distance) +
      0.5 * (b.project.rating - a.project.rating);
    return projectWithDistances
      .sort(ascendingOrderBasedOnDistance)
      .slice(0, n)
      .map(({ project }) => ProjectRepository.mapProjectToLeanProject(project));
  }
}

const _mapCategoryToNumberedProperty = new Map<ProjectCategory, number>([
  [ProjectCategory.MusicSoftware, 50],
  [ProjectCategory.SoftwareEngineering, 30],
  [ProjectCategory.Games, 10],
]);

interface GetProjectByIdOptions {
  id: string;
}

interface GetTopNRatedLeanProjectsOptions {
  numberOfProjects: number;
}

interface ProjectWithDistance {
  project: Project;
  distance: number;
}
