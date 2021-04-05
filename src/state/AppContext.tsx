import { createContext, Dispatch } from 'react';
import { CalorieEntry } from '../types/typedef';
import { GlobalAction } from '../actions/Actions';

/**
 * the global AppState
 */
export interface IAppState {
  items: CalorieEntry[];
  totalCalories: number | undefined;
  targetCalories: number | undefined;
}

/**
 * The AppContext. Contains the global state, and a dispatcher function
 */
export interface IAppContext {
  appState: IAppState;
  dispatch: Dispatch<GlobalAction>;
}

/* The use of 'as any' here is safe because we pass in a generic type to createContext. This would prompt the linter
to throw an error when we do not provide an initial value while using the context provider */
const AppContext = createContext<IAppContext>(undefined as any);

export default AppContext;
