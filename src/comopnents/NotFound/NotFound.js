import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div id="empty">
    <div className="empty-msg">
      Oops! Wrong Way
    </div>
    <Link to="/" className="empty-link">
      Return challenge
    </Link>
  </div>
);

export default NotFound;
