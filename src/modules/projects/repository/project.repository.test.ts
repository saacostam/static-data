import { ProjectRepository } from './index.js';
import { Project } from '../types/index.js';
import { NotFoundException } from '../../core/index.js';

const MOCK_PROJECT_1: Project = {
  id: 'id1',
  name: 'name1',
  rating: 1,
  smImage: 'snImage1',
  mdImage: 'mdImage1',
};

const MOCK_PROJECT_2: Project = {
  id: 'id2',
  name: 'name2',
  rating: 2,
  smImage: 'snImage2',
  mdImage: 'mdImage2',
};

const projectRepository = new ProjectRepository([
  MOCK_PROJECT_1,
  MOCK_PROJECT_2,
]);

describe('ProjectRepository', () => {
  it('should getAllLeanProjects', () => {
    expect(projectRepository.getAllLeanProjects()).toEqual([
      { ...MOCK_PROJECT_1, mdImage: undefined },
      { ...MOCK_PROJECT_2, mdImage: undefined },
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
