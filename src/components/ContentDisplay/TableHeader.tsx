import styled from "styled-components";
import React from "react";
import {PrimaryButton} from "../StyledComponents/PrimaryButton";

const Li = styled.li`
      list-style-type: none;
      padding: 7px 2px;
    `;

const Span = styled.span`
  color: white;
  background: rgba(0,0,30,0.7);;
  border-radius: 10px;
  height: 40px;
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
  visibility: hidden;
`;

const space = "  ";

/**
 * Displays a table like header for {@link CalorieEntry} data
 * @constructor
 */
export const TableHeader: React.FC = () => {
    return(
        <Li key={-1}>
            <Span>
                <Item>Food</Item>
                <Calories>Calories</Calories>
                <TimeAdded>Time</TimeAdded>
                <RemoveButton>{space}</RemoveButton>
            </Span>
        </Li>
    );
};