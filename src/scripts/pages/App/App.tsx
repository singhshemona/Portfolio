import React from 'react'
import { Home } from '../Home/Home'
import { Essay } from '../Essay/Essay'
import { Switch, Route } from "react-router-dom"
import 'styles/index.scss'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/:slug" component={Essay} />
    </Switch>
  );
}

export default App;
