import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const renderWhiteFooter = pathname => (/^\/(level|stage)\/.+$/.test(pathname) ? 'white' : '');

export const Footer = ({ location }) => (
  <div
    id="footer"
    className={renderWhiteFooter(location.pathname)}
  >
    <Link to="/about">
      From
      <span>Drgnz</span>
      with
      <img src="/images/heart.png" alt="heart" />
    </Link>
  </div>
);

Footer.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Footer);
