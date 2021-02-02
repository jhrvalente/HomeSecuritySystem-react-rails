import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sensors from './pages/Sensors';
import History from './pages/History';
import Options from './pages/Options';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/sensors" exact>
          <Sensors/>
        </Route>
        <Route path="/history" exact>
          <History/>
        </Route>
        <Route path="/options" exact>
          <Options/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
