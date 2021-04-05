import React, { useContext } from 'react';
import AppContext from '../state/AppContext';
import CalorieWatcher from './CalorieWatcher';
import styled from "styled-components";

const Header = styled.header`
    border-radius: 15px;
    background:rgba(0,0,30,0.7);
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

/**
 * A Header bar which displays the current day, the calories consumed so far and the target if set
 * @constructor
 */
const AppHeader: React.FC = ():JSX.Element => {
    //fetch the global app state
    const {appState} = useContext(AppContext);
    
    return (
        <Header className="App-header">
            <div>
                Calorie Tracker
            </div>
            <CalorieWatcher consumed={appState.totalCalories} target={appState.targetCalories} />
        </Header>
    );
}

export default AppHeader;
