import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Nav from './component/Nav';
import Posts from './pages/Posts';
import SignIn from './pages/SignIn';
import LeftDrawer from './component/LeftDrawer';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <LeftDrawer></LeftDrawer>
      <Route path="/" exact component = {Main} ></Route>
      <Route path="/mypage" component = {MyPage} ></Route>
      <Route path="/posts" component = {Posts} ></Route>
      <Route path="/signin" component = {SignIn} ></Route>
    </Router>
  )
}

export default App;
