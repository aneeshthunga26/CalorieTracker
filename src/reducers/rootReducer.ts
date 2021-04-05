import {IAppState} from "../state/AppContext";
import {EntryAction, GlobalAction, IAlterCalorieAction, ICalorieTargetAction} from "../actions/Actions";
import calorieReducer from "./calorieReducer";
import entryReducer from "./entryReducer";
import targetCalorieReducer from "./targetCalorieReducer";

/**
 * The top level reducer for the entire App which takes in any dispatched action and returns the mutated state
 * @param state - the current {@link IAppState}
 * @param action - the dispatched {@link GlobalAction}
 * @return - the mutated {@link IAppState}
 */
export default function rootReducer(state: IAppState, action: GlobalAction): IAppState {
    const type = action.type;
    if (type === "add-calorie" || type === "subtract-calorie") {
        return calorieReducer(state, action as IAlterCalorieAction);
    }
    else if (type === "add-entry" || type === "remove-entry") {
        return entryReducer(state, action as EntryAction);
    }
    else if (type === "set-target") {
        return targetCalorieReducer(state, action as ICalorieTargetAction);
    }
    return state;
}