import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'


import {Route, Switch} from 'react-router'
import Nav from './components/Nav';
import Main from './pages/Main';
import Login from './pages/Login';
import About from './pages/About';




const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
      </Switch>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
