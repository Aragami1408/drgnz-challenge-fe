import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export const NotAuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
);

NotAuthRoute.propTypes = {
  authenticated: PropTypes.bool,
};

NotAuthRoute.defaultProps = {
  authenticated: false,
};

export default NotAuthRoute;
