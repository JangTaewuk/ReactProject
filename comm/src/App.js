import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './views/Main';
import MyPage from './views/MyPage';
import TodoList from './views/Todo/TodoList';


export default class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/todoList/1">TodoList</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/todoList/:page" component={TodoList} />
      </div>
      </Router>
    )
  }

}
