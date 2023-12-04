import React, { useContext } from 'react';
import AppContext from '../state/AppContext';
import CalorieWatcher from './CalorieWatcher';

/**
 * A Header bar which displays the current day, the calories consumed so far and the target if set
 * @constructor
 */
const AppHeader: React.FC = (): JSX.Element => {
  // fetch the global app state
  const { appState } = useContext(AppContext);

  return (
    <div className='rounded-t-lg m-4 bg-base-100 text-2xl'>
      <h1>Calorie Tracker</h1>
      <CalorieWatcher consumed={appState.totalCalories} target={appState.targetCalories} />
    </div>
  );
};

export default AppHeader;
