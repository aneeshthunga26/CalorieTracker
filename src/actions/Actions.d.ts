import {CalorieEntry} from "../types/typedef";

/**
 * A set of interface and type declaration for all the actions used in the project
 */

export interface IAlterCalorieAction {
    readonly type: "add-calorie" | "subtract-calorie";
    payload: number;
}

export interface ICalorieTargetAction {
    readonly type: "set-target";
    payload: number;
}

interface IAddEntryAction {
    readonly type: "add-entry";
    payload: {
        entry: CalorieEntry,
        calorieAction: IAlterCalorieAction
    };
}

interface IRemoveEntryAction {
    readonly type: "remove-entry";
    payload: {
        id: string,
        calorieAction: IAlterCalorieAction
    };
}

export type EntryAction = IAddEntryAction | IRemoveEntryAction;

export type GlobalAction = EntryAction | IAlterCalorieAction | ICalorieTargetAction;