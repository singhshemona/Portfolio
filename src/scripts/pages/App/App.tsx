import React from 'react';
import { Home } from '../Home/Home';
import { Essay } from '../Essay/Essay';
import { Switch, Route } from "react-router-dom";
import 'styles/index.scss';

const App = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/essay' component={Essay} />
    </Switch>
  );
}

export default App;
