export type BuilderWriteInstruction = {
  path: string;
  name: string;
  content: object;
};

export type Builder = () => BuilderWriteInstruction[];
