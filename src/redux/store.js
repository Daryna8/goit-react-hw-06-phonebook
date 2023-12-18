import { combineReducers, createStore } from 'redux';
import { phonebookReducer } from './phonebook/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const devtools = devToolsEnhancer();

const rootReducer = combineReducers({
  phonebookData: phonebookReducer,
});

export const store = createStore(rootReducer, devtools);
