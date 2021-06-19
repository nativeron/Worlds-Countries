import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Nav from './components/nav/nav';
//import Planets from './components/planets/planets';

import { Home } from './components/home/home';
import detail from './components/detail/detail';
import Form from './components/form/form';


function App() {

const [input, setInput] = useState('')

  return (
    <div className="App">
     
      <Router>
      <Route exact path='/' component={Landing}/>

      <Route path= '/countries' component={Nav}/>
      <Route exact path= '/countries'>
         <Home input={input} setInput={setInput}/> 
      </Route>
      
      <Route path= '/countries/:id' component={detail} />
      
      <Route path= '/activity' component={Nav}/>
      <Route path='/activity' component={Form} />
      
      <Route path= '/about' component={Nav}/>

      </Router>
      
    </div>
  );
}

export default App;
