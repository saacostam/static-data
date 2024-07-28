import { anything, instance, mock, when } from 'ts-mockito';

import { ProjectService } from './index.js';
import { ProjectRepository } from '../repository/index.js';
import { Project } from '../types/index.js';

const MOCK_PROJECT_1: Project = {
  id: 'id1',
  name: 'name1',
  rating: 5,
  description: 'desc1',
  url: 'url1',
};

const MOCK_PROJECT_2: Project = {
  id: 'id2',
  name: 'name2',
  rating: 10,
  description: 'desc2',
  url: 'url2',
};

const projectRepository = mock(ProjectRepository);
const projectRepositoryInstance = instance(projectRepository);

const projectService = new ProjectService(projectRepositoryInstance);

describe('ProjectService', () => {
  it('should getAllLeanProjects', () => {
    const mockLeanProjects: Project[] = [MOCK_PROJECT_1, MOCK_PROJECT_2];

    when(projectRepository.getAllLeanProjects()).thenReturn(mockLeanProjects);
    expect(projectService.getAllLeanProjects()).toEqual(mockLeanProjects);
  });

  it('should getProjectById', () => {
    when(projectRepository.getProjectById(anything())).thenReturn(
      MOCK_PROJECT_1,
    );
    expect(projectService.getProjectById({ id: MOCK_PROJECT_1.id })).toEqual(
      MOCK_PROJECT_1,
    );
  });

  it('should getTopNRatedLeanProjects', () => {
    when(projectRepository.getAllLeanProjects()).thenReturn([
      MOCK_PROJECT_1,
      MOCK_PROJECT_2,
    ]);

    expect(
      projectService.getTopNRatedLeanProjects({
        numberOfProjects: 1,
      }),
    ).toEqual([MOCK_PROJECT_2]);
  });

  it('should getTopNRatedLeanProjects return 0 items if numberOfProjects is less than 0', () => {
    when(projectRepository.getAllLeanProjects()).thenReturn([
      MOCK_PROJECT_1,
      MOCK_PROJECT_2,
    ]);

    expect(
      projectService.getTopNRatedLeanProjects({
        numberOfProjects: 0,
      }),
    ).toEqual([]);
  });

  it('should getTopNRatedLeanProjects return all items if numberOfProjects exceeds the number of items', () => {
    const MOCK_PROJECTS = [MOCK_PROJECT_1, MOCK_PROJECT_2];

    when(projectRepository.getAllLeanProjects()).thenReturn(MOCK_PROJECTS);

    expect(
      projectService.getTopNRatedLeanProjects({
        numberOfProjects: MOCK_PROJECTS.length + 100,
      }),
    ).toEqual(MOCK_PROJECTS);
  });
});
