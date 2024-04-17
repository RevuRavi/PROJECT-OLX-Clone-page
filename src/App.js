import React from 'react';
import './App.css';
import { BrowserRouter,Route} from 'react-router-dom'
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
     
        <Route exact path='/'> <Home /> </Route>
        <Route path='/signup'> <Signup/> </Route>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
