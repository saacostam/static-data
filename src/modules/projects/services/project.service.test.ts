import { instance, mock, when } from 'ts-mockito';

import { ProjectService } from './index.js';
import { ProjectRepository } from '../repository/index.js';
import { LeanProject, Project, ProjectCategory } from '../types/index.js';

const MOCK_PROJECT_1: Project = {
  id: 'id1',
  name: 'name1',
  rating: 5,
  category: [ProjectCategory.Games],
  description: 'desc1',
  url: 'url1',
  iframe: {
    isResponsive: true,
  },
  repoUrl: 'repoUrl',
};

const MOCK_PROJECT_2: Project = {
  id: 'id2',
  name: 'name2',
  rating: 10,
  category: [ProjectCategory.SoftwareEngineering],
  description: 'desc2',
  url: 'url2',
  iframe: {
    isResponsive: false,
  },
  repoUrl: 'repoUrl',
};

const MOCK_PROJECT_3: Project = {
  id: 'id3',
  name: 'name3',
  rating: 12,
  category: [ProjectCategory.SoftwareEngineering, ProjectCategory.Games],
  description: 'desc3',
  url: 'url3',
  iframe: {
    isResponsive: false,
  },
  repoUrl: 'repoUrl',
};

const MOCK_PROJECT_4: Project = {
  id: 'id4',
  name: 'name4',
  rating: 9,
  category: [ProjectCategory.MusicSoftware],
  description: 'desc4',
  url: 'url4',
  iframe: {
    isResponsive: false,
  },
  repoUrl: 'repoUrl',
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
    const mockProjects: Project[] = [
      MOCK_PROJECT_1,
      MOCK_PROJECT_2,
      MOCK_PROJECT_3,
      MOCK_PROJECT_4,
    ];

    const mockLeanProjects: LeanProject[] = [
      MOCK_PROJECT_2,
      MOCK_PROJECT_3,
      MOCK_PROJECT_4,
    ].map(ProjectRepository.mapProjectToLeanProject);

    when(projectRepository.getAllProjects()).thenReturn(mockProjects);

    expect(projectService.getProjectById({ id: MOCK_PROJECT_1.id })).toEqual({
      ...MOCK_PROJECT_1,
      similarProjects: [
        mockLeanProjects[1],
        mockLeanProjects[0],
        mockLeanProjects[2],
      ],
    });
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
