import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './pages/Main';
import TList from './pages/TList';
import TRegister from './pages/TRegister';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Route path="/" exact component={Main}></Route>
      <Route path="/register" component={TRegister}></Route>
      <Route path="/list/:page" component={TList}></Route>
    </Router>
  );
}

export default App;
