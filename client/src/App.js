import './App.css';
import React, { useState } from 'react';
import {Route} from "react-router-dom";
import Landing from './components/landing/landing';
import Nav from './components/nav/nav';
import Planets from './components/planets/planets';

import { Pagination } from './components/pagination/pagination';
import detail from './components/detail/detail';
import Form from './components/form/form';


function App() {

const [input, setInput] = useState('')

  return (
    <div className="App">
     
        
      <Route exact path='/' component={Landing}/>

      <Route path= '/countries' component={Nav}/>
      <Route path= '/countries' component={Planets}/>
      <Route exact path= '/countries'> <Pagination input={input} setInput={setInput}/> </Route>

      <Route path= '/activity' component={Nav}/>
      <Route path='/activity' component={Form} />
      
      <Route path= '/about' component={Nav}/>

      <Route path= '/countries/:id' component={detail} />

      
      
    </div>
  );
}

export default App;
