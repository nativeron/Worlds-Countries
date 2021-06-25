import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Nav from './components/nav/nav';
import { Home } from './components/home/home';
import detail from './components/detail/detail';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Errorcomp from './components/error/error';
import Errorcompo from './components/errorr/errorr';


function App() {

  const [numpag, setNumpag] = useState(1)
const [input, setInput] = useState('')

  return (
    <div className="App">
     
      <Router>
      <Route exact path='/' component={Landing}/>

      <Route path= '/countries' component={Nav}/>
      <Route exact path= '/countries'>
         <Home input={input} setInput={setInput} numpag={numpag} setNumpag={setNumpag}/> 
      </Route>
      
      <Route path= '/countries/:id' component={detail} />
      
      <Route path= '/activity' component={Nav}/>
      <Route path='/activity' component={Form} />
      <Route path='/activity' component={Footer} />
      
      <Route path= '/about' component={Nav}/>

      <Route path= '/error' component={Errorcomp}/>
      <Route path= '/errorr' component={Errorcompo}/>

      </Router>
      
    </div>
  );
}

export default App;
