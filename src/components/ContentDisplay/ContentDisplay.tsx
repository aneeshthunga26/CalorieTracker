import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../state/AppContext';
import ContentInputForm from './ContentInputForm';
import ContentItem from './ContentItem';
import { TableHeader } from './TableHeader';
// import {PrimaryButton} from "../StyledComponents/PrimaryButton";

const Ul = styled.ul`
  padding-left: 0;
`;

/**
 * The main content display area which contains the calorie entries list and also a form to add new entries
 * and set target calories.
 */
const ContentDisplay: React.FC = () => {
  // get the global state
  const { appState } = useContext(AppContext);

  return (
    <div>
      <Ul>
        {appState.items.length > 0 && <TableHeader />}
        {appState.items.map((entry, index) => (
          <ContentItem key={index} value={entry} index={index} />
        ))}
      </Ul>
      <ContentInputForm />
      {/* <Link to="/calculate-target"> */}
      {/*    <PrimaryButton>Calculate Target</PrimaryButton> */}
      {/* </Link> */}
    </div>
  );
};

export default ContentDisplay;
