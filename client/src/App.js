import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import Landing from './components/landing/landing';


function App() {
  return (
    <div className="App">
     
        <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path= '/d' component={Landing}/>
      </Switch>
      
    </div>
  );
}

export default App;
