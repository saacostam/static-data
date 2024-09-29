import { Builder, BuilderWriteInstruction } from '../../core/index.js';
import { ME } from '../data/index.js';

export const getMe: Builder = (): BuilderWriteInstruction[] => {
  return [
    {
      path: 'me',
      name: 'get',
      content: ME,
    },
  ];
};
