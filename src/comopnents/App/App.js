import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import './App.scss';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import Footer from '../Footer';
import NotFound from '../NotFound';
import About from '../About';
import Account from '../Account';

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/account" component={Account} />
          <Route component={NotFound} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
