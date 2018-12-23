import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextArrow = ({ onClick }) => (
  <div
    className="next-arrow"
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon="chevron-right"
      color="#fff"
      style={{
        marginLeft: 0,
      }}
    />
  </div>
);

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  onClick: () => null,
};

export default NextArrow;
