import React, { useContext } from 'react';
import styled from 'styled-components';
import { CalorieEntry } from '../../types/typedef';
import AppContext from '../../state/AppContext';
import { PrimaryButton } from '../StyledComponents/PrimaryButton';

interface Props {
  value: CalorieEntry;
  index: number;
}

interface SpanProps {
  index: number;
}

const Li = styled.li`
  list-style-type: none;
  padding: 2px 2px;
`;

const Span = styled.span`
  background: ${(props: SpanProps) => (props.index % 2 === 0 ? 'rgba(130,130,160,0.3)' : 'rgba(255,255,255,0.3)')};
  border-radius: 5px;
  height: 50px;
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Item = styled.label`
  padding-left: 10px;
  flex: 3;
`;

const TimeAdded = styled.label`
  flex: 2;
`;

const Calories = styled.label`
  flex: 2;
`;

const RemoveButton = styled(PrimaryButton)`
  flex: 1;
`;

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
    <Li key={props.value.id}>
      <Span index={props.index}>
        <Item>{toSentenceCase(props.value.item)}</Item>
        <Calories>{props.value.calories}</Calories>
        <TimeAdded>{`${props.value.time.getHours()}:${props.value.time.getMinutes()}`}</TimeAdded>
        <RemoveButton onClick={handleClick}>Remove</RemoveButton>
      </Span>
    </Li>
  );
};

export default ContentItem;
