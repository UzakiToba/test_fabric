import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export type Test = {
    test: string;
};
export const TEST = actionCreator<Test>('TEST');