import { createStore, compose } from 'redux';
import { combineReducers } from 'redux';

import { commonReducer } from "./common";

const composeEnhancer: typeof compose =
    process.env.NODE_ENV === 'development'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

export const rootReducer = combineReducers({
    common: commonReducer
})

export const store = createStore(rootReducer, composeEnhancer());
