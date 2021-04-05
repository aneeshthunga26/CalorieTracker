import {IAppContext, IAppState} from "../state/AppContext";
import {useReducer} from "react";
import rootReducer from "../reducers/rootReducer";

/**
 * A custom hook to obtain the current {@link IAppContext}.
 * @param initialState {@link IAppState}.
 * @return the {@link IAppContext}
 */
export const useAppState = (initialState: IAppState): IAppContext => {
    //hook up the state and reducers
    const [appState, dispatch] = useReducer(rootReducer, initialState);

    return {
        appState: appState,
        dispatch: dispatch,
    };
};