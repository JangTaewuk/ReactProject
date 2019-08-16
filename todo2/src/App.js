import React,{Component} from 'react';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Login from './pages/Login';
import Todo from './pages/Todo';


export default class App extends Component{

  constructor(){
    super()
    this.state = {user:null}
  }

  doLogin = (userObj) =>{
    console.log(userObj)
    this.setState({user:userObj})
  }

  render(){
    return(
      <Router>
      <div className="APP">
        <nav>
          <ul>
            <li><Link to="/">Main</Link></li>

            {this.state.user != null?
            <li><Link to="/mypage">MyPage</Link></li> 
            : <div></div>}            

            <li><Link to="/login">Login</Link></li>
            <li><Link to="/todo">todo</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" exact render={()=> 
          this.state.user != null ? <MyPage></MyPage> 
          : <Redirect to="/login"></Redirect>}/>

        <Route path="/login" exact component={ () => <Login doLogin={this.doLogin} />}/>
        
        <Route path="/todo" component={Todo}/>
      </div>
      </Router>
    )
  }
}


