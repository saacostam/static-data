import { ProjectRepository } from './index.js';
import { Project } from '../types/index.js';

const MOCK_PROJECTS: Project[] = [
  {
    id: 'id1',
    name: 'name1',
    rating: 1,
    smImage: 'snImage1',
    mdImage: 'mdImage1',
  },
  {
    id: 'id2',
    name: 'name2',
    rating: 2,
    smImage: 'snImage2',
    mdImage: 'mdImage2',
  },
];

const projectRepository = new ProjectRepository(MOCK_PROJECTS);

describe('ProjectRepository', () => {
  it('should getAllLeanProjects', () => {
    expect(projectRepository.getAllLeanProjects()).toEqual([
      {
        id: 'id1',
        name: 'name1',
        rating: 1,
        smImage: 'snImage1',
      },
      {
        id: 'id2',
        name: 'name2',
        rating: 2,
        smImage: 'snImage2',
      },
    ]);
  });

  it('should getProjectById', () => {
    expect(
      projectRepository.getProjectById({
        id: 'id1',
      }),
    ).toEqual({
      id: 'id1',
      name: 'name1',
      rating: 1,
      smImage: 'snImage1',
      mdImage: 'mdImage1',
    });
  });
});
