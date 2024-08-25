import { ProjectRepository } from './index.js';
import { NotFoundException } from '../../core/index.js';
import { Project, ProjectCategory } from '../types/index.js';

const MOCK_PROJECT_1: Project = {
  id: 'id1',
  name: 'name1',
  rating: 1,
  category: [ProjectCategory.Games],
  smImage: 'snImage1',
  mdImage: 'mdImage1',
  description: 'desc1',
  url: 'url1',
  iframe: {
    isResponsive: true,
  },
  repoUrl: 'repoUrl',
  content: [],
};

const MOCK_PROJECT_2: Project = {
  id: 'id2',
  name: 'name2',
  rating: 2,
  category: [ProjectCategory.SoftwareEngineering],
  smImage: 'snImage2',
  mdImage: 'mdImage2',
  description: 'desc2',
  url: 'url2',
  iframe: {
    isResponsive: false,
  },
  repoUrl: 'repoUrl',
  content: [],
};

const projectRepository = new ProjectRepository([
  MOCK_PROJECT_1,
  MOCK_PROJECT_2,
]);

describe('ProjectRepository', () => {
  it('should getAllLeanProjects', () => {
    expect(projectRepository.getAllLeanProjects()).toEqual([
      {
        ...MOCK_PROJECT_1,
        mdImage: undefined,
        url: undefined,
        iframe: undefined,
        repoUrl: undefined,
      },
      {
        ...MOCK_PROJECT_2,
        mdImage: undefined,
        url: undefined,
        iframe: undefined,
        repoUrl: undefined,
      },
    ]);
  });

  it('should getProjectById', () => {
    expect(
      projectRepository.getProjectById({
        id: 'id1',
      }),
    ).toEqual(MOCK_PROJECT_1);
  });

  it('should throw an error when getProjectById is called with a non-existing id', () => {
    expect(() =>
      projectRepository.getProjectById({
        id: 'id-not-found',
      }),
    ).toThrow(new NotFoundException('Project'));
  });
});
