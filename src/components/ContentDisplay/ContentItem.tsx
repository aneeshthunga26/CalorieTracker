import React, { useContext } from 'react';
import { CalorieEntry } from '../../types/typedef';
import AppContext from '../../state/AppContext';

interface Props {
  value: CalorieEntry;
  index: number;
}

/**
 * Returns the given text with the first character in Uppercase
 * @param input: string
 */
function toSentenceCase(input: string): string {
  return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
}

/**
 * Renders a {@link CalorieEntry} item
 * @param props: pass in a {@link Props} with {@link CalorieEntry} and an index
 */
const ContentItem: React.FC<Props> = props => {
  // fetch the dispatcher
  const { dispatch } = useContext(AppContext);

  /**
   * handles the remove action by dispatching a {@link IAlterCalorieAction}
   */
  function handleClick() {
    dispatch({
      type: 'remove-entry',
      payload: {
        id: props.value.id,
        calorieAction: {
          type: 'subtract-calorie',
          payload: props.value.calories,
        },
      },
    });
  }

  return (
    <tr className={`${props.index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`} key={props.value.id}>
      <td>{toSentenceCase(props.value.item)}</td>
      <td>{props.value.calories}</td>
      <td>{`${props.value.time.getHours()}:${props.value.time.getMinutes()}`}</td>
      <td className='btn btn-circle btn-outline btn-sm mt-2' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></td>
    </tr>
  );
};

export default ContentItem;
