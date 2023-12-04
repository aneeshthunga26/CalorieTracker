import React, { useContext } from 'react';
import AppContext from '../../state/AppContext';
import ContentInputForm from './ContentInputForm';
import ContentItem from './ContentItem';
import { TableHeader } from './TableHeader';


/**
 * The main content display area which contains the calorie entries list and also a form to add new entries
 * and set target calories.
 */
const ContentDisplay: React.FC = () => {
  // get the global state
  const { appState } = useContext(AppContext);

  return (
    <div className=''>
      <table className='table'>
        {appState.items.length > 0 && <TableHeader />}
        {appState.items.map((entry, index) => (
          <ContentItem key={index} value={entry} index={index} />
        ))}
      </table>
      <ContentInputForm />
    </div>
  );
};

export default ContentDisplay;
