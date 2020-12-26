import React, { createContext, useState } from 'react';
import { Home } from '../Home/Home';
import { Essay } from '../Essay/Essay';
import { Switch, Route } from "react-router-dom";
import 'styles/index.scss';

export const ID = createContext({
  number: 0,
  setNumber: () => {}
})

const App = () => {
  // const [number, setNumber] = useState({
  //   number: 0,
  //   setNumber: () => {}
  // })
  
  return (
    // <ID.Provider value={ ID } >
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/essay' component={Essay} />
      </Switch>
    // </ID.Provider>
    
  );
}

export default App;
