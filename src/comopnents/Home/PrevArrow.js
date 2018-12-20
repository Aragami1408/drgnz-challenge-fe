import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow"
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon="chevron-left"
      color="#fff"
      size="16px"
      style={{
        marginLeft: -3,
      }}
    />
  </div>
)

export default PrevArrow;
