import React from 'react';
import PropTypes from 'prop-types';

const TagItem = ({ children, size }) => (
  <div className={`tag ${size}`}>
    {children}
  </div>
);

TagItem.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};

TagItem.defaultProps = {
  size: 'md',
};

export default TagItem;
