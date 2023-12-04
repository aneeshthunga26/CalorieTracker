import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import AppContext from './state/AppContext';
import { useAppState } from './hooks/useAppState';
// import CalculateTargetDisplay from "./components/CalorieTargetDisplay/CalculateTargetDiplay";

/**
 * The top level App component
 */
function App():JSX.Element {
  // the initial context
  const appContext = useAppState({
    items: [],
    totalCalories: undefined,
    targetCalories: undefined,
  });

  return (
    <Router>
      <section className='App h-screen flex items-center justify-center'>
        <AppContext.Provider value={appContext}>
          <div className='card card-bordered bg-base-100 text-center w-screen xl:w-5/12 lg:w-5/12 md:w-5/12 sm:w-screen'>
            <AppHeader />
            <Routes>
              <Route path='/' element={<ContentDisplay />} />
              {/* <Route exact={true} path="/calculate-target"> */}
              {/*    <CalculateTargetDisplay/> */}
              {/* </Route> */}
            </Routes>
          </div>
        </AppContext.Provider>
      </section>
    </Router>
  );
}

export default App;
