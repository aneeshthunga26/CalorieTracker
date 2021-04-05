import React from 'react';
import AppHeader from './components/AppHeader';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import AppContext from './state/AppContext';
import {useAppState} from "./hooks/useAppState";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import CalculateTargetDisplay from "./components/CalorieTargetDisplay/CalculateTargetDiplay";
import styled from "styled-components";

/**
 * A flex box witch holds the all the app components
 */
const AppSection = styled.section`
  height: 100vh;
  display: flex;
  padding: 0 3%;
  align-items: center;
  justify-content: center;
`;

/**
 * The main display area, shows up as a card with a blurred background
 */
const AppContent = styled.div`
  width: 90vh;
  border-radius: 1em;
  padding: 0.5% 0.5%;
  text-align: center;
  background:rgba(255,255,255,0.4);
  backdrop-filter: blur(20px);
`;

/**
 * The top level App component
 */
function App() {
    //the initial context
    const appContext = useAppState({
        items: [],
        totalCalories: undefined,
        targetCalories: undefined,
    });

  return (
      <Router>
         <AppSection className="App">
            <AppContext.Provider value={appContext}>
                <AppContent>
                    <AppHeader/>
                        <Switch>
                            <Route exact={true} path="/">
                                <ContentDisplay/>
                            </Route>
                            {/*<Route exact={true} path="/calculate-target">*/}
                            {/*    <CalculateTargetDisplay/>*/}
                            {/*</Route>*/}
                        </Switch>
                </AppContent>
            </AppContext.Provider>
         </AppSection>
      </Router>
  );
}

export default App;
