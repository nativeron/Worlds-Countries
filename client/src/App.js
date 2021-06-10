import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import Landing from './components/landing/landing';
import Nav from './components/nav/nav';
import Planets from './components/planets/planets';
import Search from './components/search/search';
import { Pagination } from './components/pagination/pagination';
import detail from './components/detail/detail';


function App() {
  return (
    <div className="App">
     
        
      <Route exact path='/' component={Landing}/>

      <Route path= '/countries' component={Nav}/>
      <Route path= '/countries' component={Planets}/>
      <Route path= '/countries' component={Search}/>
      <Route exact path= '/countries' component={Pagination}/>

      <Route path= '/activity' component={Nav}/>

      <Route path= '/about' component={Nav}/>

      <Route path= '/countries/:id' component={detail} />
      
    </div>
  );
}

export default App;
