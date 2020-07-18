import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as commonActions from './actionCreator';

export type InitialState = {
    test: string;
};

export const initialState: InitialState = {
    test: 'hogehogehoge',
};

export const commonReducer = reducerWithInitialState(initialState).case(
    commonActions.TEST,
    (state, { test }: commonActions.Test) => ({
        ...state,
        test,
    })
)