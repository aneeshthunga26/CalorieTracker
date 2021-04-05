import { IAppState } from '../state/AppContext';
import { ICalorieTargetAction } from '../actions/Actions';

/**
 * A reducer to set the target calories
 * @param state - the current {@link IAppState}
 * @param action - the dispatched {@link ICalorieTargetAction}
 * @return - the mutated {@link IAppState}
 */
export default function targetCalorieReducer(state: IAppState, action: ICalorieTargetAction): IAppState {
  return {
    ...state,
    targetCalories: action.payload,
  };
}
