import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
);

AuthRoute.propTypes = {
  authenticated: PropTypes.bool,
};

AuthRoute.defaultProps = {
  authenticated: false,
};

export default AuthRoute;
