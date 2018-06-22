import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Login from './Login';
import Jokes from './Jokes';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
          <Route exact path = "/" component={Login}/>
          <Route path ="/login" component={Login}/>
          <Route path ="/jokes" component={Jokes}/>
          <Route path ="/register" component={Register}/>
        </Switch>
      </div>
    );
  }
}

export default App;
