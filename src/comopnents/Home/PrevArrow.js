import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow"
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon="chevron-left"
      color="#fff"
      style={{
        marginLeft: -3,
      }}
    />
  </div>
);

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PrevArrow;
