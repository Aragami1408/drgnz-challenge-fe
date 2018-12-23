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
import { setHistory, setRouter } from '../../common/history';
import './App.scss';
import { SET_TOP_HISTORY_COMPLETE } from '../../reducers';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import Home from '../../containers/Home';
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
    dispatch: PropTypes.func.isRequired,
    getStages: PropTypes.func.isRequired,
    clearTransaction: PropTypes.func.isRequired,
    authenticated: PropTypes.bool,
    requiresDownload: PropTypes.bool,
    isDownloadingStage: PropTypes.bool,
    stageErrorMsg: PropTypes.string,
  }

  static defaultProps = {
    IAmDrgnz: false,
    authenticated: false,
    requiresDownload: false,
    isDownloadingStage: false,
    stageErrorMsg: '',
  }

  componentDidMount() {
    const { clearTransaction } = this.props;
    clearTransaction();
  }

  componentDidUpdate = () => {
    const {
      getStages, authenticated, isDownloadingStage,
      requiresDownload, stageErrorMsg,
    } = this.props;
    if (stageErrorMsg || isDownloadingStage) return;
    if (authenticated && requiresDownload) {
      getStages();
      console.log('Downloading stages');
    }
  }

  renderLoading = () => (
    <div className="loading">
      <div className="app-loader" />
      <div>Loading</div>
    </div>
  )

  renderError = errorMsg => (
    <div className="app-error">
      <div className="app-error-title">Error</div>
      <div className="app-error-message">
        {errorMsg}
      </div>
    </div>
  )

  renderRouter = () => {
    const { IAmDrgnz, dispatch, authenticated } = this.props;

    return (
      <Router ref={(router) => {
        if (!router) return;
        setHistory(router.history);
        setRouter(router);
        dispatch({ type: SET_TOP_HISTORY_COMPLETE });
      }}
      >
        <div className="App">
          <AuthRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <NotAuthRoute exact path="/login" component={Login} authenticated={authenticated} />
          <NotAuthRoute exact path="/signup" component={SignUp} authenticated={authenticated} />
          <Route exact path="/about" component={About} />
          <AuthRoute exact path="/account" component={Account} authenticated={authenticated} />
          <AuthRoute exact path="/rank" component={Ranking} authenticated={authenticated} />
          <AuthRoute exact path="/level/:id" component={Level} authenticated={authenticated} />
          <AuthRoute exact path="/stage/:id" component={Stage} authenticated={authenticated} />
          {IAmDrgnz && <AuthRoute exact path="/admin/add-level" component={AddLevel} authenticated={authenticated} />}
          <Route component={NotFound} />
          <Footer />
        </div>
      </Router>
    );
  }

  render() {
    const { requiresDownload, isDownloadingStage, stageErrorMsg } = this.props;
    if (requiresDownload && stageErrorMsg) return this.renderError(stageErrorMsg);
    if (requiresDownload && isDownloadingStage) return this.renderLoading();
    return this.renderRouter();
  }
}

export default App;
