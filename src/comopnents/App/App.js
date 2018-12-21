import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSignOutAlt,
  faHome,
  faUserCircle,
  faQuestionCircle,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { setHistory } from '../../common/history';
import './App.scss';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import Footer from '../Footer';
import NotFound from '../NotFound';
import About from '../About';
import Account from '../Account';
import AddLevel from '../AddLevel';
import Level from '../Level';
import Stage from '../Stage';
import Ranking from '../Ranking';
import AuthRoute from '../AuthRoute';
import NotAuthRoute from '../NotAuthRoute';

library.add(
  fab,
  faSignOutAlt,
  faHome,
  faUserCircle,
  faQuestionCircle,
  faChevronRight,
  faChevronLeft,
);

class App extends Component {
  static propTypes = {
    IAmDrgnz: PropTypes.bool,
  }

  static defaultProps = {
    IAmDrgnz: false,
  }

  constructor(props) {
    super(props);
    this.router = React.createRef();
  }

  componentDidMount() {
    setHistory(this.router.current.history);
  }

  render() {
    const { IAmDrgnz } = this.props;
    return (
      <Router ref={this.router}>
        <div className="App">
          <AuthRoute exact path="/" component={Home} />
          <NotAuthRoute exact path="/login" component={Login} />
          <NotAuthRoute exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <AuthRoute exact path="/account" component={Account} />
          <AuthRoute exact path="/rank" component={Ranking} />
          <AuthRoute exact path="/level/:id" component={Level} />
          <AuthRoute exact path="/stage/:id" component={Stage} />
          {IAmDrgnz && <AuthRoute exact path="/admin/add-level" component={AddLevel} />}
          <Route component={NotFound} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
