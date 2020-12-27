import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Home } from '../Home/Home'
import { Essay } from '../Essay/Essay'
import { Switch, Route } from "react-router-dom"
import 'styles/index.scss'

const initialState = {
  essayId: 0
}

export const reducer = (state = initialState, action:any) => {
  if (action.type === 'UPDATE_ESSAY') {
      return {
        ...state,
        essayId: action.payload
      };
  }
  return state
}

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store} >
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/essay' component={Essay} />
      </Switch>
    </Provider>
    
  );
}

export default App;
