import React from 'react';
import PropsExampleMainPanel from './propsexample/mainpanel.js';
import StateExampleMainPanel from './stateexample/mainpanel.js';
import ArithmeticMainPanel from './stateexample/arithmetic/arithemetic.js';
import MainPanel from './reloadcomponent/index.js';
import { Doughnut } from 'react-chartjs-2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboardshiva">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <PropsExampleMainPanel />
            </Route>
            <Route path="/about">
              <StateExampleMainPanel />
            </Route>
            <Route path="/dashboard">
              <ArithmeticMainPanel />
            </Route>
            <Route path="/dashboardshiva">
              <ArithmeticMainPanel />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App;
