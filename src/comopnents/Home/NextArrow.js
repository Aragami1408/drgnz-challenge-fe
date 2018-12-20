import React from 'react';
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
)

export default NextArrow;
