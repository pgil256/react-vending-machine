import React from 'react';
import VendingMachine from './components/VendingMachine'
import { BrowserRouter, Route } from 'react-router-dom';
import Takis from './components/Takis';
import Snickers from './components/Snickers';
import Sprite from './components/Sprite';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/takis">
          <Takis />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/sprite">
          <Sprite />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
