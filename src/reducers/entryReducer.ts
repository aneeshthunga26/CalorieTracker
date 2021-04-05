import {IAppState} from "../state/AppContext";
import {EntryAction} from "../actions/Actions";
import calorieReducer from "./calorieReducer";

/**
 * A reducer witch handles the dispatched {@link EntryAction}s and mutates the current {@link IAppState}
 * @param state - the current {@link IAppState}
 * @param action - the dispatched {@link EntryAction}
 * @return - the mutated {@link IAppState}
 */
export default function entryReducer(state: IAppState, action: EntryAction):IAppState {
    switch (action.type) {
        /**
         * adds a new {@link CalorieEntry} to the {@link IAppState}
         */
        case "add-entry":
            state = calorieReducer(state, action.payload.calorieAction);
            return {
                ...state,
                items: [...state.items, action.payload.entry],
            }

        /**
         * removes a {@link CalorieEntry} from the {@link IAppState}
         */
        case "remove-entry":
            state = calorieReducer(state, action.payload.calorieAction)
            return {
                ...state,
                items: state.items.filter((calorieEntry) => calorieEntry.id !== action.payload.id),
            }

        //unreachable
        default:
            const _unreachable: never = action;
            return _unreachable;
    }
}
