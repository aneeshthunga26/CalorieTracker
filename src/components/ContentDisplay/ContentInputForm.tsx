import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import AppContext from '../../state/AppContext';
import { CalorieEntry } from '../../types/typedef';
import { IAlterCalorieAction } from '../../actions/Actions';
import { TextInput } from '../StyledComponents/TextInput';
import { PrimaryButton } from '../StyledComponents/PrimaryButton';

/**
 * The calorie entry input form. Allows the users to add new calorie entries and also to edit the target calories.
 */
const ContentInputForm: React.FC = () => {
  // fetch the dispatcher
  const { dispatch } = useContext(AppContext);

  // local states to handle the form inputs
  const [item, setItem] = useState<string | undefined>(undefined);
  const [calories, setCalories] = useState<number | undefined>(undefined);
  const [targetCalories, setTargetCalories] = useState<number | undefined>(undefined);

  /**
   * Form submit handler: dispatches {@link IAddEntryAction} and/or {@link  ICalorieTargetAction}
   * based on the user input
   * @param e: the submission event
   */
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    // if the item and calorie fields were entered dispatch a IAddEntryAction
    if (calories !== undefined && item !== undefined) {
      const actionType = 'add-entry';
      const calorieEntry: CalorieEntry = {
        id: uuid(),
        time: new Date(),
        calories,
        item,
      };
      const addCalorieAction: IAlterCalorieAction = {
        type: 'add-calorie',
        payload: calories,
      };
      dispatch({
        type: actionType,
        payload: {
          entry: calorieEntry,
          calorieAction: addCalorieAction,
        },
      });
      // reset input fields to empty
      setCalories(undefined);
      setItem(undefined);
    }
    // if target calories are entered, dispatch a ICalorieTargetAction
    if (targetCalories !== undefined) {
      dispatch({
        type: 'set-target',
        payload: targetCalories,
      });
      // reset the input field to empty
      setTargetCalories(undefined);
    }
  }

  // handle food entry
  function itemChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.currentTarget.value);
  }

  // handle calorie entry: only accepts numbers
  function calorieChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputCalorie: number = parseInt(e.currentTarget.value);
    setCalories(inputCalorie);
  }

  // handles target calories: only accepts numbers
  function targetCalorieChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target: number = parseInt(e.currentTarget.value);
    setTargetCalories(target);
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <TextInput placeholder='Enter Food Item' value={item || ''} onChange={itemChangeHandler} />
        <TextInput placeholder='Enter Calories' value={calories ? `${calories}` : ''} onChange={calorieChangeHandler} />
        <TextInput
          placeholder='Enter Target (KCals)'
          value={targetCalories ? `${targetCalories}` : ''}
          onChange={targetCalorieChangeHandler}
        />
      </span>
      <div>
        <PrimaryButton>+</PrimaryButton>
      </div>
    </form>
  );
};
export default ContentInputForm;
