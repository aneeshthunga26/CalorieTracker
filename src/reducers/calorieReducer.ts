import { IAlterCalorieAction } from '../actions/Actions';
import { IAppState } from '../state/AppContext';

/**
 * A reducer witch handles the dispatched {@link IAlterCalorieAction}s and mutates the current {@link IAppState}
 * @param state - the current {@link IAppState}
 * @param action - the dispatched {@link IAlterCalorieAction}
 * @return - the mutated {@link IAppState}
 */
export default function calorieReducer(state: IAppState, action: IAlterCalorieAction): IAppState {
  switch (action.type) {
    // adds the calories to the total calories
    case 'add-calorie':
      return {
        ...state,
        totalCalories: state.totalCalories ? state.totalCalories + action.payload : action.payload,
      };
    // subtracts the calories from the total calories
    case 'subtract-calorie':
      return {
        ...state,
        totalCalories: state.totalCalories ? state.totalCalories - action.payload : 0,
      };
    // unreachable code
    default:
      const _unreachable: never = action.type;
      return _unreachable;
  }
}
