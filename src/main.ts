import { writeFile } from 'fs/promises';

import { Builder } from './modules/core/index.js';
import {
  getAllLeanProjects,
  getProjectByIdBuilder,
  getTopNRatedLeanProjects,
} from './modules/projects/index.js';
import { createDirectories } from './modules/fs-utils/index.js';
import { getMe } from './modules/me/index.js';

const builders: Builder[] = [
  getAllLeanProjects,
  getProjectByIdBuilder,
  getTopNRatedLeanProjects,
  getMe,
];

export async function index(builders: Builder[]): Promise<void> {
  for (const builder of builders) {
    const instructions = builder();

    for (const instruction of instructions) {
      const { path: _path, name, content } = instruction;

      const path = `./docs/${_path}`;

      // Create directories (if necessary)
      await createDirectories(path);

      // Write to file
      await writeFile(`${path}/${name}.json`, JSON.stringify(content));
    }
  }
}

void index(builders);
