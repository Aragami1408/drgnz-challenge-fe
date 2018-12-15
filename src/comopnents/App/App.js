import React, { Component } from 'react';
import './App.scss';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import Header from '../Header';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
