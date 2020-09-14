import React from 'react';
import Home from '../Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'styles/index.scss';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
