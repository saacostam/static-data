import { Builder, BuilderWriteInstruction } from '../../core/index.js';
import { ProjectController } from '../controller/index.js';
import { PROJECTS } from '../data/index.js';
import { ProjectService } from '../services/index.js';
import { ProjectRepository } from '../repository/index.js';

const projectRepository = new ProjectRepository(PROJECTS);
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

export const getAllLeanProjects: Builder = (): BuilderWriteInstruction[] => {
  const leanProjects = projectController.getAllLeanProjects();

  return [
    {
      path: `projects`,
      name: `lean`,
      content: leanProjects,
    },
  ];
};
